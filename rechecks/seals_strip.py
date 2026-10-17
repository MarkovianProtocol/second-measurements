#!/usr/bin/env python3
"""The row of earned seals, built from site/measurements/seals/*.svg (each seal's <title> names the paper, who, the act and
the time; the date line gives the order). Used by make_home.py (home page) and run before every deploy for the measurements
index: python3 -I seals_strip.py SITE_MEASUREMENTS_DIR  -> rewrites <!--seals-->...<!--/seals--> in index.html."""
import glob, html, os, re, sys

def seals(mdir):
    out = []
    for p in glob.glob(os.path.join(mdir, "seals", "sm-*.svg")):
        s = open(p, encoding="utf-8").read()
        title = re.search(r"<title>([^<]+)</title>", s).group(1)          # Second Measurement · SM-010 · docs fixed by ... in 4 days
        paper = re.search(r"(SM-\d{3})", title).group(1)
        what = title.split("·")[-1].strip()
        date = (re.search(r"SM-\d{3} · (\d{4}-\d{2}-\d{2})", s) or re.search(r"(\d{4}-\d{2}-\d{2})", s)).group(1)
        org = re.search(r" by (.+?) in ", what)
        out.append({"file": os.path.basename(p), "paper": paper, "what": what, "date": date, "org": org.group(1) if org else paper})
    return sorted(out, key=lambda x: x["date"], reverse=True)

def strip(mdir, base="", tag=""):
    ss = seals(mdir); orgs = len({x["org"] for x in ss})
    imgs = "".join(f'<a href="{base}{x["paper"].lower()}.html{tag}" title="{html.escape(x["paper"] + ": " + x["what"])}">'
                   f'<img src="{base}seals/{x["file"]}" alt="{html.escape("Seal, " + x["paper"] + ", " + x["what"])}" width="64" height="64" loading="lazy"></a>'
                   for x in ss)
    return (f'<div class="seals" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:14px 0 6px">{imgs}</div>'
            f'<p class="cap">{len(ss)} seals from {orgs} organisations, each for answering on the record or fixing what we measured. '
            f'<a href="{base}track-record.html{tag}#round-trips">Round trips</a>.</p>')

if __name__ == "__main__":
    mdir = sys.argv[1]; p = os.path.join(mdir, "index.html"); s = open(p, encoding="utf-8").read()
    block = "<!--seals-->" + strip(mdir) + "<!--/seals-->"
    if "<!--seals-->" in s:
        s = re.sub(r"<!--seals-->.*?<!--/seals-->", lambda _: block, s, flags=re.S)
    else:   # first run: right after the latest-papers strip
        i = s.index('<div class="latest">'); j = s.index("</div>", i) + len("</div>"); s = s[:j] + "\n" + block + s[j:]
    open(p, "w", encoding="utf-8").write(s)
    print("seals:", len(seals(mdir)))
