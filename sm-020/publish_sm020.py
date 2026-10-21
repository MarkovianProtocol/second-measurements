#!/usr/bin/env python3
"""Publish-day edits for SM-020, staged 18 Oct so nothing leaks before Monday (index.html, statuses.json and
the page ship with every deploy). Dry run by default: prints what would change. --apply writes.
python3 -I publish_sm021.py [--apply]
Then: ~/deploy_measurements.sh sm-020 → glance.py SM-020 → deploy again (restamp) → update_index_leaves.py sm-020
→ scp cards/sm-020.png → zenodo publish → repo/HF mirror → issue (go) → X (go)."""
import difflib, json, os, re, sys
M = os.path.expanduser("~/second-measurements/site/measurements")
APPLY = "--apply" in sys.argv
S = json.load(open(os.path.expanduser("~/second-measurements/lda/summary_2026-10-15.json"))); LV = json.load(open(os.path.expanduser("~/second-measurements/lda/live_2026Q3.json")))
Y = S["y2025"]; n = lambda x: f"{x:,}"
DOI = "10.5281/zenodo.23396300"
TITLE = "Lobbying reports (LD-2) filed after the 20-day deadline: 11,986 of 97,884 in 2025; live read of the Jul–Sep 2026 deadline"
FOUND = (f"{n(Y['late'])} of {n(Y['total'])} 2025 quarterly reports late ({Y['late_pct']}%), {n(Y['over_30'])} more than a month; "
         f"on the 20 Oct 2026 deadline, {n(LV['missing'])} of {n(LV['expected_pairs'])} registrant–client pairs ({LV['missing_pct']}%) had nothing posted.")
STATUS = {"short": "Published 21 Oct; questions to the Senate and House pending", "long": "Published 21 Oct; questions to the Senate Office of Public Records and the House Legislative Resource Center pending", "color": "pend"}
CARD = ('<a class="card" href="sm-020.html"><p class="num">11,986 of 97,884</p><p class="hl">Lobbying reports for 2025 posted after the 20-day deadline in the Lobbying Disclosure Act; '
        f'on the 20 October 2026 deadline, {n(LV["missing"])} registrant&ndash;client pairs had nothing posted</p>'
        '<p class="tag">SM-020 · Senate &amp; House lobbying disclosure · published</p></a>')
ROW = ('<tr><td class="o">SM-020</td><td class="t"><a href="sm-020.html">' + TITLE + '</a><div class="cap" style="margin:4px 0 0">2026-10-21 · '
       '<a href="https://markovianprotocol.com/verify.html?leaf=0">leaf 0</a> · DOI <a href="https://doi.org/' + DOI + '">' + DOI + '</a></div></td>'
       '<td>' + FOUND + '</td><td class="st" style="color:var(--pend)">' + STATUS["short"] + '</td></tr>')

def edit(path, fn):
    p = os.path.join(M, path); old = open(p, encoding="utf-8").read(); new = fn(old)
    if new == old: print(f"{path}: no change"); return
    print("".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), path, path + " (staged)", n=0))[:3000])
    if APPLY: open(p, "w", encoding="utf-8").write(new); print(f"{path}: written")

def index(s):
    if "sm-020.html" in s: return s
    i = s.index('<div class="latest">') + len('<div class="latest">'); j = s.index("</div>", i)
    cards = re.findall(r'<a class="card".*?</a>', s[i:j], re.S)
    s = s[:i] + CARD + "".join(cards[:len(cards) - 1]) + s[j:]                  # newest first, keep the strip's length
    k = s.index('<tr><td class="o">SM-023</td>')                                 # papers table: newest on top
    return s[:k] + ROW + s[k:]

def statuses(s):
    if '"SM-020"' in s: return s
    a = s.rindex('"SM-023"'); e = s.index("}", a) + 1
    return s[:e] + ',\n "SM-020": ' + json.dumps(STATUS, ensure_ascii=False) + s[e:]

def page(s):
    if 'src="tables.js"' not in s: s = s.replace("</body>", '<script src="tables.js" defer></script>\n</body>')   # CSV + Show your work, as on every paper
    s = s.replace('<span>Status: <span style="color:var(--pend)">draft, not published</span></span>',
                  '<span>Status: <span style="color:var(--pend)">published 2026-10-21; questions to the Senate and House pending</span></span>')
    assert s.count(" UTC.</td></tr></table></div>") == 1
    return s.replace(" UTC.</td></tr></table></div>", " UTC.</td></tr><tr><td>21 Oct 2026</td><td>Published.</td></tr></table></div>")

edit("index.html", index); edit("statuses.json", statuses); edit("sm-020.html", page)
if APPLY: json.load(open(os.path.join(M, "statuses.json")))                       # must still parse
print("APPLIED" if APPLY else "dry run only; nothing written")
