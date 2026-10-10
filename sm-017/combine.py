"""Merge per-service summaries (analyze.py on results_{tv,fm,am}_all.json) into one.
python3 combine.py summary_tv.json summary_fm.json summary_am.json -> summary_combined.json
Services missing on the command line are simply absent from the output; the page says which ones it has."""
import json, sys, collections

SERVICES = {"tv": "TV", "fm": "FM", "am": "AM"}
per = {}
for f in sys.argv[1:]:
    d = json.load(open(f))
    svc = next((s for s in SERVICES if s in f.split("/")[-1]), None) or d.get("service") or "tv"
    per[svc] = d

quarters = sorted(set(q for d in per.values() for q in d["quarters"]))
SUM = ("have", "none_found", "on_time", "late", "late_1_7", "late_8_30", "late_over_30", "late_vs_rule_date", "late_vs_oct10", "uploaded_in_shutdown_gap", "uploaded_1118", "uploaded_2oct_17nov")
comb_q = {}
for q in quarters:
    rows = [d["quarters"][q] for d in per.values() if q in d["quarters"]]
    r = {k: sum(x.get(k, 0) or 0 for x in rows) for k in SUM}
    r["deadline"] = rows[0]["deadline"]; r["rule_date"] = rows[0]["rule_date"]
    r["late_pct"] = round(100 * r["late"] / r["have"], 1) if r["have"] else None
    r["per_service"] = {s: {k: d["quarters"][q].get(k) for k in ("have", "on_time", "late", "late_pct", "late_over_30", "none_found")}
                        for s, d in per.items() if q in d["quarters"]}
    comb_q[q] = r

worst = sorted(((days, cs, q, s) for s, d in per.items() for days, cs, q in d["worst_overall"]), reverse=True)   # make_page.py cuts at 15 and extends through ties
no2025 = {s: d["no_2025_files"] for s, d in per.items()}
out = {
    "services": {s: {"label": SERVICES[s], "stations": d["stations"], "errors": d["errors"], "exempt_excluded": d["exempt_excluded"],
                     "files": d["files"], "files_unclassified": d["files_unclassified"], "fetched_at": d["fetched_at"],
                     "all": d["all"], "no_2025_count": len(d["no_2025_files"]), "no_upload_2025_count": len(d.get("no_upload_2025", [])), "no_upload_since_2025_count": len(d.get("no_upload_since_2025", [])), "no_folder": d["no_folder"],
                     "worst_overall": d["worst_overall"]} for s, d in per.items()},
    "fetched_at": max(d["fetched_at"] for d in per.values()),
    "fetched_first": min(d.get("fetched_first") or d["fetched_at"] for d in per.values()),
    "stations": sum(d["stations"] for d in per.values()),
    "files": sum(d["files"] for d in per.values()),
    "files_unclassified": sum(d["files_unclassified"] for d in per.values()),
    "files_pre_quarter": sum(d.get("files_pre_quarter", 0) for d in per.values()),
    "quarters": comb_q,
    "all": {"station_quarters": sum(r["have"] for r in comb_q.values()), "late": sum(r["late"] for r in comb_q.values()),
            "over_30": sum(r["late_over_30"] for r in comb_q.values()),
            "stations_all_on_time": sum(d["all"]["stations_all_four_on_time"] for d in per.values()),
            "stations_with_all": sum(d["all"]["stations_with_all_four"] for d in per.values()),
            "stations_with_all_2025": sum(d["all"].get("stations_with_all_2025", 0) for d in per.values()),
            "stations_all_2025_on_time": sum(d["all"].get("stations_all_2025_on_time", 0) for d in per.values())},
    "worst_overall": worst,
    "no_2025_files": no2025,
    "no_2025_detail": {s: d["no_2025_detail"] for s, d in per.items()},
    "no_upload_2025_files": {s: d.get("no_upload_2025", []) for s, d in per.items()},
    "empty_folder": {s: d.get("empty_folder", []) for s, d in per.items()},
    "no_folder": {s: d["no_folder"] for s, d in per.items()},
    "unreadable": {s: d.get("unreadable", {}) for s, d in per.items()},
    "split": {k: sum(len(d.get(k, [])) for d in per.values()) for k in ("noup_only_late", "noup_only_on_time", "no25_only_unreadable", "no25_only_prior_quarter")},
    "errors": {s: d["errors"] for s, d in per.items()},
    "late_days_by_year": {y: sorted(x for d in per.values() for x in d.get("late_days_by_year", {}).get(y, [])) for y in sorted({y for d in per.values() for y in d.get("late_days_by_year", {})})},
}
out["all"]["late_pct"] = round(100 * out["all"]["late"] / out["all"]["station_quarters"], 1)
json.dump(out, open("summary_combined.json", "w"), indent=1)
print(json.dumps({"services": {s: v["stations"] for s, v in out["services"].items()}, "stations": out["stations"], "all": out["all"]}, indent=1))
