# Armored Witness prod firmware log: does every logged (tag, commit) match the tag's commit on GitHub?
import json, subprocess, urllib.request, collections
B = "https://api.transparency.dev/armored-witness-firmware/prod/log/1"
size = int(urllib.request.urlopen(B + "/checkpoint").read().decode().split("\n")[1])
REPO = {"BOOTLOADER": "transparency-dev/armored-witness-boot", "TRUSTED_OS": "transparency-dev/armored-witness-os",
        "TRUSTED_APPLET": "transparency-dev/armored-witness-applet", "RECOVERY": "usbarmory/armory-ums"}
res = collections.Counter(); rows = []
for i in range(size):
    e = json.JSONDecoder().raw_decode(urllib.request.urlopen(f"{B}/seq/00/00/00/00/{i:02x}").read().decode())[0]  # entry = JSON manifest + signature lines
    comp, tag, fp = e["component"], e["git"]["tag_name"], e["git"]["commit_fingerprint"]
    repo = REPO.get(comp)
    sha = ""
    for t in (tag, "v" + tag):  # repos tag releases as vX.Y.Z; the log records X.Y.Z
        r = subprocess.run(["gh", "api", f"repos/{repo}/commits/{t}", "--jq", ".sha"], capture_output=True, text=True)
        if r.returncode == 0: sha = r.stdout.strip(); break
    ok = sha == fp
    res[(comp, ok)] += 1; rows.append((i, comp, tag, fp[:12], sha[:12] or r.stderr.strip()[:40], ok))
for r in rows: print(*r)
print("tree size", size, dict(res))
