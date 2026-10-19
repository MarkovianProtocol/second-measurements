#!/usr/bin/env python3
"""Render the 'Open clocks' table into index.html between <!--clocks--> and <!--/clocks-->.
Usage: clocks.py SITE_DIR [clocks.json]  (default: SITE_DIR/clocks.json). Idempotent; run after every recheck
on Neo (run.sh) and before every deploy on the Mac, so both copies carry today's day counts."""
import json, os, sys, html, datetime as dt
SITE = sys.argv[1]; J = sys.argv[2] if len(sys.argv) > 2 else os.path.join(SITE, "clocks.json")
d = json.load(open(J)); N = d.get("clock_days", 30); today = dt.datetime.now(dt.timezone.utc).date()
H = html.escape
def row(r):
    link = f'<a href="{H(r["page"])}">{H(r["paper"])}</a>'
    if r.get("closed"):
        days = (dt.date.fromisoformat(r["reply"]) - dt.date.fromisoformat(r["sent"])).days if r.get("reply") and r.get("sent") else None
        when = f"replied in {days} day{'s' if days != 1 else ''}" if days is not None and days >= 1 else ("replied the same day" if days == 0 else "replied")
        return f'<tr><td class="o">{link}</td><td>{H(r["asked"])}</td><td>{H(r["sent"] or "")}</td><td style="color:var(--good)">{when}</td><td>{H(r["closed"])}</td></tr>'
    if not r.get("sent"):
        return f'<tr><td class="o">{link}</td><td>{H(r["asked"])}</td><td>&mdash;</td><td style="color:var(--sub)">not yet sent</td><td>{H(r.get("pending") or "")}</td></tr>'
    sent = dt.date.fromisoformat(r["sent"]); ends = sent + dt.timedelta(days=N); left = (ends - today).days
    if r.get("reply"):
        days = (dt.date.fromisoformat(r["reply"]) - sent).days
        return f'<tr><td class="o">{link}</td><td>{H(r["asked"])}</td><td>{sent}</td><td style="color:var(--good)">{"replied the same day" if days == 0 else f"replied in {days} day" + ("s" if days != 1 else "")}</td><td>reply on the page</td></tr>'
    if left >= 0:
        return f'<tr><td class="o">{link}</td><td>{H(r["asked"])}</td><td>{sent}</td><td style="color:var(--pend)">{left} day{"s" if left != 1 else ""} left</td><td>clock ends {ends}</td></tr>'
    return f'<tr><td class="o">{link}</td><td>{H(r["asked"])}</td><td>{sent}</td><td style="color:var(--bad)">no reply, day {-left + N}</td><td>clock ran out {ends}; next: the party who can act</td></tr>'
rows = sorted(d["rows"], key=lambda r: (r.get("closed") is not None, r.get("reply") is not None, r.get("sent") or "9999"))
block = ('<!--clocks--><h2 id="clocks">Open clocks</h2>\n'
         f'<p class="cap">Every party we asked, the day the note went, and where its {N}-day clock stands today ({today}). A reply is printed on the paper and scored; silence past day {N} turns red and counts. The row then goes to whoever can act on the finding.</p>\n'
         '<div class="tw"><table>\n<tr><th>Paper</th><th>Asked</th><th>Sent</th><th>Clock</th><th>Ending</th></tr>\n' + "\n".join(row(r) for r in rows) + '\n</table></div><!--/clocks-->')
p = os.path.join(SITE, "index.html"); s = open(p, encoding="utf-8").read()
if "<!--clocks-->" in s:
    a = s.index("<!--clocks-->"); b = s.index("<!--/clocks-->") + len("<!--/clocks-->"); s = s[:a] + block + s[b:]
else:
    anchor = "<h2>Checked, nothing found</h2>"
    if anchor not in s: sys.exit("no anchor in index.html")
    s = s.replace(anchor, block + "\n" + anchor, 1)
open(p, "w", encoding="utf-8").write(s); print("clocks:", len(rows), "rows, today", today)
