# SM-012 recheck: CCADB audit statements past the 92-day upload deadline, and included roots whose newest standard
# audit period ended more than 365+92 days ago, per root program. One CCADB export, standard library only.
import csv, datetime, io, json, os, sys, urllib.request, collections
R = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "second-measurements recheck (markovianprotocol.com)"}
raw = urllib.request.urlopen(urllib.request.Request("https://ccadb.my.salesforce-sites.com/ccadb/AllCertificateRecordsCSVFormatV5", headers=UA), timeout=180).read().decode("utf-8-sig")
rows = list(csv.DictReader(io.StringIO(raw)))
today = datetime.date.today()
def d(s):
    s = (s or "").strip()
    for f in ("%Y.%m.%d", "%Y-%m-%d"):
        try: return datetime.datetime.strptime(s, f).date()
        except ValueError: pass
    return None
def trusted(r):
    return any((r.get(k) or "").strip() in ("Included", "Trusted") for k in ("Mozilla Status", "Google Chrome Status", "Apple Status", "Microsoft Status"))
# statements: distinct standard-audit statements on trusted, not-revoked records carrying their own audit
seen = {}; late = 0; nothing = 0; total = 0
for r in rows:
    if not trusted(r) or not (r.get("Revocation Status") or "").startswith("Not Revoked"): continue
    if (r.get("Audits Same as Parent") or "").strip().upper() == "TRUE": continue
    pe, sd, url = d(r.get("Standard Audit Period End Date")), d(r.get("Standard Audit Statement Date")), (r.get("Standard Audit URL") or "").strip()
    if not (pe and sd and url): continue
    key = (url, sd, pe)
    if key in seen: continue
    seen[key] = True; total += 1
    if (sd - pe).days > 92: late += 1
# per program: included roots whose newest standard audit period end is older than 365+92 days
stale = {}
for prog, col in (("mozilla", "Mozilla Status"), ("chrome", "Google Chrome Status"), ("apple", "Apple Status"), ("microsoft", "Microsoft Status")):
    inc = [r for r in rows if r.get("Certificate Record Type") == "Root Certificate" and (r.get(col) or "").strip() == "Included"]
    n = 0
    for r in inc:
        pe = d(r.get("Standard Audit Period End Date"))
        if pe and (today - pe).days > 365 + 92: n += 1
    stale[prog] = (n, len(inc))
row = {"date": today.isoformat(), "records": len(rows), "statements": total, "past_92_days": late,
       **{f"stale_{p}": v[0] for p, v in stale.items()}, **{f"included_{p}": v[1] for p, v in stale.items()}}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-012.jsonl"), "a").write(json.dumps(row) + "\n")
