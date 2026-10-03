#!/usr/bin/env python3
"""GitHub: "Public repositories that generate artifact attestations use the Sigstore Public Good Instance. A copy
of the generated Sigstore bundle is stored with GitHub and is also written to an immutable transparency log that
is publicly readable on the internet."

For each candidate public repository: the latest release's assets (with sha256 digests), the attestations GitHub
holds for each digest, and for each bundle: whether it carries a transparency-log entry (tlogEntries), which log,
or only an RFC 3161 timestamp; which Fulcio issued the certificate; when. Output: attestations.json
"""
import json, subprocess, sys, base64, time, collections, os
from cryptography import x509
import cramjam

def gh(path, raw=False):
    r = subprocess.run(["gh", "api", path], capture_output=True)
    if r.returncode != 0: return None
    return r.stdout if raw else json.loads(r.stdout)

repos = [l.strip() for l in open("candidates.txt") if l.strip()]
N = int(sys.argv[1]) if len(sys.argv) > 1 else len(repos)
out = []; seen_digest = set()
for i, repo in enumerate(repos[:N]):
    rel = gh(f"repos/{repo}/releases/latest")
    if not rel: continue
    assets = [a for a in rel.get("assets", []) if a.get("digest")]
    if not assets: continue
    found = 0
    for a in assets[:6]:
        d = a["digest"]
        if d in seen_digest: continue
        seen_digest.add(d)
        att = gh(f"repos/{repo}/attestations/{d}")
        if not att or not att.get("attestations"): continue
        for at in att["attestations"][:3]:
            b = at.get("bundle")
            if b is None and at.get("bundle_url"):
                raw = subprocess.run(["curl", "-sL", at["bundle_url"]], capture_output=True).stdout
                try: b = json.loads(raw)
                except Exception:
                    try: b = json.loads(bytes(cramjam.snappy.decompress_raw(raw)))
                    except Exception: b = None
            if not b: continue
            vm = b.get("verificationMaterial", {})
            tl = vm.get("tlogEntries", [])
            tsa = vm.get("timestampVerificationData", {}).get("rfc3161Timestamps", [])
            issuer = None; nb = None; oidc = None
            try:
                c = x509.load_der_x509_certificate(base64.b64decode(vm["certificate"]["rawBytes"]))
                issuer = c.issuer.rfc4514_string(); nb = c.not_valid_before_utc.isoformat()
                for e in c.extensions:
                    if e.oid.dotted_string == "1.3.6.1.4.1.57264.1.8": oidc = e.value.value.decode(errors="replace").strip("\x0c\x16 ")
            except Exception: pass
            out.append({"repo": repo, "tag": rel.get("tag_name"), "published": rel.get("published_at"), "asset": a["name"], "digest": d,
                        "media": b.get("mediaType"), "tlog_entries": len(tl), "log_ids": [e["logId"]["keyId"] for e in tl], "log_index": [e.get("logIndex") for e in tl],
                        "rfc3161": len(tsa), "cert_issuer": issuer, "cert_not_before": nb, "oidc_issuer": oidc, "repository_id": at.get("repository_id")})
            found += 1
    if i % 50 == 0:
        print(i, "repos;", len(out), "attestations", file=sys.stderr, flush=True); json.dump(out, open("attestations.json", "w"))
json.dump(out, open("attestations.json", "w"))
print(len(out), "attestations from", len({o['repo'] for o in out}), "repos", file=sys.stderr)
print("tlog entries:", collections.Counter(o["tlog_entries"] for o in out), file=sys.stderr)
print("issuers:", collections.Counter(o["cert_issuer"] for o in out).most_common(5), file=sys.stderr)
