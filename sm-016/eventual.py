#!/usr/bin/env python3
"""For each reporting year: late facilities, facilities over a year late, and how many of each
have an EPCRA 313 formal case in ECHO filed in any fiscal year after the deadline year."""
import csv, glob, json, collections, sys
csv.field_size_limit(1 << 30)
fac = {}
for f in sorted(glob.glob('raw/fac_*.csv')):
    for r in csv.DictReader(open(f, newline='')):
        fac[r['tri_facility_id']] = r
cases = json.load(open('epcra313_cases.json')); cfacs = json.load(open('epcra313_case_facilities.json'))
reg2cases = collections.defaultdict(list)
for c in cfacs:
    reg2cases[c['REGISTRY_ID']].append(cases[c['ACTIVITY_ID']])
out = {}
for y in [int(a) for a in sys.argv[1:]]:
    late = json.load(open(f'late_forms_{y}.json'))
    byfac = collections.defaultdict(list)
    for x in late: byfac[x[1]].append(x)
    res = collections.Counter()
    for fid, xs in byfac.items():
        reg = fac.get(fid, {}).get('epa_registry_id'); cs = reg2cases.get(reg, [])
        after = [c for c in cs if int(c['FISCAL_YEAR']) >= y + 2]   # deadline is 1 July of y+1 = FY y+1; cases from FY y+2 on
        gov = fac.get(fid, {}).get('asgn_federal_ind') == '1' or 'US DEPARTMENT' in (fac.get(fid, {}).get('standardized_parent_company') or '')
        mx = max(x[4] for x in xs)
        res['late_facilities'] += 1; res['late_with_case_after'] += bool(after)
        res['federal_late'] += gov
        if mx > 365: res['over_365'] += 1; res['over_365_with_case_after'] += bool(after)
        if mx > 30: res['over_30'] += 1; res['over_30_with_case_after'] += bool(after)
    res['forms_late'] = len(late); res['forms_over_365'] = sum(1 for x in late if x[4] > 365)
    out[y] = dict(res); print(y, dict(res))
json.dump(out, open('eventual_enforcement.json', 'w'), indent=1)
