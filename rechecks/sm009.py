# SM-009 recheck: the 465 revoked certificates from the paper (final certificate public, CA CRL revocation 2-30 days old
# on 2 Oct 2026), queried against today's Firefox CRLite filters with Mozilla's rust-query-crlite. Reports the snapshot in
# use and how many of the 465 Firefox desktop still calls good or not covered. The gap should close when a new snapshot ships.
import datetime, json, os, re, subprocess, sys, glob
R = os.path.dirname(os.path.abspath(__file__)); D = os.path.join(R, "sm009")
Q = os.path.join(D, "src-crlite/rust-query-crlite/target/release/rust-query-crlite")
res = json.load(open(os.path.join(D, "results.json")))
certs = [x for x in res if x.get("status") == "found" and x.get("ts_source") == "embedded" and x.get("cert")]
today = datetime.date.today().isoformat()
out = {}
for ch in ("default", "compat"):
    db = os.path.join(D, f"db_{ch}")
    subprocess.run([Q, "-d", db, "--update", "prod", "--channel", ch, "https", "mozilla.org"], capture_output=True, text=True)
    r = subprocess.run([Q, "-d", db, "x509"] + [os.path.join(D, x["cert"]) for x in certs], capture_output=True, text=True)
    v = {m.group(1): m.group(2) for m in re.finditer(r"(certs/\d+\.der) (\w+)$", r.stderr, re.M)}
    for x in certs: x[f"v_{ch}"] = v.get(x["cert"], "?")
    snaps = sorted(f for f in os.listdir(db) if f.endswith(".filter")); deltas = sorted(f for f in os.listdir(db) if f.endswith(".delta"))
    out[ch] = {"snapshot": snaps[-1] if snaps else None, "newest_delta": deltas[-1] if deltas else None, "n_filters": len(snaps) + len(deltas)}
live = [x for x in certs if x["v_default"] != "Expired"]
fast = [x for x in live if x["hours_issue_to_revoke"] <= 24]
cnt = lambda G, k, ch="default": sum(1 for x in G if x[f"v_{ch}"] == k)
row = {"date": today, "snapshot": out["default"]["snapshot"], "newest_delta": out["default"]["newest_delta"], "filters": out["default"]["n_filters"],
       "unexpired": len(live), "revoked": cnt(live, "Revoked"), "good": cnt(live, "Good"), "not_covered": cnt(live, "NotCovered"),
       "within24h": len(fast), "within24h_slip": cnt(fast, "Good") + cnt(fast, "NotCovered"),
       "compat_revoked": cnt(live, "Revoked", "compat"), "compat_good": cnt(live, "Good", "compat")}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-009.jsonl"), "a").write(json.dumps(row) + "\n")
