#!/usr/bin/env python3
"""Hugging Face: "We run every file of your repositories through a malware scanner. Scanning is triggered at
each commit ... It can take up to a few minutes to be scanned." (docs/hub/security-malware)

Sample: the 150 most-downloaded models, 150 most-downloaded datasets, and 150 random recently-modified
models (pages 20-40 of lastModified). For each repo, the root directory listing with expand=true (direct
listings only; the recursive flag drops the field). Every file's per-scanner status and last-commit date.
Output: hf_scan_sample.json
"""
import json, time, random, sys, urllib.request, urllib.error, datetime as dt
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
random.seed(20261002)
def get(url, tries=4):
    for i in range(tries):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(20 * (i + 1)); continue
            return None
        except Exception: time.sleep(5)
    return None
repos = []
for kind, q in (("models", "sort=downloads&direction=-1&limit=150"), ("datasets", "sort=downloads&direction=-1&limit=150")):
    for r in get(f"https://huggingface.co/api/{kind}?{q}") or []: repos.append((kind, r["id"], "top"))
seen = {r[1] for r in repos}; rnd = []
for page in range(20, 40):
    for r in get(f"https://huggingface.co/api/models?sort=lastModified&direction=-1&limit=100&offset={page*100}") or []:
        if r["id"] not in seen: rnd.append(("models", r["id"], "recent"))
    time.sleep(1)
random.shuffle(rnd); repos += rnd[:150]
print(len(repos), "repos", file=sys.stderr)
out = []
for i, (kind, rid, group) in enumerate(repos):
    tree = get(f"https://huggingface.co/api/{kind}/{rid}/tree/main?expand=true")
    if tree is None: out.append({"kind": kind, "repo": rid, "group": group, "error": "no listing"}); continue
    files = []
    for e in tree:
        if e.get("type") != "file": continue
        s = e.get("securityFileStatus") or {}
        files.append({"path": e["path"], "size": e.get("size"), "date": (e.get("lastCommit") or {}).get("date"),
                      "status": s.get("status"), "av": (s.get("avScan") or {}).get("status"), "pickle": (s.get("pickleImportScan") or {}).get("status"),
                      "protectai": (s.get("protectAiScan") or {}).get("status"), "jfrog": (s.get("jFrogScan") or {}).get("status"),
                      "virustotal": (s.get("virusTotalScan") or {}).get("status")})
    out.append({"kind": kind, "repo": rid, "group": group, "files": files})
    if i % 25 == 0: print(i, "repos listed", file=sys.stderr); json.dump(out, open("hf_scan_sample.json", "w"))
    time.sleep(0.5)
json.dump({"fetched_at": dt.datetime.now(dt.timezone.utc).isoformat(), "repos": out}, open("hf_scan_sample.json", "w"))
print("done", len(out), "repos;", sum(len(r.get("files", [])) for r in out), "files", file=sys.stderr)
