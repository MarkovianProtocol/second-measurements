#!/usr/bin/env python3
"""Chainflip bounty deadline watch (18:38 UTC 23 Nov 2026). Every hour until 20:00 UTC 23 Nov, plus at 18:40 UTC, snapshot the
return addresses from chainflip.io/return and the attacker's BTC address; raw responses kept. Out: /home/mkv/chainflip_watch/"""
import json, os, time, urllib.request, datetime as dt
OUT = "/home/mkv/chainflip_watch"; os.makedirs(OUT, exist_ok=True)
BTC = {"return_btc": "bc1qux4nruxvwfxyv2n5d4fw0a363d4lxn5f45rats", "attacker_btc": "bc1qm777twlzmelyutungyfw65ykn2l5kn68e6v4g6"}
ETH = {"return_eth": "0x38a4BCC04f5136e6408589A440F495D7AD0F34DB"}
def get(u):
    for i in range(4):
        try: return json.loads(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"}), timeout=60).read())
        except Exception as e: err = str(e); time.sleep(10)
    return {"error": err}
def snap():
    now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"); row = {"at": now}
    for k, a in BTC.items():
        s = get(f"https://mempool.space/api/address/{a}"); row[k] = s
        c = s.get("chain_stats", {}); row[k + "_btc"] = (c.get("funded_txo_sum", 0) - c.get("spent_txo_sum", 0)) / 1e8; row[k + "_mempool_tx"] = s.get("mempool_stats", {}).get("tx_count")
    for k, a in ETH.items():
        s = get(f"https://eth.blockscout.com/api/v2/addresses/{a}"); row[k] = s; row[k + "_eth"] = int(s.get("coin_balance") or 0) / 1e18
        row[k + "_txs"] = get(f"https://eth.blockscout.com/api/v2/addresses/{a}/transactions")
    open(os.path.join(OUT, "snapshots.jsonl"), "a").write(json.dumps(row) + "\n")
    print(now, {k: v for k, v in row.items() if k.endswith(("_btc", "_eth", "_mempool_tx"))}, flush=True)
end = dt.datetime(2026, 11, 23, 20, 0, tzinfo=dt.timezone.utc); deadline = dt.datetime(2026, 11, 23, 18, 40, tzinfo=dt.timezone.utc); did_deadline = False
while dt.datetime.now(dt.timezone.utc) < end:
    snap(); n = dt.datetime.now(dt.timezone.utc)
    if not did_deadline and n < deadline and (deadline - n).total_seconds() < 3600:
        time.sleep(max(0, (deadline - n).total_seconds())); snap(); did_deadline = True; continue
    time.sleep(3600)
print("done", flush=True)
