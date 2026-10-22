#!/usr/bin/env python3
"""SM-024 (draft): tables for the page from analysis.json, overdue_verified.json and the principals file.
python3 tables.py analysis.json overdue_verified.json FARA_All_ForeignPrincipals.csv OUT.json"""
import json, sys, collections, datetime as dt, re, statistics
AN, OV, FP, OUT = sys.argv[1:5]; START = dt.date(2024, 1, 1)
def D(s):
    m, d, y = s.split("/"); return dt.date(int(y), int(m), int(d))
raw = open(FP, "rb").read().decode("cp1252", errors="replace")
parts = re.split(r'"\r\n(?=")', raw.rstrip()); lines = [l + '"' for l in parts[:-1]] + parts[-1:]
lines = [l.replace("\r", " ").replace("\n", " ") for l in lines]; head = lines[0].strip('"').split('","')
countries = collections.defaultdict(set)
for ln in lines[1:]:
    f = ln[1:-1].split('","')
    if len(f) != len(head): continue
    r = dict(zip(head, f)); t = r["Foreign Principal Termination Date"]
    if t and D(t) < START: continue
    countries[r["Registration Number"]].add(r["Country/Location Represented"].strip().title())
A = json.load(open(AN)); S = A["scored"]
import os
_d = os.path.dirname(os.path.abspath(OV))
NAMES = {str(r["Registration_Number"]): r["Name"].strip() for f, k in (("api_terminated_2026-10-22.json", "REGISTRANTS_TERMINATED"), ("api_active_2026-10-22.json", "REGISTRANTS_ACTIVE"))
         for r in json.load(open(os.path.join(_d, f)))[k]["ROW"]}   # DOJ's current registrant name, so one agent has one name on the page
B = [("on time", None, 0), ("1 to 7 days", 1, 7), ("8 to 30 days", 8, 30), ("31 to 90 days", 31, 90), ("91 to 365 days", 91, 365), ("more than a year", 366, 10**6)]
buckets = []
for name, lo, hi in B:
    k = sum(1 for x in S if ((not x["late"]) if lo is None else (x["late"] and lo <= x["days_late"] <= hi))); buckets.append([name, k])
by = collections.defaultdict(list)
for x in S: by[x["reg"]].append(x)
regs = []
for n, xs in by.items():
    l = [x for x in xs if x["late"]]
    if not l: continue
    w = max(l, key=lambda x: x["days_late"])
    regs.append({"reg": n, "name": NAMES.get(n, xs[0]["registrant"].strip()), "filed_as": xs[-1]["registrant"].strip(), "statements": len(xs), "late": len(l), "median_days_late": statistics.median(x["days_late"] for x in l),
                 "max_days_late": w["days_late"], "worst_url": w["url"], "countries": sorted(countries.get(n, []))})
regs.sort(key=lambda r: (-r["late"], -r["max_days_late"], r["name"].lower()))   # ties: longest wait first
V = json.load(open(OV))
for r in V: r["countries"] = sorted(countries.get(r["reg"], []))
ov = [r for r in V if r["confirmed"] and not r["possibly_final"]]
pf = [r for r in V if r["confirmed"] and r["possibly_final"]]
setaside = [r for r in V if not r["confirmed"]]
out = {"buckets": buckets, "registrants_with_late": len(regs), "top_late": regs[:20], "all_late_registrants": regs,
       "every_statement_late": sum(1 for r in regs if r["late"] == r["statements"]),
       "every_statement_late_single": sum(1 for r in regs if r["late"] == r["statements"] == 1), "overdue": ov, "possibly_final": pf, "set_aside": setaside,
       "overdue_behind": sum(1 for r in ov if r["statements_in_window"]), "overdue_none_since_2024": sum(1 for r in ov if not r["statements_in_window"]),
       "overdue_none_ever": sum(1 for r in ov if not r["statements_in_window"] and not r["last_supplemental_before_2024"]),
       "overdue_over_year": sum(1 for r in ov if r["days_overdue"] > 365), "overdue_over_6m": sum(1 for r in ov if r["days_overdue"] > 182)}
json.dump(out, open(OUT, "w"), indent=1)
print(buckets); print("registrants late", len(regs), "every statement late", out["every_statement_late"], "overdue", len(ov))
for r in regs[:12]: print(r["late"], "/", r["statements"], r["max_days_late"], r["name"][:40], r["countries"][:3])
