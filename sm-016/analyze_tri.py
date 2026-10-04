#!/usr/bin/env python3
"""Second measurement of the TRI July 1 deadline (40 CFR 372.30(d)).

Reads the Envirofacts TRI_REPORTING_FORM pages in raw/, keeps one row per form (the table repeats a
form once per chemical-section row), and counts original submissions whose first postmark is after
July 1 of the year following the reporting year. Also counts late facilities and days late.
"""
import csv, glob, json, sys
from collections import Counter, defaultdict
from datetime import date, datetime

csv.field_size_limit(1 << 30)

def load(year):
    forms = {}
    for f in sorted(glob.glob(f"raw/tri_{year}_*.csv")):
        with open(f, newline="") as fh:
            r = csv.DictReader(fh)
            for row in r:
                k = row.get("doc_ctrl_num") or row.get("DOC_CTRL_NUM")
                if not k:
                    continue
                forms.setdefault(k, row)
    return forms

def d(s):
    if not s:
        return None
    return datetime.strptime(s[:10], "%Y-%m-%d").date()

out = {}
for year in [int(a) for a in sys.argv[1:]] or [2024]:
    forms = load(year)
    due = date(year + 1, 7, 1)
    late, on_time, nodate = [], 0, 0
    fac_late, fac_all = set(), set()
    days = []
    by_form = Counter()
    for k, row in forms.items():
        row = {kk.lower(): v for kk, v in row.items()}
        fac_all.add(row.get("tri_facility_id"))
        pm = d(row.get("orig_postmark")) or d(row.get("orig_received")) or d(row.get("postmark_date"))
        if pm is None:
            nodate += 1
            continue
        if pm > due:
            late.append((k, row.get("tri_facility_id"), row.get("facility_name"), pm.isoformat(), (pm - due).days, row.get("form_type_ind"), row.get("cas_chem_name") or row.get("chem_name")))
            fac_late.add(row.get("tri_facility_id"))
            days.append((pm - due).days)
            by_form[row.get("form_type_ind")] += 1
        else:
            on_time += 1
    days.sort()
    pct = lambda p: days[int(p * (len(days) - 1))] if days else None
    out[year] = {
        "forms": len(forms), "on_time": on_time, "late": len(late), "no_date": nodate,
        "facilities": len(fac_all), "facilities_late": len(fac_late),
        "late_share_pct": round(100 * len(late) / max(1, len(forms)), 2),
        "days_late_p50": pct(0.5), "days_late_p90": pct(0.9), "days_late_max": days[-1] if days else None,
        "late_over_30d": sum(1 for x in days if x > 30), "late_over_365d": sum(1 for x in days if x > 365),
        "late_by_form_type": dict(by_form),
        "columns_present": sorted(set(k.lower() for k in next(iter(forms.values())).keys())) if forms else [],
    }
    json.dump(late, open(f"late_forms_{year}.json", "w"), indent=0)
json.dump(out, open("tri_results.json", "w"), indent=1)
for y, v in out.items():
    print(y, {k: v[k] for k in v if k != "columns_present"})

# Agreement between the postmark field and the TRI-MEweb certification date, which EPA's penalty policy keys on.
import glob as _g
_n=_eq=_day=0
for _f in _g.glob("raw/tri_2024_*.csv"):
    for _r in csv.DictReader(open(_f, newline="")):
        _n += 1; _eq += _r["orig_postmark"] == _r["certif_date_signed"]; _day += _r["orig_postmark"][:10] == _r["certif_date_signed"][:10]
json.dump({"forms_2024": _n, "orig_postmark_equals_certif_date_signed": _eq, "same_calendar_day": _day}, open("postmark_vs_certification_2024.json", "w"), indent=1)
print("2024 postmark == certification:", _eq, "of", _n, "; same day:", _day)
