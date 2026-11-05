"""How many of the 7 pinned witnesses cosigned each saved checkpoint of markovianprotocol.com/log?
Counts a witness when a signature line carries its name AND its key ID (first 4 bytes); signatures are not re-verified here
(the log's standing monitor verifies them hourly). Reads /checkpoint/sizes and the newest N saved checkpoints."""
import base64, collections, json, re, sys, time, urllib.request
B = "https://log.markovianprotocol.com"; N = int(sys.argv[1]) if len(sys.argv) > 1 else 300
get = lambda p: urllib.request.urlopen(urllib.request.Request(B + p, headers={"User-Agent": "markovian-thresholds"}), timeout=30).read().decode()
pins = {}
for l in get("/policy").splitlines():
    if l.startswith("witness "):
        name, kh, _ = l.split()[2].split("+", 2); pins[name] = bytes.fromhex(kh)
sizes = [int(s) for s in get("/checkpoint/sizes").split()][-N:]
dist = collections.Counter(); rows = []
for s in sizes:
    note = get(f"/checkpoint/{s}"); have = set()
    for m in re.finditer(r"^— (\S+) (\S+)$", note, re.M):
        if m.group(1) in pins and base64.b64decode(m.group(2))[:4] == pins[m.group(1)]: have.add(m.group(1))
    dist[len(have)] += 1; rows.append({"size": s, "pinned": len(have), "missing": sorted(set(pins) - have)}); time.sleep(0.2)
json.dump({"pins": sorted(pins), "rows": rows}, open("availability.json", "w"), indent=1)
print(f"{len(sizes)} saved checkpoints, sizes {sizes[0]}..{sizes[-1]}")
for k in sorted(dist): print(f"  {k} of 7 pinned: {dist[k]}")
for t in (4, 5, 6, 7): print(f"  meets {t}-of-7: {sum(v for k, v in dist.items() if k >= t)} / {len(sizes)}")
miss = collections.Counter(w for r in rows for w in r["missing"]); print("  most often missing:", miss.most_common(4))
