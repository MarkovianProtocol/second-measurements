#!/bin/sh
# Pull the whole Envirofacts TRI_FACILITY table (names, parents, EPA registry ids), 10,000 rows a page.
N=$(curl -s -A "Mozilla/5.0" "https://data.epa.gov/efservice/TRI_FACILITY/COUNT/JSON" | python3 -c "import json,sys;print(json.load(sys.stdin)[0]['TOTALQUERYRESULTS'])")
i=0; mkdir -p raw
while [ $i -lt $N ]; do j=$((i+9999)); f=raw/fac_$i.csv; [ -s $f ] || curl -s -m 600 -A "Mozilla/5.0" "https://data.epa.gov/efservice/TRI_FACILITY/ROWS/$i:$j/CSV" -o $f; echo "fac $i $(wc -l < $f)"; i=$((i+10000)); done
