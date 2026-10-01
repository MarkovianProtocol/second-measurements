# Fetch GitHub's dependency-graph SBOM export (GET /repos/{o}/{r}/dependency-graph/sbom) for random popular repos
# per language and measure edges: DEPENDS_ON count and orphan ratio (packages with no DEPENDS_ON edge / packages).
import json, random, subprocess, time, collections
random.seed(20260930)
LANGS=["Go","JavaScript","TypeScript","Python","Java","Rust","PHP","Ruby","C#"]
def gh(*a):
    r=subprocess.run(["gh","api",*a],capture_output=True,text=True)
    return json.loads(r.stdout) if r.returncode==0 else None
rows=[]
for lang in LANGS:
    repos=set()
    while len(repos)<10:
        page=random.randint(1,10)
        res=gh("-X","GET","search/repositories","-f",f"q=language:\"{lang}\" stars:>500 archived:false","-f","sort=stars","-f","per_page=30","-f",f"page={page}")
        time.sleep(2.5)
        if res: repos.add(random.choice(res["items"])["full_name"])
    for full in sorted(repos):
        s=gh(f"repos/{full}/dependency-graph/sbom"); time.sleep(0.5)
        if not s: rows.append({"repo":full,"lang":lang,"error":True}); continue
        s=s["sbom"]; pk=[p["SPDXID"] for p in s.get("packages",[])]
        rel=s.get("relationships",[]); dep=[r for r in rel if r.get("relationshipType")=="DEPENDS_ON"]
        touched={r["spdxElementId"] for r in dep}|{r["relatedSpdxElement"] for r in dep}
        orphan=sum(1 for p in pk if p not in touched)
        rows.append({"repo":full,"lang":lang,"creators":s["creationInfo"]["creators"],"created":s["creationInfo"]["created"],
            "packages":len(pk),"depends_on":len(dep),"orphans":orphan,"rho":round(orphan/len(pk),3) if pk else None,
            "rel_types":dict(collections.Counter(r.get("relationshipType") for r in rel))})
        print(json.dumps(rows[-1]),flush=True)
json.dump(rows,open("github_live.json","w"),indent=1)
