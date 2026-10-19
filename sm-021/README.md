# SM-021 — GitHub Advisory Database review time for repository security advisories, 2026, against the documented "up to 72 hours"

Paper: https://markovianprotocol.com/measurements/sm-021.html · DOI 10.5281/zenodo.23467282 (version 1, PDF only: 10.5281/zenodo.23439042) · log leaf 11502; receipt in `sm-021.receipt.json`

Scripts: `ghsa_census.py` reads every CVE GitHub issued (NVD source identifier security-advisories@github.com) that NVD published in a date range, then each advisory's repository `published_at` and the database's `github_reviewed_at`; resumable, about 24,000 GitHub API calls. `analyze.py` builds the counts, monthly table, ecosystem table, lower-bound medians and robustness check into the summary JSON. `git_check.py` samples reviewed advisories and finds when each first appears under `github-reviewed/` in github/advisory-database's git history. `make_page.py` renders the page from the summary with `page_parts/`.

Run: `gunzip -k exhibits/census_2026-10-17.jsonl.gz`, then `python3 analyze.py exhibits/census_2026-10-17.jsonl 2026-10-17T11:55:00Z summary_2026-10-17.json` and `python3 git_check.py exhibits/census_2026-10-17.jsonl 40 20261017 git_check_2026-10-17.json`.

Exhibits: the census (gzipped JSONL, one row per CVE), the summary, the git check, saved copies of both GitHub Docs pages and the 29 June 2026 blog post, community discussion 205706 with the staff reply, and the replier's public GitHub profile. SHA256SUMS in `exhibits/`.
