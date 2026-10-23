# SM-024 recheck: the 150 FARA agents found overdue on 22 Oct 2026. Monthly: reads the FARA Unit's bulk document file and
# its active-registrant list; an agent clears when a supplemental statement appears after 21 Oct 2026, or when it leaves
# the active list (terminated). Usage: python3 sm024.py [history.jsonl]   (baseline: sm024_baseline.json beside this file)
import json, os, sys, io, csv, zipfile, datetime, urllib.request
R = os.path.dirname(os.path.abspath(__file__)); HIST = sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-024.jsonl")
UA = {"User-Agent": "Mozilla/5.0 (markovian-recheck; hello@markovianprotocol.com)"}
get = lambda u: urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=180).read()
BASE = json.load(open(os.path.join(R, "sm024_baseline.json")))          # [{"reg", "name"}...] the 150 rows
since = datetime.date(2026, 10, 21)
z = zipfile.ZipFile(io.BytesIO(get("https://efile.fara.gov/bulk/zip/FARA_All_RegistrantDocs.csv.zip")))
filed = {}
for r in csv.DictReader(io.TextIOWrapper(z.open(z.namelist()[0]), encoding="utf-8", errors="replace")):
    if r["Document Type"] == "Supplemental Statement":
        m, d, y = r["Date Stamped"].split("/"); dd = datetime.date(int(y), int(m), int(d))
        if dd > since: filed.setdefault(r["Registration Number"], []).append(str(dd))
active = {str(x["Registration_Number"]) for x in json.loads(get("https://efile.fara.gov/api/v1/Registrants/json/Active"))["REGISTRANTS_ACTIVE"]["ROW"]}
rows = [{"reg": b["reg"], "name": b["name"], "filed_since": sorted(filed.get(b["reg"], [])), "still_active": b["reg"] in active} for b in BASE]
row = {"date": datetime.date.today().isoformat(), "baseline": len(BASE),
       "filed_since": sum(1 for r in rows if r["filed_since"]), "terminated": sum(1 for r in rows if not r["still_active"]),
       "still_overdue": sum(1 for r in rows if r["still_active"] and not r["filed_since"]),
       "cleared": [{"reg": r["reg"], "name": r["name"], "filed": r["filed_since"][:1], "terminated": not r["still_active"]} for r in rows if r["filed_since"] or not r["still_active"]]}
print(json.dumps({k: v for k, v in row.items() if k != "cleared"}))
os.makedirs(os.path.dirname(HIST), exist_ok=True); open(HIST, "a").write(json.dumps(row) + "\n")
