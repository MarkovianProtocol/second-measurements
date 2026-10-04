#!/usr/bin/env python3
"""Weight the late forms by what they report. EPA's TRI Basic Data Files carry, per form (DOC_CTRL_NUM), TOTAL
RELEASES in pounds (grams for dioxin-like compounds, converted here). For each reporting year: pounds on all
forms, on forms postmarked after 1 July, after the mid-October freeze, and more than a year late; the facilities
reporting the most pounds on year-late forms. Writes pounds_results.json."""
import csv, json, sys, datetime as dt, collections
csv.field_size_limit(1 << 30)
out = {}
for y in [int(a) for a in sys.argv[1:]] or [2024]:
    late = {x[0]: x for x in json.load(open(f"late_forms_{y}.json"))}
    tot = tot_late = tot_oct = tot_year = 0.0; n = 0; by = collections.defaultdict(lambda: [0.0, 0, ""])
    with open(f"basic/{y}_US.csv", newline="", encoding="utf-8", errors="replace") as fh:
        rd = csv.DictReader(fh)
        kd = [k for k in rd.fieldnames if k.endswith("DOC_CTRL_NUM")][0]; kr = [k for k in rd.fieldnames if k.endswith("TOTAL RELEASES")][0]
        ku = [k for k in rd.fieldnames if k.endswith("UNIT OF MEASURE")][0]; kf = [k for k in rd.fieldnames if k.endswith("FACILITY NAME")][0]
        kp = [k for k in rd.fieldnames if k.endswith("STANDARD PARENT CO NAME")][0]; kt = [k for k in rd.fieldnames if k.endswith("TRIFD")][0]
        for r in rd:
            try: v = float(r[kr] or 0)
            except ValueError: continue
            if (r[ku] or "").strip().lower().startswith("gram"): v = v / 453.592
            n += 1; tot += v
            x = late.get(r[kd])
            if x:
                tot_late += v; days = x[4]
                if dt.date.fromisoformat(x[3]) > dt.date(y + 1, 10, 15): tot_oct += v
                if days > 365:
                    tot_year += v; b = by[r[kt]]; b[0] += v; b[1] += 1; b[2] = f"{r[kf]} ({r[kp]})"
    top = sorted(by.items(), key=lambda kv: -kv[1][0])[:10]
    out[y] = {"forms": n, "pounds_all": round(tot), "pounds_late": round(tot_late), "pounds_late_pct": round(100 * tot_late / tot, 2) if tot else None,
              "pounds_after_15_oct": round(tot_oct), "pounds_more_than_a_year_late": round(tot_year), "pounds_year_late_pct": round(100 * tot_year / tot, 3) if tot else None,
              "top_year_late_by_pounds": [{"trifd": k, "facility": v[2], "late_forms": v[1], "pounds": round(v[0])} for k, v in top]}
    print(y, {k: v for k, v in out[y].items() if k != "top_year_late_by_pounds"}); print("  ", out[y]["top_year_late_by_pounds"][:5])
json.dump(out, open("pounds_results.json", "w"), indent=1)
