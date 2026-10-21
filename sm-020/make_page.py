#!/usr/bin/env python3
"""Render SM-020 from summary.json. python3 make_page.py summary.json OUT.html"""
import json, sys, os, html, datetime as dt
S = json.load(open(sys.argv[1])); OUT = sys.argv[2]
_lv = next((sys.argv[i + 1] for i, x in enumerate(sys.argv) if x == "--live"), None)
LV = json.load(open(_lv)) if _lv else None   # live.py output for the newest quarter; absent = no live lead
_bt = next((sys.argv[i + 1] for i, x in enumerate(sys.argv) if x == "--backtest"), None)
BT = json.load(open(_bt)) if _bt else None   # backtest.py output: what became of the previous quarter's missing pairs
BT_DUE = "20 July 2026"
HERE = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(HERE, "page_parts")
esc = html.escape
n = lambda x: f"{x:,}" if isinstance(x, int) else str(x)
pct = lambda a, b: f"{100 * a / b:.1f}%"
Q, A, Y = S["quarters"], S["all"], S["y2025"]
qs = list(Q)
def nice(name):
    import re as _re
    keep = {"LLC", "LLP", "P.C.", "PLLC", "LP", "USA", "II", "III", "&"}
    def w1(w):
        if w in keep or (len(w) <= 2 and w.isalpha() and w not in {"AS", "OF", "OR", "AT", "IN", "ON", "TO", "BY", "AN", "A"}): return w
        pre = "(" if w.startswith("(") else ""; w = w.lstrip("(")
        return pre + _re.sub(r"(?<=')([a-z])", lambda m: m.group(1).upper(), w.capitalize())
    out = " ".join(w1(w) for w in name.split())
    return _re.sub(r"\bMc([a-z])", lambda m: "Mc" + m.group(1).upper(), out)
def qlabel(q): return {"1": "Jan–Mar", "2": "Apr–Jun", "3": "Jul–Sep", "4": "Oct–Dec"}[q[-1]] + " " + q[:4]
def dlabel(d): return dt.date.fromisoformat(d).strftime("%-d %b %Y")
fetched = dt.date.fromisoformat(S["fetched_at"][:10])
_dep = os.path.expanduser("~/second-measurements/zenodo/sm-020/deposit.json")
DOI = json.load(open(_dep))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(_dep) else "pending"
SIG = json.load(open(os.path.join(HERE, "exhibits", "signature_vs_posted_sample.json")))["summary"]
TW = S["third_week"]
D1 = sum(1 for v in TW["by_quarter"].values() if v["busiest_day"] == 1)
PRMIN, PRMAX = min(v["peak_registrants"] for v in TW["by_quarter"].values()), max(v["peak_registrants"] for v in TW["by_quarter"].values())
ALL_LATE = [f for f in S["top_firms"] if f.get("total") and f["late"] == f["total"]]
def _noact(f): return sum(v for k, v in f.get("counts", {}).items() if k.endswith("Y"))
NOACT = "; ".join(f"{esc(nice(f['registrant']))}: {'all' if _noact(f) == f['total'] else n(_noact(f))} of {n(f['total'])}" for f in ALL_LATE if _noact(f) * 2 > f["total"])
NOACT = ("Some of these reports say there was no lobbying in the quarter, which still has to be reported by the deadline<sup><a href=\"#r2\">2</a></sup>: " + NOACT + ".") if NOACT else ""
DUP = S["duplicates"]
_res = json.load(open(os.path.join(HERE, "results_2026-10-15.json")))
TREAD = _res.get("merged", [{}])[-1].get("fetched_at", "")[11:16]
_fr = sorted(f["read_at"] for f in S["top_firms"] if f.get("read_at"))
FREAD = f"{_fr[0][11:16]} to {_fr[-1][11:16]}" if _fr else ""

