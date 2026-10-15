#!/usr/bin/env python3
"""Build sm-017/lookup.json for the station lookup page: for every scored station, its service, licensee,
owner group, state, and per quarter the earliest list upload (after the pre-quarter drop), the deadline and the
late days. Reuses analyze.py's deadline and exemption rules by executing its header, so the two cannot drift.
python3 -I make_lookup.py [out_json]"""
import json, sys, os, csv, datetime as dt, collections
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE); os.chdir(HERE)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "..", "site", "measurements", "sm-017", "lookup.json")
src = open("analyze.py").read(); head = src[:src.index("exempt = [")]
owners = {}
for r in csv.DictReader(open("owners/owners_stations.csv")):
    g = r["group_key"]; owners[(r["service"], r["callSign"])] = (r["licensee"], g[4:] if g.startswith("map:") else "", r["state"])
out = {"built": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%MZ"), "quarters": {}, "stations": {}}
FILES = dict(zip(("tv", "fm", "am"), os.environ.get("SM017_READS", "results_all.json,results_fm_all.json,results_am_all.json").split(",")))   # publish_day.sh sets the merged 14 Oct reads
for svc, f in FILES.items():
    ns = {"__name__": "lookup"}; sys.argv = ["analyze.py", f]; exec(head, ns)
    DEADLINES, RULE_DATES, EXEMPT, quarter_of, quarter_start = ns["DEADLINES"], ns["RULE_DATES"], ns["EXEMPT"], ns["quarter_of"], ns["quarter_start"]
    for q, dl in DEADLINES.items():
        out["quarters"].setdefault(q, {"deadline": dl.isoformat(), "rule_date": RULE_DATES[q].isoformat()})
    for s in ns["d"]["stations"]:
        cs = s["callSign"]
        if s.get("error") or EXEMPT.search(cs): continue
        first = {}
        for x in s["files"]:
            q = quarter_of(x["name"], x["path"])
            if q not in DEADLINES: continue
            up = dt.date.fromisoformat(x["uploaded"])
            if up < quarter_start(q): continue
            if q not in first or up < first[q]: first[q] = up
        lic, grp, st = owners.get((svc, cs), ("", "", ""))
        qs = {}
        for q, dl in DEADLINES.items():
            if q in first: qs[q] = [first[q].isoformat(), (first[q] - dl).days]
            else: qs[q] = None
        out["stations"][f"{svc}:{cs}"] = {"svc": svc, "lic": lic, "grp": grp, "st": st, "q": qs, "n": len(s["files"])}
json.dump(out, open(OUT, "w"), separators=(",", ":"))
print("lookup.json:", len(out["stations"]), "stations,", len(out["quarters"]), "quarters,", os.path.getsize(OUT) // 1024, "KB ->", OUT)
