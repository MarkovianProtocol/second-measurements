#!/usr/bin/env python3
"""Second measurement of GAO-24-106237's count: grant sub-awards reported after the 2 CFR 170 deadline.
Rule (Appendix A to Part 170, I.a.2.ii): "report no later than the end of the month following the month in which the
subaward was issued". USAspending's sub-award file carries the sub-award action date and the month and year the
prime awardee's SAM.gov (formerly FSRS) report was published, so the test is at month resolution: late when
(report_year, report_month) > (action month + 1). That is the rule's own resolution; a sub-award issued 7 November
and reported any time in December is on time, reported in January is late by one month.
Reads every Assistance_Subawards_*.csv inside the given zips without unpacking. GAO found about a quarter of records
are likely duplicates, so one sub-award here is one (prime award, sub-award number, action date); when it was
reported more than once the earliest report counts, every field taken from that report, which favours the prime
recipient.
A sub-award is in scope only when the amount on its earliest report meets the rule's threshold for its action date:
$30,000, or $25,000 for one made before 12 November 2020 (85 FR 49506). Reports below it are in the file but carry no
deadline, so they are counted (counts.below_threshold) and not scored.
Dollar totals exclude a late sub-award whose amount exceeds its own prime award's amount, GAO's own "impossibly
high" category (GAO-24-106237 fig. 3) -- the raw, uncapped sum is kept alongside it.
python3 -I subaward_lag.py out_dir zip1 [zip2 ...]"""
import sys, os, zipfile, io, csv, json, collections, datetime as dt, statistics, calendar
OUT, ZIPS = sys.argv[1], sys.argv[2:]; os.makedirs(OUT, exist_ok=True)
csv.field_size_limit(1 << 30)
# USAspending's own pandemic DEFC set (exhibits/usaspending_about-the-data-download.pdf, "Start Date for DEFC
# Tracking": L 3/6/2020, M 3/18/2020, N 3/27/2020, O 3/27/2020, P 4/24/2020, U 12/27/2020, V 3/11/2021; Z and "1"
# are the Infrastructure Investment and Jobs Act, tracked on the same system, and are excluded here). GAO's own
# definitional footnote for "COVID-19 grant subawards" (gao-24-106237.pdf, footnote 15) names no codes at all,
# just a prime award DEFC-tagged as pandemic funding; its footnote 6, listing L-M-N-O with "including", is about
# which three agencies GAO chose to interview, not about this definition.
COVID = set("LMNOPUV")
rows = []; counts = collections.Counter(); seen = {}
raw_gao = collections.Counter()   # every reported record (no dedup) inside GAO's 1 Aug 2023 read window, GAO's own method
def ym(d):
    try: return int(d[:4]), int(d[5:7])
    except Exception: return None
