"""Turn results*.json (from scan.py) into the numbers the paper prints.
python3 analyze.py results_all.json [summary.json]  -> prints a summary and writes the summary file
"""
import json, sys, datetime as dt, collections, re
from scan import quarter_of     # re-classify saved files with the current rules, so classifier fixes need no re-scan

def federal_holidays(y):
    """The federal holidays that can land near the 10th: New Year, MLK (3rd Mon Jan), Columbus (2nd Mon Oct), Independence Day (observed)."""
    def nth_monday(month, k):
        d = dt.date(y, month, 1); d += dt.timedelta(days=(7 - d.weekday()) % 7); return d + dt.timedelta(days=7 * (k - 1))
    jul4 = dt.date(y, 7, 4); jul4 += dt.timedelta(days={5: -1, 6: 1}.get(jul4.weekday(), 0))
    return {dt.date(y, 1, 1), nth_monday(1, 3), jul4, nth_monday(10, 2)}

def next_business_day(d):
    """47 CFR 1.4(j): a filing date that falls on a holiday (Saturday, Sunday, federal holiday) moves to the next business day."""
    while d.weekday() >= 5 or d in federal_holidays(d.year): d += dt.timedelta(days=1)
    return d

f = sys.argv[1] if len(sys.argv) > 1 else "results_all.json"
d = json.load(open(f))
# The FCC was closed 1 Oct - 12 Nov 2025; DA 25-943 (17 Nov 2025): "All quarterly issue report filings that were to be filed by October 10, 2025, will now have a deadline of December 1, 2025."
RULE_DATES = {"2025Q1": dt.date(2025, 4, 10), "2025Q2": dt.date(2025, 7, 10),
              "2025Q3": dt.date(2025, 12, 1), "2025Q4": dt.date(2026, 1, 10),
              "2026Q1": dt.date(2026, 4, 10), "2026Q2": dt.date(2026, 7, 10), "2026Q3": dt.date(2026, 10, 10)}
DEADLINES = {q: next_business_day(d) for q, d in RULE_DATES.items()}   # Jan 10 2026 = Saturday -> Jan 12; Oct 10 2026 = Saturday, Oct 12 = Columbus Day -> Oct 13
# only quarters whose deadline has passed at fetch time are scored
_fetched = dt.date.fromisoformat(json.load(open(f))["fetched_at"][:10])
DEADLINES = {q: dl for q, dl in DEADLINES.items() if dl < _fetched}
EXEMPT = re.compile(r"-(LD|LP)$|^[KW]\d{2,3}[A-Z]{2}(-D)?$|^\d{6}[A-Z]{2}$")   # low-power TV, translators and unbuilt permits (call sign = file number) keep no issues/programs list; Class A (-CD, -CA) does and is counted
def quarter_start(q): return dt.date(int(q[:4]), 3 * (int(q[-1]) - 1) + 1, 1)
ORIGINAL_Q3 = dt.date(2025, 10, 10)

if d.get("service") in ("am", "fm"):   # the FCC radio lists carry the odd Class A TV call sign (KCLP-CD in the AM list); it is a TV station, not a radio one
    EXEMPT = re.compile(EXEMPT.pattern + r"|-(CD|CA)$")
exempt = [s for s in d["stations"] if EXEMPT.search(s["callSign"])]
st = [s for s in d["stations"] if not s["error"] and not EXEMPT.search(s["callSign"])]
errors = [s for s in d["stations"] if s["error"] and not EXEMPT.search(s["callSign"])]
for s in st:
    for x in s["files"]: x["quarter"] = quarter_of(x["name"], x["path"])
first = collections.defaultdict(dict)       # station -> quarter -> earliest upload date
nfiles = collections.Counter()
for s in st:
    for x in s["files"]:
        nfiles["total"] += 1
        q = x["quarter"]
        if q is None: nfiles["unclassified"] += 1
        if q in DEADLINES:
            up = dt.date.fromisoformat(x["uploaded"])
            if up < quarter_start(q):          # a file dated before the quarter began cannot be that quarter's list: our misread, not evidence
                nfiles["pre_quarter"] += 1; continue
            cur = first[s["callSign"]].get(q)
            if cur is None or up < cur: first[s["callSign"]][q] = up

out = {"source": f, "fetched_at": d["fetched_at"], "fetched_first": d.get("fetched_first", d["fetched_at"]), "stations": len(st), "errors": len(errors), "exempt_excluded": len(exempt),
       "files": nfiles["total"], "files_unclassified": nfiles["unclassified"], "files_pre_quarter": nfiles["pre_quarter"], "quarters": {}}
