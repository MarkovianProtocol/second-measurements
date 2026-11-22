"""EPA Title V petitions vs CAA 505(b)(2) 60-day deadline. Input: EPA Title V Petition Database HTML (saved copy). Stdlib only."""
import re, sys, html, json, datetime as dt, collections, statistics as st
SRC = sys.argv[1]; ASOF = dt.date.fromisoformat(sys.argv[2])
t = open(SRC, encoding="utf-8").read()
tb = t[t.index("<table"):t.index("</table>")]
rows = []
for tr in re.findall(r"<tr.*?</tr>", tb, re.S)[1:]:
    cells = re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", tr, re.S)
    txt = [html.unescape(re.sub(r"<[^>]+>", "", c)).strip() for c in cells]
    links = [re.findall(r'href="([^"]+)"', c) for c in cells]
    if len(txt) < 9: continue
    rows.append(dict(petitioner=txt[0], facility=txt[1], region=txt[2], state=txt[3], petition_link=(links[5] or [""])[0],
                     petition_date=txt[6], resolution_link=(links[7] or [""])[0], resolution_text=txt[7], resolution_date=txt[8]))
# Corrections to EPA's table, each backed by a document in exhibits/ (found by review gate pass 1, 10 Nov 2026).
CORRECT = [
  # (petitioner startswith, facility startswith, petition_date, field, new value, source)
  ("Linda Dela Cruz", "Kawaihae Cogeneration", "1996-12-24", "resolution_date", "1997-03-10", "order signed MAR 10 1997, exhibits/orders/kawaihae_decision1996.pdf p.5; table says 1997-02-01"),
  ("Air Alliance Houston", "TPC Houston", "2025-02-17", "resolution_date", "2026-05-06", "order exhibits/orders/tpc-houston-order_5-6-26.pdf (file name 5-6-26; cites an order of 18 July 2025); the other row for the same order says 2026-05-06; table says 2025-05-06"),
  ("Center for Biological Diversity", "RM Midstream Latham", "2025-04-24", "petition_date", "2025-04-14", "order of 8 Dec 2025: 'The first petition, dated April 14, 2025, (the \"Latham Petition\")', exhibits/orders/rocky-mountain-midstream-order_12-8-2025.pdf"),
  ("Environmental Integrity Project", "Southwestern Electric Power Company - Welsh", "2016-11-08", "withdrawn", True, "withdrawal letter of 25 Oct 2022, exhibits/orders/withdrawal_welsh_cc_east_shell_deer_park_10-25-22.pdf; the table links it only on the Shell Deer Park row"),
  ("Environmental Integrity Project", "Flint Hills Resources - Corpus Christi East", "2016-11-29", "withdrawn", True, "same letter, exhibits/orders/withdrawal_welsh_cc_east_shell_deer_park_10-25-22.pdf"),
]
applied = []
for r in rows:
    for pet, fac, pd, field, val, src in CORRECT:
        if r["petitioner"].startswith(pet) and r["facility"].startswith(fac) and r["petition_date"] == pd:
            r[field] = val; applied.append((pet, fac, pd, field, val))
# If EPA fixes a row in its own table, its correction no longer matches; record that instead of failing (monthly recount).
corrections_not_found = [c[:3] for c in CORRECT if not any(a[:3] == c[:3] for a in applied)]
if corrections_not_found: print("corrections no longer needed (row changed in EPA's table):", corrections_not_found)
# EPA dismissed every Bay Area refinery petition as unripe on 19 Dec 2003 (EPA order of 2004, exhibits/orders/chevron_cbe_decision2004.pdf; letters in exhibits/orders/*_decision2003.pdf)
UNRIPE_DATE = "2003-12-19"

def d(s):
    # one date, a non-padded date (2019-1-15), or several order dates run together (partial orders): take the EARLIEST, which favours EPA
    ds = [dt.date(int(a), int(b), int(c)) for a, b, c in re.findall(r"(\d{4})-(\d{1,2})-(\d{1,2})", s)]
    return min(ds) if ds else None
out = collections.Counter(); res = []; pend = []; skipped = []
seen = set()
for r in rows:
    key = (r["petitioner"].lower(), r["facility"].lower(), r["petition_date"], r["resolution_date"])
    if key in seen: out["duplicate row"] += 1; continue
    seen.add(key)
    p = d(r["petition_date"])
    withdrawn = r.get("withdrawn") or "withdr" in (r["resolution_text"] + r["resolution_link"]).lower()
    if withdrawn: out["withdrawn"] += 1; continue
    if not p: out["petition date unparseable"] += 1; skipped.append(r); continue
    if r["resolution_date"].lower().startswith("pending"):
        pend.append((p, r)); continue
    q = d(r["resolution_date"])
    if not q: out["resolution date approximate"] += 1; skipped.append(r); continue
    r["outcome"] = "dismissed as unripe" if r["resolution_date"] == UNRIPE_DATE and r["state"] == "CA" else "decided"
    res.append(((q - p).days, p, q, r))
