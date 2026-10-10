#!/usr/bin/env python3
"""Rule-date snapshot: on the morning of the 10th itself (before the business-day deadline),
how many stations in a 150-station sample per service already had the newest quarter's list
up. Reads ruledate/results_<svc>_150_<date>.json (scan.py 150 20261005, same seed as the
original TV sample) and writes exhibits/ruledate_sample_<date>.json."""
import json, sys, os, collections, re
EXEMPT = re.compile(r"-(LD|LP)$|^[KW]\d{2,3}[A-Z]{2}(-D)?$|^\d{6}[A-Z]{2}$")   # same rule as analyze.py
d = sys.argv[1] if len(sys.argv) > 1 else "2026-10-10"; q = sys.argv[2] if len(sys.argv) > 2 else "2026Q3"
out = {"date": d, "quarter": q, "sample_seed": 20261005, "sample_size": 150, "services": {}}
for s in ("tv", "fm", "am"):
    p = f"ruledate/results_{s}_150_{d}.json"
    if not os.path.exists(p): continue
    r = json.load(open(p)); recs = r["stations"] if isinstance(r, dict) and "stations" in r else r
    items = list(recs.values()) if isinstance(recs, dict) else recs
    n = has = err = 0; by_day = collections.Counter()
    for st in items:
        if st.get("error"): err += 1; continue
        if EXEMPT.search(st["callSign"]): continue   # translators in the TV sample keep no list
        n += 1
        qstart = f"{q[:4]}-{3 * (int(q[-1]) - 1) + 1:02d}-01"
        qf = [f for f in st.get("files", []) if f.get("quarter") == q and f["uploaded"] >= qstart]   # same pre-quarter drop as analyze.py
        if qf: has += 1; by_day[min(f["uploaded"] for f in qf)[:10]] += 1
    out["services"][s] = {"stations_read": n, "errors": err, "with_list": has, "fetched_at": r.get("fetched_at") if isinstance(r, dict) else None,
                          "first_upload_by_day": dict(sorted(by_day.items()))}
    print(s, n, "read,", err, "errors,", has, "with a", q, "list")
os.makedirs("exhibits", exist_ok=True)
json.dump(out, open(f"exhibits/ruledate_sample_{d}.json", "w"), indent=1)
