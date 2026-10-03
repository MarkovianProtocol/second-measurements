# SM-009: Firefox promised a list of every revoked certificate. A third of the ones revoked on day one aren't on it, and it no longer asks anyone else

Since Firefox 142, revocation is decided from CRLite, a filter Mozilla ships twice a day, and the online OCSP check is skipped for ordinary certificates the filter doesn't cover. We pulled 1,718 revocations straight from 125 certificate authorities' own CRLs (2 to 30 days old) and queried the 2 October 2026 filters with Mozilla's own `rust-query-crlite`. Of the 465 with the final certificate public, 427 come back revoked and 38 good or not covered. Among certificates revoked within 24 hours of issuance: 37 of 108. All 38 carry timestamps only from 24-hour merge-delay CT logs, the gap Mozilla described in crlite issue 367; they stay invisible until the next full filter, and the current one is dated 2 September.

Paper: [https://markovianprotocol.com/measurements/sm-009.html](https://markovianprotocol.com/measurements/sm-009.html) · DOI [10.5281/zenodo.23123001](https://doi.org/10.5281/zenodo.23123001) · log leaf [9229](https://log.markovianprotocol.com/leaf/9229)

## Evidence

`exhibits/` holds the saved Mozilla blog post, the Firefox verifier source, the pref defaults, the two crlite issues with comments, the Remote Settings records, the filter coverage lists, the example certificate with its CA's CRL and the filter-by-filter trace, every sampled revocation with its verdicts (`results.json`), the CRL inventory from CCADB, and our 89-line `raw` subcommand patch to Mozilla's query tool. `SHA256SUMS` and `retrieved_at.txt` cover them. The two filter files (6.3 MB snapshot, newest delta) and the full CRL scan are on the site copy only.

## Run it

```
cp exhibits/*.json .                                       # the inputs the scripts read (CCADB CRL list, issuer SPKIs, log ids)
python3 sample_crls.py && python3 sample_crls_big.py     # CRLs from CCADB, revocations 2-30 days old
python3 fetch_and_query.py                                 # draws the sample
python3 fetch_v3.py && python3 fetch_scts.py               # crt.sh lookups and SCT timestamps (UTC)
git clone https://github.com/mozilla/crlite && git -C crlite apply ../exhibits/rust-query-crlite-raw-subcommand.patch   # adds the raw subcommand analyze.py uses; plain git apply from this folder silently skips it
cargo build --release --manifest-path crlite/rust-query-crlite/Cargo.toml
crlite/rust-query-crlite/target/release/rust-query-crlite -d db_default --update prod --channel default https example.com
crlite/rust-query-crlite/target/release/rust-query-crlite -d db_compat  --update prod --channel compat  https example.com
python3 analyze.py
```

Needs Python 3 with `cryptography`, `psql` on PATH (`brew install libpq` on a Mac) for crt.sh's public PostgreSQL mirror (slow, drops connections under load), and Rust. The crt.sh lookups take about an hour for 1,691 certificates. `exhibits/SHA256SUMS` covers the files in this folder; `SHA256SUMS.site` also lists the three large filter and CRL files served only next to the paper.

## Limits

The headline rests on the 465 certificates whose final form is in crt.sh. The other 602 (precertificate only) point the same way but their timestamps come from crt.sh's partial log coverage. This samples revocations, not browsing; most of the 38 are same-day reissues. Firefox also honours stapled OCSP and handshake SCTs, which we did not test. The gap closes at Mozilla's next full filter.
