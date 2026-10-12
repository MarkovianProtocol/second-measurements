#!/usr/bin/env python3
"""For the 30 registro.br publication points whose manifests lapsed before 3 Oct
(registro_br_affected.json / registro_br_expired_detail.json), count the ROA
objects the rpki-client console dump (build 2026-10-02T23:26Z) records under
each, by validation state. Answers: does a Failed manifest mean the VRPs were
withdrawn in the same dump, or only the fetch flagged?

Reads console_roas_registro_br.json.gz (every ROA record in the dump whose file
sits under rpki-repo.registro.br, 19,091 records) and
console_manifests_registro_br.json (every manifest record there). Both are in
the exhibits folder. Set DUMP=path/to/console_dump.json.gz to read the full
dump instead (114 MB, sha256 5bae2de3...e82d, not published)."""
import gzip, json, os, collections, sys
here = os.path.dirname(os.path.abspath(__file__))
def load(name):
    for n in (name, name + '.gz'):
        p = os.path.join(here, n)
        if os.path.exists(p): return json.load(gzip.open(p, 'rt') if n.endswith('.gz') else open(p))
    sys.exit('missing ' + name)
aff = load('registro_br_affected.json') if os.path.exists(os.path.join(here, 'registro_br_affected.json')) else load('registro_br_expired_detail.json')
mans = aff.get('manifests') or aff.get('expired_within_7d') if isinstance(aff, dict) else aff
dirs = {os.path.dirname(m['uri'].replace('rsync://', '')): m for m in mans}
roas = collections.defaultdict(collections.Counter); vrps = collections.Counter(); mstate = {}
dump = os.environ.get('DUMP')
if dump:
    recs = (json.loads(l) for l in gzip.open(dump, 'rt'))
else:
    recs = list(load('console_roas_registro_br.json')) + list(load('console_manifests_registro_br.json'))
for o in recs:
    d = os.path.dirname(o.get('file') or '')
    if d not in dirs: continue
    if o.get('type') == 'roa':
        roas[d][o.get('validation')] += 1; vrps[o.get('validation')] += len(o.get('vrps') or [])
    elif o.get('type') == 'manifest':
        mstate[d] = o.get('validation')
tot = collections.Counter()
for d, m in sorted(dirs.items(), key=lambda kv: kv[1]['next_update']):
    print(f"{m['next_update']}  manifest={mstate.get(d) or 'absent':7}  roas={dict(roas[d]) or '{}'}"); tot.update(roas[d])
print('manifests:', dict(collections.Counter(mstate.get(d) or 'absent' for d in dirs)))
print('roa objects under them:', dict(tot) or '{}', ' vrps:', dict(vrps) or '{}')