title = (f"A registered lobbyist must file each quarter&rsquo;s report within 20 days. Of {n(Y['total'])} reports for 2025, "
         f"{n(Y['late'])} went up late, {n(Y['over_30'])} more than a month late, and the fine for a knowing violation is up to $200,000")
desc = (f"Every lobbying firm and every organisation with in-house lobbyists files a quarterly report (LD-2) with the Senate and the House, "
        f"due 20 days after the quarter ends. The public database stamps each report with the time it was posted; on every report we checked, that was the time it was signed. "
        f"We counted every quarterly and termination report for January 2025 to June 2026 and read the stamp on every late one: {n(A['late'])} of {n(A['total'])} ({A['late_pct']}%) were late. "
        f"For 2025, {n(Y['late'])} of {n(Y['total'])} were late, by a median of {Y['median_days']:g} days.")

rows = ""
for q in reversed(qs):
    r = Q[q]
    rows += (f"<tr><td>{qlabel(q)}</td><td>{dlabel(r['deadline'])}</td><td class='n'>{n(r['total'])}</td><td class='n'>{n(r['late'])}</td>"
             f"<td class='n'>{r['late_pct']}%</td><td class='n'>{n(r['over_30'])}</td><td class='n'>{r['regular']['late_pct']}%</td><td class='n'>{r['no_activity']['late_pct']}%</td><td class='n'>{r['termination']['late_pct']}%</td></tr>")
B = S["days_buckets"]
buckets = "".join(f"<tr><td>{k}</td><td class='n'>{n(v)}</td></tr>" for k, v in
                  (("1 day", B["1"]), ("2 to 7 days", B["2-7"]), ("8 to 30 days", B["8-30"]), ("31 to 90 days", B["31-90"]), ("more than 90 days", B["over_90"])))
busy = "".join(f"<tr><td>{qlabel(b['quarter'])}</td><td>{b['weekday']} {dlabel(b['date'])}</td><td class='n'>{b['days_after_deadline']}</td>"
               f"<td class='n'>{n(b['reports'])}</td><td class='n'>{n(b['registrants'])}</td></tr>" for b in S["busiest_late_days"][:8])
firms = ""
for f in S["top_firms"][:20]:
    of = f" of {n(f['total'])}" if f.get("total") else ""
    firms += (f"<tr><td>{esc(nice(f['registrant']))}</td><td class='n'>{n(f['late'])}{of}</td><td class='n'>{n(f['clients_late'])}</td>"
              f"<td class='n'>{f['quarters_late']}</td><td class='n'>{f['median_days']:g}</td><td class='n'>{n(f['max_days'])}</td></tr>")

