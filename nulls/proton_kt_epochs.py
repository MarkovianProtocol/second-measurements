# Proton Key Transparency: "Normally a ProtonKT epoch should be published every 4 hours. The maximum publishing interval is
# 72 hours" (whitepaper p.14). Each epoch is a CT-logged certificate whose SAN encodes {hash}.{hash}.{issuanceTime}.{epochID}.1.keytransparency.ch.
# Pull every issuance from Cert Spotter, then check epoch-ID continuity and the interval between consecutive epochs.
import json, re, time, urllib.request, urllib.error, datetime, statistics, sys
U = "https://api.certspotter.com/v1/issuances?domain=keytransparency.ch&include_subdomains=true&expand=dns_names"
RX = re.compile(r"^[0-9a-f]{32}\.[0-9a-f]{32}\.(\d{9,11})\.(\d+)\.1\.keytransparency\.ch$")
epochs, after, pages = {}, None, 0
while True:
    u = U + (f"&after={after}" if after else "")
    for i in range(8):
        try: d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "markovian-second-measurement"}), timeout=60)); break
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get("Retry-After", "60")) + 5); continue
            raise
    else: raise SystemExit("gave up")
    if not d: break
    for c in d:
        for n in c.get("dns_names", []):
            m = RX.match(n)
            if m: epochs.setdefault(int(m[2]), int(m[1]))
    after = d[-1]["id"]; pages += 1
    if pages % 10 == 0: print("pages", pages, "epochs", len(epochs), flush=True)
    time.sleep(1.5)
json.dump(epochs, open("epochs.json", "w"))
ids = sorted(epochs); missing = [i for i in range(ids[0], ids[-1] + 1) if i not in epochs]
gaps = [(epochs[b] - epochs[a]) / 3600 for a, b in zip(ids, ids[1:]) if b == a + 1]
f = lambda t: datetime.datetime.utcfromtimestamp(t).strftime("%Y-%m-%d %H:%M")
print(f"epochs {ids[0]}..{ids[-1]}: {len(ids)} found, {len(missing)} missing ids {missing[:20]}")
print(f"first {f(epochs[ids[0]])}, last {f(epochs[ids[-1]])}")
print(f"interval h: median {statistics.median(gaps):.2f}, mean {statistics.mean(gaps):.2f}, max {max(gaps):.1f}; >5h {sum(g>5 for g in gaps)}, >24h {sum(g>24 for g in gaps)}, >72h {sum(g>72 for g in gaps)}")
