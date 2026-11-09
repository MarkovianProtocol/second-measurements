# Recount of Scott Helme, "Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds" (20 Oct 2026)
# Input: the 16 certificates (8 eMudhra-issued + 8 Sectigo cross-signs) from crt.sh, in data/.
# For each cert: search d = 1..255 for d*G == public key (P-384), time the search, print validity dates.
import glob, os, time
from cryptography import x509
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import serialization
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
def pub(d): return ec.derive_private_key(d, ec.SECP384R1()).public_key().public_bytes(serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint)
t0 = time.perf_counter(); table = {pub(d): d for d in range(1, 256)}; build = time.perf_counter() - t0
rows = []
for f in sorted(glob.glob(os.path.join(D, 'crtsh_*.pem'))):
    c = x509.load_pem_x509_certificate(open(f, 'rb').read())
    k = c.public_key()
    if not isinstance(k, ec.EllipticCurvePublicKey): continue
    pb = k.public_bytes(serialization.Encoding.X962, serialization.PublicFormat.UncompressedPoint)
    t = time.perf_counter(); d = None
    for i in range(1, 256):
        if pub(i) == pb: d = i; break
    ms = (time.perf_counter() - t) * 1000
    rows.append((c.subject.rfc4514_string().split('CN=')[1].split(',')[0], c.issuer.rfc4514_string().split('CN=')[1].split(',')[0], c.not_valid_before_utc.date(), c.not_valid_after_utc.date(), d, ms))
for r in sorted(rows, key=lambda r: (r[4] or 999, r[1])):
    print('%-26s issuer=%-26s notBefore=%s notAfter=%s d=%s search=%.2f ms' % r)
print('certs:', len(rows), '| distinct keys:', len({r[4] for r in rows}), '| max d:', max(r[4] for r in rows), '| slowest search %.2f ms, total %.1f ms' % (max(r[5] for r in rows), sum(r[5] for r in rows)))
