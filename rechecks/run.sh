#!/bin/zsh
# Usage: run.sh sm001|sm005|sm006 -- run one recheck, then rebuild the rechecks page.
R=${0:A:h}; cd $R
case $1 in
  sm001) python3 sm001.py ;;
  sm005) python3 sm005.py ;;
  sm006) ./sm006.sh ;;
esac
python3 render.py ${RECHECKS_SITE:-$R/out}
