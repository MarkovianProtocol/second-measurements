#!/usr/bin/env python3
"""Build site/measurements/sm-019.html from out/subaward_lag_summary.json and page_template.html. Every number in the
tables comes from the summary; the prose numbers are placeholders filled from the same file and asserted at the end.
python3 make_page.py"""
import json, os, html, re
HERE = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(HERE, "..", "site", "measurements", "sm-019.html")
S = json.load(open(os.path.join(HERE, "out", "subaward_lag_summary.json")))
E = html.escape
def n(x): return f"{x:,}"
def pct(a, b): return f"{100*a/b:.1f}%"
def usd_b(x): return f"${x/1e9:.1f} billion"
A = S["all"]; C = S["counts"]
# ---- by fiscal year
fy = []
for y, v in S["by_fy"].items():
    if int(y) < 2018: continue
    fy.append(f'<tr><td>FY{y}</td><td class="n">{n(v["records"])}</td><td class="n">{n(v["late"])}</td><td class="n">{pct(v["late"], v["records"])}</td><td class="n">{n(v["late_3plus_months"])}</td><td class="n">{"&ndash;" if y == "2026" else n(v["late_12plus_months"])}</td><td class="n">{usd_b(v["late_amount_usd"])}</td></tr>')
# ---- by agency (every agency with 1,000+ records, most late first)
ag = []
for k, v in S["by_agency"].items():
    ag.append(f'<tr><td>{E(k)}</td><td class="n">{n(v["records"])}</td><td class="n">{n(v["late"])}</td><td class="n">{pct(v["late"], v["records"])}</td><td class="n">{n(v["late_3plus_months"])}</td><td class="n">{("%g" % v["median_late_months"]) if v["median_late_months"] is not None else "&ndash;"}</td></tr>')
# ---- by prime recipient (top 25 by late count)
pr = []
for k, v in list(S["by_prime"].items())[:25]:
    agn = "; ".join(a.split(" (")[0] for a, _ in v["agencies"][:1])
    pr.append(f'<tr><td>{E(v["name"])}</td><td class="o">{E(k)}</td><td>{E(agn)}</td><td class="n">{n(v["records"])}</td><td class="n">{n(v["late"])}</td><td class="n">{pct(v["late"], v["records"])}</td><td class="n">{("%g" % v["median_late_months"]) if v["median_late_months"] is not None else "&ndash;"}</td></tr>')
# ---- clean primes: 500+ records, lowest late share -- sorted on the exact ratio, not the rounded display percentage,
# so two rows that round to the same percentage (e.g. 4.6%) still sort in their true order.
clean = sorted(((k, v) for k, v in S["by_prime"].items() if v["records"] >= 500), key=lambda kv: kv[1]["late"] / kv[1]["records"])[:8]
cl = "".join(f'<tr><td>{E(v["name"])}</td><td class="n">{n(v["records"])}</td><td class="n">{n(v["late"])}</td><td class="n">{pct(v["late"], v["records"])}</td></tr>' for k, v in clean)
top = next(iter(S["by_prime"].values()))
top25 = list(S["by_prime"].items())[:25]
V = {"RECORDS": n(A["records"]), "LATE": n(A["late"]), "LATEPCT": pct(A["late"], A["records"]), "LATE3": n(A["late_3plus_months"]), "LATE12": n(A["late_12plus_months"]),
     "LATEUSD": usd_b(A["late_amount_usd"]), "LATEUSDRAW": usd_b(A["late_amount_usd_raw"]), "LATEUSDEXCL": usd_b(A["late_amount_excluded_usd"]), "EXCLN": n(A["late_records_exceeding_prime"]),
     "MEDLATE": str(A["median_late_months"]),
     "ROWS": n(C["rows"]), "DUPS": n(C.get("dup_subawards_later_report", 0)), "BEFORE": n(C.get("reported_before_issued", 0)), "NODATES": n(C.get("no_dates", 0)),
     "COVR": n(S["covid"]["records"]), "COVL": n(S["covid"]["late"]), "COVP": pct(S["covid"]["late"], S["covid"]["records"]), "NCR": n(S["non_covid"]["records"]), "NCL": n(S["non_covid"]["late"]), "NCP": pct(S["non_covid"]["late"], S["non_covid"]["records"]),
     "NAG": str(len(S["by_agency"])), "NPR": str(len(S["by_prime"])), "TOPNAME": E(top["name"]), "TOPR": n(top["records"]), "TOPL": n(top["late"]), "TOPP": pct(top["late"], top["records"]),
     "TABLE_FY": "\n".join(fy), "TABLE_AG": "\n".join(ag), "TABLE_PR": "\n".join(pr), "TABLE_CLEAN": cl,
     "FY26R": n(S["by_fy"]["2026"]["records"]), "FY26L": n(S["by_fy"]["2026"]["late"]), "FY26P": pct(S["by_fy"]["2026"]["late"], S["by_fy"]["2026"]["records"]),
     "SGL": n(S["by_prime_business_type"]["state government"]["late"]), "SGP": pct(S["by_prime_business_type"]["state government"]["late"], A["late"]), "DUPAMT": n(C.get("dup_reports_with_different_amount", 0)),
     "FY24P": pct(S["by_fy"]["2024"]["late"], S["by_fy"]["2024"]["records"]), "FY24AT13": f"{S['censoring_at_13_months']['2024']['late_pct_at_13mo']}%",
     "GWN": n(S["gao_window"]["subawards_made_before_2023_08"]), "GWAFTER": n(S["gao_window"]["reported_2023_08_or_later"]), "GWSEEN": f"{S['gao_window']['late_share_reports_gao_could_see']}%", "GWNC": f"{S['gao_window']['noncovid_late_share_reports_gao_could_see']}%", "GWCOV": f"{S['gao_window']['covid_late_share_reports_gao_could_see']}%",
     "GWRECORDS": f"{S['gao_window']['late_share_records_no_dedup']}% of {n(S['gao_window']['records_no_dedup_total'])}",
     "TOP25SG": str(S["top25_state_govt_count"]), "TOP25LATE": n(S["top25_late_sum"]), "NOUEI": n(S["grouped_by_name_no_uei"]),
     "FY18R": n(S["by_fy"]["2018"]["records"]), "FY18L": n(S["by_fy"]["2018"]["late"]), "FY18P": pct(S["by_fy"]["2018"]["late"], S["by_fy"]["2018"]["records"])}
