#!/usr/bin/env python3
"""Same-view watch: does every log show the same history to everyone who looks?

For each log our witness follows, each run collects signed checkpoints from two places:
  1. the log's own public checkpoint, as any reader sees it (from this machine, the "vantage");
  2. every checkpoint our witness (witness.markovianprotocol.com) cosigned for it, from its public /history.
Each checkpoint is kept only if the log's own Ed25519 signature verifies against the key on the witness-network
list. Two log-signed checkpoints for the same log at the same size with different root hashes are a fork the log
signed: proof by themselves, whoever holds them. Every such pair is saved in full under forks/.

What this shows: at every size where two of our observations meet, the log gave one root. What it does not:
a split view aimed only at someone else (a reader we never see), or a fork between two sizes we never both saw.
Witness names on a checkpoint are recorded as claimed; this script verifies only the log's signature.

  splitview.py STATE_DIR [--page SITE/measurements]      one run (cron), then rebuild the page
  splitview.py STATE_DIR --vantage NAME                    label observations from another machine
"""
import base64, datetime as dt, hashlib, html, json, os, re, sys, urllib.request
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
UA = {"User-Agent": "markovian-sameview (+https://markovianprotocol.com/measurements/sameview.html)"}
LISTS = ["staging/log-list-100qps-40klogs.1", "staging/log-list-10qps-4klogs.1", "testing/log-list.1"]
WN = "https://raw.githubusercontent.com/transparency-dev/witness-network/main/lists/"
WIT = "https://witness.markovianprotocol.com/"
OURLOG = ("markovianprotocol.com/log", "https://log.markovianprotocol.com/checkpoint")

def get(u, timeout=40):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=timeout).read()

def vkeys():
    out = {}
    for l in LISTS:
        for line in get(WN + l).decode().splitlines():
            if line.startswith("vkey "):
                try:
                    v = line.split()[1]; name, kh, b = v.split("+", 2); raw = base64.b64decode(b)
                except Exception: continue  # not an Ed25519 vkey we can read (e.g. ML-DSA); its log is skipped
                if len(raw) == 33 and raw[0] == 1: out[name] = (bytes.fromhex(kh), raw[1:])
    return out

def parse(note):
    """-> (origin, size, root_b64, body_bytes, [(name, keyhash, sig)]) or None."""
    if "\n\n" not in note: return None
    body, sigs = note.split("\n\n", 1); lines = body.split("\n")
    if len(lines) < 3: return None
    out = []
    for s in sigs.splitlines():
        m = re.match(r"^— (\S+) (\S+)$", s)
        if m:
            try: b = base64.b64decode(m.group(2))
            except Exception: continue
            out.append((m.group(1), b[:4], b[4:]))
    try: size = int(lines[1])
    except ValueError: return None
    return lines[0], size, lines[2], (body + "\n").encode(), out

def sigsum_note(origin, url, keys):
    """Sigsum serves its tree head as key=value lines; its signature is over the same checkpoint body. Rebuild the note."""
    kv = {}; cos = []
    for l in get(url).decode().splitlines():
        k, _, v = l.partition("=")
        if k == "cosignature": cos.append(v.split()[0][:16])
        else: kv[k] = v
    body = f"{origin}\n{kv['size']}\n{base64.b64encode(bytes.fromhex(kv['root_hash'])).decode()}\n"
    kh = keys[origin][0] if origin in keys else b"\0\0\0\0"
    sig = base64.b64encode(kh + bytes.fromhex(kv["signature"])).decode()
    return body + f"\n\u2014 {origin} {sig}\n" + "".join(f"\u2014 sigsum-witness:{c} x\n" for c in cos)

def log_signed(p, keys):
    origin, _, _, body, sigs = p; k = keys.get(origin)
    if not k: return False
    kh, pub = k
    for name, h, sig in sigs:
        if name == origin and h == kh and len(sig) == 64:
            try: Ed25519PublicKey.from_public_bytes(pub).verify(sig, body); return True
            except Exception: pass
    return False

