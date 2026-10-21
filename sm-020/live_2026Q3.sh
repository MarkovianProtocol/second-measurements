#!/bin/sh
# Run Wed 21 Oct 2026 (Q3 deadline Tue 20 Oct). Expected = pairs with a Q2 regular/no-activity report, minus Q2 terminations;
# filed = any Q3 report type, amendments included, posted before 21 Oct (Eastern date).
set -e; cd "$(dirname "$0")"
python3 -I lda_pairs.py 2026Q3 Q,QY,T,TY,A,AY pairs_2026Q3.json --posted-before 2026-10-21 > pairs_q3.log 2>&1
python3 -I live.py pairs_2026Q2.json pairs_2026Q3.json live_2026Q3.json --terminated pairs_2026Q2_term.json
cp live_2026Q3.json exhibits/
S=../site/measurements/sm-020
cp live_2026Q3.json $S/exhibits/ && gzip -c pairs_2026Q3.json > $S/exhibits/pairs_2026Q3.json.gz
(cd $S/exhibits && shasum -a 256 $(ls | grep -v SHA256SUMS) > SHA256SUMS)
python3 -I make_page.py summary_2026-10-15.json ../site/measurements/sm-020.html --live live_2026Q3.json --backtest backtest_2026Q2.json
echo "next: gate pass 3, Zenodo description refresh (zenodo/sm-020), deploy on Colin's go"
