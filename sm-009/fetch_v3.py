#!/usr/bin/env python3
"""For every sampled revocation (sample.json, drawn from the CAs' own CRLs):
  1. find the certificate in crt.sh's public PostgreSQL mirror by serial number (precertificate or
     certificate; most CAs log only the precertificate),
  2. pull its SCT log ids and timestamps from crt.sh's ct_log_entry table,
  3. ask Firefox's CRLite data for a verdict with Mozilla's own query code, by issuer SPKI hash,
     serial and SCT timestamps (the `raw` subcommand added to rust-query-crlite for this check),
     on both the `default` (desktop) and `compat` (Android) channels.
Where the final certificate is in crt.sh, it is also queried the ordinary way (x509 file) as a
cross-check of the raw path.

Outputs: sample.json (updated in place), raw_default.txt, verdicts.json
"""
import json, re, os, sys, hashlib, base64, subprocess, collections, datetime as dt

BATCH = 200
Q = "src-crlite/rust-query-crlite/target/release/rust-query-crlite"
PSQL = ["/opt/homebrew/opt/libpq/bin/psql", "host=crt.sh port=5432 dbname=certwatch user=guest connect_timeout=60", "-At", "-F", "\t", "-c", "set statement_timeout='900s'"]
os.makedirs("certs", exist_ok=True)
sample = json.load(open("sample.json"))
spki = json.load(open("issuer_spki.json"))
cn = lambda dn: (re.search(r"CN=([^,]+)", dn).group(1) if "CN=" in dn else dn)
hexser = lambda s: s if len(s) % 2 == 0 else "0" + s
now = dt.datetime.now(dt.timezone.utc)

import time
def psql(sql, tries=30):
    for i in range(tries):   # crt.sh's mirror drops connections under load; wait and retry
        out = subprocess.run(PSQL + ["-c", sql], capture_output=True, text=True)
        if out.returncode == 0:
            return [l.split("\t") for l in out.stdout.splitlines() if l and l != "SET"]
        print("psql retry", i, out.stderr.strip()[:100], file=sys.stderr, flush=True); time.sleep(60)
    raise RuntimeError(out.stderr[:300])

# CT log ids: crt.sh's internal id -> RFC 6962 log id (sha256 of the log's public key)
if not os.path.exists("ct_logs.json"):
    logs = {r[0]: base64.b64encode(hashlib.sha256(bytes.fromhex(r[2])).digest()).decode() for r in psql("select id, name, encode(public_key,'hex') from ct_log where public_key is not null")}
    json.dump(logs, open("ct_logs.json", "w"))
logs = json.load(open("ct_logs.json"))
print(len(logs), "CT logs known to crt.sh", file=sys.stderr, flush=True)

for b in range(0, len(sample), BATCH):
    batch = sample[b:b + BATCH]
    if all("v3" in x for x in batch): continue
    vals = ",".join(f"decode('{hexser(x['serial'])}','hex')" for x in batch)
    try:
        rows = psql("select c.id, encode(x509_serialNumber(c.certificate),'hex'), ca.name, "
                    "x509_hasExtension(c.certificate,'1.3.6.1.4.1.11129.2.4.2'), "
                    "to_char(x509_notBefore(c.certificate),'YYYY-MM-DD\"T\"HH24:MI:SS'), to_char(x509_notAfter(c.certificate),'YYYY-MM-DD'), "
                    "case when x509_hasExtension(c.certificate,'1.3.6.1.4.1.11129.2.4.2') then encode(c.certificate,'hex') end "
                    "from certificate c join ca on ca.id=c.issuer_ca_id "
                    f"where x509_serialNumber(c.certificate) in ({vals})")
    except Exception as e:
        print("batch", b, "failed:", e, file=sys.stderr, flush=True); continue
    by_serial = collections.defaultdict(list)
    for r in rows: by_serial[r[1].lstrip("0")].append(r)
    chosen = {}
    for i, x in enumerate(batch, start=b):
        hits = by_serial.get(x["serial"].lstrip("0"), [])
        want = cn(x["crl_issuer"])
        hits = [h for h in hits if want in h[2]]
        x["v3"] = True
        if not hits:
            x["status"] = "not in crt.sh"; continue
        pre = [h for h in hits if h[3] == "f"]; fin = [h for h in hits if h[3] == "t"]
        h = (pre or fin)[0]
        x.update({"crtsh_id": int(h[0]), "der_serial": h[1], "crtsh_issuer": h[2], "not_before": h[4], "not_after": h[5],
                  "has_final": bool(fin), "status": "found"})
        if fin:
            path = f"certs/{i}.der"; open(path, "wb").write(bytes.fromhex(fin[0][6])); x["cert"] = path
        chosen[h[0]] = x
    if chosen:
        try:
            ents = psql(f"select certificate_id, ct_log_id, (extract(epoch from entry_timestamp)*1000)::bigint from ct_log_entry where certificate_id in ({','.join(chosen)})")
        except Exception as e:
            print("sct batch", b, "failed:", e, file=sys.stderr, flush=True); ents = []
        for cid, lid, ts in ents:
            if lid in logs: chosen[cid].setdefault("scts", []).append([logs[lid], int(ts)])
    json.dump(sample, open("sample.json", "w"), indent=0)
    print(b + len(batch), "done;", sum(1 for s in sample if s.get("status") == "found"), "found", file=sys.stderr, flush=True)

# ---- query ------------------------------------------------------------------
found = [x for x in sample if x.get("status") == "found"]
for x in found:
    x["expired"] = x["not_after"] < now.strftime("%Y-%m-%d")
live = [x for x in found if not x["expired"]]
with open("raw.txt", "w") as f:
    for i, x in enumerate(sample):
        if x.get("status") == "found" and not x["expired"]:
            ts = ";".join(f"{l}:{t}" for l, t in x.get("scts", []))
            f.write(f"{i} {spki[x['crl_issuer']][0]} {x['der_serial']} {ts}\n")
for channel in ("default", "compat"):
    out = subprocess.run([Q, "-d", f"db_{channel}", "raw", "raw.txt"], capture_output=True, text=True)
    verdict = {m.group(1): m.group(2) for m in re.finditer(r"INFO - (\d+) (\w+)$", out.stderr, re.M)}
    for i, x in enumerate(sample):
        if str(i) in verdict: x[f"crlite_{channel}"] = verdict[str(i)]
    # cross-check with the ordinary x509 path where the final certificate exists
    files = [x["cert"] for x in live if x.get("cert")]
    if files:
        out = subprocess.run([Q, "-d", f"db_{channel}", "x509"] + files, capture_output=True, text=True)
        v2 = {m.group(1): m.group(2) for m in re.finditer(r"(certs/\d+\.der) (\w+)$", out.stderr, re.M)}
        for x in live:
            if x.get("cert") in v2: x[f"x509_{channel}"] = v2[x["cert"]]
json.dump(sample, open("verdicts.json", "w"), indent=0)
print(len(sample), "sampled;", len(found), "in crt.sh;", len(live), "unexpired and queried", file=sys.stderr)
for channel in ("default", "compat"):
    print(channel, collections.Counter(x.get(f"crlite_{channel}") for x in live).most_common(), file=sys.stderr)
    xs = [x for x in live if x.get(f"x509_{channel}")]
    print(" cross-check", len(xs), "final certs; disagreements:", sum(1 for x in xs if x[f"x509_{channel}"] != x.get(f"crlite_{channel}")), file=sys.stderr)
