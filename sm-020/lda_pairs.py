#!/usr/bin/env python3
"""Every report of the given types for one quarter, as registrant-client pairs, for the live read.
python3 lda_pairs.py QUARTER TYPES OUT.json [--posted-before YYYY-MM-DD]
e.g.  lda_pairs.py 2026Q2 Q,QY pairs_2026Q2.json          (who reported for Apr-Jun: who must report for Jul-Sep)
      lda_pairs.py 2026Q3 Q,QY,T,TY pairs_2026Q3.json --posted-before 2026-10-21   (who had by the deadline)
A pair that filed a regular or no-activity report for one quarter must file for the next one too, a termination report
if the registration ended (2 U.S.C. 1604(a); guidance s.8). Paging is 25 a page; the API rate-limits, the script waits."""
import json, sys, time, datetime as dt, urllib.request, urllib.parse
API = "https://lda.gov/api/v1/filings/"
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) markovianprotocol.com second-measurements"}
def get(params, tries=8):
    url = API + "?" + urllib.parse.urlencode(params)
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                time.sleep(1.5); return json.load(r)
        except Exception as e:
            wait = 30 * (i + 1) if "429" in str(e) else 5 * (i + 1)
            print(f"  retry {i + 1} after {e} (sleep {wait}s)", file=sys.stderr, flush=True); time.sleep(wait)
    raise RuntimeError("gave up: " + url)
q, types, out_f = sys.argv[1], sys.argv[2].split(","), sys.argv[3]
before = next((sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--posted-before"), None)
year, n = q[:4], q[-1]
out = {"quarter": q, "types": types, "posted_before": before, "started_at": dt.datetime.now(dt.timezone.utc).isoformat(), "reports": []}
for k in types:
    t = {"Q": f"Q{n}", "QY": f"Q{n}Y", "T": f"{n}T", "TY": f"{n}TY", "A": f"{n}A", "AY": f"{n}AY"}[k]
    params = {"filing_type": t, "filing_year": year, "page_size": 25, "ordering": "dt_posted"}
    if before: params["filing_dt_posted_before"] = before
    page = 1
    while True:
        d = get({**params, "page": page})
        for f in d["results"]:
            if before and f["dt_posted"][:10] >= before: continue   # the filter is by Eastern date; check again
            reg, cli = f.get("registrant") or {}, f.get("client") or {}
            out["reports"].append({"uuid": f["filing_uuid"], "type": f["filing_type"], "posted": f["dt_posted"],
                                   "registrant_id": reg.get("id"), "client_id": cli.get("id"), "registrant": reg.get("name"), "client": cli.get("name")})
        if page % 40 == 0: print(q, t, "page", page, len(out["reports"]), flush=True)
        if not d.get("next"): break
        page += 1
    print(q, t, "count", d.get("count"), flush=True)
out["finished_at"] = dt.datetime.now(dt.timezone.utc).isoformat()
json.dump(out, open(out_f, "w"))
print("wrote", out_f, len(out["reports"]), "reports,", len({(r["registrant_id"], r["client_id"]) for r in out["reports"]}), "pairs")
