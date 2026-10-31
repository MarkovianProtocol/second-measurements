#!/usr/bin/env python3
# SM-022: every 3 min, the Last-Modified of each conda-forge subdir's repodata on the CDN (HEAD only), so each new file's
# "available for installation" time = the first repodata Last-Modified of its subdir in the cycle that includes it.
# Appends changes to ~/cfpoll/subdir_lm.jsonl. Companion to cf_poll.py.
import json, os, time, datetime, urllib.request
SUB = ["noarch", "linux-64", "linux-aarch64", "linux-ppc64le", "osx-64", "osx-arm64", "win-64"]
OUT = os.path.expanduser("~/cfpoll/subdir_lm.jsonl"); ST = os.path.expanduser("~/cfpoll/subdir_lm_state.json")
st = json.load(open(ST)) if os.path.exists(ST) else {}
now = datetime.datetime.now(datetime.timezone.utc).isoformat()
for s in SUB:
    for f in ("repodata.json.zst", "repodata.json"):
        try:
            r = urllib.request.urlopen(urllib.request.Request(f"https://conda.anaconda.org/conda-forge/{s}/{f}", method="HEAD",
                                       headers={"User-Agent": "markovian-sm022 (hello@markovianprotocol.com)"}), timeout=30)
            lm, age = r.headers.get("Last-Modified"), r.headers.get("Age")
            key = f"{s}/{f}"
            if st.get(key) != lm:
                open(OUT, "a").write(json.dumps({"polled_at": now, "subdir": s, "file": f, "last_modified": lm, "cf_age": age}) + "\n")
                st[key] = lm
        except Exception as e:
            open(OUT, "a").write(json.dumps({"polled_at": now, "subdir": s, "file": f, "error": str(e)[:120]}) + "\n")
json.dump(st, open(ST, "w"))
