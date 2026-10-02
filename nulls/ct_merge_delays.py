#!/usr/bin/env python3
"""Time every usable Certificate Transparency log's merge-delay promise.

For each log on the Google and Apple log lists that is usable or qualified, submit one publicly
trusted certificate whose expiry falls inside the log's shard, record the SCT, then poll until the
log actually serves the entry: RFC 6962 logs via get-proof-by-hash against a fresh STH, tiled
(static-ct) logs via the leaf index in the SCT extension against the checkpoint size.
Each log promises a maximum merge delay (MMD): 86400 s for RFC 6962 logs, 60 s for tiled ones.

Certificates: our own TLS chain plus final certificates held from SM-009 (with their CCADB-listed
intermediates) to cover other shards. Output: ct_mmd_results.json, one record per log, updated as
inclusions land. Usage: python3 ct_mmd.py [max_wait_hours]
"""
import json, base64, hashlib, struct, time, sys, os, csv, urllib.request, urllib.error, datetime as dt
from cryptography import x509
from cryptography.hazmat.primitives import serialization

HERE = os.path.dirname(os.path.abspath(__file__))
MAX_WAIT_H = float(sys.argv[1]) if len(sys.argv) > 1 else 30
UA = {"User-Agent": "second-measurements (markovianprotocol.com) CT merge-delay check", "Content-Type": "application/json"}
now_ms = lambda: int(time.time() * 1000)

def http(url, data=None, timeout=60):
    r = urllib.request.urlopen(urllib.request.Request(url, data=data, headers=UA), timeout=timeout)
    return r.status, r.read()

# ---- logs ---------------------------------------------------------------------
logs = {}
for f in ("google_all_logs_list.json", "apple_log_list.json"):
    d = json.load(open(os.path.join(HERE, "..", "crlite", "exhibits", f)))
    for op in d["operators"]:
        for kind in ("logs", "tiled_logs"):
            for l in op.get(kind, []):
                st = list(l.get("state", {}).keys())
                if not ("usable" in st or "qualified" in st): continue
                url = l.get("url") or l.get("submission_url")
                logs.setdefault(l["log_id"], {"log_id": l["log_id"], "operator": op["name"], "name": l.get("description") or url,
                    "url": url.rstrip("/") + "/", "monitoring_url": (l.get("monitoring_url") or url).rstrip("/") + "/",
                    "tiled": kind == "tiled_logs", "mmd": l.get("mmd"), "interval": l.get("temporal_interval"), "state": st})
print(len(logs), "usable/qualified logs", file=sys.stderr)

# ---- certificates ---------------------------------------------------------------
def pem_chain(path):
    return [x509.load_pem_x509_certificate((p + "-----END CERTIFICATE-----").encode()) for p in open(path).read().split("-----END CERTIFICATE-----") if "BEGIN CERT" in p]
der = lambda c: c.public_bytes(serialization.Encoding.DER)
pool = []   # (notAfter, [der chain])
own = pem_chain(os.path.join(HERE, "chain.pem")); pool.append((own[0].not_valid_after_utc, [der(c) for c in own], "own"))
inter = {}
for r in csv.DictReader(open(os.path.join(HERE, "..", "crlite", "ccadb_mozilla_intermediates.csv"))):
    if r["PEM"].strip():
        c = x509.load_pem_x509_certificate(r["PEM"].strip().encode()); inter[c.subject.rfc4514_string()] = c
res = json.load(open(os.path.join(HERE, "..", "crlite", "results.json")))
for x in res:
    if x.get("cert") and x.get("status") == "found" and not x.get("expired"):
        c = x509.load_der_x509_certificate(open(os.path.join(HERE, "..", "crlite", x["cert"]), "rb").read())
        i = inter.get(c.issuer.rfc4514_string())
        if i: pool.append((c.not_valid_after_utc, [der(c), der(i)], x["cert"]))
if os.path.exists(os.path.join(HERE, "tile_candidates.json")):
    for c in json.load(open(os.path.join(HERE, "tile_candidates.json"))):
        pool.append((dt.datetime.fromisoformat(c["notAfter"]), [base64.b64decode(x) for x in c["chain"]], ("precert:" if c["precert"] else "cert:") + c["fingerprint"][:16]))
pool.sort(key=lambda p: p[0])
print(len(pool), "candidate certificates", file=sys.stderr)

def candidates(log):
    iv = log.get("interval")
    for na, chain, label in pool:
        if not log["tiled"] and label.startswith("precert:"): continue   # our RFC 6962 leaf hash is for x509 entries only
        if not iv or iv["start_inclusive"] <= na.isoformat() < iv["end_exclusive"]: yield chain, label

# ---- RFC 6962 leaf hash ---------------------------------------------------------
def leaf_hash(ts, cert_der, ext=b""):
    leaf = b"\x00\x00" + struct.pack(">Q", ts) + b"\x00\x00" + len(cert_der).to_bytes(3, "big") + cert_der + struct.pack(">H", len(ext)) + ext
    return hashlib.sha256(b"\x00" + leaf).digest()

def leaf_index_from_ext(ext_b64):
    ext = base64.b64decode(ext_b64) if ext_b64 else b""
    i = 0
    while i + 3 <= len(ext):
        t, n = ext[i], int.from_bytes(ext[i+1:i+3], "big")
        if t == 0 and n == 5: return int.from_bytes(ext[i+3:i+8], "big")
        i += 3 + n
    return None

