D="$1"; UA="SecondMeasurements research (hello@markovianprotocol.com)"
cd "$D"
pypi() { # name version|latest
  if [ "$2" = latest ]; then j=$(curl -s -A "$UA" "https://pypi.org/pypi/$1/json"); else j=$(curl -s -A "$UA" "https://pypi.org/pypi/$1/$2/json"); fi
  v=$(printf '%s' "$j" | python3 -I -c 'import json,sys; d=json.load(sys.stdin); print(d["info"]["version"])')
  u=$(printf '%s' "$j" | python3 -I -c 'import json,sys; d=json.load(sys.stdin); us=d["urls"]; w=[x for x in us if x["filename"].endswith("none-any.whl")] or [x for x in us if x["packagetype"]=="sdist"] or [x for x in us if "manylinux" in x["filename"] and "x86_64" in x["filename"]]; print(w[0]["url"])')
  mkdir -p "pypi_$1_$v"; curl -s -A "$UA" -L -o "pypi_$1_$v/$(basename $u)" "$u"; echo "pypi $1 $v $(du -k pypi_$1_$v | cut -f1)k"
}
gem() { # name version|latest
  v=$2; [ "$v" = latest ] && v=$(curl -s -A "$UA" "https://rubygems.org/api/v1/versions/$1/latest.json" | python3 -I -c 'import json,sys; print(json.load(sys.stdin)["version"])')
  mkdir -p "gem_$1_$v"; curl -s -A "$UA" -L -o "gem_$1_$v/$1-$v.gem" "https://rubygems.org/downloads/$1-$v.gem"; echo "gem $1 $v $(du -k gem_$1_$v | cut -f1)k"
}
pypi certifi 2025.1.31; pypi certifi 2026.7.22; pypi certifi latest
pypi botocore 1.43.116; pypi botocore latest
pypi httplib2 0.32.0; pypi httplib2 latest
pypi virtualenv 21.14.12; pypi virtualenv latest
gem excon 1.7.3; gem excon latest
gem stripe 20.0.0; gem stripe latest
gem httpclient 2.9.0; gem honeybadger 6.9.3; gem honeybadger latest
gem aws-sdk-core 3.259.0; gem aws-sdk-core latest
gem grpc 1.84.0; gem grpc latest
mkdir -p go_gocertifi; curl -s -A "$UA" -L -o go_gocertifi/m.zip "https://proxy.golang.org/github.com/certifi/gocertifi/@v/v0.0.0-20210507211836-431795d63e8d.zip"; echo "go gocertifi $(du -k go_gocertifi|cut -f1)k"
