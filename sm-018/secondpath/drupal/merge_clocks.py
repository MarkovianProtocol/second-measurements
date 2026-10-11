#!/usr/bin/env python3
"""Retry failed Wayback CDX lookups once, add the security-news mailing-list email Date
header as a third clock, and summarise.
Usage: python3 -I merge_clocks.py <results.json> <independent_clocks.json> <download_dir> <out_dir>
"""
import datetime as dt, hashlib, json, os, re, sys, time, urllib.request, urllib.error, urllib.parse, email.utils
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15")
res_path, ic_path, dl, out = sys.argv[1:5]
log = open(os.path.join(out, "retrieval_log.jsonl"), "a")
def sha(b): return hashlib.sha256(b).hexdigest()
def P(s): return dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
def fetch(url, save_as, pause=2.0):
    ts = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    status, body, err = None, b"", None
    try:
        with urllib.request.urlopen(req, timeout=120) as r: status, body = r.status, r.read()
    except urllib.error.HTTPError as e: status, body, err = e.code, e.read(), str(e)
    except Exception as e: err = repr(e)
    open(os.path.join(dl, save_as), "wb").write(body)
    log.write(json.dumps({"ts": ts, "url": url, "status": status, "bytes": len(body), "sha256": sha(body), "saved": os.path.join(dl, save_as), "error": err}) + "\n"); log.flush()
    time.sleep(pause); return status, body

R = json.load(open(res_path))["results"]; IC = json.load(open(ic_path))
by_id = {w["id"]: w for w in IC["wayback"]}
# (1) retry CDX where the saved body was not a JSON array
for r in R:
    w = by_id.setdefault(r["id"], {"id": r["id"], "advisory_url": r["advisory_url"], "node_created_utc": r["node_created_utc"], "datePublic": r["datePublic"]})
    body = open(os.path.join(dl, f"{r['id']}.cdx.json"), "rb").read() if os.path.exists(os.path.join(dl, f"{r['id']}.cdx.json")) else b""
    ok = body.strip().startswith(b"[")
    if not ok:
        key = re.sub(r"^https?://", "", r["advisory_url"]).rstrip("/")
        api = ("https://web.archive.org/cdx/search/cdx?url=" + urllib.parse.quote(key, safe="") + "&output=json&fl=timestamp,statuscode,original&filter=statuscode:200&limit=3&from=2025")
        st, body = fetch(api, f"{r['id']}.cdx.json"); w["cdx_http_retry"] = st; ok = body.strip().startswith(b"[")
    w["cdx_ok"] = ok
    for k in ("first_capture_utc", "first_capture_minus_created_h", "first_capture_before_created", "error"): w.pop(k, None)
    if ok:
        rows = json.loads(body) if body.strip() else []; caps = rows[1:] if rows else []
        w["n_caps_returned"] = len(caps)
        if caps:
            t = dt.datetime.strptime(caps[0][0], "%Y%m%d%H%M%S").replace(tzinfo=dt.timezone.utc); c = P(r["node_created_utc"])
            w["first_capture_utc"] = t.isoformat(timespec="seconds"); w["first_capture_minus_created_h"] = round((t - c).total_seconds() / 3600, 2); w["first_capture_before_created"] = t < c
    else:
        w["n_caps_returned"] = None; w["error"] = "CDX unavailable after retry"
IC["wayback"] = [by_id[r["id"]] for r in R]

# (2) mailing list: parse mbox files, map "View online: <url>" -> email Date header
mail = {}
for name in sorted(os.listdir(dl)):
    if name.startswith("security-news_") and name.endswith(".txt"):
        for msg in open(os.path.join(dl, name), encoding="utf-8", errors="replace").read().split("\nFrom security-news at drupal.org ")[0:]:
            d = re.search(r"^Date: (.+)$", msg, re.M); u = re.search(r"View online: (https://www\.drupal\.org/\S+)", msg)
            cve = re.search(r"CVE IDs:\S?(.+)$", msg, re.M); dl_ = re.search(r"^Date:\S?(\d{4}-[A-Za-z]+-\d{2})$", msg, re.M)
            if d and u:
                mail[u.group(1).rstrip("/")] = {"email_date": email.utils.parsedate_to_datetime(d.group(1)).astimezone(dt.timezone.utc).isoformat(timespec="seconds"),
                                                 "body_date_line": dl_.group(1) if dl_ else None, "body_cve_line": cve.group(1).strip() if cve else None, "archive": name}
IC["mailing_list_archive_note"] = ("lists.drupal.org/pipermail/security-news archive ends 2026-February and is incomplete "
                                   f"(Jan: 7 msgs, Feb: 3 msgs); {len(mail)} messages parsed")
IC["mailing_list"] = []
for r in R:
    m = mail.get(r["advisory_url"].rstrip("/"))
    rec = {"id": r["id"], "advisory_url": r["advisory_url"], "node_created_utc": r["node_created_utc"], "datePublic": r["datePublic"], "in_archive": bool(m)}
    if m:
        rec.update(m); rec["email_minus_created_s"] = int((P(m["email_date"]) - P(r["node_created_utc"])).total_seconds())
        rec["email_minus_datePublic_s"] = int((P(m["email_date"]) - P(r["datePublic"])).total_seconds())
        rec["body_cve_line_contains_id"] = r["id"] in (m["body_cve_line"] or "")
    IC["mailing_list"].append(rec)

# (3) summary
wb = [w for w in IC["wayback"] if w.get("first_capture_utc")]
IC["summary"] = {
    "n_sample": len(R),
    "match_datePublic_date_eq_advisory_date": sum(1 for r in R if r["match_datePublic_eq_advisory_date"]),
    "datePublic_minus_created_seconds": {r["id"]: int((P(r["datePublic"]) - P(r["node_created_utc"])).total_seconds()) for r in R},
    "rss_calibration_date_line_eq_created": [c.get("date_line_eq_created_date") for c in IC["rss_calibration"]],
    "rss_calibration_pubDate_minus_created_s": [c.get("pubDate_minus_created_s") for c in IC["rss_calibration"]],
    "wayback_cdx_ok": sum(1 for w in IC["wayback"] if w.get("cdx_ok")), "wayback_with_capture": len(wb),
    "wayback_first_capture_before_created": sum(1 for w in wb if w["first_capture_before_created"]),
    "wayback_first_capture_hours_after_created": sorted(w["first_capture_minus_created_h"] for w in wb),
    "mailing_list_matches": [(m["id"], m["email_minus_created_s"], m["email_minus_datePublic_s"], m["body_cve_line_contains_id"]) for m in IC["mailing_list"] if m["in_archive"]],
}
json.dump(IC, open(ic_path, "w"), indent=1)
with open(os.path.join(out, "SHA256SUMS"), "w") as f:
    for name in sorted(os.listdir(dl)):
        p = os.path.join(dl, name)
        if os.path.isfile(p): f.write(f"{sha(open(p,'rb').read())}  {name}\n")
print(json.dumps(IC["summary"], indent=1))
