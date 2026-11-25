#!/usr/bin/env python3
"""The table for the note: per product CPE, NVD CVEs, how many OSV has, how many OSV gives a GIT range on the project's own repository
(and under which URL spellings), and how many GitHub's advisory database has reviewed (with a package) or unreviewed.
Usage: table.py data/sources_20261125.jsonl"""
import json, sys, collections
OWN = {"cpe:2.3:a:postgresql:postgresql": "github.com/postgres/postgres", "cpe:2.3:a:f5:nginx": "github.com/nginx/nginx",
       "cpe:2.3:a:nginx:nginx": "github.com/nginx/nginx", "cpe:2.3:a:mariadb:mariadb": "github.com/mariadb/server",
       "cpe:2.3:a:openssl:openssl": "github.com/openssl/openssl"}
norm = lambda u: u.lower().replace("https://", "").replace("http://", "").rstrip("/").removesuffix(".git")
rows = [json.loads(l) for l in open(sys.argv[1])]
print("product | NVD CVEs | in OSV | OSV GIT range on own repo | spellings of own repo in OSV | other repos in those ranges | GitHub reviewed | GitHub unreviewed only")
for cpe, own in OWN.items():
    R = [r for r in rows if r["cpe"] == cpe]
    ownhit = [r for r in R if any(norm(g) == own for g in r["osv_git_repos"])]
    spell = collections.Counter(g for r in R for g in r["osv_git_repos"] if norm(g) == own)
    other = sum(1 for r in R for g in r["osv_git_repos"] if norm(g) != own)
    rev = sum(bool(r["ghsa_reviewed"]) for r in R); unrev = sum(bool(r["ghsa_unreviewed"]) and not r["ghsa_reviewed"] for r in R)
    print(f"{cpe.split(':',3)[3]} | {len(R)} | {sum(r['osv'] is True for r in R)} | {len(ownhit)} | {dict(spell)} | {other} | {rev} | {unrev}")
# CVEs where the product CPE appears only as a non-vulnerable platform in NVD's configurations
import glob
for f in sorted(glob.glob(sys.argv[1].rsplit("/", 1)[0] + "/nvd_*.json")):
    d = json.load(open(f)); cpe = d["cpe"]
    n = sum(not any(m.get("vulnerable") and m["criteria"].startswith(cpe + ":") for c in v["cve"].get("configurations", []) for nd in c["nodes"] for m in nd["cpeMatch"]) for v in d["vulnerabilities"])
    print(f"{cpe.split(':',3)[3]}: product only as a platform in {n} of {len(d['vulnerabilities'])}")
