# Meta Private Processing on Cloudflare Plexi: epoch count and spacing per namespace, against the whitepaper's
# stated cadences. The namespaces report no last_verified_epoch, so the head is found by binary search
# (assumes epochs are contiguous from 1; every epoch up to the head is then fetched, which checks that).
import json, urllib.request, urllib.error, datetime, statistics, sys, random
P = "https://plexi.key-transparency.cloudflare.com/namespaces/"
def get(u):
    try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "curl/8.7.1"}), timeout=30))
    except urllib.error.HTTPError as e:
        if e.code == 404: return None
        raise
d = lambda t: datetime.datetime.utcfromtimestamp(t).strftime("%Y-%m-%d %H:%M")
for arg in sys.argv[1:]:
    ns, _, sample = arg.partition(":")
    hi = 1
    while get(f"{P}{ns}/audits/{hi*2}"): hi *= 2
    lo, hi = hi, hi * 2
    while hi - lo > 1:
        mid = (lo + hi) // 2
        if get(f"{P}{ns}/audits/{mid}"): lo = mid
        else: hi = mid
    head = lo
    epochs = range(1, head + 1)
    if sample: random.seed(20260930); epochs = sorted(set([1, head] + random.sample(range(1, head + 1), min(int(sample), head))))
    ts = {}; missing = []
    for e in epochs:
        a = get(f"{P}{ns}/audits/{e}")
        if a: ts[e] = a["timestamp"] / 1000
        else: missing.append(e)
    days = (ts[head] - ts[1]) / 86400
    out = f"{ns}: head epoch {head}, {d(ts[1])} -> {d(ts[head])} ({days:.0f} days), mean {head/days*7:.2f} epochs/week" if days else f"{ns}: head {head}"
    if not sample:
        gaps = sorted((ts[b] - ts[a]) / 3600 for a, b in zip(epochs, epochs[1:]))
        out += f", gap hours median {statistics.median(gaps):.1f} min {gaps[0]:.2f} max {gaps[-1]:.0f}"
    else:
        out += f", mean gap {days*24/(head-1):.2f} h (from {len(ts)} sampled epochs)"
    print(out + (f", missing {missing[:5]}" if missing else ""), flush=True)
