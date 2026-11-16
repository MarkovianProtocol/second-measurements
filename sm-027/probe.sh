#!/bin/bash
# anonymous visibility probe: 200 = public, 404 = hidden
while IFS=, read cve pub iid; do
  code=$(curl -s -m 20 -o /dev/null -w '%{http_code}' https://gitlab.com/api/v4/projects/278964/issues/$iid)
  echo "$cve,$pub,$iid,$code,$(date -u +%FT%TZ)"
  sleep 0.25
done < data/cve_issue.csv > data/probe_$(date -u +%Y%m%d).csv
