"""List Forum UDRP decisions by decision date via webapi.adrforum.com SearchDecisions/DoAdvancedSearch (read-only search POST)."""
import json,urllib.request,time,calendar,collections
base=json.load(open('dto_default.json'))
allrows={}
for y in (2025,2026):
    for m in range(1,13):
        if (y,m)>(2026,10): break
        last=calendar.monthrange(y,m)[1]
        d=dict(base,ruleset="UDRP",decisionDateStart=f"{y}-{m:02d}-01T00:00:00",decisionDateEnd=f"{y}-{m:02d}-{last}T23:59:59")
        req=urllib.request.Request("https://webapi.adrforum.com/api/SearchDecisions/DoAdvancedSearch",data=json.dumps(d).encode(),headers={'Content-Type':'application/json','User-Agent':'Mozilla/5.0','Origin':'https://www.adrforum.com'})
        rows=json.load(urllib.request.urlopen(req,timeout=120))
        json.dump(rows,open(f'listing/{y}-{m:02d}.json','w'))
        st=collections.Counter(r['status'] for r in rows)
        print(y,m,len(rows),dict(st))
        for r in rows: allrows[r['caseNumber']]=r
        time.sleep(1.5)
json.dump(list(allrows.values()),open('listing/all_udrp_2025_2026.json','w'),indent=0)
print('unique',len(allrows))
