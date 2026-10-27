#!/usr/bin/env python3
"""Pull the headline figures out of A Fin Management LLC's Form ADV (Affinity Partners, CRD 315482).
python3 -I parse_adv.py exhibits/adv_315482_2026-03-22.pdf -> adv_figures.json (needs pdftotext)"""
import json, re, subprocess, sys
t = subprocess.run(["pdftotext", "-layout", sys.argv[1], "-"], capture_output=True, text=True).stdout
L = t.splitlines()
def after(i, pat, n=6):
    for l in L[i:i + n]:
        m = re.search(pat, l)
        if m: return m.group(1)
filed = re.search(r"(\d{1,2}/\d{1,2}/\d{4}) \d", t).group(1)
aum = re.search(r"Total:\s+\(c\)\s+\$\s*([\d,]+)\s+\(f\)\s+(\d+)", t)
nonus = None
for i, l in enumerate(L):
    if "attributable to clients who" in l and "non-United States" in L[i + 1]:
        nonus = after(i + 1, r"\$\s*([\d,]+)")
funds = []
for i, l in enumerate(L):
    if "(a) Name of the private fund:" in l:
        f = {"name": L[i + 1].strip()}
        for j in range(i, min(i + 400, len(L))):
            if j > i + 5 and "(a) Name of the private fund:" in L[j]: break
            if "Current gross asset value of the private fund" in L[j]: f["gross_asset_value"] = int(after(j, r"\$\s*([\d,]+)").replace(",", ""))
            if "Minimum investment commitment" in L[j]: f["minimum_investment"] = int(after(j, r"\$\s*([\d,]+)").replace(",", ""))
            if "Approximate number of the private fund's beneficial owners" in L[j]: f["beneficial_owners"] = int(after(j, r"^\s*(\d+)\s*$", 4) or after(j, r"(\d+)\s*$", 4) or -1)
            if "beneficially owned by non-United States persons" in L[j]: f["pct_non_us"] = int(after(j, r"(\d+)%"))
        funds.append(f)
out = dict(filing="Form ADV annual amendment", filed=filed, adviser="A FIN MANAGEMENT LLC (Affinity Partners), CRD 315482",
           regulatory_aum=int(aum.group(1).replace(",", "")), accounts=int(aum.group(2)),
           aum_non_us=int(nonus.replace(",", "")), funds=funds)
out["aum_non_us_share"] = round(out["aum_non_us"] / out["regulatory_aum"], 4)
json.dump(out, open("adv_figures.json", "w"), indent=1)
print(json.dumps(out, indent=1))
