#!/usr/bin/env python3
"""SM-018 recheck: pull the newest cvelistV5 midnight archive, re-score every published 2025 and 2026 record with
cve72.py (same script as the paper, kept at sm018/cve72.py), and append one row to history/sm-018.jsonl: release tag,
counts, own-site late share overall and for the newest complete quarter, and the four named CNAs plus Microsoft.
Run monthly (first of the month). Usage: sm018.py [--zip cves.zip] (skips the 600 MB download)."""
import json, os, sys, subprocess, tempfile, zipfile, hashlib, urllib.request, datetime as dt
R = os.path.dirname(os.path.abspath(__file__)); H = os.path.join(R, "history", "sm-018.jsonl"); os.makedirs(os.path.dirname(H), exist_ok=True)
SCRIPT = os.path.join(R, "sm018", "cve72.py"); UA = {"User-Agent": "Mozilla/5.0 (Markovian Protocol recheck)"}
today = dt.date.today().isoformat()
work = tempfile.mkdtemp(prefix="sm018_")
if "--zip" in sys.argv:
    inner = sys.argv[sys.argv.index("--zip") + 1]; tag = "local"; size = os.path.getsize(inner)
else:
    rel = json.load(urllib.request.urlopen(urllib.request.Request("https://api.github.com/repos/CVEProject/cvelistV5/releases/latest", headers=UA), timeout=60))
    tag = rel["tag_name"]; asset = next(a for a in rel["assets"] if "all_CVEs_at_midnight" in a["name"])
    outer = os.path.join(work, "all_cves.zip.zip")
    with urllib.request.urlopen(urllib.request.Request(asset["browser_download_url"], headers=UA), timeout=3600) as r, open(outer, "wb") as f:
        while True:
            b = r.read(1 << 20)
            if not b: break
            f.write(b)
    size = os.path.getsize(outer)
    if size != asset["size"]: print(f"sm018: size {size} != {asset['size']}; nothing appended"); sys.exit(1)
    with zipfile.ZipFile(outer) as z: name = [n for n in z.namelist() if n.endswith(".zip")][0]; z.extract(name, work)
    inner = os.path.join(work, name)
sha = hashlib.sha256(open(inner, "rb").read()).hexdigest()
out = os.path.join(work, "out"); subprocess.run([sys.executable, "-I", SCRIPT, inner, out], check=True, stdout=subprocess.DEVNULL)
s = json.load(open(os.path.join(out, "cve72_summary.json")))
qs = s["by_quarter_own"]; keys = sorted(qs); y, q = int(today[:4]), (int(today[5:7]) - 1) // 3 + 1
cur = f"{y}Q{q}"; done = [k for k in keys if k < cur]; nq = done[-1] if done else keys[-1]
row = {"date": today, "release": tag, "size": size, "inner_sha256": sha, "published": s["counts"]["published"], "scored": s["counts"]["scored"],
       "own_scored": s["own_site"]["scored"], "own_late": s["own_site"]["late"], "own_late_pct": s["own_site"]["late_pct"], "own_over_30": s["own_site"]["over_30"],
       "newest_quarter": nq, "newest_quarter_scored": qs[nq]["scored"], "newest_quarter_late": qs[nq]["late"], "newest_quarter_late_pct": qs[nq]["late_pct"]}
for c in ("zdi", "dell", "drupal", "Arista", "microsoft"):
    v = s["by_cna_own"].get(c); row[c] = {"scored": v["scored"], "late": v["late"], "late_pct": v["late_pct"], "over_30": v["over_30"]} if v else None
open(H, "a").write(json.dumps(row) + "\n"); print(row)
if "--keep" not in sys.argv:
    import shutil; shutil.rmtree(work, ignore_errors=True)
