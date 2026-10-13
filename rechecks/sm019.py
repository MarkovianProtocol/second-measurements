#!/usr/bin/env python3
"""SM-019 recheck: on the first of each month, request USAspending's grant sub-award file for the current and previous
fiscal year, score it with the paper's script (sm019/subaward_lag.py), and append one row to history/sm-019.jsonl:
the late share for each of the two fiscal years and for the five prime recipients the paper names. Each request takes
USAspending minutes to hours to build; this script waits up to six hours. Usage: sm019.py"""
import json, os, sys, time, urllib.request, subprocess, tempfile, datetime as dt
R = os.path.dirname(os.path.abspath(__file__)); H = os.path.join(R, "history", "sm-019.jsonl"); os.makedirs(os.path.dirname(H), exist_ok=True)
SCRIPT = os.path.join(R, "sm019", "subaward_lag.py"); UA = {"User-Agent": "Markovian Protocol recheck", "Content-Type": "application/json"}
today = dt.date.today(); fy = today.year + (1 if today.month >= 10 else 0)
ranges = [(f"{fy-2}-10-01", f"{fy-1}-09-30", fy - 1), (f"{fy-1}-10-01", today.isoformat(), fy)]
work = tempfile.mkdtemp(prefix="sm019_"); zips = []
for s, e, label in ranges:
    body = json.dumps({"filters": {"sub_award_types": ["grant"], "date_type": "action_date", "date_range": {"start_date": s, "end_date": e}, "agencies": [{"type": "awarding", "tier": "toptier", "name": "All"}]}, "file_format": "csv"}).encode()
    d = json.load(urllib.request.urlopen(urllib.request.Request("https://api.usaspending.gov/api/v2/bulk_download/awards/", data=body, headers=UA, method="POST"), timeout=120))
    t0 = time.time()
    while time.time() - t0 < 6 * 3600:
        st = json.load(urllib.request.urlopen(d["status_url"], timeout=120))
        if st.get("status") == "finished":
            out = os.path.join(work, st["file_name"]); urllib.request.urlretrieve(st["file_url"], out); zips.append((label, out)); break
        if st.get("status") == "failed": print("sm019: build failed", label, st.get("message")); sys.exit(1)
        time.sleep(120)
    else: print("sm019: build not finished in six hours", label); sys.exit(1)
row = {"date": today.isoformat(), "files": {str(l): os.path.basename(z) for l, z in zips}}
for label, z in zips:
    out = os.path.join(work, f"out_{label}"); subprocess.run([sys.executable, "-I", SCRIPT, out, z], check=True, stdout=subprocess.DEVNULL)
    s = json.load(open(os.path.join(out, "subaward_lag_summary.json")))
    row[f"FY{label}"] = {"records": s["all"]["records"], "late": s["all"]["late"], "late_pct": s["all"]["late_pct"],
                         "primes": {k: {"name": v["name"], "records": v["records"], "late": v["late"], "late_pct": v["late_pct"]} for k, v in s["by_prime"].items() if k in ("HBNJBZWWLE29", "HWECY7CDW9Y7", "NT4XL1YGLGC5", "C7LSTJPMJG43", "CJ9JXQL11MM4", "L1KZHL6HXYS5")}}
open(H, "a").write(json.dumps(row) + "\n"); print(json.dumps(row)[:600])
import shutil; shutil.rmtree(work, ignore_errors=True)
