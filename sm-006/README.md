# SM-006: x402 payments on Base fell by three-quarters in two months, and the same two operators still send most of them

x402 is a way for programs to pay each other small amounts in USDC over the web. A July 2026 study counted 136.7 million of these payments on Base and found most of them were manufactured rather than real trade. In August we counted one day ourselves and got 234,490. We ran the same count again for the day ending 1 October and got 63,003, about a quarter as many. Who sends them hasn't changed: two groups of wallets that move in step submitted about 80% of them on both days.

Paper: [https://markovianprotocol.com/measurements/sm-006.html](https://markovianprotocol.com/measurements/sm-006.html) · log leaf [9099](https://log.markovianprotocol.com/leaf/9099) · Sent to the authors 2026-10-01, response pending

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
