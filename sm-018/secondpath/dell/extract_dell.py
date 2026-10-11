#!/usr/bin/env python3 -I
"""Compare CVE datePublic/datePublished with the Dell DSA advisory's own Revision History.
usage: python3 -I extract_dell.py <sample.json> <download_dir> <out.csv> <out.json>
"""
import json, sys, os, re, csv, html
from datetime import datetime, date, timezone

sample, dl, outcsv, outjson = sys.argv[1:5]
MON = {m: i for i, m in enumerate(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 1)}

def strip(s):
    s = re.sub(r'<[^>]+>', ' ', s); s = html.unescape(s); return re.sub(r'\s+', ' ', s).strip()

def parse_date(s):
    s = s.strip()
    m = re.match(r'(\d{4})-(\d{2})-(\d{2})', s)
    if m: return date(int(m[1]), int(m[2]), int(m[3]))
    m = re.match(r'(\d{1,2}) ([A-Z][a-z]{2})[a-z]* (\d{4})', s)
    if m and m[2] in MON: return date(int(m[3]), MON[m[2]], int(m[1]))
    m = re.match(r'([A-Z][a-z]{2})[a-z]* (\d{1,2}),? (\d{4})', s)
    if m and m[1] in MON: return date(int(m[3]), MON[m[1]], int(m[2]))
    m = re.match(r'(\d{1,2})/(\d{1,2})/(\d{4})', s)
    if m: return date(int(m[3]), int(m[1]), int(m[2]))
    return None