CE = S["censoring_at_13_months"]; F22 = S["by_fy"]["2022"]
V.update({"BELOW": n(C["below_threshold"]), "OCT26": n(C["made_after_fy2026"]), "APR1": n(C["covid_made_2020_04_01"]),
          "FY21P": pct(S["by_fy"]["2021"]["late"], S["by_fy"]["2021"]["records"]), "FY22P": pct(F22["late"], F22["records"]),
          "C19A": f"{CE['2019']['late_pct_at_13mo']}%", "C19B": f"{CE['2019']['late_pct_now']}%", "C21A": f"{CE['2021']['late_pct_at_13mo']}%", "C21B": f"{CE['2021']['late_pct_now']}%",
          "FY22RAW": usd_b(F22["late_amount_usd_raw"]), "FY22EXCL": usd_b(F22["late_amount_excluded_usd"])})
GW = S["gao_window"]; _r = C["late_likely_rereport_other_prime"]
V.update({"BELOWNONPOS": n(C["below_threshold_nonpositive"]), "BELOWRAISED": n(C["below_threshold_later_raised"]), "REPEATS": n(C["late_repeat_of_earlier_report"]), "REPOTHER": n(C["late_repeat_other_prime"]), "BELOWLATEUSD": usd_b(-C["below_threshold_late_amount_usd"]), "REREPORT": n(_r),
          "GWRECTHR": f"{GW['late_share_records_no_dedup_threshold']}% of {n(GW['records_no_dedup_threshold'])}",
          "REREPORTPTS": f"{100*A['late']/A['records'] - 100*(A['late']-_r)/(A['records']-_r):.1f} points"})
for y in ("2023", "2024", "2025"):
    V[f"FY{y[2:]}P"] = pct(S["by_fy"][y]["late"], S["by_fy"][y]["records"]); V[f"FY{y[2:]}R"] = n(S["by_fy"][y]["records"]); V[f"FY{y[2:]}L"] = n(S["by_fy"][y]["late"])
T = open(os.path.join(HERE, "page_template.html")).read().replace("{{STYLE}}", open(os.path.join(HERE, "style_block.html")).read())
import json as _json
_dep = os.path.join(HERE, "..", "zenodo", "sm-019", "deposit.json")
V["DOI"] = _json.load(open(_dep))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(_dep) else "pending"
for k, v in V.items(): T = T.replace("{{" + k + "}}", v)
left = re.findall(r"\{\{[A-Z0-9_]+\}\}", T); assert not left, "unfilled: " + ", ".join(left)
assert C["below_threshold"] == 936249 and S["by_prime"]["HBNJBZWWLE29"]["late"] == 32203 and S["by_prime"]["HBNJBZWWLE29"]["records"] == 43529, "correction note figures changed; fix the Corrected paragraph"
assert 75 <= 100 * S["by_prime_business_type"]["state government"]["late"] / A["late"] < 80, "state-government share left three-quarters; fix the title"
assert not any(len(k) != 12 for k in S["by_prime"]), "a 200+ recipient has no UEI; fix the grouping sentence"
open(OUT, "w").write(T); print("wrote", OUT, len(T), "bytes")
