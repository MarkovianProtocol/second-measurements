# SM-005: Meta's private-AI log updates half as often as its whitepaper says

When WhatsApp or Meta's AI glasses send a request to Meta's private AI servers, those servers are only supposed to run software Meta has published in a public log, which Cloudflare runs. Meta's whitepaper says the list of pulled software is republished every 3 hours. We fetched every entry since June 2025: it's been every 6 hours since January, and the whitepaper's March update still says 3. The server software is described as updated weekly, but only 37 of 70 weeks have a new entry, including one six-week stretch with none.

Paper: [https://markovianprotocol.com/measurements/sm-005.html](https://markovianprotocol.com/measurements/sm-005.html) · log leaf [9042](https://log.markovianprotocol.com/leaf/9042) · Sent to Meta 2026-10-01, response pending

## Run it

Python 3 standard library only. Keep concurrency low; Plexi rate-limits, and rate-limited fetches look like gaps.

```
python3 pp_revocation.py            # the pulled-software lists (about 2,700 requests)
python3 pp_cvm_weeks.py             # server-software entries and week counts
python3 pp_cadence.py prod.pc.cvm   # head and gap summary for any namespace
```

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

Record signatures were not verified. The timestamps are Cloudflare's, not Meta's release times. 4 of the roughly 100 Meta namespaces on Plexi were measured.
