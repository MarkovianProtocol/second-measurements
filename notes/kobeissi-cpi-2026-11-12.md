# The Kobeissi Letter on October's CPI (12 Nov 2026): recompute, 12 Nov 2026

This supports the post's point: core inflation and "supercore" both picked up in October to their fastest three-month pace since spring 2024. The core figures hold to the hundredth. The supercore level does not reproduce from BLS's published pieces: we get 4.67%, not 5.45%.

Our path: BLS CPI-U seasonally adjusted indexes (all items less food and energy; services less energy services; shelter), read 12 November 2026, and BLS's December 2025 relative-importance weights. Three-month annualized rate = (index this month ÷ index three months earlier)^4 − 1. "Supercore" here is services less energy services with shelter taken out, the usual recipe: each month's change is the weighted change of services less energy services minus that of shelter, with BLS's weights carried forward by each index's price change since December.

| Claim in the post | Ours |
|---|---|
| Core CPI 3-month annualized rate +3.75% in October | 3.75% |
| "its highest reading since April 2024" | Holds: April 2024 was 4.31%; nothing since reached 3.75% (next highest 3.69%, Nov 2024) |
| "3rd consecutive monthly increase, up from +1.64% in July" | Holds: 1.64% (Jul) → 1.97% (Aug) → 3.41% (Sep) → 3.75% (Oct) |
| Supercore 3-month annualized +5.45% | 4.67% (monthly 0.42%, 0.34%, 0.39% for Aug–Oct) |
| Supercore "its highest since mid-2024" | Holds at our level too: highest since April 2024 (6.82%) |
| 76% of CPI components rising faster than 2% annualized, +17 points since July | Not checked |

- BLS's own release agrees with our inputs: services less energy services rose 0.3%, 0.4% and 0.3% in August, September and October, and shelter 0.3%, 0.4% and 0.3% (Table A). To reach 5.45% over three months, supercore would have to rise about 0.44% a month; the published pieces give about 0.38%.
- Bloomberg's headline feed also gave supercore at 5.5% on 10 November, "up from 4.6%" in September. We get 4.53% for September, so we agree on September and differ on October. There is no official supercore index, and recipes vary; we could not find one built from BLS's published indexes that gives 5.45%. If you can say which you use, we will run it and add it here.
- October 2025 is missing (no data collected during the shutdown), so no three-month rate exists for January 2026; none of the claims above needs it.

Not covered: the 76% breadth measure and its "+17 points since July" and "since early 2021" comparisons, which need every CPI component; the post's closing sentence, which is opinion.

Files: supercore.py (every number above), results.json, output.txt, data/ (the BLS pull of 12 Nov 2026, the relative-importance weights and the release's Table A as read), SHA256SUMS.
