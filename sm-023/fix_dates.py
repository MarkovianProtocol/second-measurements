#!/usr/bin/env python3
"""SM-023: the true first fix for each critical CVE. The tracker's 'released' status carries the first fixed version per
release; Launchpad's publishing history gives when that version reached the primary archive. First fix = the earlier of
that date (main `linux` package, or the CVE's own non-kernel package) and the first USN. ESM versions live outside the
primary archive and have no public publishing record, so they are not dated here.
A fix counts only once its release is out: an upload to a release still in development reaches no supported users.
python3 -I fix_dates.py exhibits/ubuntu_critical_cves_raw_2026-10-20.json exhibits/ubuntu_releases_2026-10-20.json OUT.json"""
import json, sys, time, urllib.parse, urllib.request
API = "https://api.launchpad.net/1.0/ubuntu/+archive/primary"
raw = json.load(open(sys.argv[1]))["cves"]; cache = {}
RELEASED = {r["codename"]: (r.get("release_date") or "")[:10] for r in json.load(open(sys.argv[2]))["releases"]}

def published(src, series, version):
    key = (src, series, version)
    if key in cache: return cache[key]
    q = urllib.parse.urlencode({"ws.op": "getPublishedSources", "source_name": src, "version": version, "exact_match": "true",
                                "distro_series": f"https://api.launchpad.net/1.0/ubuntu/{series}"})
    for attempt in range(5):
        try:
            d = json.load(urllib.request.urlopen(f"{API}?{q}", timeout=60)); break
        except Exception:
            time.sleep(3 * (attempt + 1))
    else:
        d = {"entries": []}
    dates = sorted(e["date_published"] for e in d.get("entries", []) if e.get("date_published") and e.get("pocket") in ("Security", "Updates", "Release"))   # -proposed is not shipped to users
    cache[key] = dates[0] if dates else None
    return cache[key]

out = []
for c in raw:
    kernel = any(p["name"].startswith("linux") for p in c["packages"])
    pkgs = [p for p in c["packages"] if (p["name"] == "linux" if kernel else True)]
    dated = []
    for p in pkgs:
        for s in p["statuses"]:
            v = (s.get("description") or "").strip()
            if s["status"] == "released" and v and s["release_codename"] != "upstream" and "esm" not in v:
                t = published(p["name"], s["release_codename"], v)
                if t and RELEASED.get(s["release_codename"]) and t[:10] >= RELEASED[s["release_codename"]]: dated.append((t, s["release_codename"], v))
    usn = sorted((n["published"], n["id"]) for n in c.get("notices", []) if n.get("published") and n["id"].startswith("USN-"))
    lsn = sorted((n["published"], n["id"]) for n in c.get("notices", []) if n.get("published") and n["id"].startswith("LSN-"))
    dated.sort()
    out.append({"cve": c["id"], "first_usn": usn[0][1] if usn else None, "first_usn_at": usn[0][0] if usn else None,
                "first_lsn_at": lsn[0][0] if lsn else None,
                "first_archive_fix_at": dated[0][0] if dated else None, "first_archive_fix": f"{dated[0][1]} {dated[0][2]}" if dated else None})
json.dump(out, open(sys.argv[3], "w"), indent=1)
print(len(out), "CVEs;", sum(1 for o in out if o["first_archive_fix_at"]), "with a dated archive fix;", len(cache), "Launchpad lookups")
