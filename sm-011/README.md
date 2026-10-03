# SM-011: Firefox's revocation list is months behind the biggest certificate logs. One in eleven top sites, mozilla.org included, gets no revocation check at all

CRLite's filter carries, per Certificate Transparency log, the timestamp Mozilla's builder has read up to. On 2 October 2026 that was 12 June for Google Xenon2026h2, 28 June for DigiCert Wyvern2026h2, 10 August for Sphinx2026h2 and November 2025 for TrustAsia log2026a/b: 1.66 billion, 956 million and 535 million entries unread in the three largest. A certificate whose embedded SCTs all come from those logs is "not covered", and Firefox skips the OCSP check for it. Live certificates of the Tranco top 1,000: 68 of 726 not covered, including mozilla.org (18 days old), stripe.com, medium.com, digicert.com; 346 of 3,792 in the top 5,000. All logs served our own fresh entry within minutes (see `nulls/ct_merge_delays*`), so the lag is in the reader.

Paper: [https://markovianprotocol.com/measurements/sm-011.html](https://markovianprotocol.com/measurements/sm-011.html) · DOI [10.5281/zenodo.23123261](https://doi.org/10.5281/zenodo.23123261) · log leaf [9247](https://log.markovianprotocol.com/leaf/9247)

## Evidence

`exhibits/coverage_all/` holds clubcard-crlite's `inspect` output for all 62 filters Firefox downloaded on 2 October; `coverage_series_classic.json` the per-filter cutoff per classic log; `unread_entries.json` the binary-search results against each lagging log; `topsites_results.json` every verdict for the 3,792 reachable top-5,000 sites (certificates in the site copy's `topsites_certs.tar.gz`); the mozilla.org certificate and its filter-by-filter trace; Xenon2026h2's tree head; crlite issue 366. `SHA256SUMS` covers the site copy, which also carries the Clubcards paper PDF.

## Run it

```
git clone https://github.com/mozilla/crlite && cargo build --release --manifest-path crlite/rust-query-crlite/Cargo.toml
git clone https://github.com/mozilla/clubcard-crlite && cargo build --release --examples --manifest-path clubcard-crlite/Cargo.toml
crlite/rust-query-crlite/target/release/rust-query-crlite -d db --update prod https mozilla.org
mkdir -p coverage && for f in db/*.filter db/*.delta; do clubcard-crlite/target/release/examples/inspect "$f" > "coverage/$(basename $f).txt"; done
python3 unread_entries.py                 # reads exhibits/log_ids.json and exhibits/coverage_all/
python3 topsites_crlite.py 1000           # needs the cryptography package; reads exhibits/tranco-top-5000.csv and the db_ folders above
```

`exhibits/SHA256SUMS` covers the files in this folder; `SHA256SUMS.site` also lists the Clubcards paper PDF and the certificate tarball served only next to the paper.

## Limits

One day's filter and certificates; stapled OCSP or handshake SCTs could still give Firefox a verdict; the top 1,000 domains are not Firefox's traffic; the cause of the lag is Mozilla's to explain.

By issuer: 57 of the 68 uncovered top-1,000 certificates (and 299 of 346 in the top 5,000) were issued by Google Trust Services, 37.7% of everything it issues to those sites; DigiCert 3 of 154, Let's Encrypt 7 of 773 in the top 5,000. Google's certificates carry timestamps from Google's own RFC 6962 logs, which the reader is furthest behind on.
