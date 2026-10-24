#!/usr/bin/env python3
"""SM-026: read the procedural history of each WIPO UDRP decision (census_YEAR.jsonl from census.py) into dates.
Clock (UDRP Rules 6(b)): a single panelist is to be appointed "within five (5) calendar days following receipt of the
response by the Provider, or the lapse of the time period for the submission thereof". Start = the date the Response
was filed with the Center, or, with no Response, the (last, extended) due date for Response. Days = appointment - start.
Start = the earlier of the response's receipt and the response due date after any extension (literal 6(b)).
python3 parse.py census_2025.jsonl [census_2026.jsonl ...] > parsed.jsonl"""
import datetime as dt, json, re, sys
MON = r"(January|February|March|April|May|June|July|August|September|October|November|December)"
DATE = MON + r" (\d{1,2}), (\d{4})"
def d(m, i=1): return dt.date(int(m.group(i + 2)), dt.datetime.strptime(m.group(i), "%B").month, int(m.group(i + 1)))
EXT = re.compile(r"extend|extension|new due date|renotif|re-notif|additional (?:\w+ )?(?:\(\d\) )?(?:calendar )?days|new deadline|postponed|due date for Response as|was due|Response was therefore due|setting a deadline", re.I)
TGT = re.compile(r"(?:until|to|as|was|is|of|through|due|deadline of|on) (?:the )?" + MON + r" (\d{1,2}),? (\d{4})")
SUS = re.compile(r"Center (?:formally )?suspended|Panel suspended|Notification of (?:Extension to )?Suspension|notified the (?:Parties of the |parties about the )?suspension|(?:proceedings?) (?:was|were) (?:further )?suspended|suspended the (?:administrative )?proceeding|suspension of the proceeding was|reinstitut", re.I)
def first(rx, t, i=1):
    m = re.search(rx, t); return d(m, i) if m else None
def last(rx, t, i=1):
    ms = list(re.finditer(rx, t)); return d(ms[-1], i) if ms else None
