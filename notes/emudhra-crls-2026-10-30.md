# eMudhra's weak keys and CRLs, checked from the public records

Markovian Protocol, 30 October 2026. A data note on Ryan Hurst's "The Private Key Was Four" (Unmitigated Risk, 22 October 2026).

The records support the post. The keys, the certificate count, eMudhra's revocation times and the 14-hour CRL gap all check out. Two things in the CRLs are worth adding: Sectigo's CRL dates its revocations to May 2025, and the revocation behind the bad CRL 11 is for a certificate we cannot find in any public log.

| Claim in the post | What we found | How |
|---|---|---|
| Private keys 4, 56, 66, 115, 155, 156, 230, 237 | Same eight, recovered from the public keys in eMudhra's CCADB certificates (27 Oct) | search for P-384 private keys below 2^40 across all 55 eMudhra EC keys in CCADB |
| The eight keys appear in 16 certificates | 16: each key in exactly two logged certificates, one issued by an emSign root, one by Sectigo (AAA Certificate Services); no end-entity certificate carries any of them | rebuilt each public key from its private key, SPKI SHA-256, crt.sh `spkisha256` search |
| eMudhra revoked its eight between 09:24 and 09:38 UTC on 18 October | 09:24:32 to 09:38:46 UTC, reason caCompromise, in emSign Root TLS CA - G3 CRL 17 and emSign Root CS CA - G3 CRL 9 | CRLs fetched 30 Oct; TLS CRL signature verified against the root |
| Sectigo revoked its cross-certificates at 10:35 UTC on 19 October | Sectigo's CRL (AAA Certificate Services, CRL 7295) gives every one a revocation date of **14 May 2025, 00:00 UTC**, the day the cross-certificates were issued, reason caCompromise | CRL signature verified against the AAA root |
| CRL 11 for emSign Root TLS CA - G1 failed; CRL 12 verified about 14 hours later | CRL 12 (thisUpdate 15 Oct 03:56:14 UTC) verifies and adds one revocation dated 14 Oct 14:03:55 UTC, 13.9 hours earlier. CRL 11 itself is not in the Internet Archive, which holds CRL 10 (20 May) and CRL 12 only | Wayback captures of crl.emsign.com/?roottlscag1.crl, both signatures verified |

- **Sectigo's revocation date.** Anyone reading the CRL to time the response will see May 2025, not 19 October. The date it records is the issue date; the time Sectigo acted, 19 October, doesn't appear in the CRL itself.
- **What CRL 11 was for.** The one revocation CRL 12 adds is serial `b37c808b57e51d24bef8f416e607f6`, revoked 14 Oct 14:03:55 UTC, the change CRL 11 would have carried. That serial is not among the six certificates CCADB lists under emSign Root TLS CA - G1, and crt.sh has nothing for it. The same afternoon, emSign ECC Root CA - G3 issued CRL 32 at 14:00:27 UTC, adding serial `3164d2d50d1c917f6609b339968c76` revoked at that moment; crt.sh has nothing for that one either. Both CRLs verify. What the two certificates were, and whether the key that signed the bad CRL 11 is one of these roots' keys, is for eMudhra to say. A copy of CRL 11's bytes would settle the second question: test its signature against each eMudhra root key.

What we did not check: the precertificate counts, the forged google.com certificates, or the blocklists (CRLSet, OneCRL, Microsoft).

Sources: R. Hurst, "The Private Key Was Four", unmitigatedrisk.com, 22 October 2026; crt.sh (searches 30 October 2026); CRLs from crl.emsign.com and crl.comodoca.com (fetched 30 October 2026); Internet Archive captures of crl.emsign.com/?roottlscag1.crl (10 June and 18 October 2026); CCADB AllCertificateRecords (read 27 October 2026). Scripts (spki_census.py, revtimes.py), the CRLs, certificates and outputs are in the folder beside this note (emudhra-crls-2026-10-30/).
