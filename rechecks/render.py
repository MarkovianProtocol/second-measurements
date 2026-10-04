# Build measurements/rechecks.html from history/*.jsonl. Head, nav and footer are copied from the measurements index.
import json, os, re, sys, html, datetime
R = os.path.dirname(os.path.abspath(__file__)); SITE = sys.argv[1]
idx = open(os.path.join(SITE, "index.html")).read()
head = idx[:idx.index('<main class="paper">')]
head = re.sub(r"<title>.*?</title>", "<title>Rechecks — Markovian Protocol</title>", head, flags=re.S)
head = re.sub(r'<link rel="canonical"[^>]*>', '<link rel="canonical" href="https://markovianprotocol.com/measurements/rechecks.html">', head)
head = re.sub(r'<meta name="description" content="[^"]*">', '<meta name="description" content="Each measurement rerun on a schedule, with every result kept.">', head)
foot = idx[idx.index("</main>"):]
H = lambda s: html.escape(str(s))
def load(n): 
    p = os.path.join(R, "history", f"{n}.jsonl")
    return [json.loads(l) for l in open(p)] if os.path.exists(p) else []
def table(cols, rows): 
    return ('<div class="tw"><table><tr>' + "".join(f'<th{" class=n" if n else ""}>{H(c)}</th>' for c, n in cols) + "</tr>"
            + "".join("<tr>" + "".join(f'<td{" class=n" if n else ""}>{v}</td>' for v, (c, n) in zip(r, cols)) + "</tr>" for r in rows) + "</table></div>")
fmt = lambda x: "—" if x is None else (f"{x:,}" if isinstance(x, int) else H(x))
s1 = load("sm-001"); s1d = {}
for r in s1: s1d[r["date"]] = {**s1d.get(r["date"], {}), **{k: v for k, v in r.items() if v is not None}}
s1 = [s1d[d] for d in sorted(s1d)]
s5 = load("sm-005"); s6 = load("sm-006")
lastmod = lambda s: datetime.datetime.strptime(s, "%a, %d %b %Y %H:%M:%S %Z").strftime("%Y-%m-%d") if s else "—"
body = f'''<main class="paper">
<p class="id">SECOND MEASUREMENTS</p>
<h1>Rechecks</h1>
<p class="plain">Each paper's check runs again on a schedule, and every result stays here. A claim that is still wrong months later reads differently from one that was fixed the week after we wrote.</p>
<p class="meta"><span>Updated {datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M")} UTC</span><span>SM-001, SM-009 and SM-011 daily, SM-005, SM-007 and SM-008 weekly, SM-006 monthly</span></p>

<h2>SM-001 · Google's Pixel software ledger</h2>
<p>Google says the log covers every factory image on its download page, from Pixel 6 on. <a href="sm-001.html">Paper</a>.</p>
{table([("Date",0),("Log size",1),("Logged",1),("Logged as generic",1),("Missing",1),("Log last updated",0)],
       [[H(r["date"]), fmt(r.get("tree_size")), fmt(r.get("logged")), fmt(r.get("logged_as_generic")), fmt(r.get("missing")), lastmod(r.get("log_last_modified"))] for r in s1[-12:]])}
<p class="cap">"Logged as generic" means filed under a label phones don't report, so a phone can't find its own entry. Missing is counted on full rechecks only.</p>

<h2>SM-005 · Meta's private-AI log</h2>
<p>Meta's whitepaper says the pulled-software list is published every 3 hours and server software is released weekly. <a href="sm-005.html">Paper</a>.</p>
{table([("Date",0),("List gap, median (30 days)",1),("Longest gap",1),("orchestrator.cvm last entry",0),("predictor.cvm last entry",0),("prod.pc.cvm last entry",0),("Whitepaper",0)],
       [[H(r["date"]), f'{r["revocation_median_gap_h_30d"]} h', f'{r["revocation_max_gap_h_30d"]} h', H(r["prod.pc.orchestrator.cvm"]["last"]),
         H(r["prod.pc.predictor.cvm"]["last"]), H(r["prod.pc.cvm"]["last"]), "unchanged" if i and r["whitepaper_sha256"] == s5[i-1]["whitepaper_sha256"] else "V2 (16 Mar 2026), says 3 hours" if i == 0 else "<b>changed</b>"] for i, r in enumerate(s5)])}

<h2>SM-006 · x402 payments on Base</h2>
<p>One 24-hour count of payments, and the share sent by the two wallet groups. <a href="sm-006.html">Paper</a>.</p>
{table([("Day ending",0),("Payments",1),("Payers",1),("Busiest payer",1),("Value",1),("Median",1),("Group A (15 wallets)",1),("Group B (5 wallets)",1),("Same wallets as August",1)],
       [[H(r["date"]), fmt(r["settlements"]), fmt(r["payers"]), f'{r["busiest_payer_share"]}%', f'${r["value_usd"]:,.0f}', f'${r["median_usd"]}',
         f'{r["group_a"]["share"]:.1f}%', f'{r["group_b"]["share"]:.1f}%', f'{r["same_wallets_as_august"][0]}/{r["group_a"]["wallets"]}, {r["same_wallets_as_august"][1]}/{r["group_b"]["wallets"]}'] for r in s6])}
<p class="cap">Group shares come from 400 random blocks per day. Counts include every EIP-3009 transfer, so they are upper bounds on x402.</p>
'''
s7 = load("sm-007")
body += f'''
<h2>SM-007 · Docker Official Images signatures</h2>
<p>Docker committed to signed SBOM and provenance attestations for all Official Images. Its old signing service shuts down on 8 December 2026. <a href="sm-007.html">Paper</a>.</p>
{table([("Date",0),("Linux images attested",1),("Repos checked for signatures",1),("Signed",1),("Days to 8 Dec shutdown",1)],
       [[H(r["date"]), f'{r["linux_attested"]:,} of {r["linux_images"]:,}', fmt(r["repos_checked_for_signatures"]), fmt(r["signed"]), fmt(r["days_to_notary_shutdown"])] for r in s7])}
<p class="cap">Weekly: a random 300 image entries for coverage, 10 repositories for signatures (attestation envelope and referrers). The first row is the full census.</p>
'''

