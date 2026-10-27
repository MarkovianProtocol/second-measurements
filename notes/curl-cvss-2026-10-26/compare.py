#!/usr/bin/env python3
"""curl's own severity for each CVE published since 2021 (curl.se/docs/vuln.json) beside the CVSS severity CISA
added to the same CVE record (CVE Services API, CISA-ADP container). Also NVD's score where the record carries none.
python3 -I compare.py   (reads exhibits/vuln_*.json, caches records in cve/, writes rows.csv + summary.json)"""
import csv, glob, json, os, time, urllib.request, collections

UA = {"User-Agent": "markovian-second-measurements/1 (+https://markovianprotocol.com; hello@markovianprotocol.com)"}
vuln = json.load(open(sorted(glob.glob("exhibits/vuln_*.json"))[-1]))

def record(cve):
    p = f"cve/{cve}.json"
    if not os.path.exists(p):
        with urllib.request.urlopen(urllib.request.Request(f"https://cveawg.mitre.org/api/cve/{cve}", headers=UA), timeout=30) as r:
            open(p, "wb").write(r.read())
        time.sleep(0.3)
    return json.load(open(p))

def cisa(rec):
    """Highest-version CVSS severity in the CISA ADP container: v4.0, then v3.1, then v3.0."""
    for adp in rec.get("containers", {}).get("adp", []):
        if "CISA" not in adp.get("providerMetadata", {}).get("shortName", "") and "CISA" not in adp.get("title", ""):
            continue
        found = {}
        for m in adp.get("metrics", []):
            for key in ("cvssV4_0", "cvssV3_1", "cvssV3_0"):
                if key in m:
                    found[key] = (m[key].get("baseSeverity"), m[key].get("baseScore"))
        for key in ("cvssV4_0", "cvssV3_1", "cvssV3_0"):
            if key in found:
                return key, found[key][0], found[key][1]
    return None, None, None

rows = []
for v in vuln:
    if v.get("published", "") < "2021-01-01":
        continue
    cve = next((a for a in v.get("aliases", []) if a.startswith("CVE-")), None)
    if not cve:
        continue
    rec = record(cve)
    ver, sev, score = cisa(rec)
    rows.append(dict(cve=cve, published=v["published"][:10], summary=v.get("summary", ""), curl=v["database_specific"].get("severity", ""),
                     cisa_version=ver or "", cisa_severity=(sev or "").title(), cisa_score=score if score is not None else ""))

rows.sort(key=lambda r: r["published"])
order = ["Low", "Medium", "High", "Critical"]
tab = collections.Counter((r["curl"].title(), r["cisa_severity"] or "none") for r in rows)
summary = dict(cves=len(rows), first=rows[0]["published"], last=rows[-1]["published"],
               curl=collections.Counter(r["curl"].title() for r in rows),
               cisa_scored=sum(1 for r in rows if r["cisa_severity"]),
               cisa=collections.Counter(r["cisa_severity"] for r in rows if r["cisa_severity"]),
               crosstab={f"curl {a} / CISA {b}": n for (a, b), n in sorted(tab.items())},
               by_year={y: dict(cves=sum(1 for r in rows if r["published"][:4] == y),
                                curl_high=sum(1 for r in rows if r["published"][:4] == y and r["curl"].title() in ("High", "Critical")),
                                cisa_high_or_critical=sum(1 for r in rows if r["published"][:4] == y and r["cisa_severity"] in ("High", "Critical")))
                        for y in sorted({r["published"][:4] for r in rows})},
               cisa_versions=collections.Counter(r["cisa_version"] for r in rows if r["cisa_version"]))
json.dump(summary, open("summary.json", "w"), indent=1)
with open("rows.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
print(json.dumps(summary, indent=1))
