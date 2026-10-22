#!/usr/bin/env python3
"""Publish-day edits for SM-024 (22 Oct 2026): index card + papers row, statuses.json. Dry run by default; --apply writes.
python3 -I publish_sm024.py [--apply]
Then: ~/deploy_measurements.sh sm-024 → glance.py SM-024 → deploy again (restamp) → update_index_leaves.py sm-024
→ scp cards/sm-024.png → zenodo upload+publish → repo/HF mirror → questions to the FARA Unit (go) → X (go)."""
import difflib, json, os, re, sys
M = os.path.expanduser("~/second-measurements/site/measurements")
APPLY = "--apply" in sys.argv
DOI = "10.5281/zenodo.23575930"
TITLE = ("FARA supplemental statements: due within 30 days of each six-month period; since January 2024, "
         "632 of 2,155 late, and 150 registered agents overdue today")
FOUND = ("632 of 2,155 supplemental statements received more than 30 days after their period (29.3%), median 27 days past due; "
         "310 of 632 agents late at least once. 150 of the 539 active agents have a statement past due and none on file "
         "(78 behind, 72 none since 2024, 60 never filed one).")
STATUS = {"short": "Published 22 Oct; questions to the FARA Unit pending", "long": "Published 22 Oct; questions to the Justice Department’s FARA Unit pending", "color": "pend"}
CARD = ('<a class="card" href="sm-024.html"><p class="num">632 of 2,155</p><p class="hl">FARA supplemental statements received late since January 2024; '
        '150 registered foreign agents have one overdue today, 60 of them never filed one</p>'
        '<p class="tag">SM-024 · Justice Department, FARA Unit · published</p></a>')
ROW = ('<tr><td class="o">SM-024</td><td class="t"><a href="sm-024.html">' + TITLE + '</a><div class="cap" style="margin:4px 0 0">2026-10-22 · '
       '<a href="https://markovianprotocol.com/verify.html?leaf=0">leaf 0</a> · DOI <a href="https://doi.org/' + DOI + '">' + DOI + '</a></div></td>'
       '<td>' + FOUND + '</td><td class="st" style="color:var(--pend)">' + STATUS["short"] + '</td></tr>')

def edit(path, fn):
    p = os.path.join(M, path); old = open(p, encoding="utf-8").read(); new = fn(old)
    if new == old: print(f"{path}: no change"); return
    print("".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), path, path + " (staged)", n=0))[:3000])
    if APPLY: open(p, "w", encoding="utf-8").write(new); print(f"{path}: written")

def index(s):
    if "sm-024.html" in s: return s
    i = s.index('<div class="latest">') + len('<div class="latest">'); j = s.index("</div>", i)
    cards = re.findall(r'<a class="card".*?</a>', s[i:j], re.S)
    s = s[:i] + CARD + "".join(cards[:len(cards) - 1]) + s[j:]                  # newest first, keep the strip's length
    k = s.index('<tr><td class="o">SM-020</td>')                                 # papers table: newest on top
    return s[:k] + ROW + s[k:]

def statuses(s):
    if '"SM-024"' in s: return s
    a = s.rindex('"SM-023"'); e = s.index("}", a) + 1
    return s[:e] + ',\n "SM-024": ' + json.dumps(STATUS, ensure_ascii=False) + s[e:]

edit("index.html", index); edit("statuses.json", statuses)
if APPLY: json.load(open(os.path.join(M, "statuses.json")))                       # must still parse
print("APPLIED" if APPLY else "dry run only; nothing written")
