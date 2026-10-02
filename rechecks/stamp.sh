#!/bin/zsh
# Stamp the live rechecks page into the Markovian log once the public URL serves the bytes just written.
R=${0:A:h}; F=${RECHECKS_SITE:-$R/out}/rechecks.html
[ -n "$RECHECKS_SITE" ] || exit 0
want=$(sed -e 's/<!--email_off-->//g' -e 's/<!--\/email_off-->//g' $F | shasum -a 256 | cut -c1-64)
for i in {1..20}; do
  got=$(curl -s "https://markovianprotocol.com/measurements/rechecks.html?v=$RANDOM$RANDOM" | shasum -a 256 | cut -c1-64)
  [ "$got" = "$want" ] && break; sleep 15
done
[ "$got" = "$want" ] || { echo "$(date -u +%FT%TZ) rechecks: public bytes differ, not stamped"; exit 0; }
leaf=$(curl -s -X POST -d "sha256:$want" https://log.markovianprotocol.com/submit | python3 -c 'import sys,json; print(json.load(sys.stdin).get("leaf_index",""))' 2>/dev/null)
echo "{\"time\": \"$(date -u +%FT%TZ)\", \"sha256\": \"$want\", \"leaf\": \"$leaf\"}" >> $R/history/stamps.jsonl
echo "$(date -u +%FT%TZ) rechecks stamped leaf $leaf"
