#!/usr/bin/env python3
"""SM-023: each critical CVE's priority history in ubuntu-cve-tracker, read from the `Priority:` lines its commits added,
and the first commit that set it to critical. One `git log -p -G^Priority:` per CVE file (the partial clone fetches those
blobs on demand). python3 -I crit_dates.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json uct/ OUT.json"""
import json, subprocess, sys
raw = json.load(open(sys.argv[1]))["cves"]; UCT = sys.argv[2]; out = []
for c in sorted(raw, key=lambda c: c["id"]):
    i = c["id"]
    log = subprocess.run(["git", "-C", UCT, "log", "--reverse", "-p", "--format=@@%cI|%h|%s", "-G^Priority:", "--",
                          f"active/{i}", f"retired/{i}", f"ignored/{i}"], capture_output=True, text=True).stdout
    cur, hist = None, []
    for line in log.splitlines():
        if line.startswith("@@") and "|" in line: cur = line[2:].split("|", 2)
        elif line.startswith("+Priority:") and cur:
            hist.append({"at": cur[0], "commit": cur[1], "priority": line[len("+Priority:"):].strip(), "msg": cur[2][:80]})
    crit = next((h for h in hist if h["priority"].startswith("critical")), None)
    out.append({"cve": i, "first_priority": hist[0]["priority"] if hist else None, "critical_at": crit["at"] if crit else None,
                "critical_commit": crit["commit"] if crit else None, "history": hist})
    print(i, out[-1]["first_priority"], out[-1]["critical_at"], file=sys.stderr)
json.dump(out, open(sys.argv[3], "w"), indent=1)
print(len(out), "CVEs;", sum(1 for o in out if o["critical_at"]), "with a critical commit")
