# SM-015 · Merge delay, accepted roots and list hygiene across the 64 Chrome-trusted CT logs

We submitted our own certificate to 61 of the 64 usable and qualified logs in Chrome's list (v93.2, 2 October 2026; three shards accept no certificate we hold) plus Cloudflare's three Raio shards from Apple's list, and polled each until it served the entry. The 43 static-ct-api (tiled) logs served it within 5.7 s, median 0.2 s; the 21 RFC 6962 logs took 10 s (DigiCert) to 61 min (Cloudflare Nimbus2026). All 64 inside their declared MMD. Chrome's policy caps an RFC 6962 log's MMD at 4 hours while its list declares 86,400 s for all 21. Four TrustAsia shards have 379–380-day windows against "no longer than one calendar year". 30 logs accept all 101 Chrome roots, 29 miss one, DigiCert's Sphinx shards miss 6, Cloudflare's Nimbus shards miss 25. Apple's list (v511, last modified 31 March 2026) marks 12 shards "usable" whose windows closed 94–108 days earlier; Chrome has removed all 12.

Paper: https://markovianprotocol.com/measurements/sm-015.html

## Run it

    python3 ct_mmd.py --chain chain.pem    # submit to every log, poll until served (needs the cryptography package)
    python3 get_roots.py                   # accepted roots per log vs CCADB's Chrome-included set (ccadb_all_included.csv, log_list.json)
    python3 analyze_lists.py               # shard windows and Apple's closed-but-usable shards (log_list.json, apple_log_list.json)

## Limits

One certificate, one day, one vantage point; the polling interval adds up to a few seconds per log. "Expected to accept" is not a MUST. Chrome's policy page is read as of 3 October 2026; whether the 4-hour cap predates the 21 logs' admission is a question put to Chrome. We operate a witness that cosigns some of the tiled logs; the measurement does not use it.
