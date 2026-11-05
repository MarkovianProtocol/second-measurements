# Lucia Lavagnino, Transparency.dev Summit 2026: setting thresholds in witness cosigning — recompute, 5 Nov 2026

This supports the talk's rule, and it applies to us: our log's 4-of-7 witness policy prevents a split view only if none of the seven witnesses is malicious.

The claim: a log with n witnesses, at most m of them malicious, and a threshold of t cosignatures "achieves split-view protection if t ≥ (n + m + 1)/2" (Setting Thresholds in Witness Cosigning, slide 4; the worked example on slide 5 is n = 9, m = 3, t ≥ 6.5).

Our path: brute force. For every n from 1 to 9, every m and every t, brute.py tries every pair of t-witness sets and asks whether some pair overlaps only in malicious witnesses, which is what a log needs to get two different checkpoints accepted. Result: 0 mismatches with the formula.

| 7 witnesses, threshold | Malicious witnesses it survives |
|---|---|
| 1, 2 or 3 of 7 | none: two disjoint honest groups can be shown different checkpoints |
| 4 of 7 (our policy today) | 0 |
| 5 of 7 | 2 |
| 6 of 7 | 4 |
| 7 of 7 | 6 |

Two live policies, read 5 November 2026:

| Policy | Rule | Malicious witnesses it survives |
|---|---|---|
| markovianprotocol.com/log (/policy) | 4 of 7 | 0 |
| Sigsum's built-in sigsum-generic-2025-1 | 2 of 3 | 0 |

Two of our seven pinned witnesses (little-garden and ring-any-bells) are run by one operator, so 4 of 7 doesn't survive that operator alone. A threshold is also a trade against staying up: more required cosignatures means more ways to stall. Our own history says the trade is free for us. Of the 3,349 checkpoints our log has saved, the 3,308 since witnessing began all carry at least 5 of the 7 pinned cosignatures (3,290 carry all 7; one carried exactly 5). 5 of 7 would have accepted every one; 6 of 7 would have rejected one. From 5 November our own monitor alerts below 5 of 7; the signed policy moves to 5 at our next trust-root signing.

What this doesn't cover: witnesses we don't pin, monitors (which the talk's slide 7 shows can carry part of the load), and whether any witness is in fact malicious. Sigsum may have reasons for 2 of 3 that this note doesn't weigh; it only applies the formula.

Files: brute.py (the brute force), availability.py and availability.json (pinned cosignatures on every saved checkpoint), markovian-policy_2026-11-05.txt and sigsum-generic-2025-1.builtin-policy (the two policies as read), SHA256SUMS. Run: python3 brute.py && python3 availability.py 100000.
