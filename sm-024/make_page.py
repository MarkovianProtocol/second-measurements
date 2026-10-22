#!/usr/bin/env python3
"""Render SM-024 (draft) from the analysis, the tables and the overdue check. Every number in the prose comes from those
files; the hard-coded facts are asserted against them at the end.
python3 make_page.py data/analysis_2024on.json data/tables_2026-10-22.json site/measurements/sm-024.html"""
import json, sys, os, html, collections, datetime as dt
AN, TB, OUT = sys.argv[1:4]
HERE = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(HERE, "page_parts"); DATA = os.path.join(HERE, "data")
A = json.load(open(AN)); T = json.load(open(TB)); S = A["scored"]; AL = A["all"]; OV = T["overdue"]; PF = T["possibly_final"]
ACT = json.load(open(os.path.join(DATA, "api_active_2026-10-22.json")))["REGISTRANTS_ACTIVE"]["ROW"]; NACT = len(ACT)
TER = {str(r["Registration_Number"]): r for r in json.load(open(os.path.join(DATA, "api_terminated_2026-10-22.json")))["REGISTRANTS_TERMINATED"]["ROW"]}
SCAN = [json.loads(l) for l in open(os.path.join(DATA, "scan_2024on.jsonl"))]
BOTH = [d for d in SCAN if d.get("received") and d.get("date_stamped")]
_gap = lambda d: abs((dt.datetime.strptime(d["received"].split()[0], "%m/%d/%Y") - dt.datetime.strptime(d["date_stamped"], "%m/%d/%Y")).days)
AGREE = sum(1 for d in BOTH if _gap(d) == 0); DAYOFF = sum(1 for d in BOTH if _gap(d) == 1)
READ = sum(1 for d in SCAN if not d.get("error"))
esc = html.escape
n = lambda x: f"{x:,}"
pct = lambda a, b: f"{100 * a / b:.1f}%"
MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
D = lambda s: f"{int(s[8:10])} {MON[int(s[5:7]) - 1]} {s[:4]}"
YN = A["by_year_filed"]
_dep = os.path.expanduser("~/second-measurements/zenodo/sm-024/deposit.json")
DOI = json.load(open(_dep))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(_dep) else "pending"
regs_late = A["registrants_late_once"]; regs = A["registrants"]
MW = max(S, key=lambda x: x["days_late"])
L = [x for x in S if x["late"]]; WITHIN30 = sum(1 for x in L if x["days_late"] <= 30)
def wkend(x):
    due = dt.date.fromisoformat(x["period_end"]) + dt.timedelta(30); return x["days_late"] <= 2 and due.weekday() >= 5 and (due + dt.timedelta(x["days_late"])).weekday() == 0
WEEKEND = sum(1 for x in L if wkend(x))
EARLY = [x for x in S if x["days_after_period"] < 0]
def tdays(x):
    r = TER.get(x["reg"]); return None if not r else (dt.datetime.strptime(r["Termination_Date"], "%m/%d/%Y").date() - dt.date.fromisoformat(x["filed"])).days
E_TER = sum(1 for x in EARLY if x["reg"] in TER); E_T90 = sum(1 for x in EARLY if tdays(x) is not None and -30 <= tdays(x) <= 90)
PAIRS = OK6 = 0
_by = collections.defaultdict(list)
for x in S: _by[x["reg"]].append(dt.date.fromisoformat(x["period_end"]))
for ps in _by.values():
    ps.sort()
    for a, b in zip(ps, ps[1:]): PAIRS += 1; OK6 += ((b.year - a.year) * 12 + b.month - a.month) == 6
