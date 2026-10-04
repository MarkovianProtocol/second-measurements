#!/usr/bin/env python3
"""SM-016 recheck: (a) has EPA loaded any reporting-year forms for the year whose 1 July deadline has passed
(Envirofacts TRI_REPORTING_FORM count), and (b) for the newest loaded year, how many forms and facilities are
postmarked after 1 July, from a fresh pull of that year. Appends one JSON row to history/sm-016.jsonl.
Cheap mode (default) only does (a) plus the count of late forms for the newest year via a full re-pull if the
year's count changed since the last row. Run monthly."""
import json, os, sys, csv, io, urllib.request, datetime as dt
R = os.path.dirname(os.path.abspath(__file__)); H = os.path.join(R, "history", "sm-016.jsonl"); os.makedirs(os.path.dirname(H), exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0"}
def get(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=600).read().decode()
def count(year):
    return json.loads(get(f"https://data.epa.gov/efservice/TRI_REPORTING_FORM/REPORTING_YEAR/{year}/COUNT/JSON"))[0]["TOTALQUERYRESULTS"]
today = dt.date.today(); pending_year = today.year - 1 if today >= dt.date(today.year, 7, 1) else today.year - 2
row = {"date": today.isoformat(), "pending_year": pending_year, "pending_year_forms_loaded": count(pending_year)}
prev = [json.loads(l) for l in open(H)] if os.path.exists(H) else []
newest = pending_year if row["pending_year_forms_loaded"] else pending_year - 1
n = count(newest); row["newest_year"] = newest; row["newest_year_forms"] = n
last = next((p for p in reversed(prev) if p.get("newest_year") == newest), None)
if last is None or last.get("newest_year_forms") != n or "--full" in sys.argv:
    due = dt.date(newest + 1, 7, 1); late = 0; fac = set(); facl = set(); seen = set(); i = 0
    while i < n:
        txt = get(f"https://data.epa.gov/efservice/TRI_REPORTING_FORM/REPORTING_YEAR/{newest}/ROWS/{i}:{i+9999}/CSV")
        for r in csv.DictReader(io.StringIO(txt)):
            k = r.get("doc_ctrl_num")
            if not k or k in seen: continue
            seen.add(k); fac.add(r.get("tri_facility_id"))
            pm = (r.get("orig_postmark") or r.get("orig_received") or "")[:10]
            try: d = dt.date.fromisoformat(pm)
            except ValueError: continue
            if d > due: late += 1; facl.add(r.get("tri_facility_id"))
        i += 10000
    row.update({"forms": len(seen), "late_forms": late, "facilities": len(fac), "facilities_late": len(facl), "late_share_pct": round(100 * late / max(1, len(seen)), 2)})
else:
    row.update({k: last[k] for k in ("forms", "late_forms", "facilities", "facilities_late", "late_share_pct") if k in last}); row["unchanged"] = True
open(H, "a").write(json.dumps(row) + "\n"); print(row)
