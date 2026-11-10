#!/usr/bin/env python3
"""SM-028: Pennsylvania's 48-hour rule for mail-in and civilian absentee ballots, 2024 general election.

Rule: Election Code 1305-D (25 P.S. 3150.15), mail-in: "As additional applications are received and approved, the board
shall deliver or mail official mail-in ballots to the additional electors within 48 hours." Section 1305(b)(1)
(25 P.S. 3146.5), civilian absentee: the same, "within forty-eight hours", after the board "begins delivering or mailing".

Data: Department of State, 2024 General Election Mail Ballot Requests (data.pa.gov 3q5t-ddp8, final pull 24 Jan 2025).
Clock: 'Application Approved Date' to 'Ballot Mailed Date' (label-queue date, may be updated to the mailing date; the
Department warns of entry delays). Dates only: 3 or more calendar days is always more than 48 hours.

Counted: approved applications of the mail-in types (MAILIN, OLMAILV, OLMAILNV, PMI) and civilian absentee types (CIV,
REG, PER, OLREGV, OLREGNV), approved after the county's main mailing day (the date on which it recorded the most of
these ballots plus emergency (C) and alternative (ALT) ballots as mailed) and on or before 29 October 2024.
Left out: Franklin County (ballots recorded returned before they were mailed: its mailed dates are entry dates) and
Indiana County (most ballots dated mailed in June-August 2024: label-queue dates); in other counties, rows with a mailed
date before approval, after the final pull, or after the returned date.

Outputs (all in the current directory): summary_2024.json (headline, gaps, entry-lag sensitivity, counties, exclusions),
consequence_2024.json (return rates by delay, within-county comparison), weekday_2024.json (weekday test and bracket).
Usage: python3 -I sm028.py pa_2024_mail_ballot_requests.csv"""
import csv, collections, datetime as dt, json, statistics as st, sys

MAILIN = {"MAILIN", "OLMAILV", "OLMAILNV", "PMI"}
ABSENTEE = {"CIV", "REG", "PER", "OLREGV", "OLREGNV"}
COUNTED = MAILIN | ABSENTEE
MAIN_DAY_TYPES = COUNTED | {"C", "ALT", "Alt"}
LAST_DAY, EDAY, FINAL_PULL = dt.date(2024, 10, 29), dt.date(2024, 11, 5), dt.date(2025, 1, 24)
EXCLUDE = {"FRANKLIN", "INDIANA"}
PRE_BALLOT = dt.date(2024, 9, 1)   # dates before this are counted for the Indiana check only

def D(s):
    s = (s or "").strip()
    if not s: return None
    try: return dt.datetime.strptime(s, "%m/%d/%Y").date()
    except ValueError:
        try: return dt.date.fromisoformat(s[:10])
        except ValueError: return None

rows, sent, total_rows = [], collections.defaultdict(collections.Counter), 0
pre_ballot = collections.Counter(); with_date = collections.Counter()
with open(sys.argv[1], newline="") as f:
    for r in csv.DictReader(f):
        total_rows += 1
        if r["Ballot Application Disposition"] != "Approved": continue
        c, t = r["County Name"], r["Mail Application Type"]
        a, s, ret = D(r["Application Approved Date"]), D(r["Ballot Mailed Date"]), D(r["Ballot Returned Date"])
        if s and t in MAIN_DAY_TYPES: sent[c][s] += 1
        if s and t in MAILIN:
            with_date[c] += 1; pre_ballot[c] += s < PRE_BALLOT
        if t in COUNTED: rows.append((c, t, a, s, ret))
main_day = {c: cn.most_common(1)[0][0] for c, cn in sent.items()}

base, excl, bad_dates, dropped = [], collections.Counter(), collections.Counter(), []
for c, t, a, s, ret in rows:
    if not a: excl["no approval date"] += 1; continue
    if a <= main_day[c] or a > LAST_DAY: continue
    if c not in EXCLUDE and not s: excl["no mailed date"] += 1; excl["no mailed date, returned"] += bool(ret); continue
    if c not in EXCLUDE and s < a: excl["mailed before approval"] += 1; continue
    if not s or s < a: continue
    if c in EXCLUDE: excl[c] += 1; excl[c + " returned before mailed"] += bool(ret and ret < s); continue
    if s > FINAL_PULL: excl["mailed after final pull"] += 1; bad_dates[(c, s.isoformat())] += 1; dropped.append((c, t, a, s, ret)); continue
    if ret and ret < s: excl["returned before mailed"] += 1; dropped.append((c, t, a, s, ret)); continue
    base.append((c, t, a, s, ret))

