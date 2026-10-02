# NIST NVD (2026-04-15): "CVEs appearing in CISA's KEV Catalog - Our goal is to enrich these within one business day of receipt".
# For each KEV entry added since 2026-04-15: start = later of KEV dateAdded and NVD publication; end = NIST's first analysis
# event in the NVD change history ("Initial Analysis"). Business days between them (weekends excluded; US holidays not).
import json, time, datetime, urllib.request, sys
def get(u):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "markovian-second-measurement"}), timeout=120))
        except Exception: time.sleep(10 * (i + 1))
def bdays(a, b):
    d, n = a.date(), 0
    while d < b.date():
        d += datetime.timedelta(days=1)
        if d.weekday() < 5: n += 1
    return n
kev = [v for v in json.load(open("kev.json"))["vulnerabilities"] if v["dateAdded"] >= "2026-04-15"]
rows = []
for v in kev:
    c = v["cveID"]; cv = get(f"https://services.nvd.nist.gov/rest/json/cves/2.0?cveId={c}"); time.sleep(6.5)
    h = get(f"https://services.nvd.nist.gov/rest/json/cvehistory/2.0?cveId={c}"); time.sleep(6.5)
    pub = cv["vulnerabilities"][0]["cve"]["published"] if cv and cv.get("vulnerabilities") else None
    status = cv["vulnerabilities"][0]["cve"].get("vulnStatus") if pub else None
    ev = [x["change"] for x in (h or {}).get("cveChanges", [])]
    ia = sorted(x["created"] for x in ev if x.get("eventName") in ("Initial Analysis",))
    start = max(datetime.datetime.fromisoformat(v["dateAdded"]), datetime.datetime.fromisoformat(pub[:19])) if pub else None
    row = {"cve": c, "kev_added": v["dateAdded"], "nvd_published": pub, "status": status, "initial_analysis": ia[0] if ia else None}
    if start and ia: row["business_days"] = bdays(start, datetime.datetime.fromisoformat(ia[0][:19]))
    rows.append(row); print(json.dumps(row), flush=True)
json.dump(rows, open("nvd_kev.json", "w"), indent=1)
