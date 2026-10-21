#!/usr/bin/env python3
"""Render SM-023 from the summary. python3 -I make_page.py summary.json OUT.html"""
import json, sys, os, html
S = json.load(open(sys.argv[1])); OUT = sys.argv[2]
HERE = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(os.path.dirname(HERE), "ghsa", "page_parts")
esc = html.escape
d = lambda x: f"{x:g} days" if x is not None else "&mdash;"
HD, CV, Y = S["hand_rated"], S["cvss_rated"], S["y2026"]
CP, CK, CA = S["cvss_rated_from_publication"], S["cvss_rated_from_known"], S["cvss_rated_alt_release_ships"]
MONTHS = {"2026-06": "June", "2026-07": "July", "2026-08": "August", "2026-09": "September", "2026-10": "October"}
notfixed = len(S["no_fix_open_pro_days_since_raise"]); missed = CV["measured"] + notfixed
SP, SL, KM = S["fixed_kernel_still_open_pro"], S["fixed_kernel_still_open_legacy"], S["known_minus_published"]
NAMES = {"stonking": "26.10", "resolute": "26.04 LTS", "noble": "24.04 LTS", "jammy": "22.04 LTS", "focal": "20.04 LTS", "bionic": "18.04 LTS", "xenial": "16.04 LTS", "trusty": "14.04 LTS"}
rn = lambda c: f"{NAMES.get(c, c)} ({c})"
_dep = os.path.expanduser("~/second-measurements/zenodo/sm-023/deposit.json")
DOI = json.load(open(_dep))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(_dep) else "pending"
EX = "sm-023/exhibits/"
title = (f"Canonical says &ldquo;critical vulnerabilities are released within 24 hours&rdquo; in Ubuntu. Since June its security team has raised {CV['n']} kernel vulnerabilities "
         f"to critical from a CVSS score; of the {CV['measured']} fixed after being raised, none was fixed within a week, and the median wait was {CV['median_d']:g} days")
desc = (f"Ubuntu&rsquo;s security team sets each vulnerability&rsquo;s priority, and Canonical says critical ones are released within 24 hours, across every supported release. "
        f"We read all {S['total_critical']} vulnerabilities Ubuntu rated critical on {S['read_at'][:10]}, the commit in the team&rsquo;s public tracker that made each one critical, and the day its first fix reached users. "
        f"{CV['n']}, all Linux kernel, were recorded as medium and raised to critical from a CVSS score between June and October 2026. {CV['fixed_before_start']} were already fixed when raised, and one affects no Ubuntu release. None of the other {missed} was fixed within a day: {CV['measured']} were fixed a median {CV['median_d']:g} days later, none within a week, and {notfixed} were still waiting.")
hand_rows = "".join(
    f"<tr><td>{esc(h['cve'])}</td><td>{h['published']}</td><td>{esc(h['package'])}{(' and ' + str(h['n_packages'] - 1) + ' more') if h['n_packages'] > 1 else ''}</td>"
    f"<td>{esc(h['reason']) or '&mdash;'}</td><td class='n'>"
    + (("no release affected" if h["cve"] in S["no_fix_other"] else "not fixed") if h["known_to_fix_d"] is None else ("fixed before marked critical" if h["known_to_fix_d"] < 0 else f"{round(h['known_to_fix_d'], 1):g} days")) + "</td></tr>"
    for h in S["hand_rated_list"])
rel_rows = "".join(f"<tr><td>{rn(r)}</td><td class='n'>{v}</td></tr>" for r, v in SP["by_release"].items() if v)
since = S["since_2026_09_23"]
style = open(os.path.join(P, "style.html")).read()
top = open(os.path.join(P, "top.html")).read().replace("SECOND MEASUREMENT SM-017", "SECOND MEASUREMENT SM-023")
foot = open(os.path.join(P, "foot.html")).read()
url = "https://markovianprotocol.com/measurements/sm-023.html"
head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="{url}">
<title>SM-023 {title} — Markovian Protocol</title>
<meta name="description" content="{esc(html.unescape(desc), quote=True)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Markovian Protocol">
<meta property="og:title" content="SM-023 {title}"><meta property="og:description" content="{esc(html.unescape(desc), quote=True)}">
<meta property="og:url" content="{url}"><meta property="og:image" content="https://markovianprotocol.com/measurements/cards/sm-023.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@MarkovProtocol">
{style}
"""
body = f"""<h1>{title}</h1>
<p class="meta"><span>Markovian Protocol</span><span>Measured {S['read_at'][:10]}</span><span>Status: <span style="color:var(--pend)">draft, not published</span></span><span>DOI: {DOI}</span></p>
<p class="plain">{desc}</p>

