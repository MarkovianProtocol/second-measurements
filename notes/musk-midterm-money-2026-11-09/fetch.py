# Pull every FEC Schedule A receipt itemized to contributor "MUSK, ELON" in the 2025-2026 cycle: processed (schedule_a) and raw e-filed (schedule_a/efile).
import json, os, sys, time, urllib.request, urllib.parse
KEY = open(os.path.expanduser('~/.secrets/fec_api_key.txt')).read().strip()
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
def get(path, params):
    url = 'https://api.open.fec.gov/v1' + path + '?' + urllib.parse.urlencode(params, doseq=True) + '&api_key=' + KEY
    for i in range(5):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'second-measurements/1'}), timeout=60))
        except Exception as e:
            print('retry', i, e, file=sys.stderr); time.sleep(5 * (i + 1))
    raise SystemExit('failed ' + path)
# processed: keyset pagination
rows, last = [], {}
while True:
    p = {'contributor_name': 'MUSK, ELON', 'two_year_transaction_period': 2026, 'per_page': 100, 'sort': '-contribution_receipt_date'}
    p.update(last)
    r = get('/schedules/schedule_a/', p); rows += r['results']
    li = r['pagination'].get('last_indexes')
    if not li or not r['results']: break
    last = li
json.dump(rows, open(os.path.join(OUT, 'schedule_a_processed.json'), 'w'), indent=0)
print('processed', len(rows))
# e-filed: page pagination
ef, page = [], 1
while True:
    r = get('/schedules/schedule_a/efile/', {'contributor_name': 'MUSK, ELON', 'min_date': '2025-01-01', 'per_page': 100, 'page': page, 'sort': '-contribution_receipt_date'})
    ef += r['results']
    if page >= r['pagination'].get('pages', 1) or not r['results']: break
    page += 1
json.dump(ef, open(os.path.join(OUT, 'schedule_a_efile.json'), 'w'), indent=0)
print('efile', len(ef))