gap = lambda s, a: (s - a).days
otc = lambda a, s, ret: a == s and ret == s          # approved, recorded mailed and returned the same day: handed over in person

def tally(rs):
    g = [gap(s, a) for c, t, a, s, ret in rs]
    late = [(c, t, a, s, ret) for c, t, a, s, ret in rs if gap(s, a) > 2]
    quick = sum(1 for c, t, a, s, ret in late if ret and (ret - s).days <= 1)
    return {"counted": len(rs), "late": len(late), "pct_late": round(100 * len(late) / len(rs), 1),
            "late_3_days": sum(1 for x in g if x == 3), "late_3_or_4_days": sum(1 for x in g if x in (3, 4)),
            "late_over_7_days": sum(1 for x in g if x > 7), "median_days": st.median(g),
            "late_returned_within_1_day_of_mailed_date": quick,
            "late_returned_same_day_as_mailed_date": sum(1 for c, t, a, s, ret in late if ret == s),
            "late_over_7_returned": sum(1 for c, t, a, s, ret in late if ret and gap(s, a) > 7),
            "late_over_7_returned_within_1_day": sum(1 for c, t, a, s, ret in late if ret and gap(s, a) > 7 and (ret - s).days <= 1),
            "handed_over_same_day": sum(1 for c, t, a, s, ret in rs if otc(a, s, ret)),
            "recorded_mailed_after_election_day": sum(1 for c, t, a, s, ret in rs if s > EDAY)}

by_c = collections.defaultdict(list)
for x in base: by_c[x[0]].append(x)
counties = {c: {**{k: v for k, v in tally(rs).items() if k in ("counted", "late", "pct_late", "late_over_7_days", "median_days")},
                "main_mailing_day": main_day[c].isoformat()}
            for c, rs in sorted(by_c.items(), key=lambda kv: -tally(kv[1])["late"])}
summary = {"rule": "Election Code 1305-D and 1305(b)(1): within 48 hours of approval, once mailing has begun",
           "data": "data.pa.gov 3q5t-ddp8, final pull 24 Jan 2025", "total_rows": total_rows, "approved_rows_of_counted_types": len(rows),
           "total": tally(base), "mail_in": tally([x for x in base if x[1] in MAILIN]),
           "absentee": tally([x for x in base if x[1] in ABSENTEE]),
           "counties_counted": len(counties), "counties_with_late": sum(1 for v in counties.values() if v["late"]),
           "main_mailing_day_range": [min(main_day[c] for c in counties).isoformat(), max(main_day[c] for c in counties).isoformat()],
           "excluded": dict(excl),
           "mailed_after_final_pull_by_county_and_date": {f"{c} {d}": n for (c, d), n in sorted(bad_dates.items())},
           "excluded_counties_main_mailing_day": {c: main_day[c].isoformat() for c in sorted(EXCLUDE)},
           "pct_late_with_dropped_date_rows_put_back": round(100 * sum(1 for c, t, a, s, ret in base + dropped if gap(s, a) > 2) / len(base + dropped), 3),
           "pct_late_exact": round(100 * sum(1 for c, t, a, s, ret in base if gap(s, a) > 2) / len(base), 3),
           "mail_in_dated_before_1_sep_2024": {c: [pre_ballot[c], with_date[c]] for c in sorted(pre_ballot, key=lambda c: -pre_ballot[c]) if pre_ballot[c]},
           "by_county": counties}
json.dump(summary, open("summary_2024.json", "w"), indent=1)

