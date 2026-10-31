#!/usr/bin/env python3
"""SM-022: how long after a file is uploaded to anaconda.org/conda-forge does the CDN list it?
Inputs (from cf_poll.py and cf_subdir_lm.py, every 3 minutes on one machine):
  versions.jsonl  one row per package version, the first time it appears in the CDN's rss.xml: the feed's lastBuildDate
                  (the CDN sync cycle that listed it) and the version's file upload_time on api.anaconda.org (main label)
  feeds.jsonl     every rss.xml poll: lastBuildDate, Last-Modified, Cloudflare Age
  subdir_lm.jsonl every change of Last-Modified of <subdir>/repodata.json on the CDN (from 21 Oct)
Wait = CDN cycle stamp (lastBuildDate) minus the latest upload_time of the version's files before that stamp.
python3 -I analyze.py DATA_DIR OUT.json"""
import bisect, collections, datetime as dt, email.utils, json, os, statistics as st, sys
D, OUT = sys.argv[1], sys.argv[2]
P = lambda s: dt.datetime.fromisoformat(s.replace(" ", "T"))
V = [json.loads(l) for l in open(os.path.join(D, "versions.jsonl"))]
F = [json.loads(l) for l in open(os.path.join(D, "feeds.jsonl"))]
base = V[0]["first_seen_build"]                       # the first poll lists 100 versions of unknown age: excluded
q = lambda xs, p: sorted(xs)[min(len(xs) - 1, int(p * len(xs)))]
def dist(xs):
    xs = sorted(xs); n = len(xs)
    return {"n": n, "median": round(st.median(xs), 1), "p10": round(q(xs, .1), 1), "p25": round(q(xs, .25), 1),
            "p75": round(q(xs, .75), 1), "p90": round(q(xs, .9), 1), "max": round(xs[-1], 1),
            "le10": sum(x <= 10 for x in xs), "le15": sum(x <= 15 for x in xs), "over15": sum(x > 15 for x in xs),
            "over30": sum(x > 30 for x in xs), "over60": sum(x > 60 for x in xs),
            "over15_pct": round(100 * sum(x > 15 for x in xs) / n, 1)}
rows, relabel = [], []
for v in V:
    if v["first_seen_build"] == base: continue
    b, u = P(v["first_seen_build"]), P(v["last_upload_before_build"])
    w = (b - u).total_seconds() / 60
    if w > 24 * 60: relabel.append({"pkg": v["pkg"], "version": v["version"], "upload": v["last_upload_before_build"], "wait_min": round(w)}); continue
    rows.append({**v, "wait": w, "b": b, "u": u, "noarch": v["subdirs"] == ["noarch"]})
W = [r["wait"] for r in rows]
single = [r for r in rows if r.get("files") == 1]   # one file: its upload time is unambiguously the start
by_day = collections.defaultdict(list)
for r in rows: by_day[r["b"].date().isoformat()].append(r["wait"])
# CDN cycles: distinct stamps; time between them; and in each cycle the wait of the most recently uploaded file it listed
B = sorted({P(f["last_build"]) for f in F}); iv = [(b - a).total_seconds() / 60 for a, b in zip(B, B[1:])]
cyc = collections.defaultdict(list)
for r in rows: cyc[r["b"]].append(r["wait"])
fastest = [min(x) for x in cyc.values()]
lm_after = {}   # rss.xml's own Last-Modified minus its lastBuildDate, per cycle: when the stamped feed was written
for f in F:
    if f.get("last_modified"): lm_after.setdefault(f["last_build"], (email.utils.parsedate_to_datetime(f["last_modified"]) - P(f["last_build"])).total_seconds() / 60)
long_gaps = [{"from": a.isoformat(), "to": b.isoformat(), "minutes": round((b - a).total_seconds() / 60, 1)} for a, b in zip(B, B[1:]) if (b - a).total_seconds() > 60 * 60]
# Second stage, from 21 Oct: the first change of each listed subdir's repodata.json Last-Modified at or after the stamp
S = collections.defaultdict(list)
for l in open(os.path.join(D, "subdir_lm.jsonl")):
    r = json.loads(l)
    if r.get("file") == "repodata.json" and r.get("last_modified"): S[r["subdir"]].append(email.utils.parsedate_to_datetime(r["last_modified"]))
