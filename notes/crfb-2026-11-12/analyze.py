"""CRFB (Maya MacGuineas) statement of 9 Nov 2026: recompute each number from Treasury and BEA data. Stdlib only.
Inputs in data/: Treasury Fiscal Data API pulls of 12 Nov 2026 (MTS table 1 Oct 2026, MTS table 9 Sep 2026 and Sep 2025,
Debt to the Penny 2026), FRED GDP quarters, SSA Trustees excerpt."""
import json
J = lambda f: json.load(open("data/" + f))["data"]
B = 1e9
oct26 = [r for r in J("mts1_2026-10.json") if r["classification_desc"] == "October"][-1]   # FY 2027 block comes last
print(f"October 2026 deficit (Treasury, actual): ${float(oct26['current_month_dfct_sur_amt'])/B:,.1f}B; receipts ${float(oct26['current_month_gross_rcpt_amt'])/B:,.1f}B, outlays ${float(oct26['current_month_gross_outly_amt'])/B:,.1f}B (CBO estimate 9 Nov: $409B)")
for f, fy in (("mts9_2026-09.json", "FY2026"), ("mts9_2025-09.json", "FY2025")):
    rows = {r["classification_desc"]: float(r["current_fytd_rcpt_outly_amt"]) for r in J(f) if r["current_fytd_rcpt_outly_amt"] not in ("null", None)}
    ni, de = rows["Net Interest"], rows["National Defense"]
    print(f"{fy}: net interest ${ni/B:,.1f}B vs national defense ${de/B:,.1f}B -> interest higher by ${(ni-de)/B:,.1f}B")
d = J("debt_to_penny_2026.json")
first = next(r for r in d if float(r["tot_pub_debt_out_amt"]) >= 40e12)
fyend = [r for r in d if r["record_date"] <= "2026-09-30"][-1]
print(f"Gross debt first at or above $40T: {first['record_date']} (${float(first['tot_pub_debt_out_amt'])/1e12:.3f}T); latest {d[-1]['record_date']} ${float(d[-1]['tot_pub_debt_out_amt'])/1e12:.3f}T")
pub = float(fyend["debt_held_public_amt"])
gdp = [float(l.split()[1]) for l in open("data/fred_GDP_2025Q4-2026Q3.txt") if l[:2] == "20"]
fy_avg = sum(gdp) / 4
print(f"Debt held by the public {fyend['record_date']}: ${pub/1e12:.3f}T")
print(f"  / FY2026 GDP (average of four quarters, ${fy_avg/1e3:.3f}T): {100*pub/(fy_avg*B):.1f}%")
print(f"  / latest quarter, Q3 2026 annual rate (${gdp[-1]/1e3:.3f}T): {100*pub/(gdp[-1]*B):.1f}%")
