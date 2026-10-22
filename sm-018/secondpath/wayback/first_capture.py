#!/usr/bin/env python3
"""SM-018 lower bound (suggested by Kaveh Ranjbar, 22 Oct 2026): for each of the 175 second-path records, the Internet
Archive's first 200 capture of the advisory page, and whether that capture already shows the CVE ID. If it does, the ID
was public no later than the capture, so (datePublished - capture day) is a lower bound on the wait.
python3 -I first_capture.py SECONDPATH_DIR OUT_DIR"""
import csv, json, os, sys, time, urllib.request, urllib.parse, datetime as dt, hashlib
SP, OUT = sys.argv[1], sys.argv[2]; os.makedirs(os.path.join(OUT, "captures"), exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Markovian Protocol second-measurements; hello@markovianprotocol.com)"}
def get(u, tries=4):
    for k in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60) as r: return r.read()
        except Exception as e:
            err = e; time.sleep(5 * (k + 1))
    raise err
recs = []
for r in csv.DictReader(open(os.path.join(SP, "zdi/zdi_sample.csv"))): recs.append(("zdi", r["id"], f"https://www.zerodayinitiative.com/advisories/{r['zdi_id']}/", r["datePublished"][:10]))
for r in csv.DictReader(open(os.path.join(SP, "arista/arista_datepublic_check.csv"))): recs.append(("Arista", r["id"], r["advisory_url_fetched"] or r["advisory_url"], r["datePublished"][:10]))
for r in csv.DictReader(open(os.path.join(SP, "dell/dell_datepublic_check.csv"))): recs.append(("dell", r["id"], r["kb_url"], r["datePublished_full"][:10]))
for r in csv.DictReader(open(os.path.join(SP, "drupal/results.csv"))): recs.append(("drupal", r["id"], r["advisory_url"], r["datePublished"][:10]))
for r in csv.DictReader(open(os.path.join(SP, "2025/results.csv"))): recs.append((r["cna"], r["id"], r["advisory_url"], r["datePublished"][:10]))
cdx_cache, rows = {}, []
for cna, cve, url, published in recs:
    row = {"cna": cna, "id": cve, "advisory_url": url, "datePublished": published, "first_capture": None, "capture_url": None, "shows_id": None, "capture_sha256": None, "lower_bound_days": None, "late_at_capture": None, "captures_checked": 0}
    if not url: rows.append(row); continue
    if url not in cdx_cache:
        q = "https://web.archive.org/cdx/search/cdx?" + urllib.parse.urlencode({"url": url, "output": "json", "filter": "statuscode:200", "limit": "8"})
        try: cdx_cache[url] = json.loads(get(q) or b"[]")[1:]
        except Exception as e: cdx_cache[url] = None; row["error"] = f"cdx: {e}"
        time.sleep(1.5)
    caps = cdx_cache[url] or []
    for c in caps[:3]:   # first capture; if it lacks the ID, the next two
        ts = c[1]; cu = f"https://web.archive.org/web/{ts}id_/{c[2]}"; fn = os.path.join(OUT, "captures", f"{ts}_{hashlib.sha256(c[2].encode()).hexdigest()[:12]}.html")
        try:
            body = open(fn, "rb").read() if os.path.exists(fn) else get(cu)
            if not os.path.exists(fn): open(fn, "wb").write(body); time.sleep(1.5)
        except Exception as e: row["error"] = f"fetch: {e}"; break
        row["captures_checked"] += 1
        if row["first_capture"] is None: row["first_capture"] = f"{ts[:4]}-{ts[4:6]}-{ts[6:8]}T{ts[8:10]}:{ts[10:12]}:{ts[12:14]}Z"
        if cve.encode() in body:
            d = dt.date(int(ts[:4]), int(ts[4:6]), int(ts[6:8]))
            row.update(shows_id=True, capture_url=cu, capture_sha256=hashlib.sha256(body).hexdigest(), capture_with_id=d.isoformat(),
                       lower_bound_days=(dt.date.fromisoformat(published) - d).days)
            row["late_at_capture"] = row["lower_bound_days"] > 3; break
    else:
        if caps: row["shows_id"] = False
    rows.append(row); print(cna, cve, row["first_capture"], row["shows_id"], row["lower_bound_days"], flush=True)
json.dump(rows, open(os.path.join(OUT, "first_capture.json"), "w"), indent=1)
with open(os.path.join(OUT, "first_capture.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["cna", "id", "advisory_url", "datePublished", "first_capture", "capture_with_id", "shows_id", "lower_bound_days", "late_at_capture", "captures_checked", "capture_url", "capture_sha256", "error"], extrasaction="ignore")
    w.writeheader(); [w.writerow(r) for r in rows]
