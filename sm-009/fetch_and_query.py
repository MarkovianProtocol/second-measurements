#!/usr/bin/env python3
"""From the CRL scans, draw a stratified sample of revoked certificates, fetch each certificate
from crt.sh by serial number, and ask Firefox's CRLite data (both channels) what it says.

Outputs: sample.json (the draw), certs/<n>.der, verdicts.json
"""
import json, random, re, os, sys, time, subprocess, urllib.request, collections
from cryptography import x509

random.seed(20261002)
PER_ORG = 20
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
Q = "src-crlite/rust-query-crlite/target/release/rust-query-crlite"
SCT_OID = "1.3.6.1.4.1.11129.2.4.2"
os.makedirs("certs", exist_ok=True)

org = lambda s: (re.search(r"O=([^;]+)", s).group(1).strip() if "O=" in s else s)

# ---- draw --------------------------------------------------------------------
pool = collections.defaultdict(list)
seen = set()
for f in ("crl_scan.json", "crl_scan_big.json"):
    if not os.path.exists(f): continue
    for c in json.load(open(f))["crls"]:
        for r in c["in_window"]:
            key = (c["crl_issuer"], r["serial"])
            if key in seen: continue
            seen.add(key)
            pool[org(c["subject"])].append({**r, "crl_issuer": c["crl_issuer"], "crl_url": c["url"], "org": org(c["subject"])})
sample = []
for o, lst in sorted(pool.items()):
    random.shuffle(lst); sample += lst[:PER_ORG]
print(len(pool), "organisations with revocations;", sum(map(len, pool.values())), "revocations;", len(sample), "drawn", file=sys.stderr)
json.dump(sample, open("sample.json", "w"), indent=0)

# ---- fetch -------------------------------------------------------------------
def get(url, binary=False, tries=5):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                return r.read() if binary else json.load(r)
        except Exception as e:
            err = e; time.sleep(3 + 5 * i)
    raise err

def cn(dn):  # issuer CN from an RFC4514 string
    m = re.search(r"CN=([^,]+)", dn); return m.group(1) if m else dn

def has_scts(der):
    try:
        c = x509.load_der_x509_certificate(der)
        return any(e.oid.dotted_string == SCT_OID for e in c.extensions)
    except Exception:
        return False

for i, s in enumerate(sample):
    path = f"certs/{i}.der"
    if os.path.exists(path) and os.path.getsize(path) > 0:
        s["cert"] = path; continue
    s["cert"] = None
    try:
        hits = get(f"https://crt.sh/?serial={s['serial']}&output=json")
    except Exception as e:
        s["fetch_error"] = "serial lookup: " + repr(e)[:80]; continue
    want = cn(s["crl_issuer"])
    hits = [h for h in hits if want in h["issuer_name"]] or hits
    if not hits:
        s["fetch_error"] = "no crt.sh match"; continue
    # crt.sh lists the precertificate and the certificate separately; we need the one carrying SCTs
    for h in sorted(hits, key=lambda h: -h["id"])[:4]:
        try:
            der = get(f"https://crt.sh/?d={h['id']}", binary=True)
        except Exception as e:
            s["fetch_error"] = "download: " + repr(e)[:80]; continue
        if der[:1] == b"\x30" and has_scts(der):
            open(path, "wb").write(der); s["cert"] = path; s["crtsh_id"] = h["id"]
            s["not_before"] = h["not_before"]; s["not_after"] = h["not_after"]; break
    if not s["cert"] and "fetch_error" not in s:
        s["fetch_error"] = "no final certificate with SCTs among crt.sh matches"
    if i % 25 == 0:
        print(i, "fetched", sum(1 for x in sample if x.get("cert")), file=sys.stderr)
        json.dump(sample, open("sample.json", "w"), indent=0)
json.dump(sample, open("sample.json", "w"), indent=0)

# ---- query -------------------------------------------------------------------
have = [s for s in sample if s.get("cert")]
print(len(have), "certificates to query", file=sys.stderr)
for channel in ("default", "compat"):
    out = subprocess.run([Q, "-d", f"db_{channel}", "x509"] + [s["cert"] for s in have], capture_output=True, text=True)
    verdict = {}
    for line in out.stderr.splitlines():
        m = re.search(r"(certs/\d+\.der) (\w+)$", line)
        if m: verdict[m.group(1)] = m.group(2)
    for s in have: s[f"crlite_{channel}"] = verdict.get(s["cert"], "?")
json.dump(sample, open("verdicts.json", "w"), indent=0)
for channel in ("default", "compat"):
    print(channel, collections.Counter(s.get(f"crlite_{channel}") for s in have).most_common(), file=sys.stderr)
