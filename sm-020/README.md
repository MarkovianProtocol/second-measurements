# SM-020 — Lobbying Disclosure Act quarterly reports (LD-2) posted after the 20-day deadline

Paper: https://markovianprotocol.com/measurements/sm-020.html · DOI 10.5281/zenodo.23396300 · log leaf 11929; receipt in `sm-020.receipt.json`

Scripts: `lda_census.py` reads every quarterly and termination report for a list of quarters from the lda.gov API with its posted time; `lda_registrations.py` reads registrations; `analyze.py` scores each report against 2 U.S.C. 1604(a) (20 days, next business day) and builds the summary; `sig_check.py` compares posted times with signature times on a sample; `lda_pairs.py` reads registrant-client pairs for one quarter (optionally `--posted-before` a date); `live.py` counts pairs that reported last quarter, did not end their registration, and have nothing posted for the new quarter by the deadline; `backtest.py` rebuilds the same count for the previous deadline and follows what became of the missing pairs; `make_page.py` renders the page.

Live read: Jul–Sep 2026 reports were due 20 Oct 2026; read 04:05–05:22 UTC on 21 Oct. 2,668 of 24,261 registrant-client pairs (11.0%) had nothing posted. Back-test for the 20 Jul deadline: 2,515 of 24,047 (10.5%); by 20 Oct, 2,426 had filed and 89 had not. Exhibits are gzipped; SHA256SUMS in `exhibits/`.
