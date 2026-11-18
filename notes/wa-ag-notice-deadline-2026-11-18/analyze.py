#!/usr/bin/env python3
"""Washington's 30-day deadline for breach notice to the Attorney General (RCW 19.255.010(7); RCW 42.56.590(7) for agencies)
vs the AG's own register. Inputs: data/wa_sb4j-ca4h.json (data.wa.gov register, read 16 Nov 2026, same file as our
troyhunt-disclosure-lag-2026-11-16 note), data/wa_sb4j-ca4h_metadata.json (field definitions), data/wa_rcw_19.255.010.html,
data/wa_rcw_42.56.590.html, data/wa_ag_dbr_2026.pdf (AG 2026 Data Breach Report), data/atg_live_stats.html.
Scope: notices filed 2021 onward (the 30-day rule took effect 1 Mar 2020) affecting more than 500 Washington residents, the
threshold in subsection (7). Pre-2021 rows are not tabulated: the old AG-notice rule is not among our exhibits."""
import json, re, html, statistics as S, subprocess, collections
from datetime import date
def text(f): return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", open(f, errors="ignore").read())))
D = json.load(open("data/wa_sb4j-ca4h.json"))
M = {c["fieldName"]: c.get("description", "") for c in json.load(open("data/wa_sb4j-ca4h_metadata.json"))["columns"]}
for k in ("dateaware", "datesubmitted", "dayselapsedbeforenotification", "washingtoniansaffected"): print(f"field {k}: {M.get(k)!r}")
rows, agree = [], 0
for r in D:
    f = r.get("dayselapsedbeforenotification")
    if f in (None, ""): continue
    a, s = date.fromisoformat(r["dateaware"][:10]), date.fromisoformat(r["datesubmitted"][:10])
    agree += (s - a).days == int(float(f)); rows.append((s, int(float(f)), r))
print(f"\nregister notices: {len(D):,}; with days-before-notification: {len(rows):,}; field equals submitted - aware: {agree:,}")
def wa(r):
    try: return int(float(r.get("washingtoniansaffected")))
    except (TypeError, ValueError): return None
R = [(s, v, r) for s, v, r in rows if s.year >= 2021]
print(f"filed 2021 onward: {len(R):,}; affecting <=500 residents: {sum((wa(r) or 0) <= 500 and wa(r) is not None for *_, r in R)}; no residents value: {sum(wa(r) is None for *_, r in R)}")
R = [(s, v, r) for s, v, r in R if (wa(r) or 0) > 500]
by = collections.defaultdict(list)
for s, v, _ in R: by[s.year].append(v)
print(f"\n{'year':>5} {'notices':>8} {'median':>7} {'over 30':>8} {'share':>6} {'over 90':>8}   (notices affecting >500 residents)")
for y in sorted(by):
    v = by[y]; o = sum(x > 30 for x in v)
    print(f"{y:>5} {len(v):>8} {S.median(v):>7} {o:>8} {100*o/len(v):>5.0f}% {sum(x>90 for x in v):>8}")
allv = [v for _, v, _ in R]; o = sum(x > 30 for x in allv)
print(f"2021 onward: {len(allv):,} notices, {o:,} more than 30 days after awareness ({100*o/len(allv):.1f}%)")
t = text("data/wa_rcw_19.255.010.html"); g = text("data/wa_rcw_42.56.590.html")
print("\nRCW 19.255.010(3):", re.search(r"\(3\) The notification required by this section may be delayed.*?compromise the investigation\.", t).group(0))
print("RCW 19.255.010(7):", re.search(r"\(7\) Any person or business.*?discovered\.", t).group(0))
print("RCW 19.255.010(7)(b):", re.search(r"\(b\) The notice to the attorney general must be updated.*?due\.", t).group(0))
print("RCW 19.255.010(8):", re.search(r"\(8\) Notification to affected consumers.*?data system\.", t).group(0))
print("RCW 42.56.590(7):", re.search(r"\(7\) Any agency.*?discovered\.", g).group(0))
x = subprocess.run(["pdftotext", "-layout", "data/wa_ag_dbr_2026.pdf", "-"], capture_output=True, text=True).stdout
print("\n2026 report, lines mentioning 'day(s)':", [l.strip() for l in x.splitlines() if re.search(r"\bdays?\b", l, re.I)])
print("2026 report, 'promptly':", [l.strip() for l in x.splitlines() if "promptly" in l])
rec = x[x.find("RECOMMENDATIONS"):]; rec = rec[:rec.find("Legislators should also consider")]
print("2026 report, numbered recommendations:", re.findall(r"^\s*(\d)\. (.{0,70})", rec, re.M))
raw = open("data/atg_live_stats.html", errors="ignore").read()
L = text("data/atg_live_stats.html")
print("\nlive statistics page, any time-to-notify measure:", bool(re.search(r"(days|time)\s+(to|before|until)\s+notif", L, re.I)))
print("live statistics page, embedded charts:", sorted(set(re.findall(r"data\.wa\.gov/dataset/([^/]+)/", raw))))