style = open(os.path.join(P, "style.html")).read()
top = open(os.path.join(P, "top.html")).read().replace("SECOND MEASUREMENT SM-017", "SECOND MEASUREMENT SM-020")
foot = open(os.path.join(P, "foot.html")).read()
url = "https://markovianprotocol.com/measurements/sm-020.html"
head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="{url}">
<title>SM-020 {title} — Markovian Protocol</title>
<meta name="description" content="{esc(desc, quote=True)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Markovian Protocol">
<meta property="og:title" content="SM-020 {title}"><meta property="og:description" content="{esc(desc, quote=True)}">
<meta property="og:url" content="{url}"><meta property="og:image" content="https://markovianprotocol.com/measurements/cards/sm-020.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@MarkovProtocol">
<meta name="twitter:title" content="SM-020 {title}"><meta name="twitter:description" content="{esc(desc, quote=True)}">
<meta name="twitter:image" content="https://markovianprotocol.com/measurements/cards/sm-020.png">
{style}
"""
live_li = ""
if LV:
    _q = qlabel(LV["quarter"]); _due = dt.date.fromisoformat(LV["posted_before"]) - dt.timedelta(days=1)
    _rs, _rf = LV["read_started"], LV["read_finished"]
    live_li = (f'\n<li><b>Live:</b> reports for {_q} were due {_due.strftime("%-d %B %Y")}. Of the {n(LV["expected_pairs"])} registrant&ndash;client pairs that reported for {qlabel(LV["previous_quarter"])} and had not ended their registration by that day, '
               f'<b>{n(LV["missing"])} ({LV["missing_pct"]}%) had nothing posted for {_q}</b> by the end of it: no quarterly report, no-activity report, termination or amendment. They come from {n(LV["registrants_with_missing"])} registrants (<a href="sm-020/exhibits/live_{LV["quarter"]}.json">live_{LV["quarter"]}.json</a>, read {_rs[11:16]}&ndash;{_rf[11:16]} UTC on {_rs[:10]}).'
               + (f' Rebuilt the same way from posted times for the previous deadline, {BT_DUE}, the count was {n(BT["missing"])} of {n(BT["expected_pairs"])} ({BT["missing_pct"]}%); by {_due.strftime("%-d %B %Y")}, {n(BT["filed_later"])} of them had filed and {n(BT["never_filed"])} had not (<a href="sm-020/exhibits/backtest_2026Q2.json">backtest_2026Q2.json</a>).' if BT else "") + '</li>')
body = f"""<h1>{title}</h1>
<p class="meta"><span>Markovian Protocol</span><span>Measured {fetched.isoformat()}{("; live read " + LV["read_started"][:10]) if LV else ""}</span><span>Status: <span style="color:var(--pend)">draft, not published</span></span><span>DOI: {DOI}</span></p>
<p class="plain">{desc} Who lobbies for whom is public from the day a lobbyist registers; until the quarterly report is up, what that quarter&rsquo;s lobbying covered is not: the issues, the agencies, the lobbyists and the money. The law sets a fine of up to $200,000 for a knowing violation.</p>

<div class="short"><b class="k">The short version</b><ul>
<li>2 U.S.C. 1604(a): each registrant files its quarterly report &ldquo;<b>No later than 20 days after the end of the quarterly period</b> &hellip; or on the first business day after such 20th day if the 20th day is not a business day&rdquo;. 2 U.S.C. 1606: a knowing failure to comply carries a civil fine of up to <b>$200,000</b>.<sup><a href="#r1">1</a></sup></li>
<li>The public database at lda.gov stamps every report with the time it was posted. Filing is electronic by law. On {SIG['read']} randomly chosen late reports the &ldquo;Digitally Signed&rdquo; time printed on the form matched that stamp <b>to the second</b> (<a href="sm-020/exhibits/signature_vs_posted_sample.json">signature_vs_posted_sample.json</a>).</li>
<li>Six deadlines, {dlabel(Q[qs[0]]['deadline'])} to {dlabel(Q[qs[-1]]['deadline'])}: <b>{n(A['late'])} of {n(A['total'])} reports late ({A['late_pct']}%)</b>, {n(A['over_30'])} more than a month late, the longest {n(A['max_days'])} days.</li>
<li>2025: {n(Y['late'])} of {n(Y['total'])} late ({Y['late_pct']}%); median {Y['median_days']:g} days; {n(Y['over_30'])} more than a month.</li>{live_li}
<li>Reports that say there was <b>no lobbying activity</b> are late more often: {S['by_type']['no_activity']['late_pct']}% of {n(S['by_type']['no_activity']['total'])}, against {S['by_type']['regular']['late_pct']}% of {n(S['by_type']['regular']['total'])} regular quarterly reports. Termination reports, filed when a registration ends: {S['by_type']['termination']['late_pct']}% of {n(S['by_type']['termination']['total'])}.</li>
<li>The day after the deadline is the busiest late day in {D1} of the six quarters. After the first week, late reports bunch up again: in the six days from 13 to 18 days out, <b>{n(TW['days_13_18'])}</b> of the {n(A['late'])} went up, against {n(TW['days_8_12'])} in the five days before, and in every quarter the busiest day after the first week falls {TW['peak_days'][0]} to {TW['peak_days'][-1]} days out, with {PRMIN} to {PRMAX} registrants filing on that one day. We do not know what prompts it; it is our first question to the Senate and the House.</li>
<li>{n(A['registered_after_due'])} of the {n(A['late'])} late reports ({pct(A['registered_after_due'], A['late'])}) belong to a registrant&ndash;client pair that registered only after the report was due; registration is due &ldquo;No later than 45 days after a lobbyist first makes a lobbying contact or is employed or retained to make a lobbying contact, whichever is earlier&rdquo;,<sup><a href="#r1">1</a></sup> so a report for that quarter can fall due before the registration does, and these may not be late at all. Without them: {n(A['late_excl_registered_after_due'])}.</li>
<li>{n(S['firms_with_late'])} registrants filed at least one late report. Of the 20 with the most, {len(ALL_LATE)} filed <b>every report late</b> across the six quarters, termination reports included: {'; '.join(f"{esc(nice(f['registrant']))}, {n(f['late'])} of {n(f['total'])} for {n(f['clients_late'])} clients" for f in ALL_LATE)}. {NOACT}</li>
</ul></div>
<p class="disc"><b>Disclosure:</b> Markovian Protocol holds no financial position in any organisation named here, was paid by no one for this work, and showed it to no one before publication. <a href="index.html#how">How we work</a>.</p>

