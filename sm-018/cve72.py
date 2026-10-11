#!/usr/bin/env python3
"""SM-018: how long after a CNA discloses a vulnerability does its CVE record reach the CVE List?
CNA Operational Rules 4.5.1.4: "CNAs MUST publish a CVE Record to the CVE List within 72 hours of Publicly Disclosing
a CVE ID assigned by the CNA." Reads the cvelistV5 midnight archive directly (no extraction) and, for every PUBLISHED
record of 2025 and 2026, takes datePublished (the CVE List) and containers.cna.datePublic (the CNA's own statement of
when it disclosed). The MUST applies when the CNA disclosed it itself; the proxy for that is a CNA reference to the
CNA's own site (OWN map). Comparison is at day resolution (the second-path checks showed datePublic's clock time is a
form-fill artifact at some CNAs); Dell's datePublic is read in India time (+05:30) as its own advisories date it.
Excluded: records whose datePublic is more than a day before dateReserved (the ID did not exist on that date, so the
advisory could not have carried it) and records whose datePublic is more than a day after datePublished (the clock had
not started). Own-site domains come from own_domains.json (built from the CVE Program's partner roster plus a hand map;
VulnCheck left out on purpose), looked up next to this script under exhibits/ or given as a third argument.
python3 -I cve72.py all_cves.zip out_dir [own_domains.json]"""
import sys, os, json, zipfile, datetime as dt, collections, statistics, urllib.parse
ZIP, OUT = sys.argv[1], sys.argv[2]; os.makedirs(OUT, exist_ok=True)
_here = os.path.dirname(os.path.abspath(__file__))
OWNF = sys.argv[3] if len(sys.argv) > 3 else next((p for p in (os.path.join(_here, "exhibits", "own_domains.json"), os.path.join(_here, "own_domains.json")) if os.path.exists(p)), None)
if not OWNF: sys.exit("own_domains.json not found: put it next to cve72.py (or under exhibits/) or pass it as the third argument")
def norm(k): return "".join(ch for ch in k.lower() if ch not in " _.")
OWN = {norm(k): v for k, v in json.load(open(OWNF))["domains"].items()}
TZ = {"dell": dt.timedelta(hours=5, minutes=30)}
def P(ts):
    if not ts: return None
    t = ts.strip().replace("Z", "+00:00")
    try:
        d = dt.datetime.fromisoformat(t if len(t) > 10 else t + "T00:00:00+00:00"); return d if d.tzinfo else d.replace(tzinfo=dt.timezone.utc)
    except Exception: return None
rows = []; counts = collections.Counter(); drop_res = collections.Counter(); tz_effect = collections.Counter(); pub_by_cna = collections.Counter(); pbc_by_cna = collections.Counter()
with zipfile.ZipFile(ZIP) as z:
    names = [n for n in z.namelist() if n.endswith(".json") and ("/2025/" in n or "/2026/" in n)]
    counts["files_2025_2026"] = len(names)
    for n in names:
        try: d = json.loads(z.read(n))
        except Exception: counts["unreadable"] += 1; continue
        m = d.get("cveMetadata", {})
        if m.get("state") != "PUBLISHED": counts["not_published"] += 1; continue
        cna = d.get("containers", {}).get("cna", {})
        pub, pbc, res = P(m.get("datePublished")), P(cna.get("datePublic")), P(m.get("dateReserved"))
        counts["published"] += 1; pub_by_cna[m.get("assignerShortName") or ""] += 1
        if not pbc: counts["no_datePublic"] += 1; continue
        pbc_by_cna[m.get("assignerShortName") or ""] += 1
        if not pub: counts["no_datePublished"] += 1; continue
        assigner = m.get("assignerShortName") or ""
        if res and pbc < res - dt.timedelta(days=1): counts["dropped_public_before_reserved"] += 1; drop_res[assigner] += 1; continue
        if res and pbc.date() < res.date(): counts["kept_public_before_reserved_within_1d"] += 1
        pbc_local = pbc + TZ.get(assigner, dt.timedelta(0))
        lag_days = (pub.date() - pbc_local.date()).days
        if lag_days < 0: counts["public_after_published_any"] += 1
        if lag_days < -1: counts["dropped_public_after_published"] += 1; continue
        if lag_days == -1: counts["kept_public_1d_after_published"] += 1
        if assigner in TZ:
            lag_utc = (pub.date() - pbc.date()).days
            if lag_utc != lag_days: tz_effect["dates_moved"] += 1
            if (lag_utc > 3) != (lag_days > 3): tz_effect["late_flipped_to_on_time" if lag_utc > 3 else "on_time_flipped_to_late"] += 1
        hosts = {urllib.parse.urlparse(r.get("url", "")).netloc.lower() for r in cna.get("references", []) if isinstance(r, dict)}
        own = any(h == dom or h.endswith("." + dom) for h in hosts for dom in OWN.get(norm(assigner), []))
        rows.append({"id": m["cveId"], "cna": assigner, "own": own, "public": pbc_local.date().isoformat(), "published": pub.date().isoformat(), "lag": lag_days})
