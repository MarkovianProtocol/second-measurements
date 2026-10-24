#!/usr/bin/env python3
"""SM-026: rebuild the Forum records from the shipped procedural-history text (forum_procedural_history.jsonl), with
the same start rule as WIPO: the earlier of the response's receipt and the response deadline after any extension.
"Cancelled" in the Forum listing is the outcome (domain cancelled), not a cancelled case, so those are counted.
python3 rebuild.py forum_procedural_history.jsonl forum_records.json   (run from this folder; uses extract.py)"""
import datetime as dt, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import extract
EXT = re.compile(r"extend|extension|new deadline|re-?served|additional (?:\w+ )?days", re.I)
out = []
for line in open(sys.argv[1]):
    x = json.loads(line)
    t = (x["procedural_history"] or "") + " " + (x.get("dated_line") or "")
    t = re.sub(r"\b([Rr]) (esponse)", r"\1\2", t)               # PDF-to-HTML split: "r esponse"
    r = extract.extract(t)
    r.update(caseNumber=x["caseNumber"], url=x["url"], status=x["status"], decision_date_listing=x["decisionDate"])
    dl = r["response_deadline"]
    if dl and r["appointed"]:                                  # a later response deadline stated in a sentence about an extension
        for s in re.split(r"(?<=\.) ", t[:t.find("Dated")] if "Dated" in t else t):
            if EXT.search(s) and re.search(r"[Rr]espon|deadline", s) and not re.search(r"Panel|decision", s):
                for m in re.finditer(r"(?:due on|due|until|to|deadline of|extended to)\s+" + extract.DATE, s, re.I):   # the new deadline, not a receipt date
                    v = extract.pd(re.search(extract.DATE, m.group(0), re.I))
                    if v and dl < v <= r["appointed"]: dl = v; r["deadline_extended_to"] = v
    rec, ap = r["response_received"], r["appointed"]
    start = min([v for v in (rec, dl) if v], default=None)
    r["clock_basis"] = "response_received" if rec and (not dl or rec <= dl) else ("response_deadline" if dl else None)
    r["clock_start"] = start
    r["days_to_appoint"] = (ap - start).days if start and ap else None
    out.append({k: (v.isoformat() if isinstance(v, dt.date) else v) for k, v in r.items()})
json.dump(out, open(sys.argv[2], "w"), indent=1)
v = [o["days_to_appoint"] for o in out if o["days_to_appoint"] is not None and not o["three"]]
print(len(out), "decisions;", len(v), "single with dates;", sum(d > 5 for d in v), "over 5 days")