s8 = load("sm-008")
body += f'''
<h2>SM-008 · CISA&rsquo;s answers on Linux kernel CVEs</h2>
<p>CISA&rsquo;s directive says it publishes three answers for every CVE. Kernel CVEs have had almost none since March. <a href="sm-008.html">Paper</a>.</p>
{table([("Date",0),("CVEs published in window",0),("Kernel CVEs published",1),("Kernel with CISA&rsquo;s answers",1),("Others with answers",1)],
       [[H(r["date"]), H(r["window"]), fmt(r["kernel_published"]), f'{r["kernel_with_answers"]} of {r["kernel_sampled"]}', f'{r["other_with_answers"]} of {r["other_sampled"]}'] for r in s8])}
<p class="cap">Weekly: 30 random kernel CVEs and 30 others from the week ending two days before the check. The first row is the paper&rsquo;s sample.</p>
'''

s9 = load("sm-009")
body += f'''
<h2>SM-009 · Firefox CRLite and the CAs&rsquo; revocation lists</h2>
<p>The 465 revoked certificates from the paper, asked of each day&rsquo;s Firefox filters. Mozilla says the missing ones appear in the next full filter. <a href="sm-009.html">Paper</a>.</p>
{table([("Date",0),("Snapshot in use",0),("Filters",1),("Unexpired",1),("Revoked",1),("Good",1),("Not covered",1),("Revoked within 24 h: slip through",1),("Android channel: good",1)],
       [[H(r["date"]), H((r.get("snapshot") or "—").replace("-default.filter","")), fmt(r["filters"]), fmt(r["unexpired"]), fmt(r["revoked"]), fmt(r["good"]), fmt(r["not_covered"]), f'{r["within24h_slip"]} of {r["within24h"]}', f'{r["compat_good"]} of {r["unexpired"]}'] for r in s9[-14:]])}
<p class="cap">Same certificates every day; the count falls as they expire. Snapshot is the full filter the deltas build on; the paper&rsquo;s was 20260902-0.</p>
'''

s11 = load("sm-011")
body += f'''
<h2>SM-011 · How far behind the logs Firefox&rsquo;s filter reads</h2>
<p>From each day&rsquo;s newest filter: the reader&rsquo;s lag on the largest logs, and how many of the top 1,000 sites&rsquo; live certificates the filter covers. <a href="sm-011.html">Paper</a>.</p>
{table([("Date",0),("Newest filter",0),("Xenon2026h2, days behind",1),("Wyvern2026h2",1),("Sphinx2026h2",1),("Argon2026h2",1),("Top-1,000 reachable",1),("Not covered",1),("mozilla.org",0)],
       [[H(r["date"]), H(r["newest_filter"]), fmt(r["lag_days_xenon2026h2"]), fmt(r["lag_days_wyvern2026h2"]), fmt(r["lag_days_sphinx2026h2"]), fmt(r["lag_days_argon2026h2"]), fmt(r["reachable"]), fmt(r["notcovered"]), H(r["mozilla_org"])] for r in s11[-14:]])}
<p class="cap">Lag is measured from the run time to the coverage cutoff the filter states for that log. Certificates are fetched fresh each day, so the covered count moves as sites rotate certificates.</p>
'''




