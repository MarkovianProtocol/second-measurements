#!/usr/bin/env python3
"""For a random sample of August 2026 CVEs issued by GitHub's CNA, does GitHub's global advisory database (REST
/advisories?cve_id=) list a package ecosystem and name? Uses the `gh` CLI. Writes data/github_advisory_sample.json."""
import json, gzip, subprocess, random
V = [v["cve"] for v in json.load(gzip.open("data/nvd_2026-08.json.gz"))]
gh = sorted(c["id"] for c in V if c.get("sourceIdentifier") == "security-advisories@github.com" and c.get("vulnStatus") != "Rejected")
pick = random.Random(20261118).sample(gh, 60); res = []
for cid in pick:
    a = json.loads(subprocess.run(["gh", "api", f"advisories?cve_id={cid}"], capture_output=True, text=True).stdout or "[]")
    pk = [(v.get("package") or {}) for x in a for v in (x.get("vulnerabilities") or [])]
    res.append({"cve": cid, "ghsa": [x.get("ghsa_id") for x in a], "package": pk[:1]})
json.dump(res, open("data/github_advisory_sample.json", "w"), indent=0)
k = sum(bool(r["package"] and r["package"][0].get("ecosystem")) for r in res)
print(f"GitHub-CNA August CVEs sampled: {len(res)} of {len(gh)}; with a GitHub advisory naming ecosystem+package: {k}; with no global advisory: {sum(not r['ghsa'] for r in res)}")
