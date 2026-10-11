#!/usr/bin/env python3
"""Independent clocks for the advisory date.
Usage: python3 -I calibrate_wayback.py <results.json> <download_dir> <out_dir>
 (a) RSS calibration: for up to 8 feed items, fetch api-d7/node/<nid>.json and compare the
     rendered "Date:" line and RSS pubDate against node.created (UTC).
 (b) Wayback CDX: first 200 capture of each sampled advisory URL vs node.created.
Appends to retrieval_log.jsonl; writes independent_clocks.json; refreshes SHA256SUMS.
"""
import datetime as dt, hashlib, html, json, os, re, sys, time, urllib.request, urllib.error, urllib.parse
import xml.etree.ElementTree as ET
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15")
res_path, dl, out = sys.argv[1:4]
log = open(os.path.join(out, "retrieval_log.jsonl"), "a")
def sha(b): return hashlib.sha256(b).hexdigest()
def fetch(url, save_as, pause=1.2):
    ts = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json, text/html, */*"})
    status, body, err = None, b"", None
    try:
        with urllib.request.urlopen(req, timeout=90) as r: status, body = r.status, r.read()
    except urllib.error.HTTPError as e: status, body, err = e.code, e.read(), str(e)
    except Exception as e: err = repr(e)
    path = os.path.join(dl, save_as); open(path, "wb").write(body)
    log.write(json.dumps({"ts": ts, "url": url, "status": status, "bytes": len(body), "sha256": sha(body), "saved": path, "error": err}) + "\n"); log.flush()
    time.sleep(pause); return status, body
def P(s): return dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
def utc(e): return dt.datetime.fromtimestamp(int(e), dt.timezone.utc)

out_doc = {"rss_calibration": [], "wayback": []}
# (a) RSS calibration
feed = open(os.path.join(dl, "rss_all_rss.xml"), "rb").read()
items = ET.fromstring(feed).findall(".//item")
pick = [items[i * len(items) // 8] for i in range(8)]
for it in pick:
    nid = (it.findtext("guid") or "").split(" ")[0]; link = it.findtext("link")
    d = html.unescape(it.findtext("description") or "")
    m = re.search(r'field-name-drupalorg-sa-date.*?field-item even">([^<]+)', d, re.S)
    date_line = m.group(1).strip() if m else None
    st, body = fetch(f"https://www.drupal.org/api-d7/node/{nid}.json", f"rsscal_node_{nid}.json")
    rec = {"nid": nid, "link": link, "rss_date_line": date_line, "rss_pubDate": it.findtext("pubDate"), "node_http": st}
    try:
        n = json.loads(body); c = utc(n["created"])
        rec["node_created_utc"] = c.isoformat(timespec="seconds"); rec["node_url"] = n.get("url"); rec["node_cve"] = n.get("field_sa_cve")
        rec["date_line_iso"] = dt.datetime.strptime(date_line, "%Y-%B-%d").date().isoformat()
        rec["date_line_eq_created_date"] = rec["date_line_iso"] == c.date().isoformat()
        pd = dt.datetime.strptime(it.findtext("pubDate"), "%a, %d %b %Y %H:%M:%S %z")
        rec["pubDate_minus_created_s"] = int((pd - c).total_seconds())
    except Exception as e: rec["error"] = repr(e)
    out_doc["rss_calibration"].append(rec); print("RSScal", rec)

# (b) Wayback first capture
R = json.load(open(res_path))["results"]
for r in R:
    u = r["advisory_url"]; created = P(r["node_created_utc"])
    key = re.sub(r"^https?://", "", u).rstrip("/")
    api = ("https://web.archive.org/cdx/search/cdx?url=" + urllib.parse.quote(key, safe="") +
           "&output=json&fl=timestamp,statuscode,original&filter=statuscode:200&limit=3&from=2025")
    st, body = fetch(api, f"{r['id']}.cdx.json", pause=2.0)
    rec = {"id": r["id"], "advisory_url": u, "node_created_utc": r["node_created_utc"], "datePublic": r["datePublic"], "cdx_http": st}
    try:
        rows = json.loads(body) if body.strip() else []
        caps = rows[1:] if rows else []
        rec["n_caps_returned"] = len(caps)
        if caps:
            t = dt.datetime.strptime(caps[0][0], "%Y%m%d%H%M%S").replace(tzinfo=dt.timezone.utc)
            rec["first_capture_utc"] = t.isoformat(timespec="seconds")
            rec["first_capture_minus_created_h"] = round((t - created).total_seconds() / 3600, 2)
            rec["first_capture_before_created"] = t < created
    except Exception as e: rec["error"] = repr(e)
    out_doc["wayback"].append(rec)
    print("WB", r["id"], rec.get("first_capture_utc"), rec.get("first_capture_minus_created_h"), rec.get("error") or "")

json.dump(out_doc, open(os.path.join(out, "independent_clocks.json"), "w"), indent=1)
with open(os.path.join(out, "SHA256SUMS"), "w") as f:
    for name in sorted(os.listdir(dl)):
        p = os.path.join(dl, name)
        if os.path.isfile(p): f.write(f"{sha(open(p,'rb').read())}  {name}\n")
print("done")
