#!/usr/bin/env python3
"""Render sm-011/coverage.html: for each of the Tranco top-1,000 sites reachable today, whether Firefox's CRLite
filter covers its live certificate, and if not, which CT log the certificate's timestamps come from and how far
behind that log Mozilla's reader is. Reads rechecks/sm011/sites_latest.json (written by sm011.py)."""
import json, os, sys, html
R = os.path.dirname(os.path.abspath(__file__)); SITE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "out")
d = json.load(open(os.path.join(R, "sm011", "sites_latest.json")))
sites = d["sites"]; n = len(sites); nc = [s for s in sites if s["verdict"] == "NotCovered"]
H = html.escape
def issuer_short(s):
    for part in s.split(","):
        if part.startswith("O="): return part[2:]
    return s[:40]
rows = []
for s in sites:
    why = ""
    if s["verdict"] == "NotCovered":
        beh = [x for x in s["scts"] if x.get("sct_after_reader")]
        if beh: why = "; ".join(f"{H(x['log'])}: reader {x['reader_lag_days']} days behind, timestamp {x['sct']}" for x in beh)
        elif s["scts"]: why = "logs on the certificate: " + ", ".join(H(x["log"]) for x in s["scts"]) + " (none in the filter's coverage list)"
        else: why = "no embedded CT timestamps read"
    cls = {"Good": "ok", "NotCovered": "bad", "NotEnrolled": "", "Expired": ""}.get(s["verdict"], "")
    rows.append(f'<tr data-h="{H(s["host"])}"><td><code>{H(s["host"])}</code></td><td>{H(issuer_short(s["issuer"]))}</td><td class="{cls}">{H(s["verdict"])}</td><td>{H(s["expires"])}</td><td class="why">{why}</td></tr>')
page = f'''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Is your certificate covered by Firefox's revocation filter? Top-1,000 sites, checked daily — Markovian Protocol</title>
<meta name="description" content="For each of the top 1,000 sites, whether Firefox's CRLite filter covers its live certificate today, and if not, which CT log Mozilla's reader is behind on. Rebuilt daily from Mozilla's own filter.">
<style>
:root{{--ink:#1d1d1f;--sub:#6e6e73;--line:#d2d2d7;--grey:#f5f5f7;--blue:#0066cc;--good:#1d8a4e;--bad:#c62828;--sans:Charter,"Iowan Old Style",Georgia,serif;--mono:"SF Mono",Menlo,monospace}}
*{{margin:0;padding:0;box-sizing:border-box}}body{{font-family:var(--sans);color:var(--ink);font-size:16px;line-height:1.5;padding:0 22px 60px}}
.paper{{max-width:980px;margin:0 auto}}h1{{font-size:clamp(24px,4vw,32px);font-weight:600;margin:48px 0 8px;letter-spacing:-.02em}}p{{margin:0 0 12px}}.sub{{color:var(--sub)}}
input{{font:inherit;padding:10px 14px;border:1px solid var(--line);border-radius:10px;width:100%;max-width:420px;margin:14px 0}}
table{{border-collapse:collapse;width:100%;font-size:14px}}th{{text-align:left;background:var(--grey);color:var(--sub);font-size:12.5px;padding:8px 10px}}td{{padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}}
.ok{{color:var(--good)}}.bad{{color:var(--bad);font-weight:600}}.why{{color:var(--sub);font-size:13px}}code{{font-family:var(--mono);font-size:13px}}pre{{font-family:var(--mono);font-size:12.5px;background:var(--grey);border-radius:10px;padding:12px 14px;overflow-x:auto;margin:8px 0 14px}}
a{{color:var(--blue);text-decoration:none}}.tw{{overflow-x:auto;border:1px solid var(--line);border-radius:12px}}
</style></head><body><main class="paper">
<p class="sub" style="margin-top:40px;font-family:var(--mono);font-size:12px">SM-011 · DAILY LOOKUP</p>
<h1>Is your certificate covered by Firefox&rsquo;s revocation filter?</h1>
<p>Firefox checks revocation against a filter Mozilla rebuilds from Certificate Transparency logs. A certificate is only covered once Mozilla&rsquo;s reader has read past its log entry; on the largest logs the reader runs months behind. This table is the Tranco top 1,000, each site&rsquo;s live certificate fetched and checked against the newest filter today. <a href="../sm-011.html">The paper</a> explains the mechanism; <a href="../rechecks.html">the recheck</a> shows the lag per log over time.</p>
<p class="sub">Filter <code>{H(d["filter"])}</code>, checked {H(d["date"])}: {n} sites reachable, <b class="bad">{len(nc)} not covered</b>, {sum(1 for s in sites if s["verdict"]=="Good")} covered.</p>
<input id="q" type="search" placeholder="type a hostname, issuer or log name" autofocus>
<div class="tw"><table id="t"><tr><th>Site</th><th>Issuer</th><th>Firefox filter</th><th>Expires</th><th>Why not covered</th></tr>
{"".join(rows)}
</table></div>
<p style="margin-top:22px">Check any site yourself with Mozilla&rsquo;s own tool (<a href="https://github.com/mozilla/crlite">mozilla/crlite</a>, rust-query-crlite):</p>
<pre>rust-query-crlite -d ./db --update prod --channel default https example.com</pre>
<p class="sub">&ldquo;NotCovered&rdquo; means Firefox falls back to OCSP or accepts the certificate without a revocation check, depending on the CA&rsquo;s OCSP service and Firefox&rsquo;s settings. &ldquo;NotEnrolled&rdquo; means the issuer is not in the filter at all. Rebuilt daily by <a href="https://github.com/MarkovianProtocol/second-measurements/tree/main/rechecks">the recheck</a>.</p>
</main>
<script>var q=document.getElementById('q'),rs=document.querySelectorAll('#t tr[data-h]');q.addEventListener('input',function(){{var v=q.value.toLowerCase();rs.forEach(function(r){{r.style.display=r.textContent.toLowerCase().indexOf(v)>=0?'':'none'}})}});</script>
</body></html>'''
os.makedirs(os.path.join(SITE, "sm-011"), exist_ok=True)
open(os.path.join(SITE, "sm-011", "coverage.html"), "w").write(page); print("wrote", os.path.join(SITE, "sm-011", "coverage.html"), n, "sites,", len(nc), "not covered")
