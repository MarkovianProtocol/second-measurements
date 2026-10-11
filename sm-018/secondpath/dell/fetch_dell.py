#!/usr/bin/env python3 -I
"""Fetch CVE records (cveawg.mitre.org) and the Dell DSA KB page each cites.
usage: python3 -I fetch_dell.py <sample.json> <download_dir> <retrieval_log.tsv>
"""
import json, sys, os, time, re, urllib.request, urllib.error, gzip, hashlib
from datetime import datetime, timezone

sample, dl, logp = sys.argv[1:4]
os.makedirs(dl, exist_ok=True)
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
BROWSER = {
    'User-Agent': UA,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9', 'Accept-Encoding': 'gzip, deflate',
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"macOS"',
    'Sec-Fetch-Dest': 'document', 'Sec-Fetch-Mode': 'navigate', 'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1', 'Upgrade-Insecure-Requests': '1',
}
log = open(logp, 'a')
def rec(*f):
    log.write('\t'.join(str(x) for x in f) + '\n'); log.flush()

def get(url, headers, out):
    req = urllib.request.Request(url, headers=headers)
    t0 = datetime.now(timezone.utc).isoformat()
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
            if r.headers.get('Content-Encoding') == 'gzip':
                data = gzip.decompress(data)
            code = r.status; final = r.geturl()
    except urllib.error.HTTPError as e:
        data = e.read(); code = e.code; final = url
    except Exception as e:
        rec(t0, url, 'ERR', str(e), '', ''); return None, str(e)
    open(out, 'wb').write(data)
    rec(t0, url, code, len(data), hashlib.sha256(data).hexdigest(), final)
    return code, data

rows = json.load(open(sample))
for r in rows:
    cid = r['id']
    cvef = os.path.join(dl, cid + '.json')
    if not os.path.exists(cvef):
        get('https://cveawg.mitre.org/api/cve/' + cid, {'User-Agent': UA, 'Accept': 'application/json'}, cvef)
        time.sleep(1)
    try:
        j = json.load(open(cvef))
    except Exception as e:
        rec('', cid, 'BADJSON', str(e), '', ''); continue
    refs = [x.get('url', '') for x in j.get('containers', {}).get('cna', {}).get('references', [])]
    kb = [u for u in refs if re.search(r'dell\.com/support/kbdoc/', u)]
    if not kb:
        rec('', cid, 'NOKB', ';'.join(refs), '', ''); continue
    url = kb[0]
    m = re.search(r'/kbdoc/[^/]+/(\d+)', url)
    artid = m.group(1) if m else re.sub(r'\W', '_', url)[-40:]
    htmlf = os.path.join(dl, f'{cid}__{artid}.html')
    if os.path.exists(htmlf) and os.path.getsize(htmlf) > 5000:
        continue
    code, data = get(url, BROWSER, htmlf)
    if code == 403:
        time.sleep(5)
        get(url, BROWSER, htmlf)
    time.sleep(2.5)
