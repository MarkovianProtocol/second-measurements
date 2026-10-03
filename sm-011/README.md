# SM-011: Firefox's revocation list is months behind the biggest certificate logs. One in eleven top sites, mozilla.org included, gets no revocation check at all

CRLite's filter carries, per Certificate Transparency log, the timestamp Mozilla's builder has read up to. On 2 October 2026 that was 12 June for Google Xenon2026h2, 28 June for DigiCert Wyvern2026h2, 10 August for Sphinx2026h2 and November 2025 for TrustAsia log2026a/b: 1.66 billion, 956 million and 535 million entries unread in the three largest. A certificate whose embedded SCTs all come from those logs is "not covered", and Firefox skips the OCSP check for it. Live certificates of the Tranco top 1,000: 68 of 726 not covered, including mozilla.org (18 days old), stripe.com, medium.com, digicert.com; 346 of 3,792 in the top 5,000. All logs served our own fresh entry within minutes (see `nulls/ct_merge_delays*`), so the lag is in the reader.

Paper: [https://markovianprotocol.com/measurements/sm-011.html](https://markovianprotocol.com/measurements/sm-011.html) · log leaf [9166](https://log.markovianprotocol.com/leaf/9166)

## Evidence

`exhibits/coverage_all/` holds clubcard-crlite's `inspect` output for all 62 filters Firefox downloaded on 2 October; `coverage_series_classic.json` the per-filter cutoff per classic log; `unread_entries.json` the binary-search results against each lagging log; `topsites_results.json` every verdict for the 3,792 reachable top-5,000 sites (certificates in the site copy's `topsites_certs.tar.gz`); the mozilla.org certificate and its filter-by-filter trace; Xenon2026h2's tree head; crlite issue 366. `SHA256SUMS` covers the site copy, which also carries the Clubcards paper PDF.

## Run it

```
git clone https://github.com/mozilla/crlite && cargo build --release --manifest-path crlite/rust-query-crlite/Cargo.toml
git clone https://github.com/mozilla/clubcard-crlite && cargo build --release --examples --manifest-path clubcard-crlite/Cargo.toml
rust-query-crlite -d db --update prod https mozilla.org
for f in db/*.filter db/*.delta; do inspect "$f" > "coverage/$(basename $f).txt"; done
python3 unread_entries.py
python3 topsites_crlite.py 1000
```

## Limits

One day's filter and certificates; stapled OCSP or handshake SCTs could still give Firefox a verdict; the top 1,000 domains are not Firefox's traffic; the cause of the lag is Mozilla's to explain.
