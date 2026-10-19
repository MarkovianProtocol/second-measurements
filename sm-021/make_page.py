#!/usr/bin/env python3
"""Render SM-021 from summary.json. python3 make_page.py summary.json git_check.json census.jsonl OUT.html"""
import json, sys, os, html, math
S = json.load(open(sys.argv[1])); G = json.load(open(sys.argv[2])); CEN = sys.argv[3]; OUT = sys.argv[4]
HERE = os.path.dirname(os.path.abspath(__file__)); P = os.path.join(HERE, "page_parts")
esc = html.escape
n = lambda x: f"{x:,}" if isinstance(x, int) else str(x)
days = lambda h: f"{h / 24:.0f} days" if h >= 96 else f"{round(h)} hours"
Y, A, B, M = S["year"], S["jan_mar"], S["apr_on"], S["months"]
RB = S["robustness_with_db_labels"]; NEG = S["negative_wait_excluded"]; X = S["excluded"]
MN = {"01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October"}
SUP = {"npm", "pip", "maven", "nuget", "go", "rubygems", "composer", "rust", "erlang", "actions", "pub", "swift"}
counted = set()
for l in open(CEN):
    r = json.loads(l)
    if (r.get("repo_published_at") or "")[:4] == "2026" and set(r.get("repo_ecosystems") or []) & SUP: counted.add(r["ghsa"])
gd = [x["commit_minus_api_min"] for x in G["sample"] if x["commit_minus_api_min"] is not None]
gin = sum(1 for x in G["sample"] if x["ghsa"] in counted); earlier = sum(1 for x in G["sample"] if x["unreviewed_commits_before"])
notin = Y["not_in_database"]
_dep = os.path.expanduser("~/second-measurements/zenodo/sm-021/deposit.json")
DOI = json.load(open(_dep))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(_dep) else "pending"
title = (f"Dependabot doesn&rsquo;t alert on a security advisory until GitHub reviews it, which GitHub&rsquo;s documentation says &ldquo;can take up to 72 hours&rdquo;. Since April, "
         f"{n(B['reviewed_over_72h'])} of {n(B['reviewed'])} reviewed advisories took longer, and the median wait was {days(B['median_wait_h'])}")
desc = (f"When a project publishes a security advisory on GitHub, GitHub reviews it into the GitHub Advisory Database, and Dependabot does not alert on an advisory until it is reviewed. "
        f"GitHub&rsquo;s documentation says the review &ldquo;can take up to 72 hours&rdquo;. We read both timestamps for every CVE GitHub issued that NVD published from 1 January to 16 October 2026; "
        f"{n(S['rows_counted'])} have a 2026 advisory naming a package in an ecosystem the database supports. Of those reviewed, {A['reviewed_over_72h_pct']}% of January to March advisories took longer than 72 hours; from April on, {B['reviewed_over_72h_pct']}%.")
LATE = {"2026-08", "2026-09", "2026-10"}
rows = "".join(f"<tr><td>{MN[m[5:]]} {m[:4]}{' &dagger;' if m in LATE else ''}</td><td class='n'>{n(v['advisories'])}</td><td class='n'>{n(v['reviewed'])}</td><td class='n'>{n(v['reviewed_over_72h'])}</td>"
               f"<td class='n'>{v['reviewed_over_72h_pct']}%</td><td class='n'>{days(v['median_wait_h'])}</td><td class='n'>{days(v['median_wait_lower_bound_h'])}</td>"
               f"<td class='n'>{n(v['not_in_database'])}</td><td class='n'>{v['median_repo_to_nvd_d']:g}</td></tr>" for m, v in M.items())
eco = "".join(f"<tr><td>{esc(e)}</td><td class='n'>{n(v['reviewed'])}</td><td class='n'>{v['reviewed_over_72h_pct']}%</td><td class='n'>{days(v['median_wait_h'])}</td></tr>"
              for e, v in sorted(S["ecosystems"].items(), key=lambda kv: -kv[1]["reviewed"]) if v["reviewed"] >= 100)
L = S["longest_reviewed"]
LA = next(x for x in L if x["published"][:7] >= "2026-04")
exs = (f"{esc(L[0]['repo'])} ({esc(L[0]['ghsa'])}), {L[0]['wait_d']:.0f} days; {esc(L[1]['repo'])} ({esc(L[1]['ghsa'])}), {L[1]['wait_d']:.0f} days; "
       f"and two {esc(L[2]['repo'])} advisories published the same day, {esc(L[2]['ghsa'])} and {esc(L[3]['ghsa'])}, {L[2]['wait_d']:.0f} days each")
