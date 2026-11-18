#!/usr/bin/env python3
"""Pair Have I Been Pwned breaches (api/v3/breaches) with US state breach-notice registers (Washington AGO sb4j-ca4h,
Delaware DOJ dir6-wx8v) for the same organisation and incident. Name: normalised HIBP Title or domain stem equals the
register name, or is its first word(s). Incident: HIBP BreachDate within 180 days of the register's breach start / discovery
date, and not after the register's notice date (a later HIBP breach at the same company is a different incident).
Writes candidates.json; review.json holds the hand decisions; analyze.py does the counts."""
import json, re, datetime as dt
d = lambda x: dt.date.fromisoformat(x[:10]) if x else None
STOP = r"\b(inc|llc|ltd|corp|corporation|company|co|plc|group|holdings|the|lp|llp|limited|na|n a|services|international)\b"
norm = lambda s: re.sub(r"\s+", " ", re.sub(STOP, " ", re.sub(r"[^a-z0-9 ]", " ", (s or "").lower()))).strip()
H = [h for h in json.load(open("data/hibp_breaches.json")) if not h.get("IsFabricated")]
REG = [("WA", json.load(open("data/wa_sb4j-ca4h.json")), "name", ("datestart", "dateaware"), "datesubmitted"),
       ("DE", json.load(open("data/de_dir6-wx8v.json")), "company_name", ("date_of_breach", "breach_discovered"), "date_of_notice")]
cands = []
for h in H:
    keys = {norm(h["Title"]), norm((h.get("Domain") or "").split(".")[0])} - {""}
    hb = d(h["BreachDate"])
    for st, rows, nk, refk, notk in REG:
        for w in rows:
            wn = norm(w.get(nk))
            if not wn or not any(k == wn or (len(k) >= 5 and (wn.startswith(k + " ") or k == wn.split(" ")[0])) for k in keys): continue
            ref = next((d(w.get(k)) for k in refk if d(w.get(k)) and d(w.get(k)).year > 2000), None); notice = d(w.get(notk))
            if not (ref and hb and notice) or notice.year < 2000: continue
            if abs((ref - hb).days) > 180 or hb > notice: continue
            cands.append({"hibp": h["Name"], "title": h["Title"], "breach": h["BreachDate"], "added": h["AddedDate"][:10], "pwn": h["PwnCount"],
                          "state": st, "reg_name": w.get(nk), "reg_ref": str(ref), "reg_notice": str(notice)})
json.dump(cands, open("candidates.json", "w"), indent=1)
print(len(cands), "candidate pairs")
for c in sorted(cands, key=lambda c: (c["title"], c["state"])):
    print(f"{c['title'][:26]:26} {c['state']} | {c['reg_name'][:34]:34} | breach {c['breach']} reg {c['reg_ref']} | HIBP {c['added']} | notice {c['reg_notice']}")
