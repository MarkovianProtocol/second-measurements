#!/usr/bin/env python3
"""Render registry.html: every public promise we have measured, checked or listed, one row each, with state, what we
found, the clock and the ending. Compiled from the pages that already carry the facts (track-record.html held and
margin tables, index.html null rows and paper rows, backlog.html open rows), clocks.json, the seals folder and the
rechecks history. Usage: registry.py SITE_DIR [clocks.json] [history_dir]. Idempotent; writes registry.html + registry.json."""
import json, os, re, sys, html, datetime as dt, glob
SITE = sys.argv[1]; CJ = sys.argv[2] if len(sys.argv) > 2 else os.path.join(SITE, "clocks.json")
HIST = sys.argv[3] if len(sys.argv) > 3 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "history")
H = html.escape
def text(c): return html.unescape(re.sub(r"<[^>]+>", "", c)).strip()
def cells(tr): return [text(c) for c in re.findall(r"<td[^>]*>(.*?)</td>", tr, re.S)]
def table_rows(s, marker):
    i = s.find(marker); j = s.find("</table>", i)
    return [cells(m.group(1)) for m in re.finditer(r"<tr>(.*?)</tr>", s[i:j], re.S) if i >= 0] if i >= 0 else []
idx = open(os.path.join(SITE, "index.html"), encoding="utf-8").read()
tr = open(os.path.join(SITE, "track-record.html"), encoding="utf-8").read()
bl = open(os.path.join(SITE, "backlog.html"), encoding="utf-8").read() if os.path.exists(os.path.join(SITE, "backlog.html")) else ""
clocks = {r["paper"]: r for r in json.load(open(CJ))["rows"]} if os.path.exists(CJ) else {}
today = dt.datetime.now(dt.timezone.utc).date(); N = 30
rows = []
# papers: track-record held table, then any published paper on the index not in it
seen = set()
for c in table_rows(tr, "<th>ID</th>"):
    if len(c) < 5 or not c[0].startswith("SM-"): continue
    rows.append({"state": "held" if c[2].lower().startswith("held") else ("not tested" if "not tested" in c[2].lower() else "did not hold"),
                 "who": c[1].split(":")[0] if ":" in c[1] else c[1][:40], "claim": c[1], "found": c[3], "next": c[4], "paper": c[0], "link": c[0].lower() + ".html"}); seen.add(c[0])
for m in re.finditer(r'<tr><td class="o">(SM-\d{3})</td><td class="t"><a href="([^"]+)">(.*?)</a>.*?</td><td>(.*?)</td><td class="st"[^>]*>(.*?)</td></tr>', idx, re.S):
    sid, href, title, result, st = m.group(1), m.group(2), text(m.group(3)), text(m.group(4)), text(m.group(5))
    if sid in seen: continue
    WHO = {"SM-016": "EPA (Toxics Release Inventory)", "SM-017": "FCC and its broadcast licensees"}
    rows.append({"state": "did not hold", "who": WHO.get(sid, title.split(":")[0].split(".")[0][:60]), "claim": title, "found": result, "next": st, "paper": sid, "link": href}); seen.add(sid)
# null rows from the index, with margins from the track record where the claim text matches
margins = {c[0][:24]: c for c in table_rows(tr, "<th>The margin</th>") if len(c) >= 3}
for c in table_rows(idx, "<h2>Checked, nothing found</h2>"):
    if len(c) < 4: continue
    mg = next((v for k, v in margins.items() if k and k in c[1]), None)
    rows.append({"state": "held", "who": c[1].split(":")[0][:60], "claim": c[1], "found": c[3], "next": ("margin: " + mg[2]) if mg else "", "paper": "null row " + c[0], "link": "index.html#nulls", "date": c[0]})
# backlog: open, tripwire, dead
for c in table_rows(bl, "<th>Who</th>"):
    if len(c) < 4 or c[3].startswith("measured"): continue
    st = c[3]; state = "not yet measured" if st.startswith("open") else ("tripwire" if "tripwire" in st else ("dead" if st.startswith("dead") else st[:20]))
    rows.append({"state": state, "who": c[0], "claim": c[1], "found": c[2], "next": st if state not in ("not yet measured",) else "", "paper": "", "link": "backlog.html"})