neg = f"{esc(NEG[0]['repo'])} ({esc(NEG[0]['ghsa'])})" if NEG else ""
style = open(os.path.join(P, "style.html")).read()
top = open(os.path.join(P, "top.html")).read().replace("SECOND MEASUREMENT SM-017", "SECOND MEASUREMENT SM-021")
foot = open(os.path.join(P, "foot.html")).read()
url = "https://markovianprotocol.com/measurements/sm-021.html"
head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="{url}">
<title>SM-021 {title} — Markovian Protocol</title>
<meta name="description" content="{esc(html.unescape(desc), quote=True)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Markovian Protocol">
<meta property="og:title" content="SM-021 {title}"><meta property="og:description" content="{esc(html.unescape(desc), quote=True)}">
<meta property="og:url" content="{url}"><meta property="og:image" content="https://markovianprotocol.com/measurements/cards/sm-021.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@MarkovProtocol">
{style}
"""
body = f"""<h1>{title}</h1>
<p class="meta"><span>Markovian Protocol</span><span>Measured {S['read_start'][:10]}</span><span>Status: <span style="color:var(--pend)">draft, not published</span></span><span>DOI: {DOI}</span></p>
<p class="plain">{desc}</p>

<div class="short"><b class="k">The short version</b><ul>
<li>GitHub&rsquo;s documentation on repository security advisories: &ldquo;GitHub will review each published security advisory, add it to the GitHub Advisory Database, and may use the security advisory to send Dependabot alerts to affected repositories. &hellip; <b>This process can take up to 72 hours</b>&rdquo; (read {S['read_start'][:10]}).<sup><a href="#r1">1</a></sup> And on the database: &ldquo;Dependabot doesn&rsquo;t create Dependabot alerts for unreviewed advisories&rdquo;.<sup><a href="#r3">3</a></sup></li>
<li>Two public timestamps per advisory: when the project published it (the repository advisory&rsquo;s <code>published_at</code>) and when GitHub reviewed it into the database (<code>github_reviewed_at</code>). We read both for every CVE GitHub issued that NVD published from 1 January to 16 October 2026: {n(S['census_rows'])} CVEs, of which {n(S['rows_counted'])} have a 2026 advisory naming a package in a supported ecosystem.</li>
<li><b>January to March: {n(A['reviewed_over_72h'])} of {n(A['reviewed'])} reviewed advisories took longer than 72 hours ({A['reviewed_over_72h_pct']}%)</b>, median {days(A['median_wait_h'])}.</li>
<li><b>April to 16 October: {n(B['reviewed_over_72h'])} of {n(B['reviewed'])} ({B['reviewed_over_72h_pct']}%)</b>, median {days(B['median_wait_h'])} among those reviewed. Another {n(B['not_in_database'])} from those months were not in the database when we read it, every one already older than 72 hours. Not all of them are waiting: from January to March, when reviews were fast, {n(A['not_in_database'])} of {n(A['advisories'])} advisories ({100 * A['not_in_database'] / A['advisories']:.1f}%) were never reviewed and are now at least {math.floor(A['not_in_database_min_age_d'])} days old, so many of the {n(B['not_in_database'])} are probably declined rather than queued. The longest wait for an April-onward advisory that was reviewed: {esc(LA['repo'])} ({esc(LA['ghsa'])}), {LA['wait_d']:.0f} days.</li>
<li>The longest reviewed waits of the year were for advisories published in February and March and reviewed in July and September: {exs}.</li>
<li>GitHub has said it is behind. Its blog, 29 June: &ldquo;Since mid-April, due to this surge, we have not consistently met our internal goals for publication. Processing times extended first to about a week, then to multiple weeks for a meaningful share.&rdquo;<sup><a href="#r2">2</a></sup> On 8 September a GitHub staff member wrote, of CVE publication requests, &ldquo;we&rsquo;re currently processing records in the order they&rsquo;re received, with a turnaround of approximately five weeks.&rdquo;<sup><a href="#r4">4</a></sup> That reply is about the CVE-request queue, for which the same documentation says &ldquo;GitHub usually reviews the request within 72 hours.&rdquo;<sup><a href="#r1">1</a></sup></li>
<li>A second path, the database&rsquo;s own git history: for {len(G['sample'])} randomly chosen reviewed 2026 advisories ({gin} of them in the counted set), the file first appears under <code>github-reviewed/</code> {min(gd):g} to {max(gd):g} minutes after the reviewed time the API gives (<a href="sm-021/exhibits/git_check_2026-10-17.json">git_check_2026-10-17.json</a>). This confirms the end of each wait; the start, <code>published_at</code>, rests on the repository advisory API alone.</li>
</ul></div>
<p class="disc"><b>Disclosure:</b> Markovian Protocol holds no financial position in GitHub or Microsoft, was paid by no one for this work, and showed it to no one before publication. <a href="index.html#how">How we work</a>.</p>

