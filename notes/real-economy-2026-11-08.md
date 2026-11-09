# Matt Stoller, "Monopoly Round-Up: Goodbye AI Bubble, Hello Real Economy" (BIG, 19 Oct 2026): recompute, 8 Nov 2026

This supports the post, and its strongest number goes further than it says. American households now hold 48.2% of their financial assets in stocks, directly or through funds and retirement accounts. At the top of the dot-com bubble, in the first quarter of 2000, it was 38.7%. If AI stocks fall, households are more exposed than they were in 2000, by about ten points of their savings.

| Peak | Stocks as a share of household financial assets | Stocks held |
|---|---|---|
| Q4 1968 | 30.0% | $0.9 trillion |
| Q1 2000, dot-com top | 38.7% | $13.7 trillion |
| Q2 2007 | 33.5% | $17.7 trillion |
| Q4 2021 | 41.0% | $48.4 trillion |
| Q2 2026, latest | 48.2% | $74.0 trillion |

Five of the post's seven numbers hold in the official series, and the 48.2% is exact. Two need a fix: the 6.3% rise in wholesale prices is over twelve months, not one, and the all-time low for household stock exposure is 9.5% in 1982, not 10.7% in 1984.

The sentences: "the government released data showing wholesale prices went up by a red hot 6.3% last month." "inflation hit 3.7% in September 2026." "gasoline prices, which were up 9% in September." "mortgage rates are already at a crippling 7.5%." On equities as a share of household financial assets: "in 2026 that percentage is sitting at an all-time high of 48.2%. In 1945, that exposure was 22.5%. In 1984, it hit an all time low of 10.7%."

Our path: BLS producer and consumer price indexes, Freddie Mac's weekly mortgage survey, and the Fed's Financial Accounts (Z.1), all read from FRED on 8 Nov 2026.

| Claim in the post | Recount | |
|---|---|---|
| Wholesale prices up 6.3% last month | PPI final demand, September 2026: +6.35% over twelve months; +1.34% over the month | Holds as a 12-month figure |
| Inflation 3.7% in September | CPI-U, September over September: 3.72% (seasonally adjusted), 3.74% (not adjusted) | Holds |
| Gasoline up 9% in September | CPI gasoline, September over August: +9.09% (seasonally adjusted); over twelve months +34.2% | Holds |
| Mortgage rates at 7.5% | Freddie Mac 30-year: 7.40% on 8 and 15 Oct, the 2026 high; last at 7.5% in November 2023 | Close: 7.4% in the benchmark survey |
| Household stock exposure, all-time high 48.2% | Directly and indirectly held corporate equities ÷ total financial assets, households and nonprofits: 48.23% in Q2 2026. Previous high 45.42% in Q4 2025 | Holds, exact |
| 22.5% in 1945 | 22.51% (Q4 1945, the first quarter in the series) | Holds |
| All-time low 10.7% in 1984 | 10.73% is Q4 1984, but the low is 9.50% in Q2 1982; 1984 itself dipped to 10.55% in Q2 | Doesn't hold: low is 1982 |

- The 6.3% is the twelve-month change BLS published in mid-October. A one-month rise of 6.3% would be a different story; September's monthly rise was 1.3%, itself the largest since March 2022 (1.7%).
- Gasoline is stronger than the post says: up a third from a year earlier.
- The 48.2% uses equities held directly and through mutual funds, pensions and retirement accounts (Z.1 series LM153064475). Counting only directly held stock gives 34.0%.
- Daily mortgage indexes run above Freddie Mac's weekly survey and may have printed 7.5% in mid-October; we used the weekly survey because it's the benchmark.

Not covered: the CoreWeave, Nvidia and ex-AI index moves (market prices), and the Gallup 62% stock-ownership figure.

The peaks table takes the highest quarter in each of those years; the series starts in Q4 1945.

Files: analyze.py (all figures above), results.txt (its output), data/ (the FRED series as downloaded), SHA256SUMS.