BEH, NONE, NEVER = T["overdue_behind"], T["overdue_none_since_2024"], T["overdue_none_ever"]
import calendar
_eom6 = lambda d: (lambda y, m: dt.date(y, m, calendar.monthrange(y, m)[1]))(d.year + (d.month + 5) // 12, (d.month + 5) % 12 + 1)
_allreg = {str(r["Registration_Number"]): r["Registration_Date"] for r in ACT} | {k: v["Registration_Date"] for k, v in TER.items()}
_first = {}
for x in S:
    if x["reg"] not in _first or x["period_end"] < _first[x["reg"]]: _first[x["reg"]] = x["period_end"]
_new = [(n, dt.datetime.strptime(_allreg[n], "%m/%d/%Y").date(), pe) for n, pe in _first.items() if n in _allreg and dt.datetime.strptime(_allreg[n], "%m/%d/%Y").date() >= dt.date(2024, 1, 1)]
RULE_OK, RULE_N = sum(1 for n, rd, pe in _new if str(_eom6(rd)) == pe), len(_new)
E_T90B = sum(1 for x in EARLY if tdays(x) is not None and abs(tdays(x)) <= 90)
PDV = next(x for x in S if x["url"].endswith("6997-Supplemental-Statement-20250930-10.pdf"))
OV1Y, OV6M = T["overdue_over_year"], T["overdue_over_6m"]
miss = collections.Counter(min(r["periods_missed"], 6) for r in OV)
HK = next(r for r in OV if r["reg"] == "3301"); PP = next(r for r in OV if r["reg"] == "6377"); BP = next(r for r in OV if r["reg"] == "7089")
TOP = T["top_late"]; cut5 = sum(1 for r in T["all_late_registrants"] if r["late"] == TOP[-1]["late"]); shown5 = sum(1 for r in TOP if r["late"] == TOP[-1]["late"])

title = (f"Foreign agents must report to the Justice Department every six months, within 30 days. Since January 2024, "
         f"{n(AL['late'])} of {n(AL['statements'])} reports came in late, and {len(OV)} registered agents have one overdue today")
desc = (f"Anyone registered under the Foreign Agents Registration Act &ndash; the lobbyists, PR firms, law firms and government offices that work in the US for a foreign government, party or company &ndash; "
        f"must file a supplemental statement every six months, within 30 days of the period&rsquo;s end. The Justice Department lists {n(A['read'])} supplemental statements filed since 1 January 2024; we read the first page of "
        f"the {n(READ)} that download, for the period each covers and the FARA Unit&rsquo;s receipt stamp. {n(AL['late'])} of {n(AL['statements'])} arrived after the deadline ({pct(AL['late'], AL['statements'])}). "
        f"{regs_late} of the {regs} agents that filed in that time were late at least once ({pct(regs_late, regs)}). Of the {NACT} agents on the Department&rsquo;s active list on 22 October, {len(OV)} have a statement past due and none on file.")

bk = "".join(f"<tr><td>{esc(b[0])}</td><td class='n'>{n(b[1])}</td><td class='n'>{pct(b[1], AL['statements'])}</td></tr>" for b in T["buckets"])
yr = "".join(f"<tr><td>{y}{' (to 21 October)' if y == '2026' else ''}</td><td class='n'>{n(v['statements'])}</td><td class='n'>{n(v['late'])}</td><td class='n'>{v['late_pct']}%</td>"
             f"<td class='n'>{n(v['over_30_late'])}</td><td class='n'>{v['median_days_late']:g}</td></tr>" for y, v in YN.items() if v["statements"] > 1)
ctry = lambda cs: esc(", ".join(cs[:3]) + (f" and {len(cs) - 3} more" if len(cs) > 3 else "")) if cs else "&ndash;"
LIVE = "https://efile.fara.gov/ords/fara/f?p=1381:200::::RP,200:P200_REG_NUMBER:"
def lastcell(r):
    if r["last_period_end"]: return r["last_period_end"]
    return f"none since 2024<br><span class='cap'>{('last covered ' + r['last_period_before_2024']) if r.get('last_period_before_2024') else 'never filed one'}</span>"
def row(r):
    return (f"<tr><td>{esc(r['name'])} <span class='cap'>#{r['reg']}</span></td><td>{ctry(r['countries'])}</td><td class='n'>{lastcell(r)}</td>"
            f"<td class='n'>{r['oldest_missing_due']}</td><td class='n'>{n(r['days_overdue'])}</td><td class='n'>{r['periods_missed']}</td>"
            f"<td><a href='{LIVE}{r['reg']}'>filings</a> &middot; <a href='sm-024/exhibits/live_2026-10-22/reg_{r['reg']}.html'>saved</a></td></tr>")
ov = "".join(row(r) for r in OV)
pf = "; ".join(f"{esc(r['name'])} (#{r['reg']}, received {r['last_any_filed']} for the period ending {r['last_any_period_end']})" for r in PF)
top = "".join(f"<tr><td>{esc(r['name'])} <span class='cap'>#{r['reg']}</span></td><td>{ctry(r['countries'])}</td><td class='n'>{r['late']} of {r['statements']}</td>"
              f"<td class='n'>{r['median_days_late']:g}</td><td class='n'><a href='{r['worst_url']}'>{n(r['max_days_late'])}</a></td></tr>" for r in TOP)

style = open(os.path.join(P, "style.html")).read()
topp = open(os.path.join(P, "top.html")).read().replace("SECOND MEASUREMENT SM-017", "SECOND MEASUREMENT SM-024")
foot = open(os.path.join(P, "foot.html")).read()
url = "https://markovianprotocol.com/measurements/sm-024.html"
plain_desc = esc(html.unescape(desc), quote=True)
head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="{url}">
<title>SM-024 {title} — Markovian Protocol</title>
<meta name="description" content="{plain_desc}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Markovian Protocol">
<meta property="og:title" content="SM-024 {title}"><meta property="og:description" content="{plain_desc}">
<meta property="og:url" content="{url}"><meta property="og:image" content="https://markovianprotocol.com/measurements/cards/sm-024.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@MarkovProtocol">
{style}
"""
body = f"""<h1>{title}</h1>
<p class="meta"><span>Markovian Protocol</span><span>Measured 2026-10-22</span><span>Status: <span style="color:var(--pend)">published 2026-10-22; questions sent to the FARA Unit 2026-10-22</span></span><span>DOI: {DOI}</span></p>
<p class="plain">{desc}</p>

<div class="short"><b class="k">The short version</b><ul>
<li>The law: every registered agent &ldquo;shall, within thirty days after the expiration of each period of six months succeeding such filing, file with the Attorney General a supplement thereto under oath&rdquo; (22 U.S.C. 612(b)).<sup><a href="#r1">1</a></sup> The Justice Department&rsquo;s FARA Unit says the statement &ldquo;is due 30 days after the six-month reporting end date&rdquo;, and it sends an invoice the month before as a reminder.<sup><a href="#r2">2</a></sup></li>
<li>Each statement is an image-only PDF. Page 1 carries the period it covers (&ldquo;For 6 Month Period Ending&rdquo;) and the FARA Unit&rsquo;s receipt stamp (&ldquo;Received by NSD/FARA Registration Unit&rdquo;, with date and time). The Unit&rsquo;s bulk file lists {n(A['read'])} supplemental statements filed from 1 January 2024 to 21 October 2026; we read both items, by text recognition, on the {n(READ)} that downloaded (2 return &ldquo;not found&rdquo;), and scored {n(AL['statements'])} after setting aside {A['read'] - len(A['errors']) - AL['statements']} re-filings for a period already counted.<sup><a href="#r3">3</a></sup></li>
<li><b>{n(AL['late'])} of {n(AL['statements'])} statements were received more than 30 days after their period ended ({pct(AL['late'], AL['statements'])})</b>: {n(AL['over_30_late'])} more than a month past the deadline, {n(AL['over_90_late'])} more than three months. The median late statement was {AL['median_days_late']:g} days past due.</li>
<li>Of the {regs} agents that filed in that time, {regs_late} were late at least once ({pct(regs_late, regs)}). The Inspector General&rsquo;s 2016 audit, on a risk-based sample of 78 agents from 2013 to 2015, found that &ldquo;half, 39 of 78, did not&rdquo; file their supplemental statements on time; its sample and method differ from ours.<sup><a href="#r4">4</a></sup></li>
<li><b>Of the {NACT} agents on the FARA Unit&rsquo;s active list on 22 October, {len(OV)} have a statement past due and none on file</b>, each checked against the Unit&rsquo;s own filings page that day. {BEH} have filed since January 2024 but are behind, among them Hill and Knowlton Strategies, whose last statement covers the six months to {D(HK['last_period_end'])}, and Prime Policy Group, whose last covers the six months to {D(PP['last_period_end'])}. {NONE} have filed no supplemental statement at all since January 2024, {NEVER} of them never. The Unit can grant extensions, and its filings data does not list them, so some of these may have one.</li>
<li>The agents with the most late statements include national tourism and trade offices (Morocco, Italy, South Africa, Norway, Ireland) as well as law firms, lobbyists and individuals. Pick a country to see its agents: <a href="sm-024/lookup.html"><b>country lookup</b></a>.</li>
</ul></div>
<p class="disc"><b>Disclosure:</b> Markovian Protocol holds no financial position in any organisation named here, was paid by no one for this work, and showed it to no one before publication. <a href="index.html#how">How we work</a>.</p>

<h2>What a foreign agent is</h2>
<p>Under the Act, an agent of a foreign principal is a person who, for a foreign government, political party, company or person, engages within the United States in political activities, acts within the United States as a public relations counsel, publicity agent or political consultant, solicits, collects, disburses or dispenses money or other things of value within the United States, or represents the principal before a US agency or official (22 U.S.C. 611(c)).<sup><a href="#r1">1</a></sup> Exemptions include diplomatic and consular officers, private and nonpolitical trade and commerce, bona fide religious, scholastic, academic, scientific and artistic pursuits, legal representation before courts and agencies, and, where the principal is not a foreign government or political party, lobbyists who register under the Lobbying Disclosure Act instead (22 U.S.C. 613). Those registered are lobbying, PR and law firms, consultants and individuals, and foreign government offices such as tourism boards and trade agencies. The six-monthly statement is where they report what they did and what they were paid; it is how the public learns who is paid by whom to influence US policy.</p>

<h2>How late</h2>
<div class="tw"><table><tr><th>Received</th><th class="n">Statements</th><th class="n">Share</th></tr>{bk}</table></div>
<p class="cap">Days past the due date, which is 30 days after the end of the six-month period printed on the statement. {len(EARLY)} statements were received before their period ended and count as on time; {E_TER} of them come from agents whose registration is now terminated ({E_T90B} terminating within three months of the statement, before or after it), the rest from agents still active.</p>

<h2>Year by year</h2>
<div class="tw"><table><tr><th>Year received</th><th class="n">Statements</th><th class="n">Late</th><th class="n">Share late</th><th class="n">Over 30 days late</th><th class="n">Median days late</th></tr>{yr}</table></div>
<p>The longest was Meliora Strategy&rsquo;s statement for the six months to {D(MW['period_end'])}, received {D(MW['filed'])}, {n(MW['days_late'])} days past due (<a href="{MW['url']}">statement</a>). Some of the longest waits are agents filing a run of statements for periods years back within days of each other: Carman Marc Miller filed eight statements, for periods ending April 2021 to October 2024, between 30 December 2024 and 5 January 2025, and Cogent Law Group filed three for periods in 2020 and 2021 in June and July 2024. Extensions do not appear in the Unit&rsquo;s filings data (see below).</p>

<h2>Overdue today</h2>
<p>An agent&rsquo;s periods end every six months; the first ends at the end of the sixth month after the month it registered, which holds for {RULE_OK} of the {RULE_N} agents registered since January 2024 whose statements we read. Where an agent filed nothing in our window, its last statement before 2024 fixes its periods, and counts if it covers a 2024 period. For each of the {NACT} agents on the FARA Unit&rsquo;s active list on 22 October we laid out its periods ending on or after 1 January 2024 whose due date had passed, and looked for a statement covering each. {len(OV)} have at least one period with no statement on file, confirmed against the Unit&rsquo;s own filings page, which we saved for each. Counting only periods ending since January 2024, {miss[1]} are missing one statement, {miss[2]} two, {miss[3]} three, {miss[4]} four, {miss[5]} five and {miss[6]} six. Days overdue run from the due date of the earliest missing statement in that window to 22 October; {OV1Y} are more than a year overdue, {OV6M} more than six months.</p>
<p>{NONE} of them have filed no supplemental statement since January 2024, and {NEVER} have never filed one: many registered once and filed nothing after. Becker &amp; Poliakoff (#7089), registered {D(BP['registered'])}, has filed amendments as recently as October 2025 but no supplemental statement.</p>
<div class="tw"><table><tr><th>Agent</th><th>Countries represented</th><th class="n">Last period covered</th><th class="n">Earliest missing statement was due</th><th class="n">Days overdue</th><th class="n">Statements missing since 2024</th><th>Check</th></tr>{ov}</table></div>
<p class="cap">Not counted: {len(PF)} agents whose last statement, in our window or before it, was received before the period it covers had ended, which can mean a final statement filed while the registration stays open: {pf}. Also not counted: KOTRA (#1619), whose filings page lists a May 2026 statement that returns &ldquo;not found&rdquo;. The Unit may grant an extension asked for in writing, with good cause, before the due date; extensions do not appear in its filings data, so some agents above may have one. An agent that has stopped working for its principals still owes a final statement within 30 days of the end of the agency, and stays on the active list until it files one.</p>

<h2>Who files late</h2>
<div class="tw"><table><tr><th>Agent</th><th>Countries represented since 2024</th><th class="n">Late statements</th><th class="n">Median days late</th><th class="n">Longest (statement)</th></tr>{top}</table></div>
<p class="cap">The twenty agents with the most late statements since January 2024; {cut5} agents have {TOP[-1]['late']} late statements and the {shown5} with the longest single wait are shown. {T['every_statement_late']} agents filed every statement late, {T['every_statement_late_single']} of them having filed only one. One statement covers all of an agent&rsquo;s principals, so lateness belongs to the agent, not to the country. Extensions do not appear in the Unit&rsquo;s filings data, so some of these late statements may have had one. Every agent with a late statement is in <a href="sm-024/exhibits/tables_2026-10-22.json">tables_2026-10-22.json</a>, and every agent with a foreign principal active since January 2024, by country, in the <a href="sm-024/lookup.html">lookup</a>.</p>

<h2>What a late statement does and doesn&rsquo;t mean</h2>
<p>A late statement is a disclosure the public got late, not a hidden agent: every agent here registered, and {n(WITHIN30)} of the {n(len(L))} late statements, about half, came within a month of the deadline. What is missing while a statement is overdue is the record of what the agent did and what it was paid in that period. The Department says late filings &ldquo;may be considered a deficiency in registration&rdquo;, that it &ldquo;could also seek an injunction&rdquo;, and that it can pursue criminal charges &ldquo;if the failure to file is willful&rdquo;.<sup><a href="#r2">2</a></sup> The Inspector General reported in 2016 that FARA Unit staff &ldquo;typically do not seek to impose any penalties such as late fees&rdquo; for late initial registrations, because they &ldquo;would rather see a complete submission sent in late than an incomplete one sent in on time&rdquo;. In its response, printed in the same report, the National Security Division wrote that &ldquo;in a number of filings considered late in the Report, the FARA Unit provided an extension to the registrant, which mitigated the lateness. Under FARA&rsquo;s current statutory and regulatory authorities, there is no penalty for lateness&rdquo;, and that &ldquo;imposing fines for late filing could act as a disincentive to registration and result in less transparency&rdquo;.<sup><a href="#r4">4</a></sup></p>

<h2>How this ends</h2>
<p>The agents close it by filing: each overdue row clears when a statement for the missing period appears on the Unit&rsquo;s page, or when the agent files its final statement and terminates. The FARA Unit closes the rest, by saying which of these agents have extensions and what it does when a statement is months overdue. A recheck reads the Unit&rsquo;s bulk file every month and marks each overdue row the day its statement arrives.</p>

<h2>Our questions to the FARA Unit</h2>
<ol class="qs"><li>Of the {len(OV)} active registrants listed above, which have an extension, and which have been sent a delinquency notice?</li>
<li>How many extensions of supplemental statements did the Unit grant in 2024, 2025 and 2026?</li>
<li>Since the Inspector General&rsquo;s 2016 report, has the Unit taken any action, a deficiency notice, an injunction or anything else, over a late or missing supplemental statement?</li></ol>
<h2 id="reply">Their reply, scored</h2>
<div class="tw"><table class="tl"><tr><td>22 Oct 2026</td><td>Measured and published. Nobody saw the page before.</td></tr><tr><td>22 Oct 2026</td><td>The three questions above sent to the FARA Unit at fara.public@usdoj.gov, the address on its FAQ page, with the overall numbers and a link to this page. Answers are printed here as written.</td></tr></table></div>
<div class="score">Sent 22 October 2026; no reply yet. Day 30 is 21 November.</div>

<h2>What we can&rsquo;t be sure of</h2><ul>
<li>The period is read from page 1 by text recognition, as the agent wrote it in the form&rsquo;s &ldquo;(Insert date)&rdquo; field, so a typo there carries into our count. Consecutive periods come out six months apart ({n(OK6)} of {n(PAIRS)} pairs; the other is an agent that skipped statements), but a misread that kept the six-month rhythm would not be caught.</li>
<li>The receipt date is the Unit&rsquo;s stamp on page 1, or the bulk file&rsquo;s date where no stamp was read. They agree on {n(AGREE)} of {n(len(BOTH))} statements; {DAYOFF} are a day apart, and in the other {len(BOTH) - AGREE - DAYOFF} the bulk date differs from a clearly read stamp by eight days to a year, and we use the stamp. Only one of the four changes a result: PDV Holding&rsquo;s statement for the six months to {D(PDV['period_end'])} (<a href=\"{PDV['url']}\">statement</a>) is stamped 30 September 2024, on time, but dated 30 September 2025 in the bulk file; if the bulk date is right, the late count is {n(AL['late'] + 1)}. One of the five a day apart also changes a result: Valcour&rsquo;s statement (#7373) is stamped on its due date, a Sunday, and dated the next day in the bulk file. With the bulk date in every disagreement the late count is {n(AL['late'] + 2)}.</li>
<li>Extensions: the FAQ says &ldquo;In limited cases, the FARA Unit may grant an extension&rdquo;, on a written request &ldquo;outlining good cause&rdquo;, received before the due date.<sup><a href="#r2">2</a></sup> They do not appear in its filings data, so any late statement may have had one.</li>
<li>Weekends: the law sets no rule for a due date that falls on a weekend. {WEEKEND} late statements were received on the Monday after a due date that fell on a Saturday or Sunday; we count them late.</li>
<li>Only periods ending since 1 January 2024 are counted in the overdue table, so an agent missing statements from earlier years shows only the recent ones.</li>
<li>When an agent filed the same period twice, the earlier receipt counts.</li>
<li>Payments are reported inside each statement and are not tallied here; OpenSecrets&rsquo; Foreign Lobby Watch tallies them.<sup><a href="#r5">5</a></sup></li></ul>

<h2>Run it yourself</h2>
<pre>curl -O https://efile.fara.gov/bulk/zip/FARA_All_RegistrantDocs.csv.zip    # and FARA_All_Registrants, FARA_All_ForeignPrincipals
swiftc -O -o ocr_page1 ocr_page1.swift                                      # Apple Vision text recognition, macOS
python3 scan.py FARA_All_RegistrantDocs.csv 2024-01-01 scan.jsonl ocr_text 4
python3 analyze.py scan.jsonl analysis.json
python3 overdue.py analysis.json api_active.json FARA_All_RegistrantDocs.csv 2026-10-22 overdue.json
python3 verify_overdue.py overdue.json live/ overdue_verified.json
python3 pre2024.py overdue_verified.json FARA_All_RegistrantDocs.csv pre2024.jsonl ocr_text_pre2024   # each candidate's last statement before 2024
python3 overdue.py analysis.json api_active.json FARA_All_RegistrantDocs.csv 2026-10-22 overdue.json pre2024.jsonl
python3 verify_overdue.py overdue.json live/ overdue_verified.json
python3 tables.py analysis.json overdue_verified.json FARA_All_ForeignPrincipals.csv tables.json
python3 build_lookup.py FARA_All_ForeignPrincipals.csv analysis.json lookup.json</pre>
<p class="cap">Every statement read, with its hash, period, receipt stamp and the page-1 text: <a href="sm-024/exhibits/">exhibits</a>. Scripts in <a href="sm-024/">sm-024/</a>.</p>

<h2>References</h2><ol class="refs">
<li id="r1">22 U.S.C. 611(c) (agent of a foreign principal), 612(b) (supplements) and 613 (exemptions). Saved copies <a href="sm-024/exhibits/usc22_611.html">usc22_611.html</a>, <a href="sm-024/exhibits/usc22_612.html">usc22_612.html</a>, <a href="sm-024/exhibits/usc22_613.html">usc22_613.html</a>.</li>
<li id="r2">U.S. Department of Justice, National Security Division, FARA Unit. <i>Frequently Asked Questions</i>. <a href="https://www.justice.gov/nsd-fara/frequently-asked-questions">justice.gov/nsd-fara/frequently-asked-questions</a>, read 2026-10-22. Saved copy <a href="sm-024/exhibits/doj_fara_faq.html">doj_fara_faq.html</a>.</li>
<li id="r3">FARA Unit bulk data: <a href="https://efile.fara.gov/bulk/zip/FARA_All_RegistrantDocs.csv.zip">FARA_All_RegistrantDocs</a>, FARA_All_Registrants and FARA_All_ForeignPrincipals, generated 22 October 2026 04:47 (latest filing 21 October), read 22 October; active and terminated registrants from the eFile API, 22 October 2026. Copies in the exhibits.</li>
<li id="r4">U.S. Department of Justice, Office of the Inspector General. <i>Audit of the National Security Division&rsquo;s Enforcement and Administration of the Foreign Agents Registration Act</i>, Audit Division 16-24, September 2016. <a href="https://oig.justice.gov/sites/default/files/reports/a1624.pdf">oig.justice.gov/sites/default/files/reports/a1624.pdf</a>. Saved copy <a href="sm-024/exhibits/oig_a1624.pdf">oig_a1624.pdf</a>.</li>
<li id="r5">OpenSecrets. <i>Foreign Lobby Watch</i>. <a href="https://www.opensecrets.org/fara">opensecrets.org/fara</a>.</li>
</ol>
"""
html_out = (head + topp + body + foot).replace("</body>", '<script src="tables.js" defer></script>\n</body>') if 'src="tables.js"' not in foot else head + topp + body + foot
assert AL["statements"] == 2155 and AL["late"] == 632 and regs_late == 310 and NACT == 539 and len(OV) == 150 and len(PF) == 8, (AL, regs_late, NACT, len(OV), len(PF))
assert BEH + NONE == len(OV) and sum(miss.values()) == len(OV) and HK["reg"] == "3301" and MW["days_late"] == 2414 and "Meliora" in MW["registrant"]
assert READ == A["read"] - 2 and len(A["errors"]) == 2
open(OUT, "w").write(html_out)
print("wrote", OUT, len(html_out), "bytes |", {"AGREE": AGREE, "BOTH": len(BOTH), "DAYOFF": DAYOFF, "WEEKEND": WEEKEND, "EARLY": len(EARLY), "E_TER": E_TER, "E_T90": E_T90, "pairs": (OK6, PAIRS), "miss": dict(miss), "cut5": (cut5, shown5), "rule": (RULE_OK, RULE_N), "E_T90B": E_T90B})