<div class="short"><b class="k">The short version</b><ul>
<li>Canonical, in the Ubuntu Pro FAQ, answered by a Canonical staff member: &ldquo;critical vulnerabilities are released within 24 hours. Then, on average, high CVEs are patched within 30 days, and medium CVEs within 60 days since they are known to the Ubuntu Security Team. This criteria applies to every package affected by the vulnerability, across every Ubuntu release actively supported.&rdquo;<sup><a href="#r1">1</a></sup> The Ubuntu Pro general-availability post: &ldquo;critical CVEs patched in less than 24 hours on average.&rdquo;<sup><a href="#r2">2</a></sup></li>
<li>&ldquo;Critical&rdquo; is the Ubuntu Security Team&rsquo;s own priority, which Ubuntu says is &ldquo;distinct from other published severity levels such as CVSS base scores&rdquo;.<sup><a href="#r3">3</a></sup> We read all {S['total_critical']} vulnerabilities Ubuntu rates critical from its CVE API; from the team&rsquo;s public tracker, <code>ubuntu-cve-tracker</code>, the commit that first set each one&rsquo;s <code>Priority:</code> line to critical; and the first fix that reached users, the earlier of its first security notice (USN) and the day the fixed package was published to the archive.<sup><a href="#r6">6</a></sup></li>
<li><b>{CV['n']} kernel vulnerabilities were raised to critical from a CVSS score.</b> Every one was recorded as medium, and between {S['cvss_first_raise'][8:10].lstrip('0')} June and 18 October 2026 a tracker commit raised it to critical with the note &ldquo;Priority reason: See ubuntu cvss score&rdquo; and an Ubuntu CVSS v4 score of 9.1 to 9.4, in batches: {', '.join(f"{v} in {MONTHS.get(k, k)}" for k, v in S['cvss_raised_by_month'].items())}.</li>
<li>{CV['fixed_before_start']} of them were already fixed when they were raised, and one ({S['cvss_never_affected'][0]}) affects no Ubuntu release. Of the other {missed}, <b>none was fixed within 24 hours</b>: {CV['measured']} were fixed {d(CV['median_d'])} after being raised at the median, none within a week, the longest after {d(CV['max_d'])}; {notfixed} were still waiting when we read them, {min(S['no_fix_open_pro_days_since_raise']):g} to {max(S['no_fix_open_pro_days_since_raise']):g} days after being raised.</li>
<li>The {HD['n']} the team rated critical by its own judgement are mostly older. {HD['fixed_before_start']} were fixed before the tracker first marked them critical, most of them because they were first entered in the tracker, already critical, after the fix; of the {HD['measured']} that can be timed, {HD['within_1d']} were fixed within a day.</li>
<li>Across every release: of the {S['fixed_kernel']} critical kernel vulnerabilities with a fix somewhere, {SP['n']} still show the main <code>linux</code> package as needed or pending on a release in standard or Ubuntu Pro support (read {S['read_at'][:10]}).</li>
<li>On 23 September 2026 Canonical announced a move to a single two-week kernel update cycle and said its aim is &ldquo;to get environments into a defensible, safer state within 24 to 48 hours of public disclosure &ndash; well before a patch ships.&rdquo;<sup><a href="#r4">4</a></sup> The FAQ still says 24 hours for the patch.</li>
</ul></div>
<p class="disc"><b>Disclosure:</b> Markovian Protocol holds no financial position in Canonical, was paid by no one for this work, and showed it to no one before publication. <a href="index.html#how">How we work</a>.</p>

