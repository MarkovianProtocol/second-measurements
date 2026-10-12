#!/usr/bin/env python3
"""Routinator 0.15.2 run of 2026-10-03 (fresh install, five TALs; log: routinator.log).
Reads its extended VRP export (vrps_ext.json, 491 MB, not published; pass the path as
argv[1]) and reports: total VRPs, VRPs whose source ROA sits under any of the 30 lapsed
registro.br publication points, and how many of the 135 (prefix, ASN) pairs named in
those manifests appear anywhere in the export."""
import json, os, sys
here = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(sys.argv[1]))
det = json.load(open(os.path.join(here, 'registro_br_expired_detail.json')))['expired_within_7d']
dirs = {os.path.dirname(m['uri'].replace('rsync://', '')) for m in det}
pairs = set()
for m in det:
    for r in m.get('roas', []):
        p, a = r.split(' => '); pairs.add((p.split('-')[0], int(a)))
print('generated', d['metadata'].get('generatedTime'), 'vrps', len(d['roas']))
under = 0; seen = set()
for v in d['roas']:
    srcs = v.get('source') or []
    for s in srcs:
        u = (s.get('uri') or '').replace('rsync://', '')
        if os.path.dirname(u) in dirs: under += 1
    if (v['prefix'], int(v['asn'].lstrip('AS'))) in pairs: seen.add((v['prefix'], v['asn']))
reg = sum(1 for v in d['roas'] if any('rpki-repo.registro.br' in (s.get('uri') or '') for s in (v.get('source') or [])))
print('vrps sourced from rpki-repo.registro.br (any point):', reg, '  <- the run did fetch the repository')
print('vrps sourced under the 30 lapsed points:', under)
print('of the 135 prefix/ASN pairs in the lapsed manifests, present in the export:', len(seen), 'of', len(pairs))
