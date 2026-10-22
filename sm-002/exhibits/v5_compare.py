#!/usr/bin/env python3
"""Outside coverage check of AIDev v5 (hao-li/AIDev-7.6M), prepared 2026-10-17 for Hao Li (offered on AIDev discussion 16).
Per agent: PRs in v5's all_pull_request (agent, created_at columns only) vs GitHub search counts for the same
identification query over the same dates. Needs pyarrow, huggingface_hub, and gh logged in. python3 v5_compare.py OUT.json"""
import json, subprocess, sys, time, collections
import pyarrow.parquet as pq
from huggingface_hub import HfFileSystem
fs = HfFileSystem()
f = pq.ParquetFile(fs.open("datasets/hao-li/AIDev-7.6M/all_pull_request.parquet"))
cols = [c for c in ("agent", "created_at") if c in f.schema_arrow.names]
cnt = collections.Counter(); lo, hi = {}, {}
for i in range(f.num_row_groups):
    t = f.read_row_group(i, columns=cols).to_pydict()
    for a, c in zip(t["agent"], t["created_at"]):
        cnt[a] += 1; c = str(c)[:10]
        if a not in lo or c < lo[a]: lo[a] = c
        if a not in hi or c > hi[a]: hi[a] = c
    if i % 20 == 0: print("row group", i, "of", f.num_row_groups, flush=True)
Q = {"OpenAI_Codex": ["is:pr head:codex/"], "Devin": ["is:pr author:devin-ai-integration[bot]"], "Cursor": ["is:pr head:cursor/"],
     "Claude_Code": ['is:pr "Co-Authored-By: Claude" in:body', 'is:pr "Generated with Claude Code" in:body',
                     'is:pr "Generated with Claude Code" OR "Co-Authored-By: Claude" in:body', "is:pr author:app/claude"]}
def gh(q):
    r = subprocess.run(["gh", "api", "-X", "GET", "search/issues", "-f", f"q={q}", "-f", "per_page=1"], capture_output=True, text=True, check=True)
    d = json.loads(r.stdout); time.sleep(3); return d["total_count"], d["incomplete_results"]
out = {"dataset": "hao-li/AIDev-7.6M", "read_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "agents": {}}
for a, n in cnt.most_common():
    row = {"v5_prs": n, "first": lo[a], "last": hi[a], "github": {}}
    for q in Q.get(a, []):
        row["github"][q] = gh(f"{q} created:{lo[a]}..{hi[a]}")
    out["agents"][a] = row; print(a, row, flush=True)
json.dump(out, open(sys.argv[1], "w"), indent=1)