s12 = load("sm-012")
if s12:
    body += f"""
<h2>SM-012 · CCADB audit statements past the 92-day deadline</h2>
<p>From each day&rsquo;s CCADB export: standard audit statements on trusted records dated past 92 days, and included roots whose newest audit is more than 15 months old, per program. <a href="sm-012.html">Paper</a>.</p>
{table([("Date",0),("Statements",1),("Past 92 days",1),("Mozilla stale / included",0),("Chrome",0),("Apple",0),("Microsoft",0)],
       [[H(r["date"]), fmt(r["statements"]), fmt(r["past_92_days"]), H(f"{r['stale_mozilla']} / {r['included_mozilla']}"), H(f"{r['stale_chrome']} / {r['included_chrome']}"), H(f"{r['stale_apple']} / {r['included_apple']}"), H(f"{r['stale_microsoft']} / {r['included_microsoft']}")] for r in s12[-14:]])}
<p class="cap">Statement date is a floor on upload date, so &ldquo;past 92 days&rdquo; is a floor on lateness. Daily.</p>
"""
s13 = load("sm-013")
if s13:
    body += f"""
<h2>SM-013 · Federal .gov domains with DNSSEC</h2>
<p>CISA&rsquo;s registry, every domain asked for its DS record and a validated answer. Paper in review before publication.</p>
{table([("Date",0),("Domains",1),("Signed",1),("Executive unsigned",1),("Judicial signed",1),("Fail validation",1),("SHA-1 only",1)],
       [[H(r["date"]), fmt(r["domains"]), fmt(r["signed"]), fmt(r["exec_unsigned"]), fmt(r["judicial_signed"]), fmt(r["bogus"]), fmt(r["sha1_only"])] for r in s13[-14:]])}
<p class="cap">Weekly. &ldquo;Fail validation&rdquo; counts domains a validating resolver refuses but answers with checking disabled.</p>
"""
s14 = load("sm-014")
if s14:
    body += f"""
<h2>SM-014 · Expired RPKI manifests</h2>
<p>Read straight from each repository&rsquo;s RRDP snapshot, no validator in between: manifests past nextUpdate, and how many lapsed in the last seven days. Paper in review before publication.</p>
{table([("Date",0),("registro.br manifests",1),("expired",1),("last 7 days",1),("RIPE hosted",1),("expired",1),("ARIN hosted",1),("expired",1)],
       [[H(r["date"]), fmt(r.get("registro_br_manifests")), fmt(r.get("registro_br_expired")), fmt(r.get("registro_br_expired_7d")), fmt(r.get("ripe_paas_manifests")), fmt(r.get("ripe_paas_expired")), fmt(r.get("arin_rps_manifests")), fmt(r.get("arin_rps_expired"))] for r in s14[-14:]])}
<p class="cap">Daily. The &ldquo;last 7 days&rdquo; column is the live problem; the rest of registro.br&rsquo;s and RIPE&rsquo;s expired manifests are years old and outside any chain.</p>
"""
s15 = load("sm-015")
if s15:
    body += f"""
<h2>SM-015 · The browsers&rsquo; CT log lists</h2>
<p>Apple&rsquo;s list: version, last modified, and &ldquo;usable&rdquo; logs whose window has closed. Chrome&rsquo;s: version, shards over a year, and the MMD it declares for RFC 6962 logs. <a href="sm-015.html">Paper</a>.</p>
{table([("Date",0),("Apple version",0),("Last modified",0),("Usable, window closed",1),("Chrome version",0),("Logs",1),("Over 366 d",1),("RFC 6962 MMD",0)],
       [[H(r["date"]), H(r["apple_version"]), H(r["apple_last_modified"]), fmt(r["apple_usable_closed"]), H(r["chrome_version"]), fmt(r["chrome_logs"]), fmt(r["chrome_over_366d"]), H(", ".join(str(x) for x in r["chrome_rfc6962_mmd"]))] for r in s15[-14:]])}
<p class="cap">Daily. The day Apple&rsquo;s Last-Modified changes, or Chrome&rsquo;s list says 14400, the paper&rsquo;s finding is closed and this table shows when.</p>
"""
s16 = load("sm-016")
if s16:
    body += f"""
<h2>SM-016 &middot; Toxics Release Inventory, the 1 July deadline</h2>
<p>Monthly: whether EPA has loaded any forms for the year whose deadline has passed, and for the newest loaded year, the forms and facilities postmarked after 1 July. <a href="sm-016.html">Paper</a>.</p>
{table([("Date",0),("Year pending",0),("Its forms loaded",1),("Newest year",0),("Forms",1),("Late",1),("Share",0),("Facilities late",1)],
       [[H(r["date"]), H(r["pending_year"]), fmt(r["pending_year_forms_loaded"]), H(r["newest_year"]), fmt(r.get("forms")), fmt(r.get("late_forms")), H(str(r.get("late_share_pct"))+"%"), fmt(r.get("facilities_late"))] for r in s16[-14:]])}
<p class="cap">The day the pending year&rsquo;s count leaves zero, its late forms start their clock here; the enforcement join reruns after each ECHO refresh.</p>
"""
body += '<p>Scripts: <a href="https://github.com/MarkovianProtocol/second-measurements/tree/main/rechecks">github.com/MarkovianProtocol/second-measurements/rechecks</a>.</p>\n'
sys.path.insert(0, R); import og_tags
open(os.path.join(SITE, "rechecks.html"), "w").write(og_tags.apply(head + body + foot, "rechecks"))
print("wrote", os.path.join(SITE, "rechecks.html"))
