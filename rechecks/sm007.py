# SM-007 recheck: Docker Official Images -- attestation coverage on a random 300 image entries (Docker Hub tag API) and
# signatures on 10 random repos (registry: DSSE media type + referrers). Anonymous registry reads are capped at 100/hour.
import json, os, random, re, subprocess, sys, time, datetime, urllib.request, urllib.error, collections
R = os.path.dirname(os.path.abspath(__file__)); OI = os.path.join(R, "oi")
if os.path.exists(OI): subprocess.run(["git", "-C", OI, "pull", "-q"], check=False)
else: subprocess.run(["git", "clone", "-q", "--depth", "1", "https://github.com/docker-library/official-images.git", OI], check=True)
entries = []
for repo in sorted(os.listdir(f"{OI}/library")):
    for block in re.split(r"\n\s*\n", open(f"{OI}/library/{repo}").read()):
        m = re.search(r"^Tags:\s*(.+)$", block, re.M)
        if m: entries.append((repo, m.group(1).split(",")[0].strip()))
def hub(repo, tag):
    for i in range(5):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(
            f"https://hub.docker.com/v2/repositories/library/{repo}/tags/{tag}", headers={"User-Agent": "markovian-recheck"}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(10 * (i + 1))
        except Exception: time.sleep(10 * (i + 1))
random.seed(int(time.time()) // 86400)
lin = att = 0; samples = []
for repo, tag in random.sample(entries, 300):
    t = hub(repo, tag); time.sleep(0.35)
    if not t: continue
    c = collections.Counter("att" if i.get("os") == "unknown" else i.get("os") for i in t.get("images") or [])
    if c.get("linux"): lin += c["linux"]; att += min(c.get("att", 0), c["linux"])
    if c.get("att"): samples.append((repo, t["digest"], next(i["digest"] for i in t["images"] if i.get("os") == "unknown")))
signed = refs = checked = 0
for repo, idx, ad in random.sample(samples, min(10, len(samples))):
    r = f"library/{repo}"
    tok = json.load(urllib.request.urlopen(f"https://auth.docker.io/token?service=registry.docker.io&scope=repository:{r}:pull"))["token"]
    def get(path, accept):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(f"https://registry-1.docker.io/v2/{r}/{path}",
                              headers={"Authorization": "Bearer " + tok, "Accept": accept}), timeout=60))
        except urllib.error.HTTPError: return None
    m = get(f"manifests/{ad}", "application/vnd.oci.image.manifest.v1+json")
    if not m: continue
    checked += 1; signed += any("dsse" in l["mediaType"] for l in m.get("layers", []))
    x = get(f"referrers/{idx}", "application/vnd.oci.image.index.v1+json"); refs += bool(x and x.get("manifests"))
row = {"date": time.strftime("%Y-%m-%d"), "entries_sampled": 300, "linux_images": lin, "linux_attested": att,
       "repos_checked_for_signatures": checked, "signed": signed, "with_referrers": refs,
       "days_to_notary_shutdown": (datetime.date(2026, 12, 8) - datetime.date.today()).days}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-007.jsonl"), "a").write(json.dumps(row) + "\n")
