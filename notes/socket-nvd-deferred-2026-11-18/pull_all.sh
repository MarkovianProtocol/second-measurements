#!/bin/zsh
# Socket's window: NVD publish date 1 Jan - 27 Oct 2026, one file per month (Oct to the 27th). Read live, 18 Nov 2026.
cd "$(dirname $0)"
for m in 01 02 03 04 05 06 07 08 09; do
  last=$(python3 -c "import calendar;print(calendar.monthrange(2026,int('$m'))[1])")
  [ -f data/nvd_2026-$m.json.gz ] || python3 -I pull_window.py 2026-$m-01 2026-$m-$last data/nvd_2026-$m.json.gz
done
[ -f data/nvd_2026-10.json.gz ] || python3 -I pull_window.py 2026-10-01 2026-10-27 data/nvd_2026-10.json.gz
date -u +%FT%TZ > data/retrieved_at.txt
