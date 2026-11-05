#!/usr/bin/env python3
"""Promise snapshots: a witnessed copy of every page where a paper's promise lives, taken each time the page changes.

claimwatch.py calls archive() for each "text" target on every run; a new snapshot is written only when the text
differs from the last one. Each snapshot is the page's visible text (scripts, styles and HTML comments removed, one
line per text block: text_of below), saved as measurements/promises/<slug>/<UTC time>.txt and its SHA-256 posted
to log.markovianprotocol.com/submit. Anyone can check one: fetch the .txt, hash it, find the hash at the leaf.
Anyone can also re-take one: fetch the page, run text_of, compare with the newest snapshot.
The raw HTML is kept off the site (RAW) as backup; the public record is the text.

  promises.py --baseline   take a first snapshot of every text target in claimwatch.W (no email)
  promises.py --stamp      retry stamps that failed (rate limit), rebuild the page
  promises.py --page       rebuild the page only
"""
import datetime as dt, hashlib, html, json, os, re, sys, urllib.request
HOME = os.path.expanduser("~")
SITE = os.environ.get("PROMISES_SITE", "/home/mkv/websync/site/measurements")
OUT = os.path.join(SITE, "promises"); RAW = os.path.join(HOME, "claimwatch", "raw")
IDX = os.path.join(OUT, "index.json"); LOG = os.environ.get("PROMISES_LOG", "https://log.markovianprotocol.com/submit")

def text_of(s):
    s = re.sub(r"(?s)<!--.*?-->", " ", s)
    s = re.sub(r"(?is)<(script|style|noscript|template)[^>]*>.*?</\1>", " ", s); s = re.sub(r"<[^>]+>", "\n", s)
    return "\n".join(l.strip() for l in html.unescape(s).splitlines() if l.strip()) + "\n"

def slug(paper, label):
    return (paper + "-" + re.sub(r"[^a-z0-9]+", "-", label.lower())).strip("-")[:80]

def load():
    return json.load(open(IDX)) if os.path.exists(IDX) else {"entries": {}}

def save(ix):
    os.makedirs(OUT, exist_ok=True); tmp = IDX + ".tmp"; json.dump(ix, open(tmp, "w"), indent=1); os.replace(tmp, IDX)

def stamp(sha):
    req = urllib.request.Request(LOG, data=f"sha256:{sha}".encode(), method="POST", headers={"User-Agent": "markovian-promises"})
    r = json.load(urllib.request.urlopen(req, timeout=30))
    with open(os.path.join(HOME, ".public_note_ours"), "a") as f: f.write(sha + "\n")  # the door watcher: this stamp is ours
    return r["leaf_index"]