<h2>Six deadlines, {n(A['total'])} reports</h2>
<div class="tw"><table><tr><th>Quarter</th><th>Due</th><th class="n">Reports</th><th class="n">Late</th><th class="n">Share</th><th class="n">Over 30 days</th><th class="n">Regular, late</th><th class="n">No activity, late</th><th class="n">Termination, late</th></tr>{rows}</table></div>
<p class="cap">Every LD-2 for the quarter: regular reports (Qn), reports of no activity (QnY), and termination reports (nT, nTY), which carry the same deadline; amendments are not counted. Late = posted on or after the day after the deadline, Eastern time. Deadlines from 2 U.S.C. 1604(a), matching the Senate and House filing calendars.<sup><a href="#r4">4</a></sup> Read from lda.gov on {S['fetched_at'][:10]}: regular and no-activity reports from {S['fetched_at'][11:16]} UTC, termination reports from {TREAD} UTC, the firm totals {FREAD} UTC.</p>

<p>The Center for Public Integrity counted late filing in 2005, under the old law, when reports were due every six months and the Senate&rsquo;s database recorded only the day a form was entered: of &ldquo;some 183,000&rdquo; forms filed with the Senate since 1998, &ldquo;36,000 of them (more than 19 percent) were late, 8,800 by more than three months.&rdquo; The same article says &ldquo;the Center counted all forms entered within 90 days of the deadline as &lsquo;on time&rsquo;&rdquo;, so its rule and ours differ and the two shares do not compare. The nearest figure we have: {n(B['over_90'])} of our {n(A['total'])} reports ({pct(B['over_90'], A['total'])}) went up more than 90 days after the deadline.<sup><a href="#r5">5</a></sup></p>

<h2>How late</h2>
<div class="tw"><table><tr><th>Days past the deadline</th><th class="n">Reports</th></tr>{buckets}</table></div>
<p>Only {S['midnight_edge']['posted_00_00_to_00_05']} late reports went up in the first five minutes after midnight, so the line between the deadline day and the next does not decide the count.</p>
<div class="tw"><table><tr><th>Quarter</th><th>Posted</th><th class="n">Days after deadline</th><th class="n">Late reports that day</th><th class="n">Registrants</th></tr>{busy}</table></div>
<p class="cap">The days on which the most late reports were posted.</p>

