import json,collections,os,sys
EX=sys.argv[1]
def cna(v): return next((n['Value'] for n in v.get('Notes',[]) if n.get('Type')==8),'')
def first(v): return min((r['Date'][:10] for r in v.get('RevisionHistory',[]) or []),default='')
order=['Critical','Important','Moderate','Low']
def sev(v):
    s={t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==3}
    return next((o for o in order if o in s),'none')
def impact(v):
    s=[t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==0]
    return collections.Counter(s).most_common(1)[0][0] if s else 'none'
rel={x['ID']:x['InitialReleaseDate'][:10] for x in json.load(open(os.path.join(EX,'updates.json')))['value']}
# 1. November, CVEs first published on Patch Tuesday
d=json.load(open(os.path.join(EX,'cvrf_2026-Nov.json')))
ms=[v for v in d['Vulnerability'] if v.get('CVE','').startswith('CVE-') and cna(v)=='Microsoft']
P=[v for v in ms if first(v)==rel['2026-Nov']]
crit=[v for v in P if sev(v)=='Critical']
print('Nov PT-day',len(P),'critical',len(crit),'critical by impact',collections.Counter(impact(v) for v in crit).most_common())
print('Nov EoP',sum(impact(v)=='Elevation of Privilege' for v in P))
# 2. 2025 monthly MS-CNA on Patch Tuesday
row=[]
for m in ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']:
    p=os.path.join(EX,f'cvrf_2025-{m}.json')
    if not os.path.exists(p): continue
    dd=json.load(open(p)); r=rel.get(f'2025-{m}')
    n=sum(1 for v in dd['Vulnerability'] if v.get('CVE','').startswith('CVE-') and cna(v)=='Microsoft' and first(v)<=r)
    row.append((m,n))
print('2025 MS on PT',row,'mean',round(sum(n for _,n in row)/len(row),1))
# 3. KEV 2026 additions
k=json.load(open(os.path.join(EX,'kev.json'))); print('KEV version',k.get('catalogVersion'))
add=[v for v in k['vulnerabilities'] if v['dateAdded']>='2026-01-01']
print('KEV added 2026',len(add),'with CVE-2026 IDs',sum(v['cveID'].startswith('CVE-2026') for v in add))
