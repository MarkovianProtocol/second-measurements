# Meta Private Processing: weeks with at least one CVM image logged, across all three CVM namespaces on Plexi.
import json, urllib.request, datetime, time
P = "https://plexi.key-transparency.cloudflare.com/namespaces/"
def g(ns, e):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(f"{P}{ns}/audits/{e}", headers={"User-Agent": "curl/8.7.1"}), timeout=30))
        except urllib.error.HTTPError as x:
            if x.code == 404: return None
        except Exception: time.sleep(2 * (i + 1))
    raise SystemExit(f"fetch failed {ns} {e}")
weeks = {}; counts = {}
for ns in ("prod.pc.orchestrator.cvm", "prod.pc.predictor.cvm", "prod.pc.cvm"):
    e = 1
    while (a := g(ns, e)):
        t = datetime.datetime.utcfromtimestamp(a["timestamp"] / 1000)
        weeks.setdefault(t.strftime("%G-W%V"), set()).add(ns); e += 1
    counts[ns] = e - 1
first = datetime.date(2025, 6, 2); last = datetime.date(2026, 9, 28)   # Mondays of the first and last week
allw = []; d = first
while d <= last: allw.append(d.strftime("%G-W%V")); d += datetime.timedelta(days=7)
empty = [w for w in allw if w not in weeks]
print("entries per namespace:", counts)
print(f"weeks {allw[0]}..{allw[-1]}: {len(allw)}; with >=1 CVM entry: {len(allw) - len(empty)}; empty: {len(empty)}")
runs, cur = [], []
for w in allw:
    if w in empty: cur.append(w)
    elif cur: runs.append(cur); cur = []
if cur: runs.append(cur)
print("longest empty runs:", [(r[0], r[-1], len(r)) for r in sorted(runs, key=len, reverse=True)[:4]])
