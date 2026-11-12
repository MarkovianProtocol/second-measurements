"""Kobeissi Letter 12 Nov 2026 recompute: core CPI and 'supercore' 3-month annualized rates, Oct 2026.
Input: BLS CPI-U seasonally adjusted indexes (data/bls_cpi_agent_pull.json, BLS API v1 pull of 12 Nov 2026) and
BLS relative importance, December 2025 (services less energy services 60.744, shelter 35.625, rent of shelter 35.333)."""
import json
d = json.load(open("data/bls_cpi_agent_pull.json"))
S = {s["seriesID"]: {(int(x["year"]), int(x["period"][1:])): float(x["value"]) for x in s["data"] if x["period"] != "M13" and x["value"] not in ("-", "")} for s in d["Results"]["series"]}
core, sle, sh, sl2 = S["CUSR0000SA0L1E"], S["CUSR0000SASLE"], S["CUSR0000SAH1"], S["CUSR0000SASL2RS"]
RI = {"sle": 60.744, "sh": 35.625}
DEC = (2025, 12)
def prev(m, k=1):
    y, mo = m; mo -= k
    while mo < 1: mo += 12; y -= 1
    return (y, mo)
def ann3_index(ser, m):
    p = prev(m, 3)
    return ((ser[m] / ser[p]) ** 4 - 1) * 100 if m in ser and p in ser else None
def sc_month(m, update=True):
    """one-month % change of services less energy services excluding shelter, by subtraction of weighted changes"""
    p = prev(m)
    if not all(x in s for x in (m, p) for s in (sle, sh)): return None
    if update:   # relative importance carried forward by each index's price change since December 2025
        w1 = RI["sle"] * sle[p] / sle[DEC]; w2 = RI["sh"] * sh[p] / sh[DEC]
    else:
        w1, w2 = RI["sle"], RI["sh"]
    g1, g2 = sle[m] / sle[p] - 1, sh[m] / sh[p] - 1
    return (w1 * g1 - w2 * g2) / (w1 - w2)
def ann3_chain(fn, m, **kw):
    gs = [fn(prev(m, k), **kw) for k in (0, 1, 2)]
    if None in gs: return None
    f = 1
    for g in gs: f *= 1 + g
    return (f ** 4 - 1) * 100
out = {}
for m in sorted(core):
    if m < (2024, 4): continue
    row = {"core": ann3_index(core, m), "supercore_updated_w": ann3_chain(sc_month, m, update=True),
           "supercore_fixed_w": ann3_chain(sc_month, m, update=False), "services_less_rent_of_shelter": ann3_index(sl2, m)}
    out[f"{m[0]}-{m[1]:02d}"] = {k: (round(v, 2) if v is not None else None) for k, v in row.items()}
for k, v in out.items(): print(k, v)
json.dump(out, open("results.json", "w"), indent=1)
m = (2026, 10)
print("monthly supercore % Aug-Oct 2026 (updated w):", [round(sc_month(prev(m, k)) * 100, 3) for k in (2, 1, 0)])
