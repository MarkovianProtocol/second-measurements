# Tom Alrich on the CVE surge (Energy Central, 2 Sep 2026): recompute, 18 Nov 2026

This supports the post, and the pace since is faster than he projected. August's 12,719 CVE records are more than twice any month before 2026, and September and October beat it. One thing the count doesn't show: more than half of August's records name no product a scanner can match, with no CPE from NVD or the CNA and no PURL.

Our path: NIST's National Vulnerability Database API 2.0, records counted by month of NVD publication, read 18 November 2026; every NVD record published in August 2026; and every CVE record in the CVE Program's cvelistV5 release of 18 November 2026, for the product identifiers each CNA supplied.

| Claim in the post | Ours |
|---|---|
| "over 12,000 new CVE records created in August" | 12,719 (12,255 without rejected IDs) |
| "once again an all-time record" | Holds. The highest month before 2026 was December 2025, with 5,643 |
| "three times the number reported in January" | 2.5 times (5,143 in January); 2.8 times without rejected IDs |
| "just about every month has set a new record this year" | Five of the first eight did (March, May, June, July, August); January was below December 2025, and February and April below the month before |
| "close to 150,000 vulnerabilities reported in the next 12 months" at August's level, and "it's certain the monthly totals will continue to grow" | They did: 15,074 in September and 17,481 in October. From 1 September to 17 November, 42,415, a pace of about 198,000 a year |

| 2026 | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov 1–17 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CVE records (NVD) | 5,143 | 4,808 | 6,304 | 5,885 | 6,985 | 8,001 | 9,919 | 12,719 | 15,074 | 17,481 | 9,860 |

What happened to August's records (12,255 not rejected):

| | Records | Share |
|---|---|---|
| Deferred by NVD | 5,319 | 43% |
| Received, awaiting or undergoing NVD analysis | 2,820 | 23% |
| Analyzed or modified by NVD | 4,116 | 34% |
| With an NVD CPE configuration | 4,149 | 34% |
| With a CVSS score from NVD itself | 830 | 7% |
| With a PURL from the CNA (cvelistV5, 12,068 published) | 961 | 8% |
| **No CPE from NVD or the CNA, and no PURL** (of 12,067 in both sources) | **6,474** | **54%** |

- Of those 6,474, 1,632 are Linux kernel records, which identify the code by its git repository instead. The other 4,842, 40% of the month, name the product only in free text.
- VulnCheck supplied 768 of August's 961 PURLs. GitHub's 1,362 August CVE records carry a vendor and product string but no PURL, package name or collection URL. In a random 60 of them, 26 have a GitHub advisory that names the package ecosystem and name (npm liquidjs, for one); the CVE record leaves it out. The PURL share rose to 11.6% in October.
- NVD shows 200 distinct submitting sources for August; the post's 172 counts CNAs, and some CNAs submit under more than one identifier, so the two aren't the same count.

A question the numbers raise: with NVD deferring most of the surge, is the realistic route to machine-readable product names the CNAs themselves, and could GitHub's CVE records carry the package ecosystem and name its own advisories already hold, as a PURL?

Not covered: the CNA count of 172 (we count submitting sources, above); the post's figures credited to Andrey Lukashenkov's LinkedIn post, which we did not read. Monthly CVE counts are also published at CVE.icu.

Files: analyze.py (every number above), output.txt, pull_month.py, extract_cvelist.py, github_sample.py and its output, data/ (NVD responses as read, the identifiers extracted from cvelistV5 with the release's hash), SHA256SUMS.