for path in sys.argv[1:]:
    for line in open(path):
        r = json.loads(line)
        if r["http"] != "200": continue
        t = r.get("procedural_history") or ""
        t = re.sub(r"\bf (?=[a-z])", "f", t)                 # PDF ligature artefacts: "f iled", "f inds"
        t = re.sub(r" page \d+ ", " ", t)                    # page breaks inside sentences
        rec = {"case": r["case"], "english": bool(t)}         # decisions in other languages have no "Procedural History" heading
        rec["filed"] = first(r"filed with the WIPO Arbitration and Mediation Center \(the .Center.\) on " + DATE, t)
        rec["commenced"] = first(r"proceedings commenced on " + DATE, t)
        due = [first(r"due date for (?:the )?Response was " + DATE, t),
               last(r"(?:new|extended) (?:due date for (?:the )?)?Response(?: due date)? (?:due )?(?:was|is|to) " + DATE, t),
               last(r"due date for (?:the )?Response was (?:extended|automatically extended) (?:until|to) " + DATE, t),
               last(r"[Rr]esponse[^.]{0,120}?(?:was|were) (?:automatically )?extended (?:until|to) " + DATE, t),
               last(r"extended (?:the )?(?:Response )?due date (?:for (?:the )?Response )?(?:until|to) " + DATE, t)]
        due = [x for x in due if x]; rec["due"] = max(due) if due else None
        rec["due_original"] = first(r"due date for (?:the )?Response was " + DATE, t)
        appt_m = re.search(r"appointed (.{0,160}?) as (?:the )?(?:sole )?panell?ist in this matter on " + DATE, t)
        appt_d = d(appt_m, 2) if appt_m else None
        if rec["due"] and appt_d:                              # extensions worded any other way: a later date in a sentence about the response deadline
            for s in re.split(r"(?<=\.) ", t):
                if EXT.search(s) and re.search(r"[Rr]espon|due date|deadline|renotif|re-notif", s) and not re.search(r"[Dd]ecision due|Panel|supplemental", s):
                    for m in TGT.finditer(s):
                        try: x = dt.date(int(m.group(3)), dt.datetime.strptime(m.group(1), "%B").month, int(m.group(2)))
                        except ValueError: continue
                        if rec["due"] < x <= appt_d: rec["due"] = x
            if rec["due"] == rec["due_original"] and rec["commenced"] and (rec["due"] - rec["commenced"]).days == 20 and re.search(r"(?:automatic|four|4).{0,25}(?:day|calendar).{0,40}extension|Automatic Response Extension|four-day extension|additional four", t, re.I) \
                    and not re.search(r"denied|not grant|rejected", t, re.I):
                rec["due"] = rec["due"] + dt.timedelta(days=4); rec["automatic_extension_inferred"] = True
        resp = [first(r"Response was filed with the Center(?: [^.,]{0,160}?)? on " + DATE, t), first(r"a formal Response on " + DATE, t), first(r"Center received the Response on " + DATE, t),
                first(r"Respondent (?:filed|submitted) (?:a|its|the) (?:formal )?Response(?: with the Center)? on " + DATE, t)]
        resp += [first(r"Responses? (?:in \w+ )?(?:was|were) (?:respectively )?filed (?:in \w+ )?(?:earlier )?(?:with the Center )?(?:by [^.]{0,120}? )?(?:with the Center )?(?:on|by) " + DATE, t),
                 first(r"(?:Respondents? |Respondents? [^.]{0,80}?)(?:each )?filed (?:a|its own|their) Response[^.]{0,80}? on " + DATE, t),
                 first(r"On " + DATE + r", the Center received a Response", t), first(r"A Response was received by the Center on " + DATE, t)]
        resp = [x for x in resp if x]; rec["response"] = min(resp) if resp else None
        rec["default_notified"] = first(r"notified (?:the Parties of )?(?:the )?Respondents?.?s? default on " + DATE, t) or first(r"notified the (?:Parties of the )?[Cc]ommencement of (?:the )?Panel Appointment Process on " + DATE, t)
        m = re.search(r"appointed (.{0,160}?) as (?:the )?(?:sole )?panell?ist in this matter on " + DATE, t)
        rec["appointed"] = d(m, 2) if m else (first(r"On " + DATE + r", the Center (?:preliminarily )?appointed [^.]{0,120}?(?:sole )?panelist", t))
        rec["three_member"] = bool(re.search(r"three.member|Presiding Panell?ist|as panell?ists in this matter|appointed [^.]{3,80}, [^.]{3,80},? and [^.]{3,80} as the Administrative Panel", t, re.I))
        rec["suspended"] = any(SUS.search(s) and not re.search(r"(?:not|declin\w*|refus\w*) (?:wish|want|request|agree|consent)\w* (?:to |for |a |the )*suspen|no suspension", s, re.I) for s in re.split(r"(?<=\.) ", t))
        rec["extension"] = bool(re.search(r"extension (?:for|of the (?:due date|time))|granted (?:a|an) .{0,20}extension|automatically extended", t, re.I))
        rec["expedited"] = bool(re.search(r"expedited (?:case )?process|expedited UDRP|expedited case|request(?:ed)? (?:for )?expedit", t, re.I))
        m = re.search(r"Date: " + DATE, r.get("date_line") or ""); rec["decision"] = d(m) if m else None
        rec["start"] = min([x for x in (rec["response"], rec["due"]) if x], default=None)
        rec["start_basis"] = "response" if rec["response"] and (not rec["due"] or rec["response"] <= rec["due"]) else ("due" if rec["due"] else None)
        rec["days_to_appoint"] = (rec["appointed"] - rec["start"]).days if rec["appointed"] and rec["start"] else None
        rec["days_due_to_default_notice"] = (rec["default_notified"] - rec["due"]).days if rec["default_notified"] and rec["due"] else None
        rec["days_default_notice_to_appoint"] = (rec["appointed"] - rec["default_notified"]).days if rec["appointed"] and rec["default_notified"] else None
        rec["days_to_decision"] = (rec["decision"] - rec["appointed"]).days if rec["decision"] and rec["appointed"] else None
        print(json.dumps({k: (v.isoformat() if isinstance(v, dt.date) else v) for k, v in rec.items()}))
