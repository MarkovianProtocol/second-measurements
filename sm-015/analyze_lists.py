#!/usr/bin/env python3
"""Chrome and Apple CT log lists: shard windows against Chrome's one-calendar-year rule, and Apple 'usable' logs whose
temporal window has already closed. Inputs: log_list.json (Chrome v3), apple_log_list.json. Standard library."""
import json, datetime, sys
now = datetime.datetime.utcnow()
P = lambda s: datetime.datetime.fromisoformat(s.replace("Z", ""))
c = json.load(open("log_list.json")); a = json.load(open("apple_log_list.json"))
cstate = {}
over = []; windows = []
for op in c["operators"]:
    for l in op.get("logs", []) + op.get("tiled_logs", []):
        st = list(l["state"])[0]; cstate[l["log_id"]] = st; ti = l.get("temporal_interval")
        if st in ("usable", "qualified") and ti:
            d = (P(ti["end_exclusive"]) - P(ti["start_inclusive"])).days; windows.append(d)
            if d > 366: over.append((l["description"], d, ti["start_inclusive"][:10], ti["end_exclusive"][:10]))
closed = []
for op in a["operators"]:
    for l in op.get("logs", []) + op.get("tiled_logs", []):
        st = list(l["state"])[0]; ti = l.get("temporal_interval")
        if st == "usable" and ti and P(ti["end_exclusive"]) < now:
            closed.append((l["description"], (now - P(ti["end_exclusive"])).days, cstate.get(l["log_id"], "not in Chrome list")))
out = {"chrome_version": c.get("version"), "chrome_timestamp": c.get("log_list_timestamp"), "apple_version": a.get("version"),
       "chrome_usable_qualified": len(windows), "windows_days": sorted(windows), "over_366_days": over, "apple_usable_closed": sorted(closed, key=lambda x: -x[1])}
json.dump(out, open("lists.json", "w"), indent=1)
print("Chrome", c.get("version"), "usable+qualified", len(windows), "| windows >366 d:", over)
print("Apple", a.get("version"), "usable logs whose window closed:", len(closed)); [print("  ", x) for x in out["apple_usable_closed"]]
