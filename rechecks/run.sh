#!/bin/zsh
# Usage: run.sh sm001|sm005|sm006 -- run one recheck, then rebuild the rechecks page.
R=${0:A:h}; cd $R
case $1 in
  sm001) python3 sm001.py ;;
  sm005) python3 sm005.py ;;
  sm006) ./sm006.sh ;;
  sm007) python3 sm007.py ;;
  sm008) python3 sm008.py ;;
  sm009) python3 sm009.py ;;
  sm011) ~/neo_env/bin/python3 sm011.py ;;
  sm012) ~/neo_env/bin/python3 sm012.py ;;
  sm013) ~/neo_env/bin/python3 sm013.py ;;
  sm014) ~/neo_env/bin/python3 sm014.py ;;
  sm015) ~/neo_env/bin/python3 sm015.py ;;
esac
python3 render.py ${RECHECKS_SITE:-$R/out}
$R/stamp.sh
