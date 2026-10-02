#!/usr/bin/env python3
"""Second reading: every file the listing did not call malware-safe is looked up again through
paths-info (one call per repository, up to 50 paths), then the tables for the paper are printed.
Reads and updates hf_scan_sample.json; writes hf_scan_final.json."""
import json, urllib.request, urllib.error, collections, time, datetime as dt, sys
UA = {"User-Agent": "second-measurements (markovianprotocol.com)", "Content-Type": "application/json"}
d = json.load(open("hf_scan_sample.json")); now = dt.datetime.now(dt.timezone.utc)
age = lambda f: (now - dt.datetime.fromisoformat(f["date"].replace("Z", "+00:00"))).days
by = collections.defaultdict(list)
for r in d["repos"]:
    for f in r.get("files", []):
        if f.get("date") and age(f) >= 1 and f["av"] != "safe": by[(r["kind"], r["repo"])].append(f)
for (kind, repo), fs in by.items():
    for i in range(0, len(fs), 50):
        chunk = fs[i:i + 50]
        body = json.dumps({"paths": [f["path"] for f in chunk], "expand": True}).encode()
        try:
            res = json.load(urllib.request.urlopen(urllib.request.Request(f"https://huggingface.co/api/{kind}/{repo}/paths-info/main", data=body, headers=UA), timeout=90))
            m = {x["path"]: x for x in res}
            for f in chunk:
                s = (m.get(f["path"], {}).get("securityFileStatus") or {})
                f["av2"] = (s.get("avScan") or {}).get("status"); f["status2"] = s.get("status"); f["pickle2"] = (s.get("pickleImportScan") or {}).get("status")
        except urllib.error.HTTPError as e:
            for f in chunk: f["av2"] = f"HTTP {e.code}"
        time.sleep(0.3)
json.dump(d, open("hf_scan_sample.json", "w"))

files = []
for r in d["repos"]:
    for f in r.get("files", []):
        if not f.get("date") or f["size"] is None or age(f) < 1: continue
        av = f.get("av2") if f.get("av2") and not str(f["av2"]).startswith("HTTP") else f["av"]
        if str(f.get("av2", "")).startswith("HTTP"): continue          # gated repository
        files.append({**f, "repo": r["repo"], "kind": r["kind"], "group": r["group"], "age": age(f), "avf": av})
G = 2 ** 31
print(len(files), "files >=1 day old, readable;", collections.Counter(f["avf"] for f in files).most_common())
print("under 2 GiB:", collections.Counter(f["avf"] for f in files if f["size"] < G).most_common())
print("2 GiB and over:", collections.Counter(f["avf"] for f in files if f["size"] >= G).most_common())
for lo, hi, lab in ((0, 1e6, "under 1 MB"), (1e6, 1e8, "1 MB-100 MB"), (1e8, 1e9, "100 MB-1 GB"), (1e9, 2e9, "1-2 GB"), (2e9, 3e9, "2-3 GB"), (3e9, 5e9, "3-5 GB"), (5e9, 1e13, "over 5 GB")):
    g = [f for f in files if lo <= f["size"] < hi]; c = collections.Counter(f["avf"] for f in g)
    print(f"  {lab:12} n={len(g):5} scanned {c['safe']:5} unscanned {c['unscanned']:4}")
tot = sum(f["size"] for f in files); un = sum(f["size"] for f in files if f["avf"] == "unscanned")
print(f"bytes unscanned: {un / tot * 100:.1f}% of {tot / 1e12:.2f} TB")
print("badge on unscanned files:", collections.Counter(f.get("status2") or f["status"] for f in files if f["avf"] == "unscanned").most_common())
json.dump({"files": files, "fetched_at": d["fetched_at"]}, open("hf_scan_final.json", "w"))
