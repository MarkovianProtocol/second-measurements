# Peter Schiff, debt versus deficit in fiscal 2026 (The Peter Schiff Show, 3 Nov 2026): recompute, 9 Nov 2026

This supports the claim: both numbers hold in Treasury's own data. Total federal debt rose $2.53 trillion in fiscal 2026 (1 October 2025 to 30 September 2026), and the official deficit was $1.99 trillion. The $542 billion between them breaks down like this: $387 billion is new debt the government owes its own trust funds, $93 billion went into Treasury's cash balance, and $62 billion is the net of everything else in Treasury's financing table, including $81 billion lent out through federal loan programs.

The sentence, from the episode "Debt Interest Is About to Pass Social Security… Here's What Breaks" (3 Nov 2026), as transcribed at 40:23: "For the most recent fiscal year, the national debt rose by 2.5 trillion. Now, the official budget deficit was only 2 trillion…" The quote is from a machine transcript, not checked against the audio.

Our path: Treasury's Fiscal Data API. Debt to the Penny for total debt on 30 September 2025 and 2026, the Monthly Treasury Statement (Tables 1 and 6) for the fiscal-year deficit and how it was financed, and the Daily Treasury Statement for Treasury's cash balance on the same two days.

| | 30 Sep 2025 | 30 Sep 2026 | Change |
|---|---|---|---|
| Total public debt | $37,637.6 bn | $40,171.8 bn | +$2,534.3 bn |
| Held by the public | $30,277.8 bn | $32,425.0 bn | +$2,147.2 bn |
| Held by government accounts (trust funds) | $7,359.8 bn | $7,746.8 bn | +$387.0 bn |
| Treasury cash balance (TGA, closing) | $890.8 bn | $984.0 bn | +$93.2 bn |
| Deficit, fiscal 2026 (MTS) | | | $1,992.5 bn |

| Why debt rose more than the deficit | |
|---|---|
| Debt rise minus deficit | $541.8 bn |
| New trust-fund holdings | $387.0 bn |
| Bigger cash balance | $93.2 bn |
| Everything else, net (includes $81.4 bn of direct federal loans) | $61.6 bn |

- Worth having ready before someone uses it against the point: most of the gap, 71%, is the government lending to itself. Social Security and other trust funds bought $387 billion of Treasuries with their surpluses. That counts toward the $40.2 trillion total but not toward the deficit, and it isn't borrowing from markets. Borrowing from the public rose $2.15 trillion, which is $155 billion more than the deficit, and $93 billion of that went into Treasury's cash balance.
- The other $62 billion is a net of several items in the Monthly Treasury Statement's financing table (Table 6). The largest is $81.4 billion of direct loans (student and other federal loans), which are financed by borrowing but scored in the budget only for their expected cost; accounting items such as securities sold at a discount pull the other way.
- Both figures are as Treasury reports them now; fiscal 2026 totals can move slightly when the year-end Financial Report is published.

Not covered: the rest of the episode (interest passing Social Security next year, the $3 to $4 trillion interest forecast), which are forecasts.

Files: analyze.py (all figures above), results.txt (its output), data/ (the four Treasury API responses as downloaded, 9 Nov 2026), SHA256SUMS.