def revision_rows(t):
    """Return list of (rev, date_str, desc) from the Revision History table."""
    i = t.find('id="revisionhistory"')
    if i < 0: i = t.find('Revision History')
    if i < 0: return []
    seg = t[i:i+20000]
    tb = re.search(r'<table.*?</table>', seg, re.S)
    if not tb: return []
    rows = []
    for tr in re.findall(r'<tr.*?</tr>', tb.group(0), re.S):
        cells = [strip(c) for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', tr, re.S)]
        if len(cells) >= 2: rows.append(cells[:3] + [''] * (3 - len(cells[:3])))
    return rows

def props(t):
    i = t.find('id="lkb-properties-container"')
    s = strip(t[i:i+3000]) if i >= 0 else ''
    d = {}
    for k in ['Article Number', 'Article Type', 'Last Modified', 'Date Published', 'Last Published']:
        m = re.search(re.escape(k) + r':\s*([^:]*?)(?=\s[A-Z][a-z]+ [A-Z][a-z]+:|\sFind answers|$)', s)
        if m: d[k] = m[1].strip()
    return d

out = []
for r in json.load(open(sample)):
    cid = r['id']
    row = dict(id=cid, dsa_id='', kb_url='', datePublic=r['datePublic'], datePublished=r['datePublished'],
               datePublic_full='', datePublished_full='', advisory_initial_date='', advisory_last_modified='',
               ldjson_datePublished='', revisions='', delta_days='', match='', notes='')
    try:
        j = json.load(open(os.path.join(dl, cid + '.json')))
        cna = j['containers']['cna']
        row['datePublic_full'] = cna.get('datePublic', '')
        row['datePublished_full'] = j['cveMetadata'].get('datePublished', '')
        row['dateReserved'] = j['cveMetadata'].get('dateReserved', '')
    except Exception as e:
        row['notes'] = 'cve json unreadable: ' + str(e); out.append(row); continue
    refs = [x.get('url', '') for x in cna.get('references', [])]
    kb = [u for u in refs if 'dell.com/support/kbdoc/' in u]
    if not kb:
        row['notes'] = 'no dell kbdoc reference'; out.append(row); continue
    row['kb_url'] = kb[0]
    m = re.search(r'(dsa-\d{4}-\d{3,4})', kb[0], re.I); row['dsa_id'] = m[1].upper() if m else ''
    m = re.search(r'/kbdoc/[^/]+/(\d+)', kb[0]); artid = m[1] if m else ''
    hf = os.path.join(dl, f'{cid}__{artid}.html')
    if not os.path.exists(hf) or os.path.getsize(hf) < 5000:
        row['notes'] = 'kb page not fetched / blocked'; out.append(row); continue
    t = open(hf, encoding='utf-8', errors='replace').read()
    if not row['dsa_id']:
        m = re.search(r'(DSA-\d{4}-\d{3,4})', t); row['dsa_id'] = m[1] if m else ''
    m = re.search(r'"datePublished":"([^"]+)"', t); row['ldjson_datePublished'] = m[1] if m else ''
    p = props(t); row['advisory_last_modified'] = p.get('Last Modified', '')
    revs = revision_rows(t)
    row['revisions'] = ' | '.join('/'.join(x) for x in revs)
    init = None
    for rev, d, desc in revs:
        if re.search(r'initial', desc, re.I) or rev.strip() in ('1.0', '1', '1.00'):
            init = parse_date(d); 
            if init: break
    if init is None:
        dated = [parse_date(d) for _, d, _ in revs if parse_date(d)]
        if dated: init = min(dated); row['notes'] += 'initial=min(revision dates);'
    if init is None:
        row['notes'] += 'no revision history date found;'; row['match'] = 'UNREADABLE'; out.append(row); continue
    row['advisory_initial_date'] = init.isoformat()
    # revision that names this CVE id (CVE added after initial release)
    named = [parse_date(d) for _, d, desc in revs if cid in desc and parse_date(d)]
    row['advisory_rev_naming_cve'] = min(named).isoformat() if named else ''
    rsv = datetime.fromisoformat(row['dateReserved'].replace('Z', '+00:00')).date()
    row['reserved_after_initial'] = 'Y' if rsv > init else ''
    if rsv > init: row['notes'] += f'CVE reserved {rsv} after advisory 1.0 {init}: cannot have been in initial release;'
    pub = datetime.fromisoformat(row['datePublished_full'].replace('Z', '+00:00')).date()
    dp = datetime.fromisoformat(row['datePublic_full'].replace('Z', '+00:00'))
    row['delta_days'] = (pub - init).days
    dpd = dp.date()
    diff = (dpd - init).days
    if dp.hour >= 12: row['datePublic_local_IST'] = (dpd + __import__('datetime').timedelta(days=1)).isoformat()
    else: row['datePublic_local_IST'] = dpd.isoformat()
    if dpd < rsv: row['notes'] += f'datePublic {dpd} precedes dateReserved {rsv};'
    if diff == 0: row['match'] = 'EXACT'
    elif diff == -1 and dp.hour >= 12: row['match'] = 'EXACT_TZ'   # datePublic is previous UTC day evening = same local day
    elif abs(diff) <= 1: row['match'] = 'WITHIN_1D'
    else: row['match'] = 'MISMATCH'
    row['datePublic_minus_advisory_days'] = diff
    out.append(row)

cols = ['id','dsa_id','datePublic','datePublished','advisory_initial_date','delta_days','match','datePublic_minus_advisory_days','datePublic_local_IST','dateReserved','reserved_after_initial','advisory_rev_naming_cve',
        'datePublic_full','datePublished_full','advisory_last_modified','ldjson_datePublished','revisions','kb_url','notes']
with open(outcsv, 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols, extrasaction='ignore'); w.writeheader()
    for r in out: w.writerow({k: r.get(k, '') for k in cols})
json.dump(out, open(outjson, 'w'), indent=1)
import collections
print('n', len(out)); print(collections.Counter(r['match'] for r in out))
for r in out:
    print(r['id'], r['dsa_id'], 'public', r['datePublic_full'][:16], 'adv', r['advisory_initial_date'], 'pub', r['datePublished'], 'd', r['delta_days'], r['match'], '|', r['revisions'][:90], '|', r['notes'])
