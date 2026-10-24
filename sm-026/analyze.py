#!/usr/bin/env python3
"""SM-026: UDRP Rules 6(b) and 15(b) at WIPO and the Forum, 2025 to 24 October 2026.
6(b): a single panelist is to be appointed "within five (5) calendar days following receipt of the response by the
Provider, or the lapse of the time period for the submission thereof". 15(b): "In the absence of exceptional
circumstances", the decision is due "within fourteen (14) days of its appointment".
Start = the response's receipt date, else the (extended) response due date. Counted: single-member panels, decisions in
English (WIPO), not suspended (WIPO), with both dates read. Late = more than 5 days.
python3 analyze.py wipo_parsed.jsonl forum_records.json OUT.json"""
import collections, datetime as dt, json, statistics as st, sys
WP, FR, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
LAUNCH = "2026-03-09"                       # WIPO announced expedited case processing (news 2026/0005)
q = lambda xs, f: sorted(xs)[min(len(xs) - 1, int(f * len(xs)))]
def dist(xs, lim):
    xs = sorted(xs); n = len(xs)
    return {"n": n, f"over_{lim}": sum(x > lim for x in xs), "pct_over": round(100 * sum(x > lim for x in xs) / n, 1) if n else None,
            "median": st.median(xs) if xs else None, "p25": q(xs, .25) if xs else None, "p75": q(xs, .75) if xs else None,
            "p90": q(xs, .9) if xs else None, "within_1": sum(x <= 1 for x in xs), "over_10": sum(x > 10 for x in xs), "over_20": sum(x > 20 for x in xs)}
W = [json.loads(l) for l in open(WP)]
excl = collections.Counter()
use = []
for p in W:
    why = ("not in English" if not p["english"] else "three-member panel" if p["three_member"] else "suspended" if p["suspended"]
           else "no appointment date read" if not p["appointed"] else "no response or due date read" if not p["start"] else None)
    if why: excl[why] += 1; continue
    use.append(p)
wd = [p["days_to_appoint"] for p in use]
default = [p for p in use if p["start_basis"] == "due"]
resp = [p for p in use if p["start_basis"] == "response"]
dn = [p for p in default if p["default_notified"]]
month = collections.defaultdict(list)
for p in use: month[p["start"][:7]].append(p["days_to_appoint"])
wdec = [p["days_to_decision"] for p in use if p["days_to_decision"] is not None]
F = json.load(open(FR))
fexcl = collections.Counter(); fuse = []
for r in F:
    why = ("three-member panel" if r["three"] else "no appointment date read" if not r["appointed"] else
           "no response or deadline date read" if not r["clock_start"] else None)
    if why: fexcl[why] += 1; continue
    fuse.append(r)
fd = [r["days_to_appoint"] for r in fuse]
fdec = [(dt.date.fromisoformat(r["decision_date_text"]) - dt.date.fromisoformat(r["appointed"])).days for r in fuse if r.get("decision_date_text")]
fmonth = collections.defaultdict(list)
for r in fuse: fmonth[r["clock_start"][:7]].append(r["days_to_appoint"])
out = {
    "wipo": {"case_numbers_read": None, "decisions": len(W), "excluded": dict(excl), "counted": len(use),
             "appointment": dist(wd, 5), "start_is_deadline": dist([p["days_to_appoint"] for p in default], 5), "start_is_receipt": dist([p["days_to_appoint"] for p in resp], 5),
             "start_is_receipt_strictly_early": sum(1 for p in resp if p["due"] and p["response"] < p["due"]),
             "due_to_default_notice": dist([p["days_due_to_default_notice"] for p in dn], 5),
             "default_notice_to_appointment": dist([p["days_default_notice_to_appoint"] for p in dn], 5),
             "appointed_within_5_of_default_notice": sum(p["days_default_notice_to_appoint"] <= 5 for p in dn),
             "before_expedited_launch": dist([p["days_to_appoint"] for p in use if p["start"] < LAUNCH and p["start"] >= "2025-01-01"], 5),
             "from_expedited_launch": dist([p["days_to_appoint"] for p in use if p["start"] >= LAUNCH], 5),
             "by_month": {m: dist(v, 5) for m, v in sorted(month.items()) if m >= "2025-01"},
             "by_period": {k: dist([p["days_to_appoint"] for p in use if lo <= p["start"] < hi], 5) for k, lo, hi in
                           (("2025 Jan-Jun", "2025-01-01", "2025-07-01"), ("2025 Jul-Dec", "2025-07-01", "2026-01-01"),
                            ("2026 1 Jan-8 Mar", "2026-01-01", LAUNCH), ("2026 9 Mar on", LAUNCH, "2027-01-01"))},
             "decision_after_appointment": dist(wdec, 14),
             "negative_days": sum(x < 0 for x in wd)},
    "forum_start_to_decision": None,
    "forum": {"start_is_deadline_within_a_day_nonnegative": sum(1 for r in fuse if r["clock_basis"] == "response_deadline" and 0 <= r["days_to_appoint"] <= 1),
              "decisions": len(F), "excluded": dict(fexcl), "counted": len(fuse), "appointment": dist(fd, 5),
              "start_is_deadline": dist([r["days_to_appoint"] for r in fuse if r["clock_basis"] == "response_deadline"], 5),
              "start_is_receipt": dist([r["days_to_appoint"] for r in fuse if r["clock_basis"] == "response_received"], 5),
              "by_month": {m: dist(v, 5) for m, v in sorted(fmonth.items()) if m >= "2025-01"},
              "decision_after_appointment": dist(fdec, 14), "negative_days": sum(x < 0 for x in fd)},
}
# Deadline (or receipt) to decision: sidesteps what "appointed" means at each provider. 6(b) + 15(b) allow 5 + 14 = 19 days.
w_s2d = [(dt.date.fromisoformat(p["decision"]) - dt.date.fromisoformat(p["start"])).days for p in use if p["decision"]]
f_s2d = [(dt.date.fromisoformat(r["decision_date_text"]) - dt.date.fromisoformat(r["clock_start"])).days for r in fuse if r.get("decision_date_text")]
out["wipo"]["start_to_decision"] = dist(w_s2d, 19); out["forum"]["start_to_decision"] = dist(f_s2d, 19); del out["forum_start_to_decision"]
# Alternative start: the later of receipt and deadline (credits an early response with the full response period)
alt = [(dt.date.fromisoformat(p["appointed"]) - max(dt.date.fromisoformat(x) for x in (p["response"], p["due"]) if x)).days for p in use]
out["wipo"]["appointment_from_later_of_receipt_and_deadline"] = dist(alt, 5)
falt = [(dt.date.fromisoformat(r["appointed"]) - max(dt.date.fromisoformat(x) for x in (r["response_received"], r.get("deadline_extended_to") or r["response_deadline"]) if x)).days for r in fuse]
out["forum"]["appointment_from_later_of_receipt_and_deadline"] = dist(falt, 5)
out["wipo"]["early_responses"] = sum(1 for p in use if p["response"] and p["due"] and p["response"] < p["due"])
json.dump(out, open(OUT, "w"), indent=1)
a, b = out["wipo"]["appointment"], out["forum"]["appointment"]
print(f"WIPO {a['over_5']}/{a['n']} late ({a['pct_over']}%), median {a['median']} | Forum {b['over_5']}/{b['n']} ({b['pct_over']}%), median {b['median']}")
