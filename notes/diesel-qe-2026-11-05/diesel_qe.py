#!/usr/bin/env python3
"""Recompute every number in diesel-qe-2026-11-05.md from the files in this folder.
Run: shasum -a 256 -c SHA256SUMS && python3 diesel_qe.py   (needs pandas + xlrd)"""
import os, pandas as pd
H = os.path.dirname(os.path.abspath(__file__))
def eia(f):
    d = pd.read_excel(os.path.join(H, "eia", f), sheet_name="Data 1", skiprows=2); d.columns = ["date", "v"]; return d
def fred(s):
    d = pd.read_csv(os.path.join(H, "fred", s + ".csv"), parse_dates=["observation_date"]); d.columns = ["date", "v"]; return d.dropna()

BBL_PER_T = 7.46  # ultra-low-sulphur diesel, barrels per metric tonne
use = eia("WDIUPUS2w.xls"); last4 = use.tail(4)
rate = last4.v.mean()  # thousand barrels per day
print(f"US distillate product supplied, 4 weeks to {last4.date.iloc[-1].date()}: {rate:,.2f} kb/d")
for name, t in [("whole deal (0.3 + 0.5 + 1.0 Mt)", 1.8e6), ("first tranche 300,000 t", 3e5), ("Agioi Fanendes 40,000 t", 4e4)]:
    kb = t * BBL_PER_T / 1e3
    print(f"  {name}: {kb:,.0f} kb = {kb/rate:.2f} days = {kb/rate*24:.1f} hours")

p = eia("EMD_EPD2D_PTE_NUS_DPGw.xls")
now = p.iloc[-1]; yr = p[p.date <= now.date - pd.Timedelta(days=364)].iloc[-1]; mx = p.loc[p.v.idxmax()]
print(f"On-highway diesel {now.date.date()}: ${now.v:.3f}; {yr.date.date()}: ${yr.v:.3f} ({(now.v/yr.v-1)*100:+.0f}%); record ${mx.v:.3f} on {mx.date.date()}")

sec = fred("WSHOSHO"); dep = fred("DPSACBW027SBOG")  # sec: $ millions (Wednesday level); dep: $ billions (week average)
def at(d, day): return d[d.date <= pd.Timestamp(day)].iloc[-1]
for name, a, b in [("QE 2020-22", "2020-03-11", "2022-03-09"), ("QE1-3", "2008-09-10", "2014-10-29"), ("QT", "2022-06-01", "2026-10-21")]:
    s0, s1, d0, d1 = at(sec, a), at(sec, b), at(dep, a), at(dep, b)
    ds = (s1.v - s0.v) / 1e6; dd = (d1.v - d0.v) / 1e3
    print(f"{name}: Fed securities {s0.date.date()}->{s1.date.date()} {ds:+.2f} T; deposits {d0.date.date()}->{d1.date.date()} {dd:+.2f} T; {dd/ds:+.2f} per $")
