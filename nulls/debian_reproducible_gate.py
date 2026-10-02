#!/usr/bin/env python3
"""Debian's reproducibility gate (10 May 2026): did anything unreproducible get past it?

Claim (debian-devel-announce, 10 May 2026): "Since yesterday, we have enabled our
migration software to block migration of new packages that can't be reproduced or
existing packages (in testing) that regress in reproducibility."

Check: every amd64 (and arch:all) binary in testing today that reproduce.debian.net
marks BAD, classified by britney's own rule (britney2/policies/policy.py,
ReproduciblePolicy): a BAD binary is only a regression if the *same binary name*
was not already BAD in the version testing had before. Candidates are then
crossed with the release team's public hints and with each package's migration
date from tracker.debian.org.

Inputs (all public; cached in DATA_DIR after first fetch):
  packages_before_amd64.gz  snapshot.debian.org testing/main amd64+all Packages at the gate
  packages_now_amd64.gz     deb.debian.org testing/main amd64+all Packages today
  rebuilderd_all_amd64.json reproduce.debian.net/amd64/api/v0/pkgs/list (every build record)
  hints/<user>              release.debian.org/britney/hints/<user>
  tracker_migrations.json   tracker.debian.org/pkg/<src>/news/ "MIGRATED to testing" lines

Usage: python3 debian_reproducible_gate.py [DATA_DIR]   (default ./debian_gate_data)
"""
import gzip, json, os, re, sys, time, html, urllib.request, collections

GATE_SNAPSHOT = "20260510T023319Z"   # first snapshot.debian.org run after the announcement
DATA = sys.argv[1] if len(sys.argv) > 1 else "debian_gate_data"
os.makedirs(DATA, exist_ok=True)
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}

def fetch(url, path, binary=True):
    p = os.path.join(DATA, path)
    if os.path.exists(p):
        return p
    os.makedirs(os.path.dirname(p), exist_ok=True)
    data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=600).read()
    open(p, "wb").write(data)
    return p

def packages(path):
    """(name -> dict) for amd64 + all binaries in a Packages file."""
    out = {}
    cur = {}
    with gzip.open(path, "rt", errors="replace") as f:
        for line in f:
            if line == "\n":
                if cur.get("Architecture") in ("amd64", "all"):
                    out[cur["Package"]] = cur
                cur = {}
            elif line[0] not in " \t" and ":" in line:
                k, v = line.split(":", 1)
                cur[k] = v.strip()
    if cur.get("Architecture") in ("amd64", "all"):
        out[cur["Package"]] = cur
    return out

def source_of(rec):
    return (rec.get("Source") or rec["Package"]).split()[0]

# ---- inputs ---------------------------------------------------------------
before = packages(fetch(f"https://snapshot.debian.org/archive/debian/{GATE_SNAPSHOT}/dists/testing/main/binary-amd64/Packages.gz", "packages_before_amd64.gz"))
now = packages(fetch("https://deb.debian.org/debian/dists/testing/main/binary-amd64/Packages.gz", "packages_now_amd64.gz"))
rebuild = json.load(open(fetch("https://reproduce.debian.net/amd64/api/v0/pkgs/list", "rebuilderd_all_amd64.json")))

# latest verdict and earliest BAD date per (name, version)
latest, first_bad = {}, {}
for r in rebuild:
    k = (r["name"], r["version"])
    if k not in latest or (r["built_at"] or "") > (latest[k]["built_at"] or ""):
        latest[k] = r
    if r["status"] == "BAD" and r["built_at"]:
        first_bad[k] = min(first_bad.get(k, r["built_at"]), r["built_at"])
status = lambda name, ver: latest.get((name, ver), {}).get("status")