counts["scored"] = len(rows)
def late(r): return r["lag"] > 3
def summ(rs):
    L = [r for r in rs if late(r)]; lags = sorted(r["lag"] for r in rs)
    return {"scored": len(rs), "late": len(L), "late_pct": round(100 * len(L) / len(rs), 1) if rs else None,
            "over_30": sum(1 for r in L if r["lag"] > 30), "over_90": sum(1 for r in L if r["lag"] > 90), "same_day": sum(1 for r in rs if r["lag"] == 0), "median_lag": lags[len(lags) // 2] if lags else None,
            "median_late_lag": statistics.median(r["lag"] for r in L) if L else None, "within_1_day": sum(1 for r in rs if r["lag"] <= 1)}
out = {"source": os.path.basename(ZIP), "own_domains": os.path.basename(OWNF), "counts": dict(counts), "dropped_before_reserved_by_cna": dict(drop_res.most_common()), "dell_tz_effect": dict(tz_effect),
       "published_by_cna": dict(pub_by_cna.most_common()), "with_datePublic_by_cna": dict(pbc_by_cna.most_common()), "cnas_scored": len({r["cna"] for r in rows}), "cnas_scored_mapped": len({r["cna"] for r in rows if norm(r["cna"]) in OWN}), "cnas_scored_unmapped_30plus": sorted(c for c, n in collections.Counter(r["cna"] for r in rows).items() if n >= 30 and norm(c) not in OWN), "all": summ(rows), "own_site": summ([r for r in rows if r["own"]]),
       "by_year": {y: {"all": summ([r for r in rows if r["published"].startswith(y)]), "own_site": summ([r for r in rows if r["own"] and r["published"].startswith(y)])} for y in ("2025", "2026")},
       "by_quarter_own": {}, "by_cna_own": {}, "batching": {}}
def q(r): return r["published"][:4] + "Q" + str((int(r["published"][5:7]) - 1) // 3 + 1)
for qq in sorted({q(r) for r in rows}): out["by_quarter_own"][qq] = summ([r for r in rows if r["own"] and q(r) == qq])
by = collections.defaultdict(list)
for r in rows:
    if r["own"]: by[r["cna"]].append(r)
for c, rs in by.items():
    if len(rs) >= 30:
        s = summ(rs); s["distinct_publish_days"] = len({r["published"] for r in rs}); s["records_per_publish_day"] = round(len(rs) / s["distinct_publish_days"], 1)
        s["worst"] = sorted(((r["lag"], r["id"]) for r in rs), reverse=True)[:3]
        out["by_cna_own"][c] = s
out["by_cna_own"] = dict(sorted(out["by_cna_own"].items(), key=lambda kv: -kv[1]["late"]))
json.dump(out, open(os.path.join(OUT, "cve72_summary.json"), "w"), indent=1)
json.dump(rows, open(os.path.join(OUT, "cve72_rows.json"), "w"), separators=(",", ":"))
import csv
byc = collections.defaultdict(list)
for r in rows: byc[(r["cna"], r["own"])].append(r)
with open(os.path.join(OUT, "cve72_by_cna.csv"), "w", newline="") as f:
    w = csv.writer(f); w.writerow(["cna", "own_site", "scored", "within_1_day", "late_over_3_days", "late_pct", "over_30_days", "median_lag_days", "median_late_lag_days", "distinct_publish_days", "max_lag_days", "max_lag_id"])
    for (cna, own), rs in sorted(byc.items(), key=lambda kv: (-len(kv[1]), kv[0][0].lower(), kv[0][1])):
        L = [r for r in rs if late(r)]; lags = sorted(r["lag"] for r in rs); mx = max(rs, key=lambda r: r["lag"])
        w.writerow([cna, int(own), len(rs), sum(1 for r in rs if r["lag"] <= 1), len(L), round(100 * len(L) / len(rs), 1), sum(1 for r in L if r["lag"] > 30), lags[len(lags) // 2], statistics.median(r["lag"] for r in L) if L else "", len({r["published"] for r in rs}), mx["lag"], mx["id"]])
with open(os.path.join(OUT, "cve72_by_quarter.csv"), "w", newline="") as f:
    w = csv.writer(f); w.writerow(["quarter_published", "population", "scored", "within_1_day", "late_over_3_days", "late_pct", "over_30_days"])
    for pop, sel in (("own_site", [r for r in rows if r["own"]]), ("all", rows)):
        for qq in sorted({q(r) for r in rows}):
            rs = [r for r in sel if q(r) == qq]; L = [r for r in rs if late(r)]
            w.writerow([qq, pop, len(rs), sum(1 for r in rs if r["lag"] <= 1), len(L), round(100 * len(L) / len(rs), 1) if rs else "", sum(1 for r in L if r["lag"] > 30)])
print(json.dumps(out["counts"])); print("cnas", out["cnas_scored"], "mapped", out["cnas_scored_mapped"], "unmapped>=30", out["cnas_scored_unmapped_30plus"]); print("dell_tz", out["dell_tz_effect"]); print("drop_res four", {k: out["dropped_before_reserved_by_cna"].get(k, 0) for k in ("zdi","dell","drupal","Arista")}); print("all", out["all"]); print("own_site", out["own_site"])
for y, v in out["by_year"].items(): print(y, "own", v["own_site"])
for qq, v in out["by_quarter_own"].items(): print(qq, v["scored"], v["late"], v["late_pct"])
for c, v in list(out["by_cna_own"].items())[:25]: print(f"{c:<14} scored {v['scored']:>5} late {v['late']:>5} ({v['late_pct']}%) >30d {v['over_30']:>4} median {v['median_lag']:>3} days/batch {v['distinct_publish_days']:>3} worst {v['worst'][0]}")
