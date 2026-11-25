#!/usr/bin/env python3
"""Every NVD CVE whose configurations match a product CPE (NVD API 2.0 virtualMatchString), one file per product.
Usage: fetch_nvd.py OUTDIR"""
import json, os, sys, time, urllib.request, urllib.parse
PRODUCTS = ["cpe:2.3:a:postgresql:postgresql", "cpe:2.3:a:f5:nginx", "cpe:2.3:a:nginx:nginx", "cpe:2.3:a:mariadb:mariadb", "cpe:2.3:a:openssl:openssl"]
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
for cpe in PRODUCTS:
    vulns, start = [], 0
    while True:
        q = urllib.parse.urlencode({"virtualMatchString": cpe, "resultsPerPage": 2000, "startIndex": start})
        for i in range(5):
            try:
                d = json.load(urllib.request.urlopen(urllib.request.Request("https://services.nvd.nist.gov/rest/json/cves/2.0?" + q, headers={"User-Agent": "markovianprotocol.com research"}), timeout=120)); break
            except Exception as e:
                print("retry", cpe, e); time.sleep(30)
        vulns += d["vulnerabilities"]; start += d["resultsPerPage"]
        time.sleep(7)
        if start >= d["totalResults"]: break
    name = cpe.split(":", 3)[3].replace(":", "_")
    json.dump({"cpe": cpe, "read_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "totalResults": d["totalResults"], "vulnerabilities": vulns}, open(f"{out}/nvd_{name}.json", "w"))
    print(cpe, d["totalResults"], len(vulns))
