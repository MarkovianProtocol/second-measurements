# MCP implementations dataset (arXiv 2607.10123, Zenodo 17573071): star floor, owner concentration,
# and GitHub language shares above vs below that floor. Needs the GitHub CLI (gh), logged in, and
# data/true_mcp_repos.jsonl from the Zenodo replication package in the working directory.
import json, statistics, collections, subprocess, time
R = [json.loads(l) for l in open("true_mcp_repos.jsonl")]
s = [int(r["stars"]) for r in R]
own = collections.Counter(r["full_name"].split("/")[0].lower() for r in R)
print(f"repos {len(R)}, stars min {min(s)} median {statistics.median(s)}; largest owner {own.most_common(1)[0]}")
B = '"Model Context Protocol" OR "MCP server" OR "MCP client" in:name,readme,description created:2024-01-01..2025-10-31'
def n(q):
    time.sleep(2.5)
    return int(subprocess.run(["gh", "api", "-X", "GET", "search/repositories", "-f", f"q={q}", "-f", "per_page=1",
                               "--jq", ".total_count"], capture_output=True, text=True, check=True).stdout)
hi, lo = n(f"{B} stars:>=50"), n(f"{B} stars:<50")
print(f"GitHub today: {hi} matching repos with >=50 stars, {lo} below ({100 * hi / (hi + lo):.1f}% above)")
for L in ("Python", "TypeScript", "JavaScript", "Go", "Rust"):
    a, b = n(f'{B} language:"{L}" stars:>=50'), n(f'{B} language:"{L}" stars:<50')
    print(f"  {L:11} >=50: {100 * a / hi:5.1f}%   <50: {100 * b / lo:5.1f}%")
