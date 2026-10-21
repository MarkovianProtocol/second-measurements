#!/usr/bin/env python3
"""SM-023 census: every CVE the Ubuntu Security Team rates priority "critical", from Ubuntu's own CVE API, with its
security notices (USNs). Writes the raw records and one summary row per CVE.
python3 -I census.py OUT_RAW.json OUT_ROWS.json"""
import json, sys, time, urllib.request
from datetime import datetime, timezone
API = "https://ubuntu.com/security/cves.json?priority=critical&limit=20&offset={}"
UA = {"User-Agent": "Mozilla/5.0 (second-measurements; hello@markovianprotocol.com)"}

def page(off):
    for attempt in range(8):                     # the API has served an unfiltered page under load: refetch until it is the critical set
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(API.format(off), headers=UA), timeout=60))
            if all(c.get("priority") == "critical" for c in d["cves"]) and d.get("total_results", 0) < 1000:
                return d
        except Exception as e:
            print("retry", off, e, file=sys.stderr)
        time.sleep(5 * (attempt + 1))
    sys.exit(f"offset {off}: no filtered page after 8 tries")

def ts(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00")).replace(tzinfo=timezone.utc) if s else None

first = page(0); total = first["total_results"]; cves = list(first["cves"])
for off in range(20, total, 20):
    cves += page(off)["cves"]
assert len({c["id"] for c in cves}) == total, (len(cves), total)
read_at = datetime.now(timezone.utc).isoformat()
json.dump({"read_at": read_at, "total_results": total, "cves": cves}, open(sys.argv[1], "w"), indent=1)

rows = []
for c in cves:
    pub = ts(c["published"])
    usn = sorted((ts(n["published"]), n["id"]) for n in c.get("notices", []) if n.get("published"))
    st = [(p["name"], s["release_codename"], s["status"]) for p in c.get("packages", []) for s in p.get("statuses", [])]
    open_ = [x for x in st if x[2] in ("needed", "pending", "deferred")]
    rows.append({"cve": c["id"], "published": c["published"], "packages": sorted({p["name"] for p in c.get("packages", [])}),
                 "first_usn": usn[0][1] if usn else None, "first_usn_at": usn[0][0].isoformat() if usn else None,
                 "days_to_first_usn": round((usn[0][0] - pub).total_seconds() / 86400, 2) if usn else None,
                 "last_usn_at": usn[-1][0].isoformat() if usn else None, "n_usn": len(usn),
                 "release_statuses": st, "still_open": open_,
                 "age_days_at_read": round((ts(read_at) - pub).total_seconds() / 86400, 1)})
json.dump(rows, open(sys.argv[2], "w"), indent=1)
print(f"{total} critical CVEs read {read_at}; {sum(1 for r in rows if r['first_usn'])} with a USN")
