#!/usr/bin/env python3
"""Recompute for Troy Hunt, "1,000 Data Breaches Later, the Disclosure Lag Is Worse Than Ever" (1 Jun 2026).

His claim: organisations take longer than ever to tell people about a breach; he says the evidence is
anecdotal and "there are no hard numbers for me to cite". Here are numbers from two state registers
that record both the date an organisation became aware of a breach and the date it gave notice.

Inputs (data/, read 16 Nov 2026):
  wa_sb4j-ca4h.json   Washington AGO, "Data Breach Notifications Affecting Washington Residents" (data.wa.gov)
                      dateaware = "the date the notifying entity became aware that a breach impacting
                      Washington residents had occurred"; datesubmitted = date notice reached the AGO.
                      Law: notice to residents and AGO within 30 days of discovery (45 before the 2019
                      amendment, in force 1 Mar 2020).
  de_dir6-wx8v.json   Delaware DOJ "Data Security Breach Database" (data.delaware.gov):
                      breach_discovered, date_of_notice. Law: notice within 60 days of determination.

Lag = notice date minus aware/discovered date, in days, grouped by the CALENDAR year of the notice.
Rows with a missing date, a 1970/1971 placeholder date, a negative lag, or a lag over 3,000 days are dropped and counted.
"""
import json, datetime as dt, statistics as st, collections, sys

def d(x):
    try:
        return dt.date.fromisoformat(x[:10])
    except Exception:
        return None

def table(rows, deadline):
    by = collections.defaultdict(list)
    for notice, aware in rows:
        by[notice.year].append((notice - aware).days)
    out = {}
    for y in sorted(by):
        v = sorted(by[y])
        q = lambda p: v[min(len(v) - 1, int(p * len(v)))]
        out[y] = {"n": len(v), "median": st.median(v), "p75": q(0.75),
                  "within_deadline": sum(x <= deadline for x in v),
                  "within_deadline_pct": round(100 * sum(x <= deadline for x in v) / len(v), 1)}
    return out

def load(path, aware_key, notice_key, name_key):
    raw = json.load(open(path))
    rows, dropped, named = [], 0, []
    for r in raw:
        a, n = d(r.get(aware_key)), d(r.get(notice_key))
        if not (a and n) or a.year < 2000 or n.year < 2000 or not (0 <= (n - a).days <= 3000):
            dropped += 1
            continue
        rows.append((n, a))
        named.append((r.get(name_key) or "", a, n))
    return raw, rows, dropped, named

res = {}
for state, path, ak, nk, nm, deadline in [
        ("WA", "data/wa_sb4j-ca4h.json", "dateaware", "datesubmitted", "name", 30),
        ("DE", "data/de_dir6-wx8v.json", "breach_discovered", "date_of_notice", "company_name", 60)]:
    raw, rows, dropped, named = load(path, ak, nk, nm)
    t = table(rows, deadline)
    res[state] = {"records": len(raw), "used": len(rows), "dropped": dropped, "deadline_days": deadline, "by_year": t,
                  "carnival_2026": [(n_, str(a), str(b), (b - a).days) for n_, a, b in named
                                    if "carnival" in n_.lower() and b.year == 2026]}
    print(f"\n{state}: {len(raw)} records, {len(rows)} used, {dropped} dropped (missing/negative/implausible dates)")
    print(f"{'year':>6} {'n':>5} {'median':>7} {'p75':>5}  within {deadline} d")
    for y, r in t.items():
        print(f"{y:>6} {r['n']:>5} {r['median']:>7} {r['p75']:>5}  {r['within_deadline']} ({r['within_deadline_pct']}%)")
    for c in res[state]["carnival_2026"]:
        print("  Carnival 2026:", c)

json.dump(res, open("results.json", "w"), indent=1, default=str)

# Washington by cause, three periods (does the rise come from one kind of breach?)
wa = json.load(open("data/wa_sb4j-ca4h.json"))
by = collections.defaultdict(list)
for r in wa:
    a, s_ = d(r.get("dateaware")), d(r.get("datesubmitted"))
    if not (a and s_) or not (0 <= (s_ - a).days <= 3000):
        continue
    g = "2015-2020" if s_.year <= 2020 else ("2021-2023" if s_.year <= 2023 else "2024-2026")
    cause = r.get("databreachcause") or ""
    if cause == "Cyberattack":
        cause += "/" + (r.get("cyberattacktype") or "")
    by[(cause, g)].append((s_ - a).days)
print("\nWA median days by cause (groups of 15+):")
res["WA"]["by_cause"] = {}
for k in sorted(by):
    if len(by[k]) >= 15:
        print(f"  {k[0]:<28} {k[1]}  n={len(by[k]):>3}  median {st.median(by[k])}")
        res["WA"]["by_cause"]["%s %s" % k] = {"n": len(by[k]), "median": st.median(by[k])}
json.dump(res, open("results.json", "w"), indent=1, default=str)

# Same breach, both registers: filings by the same organisation whose notice dates are within 20 days of each
# other (2021 on). Do the two states get the same start date?
import re
norm = lambda s: re.sub(r"[^a-z0-9]", "", re.sub(r"\b(inc|llc|corp|corporation|plc|ltd|co|company|the)\b", "", (s or "").lower()))
de = json.load(open("data/de_dir6-wx8v.json"))
W = collections.defaultdict(list)
for r in wa:
    a, s_ = d(r.get("dateaware")), d(r.get("datesubmitted"))
    if a and s_:
        W[norm(r.get("name"))].append((a, s_))
pairs = []
for r in de:
    a, n = d(r.get("breach_discovered")), d(r.get("date_of_notice"))
    if not (a and n) or n.year < 2021:
        continue
    for wa_a, wa_s in W.get(norm(r.get("company_name")), []):
        if abs((wa_s - n).days) <= 20:
            pairs.append({"org": r.get("company_name"), "de_discovered": str(a), "de_notice": str(n),
                          "wa_aware": str(wa_a), "wa_submitted": str(wa_s), "start_gap": (a - wa_a).days})
same = sum(p["start_gap"] == 0 for p in pairs)
later = sum(p["start_gap"] > 30 for p in pairs)
print(f"\nSame breach in both registers: {len(pairs)} filings; same start date in {same}; "
      f"Delaware's 'discovered' more than 30 days after Washington's 'aware' in {later}")
print("  median lag, WA", st.median(dt.date.fromisoformat(p["wa_submitted"]).toordinal() - dt.date.fromisoformat(p["wa_aware"]).toordinal() for p in pairs),
      "| DE", st.median(dt.date.fromisoformat(p["de_notice"]).toordinal() - dt.date.fromisoformat(p["de_discovered"]).toordinal() for p in pairs))
res["matched"] = {"pairs": len(pairs), "same_start": same, "de_start_30d_later": later, "rows": pairs}
json.dump(res, open("results.json", "w"), indent=1, default=str)
