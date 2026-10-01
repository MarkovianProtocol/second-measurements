# Meta Private Processing revocation list on Cloudflare Plexi: every epoch's timestamp, gap distribution,
# and gaps longer than the whitepaper's 24-hour signature expiry.
import json, urllib.request, datetime, statistics
from concurrent.futures import ThreadPoolExecutor
P = "https://plexi.key-transparency.cloudflare.com/namespaces/prod.pc.revocation_list/audits/"
def ts(e):
    import time
    for i in range(8):
        try: return e, json.load(urllib.request.urlopen(urllib.request.Request(P + str(e), headers={"User-Agent": "curl/8.7.1"}), timeout=30))["timestamp"] / 1000
        except urllib.error.HTTPError as x:
            if x.code == 404: return e, None
        except Exception: time.sleep(2 * (i + 1))
    return e, "err"
with ThreadPoolExecutor(3) as ex: rows = dict(ex.map(ts, range(1, 2800)))
T = [(e, t) for e, t in sorted(rows.items()) if isinstance(t, float)]
errs = [e for e, t in rows.items() if t == "err"]
head = T[-1][0]; present = {e for e, _ in T}
missing = [e for e in range(1, head + 1) if e not in present]
print(f"missing epochs inside 1..{head}: {len(missing)} {missing[:20]}", "fetch errors:", sorted(errs)[:10])
gaps = [((b - a) / 3600, ea, eb, a, b) for (ea, a), (eb, b) in zip(T, T[1:])]
g = sorted(x[0] for x in gaps)
d = lambda t: datetime.datetime.utcfromtimestamp(t).strftime("%Y-%m-%d %H:%M")
print(f"epochs 1..{head}, {d(T[0][1])} -> {d(T[-1][1])}, fetch errors {len(errs)}")
print(f"gap h: median {statistics.median(g):.2f}, p90 {g[int(.9*len(g))]:.2f}, p99 {g[int(.99*len(g))]:.1f}, max {g[-1]:.1f}")
print(f"gaps <= 3.1 h: {sum(x <= 3.1 for x in g)} of {len(g)}; > 6 h: {sum(x > 6 for x in g)}; > 24 h: {sum(x > 24 for x in g)}")
for h, ea, eb, a, b in sorted(gaps, reverse=True)[:12]:
    if h > 24: print(f"  {h:6.1f} h  epoch {ea} {d(a)} -> {eb} {d(b)}")
json.dump(T, open("pp_revocation_timestamps.json", "w"))
