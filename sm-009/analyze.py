#!/usr/bin/env python3
"""Final verdicts and tables.

Timestamps a Firefox client would use = the SCTs embedded in the certificate. Where we hold the
final certificate those come from the DER. Where crt.sh holds only the precertificate, they are
the precertificate's log entries in crt.sh (UTC), restricted to the CA's issuance batch: entries
within BATCH_H hours of the earliest entry (crt.sh's own later submissions are excluded).

Outputs: raw.txt, results.json, and a printed summary.
"""
import json, re, subprocess, collections, datetime as dt, statistics
Q = "src-crlite/rust-query-crlite/target/release/rust-query-crlite"
BATCH_H = 1.0
spki = json.load(open("issuer_spki.json"))
logs = json.load(open("log_ids.json"))
s = json.load(open("sample_scts.json"))
now = dt.datetime.now(dt.timezone.utc)

def ts_for(x):
    if x.get("scts_embedded") is not None and x.get("cert"):
        return [tuple(t) for t in x["scts_embedded"]], "embedded"
    ent = sorted(set((l, t) for l, t, _ in x.get("scts_utc", [])), key=lambda e: e[1])
    if not ent: return [], "none"
    t0 = ent[0][1]
    return [e for e in ent if e[1] - t0 <= BATCH_H * 3600e3], "crt.sh precert entries"

live = []
with open("raw.txt", "w") as f:
    for i, x in enumerate(s):
        if x.get("status") != "found" or x.get("expired"): continue
        ts, src = ts_for(x)
        x["ts_used"] = ts; x["ts_source"] = src
        f.write(f"{i} {spki[x['crl_issuer']][0]} {x['der_serial']} {';'.join(f'{l}:{t}' for l, t in ts)}\n")
        live.append((i, x))

for channel in ("default", "compat"):
    out = subprocess.run([Q, "-d", f"db_{channel}", "raw", "raw.txt"], capture_output=True, text=True)
    v = {m.group(1): m.group(2) for m in re.finditer(r"INFO - (\d+) (\w+)$", out.stderr, re.M)}
    for i, x in live: x[f"crlite_{channel}"] = v.get(str(i), "?")
    files = [x["cert"] for _, x in live if x.get("cert")]
    out = subprocess.run([Q, "-d", f"db_{channel}", "x509"] + files, capture_output=True, text=True)
    v2 = {m.group(1): m.group(2) for m in re.finditer(r"(certs/\d+\.der) (\w+)$", out.stderr, re.M)}
    for _, x in live:
        if x.get("cert") in v2: x[f"x509_{channel}"] = v2[x["cert"]]

# derived fields
for _, x in live:
    nb = dt.datetime.fromisoformat(x["not_before"]).replace(tzinfo=dt.timezone.utc)
    rv = dt.datetime.fromisoformat(x["revoked"])
    x["hours_issue_to_revoke"] = round((rv - nb).total_seconds() / 3600, 1)
    x["days_since_revoke"] = round((now - rv).total_seconds() / 86400, 1)
    mmds = [logs.get(l, {}).get("mmd") for l, _ in x["ts_used"]]
    x["min_mmd_s"] = min([m for m in mmds if m] or [None]) if any(mmds) else None
    x["log_names"] = [logs.get(l, {}).get("name", l[:12]) for l, _ in x["ts_used"]]

json.dump(s, open("results.json", "w"), indent=0)
L = [x for _, x in live]
print(len(s), "sampled;", sum(1 for x in s if x.get("status") == "found"), "in crt.sh;", len(L), "unexpired, queried")
print("timestamp source:", collections.Counter(x["ts_source"] for x in L))
for ch in ("default", "compat"):
    print(ch, collections.Counter(x[f"crlite_{ch}"] for x in L).most_common())
    xs = [x for x in L if x.get(f"x509_{ch}")]
    print("  cross-check on", len(xs), "final certs: disagreements", collections.Counter((x[f"crlite_{ch}"], x[f"x509_{ch}"]) for x in xs if x[f"crlite_{ch}"] != x[f"x509_{ch}"]))
acc = [x for x in L if x["crlite_default"] in ("Good", "NotCovered")]
print("\naccepted by Firefox desktop (Good or NotCovered):", len(acc), "of", len(L))
print(" by verdict:", collections.Counter(x["crlite_default"] for x in acc))
print(" by reason:", collections.Counter(x["reason"] for x in acc).most_common())
print(" by min MMD of embedded SCT logs:", collections.Counter(x["min_mmd_s"] for x in acc))
print(" hours issue->revoke: median", statistics.median(x["hours_issue_to_revoke"] for x in acc), "max", max(x["hours_issue_to_revoke"] for x in acc))
print(" days since revoke: min", min(x["days_since_revoke"] for x in acc), "max", max(x["days_since_revoke"] for x in acc))
print(" by org:", collections.Counter(x["org"] for x in acc).most_common(12))
rev = [x for x in L if x["crlite_default"] == "Revoked"]
print("revoked-in-filter: hours issue->revoke median", statistics.median(x["hours_issue_to_revoke"] for x in rev))
print("\nkeyCompromise revocations:", collections.Counter(x["crlite_default"] for x in L if x["reason"] == "key_compromise"))
print("compat (Android) channel: revoked", sum(1 for x in L if x["crlite_compat"] == "Revoked"), "of", len(L), "; by reason among Good:", collections.Counter(x["reason"] for x in L if x["crlite_compat"] == "Good").most_common())
fast = [x for x in L if x["hours_issue_to_revoke"] <= 24]
print("\nrevoked within 24h of issuance:", len(fast), "-> default verdicts", collections.Counter(x["crlite_default"] for x in fast))
slow = [x for x in L if x["hours_issue_to_revoke"] > 24]
print("revoked later than 24h:", len(slow), "-> default verdicts", collections.Counter(x["crlite_default"] for x in slow))
