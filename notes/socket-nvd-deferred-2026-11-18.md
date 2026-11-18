# Socket's NVD measurement (glossary, updated 29 Oct 2026): recompute, 18 Nov 2026

This supports Socket's numbers: read live from NVD three weeks later, 37.1% of the year's CVEs are Deferred, as Socket found, and every known-exploited one is analyzed. What changed since is the queue Socket expected to "partly resolve": of 15,452 records waiting on 28 October, 13,115 still are. And most Deferred CVEs are invisible to Dependabot too: in a random 400, GitHub has a reviewed advisory naming a package, the kind Dependabot alerts on, for 32 (8%).

Our path: the NVD API 2.0, read live on 18 November 2026, for Socket's window (NVD publish date 1 January to 27 October 2026); Socket used the fkie-cad mirror on 28 October. CISA's KEV catalog as of 18 November. GitHub's global advisory API for a random sample of Deferred CVEs.

| Claim on Socket's page | Ours (18 Nov) |
|---|---|
| "Of the 90,192 CVEs the NVD published in 2026, 33,417 (37.1%) carry the status Deferred" | 90,189 records; 33,459 Deferred (37.1%) |
| Deferred share "between 25% and 34%" January to April, "between 38% and 42%" since | Same: 25.2–33.7%, then 37.8–41.8% |
| "Only 43.5% have the NVD product-matching data a scanner needs" | 46.1% now, as analysis continued |
| "NVD analysts wrote only 14,090" CVSS scores (15.6%) | 14,474 (16.0%) |
| "All 197 KEV-listed CVEs published in 2026 have the status Analyzed" | Holds: all 205 in the window on CISA's catalog today are Analyzed |
| GitHub's CNA: 12,262 records, 4,640 (37.8%) Deferred | 12,262; 4,659 (38.0%) |

Socket wrote that "CVEs in the queue for August through October will partly resolve." Three weeks on:

| Published | In queue, 28 Oct (Socket) | In queue, 18 Nov | Cleared |
|---|---|---|---|
| February–June | 1,216 | 1,212 | 4 |
| July | 699 | 498 | 201 |
| August | 2,866 | 2,820 | 46 |
| September | 4,453 | 4,324 | 129 |
| October 1–27 | 6,215 | 4,261 | 1,954 |
| **All** | **15,452** | **13,115** | **2,337 (15%)** |

By submitter, for the year (records not rejected): Patchstack's 4,939 WordPress-plugin CVEs are 99.8% Deferred, VulDB's 6,090 are 77%, VulnCheck's 9,003 are 62%, and Microsoft's 4,420 are 0%. The Linux kernel's 8,080 are rarely Deferred (1.6%) but 58% are still in the queue.

A Deferred CVE gets no NVD product match, so scanners that match on NVD's CPE data won't connect it to installed software. Socket notes that the GitHub Advisory Database imports unreviewed advisories from the NVD feed, and GitHub's documentation says "Dependabot doesn't create Dependabot alerts for unreviewed advisories" (our SM-021). So we asked GitHub's advisory API about a random 400 of the 33,459 Deferred CVEs:

| Deferred CVEs, random 400 | Count | Share |
|---|---|---|
| Only an unreviewed GitHub advisory (no Dependabot alert) | 339 | 84.8% |
| No GitHub advisory at all | 29 | 7.2% |
| A reviewed GitHub advisory naming a package (Dependabot can alert) | 32 | 8.0% |

- 146 of the 400 come from the WordPress-plugin CNAs (Patchstack, Wordfence, WPScan), and none of those has a reviewed advisory naming a package. For the other 254, Dependabot can alert on 32 (12.6%).
- This measures reach, not a failure: many Deferred CVEs are in products outside the package ecosystems Dependabot covers. But for about nine in ten Deferred CVEs, neither NVD's product match nor a Dependabot alert will tell a team it is affected.

Not covered: Socket's comparison of scanner coverage and its CVE-2025-59144 example, which we did not rerun.

Files: analyze.py and dependabot_sample.py (every number above), output.txt, dependabot_output.txt, pull_window.py and pull_all.sh, data/ (every NVD record as read, compressed; CISA's KEV catalog; the GitHub answers for the sample; Socket's page as read), SHA256SUMS.
