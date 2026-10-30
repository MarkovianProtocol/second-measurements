#!/usr/bin/env python3
"""For each recovered private key d (P-384), rebuild the public key d*G, hash its SubjectPublicKeyInfo (SHA-256), and ask
crt.sh for every certificate carrying that key. Tests Ryan Hurst's "the eight keys appear in 16 certificates".
Usage: python3 spki_census.py > data/spki_census.json"""
import json, time, urllib.request
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import serialization, hashes
NAMES = {4: "EM OV TLS CA - G3C", 56: "EM EV TLS CA - G3C", 66: "EM OV CS CA - G3B", 115: "EM EV TLS CA - G3B",
         155: "EM OV TLS CA - G3B", 156: "EM DV TLS CA - G3B", 230: "EM DV TLS CA - G3C", 237: "EM OV CS CA - G3C"}
out = []
for d, name in NAMES.items():
    pub = ec.derive_private_key(d, ec.SECP384R1()).public_key()
    spki = pub.public_bytes(serialization.Encoding.DER, serialization.PublicFormat.SubjectPublicKeyInfo)
    h = hashes.Hash(hashes.SHA256()); h.update(spki); hx = h.finalize().hex()
    for i in range(5):
        try:
            rows = json.load(urllib.request.urlopen(urllib.request.Request(f"https://crt.sh/?spkisha256={hx}&output=json", headers={"User-Agent": "Mozilla/5.0 (Markovian Protocol)"}), timeout=120)); break
        except Exception as e:
            rows = {"error": str(e)}; time.sleep(10 * (i + 1))
    out.append({"d": d, "name": name, "spki_sha256": hx, "crtsh": rows})
    time.sleep(3)
print(json.dumps(out, indent=1))