S = {s: sorted(set(x)) for s, x in S.items()}; t0 = min(min(x) for x in S.values()) + dt.timedelta(hours=1)
after_gap = {b for a, b in zip(B, B[1:]) if (b - a).total_seconds() > 60 * 60}   # after a stall, repodata can be written before the stamp (23 Oct 04:52)
st2 = []; elig = 0; unpolled = collections.Counter(); gap_excl = 0
for r in rows:
    if r["b"] < t0: continue
    elig += 1
    if r["b"] in after_gap: gap_excl += 1; continue
    for s in r["subdirs"]:
        if s not in S: unpolled[s] += 1
    ends = []
    for s in r["subdirs"]:
        x = S.get(s, []); i = bisect.bisect_left(x, r["b"])
        if i < len(x): ends.append(x[i])
    if len(ends) == len(r["subdirs"]): st2.append({"single": r.get("files") == 1, "to_stamp": r["wait"], "stamp_to_repodata": (max(ends) - r["b"]).total_seconds() / 60, "to_repodata": (max(ends) - r["u"]).total_seconds() / 60})
poll = [(P(r["first_seen_poll"]) - r["u"]).total_seconds() / 60 for r in rows]
# Inclusion: for each single-file version, the sync stamps between its upload and the stamp that listed it are syncs it missed
missed = [sum(1 for b in B if r["u"] < b < r["b"]) for r in single]
in15 = [r for r in single if any(0 < (b - r["u"]).total_seconds() <= 900 for b in B)]
made15 = sum(1 for r in in15 if min(b for b in B if b > r["u"]) == r["b"])
# Cloudflare: first poll that saw each new feed, minus that feed's own Last-Modified
seen = {}
for f in F:
    if f.get("last_modified") and f["last_build"] not in seen: seen[f["last_build"]] = (P(f["polled_at"]) - email.utils.parsedate_to_datetime(f["last_modified"])).total_seconds() / 60
cf_seen = list(seen.values())[1:]
top = sorted(rows, key=lambda r: -r["wait"])[:10]
out = {
    "window": {"first_stamp": min(r["b"] for r in rows).isoformat(), "last_stamp": max(r["b"] for r in rows).isoformat(), "polls": len(F)},
    "versions": len(V), "excluded_baseline": sum(v["first_seen_build"] == base for v in V), "excluded_relabel": relabel,
    "wait_to_stamp": dist(W), "single_file": dist([r["wait"] for r in single]), "single_file_min": round(min(r["wait"] for r in single), 1), "multi_file": dist([r["wait"] for r in rows if r.get("files", 0) > 1]),
    "single_noarch": dist([r["wait"] for r in single if r["noarch"]]), "single_platform": dist([r["wait"] for r in single if not r["noarch"]]),
    "single_syncs_missed": {"none": sum(m == 0 for m in missed), "one": sum(m == 1 for m in missed), "two_or_more": sum(m >= 2 for m in missed)},
    "single_uploaded_within_15_min_before_a_stamp": {"n": len(in15), "in_that_sync": made15},
    "noarch": dist([r["wait"] for r in rows if r["noarch"]]), "platform": dist([r["wait"] for r in rows if not r["noarch"]]),
    "by_day": {d: {"n": len(x), "median": round(st.median(x), 1), "over15_pct": round(100 * sum(y > 15 for y in x) / len(x), 1)} for d, x in sorted(by_day.items())},
    "cycles": {"n_stamps": len(B), "interval": dist(iv), "fastest_file_in_cycle": dist(fastest), "rss_written_after_stamp": dist(list(lm_after.values())), "rss_written_after_stamp_min": round(min(lm_after.values()), 1), "first_seen_after_feed_written": dist(cf_seen), "interval_min": round(min(iv), 1), "gaps_over_60_min": long_gaps},
    "stage2_since": t0.isoformat(), "stage2": {"eligible": elig, "excluded_after_stall": gap_excl, "unpolled_platforms": dict(unpolled), "n": len(st2), "single_to_repodata": dist([x["to_repodata"] for x in st2 if x["single"]]), "single_to_repodata_min": round(min(x["to_repodata"] for x in st2 if x["single"]), 1), "to_stamp": dist([x["to_stamp"] for x in st2]),
        "stamp_to_repodata": dist([x["stamp_to_repodata"] for x in st2]), "to_repodata": dist([x["to_repodata"] for x in st2])},
    "upload_to_first_poll": dist(poll),
    "longest": [{"pkg": r["pkg"], "version": r["version"], "subdirs": r["subdirs"], "upload": r["last_upload_before_build"], "stamp": r["first_seen_build"], "wait_min": round(r["wait"], 1)} for r in top],
}
json.dump(out, open(OUT, "w"), indent=1)
w = out["wait_to_stamp"]; print(f"{w['n']} versions: median {w['median']} min, p90 {w['p90']}, over 15 {w['over15']} ({w['over15_pct']}%), over 60 {w['over60']}, max {w['max']}")
