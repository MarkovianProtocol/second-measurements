#!/usr/bin/env python3
"""The top N sites (Tranco), each one's served certificate, and what Firefox's CRLite data says about it.

For each host: TLS handshake, leaf certificate saved as DER, issuer and embedded SCT log ids recorded,
then Mozilla's rust-query-crlite run on the files for both channels. Also: which of the certificate's
logs are in the filter's coverage list (from SM-009's coverage dump). Output: topsites_results.json
"""
import csv, json, os, sys, socket, ssl, base64, re, subprocess, concurrent.futures, collections
from cryptography import x509
from cryptography.hazmat.primitives import serialization

N = int(sys.argv[1]) if len(sys.argv) > 1 else 1000
HERE = os.path.dirname(os.path.abspath(__file__))
Q = os.path.join(HERE, "..", "crlite", "src-crlite", "rust-query-crlite", "target", "release", "rust-query-crlite")
logs = json.load(open(os.path.join(HERE, "..", "crlite", "log_ids.json")))
cov = {}
for line in open(os.path.join(HERE, "..", "crlite", "exhibits", "coverage-20261002-1-default.delta.txt")):
    m = re.match(r"\s*(\S+)=,\s*(\d+),\s*(\d+)", line)
    if m: cov[m.group(1) + "="] = int(m.group(3))
os.makedirs(os.path.join(HERE, "certs"), exist_ok=True)
hosts = [r[1] for r in csv.reader(open(os.path.join(HERE, "exhibits/tranco-top-5000.csv")))][:N]

def grab(host):
    ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE
    try:
        with socket.create_connection((host, 443), timeout=6) as s:
            with ctx.wrap_socket(s, server_hostname=host) as ss:
                der = ss.getpeercert(binary_form=True)
    except Exception as e:
        return {"host": host, "error": type(e).__name__}
    c = x509.load_der_x509_certificate(der)
    path = os.path.join(HERE, "certs", host + ".der"); open(path, "wb").write(der)
    scts = []
    try:
        for t in c.extensions.get_extension_for_class(x509.PrecertificateSignedCertificateTimestamps).value:
            scts.append(base64.b64encode(t.log_id).decode())
    except Exception: pass
    return {"host": host, "cert": path, "issuer": c.issuer.rfc4514_string(), "not_before": c.not_valid_before_utc.isoformat(),
            "not_after": c.not_valid_after_utc.isoformat(), "scts": scts, "sct_logs": [logs.get(l, {}).get("name", l[:10]) for l in scts],
            "covered_logs": sum(1 for l in scts if l in cov)}

with concurrent.futures.ThreadPoolExecutor(32) as ex:
    rows = list(ex.map(grab, hosts))
got = [r for r in rows if r.get("cert")]
print(len(rows), "hosts;", len(got), "certificates;", collections.Counter(r.get("error") for r in rows if r.get("error")).most_common(5), file=sys.stderr)
for ch in ("default", "compat"):
    v = {}
    files = [r["cert"] for r in got]
    for b in range(0, len(files), 200):
        out = subprocess.run([Q, "-d", os.path.join(HERE, "..", "crlite", f"db_{ch}"), "x509"] + files[b:b + 200], capture_output=True, text=True)
        for m in re.finditer(r"(\S+\.der) (\w+)$", out.stderr, re.M): v[m.group(1)] = m.group(2)
    for r in got: r[f"crlite_{ch}"] = v.get(r["cert"], "?")
json.dump(rows, open(os.path.join(HERE, "topsites_results.json"), "w"), indent=0)
for ch in ("default", "compat"):
    print(ch, collections.Counter(r[f"crlite_{ch}"] for r in got).most_common(), file=sys.stderr)
print("certs with no covered log:", sum(1 for r in got if r["scts"] and r["covered_logs"] == 0), "| no SCTs:", sum(1 for r in got if not r["scts"]), file=sys.stderr)
print("NotEnrolled by issuer:", collections.Counter(r["issuer"][:60] for r in got if r["crlite_default"] == "NotEnrolled").most_common(10), file=sys.stderr)
print("NotCovered by issuer:", collections.Counter(r["issuer"][:60] for r in got if r["crlite_default"] == "NotCovered").most_common(10), file=sys.stderr)
