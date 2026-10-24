#!/usr/bin/env python3
"""Tables for SM-013 from census.jsonl (census.py), ds_records.json and servfail_detail.json. Standard library only."""
import json, collections, sys
R = [json.loads(l) for l in open("census.jsonl")]
DS = json.load(open("ds_records.json"))
SF = {o["domain"]: o for o in json.load(open("servfail_detail.json"))}
INUSE = json.load(open("unsigned_inuse.json"))
out = {}
by = collections.OrderedDict()
for t in ["Federal - Executive", "Federal - Legislative", "Federal - Judicial", "Federal"]:
    rs = [r for r in R if r["type"] == t]
    by[t] = {"domains": len(rs), "ds": sum(r["ds"] for r in rs), "ad": sum(r["ad"] for r in rs),
             "dnskey_no_ds": sum(1 for r in rs if r["dnskey"] and not r["ds"])}
out["by_branch"] = by
out["all"] = {"domains": len(R), "ds": sum(r["ds"] for r in R)}
ex = [r for r in R if r["type"] == "Federal - Executive"]
orgs = collections.defaultdict(lambda: [0, 0])
for r in ex: orgs[r["org"]][0] += 1; orgs[r["org"]][1] += (not r["ds"])
out["exec_orgs"] = {"total": len(orgs), "fully_signed": sum(1 for v in orgs.values() if v[1] == 0),
                    "most_unsigned": sorted(((o, v[1], v[0]) for o, v in orgs.items() if v[1]), key=lambda x: -x[1])[:12]}
uns_ex = [r["domain"] for r in ex if not r["ds"]]
cls = collections.Counter()
for d in uns_ex:
    web, mx, ns = INUSE[d]; cls["apex address" if web else "mail only" if mx else "delegation only" if ns else "no records"] += 1
out["exec_unsigned_in_use"] = dict(cls)
out["validation"] = {"bogus": sorted(d for d, o in SF.items() if o["class"] == "bogus"),
                     "dead": sorted(d for d, o in SF.items() if o["class"] == "dead"),
                     "flaky": sorted(d for d, o in SF.items() if o["class"] == "flaky")}
algs = collections.Counter(); sha1_only = []; sha1_any = []; d1_only = []
for d, recs in DS.items():
    ka = {a for a, _ in recs}; kd = {t for _, t in recs}
    for a in ka: algs[a] += 1
    if ka & {5, 7}: sha1_any.append(d)
    if ka and ka <= {5, 7}: sha1_only.append(d)
    if kd and kd <= {1}: d1_only.append(d)
org = {r["domain"]: r["org"] for r in R}
out["ds_algorithms"] = dict(sorted(algs.items()))
out["rsasha1"] = {"any": len(sha1_any), "only": len(sha1_only), "only_by_org": collections.Counter(org[d] for d in sha1_only).most_common(),
                  "sha1_digest_only": sorted(d1_only)}
out["dnskey_no_ds"] = sorted(r["domain"] for r in R if r["dnskey"] and not r["ds"])
json.dump(out, open("tables.json", "w"), indent=1, default=list)
for k, v in out.items():
    if k in ("by_branch", "all", "exec_orgs", "exec_unsigned_in_use", "ds_algorithms"): print(k, json.dumps(v, default=list)[:600])
print("bogus", len(out["validation"]["bogus"]), "dead", len(out["validation"]["dead"]), "flaky", len(out["validation"]["flaky"]))
print("rsasha1 any/only", out["rsasha1"]["any"], out["rsasha1"]["only"], "| dnskey no ds", len(out["dnskey_no_ds"]))