def run(state, vantage, logs):
    keys = vkeys(); now = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    obs_p = os.path.join(state, "observations.jsonl"); seen_p = os.path.join(state, "seen.json")
    seen = json.load(open(seen_p)) if os.path.exists(seen_p) else {}   # origin -> {size: [root, first_source, first_time, note]}
    new, errs, forks = [], [], []
    def record(origin, p, note, src):
        _, size, root, _, sigs = p; s = seen.setdefault(origin, {}); k = str(size)
        cos = sorted({n for n, _, _ in sigs if n != origin})
        kind = src.split("@")[0].split(":")[0]  # "log" or "witness"
        if k not in s:
            s[k] = [root, src, now, note, [kind]]; new.append({"t": now, "log": origin, "size": size, "root": root, "src": src, "vantage": vantage, "cosigners": cos})
        elif s[k][0] != root:
            forks.append((origin, size, s[k], [root, src, now, note]))
        elif kind not in s[k][4]:
            s[k][4].append(kind); new.append({"t": now, "log": origin, "size": size, "root": root, "src": src, "vantage": vantage, "cosigners": cos, "agrees_with": s[k][1]})
    for origin, url in logs:
        h = hashlib.sha256(origin.encode()).hexdigest()
        try:
            note = sigsum_note(origin, url, keys) if url.endswith("/get-tree-head") else get(url).decode(); p = parse(note)
            if not p or p[0] != origin: errs.append(f"{origin}: log checkpoint unparsable or wrong origin")
            elif not log_signed(p, keys): errs.append(f"{origin}: log signature did not verify (or no key on the lists)")
            else: record(origin, p, note, f"log@{vantage}")
        except Exception as e: errs.append(f"{origin}: log {repr(e)[:90]}")
        try:
            for line in get(WIT + h + "/history", 60).decode().splitlines():
                if not line.strip(): continue
                n = json.loads(line)["note"]; p = parse(n)
                if p and p[0] == origin and log_signed(p, keys): record(origin, p, n, "witness:markovianprotocol.com")
        except Exception as e: errs.append(f"{origin}: witness history {repr(e)[:90]}")
    with open(obs_p, "a") as f:
        for r in new: f.write(json.dumps(r) + "\n")
    os.makedirs(os.path.join(state, "forks"), exist_ok=True)
    for origin, size, a, b in forks:
        fn = os.path.join(state, "forks", f"{hashlib.sha256(origin.encode()).hexdigest()[:16]}_{size}_{now.replace(':','')}.txt")
        open(fn, "w").write(f"origin {origin}\nsize {size}\n\n# first seen {a[2]} via {a[1]}\n{a[3]}\n# then {b[2]} via {b[1]}\n{b[3]}")
    json.dump(seen, open(seen_p + ".tmp", "w")); os.replace(seen_p + ".tmp", seen_p)
    runs_p = os.path.join(state, "runs.jsonl")
    with open(runs_p, "a") as f: f.write(json.dumps({"t": now, "vantage": vantage, "new": len(new), "forks": len(forks), "errors": errs}) + "\n")
    return seen, new, forks, errs

