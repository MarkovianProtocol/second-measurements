#!/usr/bin/env python3
"""SM-023: every number on the page, from the census, the tracker dates and the releases list.
python3 -I analyze.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json known_2026-10-20.json crit_2026-10-20.json exhibits/ubuntu_releases_2026-10-20.json uct/ fixes_2026-10-20.json summary_2026-10-20.json"""
import json, subprocess, sys, statistics as st
from datetime import datetime, timezone
def P(s):   # API timestamps without an offset are UTC; never read them as the local time of the machine running this
    t = datetime.fromisoformat(s.replace("Z", "+00:00"))
    return t.replace(tzinfo=timezone.utc) if t.tzinfo is None else t.astimezone(timezone.utc)
RAW, KNOWN, CRIT, REL, UCT, FIXES, OUT = sys.argv[1:8]
R = json.load(open(RAW)); raw = {c["id"]: c for c in R["cves"]}; read_at = P(R["read_at"])
K = {k["cve"]: k for k in json.load(open(KNOWN))}; CR = {r["cve"]: r for r in json.load(open(CRIT))}; F = {f["cve"]: f for f in json.load(open(FIXES))}
def fix_at(i):   # first fix = earlier of the first USN and the first archive publication of a fixed version (fix_dates.py)
    t = [x for x in (F[i]["first_usn_at"], F[i]["first_archive_fix_at"]) if x]
    return min(P(x) for x in t) if t else None

def reason(c):
    r = [(n.get("note") or "").replace("Priority reason:", "").strip() for n in (c.get("notes") or []) if "Priority reason" in (n.get("note") or "")]
    return r[0] if r else ""
is_kernel = lambda c: any(p["name"].startswith("linux") for p in c["packages"])
is_cvss = lambda c: "cvss" in reason(c).lower()

def lag(i, start="known"):
    f = fix_at(i)
    if not f: return None
    if start == "critical":
        if not CR[i]["critical_at"]: return None
        t0 = P(CR[i]["critical_at"])
    else:
        t0 = P(K[i]["known_at"]) if start == "known" else datetime.fromisoformat(raw[i]["published"]).replace(tzinfo=timezone.utc)
    return (f - t0).total_seconds() / 86400

def block(ids, start="critical"):
    a = [x for x in (lag(i, start) for i in ids) if x is not None]; d = sorted(x for x in a if x >= 0)   # negative = fixed before the clock started
    return {"n": len(ids), "fixed": len(a), "fixed_before_start": len(a) - len(d), "measured": len(d), "within_1d": sum(x <= 1 for x in d), "within_7d": sum(x <= 7 for x in d),
            "median_d": round(st.median(d), 1) if d else None, "mean_d": round(st.mean(d), 1) if d else None, "max_d": round(d[-1], 1) if d else None}

ids = sorted(raw); cvss = [i for i in ids if is_cvss(raw[i])]; hand = [i for i in ids if not is_cvss(raw[i])]
kern = [i for i in ids if is_kernel(raw[i])]; y2026 = [i for i in ids if raw[i]["published"] >= "2026"]

# supported releases on the read date. Standard support from releases.json; Ubuntu Pro (ESM) end dates from Canonical's ESM page
# (exhibits/security_esm_2026-10-20.html): releases.json's esm_expires carries the Legacy add-on end for 14.04 and 16.04.
rels = json.load(open(REL))["releases"]; today = read_at.date().isoformat()
PRO_END = {"focal": "2030-04-30", "bionic": "2028-05-31", "xenial": "2026-05-31", "trusty": "2024-05-31"}
STD = sorted(r["codename"] for r in rels if not r.get("development") and r.get("codename") != "upstream" and (r.get("support_expires") or "")[:10] >= today)
PRO = sorted(set(STD) | {c for c, e in PRO_END.items() if e >= today})
LEGACY = sorted(r["codename"] for r in rels if r.get("codename") not in PRO and not r.get("development") and r.get("codename") != "upstream"
                and (r.get("esm_expires") or "")[:10] >= today)
