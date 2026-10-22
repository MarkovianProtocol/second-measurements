#!/usr/bin/env python3
"""SM-020 lookup data: for every registrant (lobbying firm or in-house lobbyist) and client, every report the census found
posted after its deadline from Q1 2025 to Q2 2026 (days late, link), and for the 20 October 2026 deadline whether each
registrant-client pair that reported for Q2 2026 had filed anything for Q3 by midnight (live read, 21 Oct 2026).
python3 build_lookup.py results.json pairs_2026Q2.json pairs_2026Q3.json pairs_2026Q2_term.json live_2026Q3.json OUT.json"""
import json, sys, collections
RES, P2, P3, T2, LIVE, OUT = sys.argv[1:7]
R = json.load(open(RES)); prev = json.load(open(P2)); new = json.load(open(P3)); term = json.load(open(T2)); L = json.load(open(LIVE))
regs = {}; clients = {}
def reg(rid, name):
    r = regs.setdefault(str(rid), {"name": name, "late": [], "q3": {}}); return r
for q, v in R["quarters"].items():
    dl = R["deadlines"][q]
    for t, x in v.items():
        for r in x["reports"]:
            g = reg(r["registrant_id"], r["registrant"]); clients[str(r["client_id"])] = r["client"]
            g["late"].append([q, t, r["posted"][:10], r["days_late"], str(r["client_id"]), r["uuid"]])
expected = {(r["registrant_id"], r["client_id"]) for r in prev["reports"]} - {(r["registrant_id"], r["client_id"]) for r in term["reports"]}
filed = {(r["registrant_id"], r["client_id"]) for r in new["reports"]}
missing = {tuple(p) for p in L["missing_pairs"]}
assert missing == expected - filed, "live missing set differs from recomputation"
for r in prev["reports"] + new["reports"]:
    reg(r["registrant_id"], r["registrant"]); clients[str(r["client_id"])] = r["client"]
for (rid, cid) in expected:
    regs[str(rid)]["q3"][str(cid)] = "missing" if (rid, cid) in missing else "filed"
for (rid, cid) in filed - expected:
    regs[str(rid)]["q3"].setdefault(str(cid), "filed")
out = {"deadlines": R["deadlines"], "q3_deadline": "2026-10-20", "q3_read": L["read_started"][:10], "registrants": regs, "clients": clients,
       "totals": {"registrants": len(regs), "late_reports": sum(len(g["late"]) for g in regs.values()), "q3_missing": len(missing), "q3_expected": len(expected)}}
json.dump(out, open(OUT, "w"), separators=(",", ":"), ensure_ascii=False)
print(out["totals"])
