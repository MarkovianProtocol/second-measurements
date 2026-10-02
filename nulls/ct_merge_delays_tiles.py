#!/usr/bin/env python3
"""Pull recent entries from tiled (static-ct) logs for shards our certificate pool can't reach
(2027h2, 2028h1, 2028h2), so every usable log can be given a fresh entry. Parses the data tile
format from c2sp.org/static-ct-api, fetches issuers by fingerprint, and writes tile_candidates.json:
[{notAfter, chain:[b64 der...], precert:bool, source}]."""
import json, struct, hashlib, base64, urllib.request, sys, datetime as dt
from cryptography import x509
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
SOURCES = {  # monitoring URLs
    "2027h2": ["https://mon.sycamore.ct.letsencrypt.org/2027h2/", "https://tuscolo2027h2.skylight.geomys.org/", "https://trastevere2027h2.skylight.geomys.org/"],
    "2028h1": ["https://tuscolo2028h1.skylight.geomys.org/", "https://gouda2028h1.mon.ct.ipng.ch/"],
    "2028h2": ["https://tuscolo2028h2.skylight.geomys.org/", "https://gouda2028h2.mon.ct.ipng.ch/"],
}
import gzip
def get(u):
    r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60); data = r.read()
    if r.headers.get("Content-Encoding") == "gzip" or data[:2] == b"\x1f\x8b": data = gzip.decompress(data)
    return data

def parse_tile(data):
    i, out = 0, []
    while i < len(data):
        ts = struct.unpack(">Q", data[i:i+8])[0]; et = struct.unpack(">H", data[i+8:i+10])[0]; i += 10
        if et == 0:
            n = int.from_bytes(data[i:i+3], "big"); cert = data[i+3:i+3+n]; i += 3 + n
            tbs = None
        else:
            i += 32  # issuer key hash
            n = int.from_bytes(data[i:i+3], "big"); tbs = data[i+3:i+3+n]; i += 3 + n
        n = struct.unpack(">H", data[i:i+2])[0]; i += 2 + n  # extensions
        if et == 1:
            n = int.from_bytes(data[i:i+3], "big"); cert = data[i+3:i+3+n]; i += 3 + n
        n = struct.unpack(">H", data[i:i+2])[0]; fps = [data[i+2+k:i+2+k+32] for k in range(0, n, 32)]; i += 2 + n
        out.append((ts, et, cert, fps))
    return out

cands = []; issuers = {}
for shard, urls in SOURCES.items():
    for base in urls:
        try:
            size = int(get(base + "checkpoint").decode().split("\n")[1])
            tile = size // 256; width = size % 256
            paths = []
            if tile > 0: paths.append(f"tile/data/{tile-1:03d}")
            if width: paths.append(f"tile/data/{tile:03d}.p/{width}")
            entries = []
            for p in paths: entries += parse_tile(get(base + p))
        except Exception as e:
            print(shard, base, "failed:", repr(e)[:80], file=sys.stderr); continue
        got = 0
        for ts, et, cert, fps in entries[-40:]:
            try:
                c = x509.load_der_x509_certificate(cert)
            except Exception: continue
            chain = [base64.b64encode(cert).decode()]
            ok = True
            for fp in fps:
                h = fp.hex()
                if h not in issuers:
                    try: issuers[h] = get(base + "issuer/" + h)
                    except Exception: ok = False; break
                chain.append(base64.b64encode(issuers[h]).decode())
            if not ok: continue
            cands.append({"notAfter": c.not_valid_after_utc.isoformat(), "chain": chain, "precert": et == 1, "source": base, "shard": shard,
                          "fingerprint": hashlib.sha256(cert).hexdigest()}); got += 1
        print(shard, base, "size", size, "entries parsed", len(entries), "candidates", got, file=sys.stderr)
# dedupe by certificate fingerprint
seen = set(); uniq = []
for c in cands:
    if c["fingerprint"] in seen: continue
    seen.add(c["fingerprint"]); uniq.append(c)
json.dump(uniq, open("tile_candidates.json", "w"))
print(len(uniq), "unique candidates", file=sys.stderr)
