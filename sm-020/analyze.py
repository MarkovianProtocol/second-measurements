#!/usr/bin/env python3
"""Turn lda_census.py + lda_registrations.py output into the numbers the page prints.
python3 analyze.py results.json registrations.json summary.json [--firm-totals]

--firm-totals reads each top firm's report count per quarter and type from the API, saved in the summary, so the firm table can say
"late on X of Y" rather than a bare count."""
import json, sys, collections, datetime as dt, statistics

res, regs, out_f = json.load(open(sys.argv[1])), json.load(open(sys.argv[2]))["registrations"], sys.argv[3]
reg = collections.defaultdict(list)
for r in regs: reg[(r["registrant_id"], r["client_id"])].append(dt.date.fromisoformat(r["posted"][:10]))

KINDS = {"regular": lambda t: t.startswith("Q") and not t.endswith("Y"), "no_activity": lambda t: t.startswith("Q") and t.endswith("Y"),
         "termination": lambda t: "T" in t}
S = {"source": sys.argv[1], "fetched_at": res["fetched_at"], "deadlines": res["deadlines"], "quarters": {}, "by_type": {}}
late_all = []
for q, v in res["quarters"].items():
    dl = dt.date.fromisoformat(res["deadlines"][q]); row = {"deadline": res["deadlines"][q], "types": {}}
    for t, x in v.items():
        kind = next(k for k, f in KINDS.items() if f(t))
        for r in x["reports"]:
            posted = dt.date.fromisoformat(r["posted"][:10])
            r["quarter"], r["kind"] = q, kind
            r["registered_after_due"] = any(dl < p <= posted for p in reg.get((r["registrant_id"], r["client_id"]), []))
            late_all.append(r)
        row["types"][t] = {"total": x["total"], "late": x["late"], "over_30": sum(1 for r in x["reports"] if r["days_late"] > 30)}
    for kind, f in KINDS.items():
        ts = [t for t in row["types"] if f(t)]
        tot = sum(row["types"][t]["total"] for t in ts); late = sum(row["types"][t]["late"] for t in ts)
        row[kind] = {"total": tot, "late": late, "late_pct": round(100 * late / tot, 1) if tot else None}
    row["total"] = sum(x["total"] for x in row["types"].values()); row["late"] = sum(x["late"] for x in row["types"].values())
    row["late_pct"] = round(100 * row["late"] / row["total"], 1)
    row["over_30"] = sum(x["over_30"] for x in row["types"].values())
    row["registered_after_due"] = sum(1 for r in late_all if r["quarter"] == q and r["registered_after_due"])
    S["quarters"][q] = row

def agg(rows, qs):
    tot = sum(S["quarters"][q]["total"] for q in qs); late = [r for r in rows if r["quarter"] in qs]
    days = sorted(r["days_late"] for r in late)
    return {"quarters": qs, "total": tot, "late": len(late), "late_pct": round(100 * len(late) / tot, 1),
            "over_30": sum(1 for d in days if d > 30), "median_days": statistics.median(days) if days else None, "max_days": days[-1] if days else None,
            "registered_after_due": sum(1 for r in late if r["registered_after_due"]),
            "late_excl_registered_after_due": sum(1 for r in late if not r["registered_after_due"])}
allq = list(S["quarters"]); y25 = [q for q in allq if q.startswith("2025")]
S["all"], S["y2025"] = agg(late_all, allq), agg(late_all, y25)
for kind in KINDS:
    tot = sum(S["quarters"][q][kind]["total"] for q in allq); l = sum(S["quarters"][q][kind]["late"] for q in allq)
    S["by_type"][kind] = {"total": tot, "late": l, "late_pct": round(100 * l / tot, 1)}

# how late: buckets, and the single posting days that carry the most late reports
d = collections.Counter(r["days_late"] for r in late_all)
S["days_buckets"] = {"1": d[1], "2-7": sum(d[i] for i in range(2, 8)), "8-30": sum(d[i] for i in range(8, 31)),
                     "31-90": sum(v for k, v in d.items() if 31 <= k <= 90), "over_90": sum(v for k, v in d.items() if k > 90)}
