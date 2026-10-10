"""Two reads of the same 150-station sample, two hours apart (results_sample150.json 02:59Z, results_sample150_b.json 05:14Z, 6 Oct 2026):
does Date Uploaded hold still? python3 drift_check.py exhibits/results_sample150.json exhibits/results_sample150_b.json"""
import json, sys
a = json.load(open(sys.argv[1])); b = json.load(open(sys.argv[2]))
A = {s["callSign"]: s for s in a["stations"]}; B = {s["callSign"]: s for s in b["stations"]}
common = set(A) & set(B); files = changed = added = removed = 0
for cs in common:
    fa = {(f["name"], f["path"]): f["uploaded"] for f in A[cs]["files"]}; fb = {(f["name"], f["path"]): f["uploaded"] for f in B[cs]["files"]}
    files += len(fa); added += len(set(fb) - set(fa)); removed += len(set(fa) - set(fb))
    changed += sum(1 for k in set(fa) & set(fb) if fa[k] != fb[k])
print(f"read A {a['fetched_at'][:16]}Z, read B {b['fetched_at'][:16]}Z: stations in both {len(common)}; files in A {files}; same file, different date {changed}; only in B {added}; only in A {removed}")
