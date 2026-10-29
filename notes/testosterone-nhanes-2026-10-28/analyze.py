#!/usr/bin/env python3
"""NHANES men's total testosterone by cycle, and testosterone prescriptions among men with low levels.
Cycles: 1999-2004 (SSCHL surplus sera, Roche Elecsys immunoassay, ID-GC/MS-standardized; no subsample weight published,
exam weights used), 2011-2016 (TST, CDC ID-LC-MS/MS, HoSt-certified, exam weights). NHANES 2017-2018 measured no testosterone (SSTST_J
has estradiol, not testosterone); 2021-2023 (TST_L, ID-LC-MS/MS, phlebotomy weight WTPH2YR; its prescription file
has no drug names, so no treatment figures). 1999-2004 values are ng/mL in the file, converted to ng/dL. Men 20+. Low = total testosterone < 300 ng/dL (AUA 2018 guideline cut-off), morning session only for
the low-T rows (testosterone peaks in the morning). Prescription = any reported prescription drug name containing
TESTOSTERONE in the past 30 days. Usage: python3 -I analyze.py  (reads nhanes/*.xpt, writes results.json)"""
import json, numpy as np, pandas as pd
R = lambda f: pd.read_sas(f"nhanes/{f}.xpt", format="xport")
CYC = [("1999-2000", "SSCHL_A", "SSTESTO", None, "DEMO", "PH", "RXQ_RX", "RXD240B"),
       ("2001-2002", "SSCHL_B", "SSTESTO", None, "DEMO_B", "PH_B", "RXQ_RX_B", "RXD240B"),
       ("2003-2004", "SSCHL_C", "SSTESTO", None, "DEMO_C", "PH_C", "RXQ_RX_C", "RXDDRUG"),
       ("2011-2012", "TST_G", "LBXTST", None, "DEMO_G", "FASTQX_G", "RXQ_RX_G", "RXDDRUG"),
       ("2013-2014", "TST_H", "LBXTST", None, "DEMO_H", "FASTQX_H", "RXQ_RX_H", "RXDDRUG"),
       ("2015-2016", "TST_I", "LBXTST", None, "DEMO_I", "FASTQX_I", "RXQ_RX_I", "RXDDRUG"),
       ("2021-2023", "TST_L", "LBXTST", "WTPH2YR", "DEMO_L", "FASTQX_L", None, None)]
def wq(x, w, q):
    o = np.argsort(x); x, w = np.asarray(x)[o], np.asarray(w)[o]; c = np.cumsum(w) / w.sum(); return float(x[np.searchsorted(c, q)])
out = {}
for cyc, tf, tv, wv, df, sf, rf, rv in CYC:
    t = R(tf)[["SEQN", tv] + ([wv] if wv else [])]; d = R(df)[["SEQN", "RIAGENDR", "RIDAGEYR", "WTMEC2YR"]]
    s = R(sf).rename(columns={"PHDSESNZ": "PHDSESN"})[["SEQN", "PHDSESN"]]; s["PHDSESN"] = s.PHDSESN.round()   # xport stores 0 as 5.4e-79
    if rf is None: rx = pd.DataFrame({"SEQN": [], "D": []}); rv = "D"     # 2021-2023 prescription file has no drug names
    else: rx = R(rf)
    rx[rv] = rx[rv].astype(str).str.upper() if rx[rv].dtype != object else rx[rv].apply(lambda b: b.decode() if isinstance(b, bytes) else str(b)).str.upper()
    trt = set(rx.loc[rx[rv].str.contains("TESTOSTERONE", na=False), "SEQN"])
    if tv == "SSTESTO": t[tv] = t[tv] * 100          # 1999-2004 file reports ng/mL
    m = t.merge(d, on="SEQN").merge(s, on="SEQN", how="left")
    m = m[(m.RIAGENDR == 1) & (m.RIDAGEYR >= 20) & m[tv].notna()].copy()
    m["w"] = m[wv] if wv else m.WTMEC2YR; m = m[m.w > 0]
    m["trt"] = m.SEQN.isin(trt); m["low"] = m[tv] < 300
    r = {"n_men_20plus": int(len(m)), "weighted_median_ng_dl": round(wq(m[tv], m.w, .5)), "weighted_mean_ng_dl": round(float(np.average(m[tv], weights=m.w))),
         "pct_on_testosterone_rx": round(100 * float(np.average(m.trt, weights=m.w)), 2)}
    for lo, hi in ((20, 39), (40, 59), (60, 200)):
        g = m[(m.RIDAGEYR >= lo) & (m.RIDAGEYR <= hi)]
        r[f"median_{lo}_{min(hi,80)}"] = round(wq(g[tv], g.w, .5)) if len(g) else None; r[f"n_{lo}_{min(hi,80)}"] = int(len(g))
    am = m[(m.PHDSESN == 0) & ~m.trt]
    r["morning_untreated_n"] = int(len(am)); r["morning_untreated_pct_below_300"] = round(100 * float(np.average(am.low, weights=am.w)), 1)
    al = m[(m.PHDSESN == 0)]
    low = al[al.low]
    r["morning_below_300_n"] = int(len(low)); r["morning_below_300_on_rx_n"] = int(low.trt.sum())
    r["morning_below_300_pct_on_rx"] = round(100 * float(np.average(low.trt, weights=low.w)), 1) if len(low) and rf else None
    if not rf: r["pct_on_testosterone_rx"] = None; r["morning_below_300_on_rx_n"] = None; r["morning_untreated_note"] = "no drug names in 2021-2023; all men counted"
    out[cyc] = r
json.dump(out, open("results.json", "w"), indent=1)
print(pd.DataFrame(out).T.to_string())
