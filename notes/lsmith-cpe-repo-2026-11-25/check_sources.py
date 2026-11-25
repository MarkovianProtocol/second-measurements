#!/usr/bin/env python3
"""For each NVD CVE in data/nvd_*.json: does OSV have the CVE record, with GIT ranges and which repositories; does GitHub's advisory
database have it (reviewed or unreviewed), and with which package ecosystems. Writes one JSON line per CVE per product.
Usage: check_sources.py DATA_DIR OUT.jsonl   (needs `gh` logged in for the GitHub advisory API)"""
import glob, json, subprocess, sys, time, urllib.request, urllib.error, concurrent.futures as cf
UA = {"User-Agent": "markovianprotocol.com research"}
def osv(cve):
    for i in range(4):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request("https://api.osv.dev/v1/vulns/" + cve, headers=UA), timeout=60))
            git = sorted({r.get("repo", "") for a in d.get("affected", []) for r in a.get("ranges", []) if r.get("type") == "GIT"})
            pk = sorted({(a.get("package") or {}).get("ecosystem", "") for a in d.get("affected", []) if a.get("package")})
            return {"osv": True, "osv_git_repos": git, "osv_ecosystems": pk, "osv_modified": d.get("modified")}
        except urllib.error.HTTPError as e:
            if e.code == 404: return {"osv": False, "osv_git_repos": [], "osv_ecosystems": []}
        except Exception: pass
        time.sleep(5 * (i + 1))
    return {"osv": "error"}
def ghsa(cve):
    out = {}
    for typ in ("reviewed", "unreviewed"):
        r = subprocess.run(["gh", "api", f"/advisories?cve_id={cve}&type={typ}"], capture_output=True, text=True)
        a = json.loads(r.stdout) if r.returncode == 0 else None
        out[typ] = None if a is None else [{"ghsa": x["ghsa_id"], "ecosystems": sorted({(v.get("package") or {}).get("ecosystem") or "" for v in x.get("vulnerabilities") or []})} for x in a]
    return {"ghsa_reviewed": out["reviewed"], "ghsa_unreviewed": out["unreviewed"]}
jobs = []
for f in sorted(glob.glob(sys.argv[1] + "/nvd_*.json")):
    d = json.load(open(f))
    for v in d["vulnerabilities"]: jobs.append((d["cpe"], v["cve"]["id"], v["cve"].get("published", "")[:10]))
def one(j):
    cpe, cve, pub = j
    return {"cpe": cpe, "cve": cve, "published": pub, **osv(cve), **ghsa(cve)}
with cf.ThreadPoolExecutor(6) as ex, open(sys.argv[2], "w") as o:
    for r in ex.map(one, jobs): o.write(json.dumps(r) + "\n")
print(len(jobs), "rows")
