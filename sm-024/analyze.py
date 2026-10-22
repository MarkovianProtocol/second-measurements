#!/usr/bin/env python3
"""SM-024 (draft): score every FARA supplemental statement read by scan.py.
Due = period end + 30 days (22 USC 612(b)); filed = the FARA Unit's receipt stamp on page 1 ("Received by NSD/FARA Registration Unit"), or the bulk file's Date Stamped where no stamp was read. Late = filed after the due date. Day resolution. Duplicates for the same registrant and period
(amendments, re-filings) are scored once, by the earliest filing.
python3 analyze.py scan.jsonl OUT.json"""
import json, sys, datetime as dt, collections, statistics
def D(s):
    m, d, y = s.split("/"); y = int(y); y = y + 2000 if y < 100 else y
    return dt.date(y, int(m), int(d))
rows = [json.loads(l) for l in open(sys.argv[1])]
out = {"read": len(rows), "errors": [], "unparsed": [], "implausible": [], "scored": []}
best = {}
for r in rows:
    if r.get("error"): out["errors"].append(r["url"]); continue
    try:
        pe = D(r["period_ending"]); filed = D((r.get("received") or r["date_stamped"]).split()[0])   # the FARA Unit's receipt stamp on page 1; the bulk file's Date Stamped where no stamp was read
    except Exception:
        out["unparsed"].append(r["url"]); continue
    lag = (filed - pe).days
    if lag < -366 or lag > 3650:   # more than a year early or a decade late: treat as an OCR misread
        out["implausible"].append({"url": r["url"], "period_ending": r["period_ending"], "filed": str(filed)}); continue
    if lag < 0: out.setdefault("filed_before_period_end", []).append(r["url"])   # mostly final statements; on time
    if False:
        out["implausible"].append({"url": r["url"], "period_ending": r["period_ending"], "filed": str(filed)}); continue
    k = (r["reg"], pe)
    if k not in best or filed < best[k]["filed"]:
        best[k] = {"reg": r["reg"], "registrant": r["registrant"], "period_end": pe, "filed": filed, "days_after_period": lag,
                   "days_late": max(0, lag - 30), "late": lag > 30, "url": r["url"], "sha256": r.get("sha256")}
S = sorted(best.values(), key=lambda x: (x["filed"], x["reg"]))
L = [x for x in S if x["late"]]
def summ(xs):
    l = [x for x in xs if x["late"]]
    return {"statements": len(xs), "late": len(l), "late_pct": round(100 * len(l) / len(xs), 1) if xs else None,
            "over_30_late": sum(1 for x in l if x["days_late"] > 30), "over_90_late": sum(1 for x in l if x["days_late"] > 90),
            "median_days_late": statistics.median(x["days_late"] for x in l) if l else None, "max_days_late": max((x["days_late"] for x in l), default=0)}
out["all"] = summ(S)
out["by_year_filed"] = {y: summ([x for x in S if x["filed"].year == y]) for y in sorted({x["filed"].year for x in S})}
regs = collections.defaultdict(list)
for x in S: regs[x["reg"]].append(x)
out["registrants"] = len(regs); out["registrants_late_once"] = sum(1 for v in regs.values() if any(x["late"] for x in v))
out["scored"] = [{**x, "period_end": str(x["period_end"]), "filed": str(x["filed"])} for x in S]
json.dump(out, open(sys.argv[2], "w"), indent=1, default=str)
print(json.dumps({k: out[k] for k in ("read", "all", "registrants", "registrants_late_once")}, default=str))
print("errors", len(out["errors"]), "unparsed", len(out["unparsed"]), "implausible", len(out["implausible"]), "duplicates collapsed", len(rows) - len(out["errors"]) - len(out["unparsed"]) - len(out["implausible"]) - len(S))
for y, v in out["by_year_filed"].items(): print(y, v)
