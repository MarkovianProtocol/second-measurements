#!/usr/bin/env python3
"""SM-024 (draft): check each overdue candidate against DOJ's live FARA eFile documents page
(efile.fara.gov/ords/fara/f?p=1381:200::::RP,200:P200_REG_NUMBER:<n>). Saves each page. A candidate is confirmed when
the page lists no supplemental statement received after the last one we read (or, for agents with none in our window,
none received since 1 January 2024); otherwise it is set aside as 'live page lists a statement we did not read'.
python3 verify_overdue.py overdue.json OUTDIR OUT.json"""
import json, sys, re, subprocess, os, time
OV, OUTD, OUT = sys.argv[1:4]; os.makedirs(OUTD, exist_ok=True)
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/141.0 Safari/537.36"
jar = os.path.join(OUTD, "cookies.txt"); res = []
for x in json.load(open(OV)):
    n = x["reg"]; path = os.path.join(OUTD, f"reg_{n}.html")
    url = f"https://efile.fara.gov/ords/fara/f?p=1381:200::::RP,200:P200_REG_NUMBER:{n}"
    html = subprocess.run(["curl", "-sL", "-c", jar, "-b", jar, "-A", UA, url], capture_output=True, text=True).stdout
    open(path, "w").write(html); time.sleep(1)
    docs = sorted(set(re.findall(rf"/docs/({n}-[A-Za-z-]+-(\d{{8}})-\d+\.pdf)", html)), key=lambda t: t[1])
    sup = [d for d in docs if "-Supplemental-Statement-" in d[0]]
    since = (x["last_filed"] or "2024-01-01").replace("-", "")
    newer = [d[0] for d in sup if d[1] > since or (not x["last_filed"] and d[1] >= since)]
    res.append({**x, "live_docs": len(docs), "live_newest_any": docs[-1][0] if docs else None,
                "live_newest_supplemental": sup[-1][0] if sup else None, "live_unread_newer_supplementals": newer,
                "confirmed": bool(docs) and not newer})
json.dump(res, open(OUT, "w"), indent=1)
print(len(res), "checked;", sum(1 for r in res if not r["live_docs"]), "pages with no documents;",
      sum(1 for r in res if r["live_unread_newer_supplementals"]), "list a statement we did not read;", sum(r["confirmed"] for r in res), "confirmed")
