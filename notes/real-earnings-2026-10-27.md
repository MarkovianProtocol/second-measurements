# Saagar Enjeti, Breaking Points (20 Oct 2026): "sixth straight month" of negative real earnings: recompute, 27 Oct 2026

This supports the claim on the government's headline measure. Inflation-adjusted average hourly earnings were lower than a year earlier in each of the six months from April to September 2026. Three other official measures and the Atlanta Fed's wage tracker break the streak in June to August, so which measure is meant matters.

The claim: "We just entered our sixth straight month of real earnings turning negative." (Breaking Points, 20 October 2026.)

Our path: the Bureau of Labor Statistics' own real-earnings series (1982–84 dollars), read from the BLS public API on 27 October 2026, and the Atlanta Fed Wage Growth Tracker (3-month average, from FRED) minus CPI inflation. Changes are year over year, in percent.

| 2026 | Hourly, all employees | Hourly, production and nonsupervisory | Weekly, all employees | Weekly, production and nonsupervisory | Atlanta Fed tracker minus CPI |
|---|---|---|---|---|---|
| April | −0.27 | −0.20 | −0.20 | +0.09 | −0.18 |
| May | −0.80 | −0.80 | −0.51 | −0.18 | −0.67 |
| June | −0.09 | −0.10 | +0.21 | +0.56 | +0.14 |
| July | −0.09 | 0.00 | +0.20 | +0.25 | +0.50 |
| August | −0.26 | −0.10 | +0.35 | +0.15 | +0.75 |
| September | −0.71 | −0.60 | −0.09 | −0.28 | +0.18 |

- The first column is the series BLS leads with in its monthly Real Earnings release: six negative months in a row.
- Weekly earnings rose in June to August because people worked more hours, not because hourly pay outran prices.
- The Atlanta Fed tracker follows the same individuals over time; on it, the typical worker's raise beat inflation from June on.
- The Census Bureau's real median weekly earnings for full-time workers fell 1.6% in the third quarter of 2026, from $376 to $370 in 1982–84 dollars.
- Inflation jumped from 2.4% in February to 3.3% in March and 4.2% in May, which is when the streak starts.

Not covered: the cause. Whether the price rise came from the Iran war can't be read from these series.

Files: the BLS API response as downloaded, the FRED series, real.py, real_output_2026-10-27.txt, SHA256SUMS.
