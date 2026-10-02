# Verify a sample of Kubernetes binary signatures ourselves: decode the .cert (base64 PEM), check the ECDSA signature in .sig
# over the binary, and read the signer identity from the certificate. Does not check the certificate chain to Fulcio or the
# Rekor entry -- cosign does those; this confirms each signature matches its binary and names the release identity.
import base64, json, urllib.request, sys
from cryptography import x509
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec
rows = json.load(open("k8s_sigs.json")); out = []
pick = {}
for r in rows:
    if r["binary"] == "kubectl" and r["os"] == "linux" and r["arch"] == "arm64": pick[r["version"]] = r
for v, r in sorted(pick.items()):
    base = f"https://dl.k8s.io/release/{v}/bin/linux/arm64/kubectl"
    data = urllib.request.urlopen(base, timeout=300).read()
    sig = base64.b64decode(urllib.request.urlopen(base + ".sig").read().strip())
    pem = urllib.request.urlopen(base + ".cert").read().strip()
    try: pem = base64.b64decode(pem) if not pem.startswith(b"-----") else pem
    except Exception: pass
    cert = x509.load_pem_x509_certificate(pem)
    ok = True
    try: cert.public_key().verify(sig, data, ec.ECDSA(hashes.SHA256()))
    except Exception: ok = False
    san = cert.extensions.get_extension_for_class(x509.SubjectAlternativeName).value
    ident = [str(n.value) for n in san]
    iss = [e.value.value.decode(errors="ignore") for e in cert.extensions if e.oid.dotted_string == "1.3.6.1.4.1.57264.1.1"]
    out.append({"version": v, "bytes": len(data), "signature_valid": ok, "identity": ident, "oidc_issuer": iss, "cert_not_before": cert.not_valid_before.isoformat()})
    print(json.dumps(out[-1]), flush=True)
json.dump(out, open("k8s_verify.json", "w"), indent=1)
print("valid", sum(o["signature_valid"] for o in out), "of", len(out))