print("rows", len(rows), dict(out))
days = [x[0] for x in res]
print("corrections applied", len(applied))
print("resolved", len(res), "within 60 days", sum(x <= 60 for x in days), "within 63", sum(x <= 63 for x in days), "median days", st.median(days))
by = collections.defaultdict(list)
for n, p, q, r in res: by[(p.year // 5) * 5].append(n)
for y in sorted(by): v = by[y]; print(f"  filed {y}-{y+4}: {sum(x<=60 for x in v)} of {len(v)} on time, median {st.median(v)}")
r20 = [n for n, p, q, r in res if p.year >= 2020]; print("filed 2020+:", sum(x <= 60 for x in r20), "of", len(r20))
ages = sorted((ASOF - p).days for p, r in pend)
print("pending", len(pend), "past 60 days", sum(a > 60 for a in ages), "over 5 years", sum(a > 5 * 365 for a in ages), "oldest filed", min(p for p, r in pend))
json.dump([dict(r, days=n) for n, p, q, r in res], open("resolved.json", "w"), indent=0)
json.dump([dict(r, age_days=(ASOF - p).days) for p, r in pend], open("pending.json", "w"), indent=0)

# ---- summary.json: every number the page uses ----
COMPANY = {"R. R. Donnelley": "own permit", "Wisconsin Electric Power Company": "own permit", "Holsum de Puerto Rico, Inc.": "own permit",
           "Schriever Air Force Base": "own permit",
           "Anderson Lithograph Co.": "another company's permit", "International-Matex Tank Terminals, LLC": "another company's permit",
           "Decatur Energy Center LLC": "another company's permit", "A-C Equipment Services and John Vitas": "another company's permit"}
def bucket(a):
    for lim, lab in ((60, "within 60 days"), (365, "61 days to 1 year"), (5*365, "1 to 5 years"), (10*365, "5 to 10 years"), (20*365, "10 to 20 years")):
        if a <= lim: return lab
    return "more than 20 years"
S = {"as_of": str(ASOF), "rows": len(rows), "excluded": dict(out), "resolved": len(res), "resolved_within_60": sum(x <= 60 for x in days),
     "resolved_within_63": sum(x <= 63 for x in days), "median_days": st.median(days),
     "over_1_year": sum(x > 365 for x in days), "over_3_years": sum(x > 3*365 for x in days), "longest_days": max(days),
     "corrections_not_found": [list(c) for c in corrections_not_found],
     "corrections": [dict(petitioner=a, facility=b, petition_date=c, field=e, value=f, source=g) for a, b, c, e, f, g in CORRECT],
     "on_time_unripe_dismissals": sum(1 for n, p, q, r in res if n <= 60 and r["outcome"] == "dismissed as unripe"),
     "unripe_dismissals_total": sum(1 for n, p, q, r in res if r["outcome"] == "dismissed as unripe"),
     "on_time_decided": sum(1 for n, p, q, r in res if n <= 60 and r["outcome"] == "decided"),
     "by_5yr": {f"{y}-{y+4}": {"resolved": len(v), "on_time": sum(x <= 60 for x in v), "median": st.median(v)} for y, v in sorted(by.items())},
     "by_year_2019_on": {}, "filed_2020_on": {"resolved": len(r20), "on_time": sum(x <= 60 for x in r20)},
     "on_time_rows": [dict(facility=r["facility"], petitioner=r["petitioner"], petition_date=r["petition_date"], resolution_date=r["resolution_date"], days=n, outcome=r["outcome"]) for n, p, q, r in res if n <= 60],
     "by_region": {}, "pending": {"n": len(pend), "past_60": sum(a > 60 for a in ages), "over_5y": sum(a > 5*365 for a in ages), "over_10y": sum(a > 10*365 for a in ages),
                                  "over_20y": sum(a > 20*365 for a in ages), "oldest": str(min(p for p, r in pend)),
                                  "by_age": dict(collections.Counter(bucket((ASOF - p).days) for p, r in pend)),
                                  "company_filed": [dict(petitioner=r["petitioner"], facility=r["facility"], petition_date=r["petition_date"], kind=COMPANY[r["petitioner"]]) for p, r in pend if r["petitioner"] in COMPANY]}}
for y in range(2019, ASOF.year + 1):
    v = [n for n, p, q, r in res if p.year == y]; pn = sum(1 for p, r in pend if p.year == y)
    S["by_year_2019_on"][str(y)] = {"resolved": len(v), "on_time": sum(x <= 60 for x in v), "median": st.median(v) if v else None, "still_pending": pn}
rg = collections.defaultdict(list)
for n, p, q, r in res: rg[r["region"] or "blank"].append(n)
for k in sorted(rg): S["by_region"][k] = {"resolved": len(rg[k]), "on_time": sum(x <= 60 for x in rg[k]), "median": st.median(rg[k]), "pending": sum(1 for p, r in pend if (r["region"] or "blank") == k)}
json.dump(S, open("summary.json", "w"), indent=1, ensure_ascii=False)
print("summary.json written")