<h2>Critical by judgement and critical by CVSS</h2>
<div class="tw"><table><tr><th>How the priority was set</th><th class="n">Critical</th><th class="n">Fixed</th><th class="n">Fixed before rated critical</th><th class="n">Timed</th><th class="n">Within a day</th><th class="n">Within a week</th><th class="n">Median wait</th></tr>
<tr><td>By the team&rsquo;s judgement</td><td class="n">{HD['n']}</td><td class="n">{HD['fixed']}</td><td class="n">{HD['fixed_before_start']}</td><td class="n">{HD['measured']}</td><td class="n">{HD['within_1d']}</td><td class="n">{HD['within_7d']}</td><td class="n">{d(HD['median_d'])}</td></tr>
<tr><td>Raised from medium on a CVSS score</td><td class="n">{CV['n']}</td><td class="n">{CV['fixed']}</td><td class="n">{CV['fixed_before_start']}</td><td class="n">{CV['measured']}</td><td class="n">{CV['within_1d']}</td><td class="n">{CV['within_7d']}</td><td class="n">{d(CV['median_d'])}</td></tr></table></div>
<p class="cap">Wait = first fix reaching users minus the first commit that set the vulnerability&rsquo;s <code>Priority:</code> line to critical in <code>ubuntu-cve-tracker</code>. First fix = the earlier of the first USN and the first publication, in the Security, Updates or Release pocket and on or after that release&rsquo;s own release date, of the fixed version the tracker lists for any release: the main <code>linux</code> package for kernel vulnerabilities, the vulnerability&rsquo;s own package otherwise (Launchpad publishing history; versions kept in Ubuntu Pro&rsquo;s private archive cannot be dated and are left out). &ldquo;Fixed before rated critical&rdquo; = a negative wait, left out of the timed columns. Livepatch notices (LSNs) exist for {S['lsn_cves']} of these vulnerabilities; none came before the first fix, so counting them changes nothing. Read at {S['read_at'][11:16]} UTC on {S['read_at'][:10]}.</p>
<p>The team-rated ones, all {HD['n']}:</p>
<div class="tw"><table><tr><th>CVE</th><th>Published</th><th>Package</th><th>Priority reason</th><th class="n">Rated critical to fix</th></tr>{hand_rows}</table></div>

<h2>Other start times</h2>
<p>For the {CV['n']} raised on a CVSS score, other starts give longer waits, because they include the time each spent at medium, for which the FAQ&rsquo;s figure is 60 days:</p>
<div class="tw"><table><tr><th>Clock starts when</th><th class="n">Timed</th><th class="n">Within a day</th><th class="n">Median</th></tr>
<tr><td>the vulnerability was published</td><td class="n">{CP['measured']}</td><td class="n">{CP['within_1d']}</td><td class="n">{d(CP['median_d'])}</td></tr>
<tr><td>the team first recorded it (at medium)</td><td class="n">{CK['measured']}</td><td class="n">{CK['within_1d']}</td><td class="n">{d(CK['median_d'])}</td></tr>
<tr><td>the team raised it to critical (used above)</td><td class="n">{CV['measured']}</td><td class="n">{CV['within_1d']}</td><td class="n">{d(CV['median_d'])}</td></tr></table></div>
<p class="cap">Counting a new release that came out after a vulnerability was raised, already carrying the fix, as a fix on its release date changes nothing: {CA['timed']} timed, {CA['within_1d']} within a day, median {d(CA['median_d'])}. {S['cvss_never_affected'][0]} is left out of every count of waits, since no Ubuntu release carried it.</p>

<h2>Every supported release</h2>
<p>The FAQ applies the 24 hours &ldquo;across every Ubuntu release actively supported&rdquo;. On {S['read_at'][:10]}, {len(S['standard_releases'])} releases are in standard support and {len(S['pro_releases']) - len(S['standard_releases'])} more in Ubuntu Pro (ESM): {', '.join(rn(r) for r in S['pro_releases'])}. Of the {S['fixed_kernel']} critical kernel vulnerabilities with a fix somewhere, {SP['n']} still show the main <code>linux</code> package as needed or pending on at least one of them:</p>
<div class="tw"><table><tr><th>Release</th><th class="n">Critical kernel fixes still needed or pending</th></tr>{rel_rows}</table></div>
<p class="cap">Only the main <code>linux</code> source package is counted, not the dozens of kernel variants. &ldquo;Pending&rdquo; means a fix is prepared but not yet released. {', '.join(rn(r) for r in S['legacy_releases'])} are now covered only by the paid Legacy add-on, not Ubuntu Pro, and are left out above; on them {SL['n']} of the fixed critical kernel vulnerabilities are still open.<sup><a href="#r5">5</a></sup></p>
<p>Another {notfixed} critical kernel vulnerabilities had no fix released for the LTS releases that still need them on {S['read_at'][:10]}, {min(S['no_fix_open_pro_days_since_raise']):g} to {max(S['no_fix_open_pro_days_since_raise']):g} days after they were raised to critical. One of them, CVE-2023-53867, is already fixed in the kernels 24.04 and 26.04 LTS shipped with; it is still needed on 18.04, 20.04 and 22.04 LTS.</p>

