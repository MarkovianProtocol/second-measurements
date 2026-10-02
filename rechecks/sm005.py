# SM-005 recheck: Meta Private Processing on Cloudflare Plexi -- revocation-list cadence over the last 30 days,
# newest entry per server-software namespace, and whether the whitepaper PDF has changed.
import datetime, hashlib, json, statistics, sys, time, urllib.request, urllib.error
P = "https://plexi.key-transparency.cloudflare.com/namespaces/"
def get(u):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "curl/8.7.1"}), timeout=30))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(3 * (i + 1))
        except Exception: time.sleep(3 * (i + 1))
    raise SystemExit("fetch failed " + u)
def head(ns):
    hi = 1
    while get(f"{P}{ns}/audits/{hi*2}"): hi *= 2
    lo, hi = hi, hi * 2
    while hi - lo > 1:
        m = (lo + hi) // 2
        if get(f"{P}{ns}/audits/{m}"): lo = m
        else: hi = m
    return lo
now = time.time(); row = {"date": time.strftime("%Y-%m-%d")}
h = head("prod.pc.revocation_list"); ts = []
e = h
while e > 0:
    a = get(f"{P}prod.pc.revocation_list/audits/{e}"); t = a["timestamp"] / 1000
    ts.append(t)
    if now - t > 30 * 86400: break
    e -= 1; time.sleep(0.3)
ts.sort(); gaps = [(b - a) / 3600 for a, b in zip(ts, ts[1:])]
row.update({"revocation_head": h, "revocation_median_gap_h_30d": round(statistics.median(gaps), 2),
            "revocation_max_gap_h_30d": round(max(gaps), 1),
            "revocation_age_h": round((now - ts[-1]) / 3600, 1)})
for ns in ("prod.pc.orchestrator.cvm", "prod.pc.predictor.cvm", "prod.pc.cvm"):
    hh = head(ns); a = get(f"{P}{ns}/audits/{hh}")
    row[ns] = {"entries": hh, "last": datetime.datetime.utcfromtimestamp(a["timestamp"] / 1000).strftime("%Y-%m-%d")}
r = urllib.request.urlopen(urllib.request.Request("https://ai.meta.com/static-resource/private-processing-technical-whitepaper",
                           headers={"User-Agent": "Mozilla/5.0 (Macintosh) Chrome/128"}), timeout=60)
pdf = r.read(); row["whitepaper_sha256"] = hashlib.sha256(pdf).hexdigest(); row["whitepaper_bytes"] = len(pdf)
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else "history/sm-005.jsonl", "a").write(json.dumps(row) + "\n")
