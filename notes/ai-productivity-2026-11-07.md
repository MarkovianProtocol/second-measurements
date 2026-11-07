# John Burn-Murdoch on AI and US productivity, recomputed

Markovian Protocol, 7 November 2026. A data note on John Burn-Murdoch's thread of 2 November 2026 (Bluesky; also posted on X) and the Financial Times article it links ("Is this the first clear evidence of AI's impact on the labour market?").

This supports all three of the thread's data points. The productivity uptick in AI-adopting sectors starts in 2020. US tech output has stayed near trend while tech jobs fell. And inside tech, the gain since 2022 comes mostly from fewer jobs: 14.5 of 18.8 points. Across all three sectors together, the tech jobs shortfall is a smaller part, about a seventh.

The claims:

1. "The US productivity uptick in AI-adopting sectors starts in 2020, not 2022."
2. "Output stayed on trend, and unlike other sectors/countries where employment flatlined, in US tech it fell and has kept falling in a straight line."
3. "More importantly, if we break productivity down into its components — output & employees — US acceleration since 2022 is primarily a tech layoffs story."

Our path: the three sectors of the FT's sector chart (tech = information, finance and insurance, professional, scientific and technical services). Output is BEA real value added, quarterly, in chained 2017 dollars, the inflation-adjusted measure, read through FRED. Jobs are BLS payroll employment, seasonally adjusted, averaged to quarters. Output per worker is indexed to Q1 2012 and compared with its 2012–19 trend, as in the chart.

| Quarter | Output per worker (Q1 2012 = 100) | Above 2012–19 trend |
|---|---|---|
| Q1 2019 | 109.9 | +0.1% |
| Q4 2019 | 113.6 | +2.4% |
| Q4 2020 | 119.0 | +5.6% |
| Q4 2021 | 126.6 | +10.6% |
| Q4 2022 | 124.9 | +7.4% |
| Q2 2026 | 152.4 | +24.2% |

Claim 1 holds. The gap opens in 2020 and reaches 10.6% by the end of 2021. It stands at 7.4% at the end of 2022 and widens to 24.2% by mid-2026, so about two-thirds of today's gap opened after Q4 2022.

Claim 2 holds. Information output was 2.9% above its 2012–19 trend in Q4 2022 and 7.4% above it in Q2 2026. Information jobs peaked at 3,115,000 in November 2022 and were 2,734,000 in October 2026, down 12.2%. Indexed to Q4 2022 they run 95.4, 93.1, 91.8 and 89.5 at Q4 2023, Q4 2024, Q4 2025 and Q2 2026: a steady fall.

Claim 3 holds for tech, the sector the claim and its chart are about. From Q4 2022 to Q2 2026, tech output per worker rose 18.8 log points more than its 2012–19 trend. A log point is roughly a percentage point. Of those, 14.5 come from jobs below trend and 4.2 from output above trend.

Across the three sectors together the split is different. Output per worker there rose 14.5 log points more than trend:

| Source | Log points above trend |
|---|---|
| Output growing faster than trend (finance most: its output gained 12.9 points on its own trend since Q4 2022; information 4.2; professional services −1.1) | +6.7 |
| Jobs below trend, professional services | +3.9 |
| Jobs below trend, information (tech) | +2.2 |
| Jobs below trend, finance | +1.9 |
| Output per worker above trend | +14.5 |

Each "jobs below trend" row is that sector's jobs against its own 2012–19 trend, weighted by its share of the three sectors' jobs in Q4 2022. In tech that is mostly an actual fall; in professional services, jobs grew, but more slowly than trend. The rows sum to 8.0 against 7.8 for the combined series; the difference comes from holding the weights at their Q4 2022 shares. The tech jobs shortfall gives 2.2 of 14.5 points, and jobs below trend across all three sectors give about half. That fits the thread's broader explanation: firms pulled back on hiring from 2022, and Big Tech went further with layoffs.

What this doesn't cover:

- Other countries. The chart's UK, Canada, Australia and European panels were not recomputed.
- The output-per-worker chart's exact definition. Its US line reads about 147 in the latest quarter; ours is 152.4. Hours don't explain the gap: with hours in place of jobs we get 149.3. What matches is counting professional and business services (NAICS 54–56) in place of 54 alone, with chained sector totals: 147.3. On that definition the verdicts are the same. Tech jobs below trend give 1.4 of 10.6 points, and jobs below trend across the three sectors give about seven-eighths. Run alt.py for every variant.
- Additivity. Chained-dollar values don't add up exactly across sectors, so the summed three-sector totals are a close approximation. Chaining them properly gives 151.3 instead of 152.4 and the same verdicts (alt.py).
- Hours for finance. BLS publishes no average-hours series for finance and insurance, so the hours variant uses financial activities hours for that sector.
- Revisions. BEA and BLS revise these series, so later reads will differ slightly.
- Cause. This checks the pattern in the data, not what caused it.

Files: calc.py (prints every figure in the tables), alt.py (the chained, hours, NAICS 54–56 and tech-only figures), results.csv (every quarter, Q1 2012 to Q2 2026, all three sectors), data/ and data/alt/ (the FRED and BLS files as read on 7 November 2026), SHA256SUMS. Run: python3 calc.py && python3 alt.py
