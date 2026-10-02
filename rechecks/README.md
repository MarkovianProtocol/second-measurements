# Rechecks

Scheduled reruns of three papers' checks, each appending one line to `history/`. `render.py` builds
[markovianprotocol.com/measurements/rechecks.html](https://markovianprotocol.com/measurements/rechecks.html) from those lines.

| Script | Paper | Schedule |
|---|---|---|
| `sm001.py` | SM-001, Pixel factory images vs Google's binary-transparency log | daily |
| `sm005.py` | SM-005, Meta Private Processing cadence on Cloudflare Plexi, plus a hash of the whitepaper | weekly |
| `sm006.sh` | SM-006, one fresh 24-hour x402 count on Base (about 2 hours; needs the `sm-006/` scripts in `./x402`) | monthly |
| `sm007.py` | SM-007, Docker Official Images: attestation coverage on 300 random entries and signatures on 10 repos | weekly |
| `sm008.py` | SM-008, 30 kernel and 30 other CVEs from the past week: do they carry CISA's SSVC answers? | weekly |

`run.sh sm001|sm005|sm006` runs one and rebuilds the page into `$RECHECKS_SITE`, then `stamp.sh` puts the new version's sha256 in the Markovian log once the public URL serves it. Python 3 standard library only.
