# SM-006: x402 payments on Base fell by three-quarters in two months, and the same two operators still send most of them

x402 lets programs pay each other pennies over the web, and a July study found most of the 136.7 million payments on Base were manufactured. We counted one day in August: 234,490. We counted again on 1 October: 63,003, three-quarters gone. The payers changed completely; the one behind 56.9% of August's traffic made none. The senders didn't: the same 20 wallets in two groups sent about 80% of the payments both days.

Paper: [https://markovianprotocol.com/measurements/sm-006.html](https://markovianprotocol.com/measurements/sm-006.html) · DOI [10.5281/zenodo.23122988](https://doi.org/10.5281/zenodo.23122988) · log leaf [9226](https://log.markovianprotocol.com/leaf/9226) · Sent to the authors 2026-10-01, response pending

## Evidence

`exhibits/` holds saved copies of every source quoted on the paper page, with `SHA256SUMS` and the fetch time.

## Run it

Python 3 standard library only, against Base's public endpoint (`BASE_RPC` to override).

```
X402_DIR=./aug python3 x402_pull.py - 49556153 49599353   # the August day
X402_DIR=./oct python3 x402_pull.py - 52006727 52049927   # the October day
# then, with X402_DIR set to each folder:
python3 x402_values.py      # amounts
python3 x402_payers.py      # the busiest payers, read at the window's last block
python3 analyze.py          # findings.md
python3 x402_facilitators.py 400 && python3 x402_components.py && python3 x402_components2.py && python3 x402_fleet.py
```

These are the same scripts as [x402-second-measurement](https://github.com/MarkovianProtocol/x402-second-measurement), where the August run was first published. `SHA256SUMS` lists their hashes.

## Limits

Every EIP-3009 transfer is counted, not just those from listed x402 facilitators, so both days are upper bounds. Two single days are not a trend. The wallet-group shares come from about 1% of each day's blocks, and October's sample is small (837 payments).
