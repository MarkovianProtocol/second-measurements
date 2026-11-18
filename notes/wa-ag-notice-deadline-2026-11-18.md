# Washington's 30-day breach notice to the Attorney General: the AG's own register, 18 Nov 2026

This furthers our note of 16 November on Troy Hunt's point that breach disclosure is getting slower. Washington's law gives an organisation 30 days from discovering a breach to notify the Attorney General, and unlike the notice to residents, that deadline doesn't stretch for time spent working out the scope of the breach. In the Attorney General's own register, 87% of notices filed since 2021 came more than 30 days after the date the organisation said it became aware: 1,062 of 1,221.

What RCW 19.255.010 says, as in force since 1 March 2020:

- (7), notice to the Attorney General when a breach affects more than 500 residents: "no more than thirty days after the breach was discovered." Subsection (7)(b) says the notice "must be updated if any of the information ... is unknown at the time notice is due." Public agencies, which are in the same register, have the same wording in RCW 42.56.590(7).
- (8), notice to residents: "no more than thirty calendar days after the breach was discovered, unless the delay is at the request of law enforcement ... or the delay is due to any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system."
- (3), for both: "The notification required by this section may be delayed if ... a law enforcement agency determines that the notification will impede a criminal investigation."

The register (data.wa.gov, read 16 November 2026) has a field defined as "the number of days that elapsed before the notifying entity submitted notice to the Attorney General's Office." For all 1,675 notices that have it, it equals the notice date minus the date the organisation "became aware that a breach impacting Washington residents had occurred." Notices filed 2021 onward that affected more than 500 residents:

| Year of notice | Notices | Median days | More than 30 days | More than 90 days |
|---|---|---|---|---|
| 2021 | 186 | 70.5 | 149 (80%) | 78 |
| 2022 | 170 | 84 | 147 (86%) | 81 |
| 2023 | 251 | 67 | 212 (84%) | 93 |
| 2024 | 227 | 110 | 213 (94%) | 124 |
| 2025 | 209 | 134 | 182 (87%) | 128 |
| 2026 to 16 Nov | 178 | 99.5 | 159 (89%) | 100 |

- The register counts from when the organisation "became aware"; the statute says "discovered." If organisations read those differently, some notices counted here may have been on time.
- A law-enforcement hold under subsection (3) can delay either notice, and the register doesn't record holds, so some of these notices may have been lawful on that ground.
- Two notices affecting exactly 500 residents and two with no count are left out. 2020 and earlier are left out: 2020 straddles the 1 March change, and the rule before it is not among our files.

The Attorney General's 2026 Data Breach Report says Washingtonians "deserve to be notified promptly" and makes three recommendations to the Legislature; none concerns the deadline, and the report gives no figure for time to notify. Its live-statistics page embeds seven charts (breaches by cause, by industry, residents affected, data types, cyberattack types, and breach lifecycle by year and by industry), none of time to notify.

A question the numbers raise: the register already records time to notify for every notice. Would a chart of it, beside the lifecycle charts, help the Legislature see how the 30-day deadline is working?

Files: analyze.py (every number and quote above), output.txt, data/ (the register, the 2026 report, the live-statistics page and RCW 19.255.010 as read on 16 November; the register's field definitions and RCW 42.56.590 on 18 November), SHA256SUMS. Previous note: https://markovianprotocol.com/measurements/notes/troyhunt-disclosure-lag-2026-11-16.md
