#!/usr/bin/env python3
"""For each breach in both Have I Been Pwned and a state register (Washington or Delaware), did HIBP load the data before
the company's FIRST notice to either state? candidates.json from match.py (hand-reviewed: every pair is the same incident;
three same-company pairs from different incidents, Fluke, Hot Topic, Luxottica, are excluded by match.py's date rules)."""
import json, statistics as st, datetime as dt
C = json.load(open("candidates.json"))
inc = {}
for c in C:
    k = c["hibp"]; n = dt.date.fromisoformat(c["reg_notice"])
    if k not in inc or n < inc[k]["first_notice"]:
        inc[k] = {"title": c["title"], "breach": c["breach"], "hibp_added": c["added"], "first_notice": n, "first_state": c["state"], "pwn": c["pwn"]}
rows = []
for k, v in sorted(inc.items(), key=lambda kv: kv[1]["hibp_added"]):
    lead = (v["first_notice"] - dt.date.fromisoformat(v["hibp_added"])).days   # >0: HIBP loaded it first
    rows.append(dict(v, first_notice=str(v["first_notice"]), hibp_first_by_days=lead))
    print(f"{v['title'][:28]:28} HIBP {v['hibp_added']}  first state notice {v['first_notice']} ({v['first_state']})  {'HIBP first by ' + str(lead) + ' d' if lead > 0 else 'company first by ' + str(-lead) + ' d'}")
first = [r["hibp_first_by_days"] for r in rows if r["hibp_first_by_days"] > 0]
print(f"\nincidents in both: {len(rows)}; HIBP loaded the data before the company's first state notice: {len(first)}; median lead {st.median(first)} days (range {min(first)}-{max(first)})")
y = [r for r in rows if r["hibp_added"] >= "2026"]; print(f"2026 (HIBP added): {len(y)}; HIBP first: {sum(r['hibp_first_by_days'] > 0 for r in y)}")
json.dump(rows, open("results.json", "w"), indent=1)
