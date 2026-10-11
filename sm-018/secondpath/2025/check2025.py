#!/usr/bin/env python3 -I
"""Second path, 2025 IDs: for ten own-site records per CNA (ZDI, Dell, Drupal, Arista), spread across datePublished,
read the advisory the record cites and compare its date with the record's datePublic (day resolution; Dell in +05:30).
python3 -I check2025.py <cves.zip> <rows.json> <out_dir>   -> out_dir/{raw pages, results.csv, retrieval_log.tsv}"""
import sys, os, json, re, csv, html, zipfile, hashlib, gzip, urllib.request, urllib.error, datetime as dt
ZIP, ROWS, OUT = sys.argv[1:4]; os.makedirs(OUT, exist_ok=True)
BROWSER = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
           "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.9", "Accept-Encoding": "gzip, deflate",
           "sec-ch-ua": '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"', "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": '"macOS"',
           "Sec-Fetch-Dest": "document", "Sec-Fetch-Mode": "navigate", "Sec-Fetch-Site": "none", "Sec-Fetch-User": "?1", "Upgrade-Insecure-Requests": "1"}
CURL = {"User-Agent": "curl/8.7.1"}
log = open(os.path.join(OUT, "retrieval_log.tsv"), "a")
def get(url, headers, name):
    t0 = dt.datetime.now(dt.timezone.utc).isoformat()
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=60) as r:
            data = r.read(); data = gzip.decompress(data) if r.headers.get("Content-Encoding") == "gzip" else data; code = r.status
    except urllib.error.HTTPError as e: data = e.read(); code = e.code
    except Exception as e: log.write(f"{t0}\t{url}\tERR\t{e}\n"); return None, None
    open(os.path.join(OUT, name), "wb").write(data); log.write(f"{t0}\t{url}\t{code}\t{len(data)}\t{hashlib.sha256(data).hexdigest()}\t{name}\n"); log.flush()
    return code, data.decode("utf-8", "replace")
def text(h):
    x = re.sub(r"<script.*?</script>|<style.*?</style>", "", h, flags=re.S); x = html.unescape(re.sub(r"<[^>]+>", " ", x)); return re.sub(r"\s+", " ", x)
MON = {m: i for i, m in enumerate(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 1)}
def mdy(s):
    m = re.match(r"([A-Z][a-z]+) (\d{1,2})(?:st|nd|rd|th)?, (\d{4})", s); return dt.date(int(m.group(3)), MON[m.group(1)], int(m.group(2))).isoformat() if m and m.group(1) in MON else None
rows = json.load(open(ROWS)); recs = {}
with zipfile.ZipFile(ZIP) as z:
    names = {n.rsplit("/", 1)[-1][:-5]: n for n in z.namelist() if "/2025/" in n and n.endswith(".json")}
    out = []
    for cna in ("zdi", "dell", "drupal", "Arista"):
        rs = sorted((r for r in rows if r["cna"] == cna and r["own"] and r["id"].startswith("CVE-2025-")), key=lambda r: (r["published"], r["id"]))
        pick = [rs[i * len(rs) // 10] for i in range(10)] if len(rs) >= 10 else rs
        for r in pick:
            d = json.loads(z.read(names[r["id"]])); refs = [x.get("url", "") for x in d["containers"]["cna"].get("references", [])]
            own = next((u for u in refs if {"zdi": "zerodayinitiative.com", "dell": "dell.com", "drupal": "drupal.org", "Arista": "arista.com"}[cna] in u), refs[0] if refs else "")
            adv = None; note = ""; fetched = own
            if cna == "zdi":
                code, h = get(own, BROWSER, r["id"] + ".html")
                if h: t = text(h); m = re.search(r"([A-Z][a-z]+ \d{1,2}(?:st|nd|rd|th), \d{4}) ZDI-", t); adv = mdy(m.group(1)) if m else None
            elif cna == "Arista":
                code, h = get(own, CURL, r["id"] + ".html")
                if h: t = text(h); m = re.search(r"Date: ([A-Z][a-z]+ \d{1,2}, \d{4})", t); adv = mdy(m.group(1)) if m else None
            elif cna == "dell":
                code, h = get(own, BROWSER, r["id"] + ".html")
                if h: t = text(h); m = re.search(r"1\.0 (\d{4}-\d{2}-\d{2}) Initial [Rr]elease", t); adv = m.group(1) if m else None
            elif cna == "drupal":
                fetched = f"https://www.drupal.org/api-d7/node.json?field_sa_cve={r['id']}"
                code, h = get(fetched, BROWSER, r["id"] + ".node.json")
                if h:
                    lst = json.loads(h).get("list", [])
                    if lst: adv = dt.datetime.fromtimestamp(int(lst[0]["created"]), dt.timezone.utc).date().isoformat(); note = lst[0].get("url", "")
                    else: note = "no node for this CVE in api-d7"
            if adv is None and h is None: note = "fetch failed"
            elif adv is None: note = note or f"no date parsed (HTTP {code})"
            delta = (dt.date.fromisoformat(r["public"]) - dt.date.fromisoformat(adv)).days if adv else None
            out.append({"id": r["id"], "cna": cna, "datePublic": r["public"], "datePublished": r["published"], "lag_days": r["lag"], "advisory_url": fetched, "advisory_date": adv,
                        "datePublic_minus_advisory_days": delta, "match_within_1_day": (abs(delta) <= 1) if delta is not None else "", "note": note})
            print(out[-1]["id"], cna, r["public"], adv, delta, note)
with open(os.path.join(OUT, "results.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0].keys())); w.writeheader(); w.writerows(out)
print(len(out), "records;", sum(1 for o in out if o["match_within_1_day"] is True), "match within a day;", sum(1 for o in out if o["advisory_date"] is None), "unread")
