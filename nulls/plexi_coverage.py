# Cloudflare Plexi: is an audit retrievable for every WhatsApp key-transparency v2 epoch it claims to have verified?
# Samples 150 epochs uniformly between the namespace's first epoch and last_verified_epoch. Signatures not checked here.
import json, random, urllib.request, collections
get = lambda u: json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "curl/8.7.1"}), timeout=20))  # default Python UA gets 403
P = "https://plexi.key-transparency.cloudflare.com/namespaces/whatsapp.key-transparency.v2"
ns = get(P)
first = int(ns["root"].split("/")[0]); last = ns["last_verified_epoch"]
random.seed(20260930)
res = collections.Counter(); bad = []
for e in sorted(random.sample(range(first, last + 1), 150)):
    try:
        a = get(f"{P}/audits/{e}")
        ok = a.get("epoch") == e and a.get("namespace") == ns["name"] and len(a.get("digest", "")) == 64
    except Exception as x:
        ok = False; a = str(x)
    res[ok] += 1
    if not ok: bad.append((e, str(a)[:80]))
print(f"epochs {first}..{last}: {dict(res)}"); [print(b) for b in bad]
