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
<p class="meta"><span>Updated {datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M")} UTC</span><span>SM-001 daily, SM-005, SM-007 and SM-008 weekly, SM-006 monthly</span></p>

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

body += '<p>Scripts: <a href="https://github.com/MarkovianProtocol/second-measurements/tree/main/rechecks">github.com/MarkovianProtocol/second-measurements/rechecks</a>.</p>\n'
sys.path.insert(0, R); import og_tags
open(os.path.join(SITE, "rechecks.html"), "w").write(og_tags.apply(head + body + foot, "rechecks"))
print("wrote", os.path.join(SITE, "rechecks.html"))
