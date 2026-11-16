import json,re,sys,csv
d=json.load(open(sys.argv[1]))
pat=re.compile(r'https://gitlab\.com/gitlab-org/gitlab/(?:-/)?(?:issues|work_items)/(\d+)')
w=csv.writer(sys.stdout,lineterminator='\n')
for v in d['vulnerabilities']:
    c=v['cve']; pub=c['published']
    iids=sorted({m.group(1) for r in c.get('references',[]) for m in [pat.match(r['url'])] if m})
    for i in iids: w.writerow([c['id'],pub,i])
