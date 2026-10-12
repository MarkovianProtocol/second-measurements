# Matches the 3 Oct and 8 Oct RRDP reads of registro.br and RIPE's publication service manifest by manifest (URI).
# Run from sm-014/: python3 compare_oct8.py
import json, datetime, sys
def load(p):
    d=json.load(open(p)); T=datetime.datetime.strptime(d["fetched"],"%Y-%m-%dT%H:%M:%SZ")
    m={x["uri"]:x for x in d["manifests"]}
    for x in m.values():
        nu=datetime.datetime.strptime(x["next_update"],"%Y-%m-%dT%H:%M:%SZ"); x["age_h"]=(T-nu).total_seconds()/3600
    return T,m
for name in ["registro_br","ripe_paas"]:
    T0,a=load(f"exhibits/rrdp_{name}_run2.json" if name=="registro_br" else f"exhibits/rrdp_{name}.json"); T1,b=load(f"exhibits/rrdp_{name}_2026-10-08.json")
    rec0={u for u,x in a.items() if 0<x["age_h"]<168}
    rec1={u for u,x in b.items() if 0<x["age_h"]<168}
    exp1={u for u,x in b.items() if x["age_h"]>0}
    still=[u for u in rec0 if u in exp1]; fresh=[u for u in rec0 if u in b and b[u]["age_h"]<=0]; gone=[u for u in rec0 if u not in b]
    new=[u for u in rec1 if u not in rec0]
    print(f"== {name}  3 Oct {T0:%d %b %H:%MZ} -> 8 Oct {T1:%d %b %H:%MZ}")
    print(f"recent(<7d) expired on 3 Oct: {len(rec0)}; of those on 8 Oct: still expired {len(still)}, reissued {len(fresh)}, removed from repo {len(gone)}")
    print(f"recent(<7d) expired on 8 Oct: {len(rec1)}; new since 3 Oct (not in the 3 Oct recent set): {len(new)}")
    if still:
        ages=sorted(b[u]["age_h"] for u in still); print("  still-expired ages h:", [round(x) for x in ages])
        # did the still-expired ones get a new manifest number (reissued then lapsed again)?
        renum=[u for u in still if a[u]["number"]!=b[u]["number"]]; print(f"  still-expired with a NEW manifest number (reissued then lapsed again): {len(renum)}")
    if new:
        ages=sorted(b[u]["age_h"] for u in new); print("  new ages h:", [round(x) for x in ages])
    if gone: print("  removed:", [u.split('/')[-1][:12] for u in gone])
    print()

# Directory check: a member that re-keys gets a fresh manifest under the same CA directory, so "not in the repo" splits two ways.
import json
def ca(u): return u.split("/repo/")[1].split("/")[0]
a=json.load(open("exhibits/rrdp_registro_br_run2.json")); b={m["uri"] for m in json.load(open("exhibits/rrdp_registro_br_2026-10-08.json"))["manifests"]}
T=datetime.datetime.strptime(a["fetched"],"%Y-%m-%dT%H:%M:%SZ")
gone=[m["uri"] for m in a["manifests"] if 0<(T-datetime.datetime.strptime(m["next_update"],"%Y-%m-%dT%H:%M:%SZ")).total_seconds()<7*86400 and m["uri"] not in b]
alive={ca(u) for u in b}
print("registro_br lapsed-on-3-Oct manifests no longer present:",len(gone),"| CA directory re-set up with a new manifest:",sum(ca(u) in alive for u in gone),"| CA directory entirely gone:",sum(ca(u) not in alive for u in gone))
