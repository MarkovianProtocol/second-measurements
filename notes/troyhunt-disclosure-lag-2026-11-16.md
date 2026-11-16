# Troy Hunt on breach disclosure lag (1 Jun 2026): recompute, 16 Nov 2026

This supports the post. Hunt wrote that the lag between an organisation learning of a breach and telling people "is Worse Than Ever", and that he had "no hard numbers" to cite. Washington State's register of breach notices has them: the median wait from the day an organisation became aware of a breach to its notice was 36 days in 2020 and 134 days in 2025, the longest of any year since the register began in 2015. Delaware's register, which starts its clock later, shows no such rise.

Our path: Washington Attorney General, "Data Breach Notifications Affecting Washington Residents" (data.wa.gov, 1,698 notices since July 2015), and Delaware DOJ, "Data Security Breach Database" (data.delaware.gov, 473 notices), both read 16 November 2026. Lag = notice date minus the date the organisation says it became aware (Washington) or discovered the breach (Delaware), grouped by the calendar year of the notice.

| Year of notice | Washington: notices | median days | within the 30-day limit | Delaware: notices | median days |
|---|---|---|---|---|---|
| 2016 | 39 | 34 | (45-day limit then) | | |
| 2018 | 62 | 43 | (45-day limit then) | | |
| 2020 | 198 | 36 | 41% (limit cut to 30 days on 1 March) | 43 | 31 |
| 2021 | 186 | 70.5 | 20% | 44 | 55 |
| 2022 | 171 | 83 | 13% | 56 | 43 |
| 2023 | 252 | 67 | 16% | 88 | 42 |
| 2024 | 228 | 109.5 | 7% | 60 | 42 |
| 2025 | 209 | **134** | 13% | 58 | 47.5 |
| 2026 to 16 Nov | 179 | 99 | 11% | 35 | 30 |

| Claim in the post | Ours |
|---|---|
| Carnival told people "43 days after learning about the incident" | 43 days in both registers: aware 14 April 2026, notice 27 May 2026 |
| The lag is "worse than ever" | Holds in Washington: 2025's median is the highest of any year since 2015, and 2026 so far (99 days) is above every year before 2024. Not in Delaware, where the median has stayed between 30 and 55 days since 2020 |
| "there are no hard numbers for me to cite" | Washington publishes both dates for every notice it receives, as open data, updated daily |

- The rise is not one kind of breach. In Washington, ransomware notices went from a median of 31 days (2015–2020) to 84 (2021–2023) to 166 (2024–2026); phishing from 60 to 110; unauthorised access from 42 to 85.
- The two states disagree because they start the clock at different moments. Washington asks when the organisation "became aware that a breach impacting Washington residents had occurred"; Delaware's law counts from the "determination" of a breach. For 120 breaches filed in both states since 2021, the same organisation gave the same start date to both in 58, and gave Delaware a date more than 30 days later in 36. On those same breaches the median lag is 67 days by Washington's dates and 42.5 by Delaware's. Months spent working out whose data was taken count in Washington and mostly don't in Delaware.
- Both registers record notice to the Attorney General, not to the people affected. Washington's law sets the same 30-day limit for both.
- Maine, whose register Hunt linked for Carnival, has taken its public breach database offline after "an apparent abuse" of its reporting system, so it isn't used here.

Not covered: the Zara notice (not in either register), the class-action and early-notice points, which are argument.

Files: analyze.py (every number above), output.txt, results.json, data/ (both registers as read, both statutes, Maine's notice, the Washington AG's 2025 and 2026 Data Breach Reports), SHA256SUMS.