for Z in ZIPS:
    with zipfile.ZipFile(Z) as z:
        for n in z.namelist():
            if "Subawards" not in n or not n.endswith(".csv"): continue
            counts["files"] += 1
            with z.open(n) as fh:
                r = csv.DictReader(io.TextIOWrapper(fh, encoding="utf-8", errors="replace"))
                for x in r:
                    counts["rows"] += 1
                    rid = x.get("subaward_sam_report_id") or x.get("subaward_fsrs_report_id") or ""
                    k = (x.get("prime_award_unique_key") or "", (x.get("subaward_number") or "").strip().upper(), (x.get("subaward_action_date") or "")[:10])
                    a = ym(x.get("subaward_action_date") or "")
                    try: ry, rm = int(x.get("subaward_sam_report_year") or x.get("subaward_fsrs_report_year") or 0), int(x.get("subaward_sam_report_month") or x.get("subaward_fsrs_report_month") or 0)
                    except Exception: ry = rm = 0
                    if not a or not (1 <= rm <= 12) or ry < 2010: counts["no_dates"] += 1; continue
                    due = (a[0] + (1 if a[1] == 12 else 0), 1 if a[1] == 12 else a[1] + 1)
                    lag = (ry - due[0]) * 12 + (rm - due[1])           # months past the due month; <= 0 on time
                    a_str = f"{a[0]}-{a[1]:02d}"; r_str = f"{ry}-{rm:02d}"
                    covid_flag = a > (2020, 3) and any(c.strip()[:1] in COVID for c in (x.get("prime_award_disaster_emergency_fund_codes") or "").split(";") if c.strip())
                    # GAO's own method: every reported record (duplicates included), only the window its 1 Aug 2023 read could see,
                    # no reservation about an early or negative lag (GAO's text does not say it dropped any).
                    if a_str <= "2023-07" and r_str <= "2023-07":
                        raw_gao["total"] += 1; late_flag = lag > 0
                        if late_flag: raw_gao["late"] += 1
                        bucket = "covid" if covid_flag else "noncovid"
                        raw_gao[bucket + "_total"] += 1
                        if late_flag: raw_gao[bucket + "_late"] += 1
                        try: ramt = float(x.get("subaward_amount") or 0)
                        except Exception: ramt = 0.0
                        if ramt >= (25000 if k[2] < "2020-11-12" else 30000):
                            raw_gao["thr_total"] += 1; raw_gao["thr_late"] += late_flag
                            raw_gao["thr_" + bucket + "_total"] += 1; raw_gao["thr_" + bucket + "_late"] += late_flag
                    if lag < -1: counts["reported_before_issued"] += 1; continue
                    lm = (x.get("subaward_sam_report_last_modified_date") or x.get("subaward_fsrs_report_last_modified_date") or "")[:10]
                    try:
                        due_end = dt.date(due[0], due[1], calendar.monthrange(due[0], due[1])[1]); lmd = dt.date.fromisoformat(lm); lm_days = (lmd - due_end).days
                    except Exception: lm_days = None
                    try: amt = float(x.get("subaward_amount") or 0)
                    except Exception: amt = 0.0
                    try: prime_amt = float(x.get("prime_award_amount") or 0)
                    except Exception: prime_amt = 0.0
                    rec = {"agency": x.get("prime_award_awarding_agency_name") or x.get("awarding_agency_name") or "", "prime": " ".join((x.get("prime_awardee_name") or "").split()).upper(),
                           "fy": a[0] + (1 if a[1] >= 10 else 0), "action": a_str, "report": r_str, "lag": lag, "amt": amt, "prime_amt": prime_amt, "id": rid,
                           "lm": lm, "lm_days_past_due": lm_days, "covid": covid_flag, "uei": x.get("prime_awardee_uei") or "",
                           "btype": x.get("prime_awardee_business_types") or "", "subawardee": " ".join((x.get("subawardee_name") or "").split()).upper(),
                           "subawardee_uei": x.get("subawardee_uei") or "", "subnum": (x.get("subaward_number") or "").strip(), "amt_differs": False,
                           "prime_key": k[0], "action_date": k[2]}
                    if k in seen:
                        counts["dup_subawards_later_report"] += 1
                        i = seen[k][1]
                        seen[k][2] = max(seen[k][2], rec["amt"])
                        if abs(rec["amt"] - rows[i]["amt"]) > 0.005: counts["dup_reports_with_different_amount"] += 1; rows[i]["amt_differs"] = True
                        if (ry, rm) < seen[k][0]: seen[k][0] = (ry, rm); rec["amt_differs"] = rows[i]["amt_differs"]; rows[i] = rec   # the earliest report is the sub-award, every field from it
                        continue
                    seen[k] = [(ry, rm), len(rows), rec["amt"]]
                    rows.append(rec)
def threshold(r): return 25000 if r["action_date"] < "2020-11-12" else 30000
for kk, (_, i, mx) in seen.items(): rows[i]["max_amt"] = mx
below = [r for r in rows if r["amt"] < threshold(r)]
counts["below_threshold_nonpositive"] = sum(1 for r in below if r["amt"] <= 0)
counts["below_threshold_later_raised"] = sum(1 for r in below if r["max_amt"] >= threshold(r))
counts["below_threshold_late_amount_usd"] = round(sum(r["amt"] for r in below if r["lag"] > 0))
counts["below_threshold"] = len(below); counts["below_threshold_late"] = sum(1 for r in below if r["lag"] > 0)
rows = [r for r in rows if r["amt"] >= threshold(r)]
counts["scored"] = len(rows)
counts["covid_made_2020_04_01"] = sum(1 for r in rows if r["covid"] and r["action_date"] == "2020-04-01")
counts["made_after_fy2026"] = sum(1 for r in rows if r["fy"] > 2026)
# late sub-awards whose recipient, sub-award number and action month were already reported in an earlier month: kept as
# separate sub-awards (reporting is per prime award); those that also match sub-recipient, amount and day under a
# different prime award are the likely re-reports
_g = collections.defaultdict(list)
for r in rows: _g[(r["uei"], r["subnum"].upper(), r["action"])].append(r)
_rep = _other = _cand = 0
for v in _g.values():
    if len(v) < 2: continue
    f = min(v, key=lambda r: r["report"])
    for r in v:
        if r["report"] > f["report"] and r["lag"] > 0:
            _rep += 1; _other += r["prime_key"] != f["prime_key"]
            if any(e["report"] < r["report"] and e["prime_key"] != r["prime_key"] and e["subawardee_uei"] == r["subawardee_uei"] and e["amt"] == r["amt"] and e["action_date"] == r["action_date"] for e in v): _cand += 1