late_all = []
for q, dl in DEADLINES.items():
    have = {cs: first[cs][q] for cs in first if q in first[cs]}
    late = {cs: (u - dl).days for cs, u in have.items() if u > dl}
    days = sorted(late.values())
    rule = RULE_DATES[q]
    row = {"deadline": dl.isoformat(), "rule_date": rule.isoformat(), "late_vs_rule_date": sum(1 for u in have.values() if u > rule),
           "have": len(have), "none_found": len(st) - len(have),
           "on_time": len(have) - len(late), "late": len(late),
           "late_pct": round(100 * len(late) / len(have), 1) if have else None,
           "late_1_7": sum(1 for x in days if x <= 7), "late_8_30": sum(1 for x in days if 7 < x <= 30),
           "late_over_30": sum(1 for x in days if x > 30),
           "median_late_days": days[len(days) // 2] if days else None,
           "worst": sorted(late.items(), key=lambda kv: -kv[1])[:10]}
    if q == "2025Q3":
        row["late_vs_oct10"] = sum(1 for u in have.values() if u > ORIGINAL_Q3)
        row["uploaded_in_shutdown_gap"] = sum(1 for u in have.values() if ORIGINAL_Q3 < u <= dl)
        row["uploaded_1118"] = sum(1 for u in have.values() if u == dt.date(2025, 11, 18))          # the day FCC systems came back
        row["uploaded_2oct_17nov"] = sum(1 for u in have.values() if dt.date(2025, 10, 2) <= u <= dt.date(2025, 11, 17))   # while they were down
    out["quarters"][q] = row
    late_all += [(x, cs, q) for cs, x in late.items()]

tot_have = sum(r["have"] for r in out["quarters"].values())
tot_late = sum(r["late"] for r in out["quarters"].values())
out["all"] = {"station_quarters": tot_have, "late": tot_late, "late_pct": round(100 * tot_late / tot_have, 1),
              "over_30": sum(1 for x, _, _ in late_all if x > 30),
              "stations_with_any_late": len({cs for _, cs, _ in late_all}),
              "stations_all_four_on_time": sum(1 for cs in first if all(q in first[cs] and first[cs][q] <= DEADLINES[q] for q in DEADLINES)),
              "stations_with_all_four": sum(1 for cs in first if all(q in first[cs] for q in DEADLINES))}
# per-year late-days lists (combine.py merges services and takes medians/buckets) and the 2025-only "every list on time" count
out["late_days_by_year"] = {y: sorted(x for x, _, q in late_all if q.startswith(y)) for y in sorted({q[:4] for q in DEADLINES})}
Q25 = [q for q in DEADLINES if q.startswith("2025")]
out["all"]["stations_with_all_2025"] = sum(1 for cs in first if all(q in first[cs] for q in Q25))
out["all"]["stations_all_2025_on_time"] = sum(1 for cs in first if all(q in first[cs] and first[cs][q] <= DEADLINES[q] for q in Q25))
out["empty_folder"] = sorted(s["callSign"] for s in st if not s["files"])
# stations where we found nothing for 2025 at all
out["no_2025_files"] = sorted(s["callSign"] for s in st if not any((x["quarter"] or "").startswith("2025") for x in s["files"]))
out["no_2025_detail"] = {s["callSign"]: {"files": len(s["files"]), "last_upload": max((x["uploaded"] for x in s["files"]), default=None),
                                        "last_name": max(s["files"], key=lambda x: x["uploaded"])["name"] if s["files"] else ""}
                         for s in st if s["callSign"] in out["no_2025_files"]}
# classifier-free: stations whose folder got no upload at all in 2025 / since 2025-01-01 (upload dates only, no name reading)
out["no_upload_2025"] = sorted(s["callSign"] for s in st if not any(x["uploaded"].startswith("2025") for x in s["files"]))
out["no_upload_since_2025"] = sorted(s["callSign"] for s in st if not any(x["uploaded"] >= "2025-01-01" for x in s["files"]))
# the two "nothing for 2025" sets, split: stations with no 2025 upload that nevertheless have a 2025-quarter list (uploaded in 2026):
# did any of those lists miss its deadline, or are they all on time (a Q4 list uploaded in January)?
_noup = set(out["no_upload_2025"]); _no25 = set(out["no_2025_files"]); byc = {s["callSign"]: s for s in st}
def _late_2025(cs):
    return any(q.startswith("2025") and u > DEADLINES[q] for q, u in first[cs].items())
out["noup_only_late"] = sorted(cs for cs in _noup - _no25 if _late_2025(cs))
out["noup_only_on_time"] = sorted(cs for cs in _noup - _no25 if not _late_2025(cs))
# stations with 2025 uploads but no 2025-quarter list: an unreadable 2025-dated file, or every 2025-dated file read as an earlier quarter's list
def _has_unclassified_2025(cs):
    return any(x["uploaded"].startswith("2025") and x["quarter"] is None for x in byc[cs]["files"])
out["no25_only_unreadable"] = sorted(cs for cs in _no25 - _noup if _has_unclassified_2025(cs))
out["no25_only_prior_quarter"] = sorted(cs for cs in _no25 - _noup if not _has_unclassified_2025(cs))
out["no_folder"] = sorted(s["callSign"] for s in errors if s["error"] == "no Issues and Programs folder")
out["unreadable"] = {s["callSign"]: str(s["error"])[:80] for s in errors if s["error"] != "no Issues and Programs folder"}
out["worst_overall"] = sorted(late_all, reverse=True)[:60]
json.dump(out, open(sys.argv[2] if len(sys.argv) > 2 else "summary.json", "w"), indent=1)
print(json.dumps({k: v for k, v in out.items() if k not in ("quarters",)}, indent=1))
for q, r in out["quarters"].items():
    print(q, {k: v for k, v in r.items() if k != "worst"})
