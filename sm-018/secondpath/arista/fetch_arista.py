#!/usr/bin/env python3
"""Second-path check: does CVE datePublic match the date on Arista's own advisory?

Usage: python3 -I fetch_arista.py <rows.json> <download_dir> <output_dir> [max_rows] [alias.json]

alias.json (optional): {"<dead advisory url>": {"alt": "<live url>", "source": "<where the alt came from>"}}.
If an advisory URL fails and no alias exists, a page already fetched for the same
advisory number (trailing -NNNN) is reused and noted.

Reads rows (cna == "Arista", own_site true), fetches each CVE record from
cveawg.mitre.org, follows the arista.com vendor-advisory reference, parses the
advisory's "Date:" line and revision table, and compares with datePublic /
datePublished. Writes CSV, JSON, SHA256SUMS and a retrieval log.
"""
import csv
import datetime as dt
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import time

BROWSER_UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
              "(KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36")
# arista.com returns HTTP 406 to any browser UA sent from curl (fingerprint
# mismatch); it serves the page to curl's own default UA. Fallback recorded in log.
CURL_UA = "curl/8.7.1"

MONTHS = {m: i for i, m in enumerate(
    ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"], 1)}
DATE_RE = re.compile(r"(January|February|March|April|May|June|July|August|September|"
                     r"October|November|December)\s+(\d{1,2}),\s*(\d{4})")


def curl(url, out, ua):
    """Fetch url to out with curl. Returns (http_code, size)."""
    r = subprocess.run(
        ["curl", "-sS", "-L", "--max-time", "60", "-A", ua, "-o", out,
         "-w", "%{http_code} %{size_download}", url],
        capture_output=True, text=True)
    parts = r.stdout.strip().split()
    code = parts[0] if parts else "000"
    size = int(parts[1]) if len(parts) > 1 else 0
    return code, size, r.stderr.strip()


def fetch(url, out, log, kind):
    """Browser UA first; on 406 retry with curl UA. Log every attempt."""
    for ua in (BROWSER_UA, CURL_UA):
        t = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
        code, size, err = curl(url, out, ua)
        log.append({"ts": t, "kind": kind, "url": url, "ua": ua, "http": code,
                    "bytes": size, "err": err, "file": os.path.basename(out)})
        if code == "200" and size > 0:
            return True
        if code != "406":
            break
        time.sleep(0.5)
    return False


def parse_us_date(s):
    m = DATE_RE.search(s)
    if not m:
        return None
    return dt.date(int(m.group(3)), MONTHS[m.group(1)], int(m.group(2))).isoformat()


def strip_tags(t):
    t = re.sub(r"<script.*?</script>", "", t, flags=re.S)
    t = re.sub(r"<style.*?</style>", "", t, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", t))


def parse_advisory(path):
    """Return dict: title, date_line, revisions [(rev, date, change)], csaf_url, cves."""
    raw = open(path, encoding="utf-8", errors="replace").read()
    out = {"title": None, "date_line": None, "revisions": [], "csaf_url": None,
           "cves_on_page": []}
    m = re.search(r"<title>(.*?)</title>", raw, flags=re.S)
    if m:
        out["title"] = re.sub(r"\s+", " ", m.group(1)).strip()
    m = re.search(r"Date:\s*([A-Z][a-z]+\s+\d{1,2},\s*\d{4})", raw)
    if m:
        out["date_line"] = parse_us_date(m.group(1))
    # revision table rows: <td>1.0</td><td>February 17, 2026</td><td>Initial release</td>
    for tr in re.findall(r"<tr>(.*?)</tr>", raw, flags=re.S):
        tds = [re.sub(r"\s+", " ", strip_tags(x)).strip()
               for x in re.findall(r"<td[^>]*>(.*?)</td>", tr, flags=re.S)]
        if len(tds) >= 3 and re.fullmatch(r"\d+(\.\d+)*", tds[0]):
            d = parse_us_date(tds[1])
            if d:
                out["revisions"].append({"rev": tds[0], "date": d, "change": tds[2]})
    m = re.search(r'href="([^"]*CSAF[^"]*\.json)"', raw)
    if m:
        u = m.group(1)
        out["csaf_url"] = u if u.startswith("http") else "https://www.arista.com" + u
    out["cves_on_page"] = sorted(set(re.findall(r"CVE-\d{4}-\d{4,}", raw)))
    return out


def last_http(log, url):
    codes = [e["http"] for e in log if e["url"] == url]
    return "/".join(codes) if codes else "none"


def fetch_advisory(url, dl_dir, log):
    """Fetch + parse one advisory page (and its CSAF link). None on failure."""
    slug = re.sub(r"[^A-Za-z0-9._-]", "_", url.split("/")[-1]) or "advisory"
    adv_file = os.path.join(dl_dir, f"advisory_{slug}.html")
    if not fetch(url, adv_file, log, "advisory"):
        return None
    p = parse_advisory(adv_file)
    p["file"] = adv_file
    p["csaf_initial_release_date"] = None
    if p["csaf_url"]:
        cf = os.path.join(dl_dir, f"csaf_{slug}.json")
        if fetch(p["csaf_url"], cf, log, "csaf"):
            try:
                cj = json.load(open(cf))
                p["csaf_initial_release_date"] = (
                    cj["document"]["tracking"].get("initial_release_date"))
            except Exception as e:
                p["csaf_note"] = f"CSAF link returned non-JSON ({type(e).__name__})"
    return p


def main():
    rows_path, dl_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    max_rows = int(sys.argv[4]) if len(sys.argv) > 4 else 35
    aliases = json.load(open(sys.argv[5])) if len(sys.argv) > 5 else {}
    os.makedirs(dl_dir, exist_ok=True)
    os.makedirs(out_dir, exist_ok=True)

    rows = json.load(open(rows_path))["rows"]
    rows = [r for r in rows if r["cna"] == "Arista" and r["own_site"] is True][:max_rows]

    log = []
    results = []
    advisory_cache = {}

    for r in rows:
        cid = r["id"]
        res = {"id": cid, "datePublic_input": r["datePublic"],
               "datePublished_input": r["datePublished"], "lag_d_input": r["lag_d"],
               "datePublic": None, "datePublished": None, "dateUpdated": None,
               "advisory_url": None, "advisory_url_fetched": None, "advisory_title": None,
               "advisory_initial_date": None, "advisory_date_line": None,
               "advisory_revisions": [], "csaf_url": None, "csaf_initial_release_date": None,
               "delta_days_advisory_to_published": None,
               "delta_days_advisory_to_datePublic": None,
               "match_datePublic_eq_advisory": None, "notes": []}
        # 1. CVE record
        cve_file = os.path.join(dl_dir, f"{cid}.json")
        if not fetch(f"https://cveawg.mitre.org/api/cve/{cid}", cve_file, log, "cve"):
            res["notes"].append("CVE record fetch failed")
            results.append(res)
            continue
        try:
            d = json.load(open(cve_file))
        except Exception as e:
            res["notes"].append(f"CVE record not JSON: {e}")
            results.append(res)
            continue
        cna = d.get("containers", {}).get("cna", {})
        meta = d.get("cveMetadata", {})
        res["datePublic"] = cna.get("datePublic")
        res["datePublished"] = meta.get("datePublished")
        res["dateUpdated"] = meta.get("dateUpdated")
        if res["datePublic"] and res["datePublic"][:10] != r["datePublic"]:
            res["notes"].append(f"datePublic differs from input ({r['datePublic']})")
        if res["datePublished"] and res["datePublished"][:10] != r["datePublished"]:
            res["notes"].append(f"datePublished differs from input ({r['datePublished']})")
        refs = [x.get("url") for x in cna.get("references", []) if x.get("url")]
        ar = [u for u in refs if "arista.com" in u]
        if not ar:
            res["notes"].append("no arista.com reference in CVE record; refs=" + ";".join(refs))
            results.append(res)
            continue
        if len(ar) > 1:
            res["notes"].append(f"{len(ar)} arista.com refs; using first")
        url = ar[0]
        res["advisory_url"] = url
        # 2. advisory page (cache by URL; many CVEs share one advisory)
        if url not in advisory_cache:
            advisory_cache[url] = fetch_advisory(url, dl_dir, log)
        p = advisory_cache[url]
        if p is None:
            # fallback A: explicit alias (e.g. from NVD's CISA-ADP reference)
            if url in aliases:
                alt = aliases[url]["alt"]
                if alt not in advisory_cache:
                    advisory_cache[alt] = fetch_advisory(alt, dl_dir, log)
                if advisory_cache[alt] is not None:
                    p = advisory_cache[alt]
                    res["advisory_url_fetched"] = alt
                    res["notes"].append(
                        f"CNA reference URL dead (HTTP {last_http(log, url)}); "
                        f"used alias {alt} (source: {aliases[url]['source']})")
            # fallback B: same advisory number already fetched under another slug
            if p is None:
                num = url.rsplit("-", 1)[-1]
                for u2, p2 in advisory_cache.items():
                    if p2 is not None and u2 != url and u2.rsplit("-", 1)[-1] == num:
                        p = p2
                        res["advisory_url_fetched"] = u2
                        res["notes"].append(
                            f"CNA reference URL dead (HTTP {last_http(log, url)}); "
                            f"used same-numbered advisory already fetched at {u2}")
                        break
        if p is None:
            res["notes"].append("advisory fetch failed")
            results.append(res)
            continue
        if not res["advisory_url_fetched"]:
            res["advisory_url_fetched"] = url
        res["advisory_title"] = p["title"]
        res["advisory_date_line"] = p["date_line"]
        res["advisory_revisions"] = p["revisions"]
        res["csaf_url"] = p["csaf_url"]
        res["csaf_initial_release_date"] = p.get("csaf_initial_release_date")
        if p.get("csaf_note"):
            res["notes"].append(p["csaf_note"])
        init = None
        for rv in p["revisions"]:
            if rv["rev"] in ("1.0", "1") or "initial" in rv["change"].lower():
                init = rv["date"]
                break
        if init is None and p["revisions"]:
            init = min(rv["date"] for rv in p["revisions"])
            res["notes"].append("no 'Initial release' row; used earliest revision date")
        if init is None:
            init = p["date_line"]
            res["notes"].append("no revision table parsed; used Date: line")
        res["advisory_initial_date"] = init
        if p["date_line"] and init and p["date_line"] != init:
            res["notes"].append(f"Date: line {p['date_line']} != initial revision {init}")
        if cid not in p["cves_on_page"]:
            res["notes"].append("CVE ID not found in advisory page text")
        if init:
            a = dt.date.fromisoformat(init)
            if res["datePublished"]:
                pub = dt.datetime.fromisoformat(res["datePublished"].replace("Z", "+00:00"))
                res["delta_days_advisory_to_published"] = round(
                    (pub - dt.datetime(a.year, a.month, a.day, tzinfo=dt.timezone.utc))
                    .total_seconds() / 86400, 3)
            if res["datePublic"]:
                dp = dt.date.fromisoformat(res["datePublic"][:10])
                res["delta_days_advisory_to_datePublic"] = (dp - a).days
                res["match_datePublic_eq_advisory"] = (dp == a)
        results.append(res)

    # outputs
    json.dump({"generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"),
               "input": os.path.abspath(rows_path), "n": len(results),
               "ua_note": ("arista.com returns 406 to browser UAs from curl; "
                           "fell back to curl/8.7.1 UA where logged"),
               "results": results},
              open(os.path.join(out_dir, "arista_datepublic_check.json"), "w"), indent=1)
    with open(os.path.join(out_dir, "arista_datepublic_check.csv"), "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["id", "datePublic", "datePublished", "advisory_url", "advisory_url_fetched",
                    "advisory_initial_date", "advisory_revisions",
                    "delta_days_advisory_to_published", "match_datePublic_eq_advisory",
                    "notes"])
        for x in results:
            w.writerow([x["id"], x["datePublic"], x["datePublished"], x["advisory_url"],
                        x["advisory_url_fetched"], x["advisory_initial_date"],
                        " | ".join(f"{v['rev']} {v['date']} {v['change']}"
                                   for v in x["advisory_revisions"]),
                        x["delta_days_advisory_to_published"],
                        x["match_datePublic_eq_advisory"], "; ".join(x["notes"])])
    with open(os.path.join(out_dir, "retrieval_log.jsonl"), "w") as f:
        for e in log:
            f.write(json.dumps(e) + "\n")
    with open(os.path.join(out_dir, "SHA256SUMS"), "w") as f:
        for name in sorted(os.listdir(dl_dir)):
            pth = os.path.join(dl_dir, name)
            if os.path.isfile(pth):
                h = hashlib.sha256(open(pth, "rb").read()).hexdigest()
                f.write(f"{h}  {name}\n")

    # summary to stdout
    ok = [x for x in results if x["match_datePublic_eq_advisory"] is not None]
    print(f"rows={len(results)} compared={len(ok)} "
          f"match={sum(1 for x in ok if x['match_datePublic_eq_advisory'])}")
    for x in results:
        print(x["id"], x["datePublic"] and x["datePublic"][:10], x["datePublished"] and x["datePublished"][:10],
              x["advisory_initial_date"], x["delta_days_advisory_to_published"],
              x["match_datePublic_eq_advisory"], x["advisory_url"] and x["advisory_url"].split("/")[-1],
              "; ".join(x["notes"]))


if __name__ == "__main__":
    main()
