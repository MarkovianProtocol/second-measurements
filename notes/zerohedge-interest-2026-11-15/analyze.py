"""ZeroHedge, 12 Nov 2026: "at $1.4 trillion spent on gross interest in the past 12 months ... as a percentage of government revenue,
it was 28.2%, also the highest on record." Recompute from Treasury Fiscal Data (interest_expense, MTS table 4) and OMB Historical
Tables (FY2027 budget: Table 3.2 line 901 gross interest on Treasury debt securities; Table 1.1 total receipts). Stdlib only."""
import json, glob, collections, zipfile, re, xml.etree.ElementTree as ET
B = 1e9
# --- last 12 months, Treasury
ie = json.load(open("data/interest_expense.json"))["data"]
m = collections.defaultdict(float)
for r in ie: m[r["record_date"]] += float(r["month_expense_amt"])
W = [d for d in sorted(m) if "2025-11-30" <= d <= "2026-10-31"]; assert len(W) == 12
gi = sum(m[d] for d in W)
rec = {}
for f in sorted(glob.glob("data/mts4_*.json")):
    d = f.split("mts4_")[1][:10]
    rec[d] = {r["classification_desc"]: float(r["current_month_net_rcpt_amt"]) for r in json.load(open(f))["data"] if r.get("current_month_net_rcpt_amt") not in (None, "null")}
R = lambda k: sum(rec[d][k] for d in W)
tot, onb = R("Total -- Receipts"), R("Total -- On-Budget")
print(f"Nov 2025-Oct 2026: gross interest ${gi/B:,.1f}B; total receipts ${tot/B:,.1f}B -> {100*gi/tot:.2f}%; on-budget receipts ${onb/B:,.1f}B -> {100*gi/onb:.2f}%")
print(f"  receipts needed for 28.2%: ${gi/0.282/B:,.0f}B")
# --- history, OMB
ns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
def read(p):
    z = zipfile.ZipFile(p); ss = [''.join(t.text or '' for t in si.iter('{%s}t' % ns['m'])) for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', ns)]
    rows = []
    for r in ET.fromstring(z.read('xl/worksheets/sheet1.xml')).iter('{%s}row' % ns['m']):
        row = {}
        for c in r.findall('m:c', ns):
            v = c.find('m:v', ns)
            if v is not None: row[re.match(r'[A-Z]+', c.get('r')).group(0)] = ss[int(v.text)] if c.get('t') == 's' else v.text
        rows.append(row)
    return rows
t32 = read("data/BUDGET-2027-TAB-4-2.xlsx"); hdr = next(r for r in t32 if r.get("A", "").startswith("Function and Subfunction"))
years = {col: y for col, y in hdr.items() if col != "A" and re.fullmatch(r"\d{4}", str(y))}
g = next(r for r in t32 if "Interest on Treasury debt securities (gross)" in r.get("A", ""))
gross = {int(years[c]): float(v) * 1e6 for c, v in g.items() if c in years and re.match(r"^-?[\d.]+$", str(v))}
t11 = read("data/BUDGET-2027-TAB-2-1.xlsx")
receipts = {int(r["A"]): float(r["B"]) * 1e6 for r in t11 if re.fullmatch(r"\d{4}", r.get("A", "")) and re.match(r"^[\d.]+$", str(r.get("B", "")))}
share = {y: gross[y] / receipts[y] for y in gross if y in receipts}
print("Line:", g["A"].strip(), "| years", min(share), "-", max(share))
top = sorted(share.items(), key=lambda x: -x[1])[:6]
print("Highest fiscal years, gross interest / total receipts:", ", ".join(f"FY{y} {100*s:.2f}%" for y, s in top))
print("FY2025:", f"{100*share.get(2025,0):.2f}%", "| years at or above the last-12-month share:", [y for y, s in share.items() if s >= gi / tot])
# --- the October figures in the same post
oct = [r for r in json.load(open("data/mts1_2026-10.json"))["data"] if r["classification_desc"] == "October"][-1]
print(f"October 2026: deficit ${float(oct['current_month_dfct_sur_amt'])/B:,.1f}B (Treasury MTS table 1); gross interest ${m['2026-10-31']/B:,.1f}B")
