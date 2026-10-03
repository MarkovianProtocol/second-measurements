#!/usr/bin/env python3
"""For each lagging log: the filter's coverage cutoff (from the newest delta's coverage dump) and, by binary
search over the log's own get-entries, the first index whose timestamp is past that cutoff. Everything from
there to the tree head is what Mozilla's reader has not ingested. Writes exhibits/unread_entries.json."""
import json, urllib.request, re, base64, struct, time, datetime as dt, sys
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
logs = json.load(open("log_ids.json"))
cov = {}
for line in open("exhibits/coverage_all/20261002-1-default.filter.delta.txt"):
    m = re.match(r"\s*(\S+)=,\s*(\d+),\s*(\d+)", line)
    if m: cov[m.group(1) + "="] = int(m.group(3))
targets = {"Google 'Xenon2026h2' log": "https://ct.googleapis.com/logs/eu1/xenon2026h2/",
           "DigiCert 'Wyvern2026h2'": "https://wyvern.ct.digicert.com/2026h2/",
           "DigiCert 'Sphinx2026h2'": "https://sphinx.ct.digicert.com/2026h2/"}
def get(u):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
        except Exception: time.sleep(3 * (i + 1))
    raise RuntimeError(u)
def ts_at(base, idx):
    leaf = base64.b64decode(get(base + f"ct/v1/get-entries?start={idx}&end={idx}")["entries"][0]["leaf_input"])
    return struct.unpack(">Q", leaf[2:10])[0]
out = {}
for name, base in targets.items():
    lid = next(k for k, v in logs.items() if v["name"] == name); cut = cov[lid]
    sth = get(base + "ct/v1/get-sth"); size = sth["tree_size"]
    lo, hi = 0, size - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if ts_at(base, mid) < cut: lo = mid + 1
        else: hi = mid
    out[name] = {"log_id": lid, "tree_size": size, "sth_timestamp": dt.datetime.utcfromtimestamp(sth["timestamp"] / 1000).isoformat() + "Z",
                 "coverage_cutoff": dt.datetime.utcfromtimestamp(cut / 1000).isoformat() + "Z", "first_index_after_cutoff": lo,
                 "entries_after_cutoff": size - lo, "share_unread": round((size - lo) / size, 3)}
    print(f"{name[:26]:26} size {size:>13,}  cutoff {out[name]['coverage_cutoff'][:16]}  unread {size-lo:>13,} ({(size-lo)/size*100:.0f}%)", file=sys.stderr)
json.dump(out, open("exhibits/unread_entries.json", "w"), indent=1)
