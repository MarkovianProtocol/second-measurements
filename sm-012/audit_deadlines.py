#!/usr/bin/env python3
"""CCADB policy 5.2: audit information "MUST be uploaded to the CCADB no later than 92 calendar days from the point-in-time
date or the end date of the period of time"; otherwise an auditor-signed explanatory letter in Bugzilla by the same deadline.

From the CCADB AllCertificateRecordsCSVFormatV5 export: every distinct audit statement (by URL) on a certificate record that is
Included or Trusted in at least one root program, not revoked, and not inheriting its parent's audits. Two measures:
  late-by-statement-date: the auditor's statement is itself dated more than 92 days after the period end (a lower bound on
  upload lateness, since upload can't precede the statement);
  overdue-today: the newest audit on record ended more than 365+92 days ago (the next annual statement is past due).
Writes audit_compliance.json and prints the tables."""
import csv, datetime as dt, collections, json, sys
TODAY = dt.date(2026, 10, 3)
rows = list(csv.DictReader(open("ccadb_v5.csv")))
def d(s):
    s = (s or "").strip().replace(".", "-")
    try: return dt.date.fromisoformat(s[:10])
    except Exception: return None
trusted = lambda r: any((r.get(k) or "").strip() in ("Included", "Trusted") for k in ("Mozilla Status", "Chrome Status", "Apple Status", "Microsoft Status"))
live = [r for r in rows if (r.get("Revocation Status") or "").strip() in ("", "Not Revoked") and (r.get("Audits Same as Parent") or "").strip().lower() != "true" and trusted(r)]
print("rows", len(rows), "| live, trusted, own audits:", len(live), file=sys.stderr)
res = {}
for k in ["Standard", "TLS BR", "NetSec", "TLS EVG", "Code Signing", "S/MIME BR"]:
    docs = {}
    for r in live:
        url = (r.get(f"{k} Audit URL") or "").strip(); pe = d(r.get(f"{k} Audit Period End Date")); sd = d(r.get(f"{k} Audit Statement Date"))
        if not url or not pe: continue
        v = docs.setdefault(url, {"owner": r["CA Owner"], "firm": r.get("Audit Firm"), "period_end": pe, "statement": sd, "type": r.get(f"{k} Audit Type"), "records": 0,
                                  "programs": set()})
        v["records"] += 1
        for p in ("Mozilla", "Chrome", "Apple", "Microsoft"):
            if (r.get(f"{p} Status") or "").strip() in ("Included", "Trusted"): v["programs"].add(p)
    D = list(docs.values())
    judge = [v for v in D if v["period_end"] <= TODAY - dt.timedelta(days=92) and v["statement"]]
    late = [v for v in judge if (v["statement"] - v["period_end"]).days > 92]
    lags = sorted((v["statement"] - v["period_end"]).days for v in judge)
    # overdue today: per CA owner, the newest period end of this audit kind
    newest = {}
    for v in D: newest[v["owner"]] = max(newest.get(v["owner"], v["period_end"]), v["period_end"])
    overdue = {o: (TODAY - e).days for o, e in newest.items() if (TODAY - e).days > 365 + 92}
    res[k] = {"statements": len(D), "judgeable": len(judge), "late_by_statement_date": len(late), "share_on_time": round(1 - len(late) / len(judge), 3) if judge else None,
              "median_lag_days": lags[len(lags) // 2] if lags else None, "p90_lag_days": lags[int(len(lags) * .9)] if lags else None, "max_lag_days": lags[-1] if lags else None,
              "ca_owners": len(newest), "overdue_today": overdue,
              "late": sorted([{"owner": v["owner"], "lag_days": (v["statement"] - v["period_end"]).days, "period_end": v["period_end"].isoformat(), "statement": v["statement"].isoformat(),
                               "firm": v["firm"], "type": v["type"], "records": v["records"], "programs": sorted(v["programs"])} for v in late], key=lambda x: -x["lag_days"])}
    print(f"{k:13} statements {len(D):4} judgeable {len(judge):4} late {len(late):3} ({len(late)/max(1,len(judge))*100:4.1f}%)  lag median {res[k]['median_lag_days']} p90 {res[k]['p90_lag_days']} max {res[k]['max_lag_days']} | CA owners {len(newest)} overdue-today {len(overdue)}", file=sys.stderr)
json.dump(res, open("audit_compliance.json", "w"), indent=1, default=str)
for k in ("Standard", "TLS BR"):
    print(f"\n{k} late by statement date:", file=sys.stderr)
    for x in res[k]["late"]: print(f"  {x['lag_days']:4} d  {x['owner'][:40]:40} period end {x['period_end']}  statement {x['statement']}  {x['firm'] or ''}  {','.join(x['programs'])}", file=sys.stderr)
    print(f"{k} overdue today (newest period end > 457 d ago):", {o: v for o, v in sorted(res[k]['overdue_today'].items(), key=lambda kv: -kv[1])}, file=sys.stderr)