import urllib.parse
def check(rec):
    if rec["tiled"]:
        st, raw = http(rec["monitoring_url"] + "checkpoint")
        size = int(raw.decode().split("\n")[1])
        return (size > rec["leaf_index"]) if rec.get("leaf_index") is not None else None, size
    st, raw = http(rec["url"] + "ct/v1/get-sth"); sth = json.loads(raw); size = sth["tree_size"]
    try:
        st, raw = http(rec["url"] + f"ct/v1/get-proof-by-hash?hash={urllib.parse.quote(rec['leaf_hash'])}&tree_size={size}")
        return True, size
    except urllib.error.HTTPError as e:
        return (False, size) if e.code in (400, 404) else (None, size)

import urllib.parse, threading
deadline = time.time() + MAX_WAIT_H * 3600
lock = threading.Lock()
def watch(rec):
    """Poll one log on its own thread: tiled logs every 3 s, RFC 6962 logs every 10 s. Record the last
    poll that said 'not yet' and the first that said 'yes', so the delay is a bracket, not a point."""
    period = 3 if rec["tiled"] else 10
    while time.time() < deadline and not rec.get("included_at"):
        t = now_ms()
        try:
            ok, size = check(rec)
        except Exception as e:
            rec["poll_error"] = repr(e)[:100]; time.sleep(period); continue
        with lock:
            rec["last_size"] = size; rec["polls"] = rec.get("polls", 0) + 1
            if ok:
                rec["included_at"] = t
                rec["delay_s_upper"] = (t - rec["sct_timestamp"]) / 1000
                rec["delay_s_lower"] = ((rec.get("last_negative_poll") or rec["submitted_at"]) - rec["sct_timestamp"]) / 1000
                rec["within_mmd"] = rec["delay_s_upper"] <= rec["mmd"]
                rec["within_mmd_lower_bound"] = rec["delay_s_lower"] <= rec["mmd"]
                print(f"INCLUDED {rec['name'][:40]:40} between {rec['delay_s_lower']:.0f}s and {rec['delay_s_upper']:.0f}s (mmd {rec['mmd']})", file=sys.stderr, flush=True)
            elif ok is False:
                rec["last_negative_poll"] = t
        time.sleep(period)

threads = []
# ---- submit ---------------------------------------------------------------------
out_path = os.path.join(HERE, os.environ.get("OUT", "ct_mmd_results.json"))
results = json.load(open(out_path)) if os.path.exists(out_path) else {}
for lid, log in logs.items():
    if lid in results and results[lid].get("sct_timestamp"): continue
    if os.environ.get("ONLY_MISSING"):
        prev = json.load(open(os.path.join(HERE, "ct_mmd_results.json"))) if os.path.exists(os.path.join(HERE, "ct_mmd_results.json")) else {}
        if lid in prev and prev[lid].get("sct_timestamp"): continue
    rec = {**log, "cert": None, "submitted_at": None, "sct_timestamp": None, "error": None, "duplicates_skipped": 0}
    tried = 0
    for chain, label in candidates(log):
        if tried >= 40: break
        tried += 1
        body = json.dumps({"chain": [base64.b64encode(c).decode() for c in chain]}).encode()
        t0 = now_ms()
        try:
            st, raw = http(log["url"] + ("ct/v1/add-pre-chain" if label.startswith("precert:") else "ct/v1/add-chain"), body)
            d = json.loads(raw); t1 = now_ms()
        except urllib.error.HTTPError as e: rec["error"] = f"HTTP {e.code} {e.read()[:120]!r}"; continue
        except Exception as e: rec["error"] = repr(e)[:120]; continue
        if d["timestamp"] < t0 - 120_000:          # the log already held this certificate: its old SCT, not a fresh entry
            rec["duplicates_skipped"] += 1; time.sleep(0.3); continue
        rec.update({"cert": label, "error": None, "submitted_at": t0, "submit_ms": t1 - t0, "sct_timestamp": d["timestamp"], "sct_ext": d.get("extensions", ""),
                    "leaf_hash": base64.b64encode(leaf_hash(d["timestamp"], chain[0], base64.b64decode(d.get("extensions", "") or ""))).decode(),
                    "leaf_index": leaf_index_from_ext(d.get("extensions", "")) if log["tiled"] else None})
        results[lid] = rec
        th = threading.Thread(target=watch, args=(rec,), daemon=True); th.start(); threads.append(th)
        break
    if not rec["sct_timestamp"] and not rec["error"]: rec["error"] = "no certificate for this shard" if tried == 0 else "every candidate already in the log"
    results[lid] = rec
    print(f"{log['name'][:40]:40} {'tiled' if log['tiled'] else 'rfc6962':8} {rec.get('sct_timestamp') or rec['error']}", file=sys.stderr)
    time.sleep(0.3)
while any(th.is_alive() for th in threads):
    time.sleep(15)
    with lock: json.dump(results, open(out_path, "w"), indent=1)
json.dump(results, open(out_path, "w"), indent=1)

# ---- poll for inclusion -----------------------------------------------------------

json.dump(results, open(out_path, "w"), indent=1)
json.dump(results, open(out_path, "w"), indent=1)
done = [r for r in results.values() if r.get("included_at")]
print(len(done), "included;", sum(1 for r in results.values() if r.get("sct_timestamp") and not r.get("included_at")), "still pending;",
      sum(1 for r in results.values() if r.get("error")), "submission errors", file=sys.stderr)
