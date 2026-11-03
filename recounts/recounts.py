#!/usr/bin/env python3
"""Recounts: one card per recurring public number someone we read publishes, beside our recount of it.
Reads recounts.json; writes recounts.html with the head, nav and footer of a measurement page.
Usage: python3 -I recounts.py recounts.json TEMPLATE_PAGE OUT.html [ROWS.jsonl]   (ROWS: one row per recount, for the HF dataset)"""
import datetime, html, json, re, sys

DATA, TPL, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
ROWS = sys.argv[4] if len(sys.argv) > 4 else None
E = html.escape
day = lambda d: (lambda x: f"{x.day} {x.strftime('%b')}")(datetime.date.fromisoformat(d))
VD = {"holds": ("good", "✓", "Holds"), "close": ("pend", "≈", "Close"), "differs": ("bad", "✗", "Differs")}

cards = []
for p in json.load(open(DATA))["people"]:
    c = p["cycles"][-1]
    kind, icon, word = VD[c["verdict"]]
    claim = f"&ldquo;{E(c['claim'])}&rdquo;" if c["quoted"] else E(c["claim"])
    dots = "".join(f'<span class="dot {VD[x["verdict"]][0]}" title="{day(x["date"])}: {VD[x["verdict"]][2]}"></span>' for x in p["cycles"])
    nxt = f'<span class="dot next" title="next recount"></span>&nbsp;next: {E(p["next"])}' if p.get("next") else ""
    n = len(p["cycles"])
    cards.append(f'''<article class="card" id="{p["id"]}">
<div class="who"><b>{E(p["name"])}</b><span>{E(p["venue"])} &middot; {E(p["cadence"])}</span></div>
<p class="q"><a href="{E(c["source"])}">{claim}</a> <span class="d">({E(c["claim_date"])})</span></p>
<div class="pair"><div class="cell"><p class="k">Their figure</p><p class="v">{E(c["theirs"])}</p><p class="s">{E(c["theirs_sub"])}</p></div>
<div class="cell"><p class="k">Our recount</p><p class="v">{E(c["ours"])}</p><p class="s">{E(c["ours_sub"])}</p></div></div>
<p class="vd {kind}"><span class="ic" aria-hidden="true">{icon}</span>{word} <span class="n">&middot; {E(c["verdict_note"])}</span></p>
<div class="foot"><span class="cycles" aria-label="{n} recount{"s" if n != 1 else ""} so far">{dots}{nxt}</span><span>Recounted {day(c["date"])} &middot; <a href="{E(c["note"])}">note and method</a></span></div>
</article>''')

body = f'''<main class="paper recounts">
<p class="id">SECOND MEASUREMENTS &middot; RECOUNTS</p>
<h1>Recounts</h1>
<p class="sub">Some people we read publish a number every month, or every release. We recount it from public data, a second way, and send them the whole result. Their figure and ours, side by side, updated each time they publish.</p>
<div class="grid">
{"".join(cards)}
</div>
<p class="cap">Each dot is one recount; a dashed dot is the next one. Every recount is a public <a href="notes/">data note</a> with its scripts and a receipt in the Markovian log. These are notes, not papers: no DOI and no review gate. If you published one of these numbers and something here is wrong, write to <!--email_off--><a href="mailto:hello@markovianprotocol.com">hello@markovianprotocol.com</a><!--/email_off--> and we fix the card.</p>
</main>
'''
CSS = '''<style>
.recounts .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));gap:16px;margin:20px 0}
@media (max-width:520px){.recounts .grid{grid-template-columns:1fr}}
.recounts .card{border:1px solid var(--line,#d2d2d7);border-radius:12px;padding:14px 16px 12px;display:flex;flex-direction:column;gap:10px;font-size:14px;line-height:1.45}
.recounts .card p{margin:0}
.recounts .who{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:13px;color:var(--sub,#6e6e73)}
.recounts .who b{color:var(--ink,#1d1d1f);font-size:15px}
.recounts .q{font-size:16px}.recounts .q a{color:inherit}.recounts .q .d{color:var(--sub,#6e6e73)}
.recounts .pair{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.recounts .cell{background:var(--soft,#f5f5f7);border-radius:8px;padding:10px 12px}
.recounts .cell .k{font-size:12px;color:var(--sub,#6e6e73)}
.recounts .cell .v{font-size:22px;font-weight:600;line-height:1.2;font-variant-numeric:tabular-nums}
.recounts .cell .s{font-size:12.5px;color:var(--sub,#6e6e73);margin-top:4px}
.recounts .vd{display:flex;align-items:center;gap:7px;font-weight:600}.recounts .vd .n{font-weight:400;color:var(--sub,#6e6e73)}
.recounts .vd .ic{display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;color:#fff;font-size:11px;font-weight:700}
.recounts .vd.good .ic{background:var(--good,#1d8a4e)}.recounts .vd.pend .ic{background:var(--pend,#b26a00)}.recounts .vd.bad .ic{background:var(--bad,#c62828)}
.recounts .foot{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 14px;font-size:13px;color:var(--sub,#6e6e73);border-top:1px solid var(--line,#d2d2d7);padding-top:10px}
.recounts .cycles{display:inline-flex;align-items:center;gap:5px}
.recounts .dot{width:10px;height:10px;border-radius:50%;display:inline-block}
.recounts .dot.good{background:var(--good,#1d8a4e)}.recounts .dot.pend{background:var(--pend,#b26a00)}.recounts .dot.bad{background:var(--bad,#c62828)}
.recounts .dot.next{border:1.5px dashed var(--sub,#6e6e73)}
.recounts .sub{font-size:17px}
</style>
'''
T = open(TPL).read()
head = T[:T.find("</head>")]
head = head.replace("sm-026.html", "recounts.html").replace("cards/sm-026.png", "cards/recounts.png")
head = re.sub(r"<title>.*?</title>", "<title>Recounts: numbers other people publish, counted a second way — Markovian Protocol</title>", head, flags=re.S)
desc = "Recurring public numbers from people we read, each recounted from public data a second way, updated each time they publish."
head = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + E(desc), head)
head = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + "Recounts: numbers other people publish, counted a second way", head)
head = re.sub(r'(<meta property="og:description" content=")[^"]*', lambda m: m.group(1) + E(desc), head)
nav = T[T.find("</head>"):T.find('<main class="paper">')]
foot = T[T.find("<footer>"):]
open(OUT, "w").write(head + CSS + nav + body + "\n" + foot)
if ROWS:
    with open(ROWS, "w") as fh:
        for p in json.load(open(DATA))["people"]:
            for c in p["cycles"]:
                fh.write(json.dumps({"person": p["name"], "venue": p["venue"], "cadence": p["cadence"], "recounted": c["date"],
                    "claim": c["claim"], "claim_source": c["source"], "their_figure": c["theirs"], "their_figure_detail": c["theirs_sub"],
                    "our_recount": c["ours"], "our_recount_detail": c["ours_sub"], "verdict": c["verdict"], "verdict_note": c["verdict_note"],
                    "note": "https://markovianprotocol.com/measurements/" + c["note"]}, ensure_ascii=False) + "\n")
print("wrote", OUT, "|", len(cards), "cards" + (f" | rows -> {ROWS}" if ROWS else ""))
