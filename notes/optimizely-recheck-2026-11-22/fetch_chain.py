#!/usr/bin/env python3
"""Save the attacker wallets' public histories (addresses from Report URI's 16 Nov 2026 post) from public explorers into chain/."""
import json, os, urllib.request
UA = {"User-Agent": "Mozilla/5.0", "Content-Type": "application/json"}
G = {
 "btc_addr.json": "https://blockstream.info/api/address/19g9rZcPeiz8rUvyWpTRyXXhPnjsWrc3kW",
 "btc_txs.json": "https://blockstream.info/api/address/19g9rZcPeiz8rUvyWpTRyXXhPnjsWrc3kW/txs",
 "ltc_addr.json": "https://litecoinspace.org/api/address/ltc1q3wp7g6ds0ggg6fl6kncpa4sepn0q3qfacgred5",
 "ltc_txs.json": "https://litecoinspace.org/api/address/ltc1q3wp7g6ds0ggg6fl6kncpa4sepn0q3qfacgred5/txs",
 "trx_account.json": "https://apilist.tronscanapi.com/api/account?address=THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa",
 "trx_trc20.json": "https://apilist.tronscanapi.com/api/token_trc20/transfers?limit=50&start=0&relatedAddress=THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa",
 "trx_trx.json": "https://apilist.tronscanapi.com/api/transfer?limit=50&start=0&address=THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa",
 "eth_txs.json": "https://eth.blockscout.com/api/v2/addresses/0xC4026b06D82b0F0B363eda0642D61CfbDc17884e/transactions",
 "eth_tokens.json": "https://eth.blockscout.com/api/v2/addresses/0xC4026b06D82b0F0B363eda0642D61CfbDc17884e/token-transfers",
 "ton_txs.json": "https://toncenter.com/api/v2/getTransactions?address=UQAgM1VqSZQiJLSG5w-ovurq5CZdxLEK3_7CMmwALTA5e09p&limit=50",
 "bch.json": "https://api.blockchair.com/bitcoin-cash/dashboards/address/qzkaaf8n6grmpr0d9lx8xutn3r9lk722f566hhpe58",
 "doge.json": "https://api.blockchair.com/dogecoin/dashboards/address/DBEGrxRF7KMSuhTS4c1MFviStU6efdMnu5",
}
P = {"sol_sigs.json": ("https://api.mainnet-beta.solana.com", {"jsonrpc": "2.0", "id": 1, "method": "getSignaturesForAddress", "params": ["FVtL8NMYS9PA1v3HE67XUGCtGA9JaZUvqav2fU2LrV5n", {"limit": 50}]})}
for f, u in G.items():
    try: open(f, "wb").write(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40).read()); print("ok", f)
    except Exception as e: print("FAIL", f, e)
for f, (u, b) in P.items():
    try: open(f, "wb").write(urllib.request.urlopen(urllib.request.Request(u, data=json.dumps(b).encode(), headers=UA), timeout=40).read()); print("ok", f)
    except Exception as e: print("FAIL", f, e)
# Fallbacks (tronscan 429, blockchair 430 on 22 Nov)
G2 = {
 "trx_trc20.json": "https://api.trongrid.io/v1/accounts/THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa/transactions/trc20?limit=100",
 "trx_txs.json": "https://api.trongrid.io/v1/accounts/THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa/transactions?limit=100",
 "trx_account.json": "https://api.trongrid.io/v1/accounts/THvs6p56XkUiMkJeSc51cAP64u2RsTYqxa",
 "bch.json": "https://api.haskoin.com/bch/address/bitcoincash:qzkaaf8n6grmpr0d9lx8xutn3r9lk722f566hhpe58/balance",
 "doge.json": "https://api.blockcypher.com/v1/doge/main/addrs/DBEGrxRF7KMSuhTS4c1MFviStU6efdMnu5",
}
for f, u in G2.items():
    if os.path.exists(f) and os.path.getsize(f) > 0: continue
    try: open(f, "wb").write(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40).read()); print("ok", f)
    except Exception as e: print("FAIL", f, e)
