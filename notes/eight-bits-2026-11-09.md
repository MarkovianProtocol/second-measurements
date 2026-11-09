# Scott Helme, "Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds" (20 Oct 2026): recompute, 9 Nov 2026

This supports the post. All eight private keys in its table are right, the dates are right, and "milliseconds" holds: our plain Python search finds each key in 3 to 194 ms. One date needs a fix, and it is good news for the devices the post worries about. Nothing here is valid until July 2039. The copies Sectigo cross-signed, which are the ones older device bundles can reach, stop working on 31 December 2028, when Sectigo's AAA Certificate Services root itself expires. The copies eMudhra issued run to 28 April 2040, but they chain to eMudhra's 2024 roots, which only Microsoft trusts.

The sentences: "Routers, printers, TVs, appliances with frozen firmware will trust these certificates until expiry, which is July 2039..." and "Their bundles are frozen until 2039." Also the key table, "all created in April 2025", "cross-signed by Sectigo's AAA Certificate Services root in May 2025", "at most 255 steps", "recovered the key in milliseconds on commodity hardware", and "a 17 month window".

Our path: the 16 certificates from crt.sh (8 keys, each in an eMudhra-issued and a Sectigo-issued certificate), a search of d = 1 to 255 against each public key, and root-store status from the CCADB export of 27 October.

| Intermediate | Key d | Post | eMudhra copy valid | Sectigo copy valid | Search time |
|---|---|---|---|---|---|
| EM OV TLS CA - G3C | 4 | 4 | 30 Apr 2025 – 28 Apr 2040 | 14 May 2025 – 31 Dec 2028 | 3 ms |
| EM EV TLS CA - G3C | 56 | 56 | same | same | 45 ms |
| EM OV CS CA - G3B | 66 | 66 | same | same | 54 ms |
| EM EV TLS CA - G3B | 115 | 115 | same | same | 94 ms |
| EM OV TLS CA - G3B | 155 | 155 | same | same | 127 ms |
| EM DV TLS CA - G3B | 156 | 156 | same | same | 127 ms |
| EM DV TLS CA - G3C | 230 | 230 | same | same | 188 ms |
| EM OV CS CA - G3C | 237 | 237 | same | same | 194 ms |

- Who trusts which path (CCADB, 27 Oct): the eMudhra copies chain to emSign Root TLS CA - G3 and emSign Root CS CA - G3 (valid to 2049), which are in Microsoft's store and not in Apple's, Chrome's or Mozilla's. The Sectigo copies chain to AAA Certificate Services, which is in Apple's, Microsoft's and Mozilla's stores and expires 31 December 2028. Bundles built from Mozilla's list, which is what most Linux distributions, certifi, curl and embedded devices ship, reach these keys only through AAA. So a frozen device's exposure ends at the end of 2028.
- Windows is the long tail: it trusts the G3 roots directly, to 2040 for these certificates, unless Microsoft distrusts them. That matches the post's code-signing warning.
- 17 months: 30 April 2025 to the 17 October 2026 report is 17.5 months. Holds.
- Search time is the slowest way to do it: one full scalar multiplication per guess, in Python's cryptography library, on a laptop. Timings are from one run.
- Our wider check of eMudhra's other keys (27 October: all 123 eMudhra certificates in CCADB) found no other key below 2^40, including the four G3A intermediates from the same April 2025 batch.

Not covered: CT and revocation (see our 30 October note on eMudhra's CRLs), and any device that ignores certificate expiry.

Files: analyze.py (search, timings, dates), results.txt, data/ (the 16 certificates, AAA root, root-store lines from CCADB), SHA256SUMS.
