# Who knew first: Have I Been Pwned or the company's own notice? 18 Nov 2026

This supports Troy Hunt's point. Of 22 breaches that appear both in Have I Been Pwned and in Washington's or Delaware's register of breach notices, HIBP had loaded the data before the company's first notice to either state in 10, by a median of 31.5 days. Among the eight HIBP loaded in 2026, it was first in five.

It follows our note of 16 November (Washington's median wait from a company learning of a breach to its notice: 36 days in 2020, 134 in 2025), which Hunt quoted: "breach disclosure is getting worse. Especially to impacted individuals who are often left in the dark for long periods of time whilst their data floats around between criminal elements." A reply under his post put the next question: people "learn their data is out from a journalist or a lookup site, not from the company that lost it."

Our path: HIBP's public breach list (haveibeenpwned.com/api/v3/breaches, 1,052 breaches, read 18 November 2026), the date each was added; Washington's and Delaware's breach registers as read on 16 November, the date of each company's notice. A pair counts when the names match and HIBP's breach date is within 180 days of the register's and not after the company's notice; every pair was checked by hand.

| Breach | HIBP added | Company's first state notice | Who was first |
|---|---|---|---|
| CafePress | 2019-08-05 | 2019-09-04 (WA) | HIBP, by 30 days |
| Dave | 2020-07-27 | 2020-08-20 (WA) | HIBP, by 24 days |
| TrueFire | 2020-08-02 | 2020-10-27 (WA) | HIBP, by 86 days |
| Epik | 2021-09-19 | 2021-09-22 (WA) | HIBP, by 3 days |
| Prosper | 2025-10-16 | 2025-12-09 (WA) | HIBP, by 54 days |
| Betterment | 2026-02-05 | 2026-03-27 (WA) | HIBP, by 50 days |
| Figure | 2026-02-18 | 2026-02-23 (WA) | HIBP, by 5 days |
| Carnival | 2026-04-24 | 2026-05-27 (WA, DE) | HIBP, by 33 days |
| Marcus & Millichap | 2026-05-03 | 2026-05-14 (WA) | HIBP, by 11 days |
| DentaQuest | 2026-06-03 | 2026-07-16 (WA) | HIBP, by 43 days |
| MyHeritage, StockX, Mathway, Zoosk (2020), LiveAuctioneers, Minted, Neiman Marcus, National Public Data, Allianz Life, University of Pennsylvania, ADT, Ameriprise | | | The company, by 2 to 250 days |

- The company's notice here is its notice to the state Attorney General; the registers don't record when the people affected were told. Delaware requires the Attorney General to be told "not later than the time when notice is provided to the resident", so residents there learned on that date or later. Washington sets the same 30-day limit for both notices without ordering them, so residents there may have been told earlier.
- Only 22 breaches appear in both places, so this is a small set: HIBP loads mainly large breaches whose data has surfaced, and both registers list only breaches affecting more than 500 of the state's residents.
- ADT is the closest call: it notified Delaware on 24 April 2026, three days before HIBP loaded the data, and Washington on 28 July.

A question the numbers raise: HIBP records when it loaded each breach. Would a "first notified by the company" date beside it, from state registers like these, be useful on the breach pages?

Files: match.py (the pairs), analyze.py (every number above), candidates.json, results.json, output.txt, data/ (the HIBP list and both registers as read), SHA256SUMS. Previous note: https://markovianprotocol.com/measurements/notes/troyhunt-disclosure-lag-2026-11-16.md
