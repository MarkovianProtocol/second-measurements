import json, sys, collections, csv, os
EX = sys.argv[1]
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct']
rel = {}
for x in json.load(open(os.path.join(EX,'updates.json')))['value']:
    rel[x['ID']] = x['InitialReleaseDate'][:10]
rows = []
for m in months:
    d = json.load(open(os.path.join(EX, f'cvrf_2026-{m}.json')))
    for v in d.get('Vulnerability', []):
        cve = v.get('CVE','')
        cna = next((n['Value'] for n in v.get('Notes',[]) if n.get('Type')==8), '')
        sev = sorted({t.get('Description',{}).get('Value','') for t in v.get('Threats',[]) if t.get('Type')==3})
        revs = v.get('RevisionHistory',[]) or []
        first = min((r['Date'][:10] for r in revs), default='')
        rows.append(dict(month=m, cve=cve, cna=cna, severity='/'.join(sev), first_published=first,
                         patch_tuesday=rel[f'2026-{m}'], title=v.get('Title',{}).get('Value','')))
with open('rows.csv','w',newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
print('month total CVE-only  MS-CNA  MS-CNA_day1  MS-crit_day1  CNAs(non-MS top)')
tot = collections.Counter()
for m in months:
    r = [x for x in rows if x['month']==m]
    cves = [x for x in r if x['cve'].startswith('CVE-')]
    ms = [x for x in cves if x['cna']=='Microsoft']
    ms1 = [x for x in ms if x['first_published']<=x['patch_tuesday']]
    crit1 = [x for x in ms1 if 'Critical' in x['severity']]
    other = collections.Counter(x['cna'] for x in cves if x['cna']!='Microsoft').most_common(3)
    print(m, len(r), len(cves), len(ms), len(ms1), len(crit1), other)
    for k,val in [('all',len(cves)),('ms',len(ms)),('ms1',len(ms1))]: tot[k]+=val
print('YTD', dict(tot))
