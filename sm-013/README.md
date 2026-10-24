# SM-013 — Federal DNSSEC: OMB's withdrawn mandate and the domains still unsigned

Paper: https://markovianprotocol.com/measurements/sm-013.html · DOI 10.5281/zenodo.23608525 · log leaf 12479; receipt in `sm-013.receipt.json`

Scripts: `census.py` asks the .gov zone for DS, DNSKEY and a validated SOA for every federal domain on CISA's registry list (`current-federal.csv`, cisagov/dotgov-data) through 8.8.8.8 and 1.1.1.1. `analyze.py` builds the branch and agency tables, validation failures and algorithm counts. `auth_denial.py` re-asks the unsigned names at the .gov authoritative servers. Measured 3 October 2026, twice; rechecked 23 October 2026 (`exhibits/census_2026-10-23.jsonl`). Reviewed before publication by Kaveh Ranjbar, who reran the census independently.

Run: `curl -sLO https://raw.githubusercontent.com/cisagov/dotgov-data/main/current-federal.csv && python3 census.py && python3 analyze.py`
