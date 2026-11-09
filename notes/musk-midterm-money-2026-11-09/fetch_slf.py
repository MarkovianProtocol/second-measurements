# Senate Leadership Fund (C00571703) independent expenditures, 2026 cycle: processed Schedule E + 24/48-hour e-filed reports, by state/candidate.
import json, os, sys, time, urllib.request, urllib.parse
KEY = open(os.path.expanduser('~/.secrets/fec_api_key.txt')).read().strip()
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
def get(path, params):
    url = 'https://api.open.fec.gov/v1' + path + '?' + urllib.parse.urlencode(params, doseq=True) + '&api_key=' + KEY
    for i in range(5):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'second-measurements/1'}), timeout=90))
        except Exception as e: print('retry', i, e, file=sys.stderr); time.sleep(5 * (i + 1))
    raise SystemExit('failed')
rows, last = [], {}
while True:
    p = {'committee_id': 'C00571703', 'cycle': 2026, 'per_page': 100, 'sort': '-expenditure_date', 'is_notice': 'false'}; p.update(last)
    r = get('/schedules/schedule_e/', p); rows += r['results']
    li = r['pagination'].get('last_indexes')
    if not li or not r['results']: break
    last = li
json.dump(rows, open(os.path.join(OUT, 'slf_schedule_e_processed.json'), 'w'), indent=0); print('processed', len(rows))
ef, page = [], 1
while True:
    r = get('/schedules/schedule_e/efile/', {'committee_id': 'C00571703', 'min_date': '2025-01-01', 'per_page': 100, 'page': page})
    ef += r['results']
    if page >= r['pagination'].get('pages', 1) or not r['results']: break
    page += 1
json.dump(ef, open(os.path.join(OUT, 'slf_schedule_e_efile.json'), 'w'), indent=0); print('efile', len(ef))
