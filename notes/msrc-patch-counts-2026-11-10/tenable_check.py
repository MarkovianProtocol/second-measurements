import json,collections,sys
d=json.load(open('cvrf_2026-Nov.json'))
pt=[x for x in json.load(open('updates.json'))['value'] if x['ID']=='2026-Nov'][0]; print('release',pt['InitialReleaseDate'],'current',pt['CurrentReleaseDate'])
prod={p['ProductID']:p['Value'] for p in d['ProductTree']['FullProductName']}
V=d['Vulnerability']; print('entries',len(V))
def cna(v): return next((n['Value'] for n in v.get('Notes',[]) if n.get('Type')==8),'')
def first(v): return min((r['Date'][:10] for r in v.get('RevisionHistory',[]) or []),default='')
ms=[v for v in V if v.get('CVE','').startswith('CVE-') and cna(v)=='Microsoft']
print('MS-CNA CVEs',len(ms),'first published on PT day',sum(first(v)==pt['InitialReleaseDate'][:10] for v in ms))
order=['Critical','Important','Moderate','Low']
def sev(v):
    s={t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==3}
    return next((o for o in order if o in s),'none')
def impact(v):
    s=[t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==0]
    return collections.Counter(s).most_common(1)[0][0] if s else 'none'
print('severity (highest)',collections.Counter(sev(v) for v in ms))
ic=collections.Counter(impact(v) for v in ms); n=len(ms)
for k,c in ic.most_common(6): print(' impact',k,c,round(100*c/n,1))
ex=[v['CVE'] for v in ms if any('Exploited:Yes' in t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==1)]
print('exploited:yes',ex)
pd=[v['CVE'] for v in ms if any('Publicly Disclosed:Yes' in t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==1)]
print('publicly disclosed',len(pd),pd[:5])
# product families via Notes type? use 'Tag' note (Type 7?) 
tags=collections.Counter()
for v in ms:
    t=[n['Value'] for n in v.get('Notes',[]) if n.get('Title')=='Tag' or n.get('Type')==7]
    tags[t[0] if t else 'none']+=1
print('distinct tags',len(tags)); print(tags.most_common(12))
print('all CVE entries incl third-party',sum(v.get('CVE','').startswith('CVE-') for v in V))