<h2>Month by month</h2>
<div class="tw"><table><tr><th>Advisory published</th><th class="n">In sample</th><th class="n">Reviewed</th><th class="n">Over 72 h</th><th class="n">Share</th><th class="n">Median wait, reviewed</th><th class="n">Median if all not in database are waiting</th><th class="n">Not in database</th><th class="n">Days to NVD (median)</th></tr>{rows}</table></div>
<p class="cap">Repository advisories behind CVEs issued by GitHub (NVD source identifier security-advisories@github.com) and published by NVD 1 January to 16 October 2026, whose advisory names a package in npm, pip, Maven, NuGet, Go, RubyGems, Composer, Rust, Erlang, Actions, Pub or Swift, the ecosystems the database supports.<sup><a href="#r3">3</a></sup> Wait = <code>github_reviewed_at</code> minus the repository advisory&rsquo;s <code>published_at</code>, compared to the second. The second median counts each advisory not in the database at its age when we read it. It is a floor only if every one of them is still waiting; some were probably declined (see the short version), and those pull it up. Read from {S['read_start'][11:16]} UTC on {S['read_start'][:10]}.</p>
<p><b>Why the recent months look better than they are (&dagger;).</b> The sample is chosen by the date NVD published the CVE, and GitHub usually reviews the advisory before its CVE appears on NVD: {n(Y['reviewed_before_nvd'])} of the {n(Y['reviewed'])} reviewed advisories. As the queue grew, the gap from a project&rsquo;s advisory to its CVE on NVD grew too, to a median of {M['2026-06']['median_repo_to_nvd_d']:g} days for June&rsquo;s advisories. So an advisory published in August, September or October that is still waiting mostly has no CVE on NVD yet and is not in our sample at all. That makes the counts for those months too low and their medians too short, so the falling medians after July cannot be read as a recovery.</p>

<h2>By ecosystem</h2>
<div class="tw"><table><tr><th>Ecosystem</th><th class="n">Reviewed in 2026</th><th class="n">Over 72 h</th><th class="n">Median wait</th></tr>{eco}</table></div>
<p class="cap">Every ecosystem with 100 or more reviewed advisories, by the ecosystems the project named in its own advisory; one naming packages in two ecosystems counts in both. {n(RB['added_rows'])} reviewed advisories whose project left the ecosystem blank or unsupported, but which GitHub reviewed into a supported one, are not counted. Adding them changes little: {RB['jan_mar']['reviewed_over_72h_pct']}% over 72 hours for January to March, {RB['apr_on']['reviewed_over_72h_pct']}% from April.</p>

<h2>Why the wait matters</h2>
<p>A project that publishes an advisory has already told the world about the flaw. The projects that depend on it hear from Dependabot, and Dependabot does not alert on an unreviewed advisory.<sup><a href="#r3">3</a></sup> GitHub&rsquo;s blog said so for the backlog: &ldquo;New advisories may take longer to trigger, with critical issues prioritized.&rdquo;<sup><a href="#r2">2</a></sup> Our numbers do not separate advisories by severity, so critical ones may move faster than the median. For the median advisory published since April that has been reviewed, the gap was {days(B['median_wait_h'])}.</p>
<p>A study of 2019 to 2025 found repository advisories were the database&rsquo;s fast path.<sup><a href="#r5">5</a></sup> Our January to March numbers agree; the change starts in April.</p>

<h2>How this ends</h2>
<p>GitHub can close it either way: by clearing the queue until reviews are back inside 72 hours, or by changing the documentation to say what to expect now. The blog promised, &ldquo;If things improve, we&rsquo;ll tell you,&rdquo; and the September staff reply, about CVE request turnaround, said &ldquo;Feedback around updating our turnaround time was passed along to our curation team.&rdquo;<sup><a href="#r4">4</a></sup> We recheck monthly and print the table here.</p>

<h2>Our questions to the GitHub Advisory Database team</h2>
<ol class="qs"><li>Will the documentation&rsquo;s &ldquo;up to 72 hours&rdquo; be updated to the current expectation, and is there a date by which reviews will be back inside it?</li>
<li>Would you publish the queue: advisories waiting and the median wait, weekly?</li>
<li>Of the {n(notin)} 2026 advisories in our sample that were not in the database on {S['read_start'][:10]}, how many were declined and how many are still waiting?</li></ol>
<h2>Their reply, scored</h2>
<div class="score">Not yet sent.</div>
<p class="cap">What we told whom, and when.</p>
<div class="tw"><table class="tl"><tr><td>17 Oct 2026</td><td>Measured. Nobody has seen the page.</td></tr></table></div>

