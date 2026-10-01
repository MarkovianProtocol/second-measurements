# Stream the Wild SBOMs corpus tar (Zenodo 14250103) and summarize every SBOM whose tool/creator mentions GitHub.
import sys, tarfile, gzip, json, collections
out=open("github_sboms.jsonl","w"); n=0; hits=0; tools=collections.Counter()
tf=tarfile.open(fileobj=sys.stdin.buffer, mode="r|")
for m in tf:
    if not m.isfile(): continue
    n+=1
    raw=tf.extractfile(m).read()
    try: raw=gzip.decompress(raw)
    except Exception: pass
    try: d=json.loads(raw)
    except Exception: continue
    if not isinstance(d,dict): continue
    ci=d.get("creationInfo") or {}
    creators=ci.get("creators") or []
    md=d.get("metadata") or {}
    t=md.get("tools")
    names=[]
    if isinstance(t,list): names=[(x.get("vendor","") or "")+" "+(x.get("name","") or "")+" "+(x.get("version","") or "") for x in t if isinstance(x,dict)]
    elif isinstance(t,dict): names=[(x.get("name","") or "")+" "+(x.get("version","") or "") for x in (t.get("components") or [])+(t.get("services") or []) if isinstance(x,dict)]
    label=" | ".join([str(c) for c in creators]+names)
    if "github" not in label.lower(): continue
    hits+=1; tools[label[:120]]+=1
    rels=d.get("relationships") or []
    rt=collections.Counter(r.get("relationshipType") for r in rels if isinstance(r,dict))
    deps=d.get("dependencies")
    out.write(json.dumps({"file":m.name,"label":label,"created":ci.get("created") or md.get("timestamp"),
      "spdx":d.get("spdxVersion"),"cdx":d.get("specVersion"),"packages":len(d.get("packages") or d.get("components") or []),
      "rel_types":dict(rt),"cdx_deps":len(deps) if isinstance(deps,list) else None,"name":d.get("name")})+"\n")
    if hits%500==0: print(n,hits,flush=True)
print("done",n,hits,flush=True)
json.dump(tools.most_common(60),open("github_tools.json","w"),indent=1)
