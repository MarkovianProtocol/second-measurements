#!/usr/bin/env python3
"""Page numbers (EFTA Bates) on the DOJ Epstein Library data sets, from the first listing page of each set saved on
28 Oct 2026 (doj/ds1.html .. ds12.html). The first EFTA number of set n+1 minus that of set n = pages in set n.
Usage: python3 -I count_efta.py doj/"""
import re, sys
first, lp = {}, {}
for n in range(1, 13):
    t = open(f"{sys.argv[1]}/ds{n}.html", errors="replace").read()
    first[n] = min(int(a) for a in re.findall(r"EFTA(\d+)\.pdf", t))
    pg = [int(x) for x in re.findall(r"\?page=(\d+)", t)]; lp[n] = max(pg) + 1 if pg else 1
for n in range(1, 13):
    span = first[n + 1] - first[n] if n < 12 else None
    print(f"data set {n:>2}: first EFTA{first[n]:08d}  pages {span if span else '(last set)'}  listing pages {lp[n]}")
print("data sets 1-11 span", first[12] - 1, "pages (EFTA00000001 to EFTA%08d); data set 12 starts at EFTA%08d" % (first[12] - 1, first[12]))
