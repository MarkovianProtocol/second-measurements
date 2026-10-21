#!/usr/bin/env python3
"""Second path for SM-023: when each critical CVE first entered ubuntu-cve-tracker (git), i.e. when it was known to the
Ubuntu Security Team. One `git log --reverse --name-only` pass over the CVE files. python3 -I known_dates.py rows.json uct/ OUT.json"""
import json, subprocess, sys, re
from datetime import datetime, timezone
def P(s):   # API timestamps without an offset are UTC; never read them as the local time of the machine running this
    t = datetime.fromisoformat(s.replace("Z", "+00:00"))
    return t.replace(tzinfo=timezone.utc) if t.tzinfo is None else t.astimezone(timezone.utc)
rows = json.load(open(sys.argv[1])); repo = sys.argv[2]; ids = {r["cve"] for r in rows}
paths = ["active", "retired", "ignored", "embargoed"]   # directory pathspecs; per-file pathspecs took 20+ min
log = subprocess.run(["git", "-C", repo, "log", "--reverse", "--format=@@%H %cI", "--name-only", "--"] + paths, capture_output=True, text=True).stdout
first, cur = {}, None
for line in log.splitlines():
    if line.startswith("@@"): cur = line[2:].split()
    elif line.strip():
        c = line.strip().split("/")[-1]
        if c in ids and c not in first: first[c] = cur
out = []
for r in rows:
    pub = datetime.fromisoformat(r["published"]).replace(tzinfo=timezone.utc); f = first.get(r["cve"])
    if not f: out.append({"cve": r["cve"], "published": r["published"], "tracker_first_commit": None}); continue
    known = P(f[1]); usn = P(r["first_usn_at"]) if r["first_usn_at"] else None
    out.append({**{k: r[k] for k in ("cve", "published", "first_usn", "first_usn_at")}, "tracker_first_commit": f[0], "known_at": known.isoformat(),
                "known_minus_published_days": round((known - pub).total_seconds() / 86400, 2),
                "days_known_to_usn": round((usn - known).total_seconds() / 86400, 2) if usn else None})
json.dump(out, open(sys.argv[3], "w"), indent=1)
print(len(out), "rows;", len(first), "found in tracker history")