def archive(paper, label, url, raw_html, ix=None):
    """Snapshot if the text differs from the newest one. Returns the new snapshot dict or None."""
    own = ix is None; ix = ix or load()
    k = slug(paper, label); e = ix["entries"].setdefault(k, {"paper": paper, "label": label, "url": url, "snaps": []})
    e.update(paper=paper, label=label, url=url)
    txt = text_of(raw_html); b = txt.encode("utf-8"); sha = hashlib.sha256(b).hexdigest()
    if e["snaps"] and e["snaps"][-1]["sha256"] == sha: return None
    ts = dt.datetime.now(dt.timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    os.makedirs(os.path.join(OUT, k), exist_ok=True); os.makedirs(os.path.join(RAW, k), exist_ok=True)
    open(os.path.join(OUT, k, ts + ".txt"), "wb").write(b)
    open(os.path.join(RAW, k, ts + ".html"), "w", encoding="utf-8").write(raw_html)
    s = {"t": ts, "file": f"{k}/{ts}.txt", "sha256": sha, "bytes": len(b), "leaf": None}
    try: s["leaf"] = stamp(sha)
    except Exception as ex: s["stamp_error"] = repr(ex)[:120]
    e["snaps"].append(s)
    if own: save(ix); page(ix)
    return s

def retry(ix):
    for e in ix["entries"].values():
        for s in e["snaps"]:
            if s.get("leaf") is None:
                try: s["leaf"] = stamp(s["sha256"]); s.pop("stamp_error", None)
                except Exception as ex: s["stamp_error"] = repr(ex)[:120]

def page(ix):
    E = html.escape; T = open(os.path.join(SITE, "sm-026.html"), encoding="utf-8").read()
    rows = []
    for k, e in sorted(ix["entries"].items(), key=lambda kv: (kv[1]["paper"], kv[1]["label"])):
        sn = e["snaps"]; last = sn[-1]
        when = lambda s: f'{s["t"][:4]}-{s["t"][4:6]}-{s["t"][6:8]} {s["t"][9:11]}:{s["t"][11:13]}Z'
        leaf = lambda s: f'<a href="https://log.markovianprotocol.com/leaf/{s["leaf"]}">leaf {s["leaf"]}</a>' if s.get("leaf") is not None else "stamp pending"
        hist = "".join(f'<li><a href="promises/{E(s["file"])}">{when(s)}</a> · {leaf(s)} · <code>{s["sha256"][:16]}…</code></li>' for s in reversed(sn))
        rows.append(f'<tr id="{E(k)}"><td class="o"><a href="{E(e["paper"].lower())}.html">{E(e["paper"])}</a></td>'
                    f'<td><a href="{E(e["url"])}">{E(e["label"])}</a></td><td>{len(sn)}</td>'
                    f'<td><details><summary>{when(last)} · {leaf(last)}</summary><ul>{hist}</ul></details></td></tr>')
    n = sum(len(e["snaps"]) for e in ix["entries"].values())
    desc = "Every page where a promise we measured lives, copied and stamped in our witnessed log each time it changes."
    body = (f'<main class="paper promises"><h1>Promise snapshots</h1>\n<p>{desc} The copy is the page&rsquo;s visible text. '
            f'To check one, hash the file and find the hash at its leaf. To re-take one, run <a href="promises/promises.py">promises.py</a>&rsquo;s '
            f'<code>text_of</code> on the live page. {len(ix["entries"])} pages, {n} snapshots, checked every 3 hours.</p>\n'
            '<div class="tw"><table>\n<tr><th>Paper</th><th>Page</th><th>Copies</th><th>Newest (open for all)</th></tr>\n' + "\n".join(rows) + '\n</table></div>\n</main>')
    head = T[:T.find("</head>")].replace("sm-026.html", "promises.html").replace("cards/sm-026.png", "cards/recounts.png")
    head = re.sub(r"<title>.*?</title>", "<title>Promise snapshots — Markovian Protocol</title>", head, flags=re.S)
    for p in ('name="description"', 'property="og:description"'):
        head = re.sub(r'(<meta ' + p + r' content=")[^"]*', lambda m: m.group(1) + E(desc), head)
    head = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + "Promise snapshots", head)
    nav = T[T.find("</head>"):T.find('<main class="paper">')]; foot = T[T.find("<footer>"):]
    css = "<style>.promises details ul{margin:.3em 0 0 1em;padding:0;font-size:.9em}.promises summary{cursor:pointer}</style>\n"
    tmp = os.path.join(SITE, "promises.html.tmp"); open(tmp, "w", encoding="utf-8").write(head + css + nav + body + "\n" + foot)
    os.replace(tmp, os.path.join(SITE, "promises.html"))
    src = os.path.abspath(__file__); dst = os.path.join(OUT, "promises.py")
    if src != dst: open(dst, "w").write(open(src).read())

if __name__ == "__main__":
    ix = load()
    if "--baseline" in sys.argv:
        sys.path.insert(0, os.path.join(HOME, "claimwatch")); import claimwatch as cw
        for paper, label, kind, t in cw.W:
            if kind != "text": continue
            try: s = archive(paper, label, t, cw.get(t), ix); print(paper, label, "->", s and (s["t"], s["leaf"], s.get("stamp_error")))
            except Exception as ex: print(paper, label, "ERROR", repr(ex)[:120])
    if "--stamp" in sys.argv: retry(ix)
    save(ix); page(ix); print("promises:", len(ix["entries"]), "pages,", sum(len(e["snaps"]) for e in ix["entries"].values()), "snapshots")
