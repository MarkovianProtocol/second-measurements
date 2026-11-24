# Chainflip vault drain: every stated amount matches the chain, and the bounty deadline passed with nothing returned, 23 Nov 2026

This supports Chainflip's own account. Every amount in its message to the attacker matches the vault transactions to the last unit, the Ethereum side went into Tornado Cash within nine minutes, and at Chainflip's deadline, 18:38 UTC on 23 November, nothing had come back to either return address.

On 21 November Chainflip's vaults were drained. Chainflip Labs then posted a message to the attacker at chainflip.io/return listing what was taken and offering 10% to keep if 90% came back by the deadline. We recounted each leg from the Bitcoin and Ethereum chains and watched both return addresses every hour through the deadline.

**What was taken.**

| Chainflip's figure | On chain | Transaction |
|---|---|---|
| 520.2243399 ETH | 520.2243399030978 ETH | Ethereum 0xc928950f…f20f, 21 Nov 07:10:59 UTC, one `transferBatch` call from Chainflip's Vault contract (0xF5e1…2Bcc) through its KeyManager, to 0x7d14…1Eaf |
| 3,249,631.41 USDC | 3,249,631.410561 USDC | same transaction |
| 758,141.33 USDT | 758,141.332716 USDT | same transaction |
| 122.86137042 BTC | 122.86137042 BTC | Bitcoin 20262de3…5b7a, block 976,863, 06:41 UTC, from the vault bc1pypc0…sp94 to bc1qmj0x…z5lz |

**Where it went.** On Ethereum, the attacker swapped the USDC and USDT for ETH on Uniswap at 07:12 and 07:14 UTC (1,910.01 and 457.22 ETH), sent everything to one address (0xfd24…B080, 2,909.90 ETH in all), and at 07:18–07:19 UTC put 2,909 ETH into Tornado Cash in 38 deposits: 29 of 100 ETH and 9 of 1 ETH. Chainflip's return terms ask for 2,618.1 ETH, which is 90% of that 2,909. On Bitcoin, the 122.86 BTC moved once more, at 07:01 UTC (block 976,865), to bc1qm777…4g6, and has not moved since.

**The message.** At 20:12 UTC on 21 November Chainflip wrote to that Bitcoin address in the chain itself, in a transaction's data field: "Chainflip: return 90%, keep 10%. Addresses and terms: chainflip.io/return".

**The deadline.** We read the two return addresses (bc1qux4n…rats for 110.57523337 BTC; 0x38a4…34DB, a Safe multisig, for 2,618.1 ETH) and the attacker's Bitcoin address every hour from 02:11 UTC on 23 November, once at 18:40 UTC, and last at 19:40 UTC:

| Read (UTC) | BTC at Chainflip's return address | ETH at Chainflip's return address | BTC still at the attacker's address |
|---|---|---|---|
| 23 Nov 02:11 | 0 | 0 | 122.86137932 |
| 23 Nov 18:40, after the deadline | 0 | 0 | 122.86137932 |
| 23 Nov 19:40 | 0 | 0 | 122.86137932 |

(The attacker's address holds 0.00001 BTC more than was stolen: the output of Chainflip's message transaction.)

Not confirmed: press reports that Chainflip "recovered 15 BTC into a multisig". Chainflip's return page doesn't say it, and the nearest movement we found is the vault's last 10.48 BTC going to a new address at 11:24 UTC on 21 November. We don't assess the cause; Chainflip says it has "identified the mechanism of key exposure".

Limits: we watched the two return addresses and the attacker's Bitcoin address, not the Tornado Cash pools, so a return through some other route wouldn't show here; and nothing after 19:40 UTC on 23 November. We'll look again at day 30, 21 December.

Files: recount.py (every number above, from the saved explorer responses), find_btc.py (the block scan that found the Bitcoin transaction), deadline_watch.py and chain/deadline_watch_snapshots.jsonl (the hourly reads), chain/ (Blockscout and mempool.space responses as read), src/ (Chainflip's return page, 22 and 23 Nov), SHA256SUMS. Chainflip's message: https://chainflip.io/return