<h2>What Canonical announced in September</h2>
<p>Canonical&rsquo;s post of 23 September 2026 outlined &ldquo;a transition from its current 4-week regular and 2-week security kernel Stable Release Update (SRU) cycles to a unified, rapid 2-week SRU cycle, published weekly&rdquo;, with no date given for the change, and said that while a patch is prepared &ldquo;Canonical aims to provide safe workarounds where applicable&rdquo;.<sup><a href="#r4">4</a></sup> It went on: &ldquo;Where no safe workaround exists, Canonical will say so clearly and point users toward general hardening steps instead.&rdquo; Since that post, two vulnerabilities now rated critical were published; both were recorded as medium and raised to critical on 18 October 2026, two days before our read. On {S['read_at'][:10]}, CVE-2026-93221 had a fix pending for 26.04 LTS and still needed for 20.04, 22.04 and 24.04 LTS; CVE-2026-98365 had fixes pending for 24.04 and 26.04 LTS and still needed for 18.04, 20.04 and 22.04 LTS. 26.10 already ships a kernel containing both fixes. Neither had a USN, the mitigation field on each CVE page was empty, and searching Canonical&rsquo;s blog, Ubuntu&rsquo;s security notices and Ubuntu&rsquo;s Discourse forum for each CVE found neither a workaround nor a statement that none exists (<a href="{EX}workaround_search_2026-10-20.json">workaround_search_2026-10-20.json</a>). On {S['read_at'][:10]}, Ubuntu&rsquo;s web pages for both, and for CVE-2026-89530, still showed &ldquo;Ubuntu priority Medium&rdquo; (last updated 8 October, 25 September and 6 October) while Ubuntu&rsquo;s CVE API and tracker said critical (saved pages: <a href="{EX}ubuntu_cve_page_CVE-2026-98365_2026-10-20.html">98365</a>, <a href="{EX}ubuntu_cve_page_CVE-2026-93221_2026-10-20.html">93221</a>, <a href="{EX}ubuntu_cve_page_CVE-2026-89530_2026-10-20.html">89530</a>).</p>

<h2>How this ends</h2>
<p>Canonical can close it three ways: ship CVSS-rated critical kernel fixes within 24 hours; stop rating kernel vulnerabilities critical from a CVSS score alone, so that &ldquo;critical&rdquo; means what the team judges critical; or change the FAQ to say what kernel users should expect. We recheck monthly and print the table here.</p>

<h2>Our questions to the Ubuntu Security Team</h2>
<ol class="qs"><li>Does the FAQ&rsquo;s &ldquo;critical vulnerabilities are released within 24 hours&rdquo; cover kernel vulnerabilities rated critical from the Ubuntu CVSS score? If not, will the FAQ or the label change?</li>
<li>Under the two-week kernel cycle announced on 23 September, what should users expect between a CVSS-rated critical kernel vulnerability and its released fix?</li>
<li>For the {SP['n']} critical kernel vulnerabilities fixed in some releases but still needed or pending in others under standard or Pro support, is there a date for the rest?</li></ol>
<h2 id="reply">Their reply, scored</h2>
<div class="score">Not yet sent.</div>
<p class="cap">What we told whom, and when.</p>
<div class="tw"><table class="tl"><tr><td>{S['read_at'][:10]}</td><td>Measured. Nobody has seen the page.</td></tr></table></div>

<h2>What we can&rsquo;t be sure of</h2><ul>
<li>The FAQ line was written on 29 March 2023 by a Canonical staff member answering a question on Ubuntu&rsquo;s forum; the general-availability post is from January 2023; and a 24-hour line was in Canonical&rsquo;s CVE-prioritisation post by March 2020. Canonical may treat the September 2026 post as its current statement for the kernel. All three earlier pages are still live.</li>
<li>The critical date is the first commit that set the vulnerability&rsquo;s <code>Priority:</code> line to critical in the public tracker; the CVSS v4 score is the one that commit added (&ldquo;ubuntu: CVSS:4.0 &hellip; [9.x CRITICAL]&rdquo;). The team may decide on a priority before pushing the commit, which would make the waits longer. On each commit&rsquo;s author date instead of its push date, {S['cvss_rated_author_date']['timed']} can be timed, {S['cvss_rated_author_date']['within_7d']} within a week, median {d(S['cvss_rated_author_date']['median_d'])}.</li>
<li>The fix date is the first fix on any release. The FAQ promises every supported release, so the wait until all of them are fixed is at least this long.</li>
<li>Fixes uploaded to a release while it was still in development are not counted, nor are fixes sitting in <code>-proposed</code>, which users get only if they opt in. 26.10 had some of these fixes during its development, before it was released on 15 October 2026.</li>
<li>Fixed versions published only to Ubuntu Pro&rsquo;s private archive have no public date; a vulnerability fixed there first and nowhere public would read later here than it was.</li>
<li>{len(S['no_fix_other'])} critical vulnerabilities ({', '.join(S['no_fix_other'])}) have no fix and no release that needs one; they are in the total but not counted as waiting.</li></ul>

