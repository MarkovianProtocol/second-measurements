#!/bin/sh
# Pull every TRI_REPORTING_FORM row for a reporting year from Envirofacts, 10,000 rows a page.
Y=$1; N=$2; i=0
while [ $i -lt $N ]; do
  j=$((i+9999)); f=raw/tri_${Y}_${i}.csv
  [ -s "$f" ] || curl -s -m 600 -A "Mozilla/5.0" "https://data.epa.gov/efservice/TRI_REPORTING_FORM/REPORTING_YEAR/$Y/ROWS/$i:$j/CSV" -o "$f"
  echo "$Y $i $(wc -l < $f)"
  i=$((i+10000))
done
