# second-measurements

Public claims about logs and datasets, recomputed by a different path than the one that produced them. Each folder holds the scripts behind one paper on [markovianprotocol.com/measurements](https://markovianprotocol.com/measurements/).

| | Finding | Status | |
|---|---|---|---|
| [SM-001](sm-001/) | Google's Pixel software ledger was missing a whole month | Confirmed and fixed by Google | [paper](https://markovianprotocol.com/measurements/sm-001.html) |
| [SM-002](sm-002/) | A research dataset finds only 1 in 11 of Claude Code's pull requests | Sent to the authors 2026-09-30, response pending | [paper](https://markovianprotocol.com/measurements/sm-002.html) |
| [SM-003](sm-003/) | Half of a well-known collection of software ingredient lists came from one robot | Sent to the authors 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-003.html) |
| [SM-004](sm-004/) | We checked whisper.online's public ledger with our own code, and it holds up | Reproduced and confirmed by the operator | [paper](https://markovianprotocol.com/measurements/sm-004.html) |
| [SM-006](sm-006/) | x402 payments on Base fell by three-quarters in two months, and the same two operators still send most of them | Sent to the authors 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-006.html) |
| [SM-005](sm-005/) | Meta's private-AI log updates half as often as its whitepaper says | Sent to Meta 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-005.html) |

Earlier measurements in their own repos: [x402-second-measurement](https://github.com/MarkovianProtocol/x402-second-measurement), [ocsf-second-measurement](https://github.com/MarkovianProtocol/ocsf-second-measurement). Every finding reported to someone else and what happened next: [findings-ledger](https://github.com/MarkovianProtocol/findings-ledger).

## Checked, nothing found

`nulls/` holds the scripts for checks where the claim held:

- `armored-witness-firmware.py`: 27 of 28 Armored Witness firmware log entries match the commit their tag points to on GitHub. The recovery image names tag `0.1.0`, which doesn't exist.
- `plexi_coverage.py`: 150 of 150 sampled WhatsApp key-transparency epochs have a retrievable, consistent audit on Cloudflare Plexi. Signatures not checked.
- `mcp_star_floor.py`: the MSR '26 dataset of MCP implementations keeps only repositories with 50 or more stars, which the paper doesn't state (4.3% of matching repositories). Its language findings hold below that cut, and no owner holds more than 1%.
- `pypi_attest.py`: PyPI said 17% of uploads in 2025 carried an attestation. In 1,000 uploads sampled from its changelog, 17.9% do (95%: 15.1–20.8%); 20.5% of those still on PyPI, a floor on Trusted Publishing's "more than 20%".

## How the papers are pinned

Each paper's sha256 is a leaf in the Markovian transparency log, linked from its row above, and the log is anchored to Bitcoin with OpenTimestamps. Scripts here are byte-identical to the copies served next to each paper; each folder's `SHA256SUMS` lists them.

Code is MIT-licensed. Paper text is CC BY 4.0.
