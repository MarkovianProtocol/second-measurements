# For two PR samples, fetch commits, lines changed, merged state; report medians, shares, and tests.
import json, subprocess, re, statistics, math, sys
def info(url):
    m=re.match(r"https://github.com/([^/]+/[^/]+)/pull/(\d+)",url)
    r=subprocess.run(["gh","api",f"repos/{m[1]}/pulls/{m[2]}","--jq","{c:.commits,l:(.additions+.deletions),merged:.merged,state:.state,gw:(.body//\"\"|test(\"Generated with\")),ca:(.body//\"\"|test(\"Co-Authored-By: Claude\";\"i\"))}"],capture_output=True,text=True)
    return json.loads(r.stdout) if r.returncode==0 else None
def mw(a,b):  # Mann-Whitney U, normal approx, two-sided p
    allv=sorted([(v,0) for v in a]+[(v,1) for v in b]); ranks={}
    i=0
    while i<len(allv):
        j=i
        while j<len(allv) and allv[j][0]==allv[i][0]: j+=1
        for k in range(i,j): ranks.setdefault(k,(i+j+1)/2)
        i=j
    r1=sum(ranks[k] for k,(v,g) in enumerate(allv) if g==0); n1,n2=len(a),len(b)
    u=r1-n1*(n1+1)/2; mu=n1*n2/2; sd=math.sqrt(n1*n2*(n1+n2+1)/12)
    z=(u-mu)/sd; return z, math.erfc(abs(z)/math.sqrt(2))
def prop(k1,n1,k2,n2):
    p=(k1+k2)/(n1+n2); se=math.sqrt(p*(1-p)*(1/n1+1/n2)); z=(k1/n1-k2/n2)/se
    return z, math.erfc(abs(z)/math.sqrt(2))
S={}
S["aidev"]=[x["html_url"] for x in json.load(open("aidev_cc_sample.json"))]
S["union"]=[x["url"] for x in json.load(open("union_sample.json"))["samples"]]
R={k:[i for i in (info(u) for u in v) if i] for k,v in S.items()}
json.dump(R,open("compare_raw.json","w"))
for k,rows in R.items():
    c=[r["c"] for r in rows]; l=[r["l"] for r in rows]; closed=[r for r in rows if r["state"]=="closed"]
    print(f'{k}: n={len(rows)} median commits={statistics.median(c)} one-commit={sum(x==1 for x in c)}/{len(c)} median lines={statistics.median(l)} merged/closed={sum(r["merged"] for r in closed)}/{len(closed)} open={len(rows)-len(closed)} body GenWith={sum(r["gw"] for r in rows)} body CoAuth={sum(r["ca"] for r in rows)}')
a,b=R["aidev"],R["union"]
print("commits MW z,p", mw([r["c"] for r in a],[r["c"] for r in b]))
print("lines MW z,p", mw([r["l"] for r in a],[r["l"] for r in b]))
print("one-commit share z,p", prop(sum(r["c"]==1 for r in a),len(a),sum(r["c"]==1 for r in b),len(b)))
ca=[r for r in a if r["state"]=="closed"]; cb=[r for r in b if r["state"]=="closed"]
print("merge rate z,p", prop(sum(r["merged"] for r in ca),len(ca),sum(r["merged"] for r in cb),len(cb)))
