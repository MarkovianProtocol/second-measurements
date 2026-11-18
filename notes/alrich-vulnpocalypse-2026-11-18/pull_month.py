#!/usr/bin/env python3
"""Pull every NVD CVE record published in one month (NVD API 2.0, 2,000 per page). Usage: pull_month.py 2026-08 OUT.json"""
import json, sys, time, urllib.request, calendar
ym, out = sys.argv[1], sys.argv[2]; y, m = map(int, ym.split("-"))
last = calendar.monthrange(y, m)[1]
base = f"https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate={ym}-01T00:00:00.000&pubEndDate={ym}-{last}T23:59:59.999&resultsPerPage=2000"
vulns, start, total = [], 0, None
while total is None or start < total:
    for i in range(5):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(base + f"&startIndex={start}", headers={"User-Agent": "markovianprotocol.com research"}), timeout=120)); break
        except Exception:
            time.sleep(10 * (i + 1))
    total = d["totalResults"]; vulns += d["vulnerabilities"]; start += 2000
    print(ym, len(vulns), "/", total, flush=True); time.sleep(6.5)
json.dump(vulns, open(out, "w"))  # we gzip the output afterwards
