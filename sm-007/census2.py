# Docker Official Images, every image entry in docker-library/official-images (one Hub tag lookup per entry):
# declared architectures vs platform images vs attestation manifests (Hub lists attestations as os "unknown").
import os, re, json, time, collections, urllib.request, urllib.error, subprocess
commit = subprocess.run(["git", "-C", "oi", "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
def hub(repo, tag):
    u = f"https://hub.docker.com/v2/repositories/library/{repo}/tags/{tag}"
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "markovian-second-measurement"}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(15 * (i + 1))
        except Exception: time.sleep(10 * (i + 1))
    return "error"
rows = []
for repo in sorted(os.listdir("oi/library")):
    s = open(f"oi/library/{repo}").read()
    default_arch = re.search(r"^Architectures:\s*(.+)$", s.split("\n\n")[0], re.M)
    for block in re.split(r"\n\s*\n", s):
        m = re.search(r"^Tags:\s*(.+)$", block, re.M)
        if not m: continue
        tag = m.group(1).split(",")[0].strip()
        a = re.search(r"^Architectures:\s*(.+)$", block, re.M) or default_arch
        arches = [x.strip() for x in (a.group(1) if a else "amd64").split(",")]
        t = hub(repo, tag); time.sleep(0.35)
        row = {"repo": repo, "tag": tag, "declared": arches, "hub": None}
        if isinstance(t, dict):
            im = t.get("images") or []
            c = collections.Counter("att" if i.get("os") == "unknown" else i.get("os") for i in im)
            row.update({"hub": "ok", "pushed": t.get("tag_last_pushed"), "digest": t.get("digest"),
                        "linux": c.get("linux", 0), "windows": c.get("windows", 0), "attestations": c.get("att", 0),
                        "att_digests": [i["digest"] for i in im if i.get("os") == "unknown"][:1]})
        else: row["hub"] = t or "404"
        rows.append(row)
    print(repo, sum(r["repo"] == repo for r in rows), flush=True)
json.dump({"official_images_commit": commit, "measured": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "rows": rows},
          open("census2.json", "w"), indent=1)
