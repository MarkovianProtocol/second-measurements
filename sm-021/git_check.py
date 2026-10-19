#!/usr/bin/env python3
"""Second path for SM-021: for a seeded random sample of reviewed advisories, the first commit that adds the advisory's file
under advisories/github-reviewed/ in github/advisory-database, and any earlier commit of it under advisories/unreviewed/.
Compares the first reviewed commit with the API's github_reviewed_at. python3 git_check.py census.jsonl N SEED OUT.json"""
import json, random, subprocess, sys, datetime as dt
census, N, SEED, OUT = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
P = lambda s: dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
R = [json.loads(l) for l in open(census)]
pool = [r for r in R if r.get("db_reviewed_at") and r.get("repo_published_at") and r["repo_published_at"][:4] == "2026"]
random.seed(SEED); S = random.sample(pool, N)
def commits(path):
    r = subprocess.run(["gh", "api", f"/repos/github/advisory-database/commits?path={path}&per_page=100"], capture_output=True, text=True)
    return [c["commit"]["committer"]["date"] for c in json.loads(r.stdout)] if r.returncode == 0 else None
out = []
for r in S:
    g = r["ghsa"]; rv = P(r["db_reviewed_at"])
    rev_path = f"advisories/github-reviewed/{rv:%Y}/{rv:%m}/{g}/{g}.json"
    cs = commits(rev_path) or []
    first = min(cs) if cs else None
    rp = P(r["repo_published_at"]); unrev = commits(f"advisories/unreviewed/{rp:%Y}/{rp:%m}/{g}/{g}.json") or []
    row = {"cve": r["cve"], "ghsa": g, "repo_published_at": r["repo_published_at"], "db_reviewed_at": r["db_reviewed_at"],
           "first_reviewed_commit": first, "commit_minus_api_min": round((P(first) - rv).total_seconds() / 60, 1) if first else None,
           "unreviewed_commits_before": sum(1 for c in unrev if P(c) < rv)}
    out.append(row); print(row["ghsa"], row["commit_minus_api_min"], row["unreviewed_commits_before"], flush=True)
json.dump({"seed": SEED, "n": N, "sample": out}, open(OUT, "w"), indent=1)
d = [x["commit_minus_api_min"] for x in out if x["commit_minus_api_min"] is not None]
print("matched", len(d), "of", N, "| commit-api minutes min/median/max", min(d), sorted(d)[len(d)//2], max(d), "| with earlier unreviewed copy", sum(1 for x in out if x["unreviewed_commits_before"]))
