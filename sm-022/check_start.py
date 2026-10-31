#!/usr/bin/env python3
"""SM-022 second path for the start of each wait: the feedstock's CI run on main that uploaded the version.
For a seeded random sample of versions, find conda-forge/<pkg>-feedstock, list its CI runs on main (GitHub Actions via
the gh CLI, and Azure Pipelines via the public dev.azure.com API), take the runs that finished from 10 minutes before to
3 hours after the anaconda.org upload_time, and report upload_time minus the nearest run's finish. A version whose
feedstock has another name (multi-output recipes) or no matching run is listed as not found.
python3 -I check_start.py versions.jsonl N SEED OUT.json"""
import datetime as dt, json, random, re, subprocess, sys, urllib.request
VJ, N, SEED, OUT = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
P = lambda s: dt.datetime.fromisoformat(re.sub(r"\.(\d+)", lambda m: "." + (m.group(1) + "000000")[:6], s.replace(" ", "T").replace("Z", "+00:00")))   # Azure prints 5 to 7 fraction digits
V = [json.loads(l) for l in open(VJ)][100:]          # skip the first poll's baseline
V = [v for v in V if (P(v["first_seen_build"]) - P(v["last_upload_before_build"])).total_seconds() < 86400]
random.Random(SEED).shuffle(V)
def gha(repo):
    r = subprocess.run(["gh", "api", f"repos/{repo}/actions/runs?branch=main&per_page=50"], capture_output=True, text=True)
    if r.returncode: return []
    return [("github", w["id"], P(w["updated_at"])) for w in json.loads(r.stdout)["workflow_runs"] if w["conclusion"] == "success"]
def azure(repo):
    u = f"https://dev.azure.com/conda-forge/feedstock-builds/_apis/build/builds?api-version=7.1&repositoryId={repo}&repositoryType=GitHub&branchName=refs/heads/main&$top=30"
    try: d = json.load(urllib.request.urlopen(u, timeout=60))
    except Exception: return []
    return [("azure", b["id"], P(b["finishTime"])) for b in d.get("value", []) if b.get("result") == "succeeded" and b.get("finishTime")]
res = []
for v in V[:N]:
    repo = f"conda-forge/{v['pkg']}-feedstock"; up = P(v["last_upload_before_build"])
    runs = [r for r in gha(repo) + azure(repo) if -600 <= (r[2] - up).total_seconds() <= 3 * 3600]
    if not runs: res.append({"pkg": v["pkg"], "version": v["version"], "found": False}); continue
    ci, rid, fin = min(runs, key=lambda r: abs((r[2] - up).total_seconds()))
    res.append({"pkg": v["pkg"], "version": v["version"], "found": True, "ci": ci, "run": rid, "run_finished": fin.isoformat(),
                "upload": v["last_upload_before_build"], "upload_minus_finish_s": round((up - fin).total_seconds(), 1),
                "wait_from_ci_finish_min": round((P(v["first_seen_build"]) - fin).total_seconds() / 60, 1),
                "wait_from_upload_min": round((P(v["first_seen_build"]) - up).total_seconds() / 60, 1)})
json.dump(res, open(OUT, "w"), indent=1)
f = [r for r in res if r["found"]]; d = sorted(r["upload_minus_finish_s"] for r in f)
print(f"{len(f)} of {len(res)} matched; upload minus CI finish: median {d[len(d)//2] if d else None} s, range {d[0] if d else None} to {d[-1] if d else None} s")
