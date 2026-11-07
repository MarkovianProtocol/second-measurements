# John Burn-Murdoch on AI and US productivity, recomputed

Markovian Protocol, 7 November 2026. A data note on John Burn-Murdoch's thread of 1–2 November 2026 and the Financial Times article it links ("Is this the first clear evidence of AI's impact on the labour market?").

This supports two of the thread's three data points and doesn't support the third. The productivity uptick in AI-adopting sectors does start in 2020, and US tech output has stayed near trend while tech jobs fell. But the acceleration since 2022 is not mainly tech layoffs: tech job losses are about a seventh of it.

The claims:

1. "The US productivity uptick in AI-adopting sectors starts in 2020, not 2022."
2. "Output stayed on trend, and unlike other sectors/countries where employment flatlined, in US tech it fell and has kept falling in a straight line."
3. "US acceleration since 2022 is primarily a tech layoffs story."

Our path: the chart's three sectors (tech = information, finance and insurance, professional, scientific and technical services). Output is BEA real value added, quarterly, in chained 2017 dollars, the inflation-adjusted measure, read through FRED. Jobs are BLS payroll employment, seasonally adjusted, averaged to quarters. Output per worker is indexed to Q1 2012 and compared with its 2012–19 trend, as in the chart.

| Quarter | Output per worker (Q1 2012 = 100) | Above 2012–19 trend |
|---|---|---|
| Q1 2019 | 109.9 | +0.1% |
| Q4 2019 | 113.6 | +2.4% |
| Q4 2020 | 119.0 | +5.6% |
| Q4 2021 | 126.6 | +10.6% |
| Q4 2022 | 124.9 | +7.4% |
| Q2 2026 | 152.4 | +24.2% |

Claim 1 holds. The gap opens in 2020 and reaches 10.6% by the end of 2021. It then narrows to 7.4% during 2022 and widens to 24.2% by mid-2026, so about two-thirds of today's gap opened after Q4 2022.

Claim 2 holds. Information output was 2.9% above its 2012–19 trend in Q4 2022 and 7.4% above it in Q2 2026. Information jobs peaked at 3,115,000 in November 2022 and were 2,734,000 in October 2026, down 12.2%. Indexed to Q4 2022 they run 95.4, 93.1, 91.8 and 89.5 at Q4 2023, Q4 2024, Q4 2025 and Q2 2026: a steady fall.

Claim 3 doesn't hold for these three sectors. From Q4 2022 to Q2 2026, output per worker rose 14.5 log points more than its 2012–19 trend. A log point is roughly a percentage point. Here is where those points come from:

| Source | Log points above trend |
|---|---|
| Output growing faster than trend (finance most: its output is 12.9 points above its own trend; information 4.2; professional services −1.1) | +6.7 |
| Slower hiring, professional services | +3.9 |
| Slower hiring, information (tech) | +2.2 |
| Slower hiring, finance | +1.9 |
| Output per worker above trend | +14.5 |

The hiring rows are each sector's job shortfall against its own trend, weighted by its share of the three sectors' jobs in Q4 2022. They sum to 8.0 against 7.8 for the combined series; the difference comes from holding the weights at their Q4 2022 shares. Tech job losses give 2.2 of 14.5 points. Slower hiring across all three sectors gives about half. That fits the thread's broader explanation, that firms pulled back on hiring from 2022, better than a layoffs story.

What this doesn't cover:

- Other countries. The chart's UK, Canada, Australia and European panels were not recomputed.
- The chart's exact employment series. The chart's US line reads about 147 in the latest quarter; ours is 152.4. A different jobs measure (hours, or BEA full-time equivalents) would explain a gap of that size. That's unverified.
- Additivity. Chained-dollar values don't add up exactly across sectors, so the three-sector totals are a close approximation.
- Revisions. BEA and BLS revise these series, so later reads will differ slightly.
- Cause. This checks the pattern in the data, not what caused it.

Files: calc.py (prints every figure above), results.csv (every quarter, Q1 2012 to Q2 2026, all three sectors), data/ (the FRED and BLS files as read on 7 November 2026), SHA256SUMS. Run: python3 calc.py
