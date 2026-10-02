# SM-005: Meta's whitepaper says its private-AI log refreshes every 3 hours. Since January it's been every 6

When WhatsApp or Meta's AI glasses hand a request to Meta's private AI servers, those servers may only run software listed in a public log that Cloudflare keeps. Meta's whitepaper says the list of pulled software is republished every 3 hours. We fetched all 2,690 entries since June 2025: it slowed to every 4 hours in October and every 6 since January, and the whitepaper's March update still says 3. The server software is described as weekly, but only 37 of 70 weeks have a new entry, including a six-week stretch with none.

Paper: [https://markovianprotocol.com/measurements/sm-005.html](https://markovianprotocol.com/measurements/sm-005.html) · log leaf [9120](https://log.markovianprotocol.com/leaf/9120) · Sent to Meta 2026-10-01, response pending

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
