#!/usr/bin/env python3
"""SM-027: GitLab says the issue behind every security fix is made public on its issue tracker a fixed time after the
release that patched it (30 days in security patch notes from 7 January to 24 June 2026, 90 days from 8 July 2026 and on
its disclosure page).
Inputs (exhibits/):
  nvd_cves_source_cve@gitlab.com_*.json   every CVE published with GitLab as the CNA (NVD API, sourceIdentifier=cve@gitlab.com)
  probe_mac_*.csv, probe_hetzner_*.csv    anonymous GET https://gitlab.com/api/v4/projects/278964/issues/<iid>
                                          (cve, cve published, iid, http status, probe time); same list from two networks
  graphql_workitem_check_*.csv            anonymous GraphQL workItem lookup for hidden 2026 issues (null = not visible)
  visibility_lag_*.csv                    for public 2025/2026 issues: time of the "made the item visible to everyone" note
  patch_notes_2026/*.html                 GitLab's 2026 patch release notes ("On <date>, we released ...")
One row per gitlab-org/gitlab issue. An issue cited by more than one CVE is dated by its oldest CVE.
Fix date = CVE publication time. Most 2026 CVEs are published on the release day or the day after; the rest later, never
earlier than the release they belong to, so the CVE date can only make an issue look younger than it is.
An issue counts once it is more than 90 days (90 x 24 h) old at the moment it was probed.
Uses the newest dated file of each kind in exhibits/.
Usage: python3 -I analyze.py  -> summary.json, rows.csv"""
import csv, datetime as dt, glob, html, json, re, statistics as st, collections

E = "exhibits/"
SWITCH = dt.datetime(2026, 7, 1)          # last 30-day note: 24 Jun; first 90-day note: 8 Jul; no release in between

def P(s): return dt.datetime.fromisoformat(s.replace("Z", ""))

def latest(pat): return sorted(glob.glob(E + pat))[-1]      # file names carry the ISO date; newest wins
nvd = json.load(open(latest("nvd_cves_source_cve@gitlab.com_*.json")))["vulnerabilities"]
status = collections.Counter(v["cve"].get("vulnStatus") for v in nvd)
by_pub_year = collections.defaultdict(collections.Counter)
for v in nvd:
    by_pub_year[v["cve"]["published"][:4]][v["cve"].get("vulnStatus")] += 1

def probe(f):
    out = {}
    for cve, pub, iid, code, ts in csv.reader(open(f)):
        r = out.get(iid)
        if r is None or pub < r["pub"]:
            out[iid] = {"cve": cve, "pub": pub, "code": code, "ts": ts}
    return out
PROBE_FILE = latest("probe_mac_*.csv")
PROBE_DATE = dt.date.fromisoformat(re.search(r"(\d{4}-\d{2}-\d{2})", PROBE_FILE).group(1))
mac, hz = probe(PROBE_FILE), probe(latest("probe_hetzner_*.csv"))
api = {r[2]: r[3] for r in csv.reader(open(latest("graphql_workitem_check_*.csv"))) if r[3] in ("null", "VISIBLE")}

releases = set()
for f in glob.glob(E + "patch_notes_2026/patch-release-*.html"):
    b = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", open(f, errors="replace").read())))
    m = re.search(r"On (\w+ \d{1,2}, 2026), we released", b)
    if m: releases.add(dt.datetime.strptime(m.group(1), "%B %d, %Y").date())

rows = []
for iid in sorted(set(mac) | set(hz), key=int):
    a, b = mac.get(iid), hz.get(iid)
    base = min((x for x in (a, b) if x), key=lambda x: x["pub"])
    codes = {x["code"] for x in (a, b) if x}
    state = "hidden" if "404" in codes and "200" not in codes else "public" if "200" in codes and "404" not in codes else "conflict"
    pub = P(base["pub"])
    probed = min(P(x["ts"]) for x in (a, b) if x)
    age_h = (probed - pub).total_seconds() / 3600
    rel = max((d for d in releases if d <= pub.date()), default=None) if pub.year == 2026 else None
    rows.append(dict(iid=iid, cve=base["cve"], published=base["pub"][:19], year=pub.year, probed=probed.isoformat(),
                     age_days=round(age_h / 24, 2), past_90=age_h > 90 * 24, state=state,
                     probe_mac=a["code"] if a else "", probe_hetzner=b["code"] if b else "", api=api.get(iid, ""),
                     release=rel.isoformat() if rel else "", cve_after_release_days=(pub.date() - rel).days if rel else "",
                     rule_at_release=(30 if pub < SWITCH else 90) if pub.year == 2026 else ""))