<h2>Run it yourself</h2>
<pre>git clone --filter=blob:none --no-checkout https://git.launchpad.net/ubuntu-cve-tracker uct
python3 known_dates.py exhibits/rows_2026-10-20.json uct known.json
python3 crit_dates.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json uct crit.json
python3 fix_dates.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json exhibits/ubuntu_releases_2026-10-20.json fixes.json
python3 analyze.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json known.json crit.json exhibits/ubuntu_releases_2026-10-20.json uct fixes.json summary.json
# a fresh read of the live API instead of the saved one:
python3 census.py raw_new.json rows_new.json</pre>
<p>Needs Python 3 and git; Ubuntu&rsquo;s CVE API and Launchpad&rsquo;s are anonymous. The tracker clone takes a few minutes; <code>known_dates.py</code> about two, <code>crit_dates.py</code> about 35, since it fetches each file&rsquo;s history. Scripts and exhibits: <a href="sm-023/">sm-023/</a>.</p>

<h2>References</h2><ol class="refs">
<li id="r1">Ubuntu Discourse, <i>Ubuntu Pro FAQ</i>, reply 23 by Maria Emilia Torino (Canonical), written 29 March 2023. <a href="https://discourse.ubuntu.com/t/ubuntu-pro-faq/34042/23">discourse.ubuntu.com</a>, saved copies <a href="{EX}ubuntu_pro_faq_raw_2026-10-20.md">ubuntu_pro_faq_raw_2026-10-20.md</a>, <a href="{EX}discourse_ubuntu_pro_faq_post23_2026-10-20.json">discourse_ubuntu_pro_faq_post23_2026-10-20.json</a> and <a href="{EX}discourse_ubuntu_pro_faq_post23_revision2_2026-10-20.json">its edit history</a>.</li>
<li id="r2">Ubuntu blog, <i>Ubuntu Pro enters general availability</i>, 26 January 2023. <a href="https://ubuntu.com/blog/ubuntu-pro-enters-ga">ubuntu.com</a>, saved copy <a href="{EX}ubuntu-pro-enters-ga_2026-10-20.html">ubuntu-pro-enters-ga_2026-10-20.html</a>. Also Alex Murray, <i>Securing open source through CVE prioritisation</i>, 26 March 2020: &ldquo;the most vital updates are prepared, tested and released within 24 hours&rdquo;, saved copy <a href="{EX}securing-open-source-through-cve-prioritisation_2026-10-20.html">securing-open-source-through-cve-prioritisation_2026-10-20.html</a> and the Internet Archive copy of 28 March 2020, <a href="{EX}wayback_cve_prioritisation_20200328.html">wayback_cve_prioritisation_20200328.html</a>; the live page now carries a 20 July 2023 date.</li>
<li id="r3">Ubuntu, <i>About CVEs: priority levels</i>. <a href="https://ubuntu.com/security/cves/about">ubuntu.com</a>, saved copy <a href="{EX}security_cves_about_2026-10-20.html">security_cves_about_2026-10-20.html</a>.</li>
<li id="r4">Canonical blog, <i>Accelerating delivery of CVE fixes with a new Kernel release strategy</i>, 23 September 2026. <a href="https://canonical.com/blog/accelerating-delivery-of-cve-fixes-with-a-new-kernel-release-strategy">canonical.com</a>, saved copy <a href="{EX}canonical_blog_kernel_release_strategy_2026-10-20.html">canonical_blog_kernel_release_strategy_2026-10-20.html</a>.</li>
<li id="r5">Ubuntu, <i>Expanded Security Maintenance</i> (support schedule). <a href="https://ubuntu.com/security/esm">ubuntu.com</a>, saved copy <a href="{EX}security_esm_2026-10-20.html">security_esm_2026-10-20.html</a>.</li>
<li id="r6">Ubuntu CVE API, <code>ubuntu.com/security/cves.json?priority=critical</code> (saved: <a href="{EX}ubuntu_critical_cves_raw_2026-10-20.json">ubuntu_critical_cves_raw_2026-10-20.json</a>); <code>ubuntu.com/security/releases.json</code>; Launchpad publishing history (<code>api.launchpad.net</code>, saved as <a href="{EX}fixes_2026-10-20.json">fixes_2026-10-20.json</a>); <a href="https://git.launchpad.net/ubuntu-cve-tracker">ubuntu-cve-tracker</a> git history (priority changes saved as <a href="{EX}crit_2026-10-20.json">crit_2026-10-20.json</a>).</li></ol>
"""
open(OUT, "w").write(head + top + body + foot)
print("wrote", OUT, len(head + top + body + foot))