# hints: every ignore-reproducible[-src] item, versioned or not, with optional /arch
hint_index = fetch("https://release.debian.org/britney/hints/", "hints/index.html")
users = sorted(set(re.findall(r'href="([a-z0-9-]+)"', open(hint_index, errors="replace").read())))
hints = collections.defaultdict(list)
for u in users:
    try:
        p = fetch(f"https://release.debian.org/britney/hints/{u}", f"hints/{u}")
    except Exception:
        continue
    for line in open(p, errors="replace"):
        parts = line.split()
        if parts and parts[0] in ("ignore-reproducible", "ignore-reproducible-src"):
            for item in parts[1:]:
                bits = item.split("/")
                hints[bits[0]].append((u, parts[0], bits[1] if len(bits) > 1 else None))

# ---- classify every BAD binary in testing today ----------------------------
bad = [(n, r["Version"]) for n, r in now.items() if status(n, r["Version"]) == "BAD"]
classes = collections.defaultdict(list)
for n, v in bad:
    old = before.get(n)
    if old and old["Version"] == v:
        classes["pre-gate (same version already in testing on 10 May)"].append((n, v))
    elif old and status(n, old["Version"]) == "BAD":
        classes["replaced a version that was already BAD (not a regression under britney's rule)"].append((n, v))
    elif old:
        classes["regression candidate (old version was not BAD)"].append((n, v))
    else:
        classes["new binary name, BAD"].append((n, v))

candidates = classes["regression candidate (old version was not BAD)"] + classes["new binary name, BAD"]

# migration dates for candidate sources (cached)
mig_path = os.path.join(DATA, "tracker_migrations.json")
migrations = json.load(open(mig_path)) if os.path.exists(mig_path) else {}
def migrated_on(src, ver):
    if src not in migrations:
        try:
            s = urllib.request.urlopen(urllib.request.Request(f"https://tracker.debian.org/pkg/{src}/news/", headers=UA), timeout=60).read().decode(errors="replace")
            t = re.sub(r"\s+", " ", html.unescape(re.sub("<[^>]+>", " ", s)))
            migrations[src] = re.findall(r"\[?(\d{4}-\d{2}-\d{2})\]? \] ?(" + re.escape(src) + r" \S+ MIGRATED to testing)", t)
        except Exception:
            migrations[src] = []
        json.dump(migrations, open(mig_path, "w"), indent=1)
        time.sleep(0.5)
    base = re.sub(r"\+b\d+$", "", ver)          # binNMU suffix is not in the source version
    for d, text in migrations[src]:
        if f" {base} " in text + " ":
            return d
    return None

rows = []
for n, v in candidates:
    src = source_of(now[n])
    h = hints.get(src, []) + hints.get(n, [])
    mig = migrated_on(src, v)
    fb = (first_bad.get((n, v)) or "")[:10]
    if h:
        why = "hinted (release-team ignore-reproducible hint on file)"
    elif mig and fb and fb < mig:
        why = "BAD verdict predates migration: CHECK BY HAND"
    elif mig and fb:
        why = "BAD verdict dated after migration (verdict was not BAD when it crossed)"
    else:
        why = "no migration date found: CHECK BY HAND"
    rows.append({"binary": n, "version": v, "source": src, "migrated": mig, "first_bad": fb, "hints": h, "why": why})

# ---- report ---------------------------------------------------------------
print(f"binaries in testing (amd64+all): {len(now):,}; with a rebuild verdict: {sum(1 for n,r in now.items() if status(n, r['Version'])):,}; BAD: {len(bad)}")
for k, v in classes.items():
    print(f"  {len(v):4}  {k}")
print(f"\ncandidates checked against hints + migration dates: {len(candidates)}")
for why, grp in collections.Counter(r["why"] for r in rows).most_common():
    print(f"  {grp:4}  {why}")
hand = [r for r in rows if "CHECK BY HAND" in r["why"]]
if hand:
    print("\nby hand:")
    for r in hand:
        print(f"  {r['source']:20} {r['binary']:32} {r['version']:22} migrated {r['migrated']} first BAD {r['first_bad']}")
json.dump({"bad": bad, "classes": {k: v for k, v in classes.items()}, "candidates": rows}, open(os.path.join(DATA, "result.json"), "w"), indent=1)