def share(rs):
    h = sum(r["state"] == "hidden" for r in rs)
    return {"n": len(rs), "hidden": h, "pct": round(100 * h / len(rs), 1) if rs else None}

ok = [r for r in rows if r["state"] != "conflict"]
y26 = [r for r in ok if r["year"] == 2026]
due26 = [r for r in y26 if r["past_90"]]
hidden_due26 = [r for r in due26 if r["state"] == "hidden"]
thirty = [r for r in y26 if r["rule_at_release"] == 30]
lag_rel = collections.Counter(r["cve_after_release_days"] for r in rows if r["year"] == 2026 and r["release"])
youngest_30 = min((PROBE_DATE - dt.date.fromisoformat(r["release"])).days
                  for r in thirty if r["state"] == "hidden")

oldest = {r["iid"]: dt.datetime.fromisoformat(r["published"]) for r in rows}
lag, no_note, lag_err = [], 0, 0
for r in csv.reader(open(latest("visibility_lag_*.csv"))):
    if len(r) < 6: continue
    if r[5] == "ERR": lag_err += 1; continue
    if r[3] == "": no_note += 1; continue
    d0 = oldest.get(r[2], dt.datetime.fromisoformat(r[1]))    # an issue cited by two CVEs is dated by the older one
    lag.append((str(d0.year), (dt.datetime.fromisoformat(r[3].replace("Z", "")) - d0).days))
def lagsum(y):
    L = sorted(v for yy, v in lag if yy == y)
    return {"n": len(L), "median_days": st.median(L), "negative": sum(v < 0 for v in L)} if L else {"n": 0}

summary = {
    "nvd_cves": len(nvd), "nvd_status": dict(status),
    "nvd_2026": dict(by_pub_year["2026"]), "nvd_first_published": min(v["cve"]["published"] for v in nvd),
    "cve_issue_pairs": sum(1 for _ in csv.reader(open(latest("probe_hetzner_*.csv")))),
    "issues": len(rows), "issues_2026": len(y26), "conflicts": [(r["iid"], r["cve"]) for r in rows if r["state"] == "conflict"],
    "one_network_only": [(r["iid"], r["cve"], r["probe_mac"], r["probe_hetzner"]) for r in rows if "" in (r["probe_mac"], r["probe_hetzner"]) or r["probe_mac"] != r["probe_hetzner"]],
    "headline_2026_past_90": share(due26),
    "latest_cve_counted": max(r["published"] for r in due26),
    "rule_30_releases": share([r for r in thirty if r["past_90"]]),
    "rule_90_releases_past_90": share([r for r in y26 if r["rule_at_release"] == 90 and r["past_90"]]),
    "youngest_hidden_30day_release_days_at_probe": youngest_30,
    "api_check_hidden_2026_past_90": dict(collections.Counter(r["api"] or "unchecked" for r in hidden_due26)),
    "by_year_past_90": {y: share([r for r in ok if r["year"] == y and r["past_90"]]) for y in range(2020, 2027)},
    "by_month_2026_past_90": {m: share([r for r in due26 if int(r["published"][5:7]) == m]) for m in range(1, 13) if any(int(r["published"][5:7]) == m for r in due26)},
    "release_dates_2026": sorted(d.isoformat() for d in releases),
    "cve_days_after_release_2026": dict(sorted(lag_rel.items())),
    "visibility_lag": {"2024": lagsum("2024"), "2025": lagsum("2025"), "2026": lagsum("2026"), "rate_limited": lag_err, "public_without_note": no_note},
    "probe_date": PROBE_DATE.isoformat(),
    # the newest release counted has only just passed 90 days; show the count without it
    "latest_release_counted": max(r["published"] for r in due26)[:10],
    "headline_without_latest_release": share([r for r in due26 if r["published"][:10] < max(x["published"] for x in due26)[:10]]),
}
json.dump(summary, open("summary.json", "w"), indent=1, default=str)
with open("rows.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
print(json.dumps({k: v for k, v in summary.items() if k not in ("release_dates_2026",)}, indent=1, default=str))