counts["late_repeat_of_earlier_report"] = _rep; counts["late_repeat_other_prime"] = _other; counts["late_likely_rereport_other_prime"] = _cand
def exceeds(r): return r["prime_amt"] > 0 and r["amt"] > r["prime_amt"]
def summ(rs):
    L = [r for r in rs if r["lag"] > 0]
    L_ok = [r for r in L if not exceeds(r)]   # drops GAO's "impossibly high" category (amount exceeds the prime award) from the dollar sum only
    return {"records": len(rs), "late": len(L), "late_pct": round(100 * len(L) / len(rs), 1) if rs else None, "late_3plus_months": sum(1 for r in L if r["lag"] >= 3), "late_12plus_months": sum(1 for r in L if r["lag"] >= 12),
            "late_amount_usd": round(sum(r["amt"] for r in L_ok)), "late_amount_usd_raw": round(sum(r["amt"] for r in L)),
            "late_amount_excluded_usd": round(sum(r["amt"] for r in L if exceeds(r))), "late_records_exceeding_prime": sum(1 for r in L if exceeds(r)),
            "median_late_months": statistics.median(r["lag"] for r in L) if L else None}
out = {"counts": dict(counts), "all": summ(rows), "by_fy": {str(fy): summ([r for r in rows if r["fy"] == fy]) for fy in sorted({r["fy"] for r in rows})},
       "covid": summ([r for r in rows if r["covid"]]), "non_covid": summ([r for r in rows if not r["covid"]]), "by_agency": {}, "by_prime": {}}
g = collections.defaultdict(list)
for r in rows: g[r["agency"]].append(r)
out["by_agency"] = dict(sorted(((k, summ(v)) for k, v in g.items() if len(v) >= 1000), key=lambda kv: -kv[1]["late"]))
g = collections.defaultdict(list)
for r in rows: g[r["uei"] or r["prime"]].append(r)     # one prime recipient = one UEI, or by name when the UEI is blank; the name shown is the one it used most
for k, v in g.items():
    if len(v) >= 200:
        s = summ(v); s["name"] = collections.Counter(r["prime"] for r in v).most_common(1)[0][0]; s["agencies"] = collections.Counter(r["agency"] for r in v).most_common(2)
        s["state_govt"] = sum(1 for r in v if "state government" in r["btype"].lower()) > len(v) / 2
        out["by_prime"][k] = s
out["by_prime"] = dict(sorted(out["by_prime"].items(), key=lambda kv: -kv[1]["late"]))
d1 = collections.Counter(min(r["lag"], 6) for r in rows); d2 = collections.Counter(("none" if r["lm_days_past_due"] is None else "<=0" if r["lm_days_past_due"] <= 0 else "1-31" if r["lm_days_past_due"] <= 31 else "32-365" if r["lm_days_past_due"] <= 365 else ">365") for r in rows)
lm_outside = sum(1 for r in rows if r["lm"] and r["lm"][:7] != r["report"]); lm_verdict_differs = sum(1 for r in rows if r["lm_days_past_due"] is not None and (r["lm_days_past_due"] > 0) != (r["lag"] > 0))
out["clock_check"] = {"report_month_minus_due_month": dict(sorted(d1.items())), "last_modified_days_past_due": dict(d2), "last_modified_outside_report_month": lm_outside, "late_verdict_differs_between_the_two": lm_verdict_differs}
bt = collections.defaultdict(list)
for r in rows: bt["state government" if "state government" in r["btype"].lower() else "other"].append(r)
out["by_prime_business_type"] = {k: summ(v) for k, v in bt.items()}
out["grouped_by_name_no_uei"] = sum(1 for r in rows if not r["uei"])
L_all_late = [r for r in rows if r["lag"] > 0]
out["late_records_no_prime_uei"] = sum(1 for r in L_all_late if not r["uei"])
out["late_records_no_subawardee_uei"] = sum(1 for r in L_all_late if not r["subawardee_uei"])
# twenty-five most-late recipients: how many are tagged state government on most of their records
top25 = list(out["by_prime"].items())[:25]
out["top25_state_govt_count"] = sum(1 for k, v in top25 if v["state_govt"])
out["top25_late_sum"] = sum(v["late"] for k, v in top25)
# GAO-24-106237 read the file on 1 August 2023. Reports published from August 2023 on were not in it, so for sub-awards made
# before August 2023 we count how many of their reports GAO could not have seen, and the late share with and without them.
g_made = [r for r in rows if r["action"] <= "2023-07"]
gseen = [r for r in g_made if r["report"] <= "2023-07"]
out["gao_window"] = {"subawards_made_before_2023_08": len(g_made), "reported_by_2023_07": len(gseen), "reported_2023_08_or_later": len(g_made) - len(gseen),
                     "late_share_all": round(100 * sum(1 for r in g_made if r["lag"] > 0) / len(g_made), 1) if g_made else None,
                     "late_share_reports_gao_could_see": round(100 * sum(1 for r in gseen if r["lag"] > 0) / len(gseen), 1) if gseen else None,
                     "covid_late_share_reports_gao_could_see": (lambda c: round(100 * sum(1 for r in c if r["lag"] > 0) / len(c), 1) if c else None)([r for r in gseen if r["covid"]]),
                     "noncovid_late_share_reports_gao_could_see": (lambda c: round(100 * sum(1 for r in c if r["lag"] > 0) / len(c), 1) if c else None)([r for r in gseen if not r["covid"]]),
                     # GAO's own method applied here: every reported record in the same window, duplicates included, no dedup
                     "records_no_dedup_total": raw_gao["total"], "late_share_records_no_dedup": round(100 * raw_gao["late"] / raw_gao["total"], 1) if raw_gao["total"] else None,
                     "covid_late_share_records_no_dedup": round(100 * raw_gao["covid_late"] / raw_gao["covid_total"], 1) if raw_gao.get("covid_total") else None,
                     "noncovid_late_share_records_no_dedup": round(100 * raw_gao["noncovid_late"] / raw_gao["noncovid_total"], 1) if raw_gao.get("noncovid_total") else None,
                     "records_no_dedup_threshold": raw_gao["thr_total"], "late_share_records_no_dedup_threshold": round(100 * raw_gao["thr_late"] / raw_gao["thr_total"], 1) if raw_gao["thr_total"] else None}
