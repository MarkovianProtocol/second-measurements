# GitHub search counts for AIDev's identification queries, over AIDev v4's own date range per agent,
# plus the Claude Code PR-body footer. Needs the GitHub CLI (gh), logged in.
import json, subprocess, time
END = "2025-10-24"  # last created_at in AIDev v4 all_pull_request, every agent
Q = [
  ("OpenAI_Codex", 2069595, "is:pr head:codex/", "2025-05-16"),
  ("Devin",          43298, "is:pr author:devin-ai-integration[bot]", "2024-12-24"),
  ("Cursor",        212544, "is:pr head:cursor/", "2025-01-01"),
  ("Claude_Code",    18232, 'is:pr "Co-Authored-By: Claude"', "2025-02-24"),
  ("Claude_Code footer", None, 'is:pr "Generated with Claude Code"', "2025-02-24"),
  ("Claude_Code union",  None, 'is:pr "Generated with Claude Code" OR "Co-Authored-By: Claude"', "2025-02-24"),
]
def count(q):
    r = subprocess.run(["gh","api","-X","GET","search/issues","-f",f"q={q}","-f","per_page=1"], capture_output=True, text=True, check=True)
    d = json.loads(r.stdout); return d["total_count"], d["incomplete_results"]
for name, aidev, q, start in Q:
    n, inc = count(f"{q} created:{start}..{END}")
    ratio = f"{n/aidev:.3f}" if aidev else "-"
    print(f"{name:20} aidev={aidev or '-':>9} github_today={n:>9} ratio={ratio} incomplete={inc}")
    time.sleep(3)
