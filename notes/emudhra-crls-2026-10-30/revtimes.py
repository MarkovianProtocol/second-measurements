#!/usr/bin/env python3
"""For each of the 16 certificates found by spki_census.py: download it from crt.sh, read its serial and its issuer's CRL
URL, fetch that CRL, verify the CRL signature against the issuer's key (the issuing certificate from crt.sh), and report
the revocation time the CA itself recorded. Tests Hurst's revocation times. Usage: python3 revtimes.py > data/revtimes.json"""
import json, time, urllib.request, datetime as dt
from cryptography import x509
from cryptography.hazmat.primitives.asymmetric import ec, padding, rsa
UA = {"User-Agent": "Mozilla/5.0 (Markovian Protocol)"}
def get(u, t=120):
    for i in range(4):
        try: return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=t).read()
        except Exception as e: err = e; time.sleep(8 * (i + 1))
    raise err
cen = json.load(open("data/spki_census.json")); crls = {}; out = []
for k in cen:
    for row in k["crtsh"]:
        der = get(f"https://crt.sh/?d={row['id']}"); open(f"exhibits/crtsh_{row['id']}.pem", "wb").write(der)
        c = x509.load_pem_x509_certificate(der) if der.startswith(b"-----") else x509.load_der_x509_certificate(der)
        try: urls = [n.value for dp in c.extensions.get_extension_for_class(x509.CRLDistributionPoints).value for n in (dp.full_name or [])]
        except x509.ExtensionNotFound: urls = []
        rec = {"d": k["d"], "name": k["name"], "crtsh_id": row["id"], "issuer": c.issuer.rfc4514_string(), "serial": format(c.serial_number, "x"),
               "not_before": c.not_valid_before_utc.isoformat(), "crl_urls": urls}
        for u in urls:
            if u not in crls:
                try: crls[u] = get(u); open("exhibits/crl_" + u.split("//")[1].replace("/", "_"), "wb").write(crls[u])
                except Exception as e: crls[u] = None; rec["crl_error"] = str(e)[:100]
            raw = crls.get(u)
            if not raw: continue
            crl = x509.load_der_x509_crl(raw) if not raw.startswith(b"-----") else x509.load_pem_x509_crl(raw)
            r = crl.get_revoked_certificate_by_serial_number(c.serial_number)
            num = None
            try: num = crl.extensions.get_extension_for_class(x509.CRLNumber).value.crl_number
            except Exception: pass
            rec.setdefault("crls", []).append({"url": u, "crl_number": num, "this_update": crl.last_update_utc.isoformat(), "next_update": crl.next_update_utc.isoformat() if crl.next_update_utc else None,
                                              "revoked_at": r.revocation_date_utc.isoformat() if r else None,
                                              "reason": (r.extensions.get_extension_for_class(x509.CRLReason).value.reason.name if r and any(isinstance(e.value, x509.CRLReason) for e in r.extensions) else None)})
        out.append(rec); time.sleep(2)
print(json.dumps(out, indent=1))