OPEN = ("needed", "pending", "deferred")
def open_on(i, rels_, linux_only=True):
    return sorted({s["release_codename"] for p in raw[i]["packages"] if (p["name"] == "linux" or not linux_only)
                   for s in p["statuses"] if s["release_codename"] in rels_ and s["status"] in OPEN})
fixed_k = [i for i in kern if fix_at(i)]
still_pro = {i: open_on(i, PRO) for i in fixed_k if open_on(i, PRO)}
still_leg = {i: open_on(i, LEGACY) for i in fixed_k if open_on(i, LEGACY)}
nofix = [i for i in ids if not fix_at(i)]
nofix_released = [i for i in nofix if any(s["status"] == "released" for p in raw[i]["packages"] for s in p["statuses"] if s["release_codename"] != "upstream")]
nofix_open_pro = [i for i in nofix if i not in nofix_released and open_on(i, PRO, False)]
nofix_other = [i for i in nofix if i not in nofix_released and i not in nofix_open_pro]
NEVER_AFFECTED = set(nofix_other)   # CVEs no Ubuntu release ever carried: left out of the alternative reading

# alternative reading: a release that came out after the CVE was raised to critical, already carrying the fix
# (status released or not-affected with a version), counts as a fix on its release date
RELDATE = {r["codename"]: (r.get("release_date") or "")[:10] for r in rels}
def alt_fix(i):
    f = fix_at(i); c = CR[i]["critical_at"]
    if not c: return f
    cands = [f] if f else []
    for p in raw[i]["packages"]:
        if p["name"] != "linux" and is_kernel(raw[i]): continue
        for s_ in p["statuses"]:
            v = (s_.get("description") or "").strip(); rd = RELDATE.get(s_["release_codename"])
            if s_["status"] in ("released", "not-affected") and v[:1].isdigit() and rd and rd >= P(c).date().isoformat():
                cands.append(datetime.fromisoformat(rd).replace(tzinfo=timezone.utc))
    return min(cands) if cands else None
alt = sorted(x for x in ((alt_fix(i) - P(CR[i]["critical_at"])).total_seconds() / 86400 for i in cvss if i not in NEVER_AFFECTED and CR[i]["critical_at"] and alt_fix(i)) if x >= 0)
# author date of each critical commit: when the change was written, which can precede the push (committer) date
AUTH = {}
for i in cvss:
    h = CR[i]["critical_commit"]
    if h: AUTH[i] = P(subprocess.run(["git", "-C", UCT, "show", "-s", "--format=%aI", h], capture_output=True, text=True).stdout.strip())
def lag_author(i):
    f = fix_at(i)
    return (f - AUTH[i]).total_seconds() / 86400 if f and i in AUTH else None
auth = sorted(x for x in (lag_author(i) for i in cvss) if x is not None and x >= 0)
LTS = [r for r in PRO if r in ("resolute", "noble", "jammy", "focal", "bionic")]
def lts_has_fix(i):
    return sorted({s_["release_codename"] for p in raw[i]["packages"] if p["name"] == "linux" or not is_kernel(raw[i]) for s_ in p["statuses"]
                   if s_["release_codename"] in LTS and s_["status"] in ("released", "not-affected") and (s_.get("description") or "")[:1].isdigit()})
lsn = [i for i in ids if F[i]["first_lsn_at"]]
lsn_first = [i for i in lsn if fix_at(i) and P(F[i]["first_lsn_at"]) < fix_at(i)]
main_pkg = lambda i: next((p["name"] for p in raw[i]["packages"] if p["name"] in ("linux", "openssl", "apt", "xz-utils", "juju", "click", "flashplugin-nonfree")), raw[i]["packages"][0]["name"])

