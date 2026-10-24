#!/usr/bin/env python3
"""Federal .gov DNSSEC census. For every domain in CISA's current-federal.csv: is a DS record published in the
.gov zone (asked of two public validating resolvers), does the zone serve DNSKEY, and does a validating resolver
set the AD bit on the apex (SOA) answer. Writes census.jsonl, one line per domain. 20 threads, ~2 minutes."""
import csv, json, subprocess, sys, concurrent.futures as cf, time
RES = ["8.8.8.8", "1.1.1.1"]
def dig(args, server, timeout=6):
    try:
        out = subprocess.run(["dig", "+time=3", "+tries=2", "@"+server] + args, capture_output=True, text=True, timeout=timeout).stdout
    except subprocess.TimeoutExpired:
        return ""
    return out
def one(row):
    d = row["Domain name"].strip().lower()
    rec = {"domain": d, "type": row.get("Domain type"), "agency": row.get("Agency"), "org": row.get("Organization name"), "sec": row.get("Security contact email")}
    ds = dig(["DS", d, "+short"], RES[0]).strip()
    rec["ds"] = bool(ds); rec["ds_algs"] = sorted({l.split()[1] for l in ds.splitlines() if len(l.split()) > 2}) if ds else []
    if not rec["ds"]:                       # second resolver before calling it unsigned
        ds2 = dig(["DS", d, "+short"], RES[1]).strip(); rec["ds"] = bool(ds2); rec["ds_2nd"] = bool(ds2)
    dk = dig(["DNSKEY", d, "+short"], RES[0]).strip()
    rec["dnskey"] = bool(dk)
    soa = dig(["SOA", d, "+dnssec"], RES[0])
    rec["status"] = (soa.split("status: ")[1].split(",")[0] if "status: " in soa else "NONE")
    rec["ad"] = ";; flags:" in soa and " ad" in soa.split(";; flags:")[1].split("\n")[0]
    if rec["status"] == "SERVFAIL":         # distinguish bogus-signed from broken: +cd answers if it's a validation failure
        cd = dig(["SOA", d, "+cd"], RES[0]); rec["cd_status"] = (cd.split("status: ")[1].split(",")[0] if "status: " in cd else "NONE")
    return rec
rows = list(csv.DictReader(open("current-federal.csv")))
t0 = time.time(); out = open("census.jsonl", "w"); n = 0
with cf.ThreadPoolExecutor(20) as ex:
    for rec in ex.map(one, rows):
        out.write(json.dumps(rec) + "\n"); n += 1
        if n % 200 == 0: print(n, "done", round(time.time()-t0), "s", file=sys.stderr, flush=True)
out.close(); print(n, "domains in", round(time.time()-t0), "s", file=sys.stderr)
