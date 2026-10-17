#!/usr/bin/env python3
"""Put an at-a-glance box under each published paper's meta line: the claim and what we found (from registry.json,
fixed in the page and stamped with it) and the status, fetched live from statuses.json so status changes never alter
the stamped bytes. Idempotent (<!--glance--> markers). python3 -I glance.py SM-001 SM-002 ...   (no args = all published)"""
import html, json, os, re, sys
M = os.path.join(os.path.dirname(os.path.abspath(__file__)), "site", "measurements")
reg = {r["paper"]: r for r in json.load(open(os.path.join(M, "registry.json")))["rows"] if r.get("paper", "").startswith("SM-")}
S = json.load(open(os.path.join(M, "statuses.json"), encoding="utf-8"))
ids = sys.argv[1:] or sorted(k for k in S if k.startswith("SM-"))
E = lambda t: html.escape(t, quote=False)
for sid in ids:
    p = os.path.join(M, sid.lower() + ".html"); r = reg.get(sid)
    if not r or not os.path.exists(p): print("skip", sid); continue
    box = (f'<!--glance--><div class="glance" style="border:1px solid var(--line,#d2d2d7);border-radius:10px;padding:12px 16px;margin:16px 0;font-size:15px;line-height:1.5">'
           f'<p style="margin:0 0 6px"><b>The claim:</b> {E(r["claim"])}</p>'
           f'<p style="margin:0 0 6px"><b>What we found:</b> {E(r["found"])}</p>'
           f'<p style="margin:0"><b>Status:</b> <span class="glance-status" data-paper="{sid}">{E(S[sid]["long"])}</span></p></div>'
           '<script>(function(){var e=document.querySelector(".glance-status");if(!e||!window.fetch)return;'
           'fetch("statuses.json",{cache:"no-store"}).then(function(r){return r.json()}).then(function(d){var v=d[e.dataset.paper];if(v&&v.long)e.textContent=v.long;}).catch(function(){});})();</script><!--/glance-->')
    s = open(p, encoding="utf-8").read()
    if "<!--glance-->" in s: s = re.sub(r"<!--glance-->.*?<!--/glance-->", lambda _: box, s, flags=re.S)
    else:
        m = re.search(r'<p class="meta">.*?</p>', s, re.S); s = s[:m.end()] + "\n" + box + s[m.end():]
    open(p, "w", encoding="utf-8").write(s); print("glance", sid)
