#!/usr/bin/env python3
"""Second-path check: does the CVE record's datePublic match Drupal's own advisory date?

Usage: python3 -I collect_drupal.py <rows.json> <download_dir> <out_dir> [n_sample]

Per sampled Drupal CVE:
  1. GET https://cveawg.mitre.org/api/cve/<ID>            -> <dl>/<ID>.cve.json
  2. GET https://www.drupal.org/api-d7/node.json?field_sa_cve=<ID> -> <dl>/<ID>.node.json
     (drupal.org HTML pages sit behind a JS "Client Challenge"; the api-d7 JSON and the
      RSS feeds are served without it. The node's `created` timestamp is the advisory
      publication time; the rendered page's "Date:" line is derived from it, which the
      RSS cross-check below verifies for recent advisories.)
  3. Cross-check against the three RSS feeds (last 50 items each) for the page's
     "Date:" line and "CVE IDs:" line where the advisory is recent enough to appear.
Writes: results.csv, results.json, retrieval_log.jsonl, SHA256SUMS (over downloads).
"""
import csv, datetime as dt, hashlib, html, json, os, re, sys, time, urllib.request, urllib.error
import xml.etree.ElementTree as ET

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 "
      "(KHTML, like Gecko) Version/17.0 Safari/605.1.15")
rows_path, dl, out = sys.argv[1], sys.argv[2], sys.argv[3]
n_sample = int(sys.argv[4]) if len(sys.argv) > 4 else 30
os.makedirs(dl, exist_ok=True); os.makedirs(out, exist_ok=True)
log = open(os.path.join(out, "retrieval_log.jsonl"), "a")

def sha(b): return hashlib.sha256(b).hexdigest()

