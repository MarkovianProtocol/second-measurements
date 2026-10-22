#!/usr/bin/env python3
"""SM-024 (draft): which agents on the FARA Unit's active list have a supplemental statement past due and not on file.
Each agent's periods end every six months; the first ends at the end of the sixth month after the month it registered
(219 of the 220 agents registered since January 2024 with a statement read follow this). Periods counted: those ending on or after
1 January 2024 (so every statement for them was filed inside the window we read) whose due date, period end + 30
days, is before AS-OF. A period is missing when no statement we read covers it. An agent whose last statement was
received before its period ended may have filed a final statement and is flagged, not counted.
A pre-2024 statement (pre2024.py: page 1 of each candidate's last statement received before 2024) anchors the grid when
the agent has none in the window, counts if it covers a 2024+ period, and takes part in the possibly-final test.
python3 overdue.py analysis.json api_active.json docs.csv AS-OF(YYYY-MM-DD) OUT.json [pre2024.jsonl]"""
import json, sys, csv, datetime as dt, calendar, collections
AN, ACT, DOCS, ASOF, OUT = sys.argv[1:6]; PRE = sys.argv[6] if len(sys.argv) > 6 else None; ASOF = dt.date.fromisoformat(ASOF); START = dt.date(2024, 1, 1)
def addm(d, k):
    y = d.year + (d.month - 1 + k) // 12; m = (d.month - 1 + k) % 12 + 1; return dt.date(y, m, calendar.monthrange(y, m)[1])
def D(s): m, d, y = s.split("/"); return dt.date(int(y), int(m), int(d))
active = {str(r["Registration_Number"]): r for r in json.load(open(ACT))["REGISTRANTS_ACTIVE"]["ROW"]}
st = collections.defaultdict(list)
for x in json.load(open(AN))["scored"]: st[x["reg"]].append({**x, "pe": dt.date.fromisoformat(x["period_end"]), "fd": dt.date.fromisoformat(x["filed"])})
last_sup_before = {}
for r in csv.DictReader(open(DOCS, encoding="utf-8", errors="replace")):
    if r["Document Type"] == "Supplemental Statement":
        d = D(r["Date Stamped"]); n = r["Registration Number"]
        if d < START and (n not in last_sup_before or d > last_sup_before[n]): last_sup_before[n] = d
pre = {}
if PRE:
    for l in open(PRE):
        x = json.loads(l)
        if x.get("period_ending"): pre[x["reg"]] = {"pe": D(x["period_ending"]), "fd": D(x.get("received") or x["date_stamped"]), "url": x["url"]}
out = []
for n, a in active.items():
    reg = D(a["Registration_Date"]); xs = sorted(st.get(n, []), key=lambda x: x["pe"])
    p0 = pre.get(n)
    anchor = xs[0]["pe"] if xs else (p0["pe"] if p0 else addm(reg, 6))   # any one period end fixes the grid
    grid = []; k = 0
    first = addm(reg, 6)
    while addm(anchor, -6 * (k + 1)) >= first: k += 1     # walk the grid back to the first period after registration
    p = addm(anchor, -6 * k)
    while p + dt.timedelta(30) < ASOF:
        if p >= START: grid.append(p)
        p = addm(p, 6)
    have = {x["pe"] for x in xs} | ({p0["pe"]} if p0 else set())   # a statement received before 2024 may cover a 2024 period
    missing = [p for p in grid if p not in have]
    if not missing: continue
    lastx = xs[-1] if xs else None
    lastany = lastx or p0
    possibly_final = bool(lastany and lastany["fd"] < lastany["pe"])
    oldest = missing[0]; due = oldest + dt.timedelta(30)
    out.append({"reg": n, "name": a["Name"].strip(), "registered": str(reg), "statements_in_window": len(xs),
                "last_period_end": str(lastx["pe"]) if lastx else None, "last_filed": str(lastx["fd"]) if lastx else None,
                "last_statement": lastx["url"] if lastx else None,
                "last_supplemental_before_2024": str(last_sup_before[n]) if n in last_sup_before else None,
                "last_period_before_2024": str(p0["pe"]) if p0 else None,
                "last_any_filed": str(lastany["fd"]) if lastany else None, "last_any_period_end": str(lastany["pe"]) if lastany else None,
                "missing_periods": [str(p) for p in missing], "periods_missed": len(missing),
                "oldest_missing_due": str(due), "days_overdue": (ASOF - due).days,
                "caught_up_after_gap": bool(lastx and lastx["pe"] > missing[-1]), "possibly_final": possibly_final})
out.sort(key=lambda x: -x["days_overdue"])
json.dump(out, open(OUT, "w"), indent=1)
c = collections.Counter(("no statement since 2024" if not x["statements_in_window"] else "gap, caught up later" if x["caught_up_after_gap"] else "behind now") + (" / possibly final" if x["possibly_final"] else "") for x in out)
print(len(out), "active agents with a statement past due and not on file;", dict(c))
