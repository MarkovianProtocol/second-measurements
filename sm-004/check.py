# Independent checks of whisper.online's ledger (g2), written from RFC 6962, not from their script.
import json, hashlib, base64, urllib.request, sys
UA = {"User-Agent": "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/128 Safari/537.36"}
def get(path):
    req = urllib.request.Request("https://whisper.online" + path, headers=UA)
    try:
        with urllib.request.urlopen(req) as r: return r.status, r.read()
    except urllib.error.HTTPError as e: return e.code, e.read()
H = lambda b: hashlib.sha256(b).digest()
node = lambda l, r: H(b"\x01" + l + r)

def root_from_inclusion(index, size, leaf, path):          # RFC 9162 section 2.1.3.2
    fn, sn, r = index, size - 1, leaf
    for p in path:
        if sn == 0: return None
        if fn & 1 or fn == sn:
            r = node(p, r)
            while not fn & 1 and fn != 0: fn >>= 1; sn >>= 1
        else:
            r = node(r, p)
        fn >>= 1; sn >>= 1
    return r if sn == 0 else None

def root_pair_from_consistency(m, n, proof):               # RFC 9162 section 2.1.4.2
    if m == n: return None
    if m & (m - 1) == 0:  # power of two: old root is a node on the path
        proof = [None] + proof
    fn, sn = m - 1, n - 1
    while fn & 1: fn >>= 1; sn >>= 1
    fr = sr = proof[0]
    for c in proof[1:]:
        if sn == 0: return None
        if fn & 1 or fn == sn:
            fr = node(c, fr); sr = node(c, sr)
            while not fn & 1 and fn != 0: fn >>= 1; sn >>= 1
        else:
            sr = node(sr, c)
        fn >>= 1; sn >>= 1
    return fr, sr

out = {}
for leaf in (0, 166, 282775):
    st, b = get(f"/inclusion?leaf={leaf}"); d = json.loads(b)
    path = [bytes.fromhex(x) for x in d["proof"]]
    got = root_from_inclusion(leaf, d["tree_size"], bytes.fromhex(d["leaf_hash"]), path)
    note = d.get("checkpoint") or {}
    ckpt = note if isinstance(note, str) else json.dumps(note)
    want = next((l for l in ckpt.replace("\\n", "\n").split("\n") if len(l) == 44 and l.endswith("=")), None)
    out[f"inclusion_{leaf}"] = {"tree_size": d["tree_size"], "folded_root": base64.b64encode(got).decode() if got else None,
                                "served_root": want, "match": bool(got) and base64.b64encode(got).decode() == want}
st, b = get("/checkpoint"); lines = b.decode().split("\n"); size, root = int(lines[1]), lines[2]
m = 251620
st2, b2 = get(f"/consistency?from={m}&to={size}")
if st2 == 200:
    d = json.loads(b2)
    pair = root_pair_from_consistency(m, size, [bytes.fromhex(x) if len(x) == 64 else base64.b64decode(x) for x in d["proof"]])
    out["consistency"] = {"from": m, "to": size, "status": 200, "new_root_matches_checkpoint": bool(pair) and base64.b64encode(pair[1]).decode() == root,
                          "old_root_derived": base64.b64encode(pair[0]).decode() if pair else None}
for q in ("old=100&new=200", "first=100&second=200", "from=100&tp=200", "bogus=1"):
    out[f"consistency?{q}"] = get(f"/consistency?{q}")[0]
print(json.dumps(out, indent=1))