<h2>What we can&rsquo;t be sure of</h2><ul>
<li>The sample is chosen by NVD publication date, which leaves out recent advisories still waiting (see the &dagger; note); the shares and medians for August to October are too low.</li>
<li>Advisories not in the database are left out of the shares because some may have been declined; from January to March, {100 * A['not_in_database'] / A['advisories']:.1f}% were never reviewed. Those still waiting would make the real shares and medians higher. The month table&rsquo;s second median counts all of them as waiting.</li>
<li>We take the repository advisory&rsquo;s <code>published_at</code> as the moment the advisory became public. For five CVEs NVD&rsquo;s date is 8 to 65 days earlier, probably because the advisory was republished; one of them, {neg}, is in the counted set with a negative wait and is left out.</li>
<li>Only CVEs GitHub issued are counted. Left out: {n(X.get('no GHSA reference in NVD', 0))} with no advisory link in NVD, {n(X.get('no repository published_at', 0))} whose repository advisory we could not read, {n(X.get('advisory published before 2026', 0))} with an advisory published before 2026, {n(X.get("no supported ecosystem in the project's labels", 0))} naming no supported ecosystem, and the one with a negative wait above.</li>
<li>Severity is not separated; GitHub says critical issues are prioritized.</li></ul>

<h2>Run it yourself</h2>
<pre>gunzip -k exhibits/census_2026-10-17.jsonl.gz
python3 analyze.py exhibits/census_2026-10-17.jsonl 2026-10-17T11:55:00Z summary_2026-10-17.json
python3 git_check.py exhibits/census_2026-10-17.jsonl 40 20261017 git_check_2026-10-17.json
python3 ghsa_census.py census_new.jsonl 2026-01-01 2026-10-16   # a fresh census, about four hours</pre>
<p>Needs Python 3 and the GitHub CLI logged in; NVD&rsquo;s API is anonymous and paced. The census makes about 24,000 GitHub API calls, roughly four hours at the standard rate limit. Scripts and exhibits: <a href="sm-021/">sm-021/</a>.</p>

<h2>References</h2><ol class="refs">
<li id="r1">GitHub Docs, <i>Repository security advisories</i>. <a href="https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories">docs.github.com</a>, saved copy <a href="sm-021/exhibits/github_docs_about_repository_security_advisories_2026-10-17.md">github_docs_about_repository_security_advisories_2026-10-17.md</a>.</li>
<li id="r2">GitHub Blog, <i>Inside the Advisory Database and what happens when vulnerability volume breaks records</i>, 29 June 2026, updated 1 July. <a href="https://github.blog/security/supply-chain-security/inside-the-advisory-database-and-what-happens-when-vulnerability-volume-breaks-records/">github.blog</a>, saved copy <a href="sm-021/exhibits/github_blog_2026-06-29_advisory_database_volume.html">github_blog_2026-06-29_advisory_database_volume.html</a>.</li>
<li id="r3">GitHub Docs, <i>GitHub Advisory database</i>. <a href="https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database">docs.github.com</a>, saved copy <a href="sm-021/exhibits/github_docs_about_the_github_advisory_database_2026-10-17.md">github_docs_about_the_github_advisory_database_2026-10-17.md</a>.</li>
<li id="r4">GitHub Community discussion 205706, <i>CVE not assigned for 24 days?</i>, staff reply of 8 September 2026. <a href="https://github.com/orgs/community/discussions/205706">github.com</a>, saved copy <a href="sm-021/exhibits/github_community_discussion_205706_2026-10-17.json">github_community_discussion_205706_2026-10-17.json</a>; the replier&rsquo;s GitHub profile (company &ldquo;GitHub&rdquo;), <a href="sm-021/exhibits/github_user_ghostinhershell_2026-10-18.json">github_user_ghostinhershell_2026-10-18.json</a>.</li>
<li id="r5">C. Segal, P. Segal, C. E. Banjar et al., <i>Characterizing and Modeling the GitHub Security Advisories Review Pipeline</i>, MSR 2026. <a href="https://arxiv.org/abs/2602.06009">arXiv:2602.06009</a>.</li>
<li id="r6">NVD CVE API 2.0, <code>sourceIdentifier=security-advisories@github.com</code>; GitHub REST API, repository security advisories and global advisories; <a href="https://github.com/github/advisory-database">github/advisory-database</a> commit history.</li></ol>
"""
if os.path.exists(OUT) and 'id="reply"' in open(OUT, encoding="utf-8").read() and "--force" not in sys.argv:
    sys.exit(f"{OUT} is the published page with GitHub's reply and publish-day edits made by hand; this render would drop them. Edit the page, or pass --force to a different OUT.")
open(OUT, "w").write(head + top + body + foot)
print("wrote", OUT, len(head + top + body + foot))
