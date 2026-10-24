#!/usr/bin/env python3
"""Publish-day edits for SM-013 (23 Oct 2026): index card + papers row, statuses.json. Dry run by default; --apply writes.
python3 -I publish_sm013.py [--apply]
Then: ~/deploy_measurements.sh sm-013 -> glance.py -> deploy again (restamp) -> update_index_leaves.py -> card png -> zenodo upload+publish -> mirrors -> questions to CISA/OMB (go) -> X (go)."""
import difflib, json, os, re, sys
M = os.path.expanduser("~/second-measurements/site/measurements")
APPLY = "--apply" in sys.argv
DOI = "10.5281/zenodo.23608525"
TITLE = ("Federal DNSSEC: OMB withdrew its 2008 mandate in 2018 because agencies &ldquo;already should have&rdquo; done it; "
         "183 of 1,169 executive-branch domains are still unsigned, and 63 zones sign only with SHA-1")
FOUND = ("1,105 of 1,316 federal domains have a DNSSEC chain (84.0%); executive branch 986 of 1,169. 129 of the 183 unsigned answer with an address "
         "(grants.gov, sam.gov, get.gov). 13 refused by Google and Cloudflare resolvers; 63 SHA-1-only zones incl. nsa.gov and the Supreme Court. Rechecked 23 Oct: unchanged.")
STATUS = {"short": "Published 23 Oct; questions to CISA and OMB not yet sent", "long": "Published 23 Oct; reviewed before publication by Kaveh Ranjbar; questions to CISA’s .gov program and OMB not yet sent", "color": "pend"}
CARD = ('<a class="card" href="sm-013.html"><p class="num">183 of 1,169</p><p class="hl">executive-branch .gov domains still have no DNSSEC, eight years after OMB '
        'withdrew the mandate because agencies &ldquo;already should have&rdquo; done it; nsa.gov signs with SHA-1</p>'
        '<p class="tag">SM-013 · OMB and CISA · published</p></a>')
ROW = ('<tr><td class="o">SM-013</td><td class="t"><a href="sm-013.html">' + TITLE + '</a><div class="cap" style="margin:4px 0 0">2026-10-23 · '
       '<a href="https://markovianprotocol.com/verify.html?leaf=0">leaf 0</a> · DOI <a href="https://doi.org/' + DOI + '">' + DOI + '</a></div></td>'
       '<td>' + FOUND + '</td><td class="st" style="color:var(--pend)">' + STATUS["short"] + '</td></tr>')

def edit(path, fn):
    p = os.path.join(M, path); old = open(p, encoding="utf-8").read(); new = fn(old)
    if new == old: print(f"{path}: no change"); return
    print("".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), path, path + " (staged)", n=0))[:3000])
    if APPLY: open(p, "w", encoding="utf-8").write(new); print(f"{path}: written")

def index(s):
    if "sm-013.html" in s: return s
    i = s.index('<div class="latest">') + len('<div class="latest">'); j = s.index("</div>", i)
    cards = re.findall(r'<a class="card".*?</a>', s[i:j], re.S)
    s = s[:i] + CARD + "".join(cards[:len(cards) - 1]) + s[j:]                  # newest first, keep the strip's length
    k = s.index('<tr><td class="o">SM-024</td>')                                 # papers table: newest on top
    return s[:k] + ROW + s[k:]

def statuses(s):
    if '"SM-013"' in s: return s
    a = s.index('"SM-012"'); e = s.index("}", a) + 1
    return s[:e] + ',\n "SM-013": ' + json.dumps(STATUS, ensure_ascii=False) + s[e:]

edit("index.html", index); edit("statuses.json", statuses)
if APPLY: json.load(open(os.path.join(M, "statuses.json")))                       # must still parse
print("APPLIED" if APPLY else "dry run only; nothing written")
