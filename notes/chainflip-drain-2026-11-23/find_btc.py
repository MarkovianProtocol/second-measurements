#!/usr/bin/env python3
"""Find the Chainflip BTC vault drain: scan Bitcoin blocks mined 21 Nov 2026 06:25-07:40 UTC (mempool.space Esplora API)
for any output between 122.80 and 122.87 BTC. Usage: find_btc.py > btc_candidates.json"""
import json, sys, time, urllib.request, datetime as dt
API = "https://mempool.space/api"
def g(p):
    for i in range(5):
        try: return json.loads(urllib.request.urlopen(urllib.request.Request(API + p, headers={"User-Agent": "Mozilla/5.0"}), timeout=60).read())
        except Exception as e: time.sleep(3 * (i + 1)); err = e
    raise err
lo, hi = dt.datetime(2026, 11, 21, 6, 25, tzinfo=dt.timezone.utc).timestamp(), dt.datetime(2026, 11, 21, 7, 40, tzinfo=dt.timezone.utc).timestamp()
h = g("/blocks/tip/height") if False else int(urllib.request.urlopen(urllib.request.Request(API + "/blocks/tip/height", headers={"User-Agent": "Mozilla/5.0"})).read())
blocks = []
while True:
    bs = g(f"/v1/blocks/{h}") if False else g(f"/blocks/{h}")
    for b in bs:
        if lo <= b["timestamp"] <= hi: blocks.append(b)
    if bs[-1]["timestamp"] < lo - 7200: break
    h = bs[-1]["height"] - 1
print("blocks in window:", [(b["height"], dt.datetime.utcfromtimestamp(b["timestamp"]).strftime("%H:%M"), b["tx_count"]) for b in blocks], file=sys.stderr)
hits = []
for b in blocks:
    for start in range(0, b["tx_count"], 25):
        for t in g(f"/block/{b['id']}/txs/{start}"):
            for n, o in enumerate(t["vout"]):
                if 12280000000 <= o["value"] <= 12287000000:
                    hits.append({"block": b["height"], "time": b["timestamp"], "txid": t["txid"], "vout": n, "value_btc": o["value"] / 1e8, "address": o.get("scriptpubkey_address"),
                                 "inputs": [(i.get("prevout") or {}).get("scriptpubkey_address") for i in t["vin"]], "in_value_btc": sum((i.get("prevout") or {}).get("value", 0) for i in t["vin"]) / 1e8})
                    print("HIT", hits[-1], file=sys.stderr)
json.dump(hits, sys.stdout, indent=1)
