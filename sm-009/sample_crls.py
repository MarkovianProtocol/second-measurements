#!/usr/bin/env python3
"""Draw a sample of recently revoked certificates straight from the CAs' own CRLs.

Input: ccadb_crls.json (every CRL URL CCADB lists for Mozilla-trusted intermediates).
Strategy: group CRLs by CA organisation; for each organisation download up to N_PER_ORG
randomly chosen CRLs (a full CRL or a shard), parse them, and keep revocations whose
revocation date falls inside the window. Output: revoked_sample.json.
"""
import json, random, re, sys, time, collections, concurrent.futures, urllib.request, datetime as dt
from cryptography import x509
from cryptography.hazmat.primitives import hashes

random.seed(20261002)
WINDOW_OLD, WINDOW_NEW = 30, 2            # revoked between 30 and 2 days ago
N_PER_ORG = 12                            # CRLs per organisation
MAX_BYTES = 60_000_000
UA = {"User-Agent": "second-measurements (markovianprotocol.com) CRL check"}

crls = json.load(open("ccadb_crls.json"))
def org(c):
    m = re.search(r"O=([^;]+)", c["subject"]); return m.group(1).strip() if m else c["subject"]
by_org = collections.defaultdict(list)
for c in crls: by_org[org(c)].append(c)
print(len(by_org), "organisations,", len(crls), "CRL URLs", file=sys.stderr)

picked = []
for o, lst in by_org.items():
    random.shuffle(lst); picked += lst[:N_PER_ORG]
print(len(picked), "CRLs to fetch", file=sys.stderr)

now = dt.datetime.now(dt.timezone.utc)
lo, hi = now - dt.timedelta(days=WINDOW_OLD), now - dt.timedelta(days=WINDOW_NEW)

def fetch(c):
    url = c["url"]
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40) as r:
            data = r.read(MAX_BYTES + 1)
        if len(data) > MAX_BYTES: return c, None, "too big"
        try: crl = x509.load_der_x509_crl(data)
        except Exception: crl = x509.load_pem_x509_crl(data)
        out = []
        for rc in crl:
            d = rc.revocation_date_utc
            if lo <= d <= hi:
                reason = None
                try: reason = rc.extensions.get_extension_for_class(x509.CRLReason).value.reason.name
                except Exception: pass
                out.append({"serial": format(rc.serial_number, "x"), "revoked": d.isoformat(), "reason": reason})
        return c, {"n_entries": len(crl), "in_window": out, "bytes": len(data),
                   "crl_issuer": crl.issuer.rfc4514_string(), "this_update": crl.last_update_utc.isoformat()}, None
    except Exception as e:
        return c, None, repr(e)[:120]

results, errors = [], []
with concurrent.futures.ThreadPoolExecutor(16) as ex:
    for c, res, err in ex.map(fetch, picked):
        if err: errors.append({**c, "error": err})
        else: results.append({**c, **res})
        if (len(results) + len(errors)) % 50 == 0: print(len(results), "ok", len(errors), "err", file=sys.stderr)

total_in_window = sum(len(r["in_window"]) for r in results)
print(len(results), "CRLs parsed,", len(errors), "failed,", total_in_window, "revocations in window", file=sys.stderr)
json.dump({"fetched_at": now.isoformat(), "window_days": [WINDOW_OLD, WINDOW_NEW], "crls": results, "errors": errors},
          open("crl_scan.json", "w"))