# clocks, seals, rechecks
for r in rows:
    p = r.get("paper", "")
    k = clocks.get(p)
    if k:
        if k.get("closed"): r["clock"] = k["closed"]
        elif k.get("sent"):
            left = (dt.date.fromisoformat(k["sent"]) + dt.timedelta(days=N) - today).days
            r["clock"] = f"{left} days left" if left >= 0 else f"no reply, day {N - left}"
        else: r["clock"] = k.get("pending", "not yet sent")
    else: r["clock"] = ""
    r["seal"] = os.path.exists(os.path.join(SITE, "seals", p.lower() + ".svg")) if p.startswith("SM-") else False
    hp = os.path.join(HIST, p.lower() + ".jsonl") if p.startswith("SM-") else ""
    if hp and os.path.exists(hp):
        last = [l for l in open(hp) if l.strip()]
        r["recheck"] = json.loads(last[-1]).get("date", "")[:10] if last else ""
    else: r["recheck"] = ""
order = {"did not hold": 0, "not tested": 1, "held": 2, "not yet measured": 3, "tripwire": 4, "dead": 5}
rows.sort(key=lambda r: (order.get(r["state"], 9), r.get("paper", "") and -int(re.sub(r"\D", "", r["paper"]) or 0)))
COL = {"did not hold": "var(--bad)", "held": "var(--good)", "not tested": "var(--sub)", "not yet measured": "var(--pend)", "tripwire": "var(--blue)", "dead": "var(--faint)"}
def row(r):
    link = f'<a href="{H(r["link"])}">{H(r["paper"] or "backlog")}</a>'
    seal = ' <span title="seal given">&#9679;</span>' if r.get("seal") else ""
    cl = r.get("clock", ""); rc = r.get("recheck", "")
    tail = " · ".join(x for x in (cl, ("rechecked " + rc) if rc else "") if x)
    return (f'<tr data-state="{H(r["state"])}"><td style="color:{COL.get(r["state"], "inherit")};white-space:nowrap">{H(r["state"])}</td><td>{H(r["who"])}</td>'
            f'<td>{H(r["claim"])}<div class="cap">{link}{seal}</div></td><td>{H(r["found"])}{("<div class=cap>" + H(r["next"]) + "</div>") if r.get("next") else ""}</td><td class="cap">{H(tail)}</td></tr>')
counts = {}
for r in rows: counts[r["state"]] = counts.get(r["state"], 0) + 1
btn = "".join(f'<button data-f="{H(s)}">{H(s)} ({c})</button>' for s, c in sorted(counts.items(), key=lambda kv: order.get(kv[0], 9)))
head = idx[:idx.index("<main")]
head = re.sub(r"<title>.*?</title>", "<title>Registry — Second Measurements</title>", head, count=1, flags=re.S)
head = re.sub(r'<meta name="description" content="[^"]*">', '<meta name="description" content="Every public promise we have measured, checked or listed: who said it, what we found, the margin, the clock, the ending.">', head)
foot = idx[idx.index("</main>"):]
body = f'''<main class="paper">
<p class="id">SECOND MEASUREMENTS</p>
<h1>Registry</h1>
<p class="plain">One row for each public promise an organisation made about itself that we have measured, checked and found holding, or listed to measure next. The state is ours; the sentence is theirs. Rows link to the paper, the null row or the backlog entry that carries the evidence.</p>
<p class="meta"><span>{len(rows)} rows</span><span>Rendered {today} UTC</span><span><a href="track-record.html">Track record</a> · <a href="backlog.html">Backlog</a> · <a href="index.html#clocks">Open clocks</a></span></p>
<p class="filters"><button data-f="all">all ({len(rows)})</button>{btn}</p>
<div class="tw"><table id="reg">
<tr><th>State</th><th>Who</th><th>The claim</th><th>What we found</th><th>Clock · recheck</th></tr>
{"".join(row(r) for r in rows)}
</table></div>
<p class="cap">&#9679; marks a paper whose counterpart replied or fixed the finding and got a seal. Clocks count 30 days from the day we sent our questions. Data: <a href="registry.json">registry.json</a>.</p>
<style>.filters button{{font:14px var(--sans);margin:0 6px 6px 0;padding:4px 10px;border:1px solid var(--line);border-radius:6px;background:var(--grey);cursor:pointer}}.filters button.on{{background:var(--ink);color:#fff;border-color:var(--ink)}}</style>
<script>document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{{const f=b.dataset.f;document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("on",x===b));document.querySelectorAll("#reg tr[data-state]").forEach(t=>t.style.display=(f==="all"||t.dataset.state===f)?"":"none");}}));document.querySelector(".filters button").classList.add("on");</script>
'''
out = head + body + foot
try:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import og_tags; out = og_tags.apply(out, "registry")
except Exception: pass
open(os.path.join(SITE, "registry.html"), "w", encoding="utf-8").write(out)
json.dump({"rendered": str(today), "rows": rows}, open(os.path.join(SITE, "registry.json"), "w"), indent=1)
print("registry:", len(rows), "rows", counts)
