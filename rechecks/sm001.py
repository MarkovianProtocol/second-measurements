# SM-001 recheck: Pixel factory images on Google's download page vs the Pixel binary-transparency log.
import collections, json, re, sys, time, urllib.request
def get(url, cookie=None):
    h = {"User-Agent": "curl/8"}
    if cookie: h["Cookie"] = cookie
    r = urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=60)
    return r.read().decode(), r.headers.get("Last-Modified")
BT = "https://developers.google.com/android/binary_transparency/"
ck, _ = get(BT + "checkpoint.txt"); size = int(ck.split("\n")[1])
info, lm = get(BT + "image_info.txt"); log = info.strip().split("\n\n")
logged = collections.defaultdict(set)
for e in log:
    m = re.match(r"google/[^/]+/([^:]+):[^/]+/([^/]+)/", e.split("\n")[1])
    if m: logged[m[1]].add(m[2].upper())
site, _ = get("https://developers.google.com/android/images", cookie="devsite_wall_acks=nexus-image-tos")
P6 = {"oriole","raven","bluejay","panther","cheetah","lynx","tangorpro","felix","shiba","husky","akita","tokay","caiman",
      "komodo","comet","tegu","frankel","blazer","mustang","rango","stallion","cubs","grizzly","kodiak","yogi"}
c = collections.Counter(); missing = []
for dev, b in sorted(set(re.findall(r"aosp/([a-z0-9_]+)-([a-z0-9.]+)-factory-[0-9a-f]+\.zip", site))):
    if dev not in P6: continue
    b = b.upper()
    if b in logged[dev]: c["logged"] += 1
    elif b in logged["generic"]: c["generic"] += 1
    else: c["missing"] += 1; missing.append(f"{dev} {b}")
row = {"date": time.strftime("%Y-%m-%d"), "tree_size": size, "log_last_modified": lm, "logged": c["logged"],
       "logged_as_generic": c["generic"], "missing": c["missing"], "missing_examples": missing[:10]}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else "history/sm-001.jsonl", "a").write(json.dumps(row) + "\n")
