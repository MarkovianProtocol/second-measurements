# Summarise one x402 run directory (X402_DIR) into a history row; compares wallet groups with the August groups.
import collections, json, os, statistics, sys
D = sys.argv[1]; AUG = sys.argv[2] if len(sys.argv) > 2 else None
w = json.load(open(f"{D}/window.json"))
pay = collections.Counter(json.loads(l)["authorizer"] for l in open(f"{D}/authorizations.jsonl"))
tot = sum(pay.values()); amts = [json.loads(l)["usdc"] for l in open(f"{D}/settlements.jsonl")]
fl = sorted(json.load(open(f"{D}/fleets.json"))["fleets"], key=lambda x: -x["settlement_share"])[:2]
row = {"date": __import__("datetime").datetime.utcfromtimestamp(w["to_ts"]).strftime("%Y-%m-%d"),
       "blocks": f"{w['from_block']}-{w['to_block']}", "settlements": tot, "payers": len(pay),
       "busiest_payer_share": round(100 * pay.most_common(1)[0][1] / tot, 1),
       "value_usd": round(sum(amts), 2), "median_usd": round(statistics.median(amts), 4),
       "group_a": {"wallets": fl[0]["wallets"], "share": fl[0]["settlement_share"]},
       "group_b": {"wallets": fl[1]["wallets"], "share": fl[1]["settlement_share"]}}
if AUG:
    A = sorted(json.load(open(f"{AUG}/fleets.json"))["fleets"], key=lambda x: -x["settlement_share"])[:2]
    row["same_wallets_as_august"] = [len(set(a["addresses"]) & set(b["addresses"])) for a, b in zip(A, fl)]
print(json.dumps(row))
