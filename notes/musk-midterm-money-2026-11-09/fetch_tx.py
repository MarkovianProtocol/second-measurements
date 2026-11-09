# Texas Senate pulls: independent expenditures naming Paxton (S6TX00388) or Talarico (S6TX00479) from 24/48-hour e-filings; Texas PAC (C00960211) receipts; candidate totals.
import json, os, sys, time, urllib.request, urllib.parse
KEY = open(os.path.expanduser('~/.secrets/fec_api_key.txt')).read().strip()
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
def get(path, params):
    u = 'https://api.open.fec.gov/v1' + path + '?' + urllib.parse.urlencode(params, doseq=True) + '&api_key=' + KEY
    for i in range(5):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'second-measurements/1'}), timeout=90))
        except Exception as e: print('retry', i, e, file=sys.stderr); time.sleep(5 * (i + 1))
    raise SystemExit('failed')
def pages(path, params):
    out, page = [], 1
    while True:
        r = get(path, dict(params, per_page=100, page=page)); out += r['results']
        if page >= r['pagination'].get('pages', 1) or not r['results']: return out
        page += 1
ie = []
for cid in ('S6TX00388', 'S6TX00479'): ie += pages('/schedules/schedule_e/efile/', {'candidate_id': cid, 'min_date': '2025-01-01'})
json.dump(ie, open(os.path.join(OUT, 'tx_senate_ie_efile.json'), 'w'), indent=0)
json.dump(pages('/schedules/schedule_a/efile/', {'committee_id': 'C00960211', 'min_date': '2025-01-01'}), open(os.path.join(OUT, 'texas_pac_receipts_efile.json'), 'w'), indent=0)
json.dump(get('/candidate/S6TX00388/totals/', {'cycle': 2026}), open(os.path.join(OUT, 'paxton_candidate_totals.json'), 'w'))
json.dump(get('/candidate/S6TX00479/totals/', {'cycle': 2026}), open(os.path.join(OUT, 'talarico_candidate_totals.json'), 'w'))
print('ok')
