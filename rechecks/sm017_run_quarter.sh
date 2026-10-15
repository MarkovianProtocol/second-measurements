#!/bin/zsh
# Every 14th of Jan/Apr/Jul/Oct, 08:00 MT (the 10th moves to the next business day; Oct 2026 = Tue 13th):
# read every full-power TV, FM and AM station the morning after the issues/programs list deadline.
cd ~/rechecks/fcc-opif
d=$(date -u +%F)
for s in tv fm am; do
  FCC_SERVICE=$s python3 scan.py 0 20261005 results_${s}_$d.json > scan_${s}_$d.log 2>&1
  python3 analyze.py results_${s}_$d.json summary_${s}_$d.json > analyze_${s}_$d.log 2>&1
done
echo "quarter run finished $(date -u +%FT%TZ)" >> run_quarter.log
python3 ~/rechecks/sm017.py $d >> ~/rechecks/cron.log 2>&1   # the scan date, not the UTC date at the end (10/14 run crossed 00:00Z and appended nothing)
RECHECKS_SITE=/Users/colinwinter/business/markovian_home/measurements ~/rechecks/run.sh render-only >> ~/rechecks/cron.log 2>&1   # append the row and re-render the rechecks page