# Return rates. Ballots handed over in person (approved, recorded mailed and returned the same day) are left out: they
# were never mailed. Returned = 'Ballot Returned Date' on or before Election Day (Pennsylvania counts no later ballot).
cmp = [x for x in base if not otc(x[2], x[3], x[4])]
def bucket(g): return "0-2 days (on time)" if g <= 2 else "3-4 days" if g <= 4 else "5-7 days" if g <= 7 else "8+ days"
WINDOWS = ((dt.date(2024, 10, 15), dt.date(2024, 10, 21), "approved 15-21 Oct"), (dt.date(2024, 10, 22), dt.date(2024, 10, 29), "approved 22-29 Oct"))
cons = {"handed_over_same_day_left_out": len(base) - len(cmp)}
for lo, hi, label in WINDOWS:
    cons[f"handed_over_same_day_{label}"] = sum(1 for c, t, a, s, ret in base if lo <= a <= hi and otc(a, s, ret))
for lo, hi, label in WINDOWS:
    g = collections.defaultdict(lambda: {"n": 0, "returned_by_eday": 0, "returned_after_eday": 0})
    cc = collections.defaultdict(lambda: [0, 0, 0, 0])
    for c, t, a, s, ret in cmp:
        if not (lo <= a <= hi): continue
        b = g[bucket(gap(s, a))]; b["n"] += 1
        if ret and ret <= EDAY: b["returned_by_eday"] += 1
        elif ret: b["returned_after_eday"] += 1
        k = 0 if gap(s, a) <= 2 else 2
        cc[c][k] += 1; cc[c][k + 1] += bool(ret and ret <= EDAY)
    short = late_n = used = worse = 0
    for c, (on, onr, la, lar) in cc.items():      # each county's on-time rate is its own benchmark; >= 50 in each group
        if on < 50 or la < 50: continue
        used += 1; late_n += la; d = onr / on - lar / la; short += d * la; worse += d > 0
    cons[label] = {"by_delay": {k: {**v, "pct_returned_by_eday": round(100 * v["returned_by_eday"] / v["n"], 1)} for k, v in sorted(g.items())},
                   "within_county": {"counties_used": used, "counties_where_late_returned_less": worse,
                                     "late_ballots_in_those": late_n, "fewer_returned_by_eday_than_county_on_time_rate": round(short)}}
json.dump(cons, open("consequence_2024.json", "w"), indent=1)

# Weekday test: Thu/Fri approvals (48 hours cross the weekend) vs Mon/Tue approvals, 1-29 October, same county and ISO
# week; and a bracket against the NEXT week's Mon/Tue approvals, who had less time left. Weighted by cell size; cells
# need >= 30 in each group. Returns counted by Election Day and at any date.
cells = collections.defaultdict(lambda: {"early": [0, 0, 0, 0], "late_wd": [0, 0, 0, 0]})
for c, t, a, s, ret in cmp:
    if not (dt.date(2024, 10, 1) <= a <= LAST_DAY): continue
    wd = a.weekday(); grp = "early" if wd in (0, 1) else "late_wd" if wd in (3, 4) else None
    if not grp: continue
    x = cells[(c, a.isocalendar()[1])][grp]
    x[0] += 1; x[1] += gap(s, a) > 2; x[2] += bool(ret and ret <= EDAY); x[3] += bool(ret)
def compare(pairs):
    w = dl = de = da = 0.0; n = 0
    for th, mo in pairs:
        if th[0] < 30 or mo[0] < 30: continue
        n += 1; k = th[0] + mo[0]; w += k
        dl += k * (th[1] / th[0] - mo[1] / mo[0]); de += k * (th[2] / th[0] - mo[2] / mo[0]); da += k * (th[3] / th[0] - mo[3] / mo[0])
    return {"cells": n, "diff_pct_points_mailed_late": round(100 * dl / w, 1),
            "diff_pct_points_returned_by_eday": round(100 * de / w, 1), "diff_pct_points_returned_any_date": round(100 * da / w, 1)}
same = [(v["late_wd"], v["early"]) for v in cells.values()]
nxt = [(v["late_wd"], cells[(c, w + 1)]["early"]) for (c, w), v in list(cells.items()) if (c, w + 1) in cells]
json.dump({"thu_fri_vs_same_week_mon_tue": compare(same), "thu_fri_vs_next_week_mon_tue": compare(nxt)},
          open("weekday_2024.json", "w"), indent=1)
print(json.dumps({"total": summary["total"], "absentee": summary["absentee"]}, indent=1))
