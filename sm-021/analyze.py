#!/usr/bin/env python3
"""SM-021 analysis. Cohort: CVEs GitHub issued (NVD source security-advisories@github.com) that NVD published in the
census window, whose repository advisory was published in 2026 and names a package in an ecosystem the GitHub Advisory
Database supports (by the project's own labels). Per month of the repository advisory's published_at:
  reviewed within / over 72 h (exact seconds, no rounding), share over among reviewed (the headline),
  median wait among reviewed, and a LOWER BOUND median that counts each advisory not yet in the database at its age so far.
Also: repo->NVD publication gap by month (the selection effect), and a robustness check that adds reviewed advisories the
project left unlabelled but GitHub reviewed into a supported ecosystem. python3 analyze.py census.jsonl READ_START summary.json"""
import json, sys, collections, statistics as st, datetime as dt
src, read_start, out_f = sys.argv[1], sys.argv[2], sys.argv[3]
T0 = dt.datetime.fromisoformat(read_start.replace("Z", "+00:00"))
P = lambda s: dt.datetime.fromisoformat(s.replace("Z", "+00:00")) if s else None
PN = lambda s: dt.datetime.fromisoformat(s + "+00:00") if s and "+" not in s and not s.endswith("Z") else P(s)
SUP = {"npm", "pip", "maven", "nuget", "go", "rubygems", "composer", "rust", "erlang", "actions", "pub", "swift"}
LIM = 72 * 3600
R = [json.loads(l) for l in open(src)]
rows, robust, negative, excl = [], [], [], collections.Counter()
for r in R:
    rp = P(r.get("repo_published_at"))
    if not r.get("ghsa"): excl["no GHSA reference in NVD"] += 1; continue
    if not rp: excl["no repository published_at"] += 1; continue
    if rp.year != 2026: excl["advisory published before 2026"] += 1; continue
    rv = P(r.get("db_reviewed_at")); np_ = PN(r.get("nvd_published"))
    row = {"cve": r["cve"], "ghsa": r["ghsa"], "repo": r["repo"], "published": rp.isoformat(), "reviewed": rv.isoformat() if rv else None,
           "wait_s": (rv - rp).total_seconds() if rv else None, "pending_age_s": None if rv else (T0 - rp).total_seconds(),
           "nvd_gap_s": (np_ - rp).total_seconds() if np_ else None}
    eco = set(r.get("repo_ecosystems") or [])
    if eco & SUP:
        row["eco"] = sorted(eco & SUP)
        if row["wait_s"] is not None and row["wait_s"] < 0: negative.append(row); continue
        rows.append(row)
    else:
        excl["no supported ecosystem in the project's labels"] += 1
        deco = set(r.get("db_ecosystems") or [])
        if rv and deco & SUP and row["wait_s"] >= 0: robust.append(row)
def summ(rs):
    rev = sorted(r["wait_s"] for r in rs if r["wait_s"] is not None)
    pend = sorted(r["pending_age_s"] for r in rs if r["wait_s"] is None)
    allb = sorted(rev + pend)
    gaps = sorted(r["nvd_gap_s"] for r in rs if r["nvd_gap_s"] is not None)
    over = sum(1 for x in rev if x > LIM)
    return {"advisories": len(rs), "reviewed": len(rev), "reviewed_within_72h": len(rev) - over, "reviewed_over_72h": over,
            "reviewed_over_72h_pct": round(100 * over / len(rev), 1) if rev else None,
            "median_wait_h": round(st.median(rev) / 3600, 2) if rev else None, "p90_wait_h": round(rev[int(0.9 * len(rev))] / 3600, 1) if rev else None,
            "max_wait_h": round(rev[-1] / 3600, 1) if rev else None,
            "not_in_database": len(pend), "not_in_database_min_age_d": round(pend[0] / 86400, 1) if pend else None,
            "median_wait_lower_bound_h": round(st.median(allb) / 3600, 2) if allb else None,
            "median_repo_to_nvd_d": round(st.median(gaps) / 86400, 1) if gaps else None,
            "reviewed_before_nvd": sum(1 for r in rs if r["wait_s"] is not None and r["nvd_gap_s"] is not None and r["wait_s"] < r["nvd_gap_s"])}
by = collections.defaultdict(list)
for r in rows: by[r["published"][:7]].append(r)
months = {m: summ(v) for m, v in sorted(by.items())}
early = lambda r: r["published"][:7] <= "2026-03"
out = {"source": src, "read_start": read_start, "census_rows": len(R), "rows_counted": len(rows), "excluded": dict(excl),
       "negative_wait_excluded": [{k: r[k] for k in ("cve", "ghsa", "repo", "published", "reviewed")} for r in negative],
       "year": summ(rows), "jan_mar": summ([r for r in rows if early(r)]), "apr_on": summ([r for r in rows if not early(r)]), "months": months,
       "ecosystems": {e: summ([r for r in rows if e in r["eco"]]) for e in sorted({e for r in rows for e in r["eco"]})},
       "robustness_with_db_labels": {"jan_mar": summ([r for r in rows + robust if early(r)]), "apr_on": summ([r for r in rows + robust if not early(r)]), "added_rows": len(robust)},
       "longest_reviewed": [{**{k: r[k] for k in ("cve", "ghsa", "repo", "eco", "published", "reviewed")}, "wait_d": round(r["wait_s"] / 86400, 2)}
                            for r in sorted([r for r in rows if r["wait_s"] is not None], key=lambda r: -r["wait_s"])[:15]]}
json.dump(out, open(out_f, "w"), indent=1)
for k in ("year", "jan_mar", "apr_on"):
    v = out[k]; print(k, v["reviewed"], v["reviewed_over_72h"], v["reviewed_over_72h_pct"], round(v["median_wait_h"] / 24, 1), "d; lower-bound median", round(v["median_wait_lower_bound_h"] / 24, 1), "d; not in db", v["not_in_database"])
for m, v in months.items(): print(m, v["advisories"], v["reviewed"], v["reviewed_over_72h"], v["reviewed_over_72h_pct"], round(v["median_wait_h"] / 24, 1), round(v["median_wait_lower_bound_h"] / 24, 1), v["not_in_database"], "nvd gap d", v["median_repo_to_nvd_d"])
rb = out["robustness_with_db_labels"]; print("robust", rb["added_rows"], rb["jan_mar"]["reviewed_over_72h"], rb["jan_mar"]["reviewed"], rb["jan_mar"]["reviewed_over_72h_pct"], rb["apr_on"]["reviewed_over_72h"], rb["apr_on"]["reviewed"], rb["apr_on"]["reviewed_over_72h_pct"])
print("excluded", out["excluded"], "negative", [r["ghsa"] for r in negative]); print("longest", [(r["repo"], r["ghsa"], r["wait_d"]) for r in out["longest_reviewed"][:4]])
