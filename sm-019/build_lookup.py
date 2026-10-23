#!/usr/bin/env python3
"""SM-019 lookup data: per prime recipient (by UEI; by name where there is none), every sub-award at or above the
reporting threshold in subaward_lag_rows.csv.gz: count, late (reported after the end of the month following the
sub-award: months_late > 0), late share, late dollars (excluding sub-awards larger than their prime award, as the
paper does), median months late, by fiscal year and by awarding agency. Totals are checked against the paper's summary.
python3 build_lookup.py subaward_lag_rows.csv.gz subaward_lag_summary.json OUT.json"""
import csv, gzip, json, sys, collections, statistics
ROWS, SUMM, OUT = sys.argv[1:4]
P = {}
def blank(): return {"name": "", "n": 0, "late": 0, "late_usd": 0.0, "lags": [], "fy": collections.defaultdict(lambda: [0, 0]), "ag": collections.Counter(), "agl": collections.Counter()}
tot = late = 0; usd = 0.0
for r in csv.DictReader(gzip.open(ROWS, "rt", encoding="utf-8")):
    k = r["prime_uei"] or "name:" + r["prime"]
    p = P.get(k) or P.setdefault(k, blank()); p["name"] = r["prime"]; p["n"] += 1; tot += 1
    lag = int(r["months_late"]); f = p["fy"][r["fy"]]; f[0] += 1; p["ag"][r["agency"]] += 1
    if lag > 0:
        p["late"] += 1; late += 1; f[1] += 1; p["lags"].append(lag); p["agl"][r["agency"]] += 1
        if r["amount_exceeds_prime_award"] != "1": a = float(r["amount"] or 0); p["late_usd"] += a; usd += a
S = json.load(open(SUMM))["all"]
assert (tot, late) == (S["records"], S["late"]), (tot, late, S["records"], S["late"])
assert abs(usd - S["late_amount_usd"]) < 5, (usd, S["late_amount_usd"])
out = {"totals": {"records": tot, "late": late, "late_usd": round(usd)}, "primes": {}}
for k, p in P.items():
    out["primes"][k] = [p["name"], p["n"], p["late"], round(p["late_usd"]), statistics.median(p["lags"]) if p["lags"] else 0,
                        {fy: v for fy, v in sorted(p["fy"].items())}, [[a, c, p["agl"][a]] for a, c in p["ag"].most_common(4)]]
json.dump(out, open(OUT, "w"), separators=(",", ":"), ensure_ascii=False)
print(out["totals"], len(P), "primes")
