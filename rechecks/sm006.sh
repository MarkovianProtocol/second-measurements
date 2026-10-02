#!/bin/zsh
# SM-006 recheck: one fresh 24-hour x402 count on Base, then a history row. ~2 hours against the public endpoint.
set -e
R=${0:A:h}; X=$R/x402; D=$R/runs/$(date -u +%F); mkdir -p $D
export X402_DIR=$D
cd $X && python3 x402_pull.py 24 && python3 x402_values.py && python3 x402_payers.py && python3 analyze.py \
  && python3 x402_facilitators.py 400 && python3 x402_fleet.py
python3 $R/sm006_summary.py $D $R/runs/2026-08-05 >> $R/history/sm-006.jsonl
