# Uniform random sample of 120 Claude Code PRs from AIDev v4 (hf://datasets/hao-li/AIDev@v4).
import json, random, pyarrow.parquet as pq, pyarrow.compute as pc
from huggingface_hub import HfFileSystem
pf = pq.ParquetFile(HfFileSystem().open("datasets/hao-li/AIDev@v4/all_pull_request.parquet"))
t = pf.read(columns=["agent","html_url","created_at"])
cc = t.filter(pc.equal(t["agent"], "Claude_Code")).to_pylist()
random.seed(20260930)
json.dump(random.sample(cc, 120), open("aidev_cc_sample.json","w"))
print(len(cc))
