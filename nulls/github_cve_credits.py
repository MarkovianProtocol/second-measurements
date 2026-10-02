# GitHub-assigned CVE records: does the CVE record carry the credits GitHub shows on the advisory?
# arXiv 2609.33099 found 0 of 238 (and 0 of 570 in a two-week census). Takes the newest reviewed GitHub
# advisories that credit someone and whose CVE GitHub assigned, then reads each CVE record from CVE Services
# and GitHub's own OSV file. Needs the GitHub CLI (gh), logged in.
import json, subprocess, time, urllib.request, urllib.error, sys
N = int(sys.argv[1]) if len(sys.argv) > 1 else 150
def gh(path):
    r = subprocess.run(["gh", "api", path], capture_output=True, text=True)
    return json.loads(r.stdout) if r.returncode == 0 else None
def get(url):
    try: return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "markovian-second-measurement"}), timeout=30))
    except urllib.error.HTTPError: return None
rows, page = [], 1
while len(rows) < N and page <= 30:
    advs = gh(f"/advisories?type=reviewed&per_page=100&page={page}&sort=published&direction=desc") or []
    page += 1
    for a in advs:
        if len(rows) >= N: break
        if not a.get("cve_id") or not a.get("credits"): continue
        cve = get(f"https://cveawg.mitre.org/api/cve/{a['cve_id']}"); time.sleep(0.3)
        if not cve: continue
        meta = cve.get("cveMetadata", {})
        if meta.get("assignerShortName") != "GitHub_M": continue
        cna = cve.get("containers", {}).get("cna", {})
        eco = a["vulnerabilities"][0]["package"]["ecosystem"] if a.get("vulnerabilities") else None
        osv = None
        if eco:
            y, m = a["published_at"][:4], a["published_at"][5:7]
            osv = get(f"https://raw.githubusercontent.com/github/advisory-database/main/advisories/github-reviewed/{y}/{m}/{a['ghsa_id']}/{a['ghsa_id']}.json")
        rows.append({"ghsa": a["ghsa_id"], "cve": a["cve_id"], "published": a["published_at"], "advisory_credits": len(a["credits"]),
                     "cve_credits": len(cna.get("credits") or []), "cve_has_metrics": bool(cna.get("metrics")),
                     "cve_has_problemTypes": bool(cna.get("problemTypes")), "osv_credits": None if osv is None else len(osv.get("credits") or [])})
        print(rows[-1], flush=True)
json.dump(rows, open("github_cve_credits.json", "w"), indent=1)
n = len(rows)
print(f"\n{n} GitHub-assigned CVEs whose advisory credits someone, published {rows[-1]['published'][:10]}..{rows[0]['published'][:10]}")
print(f"CVE record carries credits: {sum(r['cve_credits'] > 0 for r in rows)}; metrics: {sum(r['cve_has_metrics'] for r in rows)}; problemTypes: {sum(r['cve_has_problemTypes'] for r in rows)}")
o = [r for r in rows if r["osv_credits"] is not None]
print(f"GitHub OSV file carries credits: {sum(r['osv_credits'] > 0 for r in o)} of {len(o)} retrieved")
