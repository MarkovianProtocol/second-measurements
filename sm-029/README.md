# SM-029: EPA Title V petitions vs the 60-day deadline in Clean Air Act §505(b)(2)

- `analyze.py` — reads EPA's Title V Petition Database (HTML) and an as-of date; applies five corrections to EPA's table, each with its source in the script; writes `summary.json` (every number on the page), `resolved.json`, `pending.json`. Standard-library Python 3.
- `exhibits/epa_title_v_petition_database_2026-11-22.html` — the table as read on 22 November 2026 (the paper's figures).
- `exhibits/epa_title_v_petition_database_2026-11-10.html` — the table as read on 10 November 2026 (first count).
- `exhibits/orders/` — 12 EPA orders dated 1997–2026 used to check the table's dates, the December 2003 Bay Area dismissal letters, EPA's 2004 Chevron order, and the 2022 Lucid Energy order, the 2026 TPC Houston order and the 25 October 2022 withdrawal letter (Welsh, Corpus Christi East, Shell Deer Park).
- `exhibits/` — statute (42 U.S.C. 7661d), 40 CFR 70.8, EPA's 11 May 2026 guidance, EPA OIG report 2005-P-00010, the BP Whiting notice of intent (22 April 2026).

Rerun: `python3 -I analyze.py exhibits/epa_title_v_petition_database_2026-11-22.html 2026-11-22`
