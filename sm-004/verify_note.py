# Verify whisper.online/ledger/g2's checkpoint signature (C2SP signed-note, Ed25519) against the pinned vkey.
import base64, hashlib, urllib.request
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
VKEY = "whisper.online/ledger/g2+d40e573a+Ae6UmGCJyl5tkzI8AKhLKCqJ/3dxPEg6t+FdVVK4EwJt"
name, kid, k = VKEY.split("+", 2); k = base64.b64decode(k); assert k[0] == 1
req = urllib.request.Request("https://whisper.online/ledger/g2/checkpoint", headers={"User-Agent": "Mozilla/5.0 (Macintosh) Chrome/128"})
note = urllib.request.urlopen(req).read().decode()
body, sigs = note.split("\n\n", 1)
body += "\n"
ok = False
for line in sigs.strip().split("\n"):
    _, n, s = line.split(" ", 2)
    s = base64.b64decode(s)
    if n == name and s[:4].hex() == kid:
        Ed25519PublicKey.from_public_bytes(k[1:]).verify(s[4:], body.encode()); ok = True
print(body.split("\n")[1], "log signature valid:", ok)
