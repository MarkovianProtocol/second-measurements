#!/usr/bin/env python3 -I
"""Second path for the CNA 72-hour rule: does the CVE record's datePublic match
the ZDI advisory's own Published date?

Usage: python3 -I zdi_check.py <rows.json> <download_dir> <out_dir> [n_sample]

Reads rows where cna == "zdi" and own_site is true, sorts by datePublished,
takes every k-th row to get ~n_sample, fetches the CVE record from
cveawg.mitre.org, finds the zerodayinitiative.com advisory reference, fetches
it, extracts the Published badge date and the Disclosure Timeline, compares.
All downloads saved in download_dir (untrusted). Outputs in out_dir.
"""
import csv, hashlib, html, json, re, sys, time, urllib.request, urllib.error
from datetime import datetime, date

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36")
MONTHS = {m: i for i, m in enumerate(
    ["january","february","march","april","may","june","july","august",
     "september","october","november","december"], 1)}

def fetch(url, path, log):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    t0 = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read(); code = r.status
    except urllib.error.HTTPError as e:
        data = e.read(); code = e.code
    except Exception as e:
        log.append({"t": t0, "url": url, "status": "ERR", "err": str(e)})
        return None, None
    open(path, "wb").write(data)
    sha = hashlib.sha256(data).hexdigest()
    log.append({"t": t0, "url": url, "status": code, "bytes": len(data),
                "sha256": sha, "file": path})
    return code, data

def parse_badge(page):
    # <span class="text-zdi-blue text-xs uppercase tracking-widest font-bold">July 8th, 2025</span>
    m = re.search(r'data-lucide="calendar"[^>]*></i>\s*<span[^>]*>\s*([A-Za-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?,\s*(\d{4})\s*</span>', page)
    if not m:
        return None
    mon = MONTHS.get(m.group(1).lower())
    if not mon:
        return None
    return date(int(m.group(3)), mon, int(m.group(2))).isoformat()

def parse_timeline(page):
    i = page.find("Disclosure Timeline")
    if i < 0:
        return []
    seg = page[i:i+4000]
    out = []
    for d, txt in re.findall(r'<li><strong[^>]*>\s*(\d{4}-\d{2}-\d{2})\s*</strong>\s*-\s*([^<]+)</li>', seg):
        out.append((d, html.unescape(txt).strip()))
    return out

def page_cve_id(page):
    m = re.search(r'CVERecord\?id=(CVE-\d{4}-\d+)', page)
    return m.group(1) if m else None

def page_zdi_id(page):
    m = re.search(r'<span class="metadata-value">(ZDI-\d{2}-\d+)</span>', page)
    return m.group(1) if m else None

def ddiff(a, b):
    return (date.fromisoformat(b[:10]) - date.fromisoformat(a[:10])).days

