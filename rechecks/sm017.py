#!/usr/bin/env python3
"""SM-017 recheck: after run_quarter.sh (14 Jan/Apr/Jul/Oct, 08:00 MT) has scanned every TV, FM and AM station and
analyze.py has written fcc-opif/summary_<svc>_<date>.json, append one row for the newest scored quarter to
history/sm-017.jsonl: stations, lists found, on time, late, late by the rule's tenth, over 30 days, no list found,
and the late count per service. Usage: sm017.py [YYYY-MM-DD]; with no summaries for that date it appends nothing."""
import json, os, sys, datetime as dt
R = os.path.dirname(os.path.abspath(__file__)); F = os.path.join(R, "fcc-opif"); H = os.path.join(R, "history", "sm-017.jsonl")
d = sys.argv[1] if len(sys.argv) > 1 else dt.datetime.utcnow().strftime("%Y-%m-%d")
per = {}
for s in ("tv", "fm", "am"):
    p = os.path.join(F, f"summary_{s}_{d}.json")
    if os.path.exists(p): per[s] = json.load(open(p))
if len(per) < 3:
    print(f"sm017: {len(per)} of 3 summaries for {d}; nothing appended"); sys.exit(0)
qs = sorted(set.intersection(*(set(x["quarters"]) for x in per.values()))); q = qs[-1]
row = {"date": d, "quarter": q, "deadline": per["tv"]["quarters"][q]["deadline"], "rule_date": per["tv"]["quarters"][q]["rule_date"],
       "stations": sum(x["stations"] for x in per.values())}
for k in ("have", "on_time", "late", "late_vs_rule_date", "late_over_30", "none_found"):
    row[k] = sum(x["quarters"][q].get(k, 0) or 0 for x in per.values())
row["late_pct"] = round(100 * row["late"] / row["have"], 1) if row["have"] else None
for s in per: row[f"{s}_stations"] = per[s]["stations"]; row[f"{s}_late"] = per[s]["quarters"][q]["late"]; row[f"{s}_none_found"] = per[s]["quarters"][q]["none_found"]
os.makedirs(os.path.dirname(H), exist_ok=True); open(H, "a").write(json.dumps(row) + "\n"); print(row)
