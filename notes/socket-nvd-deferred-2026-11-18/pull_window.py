#!/usr/bin/env python3
"""Pull every NVD record (NVD API 2.0) published in one window, 2,000 per page, gzip the result.
Usage: pull_window.py START END OUT.json.gz   e.g. 2026-10-01 2026-10-27"""
import json, sys, time, gzip, urllib.request
s, e, out = sys.argv[1:4]
base = f"https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate={s}T00:00:00.000&pubEndDate={e}T23:59:59.999&resultsPerPage=2000"
vulns, start, total = [], 0, None
while total is None or start < total:
    for i in range(6):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(base + f"&startIndex={start}", headers={"User-Agent": "markovianprotocol.com research"}), timeout=180)); break
        except Exception:
            time.sleep(10 * (i + 1))
    total = d["totalResults"]; vulns += d["vulnerabilities"]; start += 2000; time.sleep(6.5)
json.dump(vulns, gzip.open(out, "wt"))
print(s, e, len(vulns), "of", total, flush=True)
