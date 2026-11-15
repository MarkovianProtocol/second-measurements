# ZeroHedge on interest as a share of revenue (12 Nov 2026): recompute, 15 Nov 2026

This partly supports the post. The interest bill is as large as it says, and the share of revenue it takes is the highest in more than thirty years. The two numbers that made the headline do not hold: the share is 25.55%, not 28.2%, and it is below the early 1990s.

Our path: Treasury's Fiscal Data API (interest expense on the public debt, monthly; Monthly Treasury Statement table 4, receipts by source), read 15 November 2026, for November 2025 to October 2026; OMB's Historical Tables, fiscal 2027 budget (Table 3.2, line 901, interest on Treasury debt securities, gross; Table 1.1, total receipts), for every fiscal year since 1962.

| Claim in the post | Ours |
|---|---|
| "$1.4 trillion spent on gross interest in the past 12 months" | $1,371.5 billion, November 2025 to October 2026 |
| "as a percentage of government revenue, it was 28.2%" | 25.55% of total receipts ($5,367.8 billion). 28.2% would need receipts of about $4,863 billion; we found no standard total that size. Against on-budget receipts (without Social Security taxes) it is 34.09% |
| "also the highest on record" | Not since 1962: fiscal 1990 (25.65%), 1991 (27.05%) and 1992 (26.79%) were higher. It is the highest since 1992 |
| "more than 28 cents of every dollar collected in taxes" | About 25.6 cents of every dollar of receipts |

- The record October deficit ($404.1 billion) and October's gross interest ($115.5 billion) in the same post hold against Treasury's statement.
- The historical shares compare fiscal years with the latest twelve months; gross interest includes interest paid to federal trust funds.

Not covered: the post's projections for 2027 and its comments on gold, silver and the Federal Reserve.

Files: analyze.py (every number above), output.txt, data/ (the Treasury API responses as read, OMB Tables 3.2 and 1.1), SHA256SUMS.
