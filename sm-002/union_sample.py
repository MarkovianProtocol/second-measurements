# Uniform random sample of PRs matching ("Generated with Claude Code" OR "Co-Authored-By: Claude"),
# created 2025-02-24..2025-10-24, by rejection sampling over one-hour windows (search returns <=1000 per query).
import json, random, subprocess, time, datetime as dt
random.seed(20260930)
Q='is:pr "Generated with Claude Code" OR "Co-Authored-By: Claude"'
start=dt.datetime(2025,2,24); end=dt.datetime(2025,10,25)
hours=int((end-start).total_seconds()//3600); M=150; want=150
def search(a,b,per,page):
    q=f'{Q} created:{a:%Y-%m-%dT%H:%M:%S}Z..{b:%Y-%m-%dT%H:%M:%S}Z'
    for _ in range(5):
        r=subprocess.run(["gh","api","-X","GET","search/issues","-f",f"q={q}","-f",f"per_page={per}","-f",f"page={page}"],capture_output=True,text=True)
        if r.returncode==0: return json.loads(r.stdout)
        time.sleep(30)
    raise SystemExit(r.stderr)
out=[]; tries=0; over=0
while len(out)<want:
    a=start+dt.timedelta(hours=random.randrange(hours)); b=a+dt.timedelta(minutes=59,seconds=59)
    n=search(a,b,1,1)["total_count"]; tries+=1; time.sleep(2.1)
    if n>M: over+=1
    if n==0 or random.random()>n/M: continue
    k=random.randrange(n)
    it=search(a,b,1,k+1)["items"][0]; time.sleep(2.1)
    out.append({"url":it["html_url"],"created_at":it["created_at"],"hour_count":n})
    print(len(out),tries,n,it["html_url"],flush=True)
json.dump({"samples":out,"tries":tries,"hours_over_M":over,"M":M},open("union_sample.json","w"),indent=1)
