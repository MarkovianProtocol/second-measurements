#!/usr/bin/env python3
"""What changed between the first read (6-10 Oct 2026, version 1 of the page) and a later read, station-quarter by
station-quarter, for the quarters both reads score. python3 drift_reads.py 2026-10-14

Three parts:
  1. first read vs the later read (merged: earliest date seen, see merge_reads.py), both under the current classifier
  2. what the merge itself changed: the later read as the site shows it vs merged
  3. what the 14 Oct classifier fix changed: the merged later read under scan_v1.py (the version-1 classifier) vs scan.py
Reuses analyze.py's deadline and exemption rules by executing its header."""
import json, sys, os, collections, datetime as dt
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE); os.chdir(HERE)
d = sys.argv[1]
OLD = {"tv": "results_all.json", "fm": "results_fm_all.json", "am": "results_am_all.json"}
src = open("analyze.py").read(); head = src[:src.index("exempt = [")]
import scan_v1

def firsts(f, qof):
    ns = {"__name__": "drift"}; sys.argv = ["analyze.py", f]; exec(head, ns)
    DL, EX, qs = ns["DEADLINES"], ns["EXEMPT"], ns["quarter_start"]
    out = {}
    for s in ns["d"]["stations"]:
        if s.get("error") or EX.search(s["callSign"]): continue
        first = {}
        for x in s["files"]:
            q = qof(x["name"], x["path"])
            if q not in DL: continue
            up = dt.date.fromisoformat(x["uploaded"])
            if up < qs(q): continue
            if q not in first or up < first[q]: first[q] = up
        out[s["callSign"]] = first
    return out, DL, ns["d"]["fetched_at"]

def status(f, q, DL):
    return "none" if q not in f else ("late" if f[q] > DL[q] else "on time")

parts = [collections.Counter() for _ in range(3)]; who = [collections.defaultdict(list) for _ in range(3)]
after_first = collections.Counter()
for svc in ("tv", "fm", "am"):
    from scan import quarter_of
    O, DL, fo = firsts(OLD[svc], quarter_of)
    N, _, fn = firsts(f"results_{svc}_{d}.merged.json", quarter_of)
    R, _, _ = firsts(f"results_{svc}_{d}.json", quarter_of)
    V, _, _ = firsts(f"results_{svc}_{d}.merged.json", scan_v1.quarter_of)
    qs_both = [q for q in DL if DL[q] < dt.date.fromisoformat(fo[:10])]   # quarters the first read could score
    first_read_end = dt.date.fromisoformat(fo[:10])
    for i, (A, B) in enumerate(((O, N), (R, N), (V, N))):
        for cs in sorted(set(A) & set(B)):
            for q in (qs_both if i == 0 else DL):
                a, b = status(A[cs], q, DL), status(B[cs], q, DL)
                if a != b:
                    parts[i][(a, b)] += 1; who[i][(a, b)].append(f"{cs} {q}")
                    if i == 0 and a == "none" and B[cs][q] > first_read_end - dt.timedelta(days=5): after_first[B[cs][q].isoformat()] += 1
names = ["1. first read (6-10 Oct) -> " + d + " read, earliest date seen",
         "2. " + d + " read as the site shows it -> earliest date seen (merge_reads.py)",
         "3. version-1 classifier (scan_v1.py) -> 14 Oct fix (scan.py), on the merged " + d + " read"]
for i in range(3):
    print(names[i])
    for k, v in sorted(parts[i].items()):
        print(f"   {k[0]:>8} -> {k[1]:<8} {v:5}" + ("   " + ", ".join(who[i][k]) if v <= 12 else ""))
print("lists that appeared in part 1, by upload date on or after 6 Oct 2026:", dict(sorted(after_first.items())))
