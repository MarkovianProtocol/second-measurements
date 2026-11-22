#!/usr/bin/env python3
"""Optimizely one-week recheck: every number in the note. Usage: analyze.py orgs.json run_DIR/  -> prints + writes results.json
CSP scored with Report URI's four questions (16 Nov post): could the page load https://1688360.cc/track.js; could it run the inline
fallback through eval; could it send data to 1688360.cc (connect-src). Every enforced policy must allow a load (CSP rule)."""
import json, os, re, sys, glob, collections
orgs = json.load(open(sys.argv[1])); RUN = sys.argv[2]
crawl = {r["host"]: r for r in map(json.loads, open(os.path.join(RUN, "crawl.jsonl")))}
def parse(p):
    d = {}
    for part in p.split(";"):
        w = part.strip().split()
        if w and w[0].lower() not in d: d[w[0].lower()] = [x for x in w[1:]]   # first occurrence wins
    return d
def srcs(d, *names):
    for n in names:
        if n in d: return d[n]
    return None   # not restricted
def host_ok(sl, strict_ok=False):
    if sl is None: return True
    low = [s.lower() for s in sl]
    if strict_ok and "'strict-dynamic'" in low: return True       # scripts inserted by a trusted script are trusted
    return any(s in ("*", "https:", "http:", "https://1688360.cc", "1688360.cc", "*.cc", "https://*.cc") for s in low)
def eval_ok(sl):
    return sl is None or "'unsafe-eval'" in [s.lower() for s in sl]
def score(r):
    """Report URI's categories: no CSP at all / CSP allowed the payload and the data theft / payload ran but connect-src blocked
    the theft / payload blocked. 'Payload' = loading https://1688360.cc/track.js; the inline eval copy (only in some snippets) is
    reported separately, because which copy each site got isn't published."""
    allp = [parse(p) for p in (r.get("csp") or []) + (r.get("meta_csp") or []) if p.strip()]
    if not allp: return "no CSP" if not r.get("csp_ro") else "report-only CSP only"
    track = all(host_ok(srcs(d, "script-src-elem", "script-src", "default-src"), True) for d in allp)
    send = all(host_ok(srcs(d, "connect-src", "default-src")) for d in allp)
    return "payload blocked" if not track else ("data theft blocked" if not send else "allowed payload and theft")
def evals(r):
    allp = [parse(p) for p in (r.get("csp") or []) + (r.get("meta_csp") or []) if p.strip()]
    return all(eval_ok(srcs(d, "script-src", "default-src")) for d in allp)
RANK = ["no CSP", "report-only CSP only", "allowed payload and theft", "data theft blocked", "payload blocked"]
IOC = [r"1688360\.cc", r"webshell\.lol", r"linkforge\.cc", r"5vobauua3ojpklx\.icu", r"eil786npto9u5bq\.icu", r"ios-hack\.icu", r"je4ft3gn8vxudum\.icu",
       r"q1ls1ho9x7wsxlu\.icu", r"window\._k7", r"__k7b", r"02111110", r"BIGNIAO", r"MTY4ODM2MC5jYw", r"E2ODgzNjAuY2", r"xNjg4MzYwLmNj"]
snips = {}
for p in glob.glob(os.path.join(RUN, "snippets", "*.js")):
    b = open(p, encoding="utf-8", errors="replace").read()
    snips[os.path.basename(p)[:-3]] = {"ioc": [i for i in IOC if re.search(i, b)], "atob": "atob(" in b, "projectJS": bool(re.search(r'"projectJS":\s*function', b))}
rows, cnt = [], collections.Counter()
for o in orgs:
    hs = [crawl.get(h, {"host": h}) for h in o["hosts"]]
    loaded = [r for r in hs if r.get("status") == 200]
    sc = [score(r) for r in loaded]
    sn = [s for r in hs for s in r.get("snippets", [])]
    row = {"org": o["org"], "sector": o["sector"], "hosts": o["hosts"], "loaded": [r["host"] for r in loaded],
           "csp_worst": min(sc, key=RANK.index) if sc else None, "csp_best": max(sc, key=RANK.index) if sc else None,
           "blocked_but_eval_allowed": bool(loaded) and all(score(r) == "payload blocked" and evals(r) for r in loaded),
           "snippets": sorted({s["url"] for s in sn}), "optimizely_runs": any(r.get("optimizely_global") for r in hs) or bool(sn),
           "ioc": sorted({i for s in sn for i in snips.get(s["sha256"], {}).get("ioc", [])}), "bad_requests": sorted({u for r in hs for u in r.get("bad_requests", [])})}
    rows.append(row)
res = {"orgs": len(rows), "hosts": len({h for o in orgs for h in o["hosts"]}),
       "hosts_loaded": sum(1 for r in crawl.values() if r.get("status") == 200),
       "orgs_loaded": sum(1 for r in rows if r["loaded"]),
       "csp_worst": collections.Counter(r["csp_worst"] for r in rows if r["loaded"]),
       "csp_best": collections.Counter(r["csp_best"] for r in rows if r["loaded"]),
       "orgs_payload_blocked": sum(1 for r in rows if r["csp_worst"] == "payload blocked"),
       "orgs_payload_blocked_but_eval_allowed": sum(1 for r in rows if r["blocked_but_eval_allowed"]),
       "orgs_payload_blocked_and_eval_blocked": [r["org"] for r in rows if r["csp_worst"] == "payload blocked" and not r["blocked_but_eval_allowed"]],
       "orgs_optimizely_still_runs": sum(1 for r in rows if r["optimizely_runs"]),
       "orgs_optimizely_not_seen": sum(1 for r in rows if r["loaded"] and not r["optimizely_runs"]),
       "snippets_captured": len(snips), "snippets_with_ioc": sum(1 for s in snips.values() if s["ioc"]),
       "snippets_with_projectJS": sum(1 for s in snips.values() if s["projectJS"]),
       "orgs_with_ioc": [r["org"] for r in rows if r["ioc"]], "orgs_with_bad_requests": [(r["org"], r["bad_requests"]) for r in rows if r["bad_requests"]]}
json.dump({"summary": res, "rows": rows, "snippets": snips}, open("results.json", "w"), indent=1, default=list)
for k, v in res.items(): print(k, dict(v) if isinstance(v, collections.Counter) else v)
