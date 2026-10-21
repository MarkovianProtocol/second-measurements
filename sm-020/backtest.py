#!/usr/bin/env python3
"""Back-test of the live read on a closed quarter: take the pairs that reported for PREV, find those with nothing for NEW
posted before DAY (the day after NEW's deadline), then say how many of them filed for NEW later and how many never have.
python3 backtest.py pairs_prev.json DAY OUT.json pairs_new_*.json   (the new-quarter files must hold every type, unfiltered)"""
import json, sys
prev, day, out_f, new_fs = json.load(open(sys.argv[1])), sys.argv[2], sys.argv[3], [a for i, a in enumerate(sys.argv[4:], 4) if a != "--terminated" and sys.argv[i - 1] != "--terminated"]
new = [r for f in new_fs for r in json.load(open(f))["reports"]]
assert all((json.load(open(f))["posted_before"] or "9999") > day for f in new_fs), "new-quarter reads must run past the back-test day, to see late filings"
key = lambda r: (r["registrant_id"], r["client_id"])
expected = {key(r) for r in prev["reports"]}
# a pair whose registration ended (termination report for the previous quarter) owes nothing for the new one
_tf = next((sys.argv[i + 1] for i, x in enumerate(sys.argv) if x == "--terminated"), None)
terminated = {(r["registrant_id"], r["client_id"]) for r in json.load(open(_tf))["reports"]} if _tf else set()
expected -= terminated
# posted is ISO with offset; the deadline is an Eastern date, and the API gives Eastern-offset times
by_deadline = {key(r) for r in new if r["posted"][:10] < day}
first = {}
for r in new:
    if key(r) in expected and (key(r) not in first or r["posted"] < first[key(r)]): first[key(r)] = r["posted"]
missing = expected - by_deadline
later = {p for p in missing if p in first}
days = sorted((__import__("datetime").date.fromisoformat(first[p][:10]) - __import__("datetime").date.fromisoformat(day)).days + 1 for p in later)
out = {"previous_quarter": prev["quarter"], "day_after_deadline": day, "new_files": new_fs,
       "terminated_excluded": len(terminated), "expected_pairs": len(expected), "missing": len(missing), "missing_pct": round(100 * len(missing) / len(expected), 1),
       "filed_later": len(later), "never_filed": len(missing - later),
       "filed_later_median_days": days[len(days) // 2] if days else None,
       "never_filed_pairs": sorted([list(p) for p in missing - later], key=str)}
json.dump(out, open(out_f, "w"), indent=1)
print({k: v for k, v in out.items() if k not in ("never_filed_pairs", "new_files")})
