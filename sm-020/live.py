#!/usr/bin/env python3
"""The live read: of the registrant-client pairs that reported for the previous quarter (regular or no-activity report),
how many had filed anything for the new quarter by its deadline. python3 live.py pairs_prev.json pairs_new.json OUT.json"""
import json, sys, collections
prev, new, out_f = json.load(open(sys.argv[1])), json.load(open(sys.argv[2])), sys.argv[3]
expected = {(r["registrant_id"], r["client_id"]) for r in prev["reports"]}
# a pair whose registration ended (termination report for the previous quarter) owes nothing for the new one
_tf = next((sys.argv[i + 1] for i, x in enumerate(sys.argv) if x == "--terminated"), None)
terminated = {(r["registrant_id"], r["client_id"]) for r in json.load(open(_tf))["reports"]} if _tf else set()
expected -= terminated
filed = {(r["registrant_id"], r["client_id"]) for r in new["reports"]}
missing = expected - filed
names = {}
for r in prev["reports"]: names[r["registrant_id"]] = r["registrant"]
mreg = collections.Counter(names[p[0]] for p in missing)
out = {"previous_quarter": prev["quarter"], "quarter": new["quarter"], "posted_before": new["posted_before"],
       "read_started": new["started_at"], "read_finished": new["finished_at"],
       "terminated_excluded": len(terminated), "expected_pairs": len(expected), "filed_by_deadline": len(expected & filed), "missing": len(missing),
       "missing_pct": round(100 * len(missing) / len(expected), 1), "new_pairs_filed": len(filed - expected),
       "reports_by_deadline": len(new["reports"]), "registrants_with_missing": len(mreg),
       "top_registrants_missing": mreg.most_common(15), "missing_pairs": sorted([list(p) for p in missing], key=str)}
json.dump(out, open(out_f, "w"), indent=1)
print({k: out[k] for k in ("expected_pairs", "filed_by_deadline", "missing", "missing_pct", "new_pairs_filed", "registrants_with_missing")})
