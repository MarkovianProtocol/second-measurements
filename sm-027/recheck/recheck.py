#!/usr/bin/env python3
"""SM-027 monthly recheck. Same counting rules as analyze.py, one network:
- one row per gitlab-org/gitlab issue cited by a GitLab-CNA CVE (extract.py output), dated by its oldest CVE
- hidden = HTTP 404 to an anonymous GET of the issue; public = 200; anything else is not counted
- an issue counts once it is more than 90 x 24 hours old at the moment it was probed; 2026 = CVE published in 2026
Adds one row to the table between <!--recheck--> and <!--/recheck--> on the page, and reports issues opened since the last run
(kept in STATE as the list of hidden 2026 issues past 90 days).
Usage: recheck.py PROBE_CSV PAGE STATE_JSON"""
import csv, datetime as dt, json, os, sys
PROBE, PAGE, STATE = sys.argv[1:4]
P = lambda s: dt.datetime.fromisoformat(s.replace("Z", ""))
iss = {}
for cve, pub, iid, code, ts in csv.reader(open(PROBE)):
    r = iss.get(iid)
    if r is None or pub < r["pub"]: iss[iid] = {"pub": pub, "code": code, "ts": ts}
rows = []
for iid, r in iss.items():
    pub, probed = P(r["pub"]), P(r["ts"])
    state = "hidden" if r["code"] == "404" else "public" if r["code"] == "200" else "other"
    rows.append(dict(iid=iid, year=pub.year, past_90=(probed - pub).total_seconds() > 90 * 24 * 3600, state=state, probed=probed))
due = [r for r in rows if r["year"] == 2026 and r["past_90"] and r["state"] != "other"]
hidden = sorted((r["iid"] for r in due if r["state"] == "hidden"), key=int)
probe_day = min(r["probed"] for r in rows).date()
prev = json.load(open(STATE)) if os.path.exists(STATE) else None
opened = sorted(set(prev["hidden"]) - set(hidden), key=int) if prev else []
opened_public = [i for i in opened if iss.get(i, {}).get("code") == "200"]
n, h = len(due), len(hidden)
print(f"{probe_day}: 2026 issues past 90 days {n}, hidden {h} ({100*h/n:.1f}%); opened since {prev['date'] if prev else '-'}: {len(opened_public)} {opened_public[:10]}")
label = f"{probe_day.day} {probe_day.strftime('%b %Y')}"
row = (f'<tr><td>{label}</td><td class="n">{n}</td><td class="n">{h}</td><td class="n">{100*h/n:.1f}%</td>'
       f'<td class="n">{len(opened_public)}</td></tr>')
if PAGE != "-":
    p = open(PAGE, encoding="utf-8").read()
    a, b = p.index("<!--recheck-->"), p.index("<!--/recheck-->")
    if f"<td>{label}</td>" in p[a:b]:
        print("row for this date already present"); sys.exit(0)
    open(PAGE, "w", encoding="utf-8").write(p[:b] + row + "\n" + p[b:])
json.dump({"date": str(probe_day), "hidden": hidden}, open(STATE, "w"))
