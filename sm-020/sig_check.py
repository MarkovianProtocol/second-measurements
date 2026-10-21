#!/usr/bin/env python3
"""Is dt_posted the moment the lobbyist filed? Read the "Digitally Signed By ... Date" line on a random sample of late
reports and compare it with the API's dt_posted. python3 sig_check.py results.json N SEED out.json"""
import json, sys, re, html, random, time, datetime as dt, urllib.request
res, n, seed, out_f = json.load(open(sys.argv[1])), int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) markovianprotocol.com second-measurements"}
late = [r for v in res["quarters"].values() for x in v.values() for r in x["reports"]]
random.seed(seed); sample = random.sample(late, n)
rows = []
for r in sample:
    for i in range(5):
        try:
            t = urllib.request.urlopen(urllib.request.Request(r["url"], headers=UA), timeout=60).read().decode("utf-8", "replace"); break
        except Exception as e:
            time.sleep(30 * (i + 1) if "429" in str(e) else 5)
    else:
        rows.append({"uuid": r["uuid"], "posted": r["posted"], "signed": None, "error": "fetch failed"}); continue
    x = re.sub(r"\s+", " ", html.unescape(re.sub("<[^>]+>", " ", t)))
    m = re.search(r"Digitally Signed By: (.*?) Date (\d{1,2}/\d{1,2}/\d{4} \d{1,2}:\d{2}:\d{2} [AP]M)", x)
    signed = dt.datetime.strptime(m.group(2), "%m/%d/%Y %I:%M:%S %p") if m else None
    posted = dt.datetime.fromisoformat(r["posted"]).replace(tzinfo=None)   # Eastern wall clock, as the form prints it
    rows.append({"uuid": r["uuid"], "url": r["url"], "posted": r["posted"], "signed": signed.isoformat() if signed else None,
                 "diff_seconds": int((posted - signed).total_seconds()) if signed else None})
    time.sleep(2)
ok = [x for x in rows if x.get("diff_seconds") is not None]
summary = {"n": n, "seed": seed, "read": len(ok), "same_minute": sum(1 for x in ok if abs(x["diff_seconds"]) < 60),
           "max_abs_diff_seconds": max((abs(x["diff_seconds"]) for x in ok), default=None)}
json.dump({"summary": summary, "rows": rows}, open(out_f, "w"), indent=1)
print(summary)
