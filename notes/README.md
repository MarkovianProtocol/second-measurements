# Data notes

Not papers. When we recompute a public figure for a person or outlet we follow, we publish the result here as a plain data file, stamp its hash in the Markovian log, and send the person a short note. No DOI, no review gate.

| File | What | Log leaf |
|---|---|---|
| trust-stores-recheck-2026-10-27.md (+ folder: scan.py, fetchpkgs.sh; archives on HF/site, hashes in SHA256SUMS) | CA bundles in packages after eMudhra, rechecked six days on (Andrew Nesbitt recheck) | 12948 |
| real-earnings-2026-10-27.md (+ folder: real.py, BLS + FRED inputs) | Real earnings, April–September 2026, five measures (Saagar Enjeti recompute) | 12949 |
| affinity-partners-adv-2026-10-26.md (+ folder: parse_adv.py, the Form ADV) | Affinity Partners (Kushner) by its own SEC Form ADV: $6.16B, 99% foreign (James Li recompute) | 12878 |
| curl-cvss-2026-10-26.md (+ folder: compare.py, rows.csv, vuln.json) | curl's own CVE severities vs the CVSS CISA adds, 141 CVEs since 2021 (Daniel Stenberg recompute) | 12851 |
| pypi-malware-takedown-2026-10-26.md (+ folder: scripts, rows.csv, still_live.csv) | PyPI malware takedown times vs Seth Larson's "removed within hours", 27 Apr–19 Oct 2026 | 12834 |
| dod-unsupported-adjustments-2026-10-23.md (+ CSV, extract.py) | DoD unsupported accounting adjustments, FY2020–FY2025, from the auditor's reports | 12470 |
| scd-5-54-2026-10-23.md (+ chart) | Ethical Skeptic's "sudden cardiac death, ages 5–54" baseline vs CDC WONDER, 2010–2025 | 12450 |
| msrc-patch-counts-2026-10-27.md | Brian Krebs, Microsoft October 2026 Patch Tuesday counts vs MSRC CVRF and CISA KEV | 12952 |
| epstein-files-2026-10-28.md (+ DOJ pages, count_efta.py) | Whitney Webb, "First Friends": the Epstein Files "2%" (Channel 4, bytes) vs DOJ's own page counts and EFTA page numbers | 13033 |
| testosterone-nhanes-2026-10-28.md (+ analyze.py, fetch.sh) | Jay Bhattacharya, "under-diagnosed testosterone deficiencies" and the decline: NHANES 1999–2023 testosterone and prescriptions | 13073 |
| cve-volume-2026-10-30.md (+ gamblin_count.py, counts.json) | Jerry Gamblin, "Volume Vertical, Exploitation Rare": 2026 CVE counts recounted from his NVD mirror and the CVE List, KEV share | 13163 |
| emudhra-crls-2026-10-30.md (+ spki_census.py, revtimes.py, CRLs) | Ryan Hurst, "The Private Key Was Four": eMudhra weak keys, 16 certificates, CRL revocation times, the CRL 11 gap | 13201 |
| digid-availability-2026-10-30.md (+ Logius archive and calendar, TK answers) | Bert Hubert, "De IT-onmacht van de Nederlandse overheid": DigiD availability with and without maintenance windows; public outage list vs 99.57% | 13230 |
| npm-unresolved-deps-2026-10-31.md (+ recount.js, rows, package list) | Evert Pot, "A consistent(-ish) npm dependency graph": new npm versions published before a dependency existed, 26–30 Oct; 20.4% vs the post's 22% | 13291 |
| cve-volume-2026-11-04.md (+ counts, script) | Jerry Gamblin, monthlyCVEStats October 2026: 17,060 vs our 17,059 from NVD and the CVE List; YTD 89,859 vs 89,857/89,858; second recount | 13541 |
| ai-productivity-2026-11-07.md (+ calc.py, alt.py, results.csv, BEA/BLS data) | John Burn-Murdoch (FT), AI and US productivity thread, 2 Nov: all three hold; inside tech, jobs below trend give 14.5 of 18.8 points; across three sectors the tech shortfall is ≈ 1/7 | 13835 (v1 13834) |
| jobless-claims-2026-11-07.md (+ analyze.py, results.txt, FRED data) | Wolf Richter (Wolf Street), initial claims lowest since 1969, 5 Nov: holds; per payroll job a record since 1967 (12.2 per 10,000 vs 25.5 in 1969); continued-claims "only 2018–19 and post-Covid" misses 1970–73 in raw counts, holds as a rate | 13858 |
| real-economy-2026-11-08.md (+ analyze.py, results.txt, FRED data) | Matt Stoller (BIG), 19 Oct round-up: households hold 48.2% of financial assets in stocks vs 38.7% at the Q1 2000 dot-com top; 5 of 7 numbers hold; PPI 6.3% is 12-month, record low is 9.5% in 1982 | 13919 |
| october-jobs-2026-11-08.md (+ analyze.py, results.txt, FRED/ALFRED data) | E.J. Antoni (Heritage), Townhall 7 Nov, October jobs report: every figure holds (165k, 249k with revisions, household +1.44M since July vs payrolls +411k) | 13922 |
| debt-vs-deficit-2026-11-09.md (+ analyze.py, Treasury API data) | Peter Schiff, 3 Nov show: FY2026 debt +$2.53T vs deficit $1.99T, both hold; the $542B gap is $387B trust funds, $93B cash, $62B other | 13931 |
| musk-midterm-money-2026-11-09.md (+ fetch scripts, FEC API data) | Robert Reich / NYT / AP: Musk federal giving $445.7M through 14 Oct (AP matches); Reich's $168M Texas Senate holds via SLF→Texas PAC | 13932 |
| eight-bits-2026-11-09.md (+ analyze.py, 16 certificates) | Scott Helme, eMudhra eight-bit keys: all 8 keys and dates hold; trust ends Dec 2028 (Sectigo/AAA), not July 2039 | 13933 |

Live copies: https://markovianprotocol.com/measurements/notes/