km = sorted(K[i]["known_minus_published_days"] for i in ids)
S = {"read_at": R["read_at"], "total_critical": len(ids), "standard_releases": STD, "pro_releases": PRO, "legacy_releases": LEGACY,
     "known_minus_published": {"median_d": round(st.median(km), 2), "over_7d": sum(x > 7 for x in km), "before_publish": sum(x < 0 for x in km)},
     "all": block(ids), "kernel": block(kern), "cvss_rated": block(cvss), "hand_rated": block(hand), "y2026": block(y2026),
     "cvss_rated_from_publication": block(cvss, "published"),
     "cvss_rated_from_known": block(cvss, "known"),
     "cvss_rated_author_date": {"timed": len(auth), "within_1d": sum(x <= 1 for x in auth), "within_7d": sum(x <= 7 for x in auth), "median_d": round(st.median(auth), 1)},
     "cvss_never_affected": sorted(i for i in cvss if i in NEVER_AFFECTED),
     "cvss_rated_alt_release_ships": {"timed": len(alt), "within_1d": sum(x <= 1 for x in alt), "within_7d": sum(x <= 7 for x in alt), "median_d": round(st.median(alt), 1) if alt else None},
     "cvss_first_priority": dict(__import__("collections").Counter(CR[i]["first_priority"] for i in cvss)),
     "cvss_raised_by_month": dict(sorted(__import__("collections").Counter(CR[i]["critical_at"][:7] for i in cvss if CR[i]["critical_at"]).items())),
     "cvss_first_raise": min(CR[i]["critical_at"] for i in cvss if CR[i]["critical_at"])[:10],
     "hand_first_priority": dict(__import__("collections").Counter(CR[i]["first_priority"] for i in hand)),
     "cvss_rated_kernel": sum(1 for i in cvss if is_kernel(raw[i])), "cvss_first_published": min(raw[i]["published"] for i in cvss)[:10],
     "cvss_since_2025": sum(1 for i in cvss if raw[i]["published"] >= "2025"),
     "fixed_kernel": len(fixed_k),
     "fixed_kernel_still_open_pro": {"n": len(still_pro), "by_release": {r: sum(r in v for v in still_pro.values()) for r in PRO}},
     "fixed_kernel_still_open_legacy": {"n": len(still_leg), "by_release": {r: sum(r in v for v in still_leg.values()) for r in LEGACY}},
     "no_fix": len(nofix), "no_fix_released_undated": nofix_released, "no_fix_open_pro": len(nofix_open_pro), "no_fix_open_pro_list": [{"cve": i, "lts_not_affected_with_version": lts_has_fix(i), "critical_at": CR[i]["critical_at"]} for i in nofix_open_pro],
     "no_fix_open_pro_days_since_raise": sorted(round((read_at - P(CR[i]["critical_at"])).total_seconds() / 86400, 1) for i in nofix_open_pro if CR[i]["critical_at"]), "no_fix_other": nofix_other,
     "no_fix_open_pro_ages_d": sorted(round((read_at - datetime.fromisoformat(raw[i]["published"]).replace(tzinfo=timezone.utc)).total_seconds() / 86400, 1) for i in nofix_open_pro),
     "lsn_cves": len(lsn), "lsn_before_first_fix": len(lsn_first),
     "hand_rated_list": [{"cve": i, "published": raw[i]["published"][:10], "package": main_pkg(i), "n_packages": len(raw[i]["packages"]), "reason": reason(raw[i]),
                          "known_to_fix_d": round(lag(i, "critical"), 2) if lag(i, "critical") is not None else None, "first_usn": F[i]["first_usn"]} for i in sorted(hand, key=lambda i: raw[i]["published"])],
     "since_2026_09_23": [{"cve": i, "published": raw[i]["published"][:10], "first_usn": F[i]["first_usn"], "mitigation": (raw[i].get("mitigation") or "").strip(),
                           "pending_on": sorted({s["release_codename"] for p in raw[i]["packages"] if p["name"] == "linux" for s in p["statuses"] if s["status"] == "pending"}), "critical_at": CR[i]["critical_at"]}
                          for i in ids if raw[i]["published"] >= "2026-09-23"]}
json.dump(S, open(OUT, "w"), indent=1)
print(json.dumps({k: v for k, v in S.items() if k not in ("hand_rated_list",)}, indent=1))