def page(state, site):
    E = html.escape; seen = json.load(open(os.path.join(state, "seen.json")))
    runs = [json.loads(l) for l in open(os.path.join(state, "runs.jsonl"))]
    forks = sorted(os.listdir(os.path.join(state, "forks")))
    last = runs[-1]; first = runs[0]["t"][:10]
    bad = {e.split(":")[0] for e in last["errors"]}
    rows = []
    for o in sorted(seen):
        s = seen[o]; met = sum(1 for v in s.values() if len(v) > 4 and len(set(v[4])) > 1)
        sizes = sorted(int(k) for k in s)
        nf = sum(1 for f in forks if f.startswith(hashlib.sha256(o.encode()).hexdigest()[:16]))
        rows.append(f'<tr><td class="o">{E(o)}</td><td>{len(s):,}</td><td>{met:,}</td>'
                    f'<td>{sizes[0]:,}–{sizes[-1]:,}</td><td style="color:var({"--bad" if nf else "--good"})">{nf if nf else "none"}</td>'
                    f'<td>{"not reachable last run" if o in bad else "ok"}</td></tr>')
    desc = "Each log our witness follows, checked every hour: at every size where two of our signed observations meet, did the log give the same root?"
    body = (f'<main class="paper sameview"><h1>Same view?</h1>\n<p>{E(desc)} An observation is a checkpoint carrying the log&rsquo;s own valid '
            'signature, read either from the log as any reader sees it or from what our witness cosigned. Two signed checkpoints at one size with '
            'different roots would be a fork the log signed; we would publish both here. This cannot see a split aimed only at readers we never are, '
            f'or a fork between sizes we never both saw. Witness names on a checkpoint are recorded as written; only the log&rsquo;s signature is verified. '
            f'Running since {first}; last run {E(last["t"])}. Script: <a href="sameview/splitview.py">splitview.py</a>; every observation: '
            '<a href="sameview/observations.jsonl">observations.jsonl</a>.</p>\n'
            '<div class="tw"><table>\n<tr><th>Log</th><th>Sizes seen</th><th>Sizes where the log&rsquo;s own copy met our witness&rsquo;s, and agreed</th><th>Range</th><th>Forks</th><th>Last run</th></tr>\n'
            + "\n".join(rows) + '\n</table></div>\n</main>')
    T = open(os.path.join(site, "sm-026.html"), encoding="utf-8").read()
    head = T[:T.find("</head>")].replace("sm-026.html", "sameview.html").replace("cards/sm-026.png", "cards/recounts.png")
    head = re.sub(r"<title>.*?</title>", "<title>Same view? Fork watch for witnessed logs — Markovian Protocol</title>", head, flags=re.S)
    for p in ('name="description"', 'property="og:description"'):
        head = re.sub(r'(<meta ' + p + r' content=")[^"]*', lambda m: m.group(1) + E(desc), head)
    head = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + "Same view? Fork watch for witnessed logs", head)
    nav = T[T.find("</head>"):T.find('<main class="paper">')]; foot = T[T.find("<footer>"):]
    out = os.path.join(site, "sameview.html"); open(out + ".tmp", "w", encoding="utf-8").write(head + nav + body + "\n" + foot); os.replace(out + ".tmp", out)
    d = os.path.join(site, "sameview"); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "splitview.py"), "w").write(open(os.path.abspath(__file__)).read())
    open(os.path.join(d, "observations.jsonl"), "w").write(open(os.path.join(state, "observations.jsonl")).read())
    for f in forks:
        os.makedirs(os.path.join(d, "forks"), exist_ok=True); open(os.path.join(d, "forks", f), "w").write(open(os.path.join(state, "forks", f)).read())

def logs_from(poll_json):
    d = json.load(open(poll_json)); out = [OURLOG]
    for origin, v in d.items():
        b = v.get("monitor") or v.get("base")
        if v["type"] in ("tiles", "checkpoint") and b: out.append((origin, b.rstrip("/") + "/checkpoint"))
        elif v["type"] == "sigsum" and b: out.append((origin, b.rstrip("/") + "/get-tree-head"))
    return out

if __name__ == "__main__":
    st = sys.argv[1]; os.makedirs(st, exist_ok=True); a = sys.argv
    vantage = a[a.index("--vantage") + 1] if "--vantage" in a else "hetzner-helsinki"
    poll = a[a.index("--poll") + 1] if "--poll" in a else "/home/mkv/markovian/witness/poll_logs.json"
    seen, new, forks, errs = run(st, vantage, logs_from(poll))
    print(dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"), "logs", len(seen), "new", len(new), "FORKS", len(forks), "errors", len(errs))
    for e in errs: print("  ", e)
    if "--page" in a: page(st, a[a.index("--page") + 1])
    if forks and "--alert" in a:
        key = [l.split("=", 1)[1].strip() for l in open(os.path.expanduser("~/.secrets/resend.env")) if l.startswith("RESEND_API_KEY=")][0]
        txt = "Two log-signed checkpoints, same log, same size, different roots. Both notes are saved in forks/.\n\n" + "\n".join(f"{o} size {z}: {x[0]} ({x[1]}) vs {y[0]} ({y[1]})" for o, z, x, y in forks)
        req = urllib.request.Request("https://api.resend.com/emails", method="POST", data=json.dumps({"from": "Markovian Same View <hello@markovianprotocol.com>",
            "to": ["hello@quantsynth.net"], "subject": f"[same-view] FORK: {len(forks)} conflicting checkpoint(s)", "text": txt}).encode(),
            headers={"Authorization": "Bearer " + key, "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"})
        urllib.request.urlopen(req, timeout=30)
    if forks: sys.exit(3)