def fetch(url, save_as, pause=1.2):
    ts = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json, text/html, */*"})
    status, body, err = None, b"", None
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            status, body = r.status, r.read()
    except urllib.error.HTTPError as e:
        status, body, err = e.code, e.read(), str(e)
    except Exception as e:
        err = repr(e)
    path = os.path.join(dl, save_as)
    with open(path, "wb") as f: f.write(body)
    log.write(json.dumps({"ts": ts, "url": url, "status": status, "bytes": len(body),
                          "sha256": sha(body), "saved": path, "error": err}) + "\n"); log.flush()
    time.sleep(pause)
    return status, body

def utc_date(epoch): return dt.datetime.fromtimestamp(int(epoch), dt.timezone.utc).date().isoformat()
def utc_iso(epoch): return dt.datetime.fromtimestamp(int(epoch), dt.timezone.utc).isoformat(timespec="seconds")
def parse_iso(s):
    if not s: return None
    s = s.replace("Z", "+00:00")
    d = dt.datetime.fromisoformat(s)
    if d.tzinfo is None: d = d.replace(tzinfo=dt.timezone.utc)
    return d

# ---- sample -------------------------------------------------------------------
rows = json.load(open(rows_path))["rows"]
drupal = sorted([r for r in rows if r["cna"] == "drupal" and r.get("own_site") is True],
                key=lambda r: (r["datePublished"], r["id"]))
N = len(drupal)
sample = [drupal[i * N // n_sample] for i in range(n_sample)]
print(f"drupal own_site rows: {N}; sampled {len(sample)}: {sample[0]['datePublished']} .. {sample[-1]['datePublished']}")

# ---- RSS cross-check index ------------------------------------------------------
rss = {}
for feed in ("https://www.drupal.org/security/all/rss.xml", "https://www.drupal.org/security/rss.xml",
             "https://www.drupal.org/security/contrib/rss.xml"):
    name = "rss_" + feed.split("/security/")[1].replace("/", "_")
    st, body = fetch(feed, name)
    if st != 200: continue
    for it in ET.fromstring(body).findall(".//item"):
        link = (it.findtext("link") or "").strip()
        d = html.unescape(it.findtext("description") or "")
        m = re.search(r'field-name-drupalorg-sa-date.*?field-item even">([^<]+)', d, re.S)
        c = re.search(r'field-name-field-sa-cve.*?<div class="field-items">(.*?)</div></div></div>', d, re.S)
        rss[link.rstrip("/")] = {"date_line": m.group(1).strip() if m else None,
                                 "cve_line": re.sub(r"<[^>]+>", " ", c.group(1)).split() if c else None,
                                 "pubDate": it.findtext("pubDate"), "guid": it.findtext("guid")}
print(f"RSS index: {len(rss)} advisories")

# ---- per CVE ----------------------------------------------------------------------
results = []
for r in sample:
    cid = r["id"]; rec = {"id": cid, "input_datePublic": r["datePublic"], "input_datePublished": r["datePublished"], "input_lag_d": r["lag_d"]}
    st, body = fetch(f"https://cveawg.mitre.org/api/cve/{cid}", f"{cid}.cve.json")
    rec["cve_http"] = st
    try:
        j = json.loads(body); cna = j["containers"]["cna"]; meta = j["cveMetadata"]
        rec["datePublic"] = cna.get("datePublic"); rec["datePublished"] = meta.get("datePublished")
        rec["dateUpdated"] = meta.get("dateUpdated"); rec["assignerShortName"] = meta.get("assignerShortName")
        refs = [x.get("url") for x in cna.get("references", [])]
        rec["references"] = refs
        sa = [u for u in refs if re.search(r"drupal\.org/(sa|psa)-", u or "")]
        rec["advisory_url"] = sa[0] if sa else None
        rec["n_drupal_sa_refs"] = len(sa)
    except Exception as e:
        rec["cve_error"] = repr(e); results.append(rec); continue

    st, body = fetch(f"https://www.drupal.org/api-d7/node.json?field_sa_cve={cid}", f"{cid}.node.json")
    rec["node_http"] = st
    nodes = []
    try: nodes = json.loads(body).get("list", [])
    except Exception as e: rec["node_error"] = repr(e)
    rec["n_nodes_for_cve"] = len(nodes)
    node = None
    if nodes:
        # prefer the node whose url matches the CVE record's reference
        node = next((n for n in nodes if rec["advisory_url"] and n.get("url", "").rstrip("/") == rec["advisory_url"].rstrip("/")), nodes[0])
    if node:
        rec["node_url"] = node.get("url"); rec["node_title"] = node.get("title")
        rec["node_created_utc"] = utc_iso(node["created"]); rec["node_changed_utc"] = utc_iso(node["changed"])
        rec["node_cve_ids"] = node.get("field_sa_cve")
        rec["advisory_date"] = utc_date(node["created"])
        rec["advisory_url_matches_node"] = bool(rec["advisory_url"]) and node.get("url", "").rstrip("/") == rec["advisory_url"].rstrip("/")
    else:
        rec["advisory_date"] = None
    x = rss.get((rec.get("node_url") or rec.get("advisory_url") or "").rstrip("/"))
    if x:
        rec["rss_date_line"] = x["date_line"]; rec["rss_cve_line"] = x["cve_line"]; rec["rss_pubDate"] = x["pubDate"]
        try:
            rec["rss_date_line_iso"] = dt.datetime.strptime(x["date_line"], "%Y-%B-%d").date().isoformat()
            rec["rss_date_line_eq_created"] = rec["rss_date_line_iso"] == rec.get("advisory_date")
        except Exception: pass

    notes = []
    dp = parse_iso(rec.get("datePublic")); dpub = parse_iso(rec.get("datePublished"))
    if rec.get("advisory_date"):
        adv = parse_iso(rec["node_created_utc"])
        rec["delta_days_advisory_to_published"] = round((dpub - adv).total_seconds() / 86400, 3) if dpub else None
        rec["match_datePublic_eq_advisory_date"] = (dp.date().isoformat() == rec["advisory_date"]) if dp else None
        if dp:
            rec["datePublic_minus_advisory_days"] = round((dp - adv).total_seconds() / 86400, 3)
            if not rec["match_datePublic_eq_advisory_date"]:
                notes.append(f"datePublic {rec['datePublic']} != advisory created {rec['node_created_utc']}")
    else:
        rec["delta_days_advisory_to_published"] = None; rec["match_datePublic_eq_advisory_date"] = None
        notes.append("no drupal.org node found for this CVE via field_sa_cve")
    if rec.get("n_drupal_sa_refs", 0) == 0: notes.append("CVE record has no drupal.org sa-/psa- reference")
    if rec.get("n_drupal_sa_refs", 0) > 1: notes.append(f"{rec['n_drupal_sa_refs']} drupal.org advisory refs")
    if node and rec.get("node_cve_ids") and cid not in rec["node_cve_ids"]: notes.append("CVE id absent from node field_sa_cve")
    if node and rec.get("advisory_url") and not rec["advisory_url_matches_node"]: notes.append("CVE reference URL != node url")
    if rec.get("rss_date_line") and rec.get("rss_date_line_eq_created") is False: notes.append("RSS Date line != created date")
    if node and node.get("created") != node.get("changed"): notes.append(f"node edited after publish (changed {rec['node_changed_utc']})")
    rec["notes"] = "; ".join(notes)
    results.append(rec)
    print(f"{cid}: public={rec.get('datePublic')} published={rec.get('datePublished')} advisory={rec.get('advisory_date')} "
          f"delta={rec.get('delta_days_advisory_to_published')} match={rec.get('match_datePublic_eq_advisory_date')} {rec['notes']}")

json.dump({"generated_utc": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"), "n_drupal_own_site": N,
           "sample_rule": "sorted by datePublished, index i*N//n for i in range(n)", "results": results},
          open(os.path.join(out, "results.json"), "w"), indent=1)
cols = ["id", "datePublic", "datePublished", "advisory_url", "advisory_date", "node_created_utc",
        "delta_days_advisory_to_published", "match_datePublic_eq_advisory_date", "datePublic_minus_advisory_days",
        "rss_date_line", "rss_cve_line", "node_cve_ids", "notes"]
with open(os.path.join(out, "results.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore"); w.writeheader()
    for rec in results: w.writerow({k: (json.dumps(v) if isinstance(v, list) else v) for k, v in rec.items()})
with open(os.path.join(out, "SHA256SUMS"), "w") as f:
    for name in sorted(os.listdir(dl)):
        p = os.path.join(dl, name)
        if os.path.isfile(p): f.write(f"{sha(open(p,'rb').read())}  {name}\n")
print("done")
