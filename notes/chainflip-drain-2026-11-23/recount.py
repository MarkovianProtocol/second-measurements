#!/usr/bin/env python3
"""Every number in the Chainflip note, from the explorer responses saved in chain/ (Blockscout for Ethereum, mempool.space for
Bitcoin) and the deadline-watch snapshots. Usage: recount.py  (run from the note's folder)"""
import json, glob, collections
D = lambda f: json.load(open("chain/" + f))
tx = D("eth_drain_tx.json"); toks = D("eth_drain_tokens.json")["items"]; intl = D("eth_drain_internal.json")["items"]
A = "0x7d14a719072DA80076b4edcec3e3401209d21Eaf".lower()
print("ETH drain tx", tx["hash"], tx["timestamp"], tx.get("method"), "to", tx["to"]["hash"])
print("  ETH to attacker", sum(int(x["value"]) for x in intl if (x.get("to") or {}).get("hash", "").lower() == A) / 1e18)
for t in toks: print("  ", t["token"]["symbol"], int(t["total"]["value"]) / 10 ** int(t["total"]["decimals"]))
hop2 = "0xfd24197eF8503dd5dd18F30C7B86A77910D3B080".lower()
rows = D("eth_hop2_internal_all.json"); dep = [int(r["value"]) / 1e18 for r in rows if r["from"].lower().startswith("0xca11") and int(r["value"]) > 0]
print("Tornado deposits", len(dep), "total ETH", sum(dep), dict(collections.Counter(dep)), "to", {r["to"] for r in rows if r["from"].lower().startswith("0xca11") and int(r["value"]) > 0})
ins = [t for t in D("eth_hop2_txs.json") if t["to"] and t["to"]["hash"].lower() == hop2]
print("into consolidation address (direct txs)", [(t["timestamp"][:19], int(t["value"]) / 1e18) for t in ins])
for f in sorted(glob.glob("chain/eth_tx_0x*_internal.json")):
    print("  ", f[10:22], [(r["to"]["hash"][:10], int(r["value"]) / 1e18) for r in json.load(open(f))["items"] if int(r["value"]) > 0 and r["to"]["hash"].lower() == hop2])
for name in ["hop1", "hop2", "vault"]:
    a = D(f"btc_{name}_addr.json"); c = a["chain_stats"]; print("BTC", name, a["address"], "funded", c["funded_txo_sum"] / 1e8, "spent", c["spent_txo_sum"] / 1e8)
h = D("btc_candidates.json") if False else json.load(open("chain/btc_candidates.json"))
for x in h: print("  BTC hit", x["txid"], x["block"], x["value_btc"], "->", x["address"])
m = D("btc_hop2_message_tx.json"); o = [v for v in m["vout"] if v["scriptpubkey_type"] == "op_return"][0]["scriptpubkey"]
print("OP_RETURN", bytes.fromhex(o[4:] if o[2:4] != "4c" else o[6:]).decode())
snaps = [json.loads(l) for l in open("chain/deadline_watch_snapshots.jsonl")]
print("deadline snapshots", len(snaps), snaps[0]["at"], "->", snaps[-1]["at"])
for s in snaps:
    if s["at"].startswith("2026-11-23T18:40") or s is snaps[-1]: print("  ", s["at"], "return BTC", s["return_btc_btc"], "return ETH", s["return_eth_eth"], "attacker BTC", s["attacker_btc_btc"])
