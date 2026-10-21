#!/usr/bin/env python3
"""Publish-day edits for SM-023, staged 18 Oct so nothing leaks before Monday (index.html, statuses.json and
the page ship with every deploy). Dry run by default: prints what would change. --apply writes.
python3 -I publish_sm021.py [--apply]
Then: ~/deploy_measurements.sh sm-023 → glance.py SM-023 → deploy again (restamp) → update_index_leaves.py sm-023
→ scp cards/sm-023.png → zenodo publish → repo/HF mirror → issue (go) → X (go)."""
import difflib, json, os, re, sys
M = os.path.expanduser("~/second-measurements/site/measurements")
APPLY = "--apply" in sys.argv
S = json.load(open(os.path.expanduser("~/second-measurements/ubuntu/summary_2026-10-20.json")))
CV = S["cvss_rated"]
DOI = "10.5281/zenodo.23521336"
TITLE = "Ubuntu critical vulnerabilities: Canonical says within 24 hours; of 24 kernel CVEs fixed after being raised to critical, none within a week"
FOUND = (f"{CV['n']} kernel CVEs raised from medium to critical on a CVSS score since June 2026; of the {CV['measured']} fixed after being raised, 0 within a week, "
         f"median {CV['median_d']:g} days; 0 of 33 within 24 hours. 14 of 51 fixed still open on a supported release.")
STATUS = {"short": "Published 21 Oct; question to Canonical pending", "long": "Published 21 Oct; question to the Ubuntu Security Team pending", "color": "pend"}
CARD = ('<a class="card" href="sm-023.html"><p class="num">0 of 33</p><p class="hl">Ubuntu kernel vulnerabilities fixed within 24 hours of being raised to critical, '
        'against Canonical&rsquo;s &ldquo;released within 24 hours&rdquo;; the 24 fixed after being raised took a median 16.5 days</p>'
        '<p class="tag">SM-023 · Canonical, Ubuntu Security Team · published</p></a>')
ROW = ('<tr><td class="o">SM-023</td><td class="t"><a href="sm-023.html">' + TITLE + '</a><div class="cap" style="margin:4px 0 0">2026-10-21 · '
       '<a href="https://markovianprotocol.com/verify.html?leaf=0">leaf 0</a> · DOI <a href="https://doi.org/' + DOI + '">' + DOI + '</a></div></td>'
       '<td>' + FOUND + '</td><td class="st" style="color:var(--pend)">' + STATUS["short"] + '</td></tr>')

def edit(path, fn):
    p = os.path.join(M, path); old = open(p, encoding="utf-8").read(); new = fn(old)
    if new == old: print(f"{path}: no change"); return
    print("".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), path, path + " (staged)", n=0))[:3000])
    if APPLY: open(p, "w", encoding="utf-8").write(new); print(f"{path}: written")

def index(s):
    if "sm-023.html" in s: return s
    i = s.index('<div class="latest">') + len('<div class="latest">'); j = s.index("</div>", i)
    cards = re.findall(r'<a class="card".*?</a>', s[i:j], re.S)
    s = s[:i] + CARD + "".join(cards[:len(cards) - 1]) + s[j:]                  # newest first, keep the strip's length
    k = s.index('<tr><td class="o">SM-021</td>')                                 # papers table: newest on top
    return s[:k] + ROW + s[k:]

def statuses(s):
    if '"SM-023"' in s: return s
    a = s.rindex('"SM-021"'); e = s.index("}", a) + 1
    return s[:e] + ',\n "SM-023": ' + json.dumps(STATUS, ensure_ascii=False) + s[e:]

def page(s):
    if 'src="tables.js"' not in s: s = s.replace("</body>", '<script src="tables.js" defer></script>\n</body>')   # CSV + Show your work, as on every paper
    s = s.replace('<span>Status: <span style="color:var(--pend)">draft, not published</span></span>',
                  '<span>Status: <span style="color:var(--pend)">published 2026-10-21; question to Canonical pending</span></span>')
    return s.replace("<td>Measured. Nobody has seen the page.</td></tr>",
                     "<td>Measured. Nobody has seen the page.</td></tr><tr><td>21 Oct 2026</td><td>Published.</td></tr>")

edit("index.html", index); edit("statuses.json", statuses); edit("sm-023.html", page)
if APPLY: json.load(open(os.path.join(M, "statuses.json")))                       # must still parse
print("APPLIED" if APPLY else "dry run only; nothing written")
