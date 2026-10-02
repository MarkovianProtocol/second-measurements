#!/usr/bin/env python3
"""Re-pull SCT (log id, timestamp) pairs from crt.sh in UTC, for both the precertificate and the
final certificate ids, and record which entries are the CA's own (embedded) where the final
certificate is available. Writes verdicts.json -> sample_scts.json."""
import json, hashlib, base64, subprocess, sys, time, collections
PSQL = ["/opt/homebrew/opt/libpq/bin/psql", "host=crt.sh port=5432 dbname=certwatch user=guest connect_timeout=60", "-At", "-F", "\t",
        "-c", "set statement_timeout='900s'", "-c", "set timezone='UTC'"]
def psql(sql, tries=40):
    for i in range(tries):
        out = subprocess.run(PSQL + ["-c", sql], capture_output=True, text=True)
        if out.returncode == 0:
            return [l.split("\t") for l in out.stdout.splitlines() if l and l != "SET"]
        print("psql retry", i, out.stderr.strip()[:100], file=sys.stderr, flush=True); time.sleep(60)
    raise RuntimeError(out.stderr[:300])
logs = json.load(open("ct_logs.json"))
s = json.load(open("verdicts.json"))
found = [x for x in s if x.get("status") == "found"]
# final certificates: we hold the DER, so the embedded SCTs come straight from it (no crt.sh needed)
import base64
from cryptography import x509
for x in found:
    if x.get("cert"):
        c = x509.load_der_x509_certificate(open(x["cert"], "rb").read())
        try:
            scts = c.extensions.get_extension_for_class(x509.PrecertificateSignedCertificateTimestamps).value
            x["scts_embedded"] = [[base64.b64encode(t.log_id).decode(), int(t.timestamp.timestamp() * 1000)] for t in scts]
        except Exception:
            x["scts_embedded"] = []
ids = {}
for x in found:
    ids[str(x["crtsh_id"])] = x
for x in found: x["scts_utc"] = []
idl = list(ids)
for b in range(0, len(idl), 500):
    rows = psql(f"select certificate_id, ct_log_id, (extract(epoch from (entry_timestamp at time zone 'UTC'))*1000)::bigint from ct_log_entry where certificate_id in ({','.join(idl[b:b+500])})")
    for cid, lid, ts in rows:
        if lid in logs: ids[cid]["scts_utc"].append([logs[lid], int(ts), int(cid)])
    print("sct rows", b + 500, file=sys.stderr, flush=True)
json.dump(s, open("sample_scts.json", "w"), indent=0)
print("done", sum(1 for x in found if x["scts_utc"]), "with entries", file=sys.stderr)