<h2>The firms</h2>
<div class="tw"><table><tr><th>Registrant</th><th class="n">Late reports</th><th class="n">Clients, late</th><th class="n">Quarters, late</th><th class="n">Median days late</th><th class="n">Longest</th></tr>{firms}</table></div>
<p class="cap">A lobbying firm files one report per client per quarter, so a firm that is late for a quarter is late many times. &ldquo;Of&rdquo; counts every report the registrant filed for the six quarters, all four types; the per-type counts are in the summary exhibit.</p>

<h2>How this ends</h2>
<p>The firms close it by filing on time; the table above names the ones with the most to file. The Secretary of the Senate and the Clerk of the House write to registrants who do not file and refer those who do not answer within 60 days to the U.S. Attorney for the District of Columbia, which enforces the Act.<sup><a href="#r2">2</a></sup> GAO counts 3,566 such referrals for failure to file quarterly reports in 2015&ndash;2024: about 36% closed as in compliance, meaning the report was eventually filed, about 63% still pending; and one civil settlement in 2024, a $65,000 penalty and an agreement to &ldquo;permanently retire from lobbying at the federal level&rdquo;.<sup><a href="#r3">3</a></sup> A report filed late is not a report never filed, and nothing public says whether lateness alone is ever referred. We re-read every deadline the day after.</p>

<h2>Our questions to the Secretary of the Senate and the Clerk of the House</h2>
<ol class="qs"><li>In every quarter we read, the busiest day for late reports after the first week came {TW['peak_days'][0]} to {TW['peak_days'][-1]} days after the deadline, with {PRMIN} to {PRMAX} registrants filing on that one day. Do your offices send a notice around then, and what does it say?</li>
<li>Is a report filed late, but within 60 days of your notice, ever referred to the U.S. Attorney, or only a report never filed?</li>
<li>Would you publish the number of reports filed after each deadline?</li></ol>
<h2>Their reply, scored</h2>
<div class="score">Not yet sent.</div>
<p class="cap">What we told whom, and when.</p>
<div class="tw"><table class="tl"><tr><td>15 Oct 2026</td><td>Measured. Nobody has seen the page.</td></tr>{("<tr><td>21 Oct 2026</td><td>Live read of the Jul&ndash;Sep 2026 deadline, " + LV["read_started"][11:16] + "&ndash;" + LV["read_finished"][11:16] + " UTC.</td></tr>") if LV else ""}</table></div>

<h2>What we can&rsquo;t be sure of</h2><ul>
<li>We take the posted time as the filing time; {SIG['read']} of {SIG['read']} sampled reports carried the same signed time. Filing must be electronic; the guidance names one exception, an accommodation under the Americans with Disabilities Act, and such a report could be posted later than it was filed.</li>
<li>Amendments are not counted, and a report replaced by an amendment keeps its original time.</li>
<li>Each late report is counted once, as filed. {n(DUP['groups_with_more_than_one_late_report'])} registrant&ndash;client&ndash;quarter groups have more than one late report, such as two copies posted seconds apart, or a regular report and a termination report for the same client and quarter: {n(DUP['extra_reports'])} reports in all, {pct(DUP['extra_reports'], A['late'])} of the late count.</li>
<li>The registration check covers registrations posted since 1 December 2024.</li>
<li>Third-quarter 2025 reports fell due on 20 October 2025, during the federal shutdown. The guidance says the Secretary and the Clerk &ldquo;do not have the authority under the LDA to grant extensions to registrants&rdquo;, and we found no notice moving the date.<sup><a href="#r2">2</a></sup></li></ul>