def main():
    rows_path, dl, out, n = sys.argv[1], sys.argv[2].rstrip("/"), sys.argv[3].rstrip("/"), int(sys.argv[4] if len(sys.argv) > 4 else 35)
    rows = json.load(open(rows_path))["rows"]
    z = sorted((r for r in rows if r.get("cna") == "zdi" and r.get("own_site")),
               key=lambda r: (r["datePublished"], r["id"]))
    k = max(1, len(z) // n)
    sample = z[::k][:n]
    log, results = [], []
    for r in sample:
        cid = r["id"]
        rec = {"id": cid, "zdi_id": None, "datePublic": r["datePublic"],
               "datePublished": r["datePublished"], "advisory_published": None,
               "timeline_public_release": None, "timeline_vendor_report": None,
               "timeline_other": None, "delta_days": None, "match": None,
               "notes": [], "cve_datePublic_full": None, "cve_datePublished_full": None}
        code, data = fetch(f"https://cveawg.mitre.org/api/cve/{cid}", f"{dl}/{cid}.json", log)
        if code != 200 or not data:
            rec["notes"].append(f"cve fetch failed {code}"); rec["match"] = "nofetch"; results.append(rec); continue
        try:
            j = json.loads(data)
        except Exception as e:
            rec["notes"].append(f"cve json error {e}"); rec["match"] = "nofetch"; results.append(rec); continue
        cna = j.get("containers", {}).get("cna", {})
        rec["cve_datePublic_full"] = cna.get("datePublic")
        rec["cve_datePublished_full"] = j.get("cveMetadata", {}).get("datePublished")
        if rec["cve_datePublic_full"] and rec["cve_datePublic_full"][:10] != r["datePublic"]:
            rec["notes"].append(f"live datePublic {rec['cve_datePublic_full']} differs from input {r['datePublic']}")
        if rec["cve_datePublished_full"] and rec["cve_datePublished_full"][:10] != r["datePublished"]:
            rec["notes"].append(f"live datePublished {rec['cve_datePublished_full']} differs from input {r['datePublished']}")
        urls = [ref.get("url", "") for ref in cna.get("references", [])]
        zurls = [u for u in urls if re.search(r'zerodayinitiative\.com/advisories/ZDI-\d{2}-\d+', u)]
        if not zurls:
            rec["notes"].append("no ZDI advisory url in references: " + "; ".join(urls)[:200]); rec["match"] = "noref"; results.append(rec); continue
        if len(zurls) > 1:
            rec["notes"].append(f"{len(zurls)} ZDI urls in refs, using first")
        zurl = zurls[0]
        zid = re.search(r'(ZDI-\d{2}-\d+)', zurl).group(1)
        rec["zdi_id"] = zid
        zurl = f"https://www.zerodayinitiative.com/advisories/{zid}/"
        code, data = fetch(zurl, f"{dl}/{zid}.html", log)
        time.sleep(1.5)
        if code != 200 or not data:
            rec["notes"].append(f"advisory fetch failed {code}"); rec["match"] = "nofetch"; results.append(rec); continue
        page = data.decode("utf-8", "replace")
        pcve = page_cve_id(page)
        if pcve and pcve != cid:
            rec["notes"].append(f"advisory page lists {pcve}, not {cid}")
        pz = page_zdi_id(page)
        if pz and pz != zid:
            rec["notes"].append(f"advisory page metadata says {pz}")
        rec["advisory_published"] = parse_badge(page)
        tl = parse_timeline(page)
        other = []
        for d, txt in tl:
            t = txt.lower()
            if "coordinated public release" in t:
                rec["timeline_public_release"] = d
            elif "reported to vendor" in t:
                rec["timeline_vendor_report"] = d
            elif "advisory updated" in t:
                pass
            else:
                other.append(f"{d} {txt}")
        rec["timeline_other"] = "; ".join(other) or None
        if rec["advisory_published"] is None:
            rec["notes"].append("badge date not parsed")
        if rec["timeline_public_release"] is None:
            rec["notes"].append("timeline public-release not parsed")
        adv = rec["advisory_published"] or rec["timeline_public_release"]
        if adv:
            rec["delta_days"] = ddiff(adv, r["datePublished"])
            rec["delta_public_vs_advisory"] = ddiff(adv, r["datePublic"])
            if rec["advisory_published"] and rec["timeline_public_release"] and rec["advisory_published"] != rec["timeline_public_release"]:
                rec["notes"].append("badge != timeline public release")
            rec["match"] = "yes" if adv == r["datePublic"] else "no"
        else:
            rec["match"] = "unparsed"
        results.append(rec)
    for rec in results:
        rec["notes"] = "; ".join(rec["notes"])
    cols = ["id","zdi_id","datePublic","datePublished","advisory_published","timeline_public_release","timeline_vendor_report","timeline_other","delta_days","delta_public_vs_advisory","match","notes"]
    with open(f"{out}/zdi_sample.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore"); w.writeheader(); w.writerows(results)
    json.dump({"generated": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"), "source_rows": rows_path,
               "zdi_rows_total": len(z), "k": k, "n": len(results), "rows": results},
              open(f"{out}/zdi_sample.json", "w"), indent=1)
    with open(f"{out}/retrieval_log.jsonl", "w") as f:
        for e in log: f.write(json.dumps(e) + "\n")
    print(f"zdi rows {len(z)} k={k} sampled {len(results)}")
    import collections
    print("match:", collections.Counter(r["match"] for r in results))
    print("delta_days(advisory->datePublished):", sorted(collections.Counter(r["delta_days"] for r in results).items(), key=lambda x: (x[0] is None, x[0])))

if __name__ == "__main__":
    main()
