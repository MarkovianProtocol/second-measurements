# Wolf Richter, "A Phenomenon: Initial Applications for Unemployment Benefits (4-Week Average) Drop to the Lowest since 1969" (Wolf Street, 5 Nov 2026): recompute, 7 Nov 2026

This supports the post, and the relative point is stronger than written. The four-week average of 194,750 and the week's 189,000 are the lowest since 1969 in the Labor Department's seasonally adjusted series. Measured against payroll jobs or the labor force, the four-week average is the lowest in the whole series back to 1967: 12.2 claims per 10,000 payroll jobs, against 25.5 at the 1969 low.

The sentences: "The four-week average of initial applications for unemployment insurance benefits fell to 194,700, the lowest since 1969." "For just the week through Saturday, initial applications for unemployment benefits fell to 189,000, same as in mid-July, and both were the lowest since 1969." "So these initial applications, historically low in absolute terms, are amazingly low in relative terms."

Our path: DOL weekly claims (seasonally adjusted, 1967–2026) and BLS payrolls, labor force and government employment, all read from FRED on 7 Nov 2026, after the 6 Nov jobs report.

| Claim in the post | Recount | |
|---|---|---|
| 4-week average 194,700, lowest since 1969 | 194,750 (week to 31 Oct). The 43 lower weeks are all in 1968–69; last one 6 Sep 1969 (193,750) | Holds |
| Week 189,000, same as mid-July, lowest since 1969 | 189,000; 18 Jul 2026 also 189,000. The 24 lower weeks are all in 1968–69; last one 6 Sep 1969 (182,000) | Holds |
| Amazingly low in relative terms | 4-week average per 10,000 payroll jobs: 12.2, never lower since 1967 (1969 low 25.5). Per 10,000 in the labor force: 11.4 (1969 low 22.3) | Holds, record |
| Continued claims 1.72 million, 4-week average 1.71 million | 1,718,000 and 1,709,500 (week to 24 Oct) | Holds |
| Continued claims lower only in some weeks of 2018–19 and after Covid | In raw counts, also lower in 1967–73: 1973 alone has 48 lower weeks. As a share of covered jobs (insured unemployment rate, 1.1%), lower only in 33 weeks of 2022 | Holds as a rate; counts also dip lower in 1970–73 |
| Federal government shed 328,000 workers since January 2025 | 3,010,000 (Jan 2025) to 2,677,000 (Oct 2026): −333,000 in the current vintage | Holds (5,000 gap = revisions) |
| State governments shed 53,000 since January 2025 | −54,000 to September; −46,000 to October after an 8,000 gain in the 6 Nov report | Holds to September |

- The continued-claims line is the only one with a gap. Raw continued claims were below today's 1.72 million in 1970, 1972 and 1973 as well as the periods named. Divided by covered employment, today's rate is beaten only by 2022, which makes the post's point stronger.
- The post rounds 194,750 down to 194,700.
- 1969 is the right year for the raw low. Claims per worker are now about half the 1969 rate, because payrolls have grown from about 70 million to 159 million.

Not covered: the post's explanation (immigration enforcement shrinking the labor force, severance delaying claims, H-1B ineligibility). Those are reasons; this recounts the numbers.

Files: analyze.py (all figures above), results.txt (its output), data/ (the FRED series as downloaded: fred_claims_weekly, fred_iursa_weekly, fred_payems_clf_monthly, fred_gov_jobs_monthly), SHA256SUMS.
