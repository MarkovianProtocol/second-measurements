#!/usr/bin/env python3
"""Quarterly lobbying reports (LD-2) against the 2 U.S.C. 1604(a) deadline, from the public lda.gov API.

python3 lda_census.py OUT.json [QUARTER ...] [--types Q,QY,T,TY] [--merge]   (default: every passed quarter, all four types;
--merge adds the fetched types into an existing OUT.json)

For each quarter and each report type (Qn = quarterly report, QnY = no activity, nT = termination report, nTY =
termination with no activity; all are LD-2s with the same deadline; amendments excluded), it reads the total count, then pages through every report posted on or after the day after the deadline
(the API's date filter works by Eastern calendar date; each dt_posted is checked again here). Only the late reports
are fetched in full, so the run needs a few hundred requests rather than one per report.
"""
import json, sys, time, datetime as dt, urllib.request, urllib.parse

API = "https://lda.gov/api/v1/filings/"
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) markovianprotocol.com second-measurements"}
# 2 U.S.C. 1604(a): no later than 20 days after the quarter, or the first business day after that if the 20th is not one.
DEADLINES = {
    "2025Q1": "2025-04-21",   # 20 Apr 2025 was a Sunday
    "2025Q2": "2025-07-21",   # 20 Jul 2025 was a Sunday
    "2025Q3": "2025-10-20",
    "2025Q4": "2026-01-20",
    "2026Q1": "2026-04-20",
    "2026Q2": "2026-07-20",
    "2026Q3": "2026-10-20",
}

def get(params, tries=6):
    url = API + "?" + urllib.parse.urlencode(params)
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                time.sleep(1.5)
                return json.load(r)
        except Exception as e:
            wait = 30 * (i + 1) if "429" in str(e) else 5 * (i + 1)
            print(f"  retry {i + 1} after {e} (sleep {wait}s)", file=sys.stderr, flush=True); time.sleep(wait)
    raise RuntimeError("gave up: " + url)

def keep(f):
    reg, cli = f.get("registrant") or {}, f.get("client") or {}
    return {"uuid": f["filing_uuid"], "type": f["filing_type"], "year": f["filing_year"], "posted": f["dt_posted"],
            "registrant_id": reg.get("id"), "registrant": reg.get("name"), "client_id": cli.get("id"), "client": cli.get("name"),
            "income": f.get("income"), "expenses": f.get("expenses"), "url": f.get("filing_document_url")}

args = [a for a in sys.argv[1:] if not a.startswith("--")]
TYPES = next((sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--types"), "Q,QY,T,TY").split(",")
args = [a for a in args if a != ",".join(TYPES)]
out_f = args[0]
now = dt.datetime.now(dt.timezone.utc)
qs = args[1:] or [q for q, d in DEADLINES.items() if dt.date.fromisoformat(d) < now.date()]
out = json.load(open(out_f)) if "--merge" in sys.argv else {"fetched_at": now.isoformat(), "api": API, "deadlines": {q: DEADLINES[q] for q in qs}, "quarters": {}}
if "--merge" in sys.argv: out.setdefault("merged", []).append({"fetched_at": now.isoformat(), "types": TYPES})
for q in qs:
    year, n = q[:4], q[-1]; dl = dt.date.fromisoformat(DEADLINES[q])
    out["quarters"].setdefault(q, {})
    for t in [{"Q": f"Q{n}", "QY": f"Q{n}Y", "T": f"{n}T", "TY": f"{n}TY"}[k] for k in TYPES]:
        base = {"filing_type": t, "filing_year": year, "page_size": 25}
        total = get({**base, "page_size": 1})["count"]
        late, page = [], 1
        params = {**base, "filing_dt_posted_after": (dl + dt.timedelta(days=1)).isoformat(), "ordering": "dt_posted"}
        while True:
            d = get({**params, "page": page})
            late += [keep(f) for f in d["results"]]
            if not d.get("next"): break
            page += 1
        bad = [f for f in late if dt.date.fromisoformat(f["posted"][:10]) <= dl]   # the filter is by Eastern date; posted carries the Eastern offset
        late = [f for f in late if f not in bad]
        for f in late: f["days_late"] = (dt.date.fromisoformat(f["posted"][:10]) - dl).days
        out["quarters"][q][t] = {"total": total, "late": len(late), "filter_mismatch": len(bad), "reports": late}
        print(q, t, "total", total, "late", len(late), f"({100 * len(late) / total:.1f}%)" if total else "", flush=True)
    json.dump(out, open(out_f, "w"))
print("wrote", out_f)
