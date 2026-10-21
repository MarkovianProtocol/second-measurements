#!/usr/bin/env python3
"""RSS feed of the measurements: one item when a paper is first seen and one each time its status changes (from
site/measurements/statuses.json), so readers get new papers, replies and fixes. History lives in feed_state.json
(append-only). Writes site/measurements/feed.xml. Run by deploy_measurements.sh after status_sync.py. python3 -I feed.py"""
import datetime as dt, email.utils, hashlib, html, json, os, re
B = os.path.dirname(os.path.abspath(__file__)); M = os.path.join(B, "site", "measurements"); STF = os.path.join(B, "feed_state.json")
U = "https://markovianprotocol.com/measurements/"
S = {k: v for k, v in json.load(open(os.path.join(M, "statuses.json"), encoding="utf-8")).items() if k.startswith("SM-")}
reg = {r["paper"]: r for r in json.load(open(os.path.join(M, "registry.json")))["rows"] if r.get("paper", "").startswith("SM-")}
idx = open(os.path.join(M, "index.html"), encoding="utf-8").read()
pub = {m.group(1): m.group(2) for m in re.finditer(r'<td class="o">(SM-\d{3})</td><td class="t">.*?<div class="cap"[^>]*>(\d{4}-\d{2}-\d{2})', idx, re.S)}
for sid in S:   # papers not in the index table: the first date on the paper's own meta line
    if sid not in pub:
        pg = os.path.join(M, sid.lower() + ".html")
        m = re.search(r'<p class="meta">.*?(\d{4}-\d{2}-\d{2})', open(pg, encoding="utf-8").read(), re.S) if os.path.exists(pg) else None
        if m: pub[sid] = m.group(1)
state = json.load(open(STF)) if os.path.exists(STF) else {"items": []}
seen = {(i["paper"], i["status_sha"]) for i in state["items"]}
now = dt.datetime.now(dt.timezone.utc).replace(microsecond=0)
first_run = not state["items"]
for sid, v in sorted(S.items()):
    sha = hashlib.sha256(v["long"].encode()).hexdigest()[:16]
    if (sid, sha) in seen: continue
    last = [i for i in state["items"] if i["paper"] == sid]
    if last and last[-1]["title"] == f"{sid}: {v['short']}":   # only the long text changed: refresh that item, no new one
        last[-1].update(status_sha=sha, status=v["long"]); continue
    when = now
    if first_run and sid in pub: when = dt.datetime.fromisoformat(pub[sid] + "T12:00:00+00:00")
    r = reg.get(sid, {})
    state["items"].append({"paper": sid, "status_sha": sha, "date": when.isoformat(),
                           "title": f"{sid}: {v['short']}", "claim": r.get("claim", ""), "found": r.get("found", ""), "status": v["long"]})
json.dump(state, open(STF, "w"), indent=1, ensure_ascii=False)
E = lambda t: html.escape(t, quote=False)
items = sorted(state["items"], key=lambda i: i["date"], reverse=True)[:60]
xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>',
       "<title>Second Measurements — Markovian Protocol</title>", f"<link>{U}</link>",
       f'<atom:link href="{U}feed.xml" rel="self" type="application/rss+xml"/>',
       "<description>New papers, replies and fixes: public claims by companies, agencies and log operators, recomputed from public data.</description>",
       f"<lastBuildDate>{email.utils.format_datetime(now)}</lastBuildDate>"]
for i in items:
    link = f"{U}{i['paper'].lower()}.html?from=rss"
    desc = f"<p><b>Claim:</b> {E(i['claim'])}</p><p><b>Found:</b> {E(i['found'])}</p><p><b>Status:</b> {E(i['status'])}</p>"
    xml += ["<item>", f"<title>{E(i['title'])}</title>", f"<link>{E(link)}</link>",
            f'<guid isPermaLink="false">{i["paper"]}-{i["status_sha"]}</guid>',
            f"<pubDate>{email.utils.format_datetime(dt.datetime.fromisoformat(i['date']))}</pubDate>",
            f"<description>{E(desc)}</description>", "</item>"]
xml.append("</channel></rss>")
open(os.path.join(M, "feed.xml"), "w", encoding="utf-8").write("\n".join(xml) + "\n")
print("feed:", len(state["items"]), "items,", sum(1 for i in state["items"] if i["date"] == now.isoformat()), "new")
