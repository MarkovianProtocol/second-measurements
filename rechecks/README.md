# Rechecks

Scheduled reruns of three papers' checks, each appending one line to `history/`. `render.py` builds
[markovianprotocol.com/measurements/rechecks.html](https://markovianprotocol.com/measurements/rechecks.html) from those lines.

| Script | Paper | Schedule |
|---|---|---|
| `sm001.py` | SM-001, Pixel factory images vs Google's binary-transparency log | daily |
| `sm005.py` | SM-005, Meta Private Processing cadence on Cloudflare Plexi, plus a hash of the whitepaper | weekly |
| `sm006.sh` | SM-006, one fresh 24-hour x402 count on Base (about 2 hours; needs the `sm-006/` scripts in `./x402`) | monthly |

`run.sh sm001|sm005|sm006` runs one and rebuilds the page into `$RECHECKS_SITE`. Python 3 standard library only.
