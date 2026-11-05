#!/usr/bin/env python3
"""Write measurements/notes/index.html: every data note (*.md at the top of notes/), newest first, titled by its first line.
python3 notes_index.py SITE/measurements/notes"""
import html, os, re, sys
d = sys.argv[1]; E = html.escape; rows = []
for f in os.listdir(d):
    if not f.endswith(".md"): continue
    m = re.search(r"(\d{4}-\d{2}-\d{2})\.md$", f)
    title = open(os.path.join(d, f), encoding="utf-8").readline().lstrip("# ").strip()
    rows.append((m.group(1) if m else "", f, title))
rows.sort(reverse=True)
li = "".join(f'<li><span>{E(dt)}</span> <a href="{E(f)}">{E(t)}</a></li>' for dt, f, t in rows)
open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(
    '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    '<title>Data notes — Markovian Protocol</title><style>body{font-family:Charter,Georgia,serif;max-width:760px;margin:40px auto;padding:0 22px;color:#1d1d1f;'
    'overflow-wrap:anywhere}li{margin:10px 0;line-height:1.4}span{color:#86868b;font-size:13px;font-family:ui-monospace,monospace}a{color:#0066cc;text-decoration:none}</style>'
    '</head><body><p><a href="../">Second measurements</a> &middot; notes/</p><h1 style="font-size:28px">Data notes</h1>'
    '<p>Recomputes of numbers people published, with the scripts and data beside each note. Notes, not papers: no DOI and no review gate. '
    'Recurring ones are tracked on <a href="../recounts.html">recounts</a>.</p>'
    f'<ul style="list-style:none;padding:0">{li}</ul></body></html>')
print("notes index:", len(rows), "notes")