out["by_fy"] = {k: v for k, v in out["by_fy"].items() if int(k) <= 2026}
# Right-censoring check: for every fiscal year mature enough (ended 13+ months before our 12 Oct 2026 read), the late
# share the SAME fiscal year would have shown if read 13 months after it ended, versus its share as read today -- the
# age FY2025 is at in this read, so the two are directly comparable across years.
def add_months(y, m, n):
    t = (y * 12 + (m - 1)) + n; return t // 12, t % 12 + 1
def share(rs):
    la = sum(1 for r in rs if r["lag"] > 0); return round(100 * la / len(rs), 1) if rs else None
out["censoring_at_13_months"] = {}
for fy in sorted({r["fy"] for r in rows}):
    if fy >= 2025: continue   # FY2025 itself is at ~13 months in this read; FY2026 is far younger
    cy, cm = add_months(fy, 9, 13); cutoff = f"{cy}-{cm:02d}"
    full = [r for r in rows if r["fy"] == fy]; at13 = [r for r in full if r["report"] <= cutoff]
    out["censoring_at_13_months"][str(fy)] = {"records_at_13mo": len(at13), "late_pct_at_13mo": share(at13), "records_now": len(full), "late_pct_now": share(full)}
json.dump(out, open(os.path.join(OUT, "subaward_lag_summary.json"), "w"), indent=1)
with open(os.path.join(OUT, "subaward_lag_rows.csv"), "w", newline="") as f:
    w = csv.writer(f); w.writerow(["report_id", "agency", "prime", "prime_uei", "subaward_number", "subawardee", "subawardee_uei", "fy", "action_month", "report_month", "months_late", "amount", "amount_differs_between_reports", "amount_exceeds_prime_award", "prime_award_key", "action_date"])
    for r in rows: w.writerow([r["id"], r["agency"], r["prime"], r["uei"], r["subnum"], r["subawardee"], r["subawardee_uei"], r["fy"], r["action"], r["report"], r["lag"], r["amt"], int(r["amt_differs"]), int(exceeds(r)), r["prime_key"], r["action_date"]])
print(json.dumps(out["counts"])); print("clock", out["clock_check"]); print("all", out["all"]); print("gao_window", out["gao_window"])
for fy, v in out["by_fy"].items(): print(fy, v["records"], v["late"], v["late_pct"])
for k, v in list(out["by_agency"].items())[:12]: print(f"{k[:50]:<50} {v['records']:>8} {v['late']:>8} {v['late_pct']}")
print("covid", out["covid"]["records"], out["covid"]["late"], out["covid"]["late_pct"], "| non-covid", out["non_covid"]["records"], out["non_covid"]["late"], out["non_covid"]["late_pct"])
for k, v in list(out["by_prime"].items())[:12]: print(f"{v['name'][:44]:<44} {k:<13} {v['records']:>7} {v['late']:>7} {v['late_pct']:>5} med {v['median_late_months']}")
print("top25 state govt", out["top25_state_govt_count"], "of 25; top25 late sum", out["top25_late_sum"])
print("censoring", out["censoring_at_13_months"])
