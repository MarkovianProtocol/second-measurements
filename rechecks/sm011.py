# SM-011 recheck: how far behind each large CT log Mozilla's CRLite reader is (from the newest filter's coverage list),
# and how many of the Tranco top-1,000 sites' live certificates Firefox's filter does not cover today.
import datetime, json, os, re, socket, ssl, subprocess, sys, csv, concurrent.futures, base64
from cryptography import x509
R = os.path.dirname(os.path.abspath(__file__)); D = os.path.join(R, "sm011"); S9 = os.path.join(R, "sm009")
Q = os.path.join(S9, "src-crlite/rust-query-crlite/target/release/rust-query-crlite"); DB = os.path.join(S9, "db_default")
INSPECT = os.path.join(D, "src-clubcard-crlite/target/release/examples/inspect")
logs = json.load(open(os.path.join(D, "log_ids.json")))
subprocess.run([Q, "-d", DB, "--update", "prod", "--channel", "default", "https", "mozilla.org"], capture_output=True, text=True)
deltas = sorted(f for f in os.listdir(DB) if f.endswith(".delta") or f.endswith(".filter")); newest = deltas[-1]
cov = {}
for line in subprocess.run([INSPECT, os.path.join(DB, newest)], capture_output=True, text=True).stdout.splitlines():
    m = re.match(r"\s*(\S+)=,\s*(\d+),\s*(\d+)", line)
    if m: cov[m.group(1) + "="] = int(m.group(3))
eff = re.match(r"(\d{4})(\d{2})(\d{2})", newest); now = datetime.datetime.now(datetime.timezone.utc)
lag = {}
for lid, ts in cov.items():
    if lid in logs and logs[lid]["mmd"] == 86400:
        lag[logs[lid]["name"]] = round((now - datetime.datetime.fromtimestamp(ts / 1000, datetime.timezone.utc)).total_seconds() / 86400, 1)
watch = {"xenon2026h2": "Google 'Xenon2026h2' log", "wyvern2026h2": "DigiCert 'Wyvern2026h2'", "sphinx2026h2": "DigiCert 'Sphinx2026h2'", "argon2026h2": "Google 'Argon2026h2' log", "trustasia_log2026a": "TrustAsia 'log2026a'"}
hosts = [r[1] for r in csv.reader(open(os.path.join(D, "top-1m.csv")))][:1000]
cdir = os.path.join(D, "certs"); os.makedirs(cdir, exist_ok=True)
def grab(h):
    ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE
    try:
        with socket.create_connection((h, 443), timeout=6) as s:
            with ctx.wrap_socket(s, server_hostname=h) as ss: der = ss.getpeercert(binary_form=True)
        p = os.path.join(cdir, h + ".der"); open(p, "wb").write(der); return p
    except Exception: return None
with concurrent.futures.ThreadPoolExecutor(32) as ex: files = [p for p in ex.map(grab, hosts) if p]
v = {}
for b in range(0, len(files), 200):
    out = subprocess.run([Q, "-d", DB, "x509"] + files[b:b + 200], capture_output=True, text=True)
    for m in re.finditer(r"(\S+\.der) (\w+)$", out.stderr, re.M): v[m.group(1)] = m.group(2)
cnt = {k: sum(1 for x in v.values() if x == k) for k in ("Good", "NotCovered", "NotEnrolled", "Expired")}
moz = v.get(os.path.join(cdir, "mozilla.org.der"), "unreachable")
row = {"date": now.strftime("%Y-%m-%d"), "newest_filter": newest.replace("-default.filter.delta", "").replace("-default.filter", ""), "filters": len(deltas),
       **{f"lag_days_{k}": lag.get(n) for k, n in watch.items()}, "reachable": len(files), **{k.lower(): c for k, c in cnt.items()}, "mozilla_org": moz,
       "worst_lag_log": max(lag.items(), key=lambda kv: kv[1])[0] if lag else None, "worst_lag_days": max(lag.values()) if lag else None}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-011.jsonl"), "a").write(json.dumps(row) + "\n")
