#!/usr/bin/env python3
"""(1) For every 2026 issue hidden in the anonymous probe: GraphQL workItem lookup as anonymous (null = not visible).
(2) For every 2025/2026 issue public in the probe: time from CVE publication to the system note
'made the item visible to everyone' (lag). Throttled for gitlab.com rate limits. Usage: apicheck_lag.py probe.csv out_prefix"""
import csv, json, subprocess, sys, time
from datetime import datetime
G = "https://gitlab.com/api/graphql"
def q(query):
    for _ in range(4):
        r = subprocess.run(["curl", "-s", "-m", "30", G, "-H", "Content-Type: application/json", "-d", json.dumps({"query": query})],
                           capture_output=True, text=True).stdout
        if r.startswith("{"): return json.loads(r)
        time.sleep(30)
    return None
rows = list(csv.reader(open(sys.argv[1])))
with open(sys.argv[2] + "_apicheck.csv", "w") as f:
    w = csv.writer(f, lineterminator="\n")
    for cve, pub, iid, code, ts in rows:
        if code != "404" or pub[:4] != "2026": continue
        d = q('{namespace(fullPath:"gitlab-org/gitlab"){workItem(iid:"%s"){iid title confidential}}}' % iid)
        wi = (d or {}).get("data", {}).get("namespace", {}).get("workItem", "ERR") if d else "ERR"
        w.writerow([cve, pub, iid, "null" if wi is None else ("ERR" if wi == "ERR" else "VISIBLE")]); f.flush(); time.sleep(3)
with open(sys.argv[2] + "_lag.csv", "w") as f:
    w = csv.writer(f, lineterminator="\n")
    for cve, pub, iid, code, ts in rows:
        if code != "200" or pub[:4] not in ("2025", "2026"): continue
        d = q('{project(fullPath:"gitlab-org/gitlab"){issue(iid:"%s"){notes(filter:ONLY_ACTIVITY,first:100){nodes{body createdAt}}}}}' % iid)
        try:
            vis = [n["createdAt"] for n in d["data"]["project"]["issue"]["notes"]["nodes"] if "visible to everyone" in n["body"]]
        except Exception:
            vis = None
        v = max(vis) if vis else ""
        lag = (datetime.fromisoformat(v.replace("Z", "+00:00")).replace(tzinfo=None) - datetime.fromisoformat(pub)).days if v else ""
        w.writerow([cve, pub, iid, v, lag, "ERR" if vis is None else ""]); f.flush(); time.sleep(3)
print("done")