S["days_late_counts"] = {str(k): d[k] for k in sorted(d) if k <= 30}
day = collections.Counter((r["quarter"], r["posted"][:10]) for r in late_all)
S["busiest_late_days"] = [{"quarter": q, "date": p, "reports": n, "days_after_deadline": (dt.date.fromisoformat(p) - dt.date.fromisoformat(res["deadlines"][q])).days,
                           "weekday": dt.date.fromisoformat(p).strftime("%A"),
                           "registrants": len({r["registrant_id"] for r in late_all if r["quarter"] == q and r["posted"][:10] == p})}
                          for (q, p), n in day.most_common(12)]
tw = {}
for q in allq:
    c = collections.Counter(r["days_late"] for r in late_all if r["quarter"] == q)
    peak = max(range(8, 31), key=lambda i: c[i]); busiest = max(c, key=lambda i: c[i])
    peak_regs = len({r["registrant_id"] for r in late_all if r["quarter"] == q and r["days_late"] == peak})
    tw[q] = {"peak_registrants": peak_regs, "days_8_12": sum(c[i] for i in range(8, 13)), "days_13_18": sum(c[i] for i in range(13, 19)), "days_19_24": sum(c[i] for i in range(19, 25)), "peak_day": peak, "peak_reports": c[peak], "busiest_day": busiest, "busiest_reports": c[busiest], "day_1": c[1]}
S["third_week"] = {"by_quarter": tw, "days_13_18": sum(v["days_13_18"] for v in tw.values()), "days_8_12": sum(v["days_8_12"] for v in tw.values()),
                   "peak_days": sorted({v["peak_day"] for v in tw.values()})}
grp = collections.Counter((r["registrant_id"], r["client_id"], r["quarter"]) for r in late_all)
S["duplicates"] = {"groups_with_more_than_one_late_report": sum(1 for v in grp.values() if v > 1), "extra_reports": sum(v - 1 for v in grp.values() if v > 1)}
S["midnight_edge"] = {"posted_00_00_to_00_05": sum(1 for r in late_all if r["days_late"] == 1 and r["posted"][11:16] < "00:05"),
                      "posted_00_00_to_01_59": sum(1 for r in late_all if r["days_late"] == 1 and r["posted"][11:13] in ("00", "01"))}

# firms
f = collections.defaultdict(list)
for r in late_all: f[(r["registrant_id"], r["registrant"])].append(r)
top = sorted(f.items(), key=lambda kv: -len(kv[1]))[:20]
firms = []
for (rid, name), rs in top:
    ds = sorted(r["days_late"] for r in rs)
    firms.append({"registrant_id": rid, "registrant": name, "late": len(rs), "clients_late": len({r["client_id"] for r in rs}),
                  "quarters_late": len({r["quarter"] for r in rs}), "median_days": statistics.median(ds), "max_days": ds[-1], "total": None})
if "--firm-totals" in sys.argv:
    import time, urllib.request, urllib.parse
    UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) markovianprotocol.com second-measurements"}
    for fm in firms:
        fm["counts"] = {}
        for q in allq:
            for t in (f"Q{q[-1]}", f"Q{q[-1]}Y", f"{q[-1]}T", f"{q[-1]}TY"):
                url = "https://lda.gov/api/v1/filings/?" + urllib.parse.urlencode({"registrant_id": fm["registrant_id"], "filing_type": t, "filing_year": q[:4], "page_size": 1})
                for i in range(8):
                    try:
                        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r: fm["counts"][f"{q} {t}"] = json.load(r)["count"]; break
                    except Exception as e: time.sleep(30 * (i + 1) if "429" in str(e) else 5)
                else: raise RuntimeError("count failed: " + url)
                time.sleep(1.5)
        fm["total"] = sum(fm["counts"].values()); fm["read_at"] = dt.datetime.now(dt.timezone.utc).isoformat()
        print(fm["registrant"], fm["late"], "of", fm["total"], flush=True)
S["top_firms"] = firms
S["firms_with_late"] = len(f)
json.dump(S, open(out_f, "w"), indent=1)
print(json.dumps({k: S[k] for k in ("all", "y2025", "by_type", "days_buckets", "midnight_edge")}, indent=1))
