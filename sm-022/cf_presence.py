#!/Users/colinwinter/neo_env/bin/python3
"""SM-022 check: is a package in noarch/repodata.json in the FIRST write after the RSS build stamp that lists it, or earlier?
Every 3 min (until STOP): HEAD noarch/repodata.json.zst; on a new Last-Modified, GET it, decompress, and for every noarch
name+version not in the previous write, record it as added in this write. Joined later with versions.jsonl: a version's
first noarch repodata write = the Last-Modified of the snapshot that added it. Appends ~/cfpoll/presence.jsonl."""
import datetime as dt, json, os, urllib.request, zstandard
STOP = dt.datetime(2026, 10, 25, 4, 0, tzinfo=dt.timezone.utc)
now = dt.datetime.now(dt.timezone.utc)
if now > STOP: raise SystemExit
D = os.path.expanduser("~/cfpoll"); ST = os.path.join(D, "presence_state.json"); U = "https://conda.anaconda.org/conda-forge/noarch/repodata.json.zst"
H = {"User-Agent": "markovian-sm022 (hello@markovianprotocol.com)"}
st = json.load(open(ST)) if os.path.exists(ST) else {}
lm = urllib.request.urlopen(urllib.request.Request(U, method="HEAD", headers=H), timeout=30).headers.get("Last-Modified")
if lm == st.get("lm"): raise SystemExit
r = urllib.request.urlopen(urllib.request.Request(U, headers=H), timeout=300)
body = zstandard.ZstdDecompressor().stream_reader(r).read()
rd = json.loads(body); have = {(p["name"], p["version"]) for k in ("packages", "packages.conda") for p in rd.get(k, {}).values()}
PREV = os.path.join(D, "presence_prev.json"); keys = sorted(f"{n}=={v}" for n, v in have)
prev = set(json.load(open(PREV))) if os.path.exists(PREV) else None
added = None if prev is None else [k for k in keys if k not in prev]
json.dump(keys, open(PREV, "w"))
open(os.path.join(D, "presence.jsonl"), "a").write(json.dumps({"polled_at": now.isoformat(), "last_modified": lm, "cf_age": r.headers.get("Age"), "n_packages": len(have), "baseline": prev is None, "added": added}) + "\n")
st["lm"] = lm; json.dump(st, open(ST, "w"))
