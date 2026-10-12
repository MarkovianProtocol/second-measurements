#!/usr/bin/env python3
"""CT roots recheck (track record edge row, notes to Cloudflare and DigiCert of 3 Oct 2026): for every usable or qualified
log in Chrome's list, fetch /ct/v1/get-roots and count the Chrome-included roots (CCADB AllIncludedRootCertsCSV, Google
Chrome Status = Included) it does not accept. Appends one row to history/ct-roots.jsonl with the per-log missing counts
and the Nimbus and Sphinx figures. Weekly. Standard library; a minute."""
import json, os, csv, io, base64, hashlib, urllib.request, datetime as dt, concurrent.futures as cf
R = os.path.dirname(os.path.abspath(__file__)); H = os.path.join(R, "history", "ct-roots.jsonl"); os.makedirs(os.path.dirname(H), exist_ok=True)
UA = {"User-Agent": "second-measurements recheck (markovianprotocol.com)"}
def get(u, t=60): return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=t).read()
ccadb = get("https://ccadb.my.salesforce-sites.com/ccadb/AllIncludedRootCertsCSV", 120).decode("utf-8", "replace")
chrome = {r["SHA-256 Fingerprint"].upper(): r["Certificate Name"] for r in csv.DictReader(io.StringIO(ccadb)) if (r.get("Google Chrome Status") or "").startswith("Included")}
d = json.loads(get("https://www.gstatic.com/ct/log_list/v3/log_list.json"))
logs = [{"operator": op["name"], "log": l["description"], "url": l.get("url") or l.get("submission_url")}
        for op in d["operators"] for l in op.get("logs", []) + op.get("tiled_logs", []) if list(l["state"])[0] in ("usable", "qualified")]
def fetch(l):
    try:
        j = json.loads(get(l["url"].rstrip("/") + "/ct/v1/get-roots", 40))
        fps = {hashlib.sha256(base64.b64decode(c)).hexdigest().upper() for c in j["certificates"]}
        return {**l, "accepted": len(fps), "chrome_missing": len(set(chrome) - fps)}
    except Exception as e: return {**l, "error": repr(e)[:80]}
with cf.ThreadPoolExecutor(8) as ex: out = list(ex.map(fetch, logs))
ok = [r for r in out if "chrome_missing" in r]
row = {"date": dt.date.today().isoformat(), "chrome_roots": len(chrome), "logs": len(out), "logs_read": len(ok), "logs_missing_none": sum(1 for r in ok if r["chrome_missing"] == 0),
       "nimbus": {r["log"]: r["chrome_missing"] for r in ok if "Nimbus" in r["log"]}, "sphinx": {r["log"]: r["chrome_missing"] for r in ok if "Sphinx" in r["log"]},
       "worst": sorted(((r["chrome_missing"], r["log"]) for r in ok), reverse=True)[:5], "errors": [r["log"] for r in out if "error" in r]}
open(H, "a").write(json.dumps(row) + "\n"); print(json.dumps(row))
