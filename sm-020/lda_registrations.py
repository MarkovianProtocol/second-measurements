#!/usr/bin/env python3
"""Every new registration (LD-1, filing type RR) posted on lda.gov since a date, so each late quarterly report can be
checked against when its registrant-client pair registered. python3 lda_registrations.py SINCE OUT.json"""
import json, sys, datetime as dt
import time, urllib.request, urllib.parse
API = "https://lda.gov/api/v1/filings/"
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) markovianprotocol.com second-measurements"}
# same pacing and retry as lda_census.py
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

since, out_f = sys.argv[1], sys.argv[2]
rows, page = [], 1
while True:
    d = get({"filing_type": "RR", "filing_dt_posted_after": since, "ordering": "dt_posted", "page_size": 25, "page": page})
    for f in d["results"]:
        reg, cli = f.get("registrant") or {}, f.get("client") or {}
        rows.append({"uuid": f["filing_uuid"], "posted": f["dt_posted"], "year": f["filing_year"], "period": f["filing_period"],
                     "registrant_id": reg.get("id"), "client_id": cli.get("id"), "registrant": reg.get("name"), "client": cli.get("name")})
    if page % 40 == 0: print("page", page, len(rows), flush=True)
    if not d.get("next"): break
    page += 1
json.dump({"fetched_at": dt.datetime.now(dt.timezone.utc).isoformat(), "since": since, "registrations": rows}, open(out_f, "w"))
print("wrote", out_f, len(rows))
