"""Second paths for the Burn-Murdoch note: chained (Fisher) sector totals, professional and business services
(NAICS 54-56) in place of 54, aggregate hours in place of jobs, and the tech-only split.
Inputs: data/ (as calc.py) + data/alt/ (FRED nominal value added VAI/VAFI/VAPST/VAPBS and real RVAPBS; BLS CES jobs
and average weekly hours, read 7 Nov 2026). Run: python3 alt.py"""
import csv, json, math, glob, os
H = os.path.dirname(os.path.abspath(__file__)); D = os.path.join(H, "data"); A = os.path.join(D, "alt")
def fred(path, k): return {r["observation_date"][:7]: float(r[k]) for r in csv.DictReader(open(path)) if "2012" <= r["observation_date"] < "2026-07"}
R = {k: fred(os.path.join(D, k + ".csv"), k) for k in ("RVAI", "RVAFI", "RVAPST")}
R["RVAPBS"] = fred(os.path.join(A, "RVAPBS.csv"), "RVAPBS")
N = {k: fred(os.path.join(A, k + ".csv"), k) for k in ("VAI", "VAFI", "VAPST", "VAPBS")}
m = {}
for fn in glob.glob(os.path.join(D, "*.json")) + glob.glob(os.path.join(A, "*.json")):
    for s in json.load(open(fn))["Results"]["series"]:
        for d in s["data"]:
            if d["period"] != "M13": m.setdefault(s["seriesID"], {})[(int(d["year"]), int(d["period"][1:]))] = float(d["value"])
qs = sorted(R["RVAI"])
def qa(sid, q): y, mo = int(q[:4]), int(q[5:7]); return sum(m[sid][(y, mo + i)] for i in range(3)) / 3
def qh(e, h, q): y, mo = int(q[:4]), int(q[5:7]); return sum(m[e][(y, mo + i)] * m[h][(y, mo + i)] for i in range(3)) / 3
E = {s: {q: qa(s, q) for q in qs} for s in ("CES5000000001", "CES5552000001", "CES6054000001", "CES6000000001")}
def add(*ss): return {q: sum(s[q] for s in ss) for q in qs}
def fisher(reals, noms):
    idx = {qs[0]: 1.0}
    for a, b in zip(qs, qs[1:]):
        pa = [n[a] / r[a] for r, n in zip(reals, noms)]; pb = [n[b] / r[b] for r, n in zip(reals, noms)]
        L = sum(p * r[b] for p, r in zip(pa, reals)) / sum(p * r[a] for p, r in zip(pa, reals))
        P = sum(p * r[b] for p, r in zip(pb, reals)) / sum(p * r[a] for p, r in zip(pb, reals))
        idx[b] = idx[a] * math.sqrt(L * P)
    return idx
def slope(s):
    tr = [q for q in qs if q <= "2019-10"]; xs = [qs.index(q) for q in tr]; ys = [math.log(s[q]) for q in tr]
    mx = sum(xs) / len(xs); my = sum(ys) / len(ys)
    return sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
a, b = "2022-10", "2026-04"; nq = qs.index(b) - qs.index(a)
def excess(s): return math.log(s[b] / s[a]) * 100 - slope(s) * nq * 100
info, fin, pst, pbs = R["RVAI"], R["RVAFI"], R["RVAPST"], R["RVAPBS"]
eI, eF, eP, ePBS = (E[s] for s in ("CES5000000001", "CES5552000001", "CES6054000001", "CES6000000001"))
hrs = {q: qh("CES5000000001", "CES5000000002", q) + qh("CES5552000001", "CES5500000002", q) + qh("CES6054000001", "CES6054000002", q) for q in qs}
V = [("note: summed chained $, NAICS 51+52+54, jobs", add(info, fin, pst), add(eI, eF, eP)),
     ("Fisher-chained, NAICS 51+52+54, jobs", fisher([info, fin, pst], [N["VAI"], N["VAFI"], N["VAPST"]]), add(eI, eF, eP)),
     ("Fisher-chained, NAICS 51+52+54, hours", fisher([info, fin, pst], [N["VAI"], N["VAFI"], N["VAPST"]]), hrs),
     ("Fisher-chained, NAICS 51+52+54-56, jobs", fisher([info, fin, pbs], [N["VAI"], N["VAFI"], N["VAPBS"]]), add(eI, eF, ePBS))]
print("Output per worker, Q1 2012 = 100, at Q2 2026, and excess over 2012-19 trend Q4 2022 -> Q2 2026 (log points)")
for name, v, e in V:
    o = {q: v[q] / e[q] for q in qs}
    print(f"  {name:<42} index {o[b] / o[qs[0]] * 100:6.1f}   excess {excess(o):+5.1f} = output {excess(v):+5.1f} + jobs/hours below trend {-excess(e):+5.1f}")
sec = [("information", info, eI), ("finance", fin, eF), ("prof & business services 54-56", pbs, ePBS)]
tot = sum(e[a] for _, _, e in sec)
print("\nNAICS 54-56 variant: each sector's jobs below its own trend, weighted by Q4 2022 job share")
for n, v, e in sec: print(f"  {n:<32} share {e[a] / tot:.2f}  contribution {-excess(e) * e[a] / tot:+.1f}")
o = {q: info[q] / eI[q] for q in qs}
print(f"\nTech (information) alone: output per worker excess {excess(o):+.1f} = output {excess(info):+.1f} + jobs below trend {-excess(eI):+.1f}")
