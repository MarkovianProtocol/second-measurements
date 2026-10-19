#!/usr/bin/env python3
"""SM-021 census: GitHub says a published repository security advisory is reviewed into the GitHub Advisory Database
"up to 72 hours" later (docs.github.com, about-repository-security-advisories). For every CVE GitHub issued as CNA in a
window (NVD sourceIdentifier=security-advisories@github.com), take the GHSA from NVD's references, then:
  repo advisory published_at   GET /repos/{owner}/{repo}/security-advisories/{ghsa}
  database github_reviewed_at  GET /advisories/{ghsa}   (404 = not in the database)
Appends one JSON line per CVE to OUT (resumable: CVEs already in OUT are skipped). Needs gh logged in.
python3 ghsa_census.py OUT.jsonl 2026-01-01 2026-10-16"""
import json, re, subprocess, sys, time, urllib.request, urllib.parse, datetime as dt, os
OUT, START, END = sys.argv[1], sys.argv[2], sys.argv[3]
UA = {"User-Agent": "markovianprotocol.com second-measurement SM-021"}
def nvd(start, end):
    res, idx = [], 0
    while True:
        q = urllib.parse.urlencode({"sourceIdentifier": "security-advisories@github.com", "pubStartDate": start + "T00:00:00.000", "pubEndDate": end + "T23:59:59.999", "startIndex": idx, "resultsPerPage": 2000})
        for i in range(6):
            try: d = json.load(urllib.request.urlopen(urllib.request.Request("https://services.nvd.nist.gov/rest/json/cves/2.0?" + q, headers=UA), timeout=120)); break
            except Exception as e: print("nvd retry", e, file=sys.stderr, flush=True); time.sleep(30 * (i + 1))
        else: raise RuntimeError("nvd gave up")
        res += d["vulnerabilities"]; idx += d["resultsPerPage"]; time.sleep(7)
        if idx >= d["totalResults"]: return res
def gh(path):
    for i in range(6):
        r = subprocess.run(["gh", "api", path], capture_output=True, text=True)
        if r.returncode == 0: return json.loads(r.stdout)
        if "404" in r.stderr or "Not Found" in r.stderr: return None
        if "rate limit" in r.stderr.lower() or "403" in r.stderr: time.sleep(120); continue
        time.sleep(5 * (i + 1))
    return {"_error": r.stderr[:200]}
done = set()
if os.path.exists(OUT):
    for l in open(OUT): done.add(json.loads(l)["cve"])
s = dt.date.fromisoformat(START); e = dt.date.fromisoformat(END); vulns = []
while s <= e:   # NVD caps a window at 120 days
    w = min(e, s + dt.timedelta(days=110)); vulns += nvd(s.isoformat(), w.isoformat()); s = w + dt.timedelta(days=1)
print("nvd cves", len(vulns), "already done", len(done), flush=True)
out = open(OUT, "a")
for n, v in enumerate(vulns):
    c = v["cve"]; cid = c["id"]
    if cid in done: continue
    ghsa = None; repo = None
    for ref in c.get("references", []):
        m = re.search(r"github\.com/([^/]+/[^/]+)/security/advisories/(GHSA-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4})", ref["url"])
        if m: repo, ghsa = m.group(1), m.group(2); break
    row = {"cve": cid, "nvd_published": c.get("published"), "vuln_status": c.get("vulnStatus"), "ghsa": ghsa, "repo": repo}
    if ghsa:
        ra = gh(f"/repos/{repo}/security-advisories/{ghsa}")
        if ra and "_error" not in ra:
            row.update({"repo_published_at": ra.get("published_at"), "repo_state": ra.get("state"), "repo_ecosystems": sorted({(p.get("package") or {}).get("ecosystem") or "" for p in ra.get("vulnerabilities") or []})})
        elif ra: row["repo_error"] = ra["_error"]
        ga = gh(f"/advisories/{ghsa}")
        if ga and "_error" not in ga:
            row.update({"db_reviewed_at": ga.get("github_reviewed_at"), "db_published_at": ga.get("published_at"), "db_type": ga.get("type"),
                        "db_ecosystems": sorted({(p.get("package") or {}).get("ecosystem") or "" for p in ga.get("vulnerabilities") or []})})
        elif ga: row["db_error"] = ga["_error"]
        else: row["db_missing"] = True
    out.write(json.dumps(row) + "\n"); out.flush()
    if n % 200 == 0: print(n, "of", len(vulns), cid, flush=True)
print("done", flush=True)
