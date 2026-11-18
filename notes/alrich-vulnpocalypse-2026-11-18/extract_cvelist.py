#!/usr/bin/env python3
"""From the cvelistV5 daily release (all CVE records), keep every record published Aug-Oct 2026 and note which product
identifiers its CNA (and any ADP) supplied: packageURL (PURL), cpes, packageName+collectionURL, repo.
Usage: extract_cvelist.py ALL_CVES.zip.zip OUT.json   (release cve_2026-11-18_0400Z; sha256 in data/cvelist_source.txt)"""
import zipfile, io, json, sys
outer = zipfile.ZipFile(sys.argv[1]); inner = zipfile.ZipFile(io.BytesIO(outer.read(outer.namelist()[0])))
rows = []
for n in inner.namelist():
    if "/2026/" not in n or not n.endswith(".json"): continue
    try: d = json.loads(inner.read(n))
    except Exception: continue
    md = d.get("cveMetadata", {}); pub = (md.get("datePublished") or "")[:7]
    if pub not in ("2026-08", "2026-09", "2026-10"): continue
    cna = d.get("containers", {}).get("cna", {}); adp = d.get("containers", {}).get("adp", []) or []
    aff = lambda c: c.get("affected", []) or []
    rows.append(dict(id=md.get("cveId"), pub=pub, state=md.get("state"), assigner=md.get("assignerShortName"),
        purl_cna=any(a.get("packageURL") for a in aff(cna)), cpe_cna=any(a.get("cpes") for a in aff(cna)),
        purl_adp=any(a.get("packageURL") for x in adp for a in aff(x)), cpe_adp=any(a.get("cpes") for x in adp for a in aff(x)),
        pkg_cna=any(a.get("packageName") and a.get("collectionURL") for a in aff(cna)), repo_cna=any(a.get("repo") for a in aff(cna))))
json.dump(rows, open(sys.argv[2], "w"))
print(len(rows), "records published Aug-Oct 2026")
