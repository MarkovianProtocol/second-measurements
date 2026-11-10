# Brian Krebs, "Microsoft Fixes Nearly 1,100 Security Vulnerabilities" (10 Nov 2026): recompute, 10 Nov 2026

This supports the post. Every count in it holds against Microsoft's own security update data and CISA's catalog except one: of the 63 critical flaws, 48 are remote code execution, about three in four, not "nearly half."

Our path: Microsoft's monthly security update documents (MSRC CVRF API, api.msrc.microsoft.com/cvrf/v3.0, read 10 November about 22:00 UTC), counting only CVEs whose assigning authority is Microsoft and that were first published on Patch Tuesday. CISA's Known Exploited Vulnerabilities catalog, version 2026.11.10.

| Claim in the post | Ours |
|---|---|
| 1,093 vulnerabilities fixed | 1,093 Microsoft CVEs first published on 10 Nov |
| 63 "critical" | 63 |
| "Nearly half of those critical bugs are remote code execution" | 48 of 63 (76%); the other 15 are elevation of privilege |
| 535 allow elevation of privilege | 535 |
| "more than 5,100" this year | 5,293 on Patch Tuesdays, Jan–Nov |
| "a year ago … around 100 patches per month" | 2025 average 97.7 a month; November 2025 was 63 |
| "Last month, more than 1,400" | 1,415 on 13 Oct |
| One flaw exploited, CVE-2026-124194 | One, the same |
| CVE-2026-125350 is Chrome's sixth zero-day this year | Sixth Chromium entry CISA added to its catalog in 2026 (added 10 Nov) |
| 217 added to CISA's KEV list this year (Chris Goettl, Ivanti) | 295 added in 2026; 207 of them have 2026 IDs. The catalog passed 217 on 9 September |

| Microsoft CVEs on Patch Tuesday | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2025 | 159 | 63 | 58 | 124 | 78 | 67 | 130 | 111 | 86 | 175 | 63 |
| 2026 | 112 | 58 | 83 | 172 | 137 | 207 | 622 | 422 | 972 | 1,415 | 1,093 |

- Tenable's same-day count holds on every figure: 1,093 CVEs, 63 critical, 1,029 important, 1 moderate, 287 products, elevation of privilege 48.9%, remote code execution 27.1%.
- Microsoft also published two November CVEs before Patch Tuesday (CVE-2026-122518 on 4 Nov, moderate; CVE-2026-109469 on 5 Nov, critical). Counting them, the month is 1,095 with 64 critical.

Not covered: Goettl's "some 95,000" CVEs across all vendors (NVD's API refused our reads) and his 44% edge-device share; the Apple, Firefox and Adobe counts.

Files: analyze.py, nov_extra.py, tenable_check.py, the outputs, rows.csv (every CVE with assigner, severity, first published date), and SHA256SUMS of the API documents as read.
