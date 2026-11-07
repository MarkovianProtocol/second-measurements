"""Recompute of John Burn-Murdoch's 1-2 Nov 2026 thread on US productivity in AI-adopting sectors.

Inputs (data/):
  RVAI.csv, RVAFI.csv, RVAPST.csv  BEA real value added by industry, billions of chained 2017 dollars,
                                   quarterly, as served by FRED (fredgraph.csv?id=...), read 7 Nov 2026
  bls_*.json                       BLS CES all employees, thousands, seasonally adjusted, BLS API v2, read 7 Nov 2026
Sectors: Information (NAICS 51), Finance and insurance (52), Professional, scientific and technical services (54).
Chained-dollar values are summed across the three sectors; that is an approximation (chained dollars are not
strictly additive).
Run: python3 calc.py   -> prints the figures in the note and writes results.csv
"""
import csv, json, math, os

H = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(H, "data")
MAP = {"RVAI": "CES5000000001", "RVAFI": "CES5552000001", "RVAPST": "CES6054000001"}
NAME = {"RVAI": "information", "RVAFI": "finance", "RVAPST": "prof_services"}

va = {}
for k in MAP:
    with open(os.path.join(D, k + ".csv")) as f:
        va[k] = {r["observation_date"][:7]: float(r[k]) for r in csv.DictReader(f) if r["observation_date"] >= "2012"}
emp = {}
for fn in ("bls_2012-2021.json", "bls_2022-2026.json"):
    for s in json.load(open(os.path.join(D, fn)))["Results"]["series"]:
        for d in s["data"]:
            if d["period"].startswith("M") and d["period"] != "M13":
                emp.setdefault(s["seriesID"], {})[(int(d["year"]), int(d["period"][1:]))] = float(d["value"])

qs = sorted(va["RVAI"])
def q_emp(k, q):
    y, m = int(q[:4]), int(q[5:7]); v = [emp[MAP[k]].get((y, m + i)) for i in range(3)]
    return sum(v) / 3 if None not in v else None
qs = [q for q in qs if all(q_emp(k, q) for k in MAP)]
E = {k: {q: q_emp(k, q) for q in qs} for k in MAP}
cVA = {q: sum(va[k][q] for k in MAP) for q in qs}
cE = {q: sum(E[k][q] for k in MAP) for q in qs}
opw = {q: cVA[q] / cE[q] for q in qs}

def slope(series):  # log-linear trend over 2012Q1-2019Q4, per quarter
    tr = [q for q in qs if "2012-01" <= q <= "2019-10"]
    xs = [qs.index(q) for q in tr]; ys = [math.log(series[q]) for q in tr]
    mx = sum(xs) / len(xs); my = sum(ys) / len(ys)
    b = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
    return b, my - b * mx
def vs_trend(series):
    b, a = slope(series)
    return {q: (series[q] / math.exp(a + b * qs.index(q)) - 1) * 100 for q in qs}

dev = vs_trend(opw)
with open(os.path.join(H, "results.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["quarter", "output_per_worker_index_2012Q1", "output_per_worker_vs_2012_19_trend_pct"]
               + [f"{NAME[k]}_{x}" for k in MAP for x in ("real_va_bn2017", "jobs_thousands")])
    for q in qs:
        w.writerow([q, round(opw[q] / opw["2012-01"] * 100, 2), round(dev[q], 2)]
                   + [v for k in MAP for v in (va[k][q], round(E[k][q], 1))])

print("2012-19 trend, output per worker: %.2f%% a year" % ((math.exp(4 * slope(opw)[0]) - 1) * 100))
for q in ("2019-01", "2019-10", "2020-10", "2021-10", "2022-10", "2026-04"):
    print(f"  {q}: index {opw[q] / opw['2012-01'] * 100:.1f}, vs trend {dev[q]:+.1f}%")
a, b = "2022-10", "2026-04"; nq = qs.index(b) - qs.index(a)
print(f"\nExcess over 2012-19 trend, {a} to {b}, log points")
rows = [("output, three sectors", cVA), ("jobs, three sectors", cE)] + [(f"output, {NAME[k]}", va[k]) for k in MAP] + [(f"jobs, {NAME[k]}", E[k]) for k in MAP]
for name, s in rows:
    act = math.log(s[b] / s[a]) * 100; exp = slope(s)[0] * nq * 100
    print(f"  {name:<24} actual {act:+6.1f}  trend {exp:+6.1f}  excess {act - exp:+6.1f}")
print("\nJobs shortfall weighted by Q4 2022 job share")
for k in MAP:
    wgt = E[k][a] / cE[a]; ex = math.log(E[k][b] / E[k][a]) * 100 - slope(E[k])[0] * nq * 100
    print(f"  {NAME[k]:<14} share {wgt:.2f}  contribution {wgt * ex:+.1f}")
ie = emp[MAP["RVAI"]]; pk = max((v, k) for k, v in ie.items() if k[0] >= 2022); last = max(ie)
print(f"\nInformation jobs: peak {pk[0]:,.0f}k {pk[1]}, latest {ie[last]:,.0f}k {last}, {(ie[last] / pk[0] - 1) * 100:+.1f}%")
iv = vs_trend(va["RVAI"]); print(f"Information output vs its 2012-19 trend: {iv[a]:+.1f}% at {a}, {iv[b]:+.1f}% at {b}")
