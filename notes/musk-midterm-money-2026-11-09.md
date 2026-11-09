# Elon Musk's 2026 midterm money, from the FEC record: recompute, 9 Nov 2026

This supports Robert Reich's Texas number and settles where the widely quoted totals come from. Musk's $168 million in the Texas Senate race holds, traced filing by filing: he gave the Senate Leadership Fund $75 million on 9 September and $83 million on 23 September. The fund passed exactly those amounts to a new super PAC called Texas PAC the next day each time, and Texas PAC spent it for Ken Paxton and against James Talarico. With $10 million to Lone Star Liberty PAC, that is $168 million. Paxton's own campaign raised $22.3 million.

The totals: Musk's federal giving on the FEC record, 1 January 2025 to 14 October 2026, is $445.7 million. That is AP's and the Guardian's "at least $445 million". The New York Times' $474 million adds about $16 million of state money and $12 million we can't find in federal filings. Reich's "more than $483 million" is $37 million above everything filed so far.

The sentences: Reich, "How to close the Muskrat Loophole" (1 Nov 2026): "In the 2026 midterms, Musk has given more than $483 million to political committees to support Republican congressional candidates. This includes at least $168 million in the Texas Senate race to support Republican Ken Paxton (almost all Paxton's campaign money)." The New York Times, as reported on 2 Nov: "Elon Musk has given $474 million to political groups during the 2026 midterm cycle." AP, 5 Nov: "at least $445 million."

Our path: the FEC's API. Every Schedule A receipt itemized to Musk in the 2025–2026 cycle, from both the processed data (through early September) and the raw electronic filings (through the pre-general reports, 14 October), deduplicated by committee, date and amount. For Texas: Texas PAC's receipts, the Senate Leadership Fund's independent expenditures, and every 24- and 48-hour independent-expenditure report naming Paxton or Talarico.

| Recipient | Musk, 1 Jan 2025 – 14 Oct 2026 |
|---|---|
| America PAC (cash) | $177.7M |
| America PAC (in-kind, attributed to Musk through a partnership) | $38.3M |
| Senate Leadership Fund | $168.0M |
| Congressional Leadership Fund | $30.0M |
| Lone Star Liberty PAC | $10.0M |
| Fight for Kentucky | $10.0M |
| V-PAC: Victors, Not Victims | $5.0M |
| MAGA Inc. | $5.0M |
| Aurora Action Network | $1.5M |
| 25 candidate committees | $0.2M |
| Total | $445.7M |

| Whose number | Total | Against the FEC record |
|---|---|---|
| AP, Guardian | at least $445M ($445.77M) | Matches: $445.7M |
| BBC | almost $450M | Close |
| New York Times | $474M ($216M + $168M + $30M + $44M federal, about $16M state) | First three match exactly; the $44M "other" is $31.7M on the record, so $12.3M is unaccounted for |
| Robert Reich | more than $483M | $37M above the record; not supported by any filing yet |

The Texas trail:

| Date | Filing | Amount |
|---|---|---|
| 9 Sep | Musk to Senate Leadership Fund | $75.0M |
| 10 Sep | Senate Leadership Fund to Texas PAC | $75.0M |
| 23 Sep | Musk to Senate Leadership Fund | $83.0M |
| 24 Sep | Senate Leadership Fund to Texas PAC | $83.0M |
| | Texas PAC's only donor through 14 Oct | Senate Leadership Fund, $158.0M |
| | Musk to Lone Star Liberty PAC (spent for Paxton, against Talarico) | $10.0M |

- Independent spending for Paxton or against Talarico in the 24/48-hour reports: Texas PAC $181.7M, America PAC $47.3M, MAGA Inc. $37.7M, Lone Star Liberty PAC $36.6M. America PAC is mostly Musk money too, so $168 million is a floor, as "at least" says.
- "Almost all Paxton's campaign money": Paxton's own committee raised $22.3 million through 14 October. Musk-routed outside money was about 7.5 times that. If campaign money means everything spent to elect him, the phrase holds; his campaign account itself took little from Musk.
- The Senate Leadership Fund itself reported no independent spending in Texas; the money went through Texas PAC.
- The record stops at 14 October. Super PAC donations after that date are not reported until the post-general reports, due 3 December. A total above $445.7 million may well be right then; it can't be checked now.
- In-kind: America PAC reports $38.3 million of services (voter data, petition work, consulting) paid by a partnership and attributed to Musk. Leave those out and the cash total is $407.4 million.

Not covered: state-level giving (Michigan, Texas, Wisconsin and others; the Times puts it near $16 million), money to groups that don't report donors to the FEC, and race outcomes.

Files: fetch.py, fetch_slf.py, fetch_tx.py (FEC API pulls), analyze.py (all figures above), results.txt, data/ (the API responses as downloaded, 9 Nov 2026), SHA256SUMS.
