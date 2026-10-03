# SM-015 recheck: the two browsers' CT log lists. Apple: list version and Last-Modified, and how many "usable" logs
# have a closed window. Chrome: list version, logs over a 366-day window, and the MMD the list declares for RFC 6962
# logs. Standard library, seconds.
import json, os, sys, urllib.request, datetime
R = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "second-measurements recheck (markovianprotocol.com)"}
now = datetime.datetime.utcnow(); P = lambda s: datetime.datetime.fromisoformat(s.replace("Z", ""))
r = urllib.request.urlopen(urllib.request.Request("https://valid.apple.com/ct/log_list/current_log_list.json", headers=UA), timeout=60)
apple = json.load(r); lm = r.headers.get("Last-Modified")
closed = 0; usable = 0
for op in apple["operators"]:
    for l in op.get("logs", []) + op.get("tiled_logs", []):
        if list(l["state"])[0] == "usable":
            usable += 1; ti = l.get("temporal_interval")
            if ti and P(ti["end_exclusive"]) < now: closed += 1
c = json.load(urllib.request.urlopen(urllib.request.Request("https://www.gstatic.com/ct/log_list/v3/log_list.json", headers=UA), timeout=60))
n = over = 0; mmd6962 = set(); c6962 = 0
for op in c["operators"]:
    for l in op.get("logs", []):
        if list(l["state"])[0] in ("usable", "qualified"):
            n += 1; c6962 += 1; mmd6962.add(l.get("mmd"))
            ti = l.get("temporal_interval")
            if ti and (P(ti["end_exclusive"]) - P(ti["start_inclusive"])).days > 366: over += 1
    for l in op.get("tiled_logs", []):
        if list(l["state"])[0] in ("usable", "qualified"):
            n += 1; ti = l.get("temporal_interval")
            if ti and (P(ti["end_exclusive"]) - P(ti["start_inclusive"])).days > 366: over += 1
row = {"date": now.strftime("%Y-%m-%d"), "apple_version": apple.get("version"), "apple_last_modified": lm, "apple_usable": usable, "apple_usable_closed": closed,
       "chrome_version": c.get("version"), "chrome_logs": n, "chrome_rfc6962": c6962, "chrome_rfc6962_mmd": sorted(mmd6962), "chrome_over_366d": over}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-015.jsonl"), "a").write(json.dumps(row) + "\n")
