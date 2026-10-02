# homebrew-core: does every bottle have a build-provenance attestation, and is it in Sigstore's transparency log?
# Claim (Sigstore blog, 2024-05-14): homebrew-core uses Sigstore "to cryptographically attest to all bottles built in
# the official Homebrew CI". Draws bottle files at random from formulae.brew.sh and asks GitHub's attestation API
# for each file's sha256, under homebrew-core's CI and then Homebrew's backfill signer
# (trailofbits/homebrew-brew-verify, used for bottles built before CI attestation). Needs gh, logged in.
# Usage: brew_attest.py [N] [seed]
import json, random, subprocess, sys, urllib.request, collections, time
N = int(sys.argv[1]) if len(sys.argv) > 1 else 300
F = json.load(urllib.request.urlopen("https://formulae.brew.sh/api/formula.json", timeout=120))
files = []
for f in F:
    st = (f.get("bottle") or {}).get("stable") or {}
    for plat, b in (st.get("files") or {}).items():
        files.append((f["name"], f["versions"]["stable"], st.get("rebuild", 0), plat, b["sha256"]))
print(f"formulae {len(F)}, bottle files {len(files)}", flush=True)
random.seed(int(sys.argv[2]) if len(sys.argv) > 2 else 20261001)
rows = []
for name, ver, rb, plat, sha in random.sample(files, N):
    r = subprocess.run(["gh", "api", f"repos/Homebrew/homebrew-core/attestations/sha256:{sha}"], capture_output=True, text=True)
    atts = json.loads(r.stdout).get("attestations", []) if r.returncode == 0 else []
    tlog, signers = 0, set()
    for a in atts:
        vm = a.get("bundle", {}).get("verificationMaterial", {})
        tlog += bool(vm.get("tlogEntries"))
        try:
            import base64
            st = json.loads(base64.b64decode(a["bundle"]["dsseEnvelope"]["payload"]))
            wf = st["predicate"]["buildDefinition"]["externalParameters"]["workflow"]
            signers.add(f'{wf.get("repository","")}/{wf.get("path","")}')
        except Exception: pass
    backfill = False
    if not atts:
        b = subprocess.run(["gh", "api", f"repos/trailofbits/homebrew-brew-verify/attestations/sha256:{sha}"], capture_output=True, text=True)
        backfill = b.returncode == 0 and bool(json.loads(b.stdout).get("attestations"))
    rows.append({"backfill": backfill, "formula": name, "version": ver, "rebuild": rb, "platform": plat, "sha256": sha,
                 "http": 200 if r.returncode == 0 else r.stderr.strip()[:60], "attestations": len(atts),
                 "with_tlog_entry": tlog, "workflows": sorted(signers)})
    time.sleep(0.4)
json.dump(rows, open("brew_sample.json", "w"), indent=1)
n = len(rows); has = [r for r in rows if r["attestations"]]
print(f"sampled {n}: attested {len(has)}; with a transparency-log entry {sum(r['with_tlog_entry'] > 0 for r in has)}")
print("workflows:", collections.Counter(w for r in has for w in r["workflows"]).most_common(5))
print(f"no core attestation: {n - len(has)}; of those backfill-attested: {sum(r['backfill'] for r in rows)}; neither: "
      f"{sum(1 for r in rows if not r['attestations'] and not r['backfill'])}")
print("unattested by platform:", collections.Counter(r["platform"] for r in rows if not r["attestations"]).most_common(10))
print("neither signer:", [(r["formula"], r["version"], r["platform"], r["sha256"][:12]) for r in rows if not r["attestations"] and not r["backfill"]])
