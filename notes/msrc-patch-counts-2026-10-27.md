# Brian Krebs, "Microsoft Patches More Than 1,400 Security Flaws" (13 Oct 2026): recompute, 27 Oct 2026

This supports the post. Every count in it holds against Microsoft's own security update data and CISA's catalog. One addition: the 26 known-exploited Microsoft flaws to patch first are the ones with 2026 IDs, and CISA added 13 older Microsoft flaws to the same catalog this year.

Our path: Microsoft's monthly security update documents (MSRC CVRF API, api.msrc.microsoft.com/cvrf/v3.0, read 27 October), counting only CVEs whose assigning authority is Microsoft and that were in the release on Patch Tuesday. CISA's Known Exploited Vulnerabilities catalog, version 2026.10.27.

| Claim in the post | Ours |
|---|---|
| "more than 1,400" fixed in October | 1,415 Microsoft CVEs on 13 Oct (1,472 by 27 Oct) |
| September's "nearly 1,000" | 973 on 8 Sep (998 now) |
| "at least 78" critical | 84 rated Critical on at least one product |
| "crossed the 4,000 CVE mark" (Satnam Narang, Tenable) | 4,201 on Patch Tuesdays Jan–Oct; 4,434 counting later additions |
| 2020 record, 1,261 CVEs (Narang) | 1,255 CVE-2020 Microsoft CVEs in the 2020 documents |
| 26 Microsoft flaws added to KEV this year (Tyler Reguly, Fortra) | 26 with CVE-2026 IDs added 1 Jan–12 Oct; 39 counting older IDs |

| 2026 | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct |
|---|---|---|---|---|---|---|---|---|---|---|
| Microsoft CVEs on Patch Tuesday | 112 | 58 | 83 | 172 | 137 | 207 | 622 | 422 | 973 | 1,415 |
| All CVEs in the update guide now | 327 | 173 | 463 | 688 | 1,131 | 1,285 | 2,010 | 1,680 | 2,988 | 3,229 |

- The 13 older-ID Microsoft flaws CISA added this year: CVE-2008-0015, CVE-2008-4250, CVE-2009-0238, CVE-2009-0556, CVE-2009-1537, CVE-2010-0249, CVE-2010-0806, CVE-2012-1854, CVE-2019-1068, CVE-2023-21529 (Exchange), CVE-2023-36424, CVE-2024-43468 (Configuration Manager), CVE-2025-60710. CVE-2026-96951, from the post, was added on 13 Oct, making 40 for the year.
- October's update guide lists 3,229 CVEs; 1,757 come from other assigners (Linux 778, Chrome 689) and ship in Microsoft products. A headline of "3,000+" counts those.
- Microsoft keeps adding to a month after Patch Tuesday: 57 October CVEs came later.

Not covered: why the monthly count rose tenfold this year; the 2020 figure depends on which IDs are counted (ours: CVE-2020 IDs only).

Files: analyze.py, rows.csv (every CVE with assigner, severity, first published date), analyze_output_2026-10-27.txt, SHA256SUMS of the API documents as read.
