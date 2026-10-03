#!/usr/bin/env python3
"""Per root program: for every root certificate the program includes today, how old is the newest Standard
audit period end on the record, and how many are past 365+92 days (the next annual statement overdue).
Reads ccadb_v5.csv; writes per_program_roots.json and lag_histogram.json."""
import csv, datetime as dt, collections, json
TODAY = dt.date(2026, 10, 3)
rows = list(csv.DictReader(open("ccadb_v5.csv")))
def d(s):
    s = (s or "").strip().replace(".", "-")
    try: return dt.date.fromisoformat(s[:10])
    except Exception: return None
out = {}
for p in ("Mozilla", "Chrome", "Apple", "Microsoft"):
    roots = [r for r in rows if r["Certificate Record Type"] == "Root Certificate" and (r.get(f"{p} Status") or "").strip() == "Included" and (r.get("Revocation Status") or "") in ("", "Not Revoked")]
    ages = []; over = []
    for r in roots:
        pe = d(r.get("Standard Audit Period End Date"))
        if not pe: continue
        age = (TODAY - pe).days; ages.append(age)
        if age > 365 + 92: over.append({"owner": r["CA Owner"], "root": r["Certificate Name"], "period_end": pe.isoformat(), "age_days": age,
                                        "elsewhere": {q: (r.get(f"{q} Status") or "") for q in ("Mozilla", "Chrome", "Apple", "Microsoft") if q != p}})
    ages.sort()
    out[p] = {"included_roots": len(roots), "with_audit_date": len(ages), "median_age_days": ages[len(ages)//2] if ages else None, "p90_age_days": ages[int(len(ages)*.9)] if ages else None,
              "max_age_days": ages[-1] if ages else None, "roots_overdue": len(over), "owners_overdue": len({o["owner"] for o in over}), "overdue": sorted(over, key=lambda o: -o["age_days"])}
json.dump(out, open("per_program_roots.json", "w"), indent=1)
# statement-lag histogram (Standard audits, trusted records with own audits)
trusted = lambda r: any((r.get(k) or "").strip() in ("Included", "Trusted") for k in ("Mozilla Status", "Chrome Status", "Apple Status", "Microsoft Status"))
live = [r for r in rows if (r.get("Revocation Status") or "") in ("", "Not Revoked") and (r.get("Audits Same as Parent") or "").lower() != "true" and trusted(r)]
docs = {}
for r in live:
    u = (r.get("Standard Audit URL") or "").strip(); pe = d(r.get("Standard Audit Period End Date")); sd = d(r.get("Standard Audit Statement Date"))
    if u and pe and sd and pe <= TODAY - dt.timedelta(days=92): docs[u] = (sd - pe).days
lags = sorted(docs.values())
json.dump({"n": len(lags), "lags": lags, "buckets": sorted(collections.Counter(min(l // 10 * 10, 200) for l in lags).items())}, open("lag_histogram.json", "w"))
for p, v in out.items(): print(p, {k: v[k] for k in v if k != "overdue"})
