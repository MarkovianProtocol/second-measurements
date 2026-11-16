#!/usr/bin/env python3
"""Hand-check sample for SM-027: 30 issues, random.seed(1028), from the Mac probe rows that are 2026, answered 404,
and have a CVE date on or before 2026-07-30. Saves each GitLab CNA record from cve.org and reports whether it cites the issue.
Usage: python3 -I handcheck.py exhibits/probe_mac_2026-10-28.csv exhibits/cveorg/"""
import csv, datetime as dt, json, os, random, re, subprocess, sys
rows = [r for r in csv.reader(open(sys.argv[1])) if r[1][:4] == "2026" and r[3] == "404" and dt.date.fromisoformat(r[1][:10]) <= dt.date(2026, 7, 30)]
random.seed(1028); sample = random.sample(rows, 30)
os.makedirs(sys.argv[2], exist_ok=True); ok = 0
for cve, pub, iid, code, ts in sample:
    raw = subprocess.run(["curl", "-sL", "-m", "30", f"https://cveawg.mitre.org/api/cve/{cve}"], capture_output=True, text=True).stdout
    open(os.path.join(sys.argv[2], f"{cve}.json"), "w").write(raw)
    refs = [r["url"] for r in json.loads(raw)["containers"]["cna"].get("references", [])]
    named = any(re.search(rf"gitlab-org/gitlab/(-/)?(issues|work_items)/{iid}\b", u) for u in refs)
    ok += named; print(cve, iid, "names_issue", named)
print("cites the same issue:", ok, "of", len(sample))
