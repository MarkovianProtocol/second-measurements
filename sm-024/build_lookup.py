#!/usr/bin/env python3
"""SM-024 (draft): country lookup data. For every foreign principal active at any time since 2024-01-01 (FARA bulk
file FARA_All_ForeignPrincipals.csv), the registrant that represents it and that registrant's scored supplemental
statements (analyze.py output). Lateness is per registrant: one statement covers all of a registrant's principals.
python3 build_lookup.py FARA_All_ForeignPrincipals.csv analysis.json OUT.json"""
import csv, json, sys, datetime as dt, collections
def D(s):
    if not s: return None
    m, d, y = s.split("/"); return dt.date(int(y), int(m), int(d))
FP, AN, OUT = sys.argv[1:4]; START = dt.date(2024, 1, 1)
A = json.load(open(AN)); st = collections.defaultdict(list)
for x in A["scored"]: st[x["reg"]].append(x)
countries = collections.defaultdict(list)
def rows_of(path):
    # DOJ's bulk CSVs carry unescaped quotes inside names ('PETRÓLEOS MEXICANOS ("PEMEX")') and Windows-1252 text, which
    # the csv module misreads; every field is quoted, so split each line on the "," separators instead.
    raw = open(path, "rb").read().decode("cp1252", errors="replace")
    import re
    parts = re.split(r'"\r\n(?=")', raw.rstrip())   # a record ends at quote+CRLF before the next quote; a stray CR inside a field doesn't end it
    lines = [l + '"' for l in parts[:-1]] + parts[-1:]
    lines = [l.replace("\r", " ").replace("\n", " ") for l in lines]
    head = lines[0].strip('"').split('","'); bad = 0
    for ln in lines[1:]:
        if not ln.strip(): continue
        f = ln[1:-1].split('","') if ln.startswith('"') and ln.endswith('"') else None
        if not f or len(f) != len(head): bad += 1; continue
        yield dict(zip(head, f))
    if bad: print("unparsed lines:", bad, file=sys.stderr)
for r in rows_of(FP):
    term = D(r["Foreign Principal Termination Date"])
    if term and term < START: continue
    reg = r["Registration Number"]; xs = sorted(st.get(reg, []), key=lambda x: x["filed"])
    late = [x for x in xs if x["late"]]
    countries[r["Country/Location Represented"].strip() or "(none given)"].append({
        "principal": r["Foreign Principal"].strip(), "registrant": r["Registrant Name"].strip(), "reg": reg,
        "since": str(D(r["Foreign Principal Registration Date"]) or ""), "ended": str(term) if term else "",
        "statements": len(xs), "late": len(late), "max_days_late": max((x["days_late"] for x in late), default=0),
        "latest": xs[-1]["url"] if xs else "",
        "worst": max(late, key=lambda x: x["days_late"])["url"] if late else ""})
out = {"built_from": {"principals": FP, "analysis": AN}, "start": str(START), "countries": {}}
for c, ps in sorted(countries.items()):
    regs = {p["reg"]: p for p in ps}
    out["countries"][c] = {"principals": len(ps), "active": sum(1 for p in ps if not p["ended"]), "registrants": len(regs),
        "registrants_late_once": sum(1 for p in regs.values() if p["late"]), "rows": sorted(ps, key=lambda p: (bool(p["ended"]), -p["late"], p["registrant"].lower()))}
json.dump(out, open(OUT, "w"), indent=0, ensure_ascii=False)
top = sorted(out["countries"].items(), key=lambda kv: -kv[1]["principals"])[:12]
for c, v in top: print(f"{c:<25} principals {v['principals']:>3} active {v['active']:>3} registrants {v['registrants']:>3} late-once {v['registrants_late_once']:>3}")
print(len(out["countries"]), "countries")
