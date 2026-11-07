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
| ai-productivity-2026-11-07.md (+ calc.py, results.csv, BEA/BLS data) | John Burn-Murdoch (FT), AI and US productivity thread, 1–2 Nov: 2020 start and flat tech output hold; tech job losses ≈ 1/7 of the post-2022 gap, slower hiring ≈ half | 13834 |

Live copies: https://markovianprotocol.com/measurements/notes/
