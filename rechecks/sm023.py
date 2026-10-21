# SM-023 recheck: Ubuntu's critical CVEs from its own API. Counts the kernel CVEs rated critical from the Ubuntu CVSS score
# ("Priority reason: See ubuntu cvss score"), how many have a USN, how many still show the main linux package needed or pending
# on a release in standard or Ubuntu Pro support, any newly critical since the last run, and whether the Ubuntu Pro FAQ still
# carries the 24-hour sentence. Daily. Usage: python3 sm023.py [history.jsonl]
import json, os, sys, time, datetime, urllib.request
R = os.path.dirname(os.path.abspath(__file__)); HIST = sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-023.jsonl")
UA = {"User-Agent": "Mozilla/5.0 (markovian-recheck; hello@markovianprotocol.com)"}
get = lambda u: json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
def page(off):
    for i in range(8):
        try:
            d = get(f"https://ubuntu.com/security/cves.json?priority=critical&limit=20&offset={off}")
            if all(c.get("priority") == "critical" for c in d["cves"]) and d.get("total_results", 0) < 1000: return d
        except Exception: pass
        time.sleep(5 * (i + 1))
    raise SystemExit(f"offset {off}: no filtered page")
first = page(0); cves = list(first["cves"])
for off in range(20, first["total_results"], 20): cves += page(off)["cves"]
today = datetime.date.today().isoformat()
rels = get("https://ubuntu.com/security/releases.json")["releases"]
PRO_END = {"focal": "2030-04-30", "bionic": "2028-05-31", "xenial": "2026-05-31", "trusty": "2024-05-31"}
STD = {r["codename"] for r in rels if not r.get("development") and r.get("codename") != "upstream" and (r.get("support_expires") or "")[:10] >= today}
PRO = STD | {c for c, e in PRO_END.items() if e >= today}
cvss = [c for c in cves if any("cvss" in (n.get("note") or "").lower() for n in (c.get("notes") or []))]
usn = lambda c: any(n["id"].startswith("USN-") for n in c.get("notices", []))
open_pro = lambda c: any(p["name"] == "linux" and s["release_codename"] in PRO and s["status"] in ("needed", "pending", "deferred") for p in c["packages"] for s in p["statuses"])
prev = [json.loads(l) for l in open(HIST)] if os.path.exists(HIST) else []
seen = set(prev[-1]["cvss_ids"]) if prev else set()
faq = urllib.request.urlopen(urllib.request.Request("https://discourse.ubuntu.com/raw/34042/23", headers=UA), timeout=60).read().decode("utf-8", "replace")
row = {"date": today, "critical_total": len(cves), "cvss_rated": len(cvss), "cvss_with_usn": sum(usn(c) for c in cvss),
       "cvss_open_on_pro": sum(open_pro(c) for c in cvss), "cvss_no_usn_open_on_pro": sum(open_pro(c) and not usn(c) for c in cvss),
       "new_cvss_rated": sorted(c["id"] for c in cvss if c["id"] not in seen) if prev else [],
       "faq_24h_sentence": "critical vulnerabilities are released within 24 hours" in faq,
       "cvss_ids": sorted(c["id"] for c in cvss)}
print(json.dumps({k: v for k, v in row.items() if k != "cvss_ids"}))
os.makedirs(os.path.dirname(HIST), exist_ok=True); open(HIST, "a").write(json.dumps(row) + "\n")
