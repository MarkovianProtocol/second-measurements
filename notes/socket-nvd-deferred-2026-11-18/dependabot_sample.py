#!/usr/bin/env python3
"""Of the CVEs NVD lists as Deferred (no NVD CPE match), how many are also invisible to Dependabot? Dependabot alerts only on
REVIEWED GitHub advisories ("Dependabot doesn't create Dependabot alerts for unreviewed advisories", GitHub docs, SM-021).
Random sample of Deferred CVEs published 1 Jan - 27 Oct 2026 (data/nvd_2026-*.json.gz); for each, GitHub's global advisory
API is asked twice (type=reviewed, type=unreviewed) via the `gh` CLI. Writes data/dependabot_sample.json."""
import json, gzip, glob, random, subprocess, collections
V = []
for f in sorted(glob.glob("data/nvd_2026-*.json.gz")):
    V += [v["cve"] for v in json.load(gzip.open(f))]
deferred = sorted(c["id"] for c in V if c.get("vulnStatus") == "Deferred")
src = {c["id"]: c.get("sourceIdentifier") for c in V}
pick = random.Random(20261118).sample(deferred, 400)
def ask(cid, typ):
    out = subprocess.run(["gh", "api", "-X", "GET", "advisories", "-f", f"cve_id={cid}", "-f", f"type={typ}"], capture_output=True, text=True)
    try: return json.loads(out.stdout or "[]")
    except json.JSONDecodeError: return None
import os, sys
if "--from-saved" in sys.argv and os.path.exists("data/dependabot_sample.json"):
    rows = json.load(open("data/dependabot_sample.json")); pick = []
else:
    rows = []
for cid in pick:
    rev, unr = ask(cid, "reviewed"), ask(cid, "unreviewed")
    pk = [(v.get("package") or {}) for a in (rev or []) for v in (a.get("vulnerabilities") or [])]
    if rev is None or unr is None: cls = "error"
    elif rev and any(p.get("ecosystem") for p in pk): cls = "reviewed, names a package (Dependabot can alert)"
    elif rev: cls = "reviewed, no package"
    elif unr: cls = "unreviewed only (no Dependabot alert)"
    else: cls = "no GitHub advisory"
    rows.append({"cve": cid, "source": src.get(cid), "class": cls, "reviewed": [a.get("ghsa_id") for a in rev or []],
                 "unreviewed": [a.get("ghsa_id") for a in unr or []], "package": pk[:1]})
if pick: json.dump(rows, open("data/dependabot_sample.json", "w"), indent=0)
c = collections.Counter(r["class"] for r in rows)
print(f"Deferred CVEs, 1 Jan - 27 Oct 2026: {len(deferred):,}; random sample {len(rows)} (seed 20261118)")
for k, v in c.most_common(): print(f"  {k:52} {v:>4} ({100*v/len(rows):.1f}%)")
WP = {"audit@patchstack.com", "security@wordfence.com", "contact@wpscan.com"}   # WordPress-plugin CNAs
for name, S in (("WordPress-plugin CNAs", [r for r in rows if r["source"] in WP]), ("all other CNAs", [r for r in rows if r["source"] not in WP])):
    k = collections.Counter(r["class"] for r in S); alert = k["reviewed, names a package (Dependabot can alert)"]
    print(f"  {name}: {len(S)}; Dependabot can alert on {alert} ({100*alert/len(S):.1f}%)")
