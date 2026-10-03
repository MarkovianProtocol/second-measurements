#!/usr/bin/env python3
"""For every usable or qualified log in Chrome's list, fetch /ct/v1/get-roots and compare the accepted roots
(SHA-256 of DER) with the roots Chrome includes (CCADB AllIncludedRootCertsCSV, Google Chrome Status = Included).
Writes roots_by_log.json: per log, accepted count, Chrome roots missing, MDM root present."""
import json, csv, base64, hashlib, urllib.request, sys, concurrent.futures as cf, time
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
chrome = {r["SHA-256 Fingerprint"].upper(): (r["CA Owner"], r["Certificate Name"]) for r in csv.DictReader(open("ccadb_all_included.csv")) if (r.get("Google Chrome Status") or "").startswith("Included")}
d = json.load(open("log_list.json"))
logs = []
for op in d["operators"]:
    for l in op.get("logs", []) + op.get("tiled_logs", []):
        st = list(l["state"])[0]
        if st in ("usable", "qualified"):
            base = l.get("url") or l.get("submission_url")
            logs.append({"operator": op["name"], "log": l["description"], "state": st, "url": base, "tiled": "submission_url" in l, "interval": l.get("temporal_interval")})
def fetch(l):
    u = l["url"].rstrip("/") + "/ct/v1/get-roots"
    rec = dict(l); t0 = time.time()
    try:
        j = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40))
        ders = [base64.b64decode(c) for c in j["certificates"]]
        fps = {hashlib.sha256(x).hexdigest().upper() for x in ders}
        rec.update({"accepted": len(ders), "chrome_present": len(fps & set(chrome)), "chrome_missing": sorted(chrome[f] for f in set(chrome) - fps), "mdm_root": any(b"Merge Delay Monitor Root" in x for x in ders), "secs": round(time.time() - t0, 1)})
    except Exception as e:
        rec["error"] = repr(e)[:120]
    return rec
with cf.ThreadPoolExecutor(8) as ex: out = list(ex.map(fetch, logs))
json.dump(out, open("roots_by_log.json", "w"), indent=1)
print(len(chrome), "Chrome-included roots (CCADB);", len(out), "logs", file=sys.stderr)
for r in sorted(out, key=lambda r: -len(r.get("chrome_missing", []))):
    print(f"{len(r.get('chrome_missing',[])):3d} missing  {r.get('accepted','ERR'):>5} accepted  MDM={r.get('mdm_root')}  {r['operator']:12s} {r['log']}  {r.get('error','')}")