<h2>Run it yourself</h2>
<pre>python3 lda_census.py results_2026-10-15.json 2025Q1 2025Q2 2025Q3 2025Q4 2026Q1 2026Q2
python3 lda_registrations.py 2024-12-01 registrations_2026-10-15.json
python3 analyze.py results_2026-10-15.json registrations_2026-10-15.json summary_2026-10-15.json --firm-totals
python3 sig_check.py results_2026-10-15.json 40 20261015 signature_vs_posted_sample.json
# back-test of the live read on the previous quarter
python3 lda_pairs.py 2026Q1 Q,QY pairs_2026Q1.json --posted-before 2026-07-21; python3 lda_pairs.py 2026Q1 T,TY pairs_2026Q1_term.json --posted-before 2026-07-21
python3 lda_pairs.py 2026Q2 Q,QY pairs_2026Q2.json --posted-before 2026-10-21; python3 lda_pairs.py 2026Q2 T,TY pairs_2026Q2_term.json --posted-before 2026-10-21; python3 lda_pairs.py 2026Q2 A,AY pairs_2026Q2_amend.json --posted-before 2026-10-21
python3 backtest.py pairs_2026Q1.json 2026-07-21 backtest_2026Q2.json pairs_2026Q2.json pairs_2026Q2_term.json pairs_2026Q2_amend.json --terminated pairs_2026Q1_term.json
# the live read, after the July-September deadline (or recompute it from the exhibits with the second line alone)
python3 lda_pairs.py 2026Q3 Q,QY,T,TY,A,AY pairs_2026Q3.json --posted-before 2026-10-21
python3 live.py pairs_2026Q2.json pairs_2026Q3.json live_2026Q3.json --terminated pairs_2026Q2_term.json</pre>
<p>The exhibits are gzipped; <code>gunzip -k</code> them first. Standard library only; the API allows anonymous reads but rate-limits them, so a full run takes about an hour. Scripts and exhibits: <a href="sm-020/">sm-020/</a>.</p>

<h2>References</h2><ol class="refs">
<li id="r1">2 U.S.C. 1603, 1604 and 1606, saved copies <a href="sm-020/exhibits/usc-2-1603.html">usc-2-1603.html</a>, <a href="sm-020/exhibits/usc-2-1604.html">usc-2-1604.html</a>, <a href="sm-020/exhibits/usc-2-1606.html">usc-2-1606.html</a>.</li>
<li id="r2">Secretary of the Senate and Clerk of the House, <i>Lobbying Disclosure Act Guidance</i>, last revised 28 February 2025, saved copy <a href="sm-020/exhibits/ldaguidance.pdf">ldaguidance.pdf</a>.</li>
<li id="r3">GAO, <i>2024 Lobbying Disclosure</i>, GAO-25-107523, saved copy <a href="sm-020/exhibits/gao-25-107523.html">gao-25-107523.html</a>.</li>
<li id="r4">Secretary of the Senate, filing deadlines, saved copy <a href="sm-020/exhibits/senate_filing_deadlines.html">senate_filing_deadlines.html</a>; Clerk of the House, lobbying disclosure notices, saved copy <a href="sm-020/exhibits/house_lda_notices.html">house_lda_notices.html</a>.</li>
<li id="r5">M. Asif Ismail, <i>Breaking the law</i>, Center for Public Integrity, 4 April 2005 (archive kept by POGO). <a href="https://publicintegrity.org/politics/lobby-watch/breaking-the-law/">publicintegrity.org</a>, saved copy <a href="sm-020/exhibits/cpi_breaking_the_law_2005.html">cpi_breaking_the_law_2005.html</a>.</li>
</ol>
<h2>Cite as</h2>
<pre>@misc{{markovian-sm020,
  author = {{{{Markovian Protocol}}}},
  title  = {{Time from the 2 U.S.C. 1604(a) deadline to posting, every quarterly and termination
            lobbying report (LD-2) for January 2025 to June 2026}},
  number = {{SM-020}},
  year   = {{2026}},
  month  = oct,
  url    = {{https://markovianprotocol.com/measurements/sm-020.html}},
  doi    = {{{DOI}}}
}}</pre>
"""
open(OUT, "w").write(head + "</head>" + top.split("</head>", 1)[-1] + body + "</main>\n" + foot)
print("wrote", OUT, os.path.getsize(OUT))
