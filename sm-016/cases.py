#!/usr/bin/env python3
"""EPCRA 313 formal enforcement cases from ECHO's case download: count and federal penalties by fiscal year;
writes epcra313_cases.json and epcra313_case_facilities.json for eventual.py."""
import csv, io, json, collections
csv.field_size_limit(1 << 30)
def rd(f): return csv.DictReader(io.StringIO(open(f, encoding='latin-1').read().replace('\x00', '')))
ids = set(r['ACTIVITY_ID'] for r in rd('echo/CASE_LAW_SECTIONS.csv') if r['STATUTE_CODE'] == 'EPCRA' and r['LAW_SECTION_CODE'].strip().startswith('313'))
cases = {r['ACTIVITY_ID']: r for r in rd('echo/CASE_ENFORCEMENTS.csv') if r['ACTIVITY_ID'] in ids}
pen = collections.defaultdict(float); n = collections.Counter(c['FISCAL_YEAR'] for c in cases.values())
for r in rd('echo/CASE_PENALTIES.csv'):
    if r['ACTIVITY_ID'] in cases: pen[cases[r['ACTIVITY_ID']]['FISCAL_YEAR']] += float(r['FED_PENALTY'] or 0)
print('EPCRA 313 cases', len(cases)); print({y: (n[y], round(pen[y])) for y in sorted(n) if y >= '2015'})
keep = ('FISCAL_YEAR', 'CASE_NUMBER', 'CASE_NAME', 'ACTIVITY_TYPE_DESC', 'ACTIVITY_STATUS_DESC', 'ACTIVITY_STATUS_DATE', 'TOTAL_PENALTY_ASSESSED_AMT', 'REGION_CODE', 'STATE_CODE')
json.dump({k: {kk: v[kk] for kk in keep} for k, v in cases.items()}, open('epcra313_cases.json', 'w'), indent=0)
json.dump([r for r in rd('echo/CASE_FACILITIES.csv') if r['ACTIVITY_ID'] in cases], open('epcra313_case_facilities.json', 'w'), indent=0)
