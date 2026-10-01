# Compare every Pixel 6+ factory image on developers.google.com/android/images
# with the Pixel Binary Transparency log's image_info.txt.
import collections, re, urllib.request

def get(url, cookie=None):
    h = {"User-Agent": "curl/8"}
    if cookie: h["Cookie"] = cookie
    return urllib.request.urlopen(urllib.request.Request(url, headers=h)).read().decode()

BT = "https://developers.google.com/android/binary_transparency/"
size = int(get(BT + "checkpoint.txt").split("\n")[1])  # verify the signature separately
log = get(BT + "image_info.txt").strip().split("\n\n")
assert len(log) == size

logged = collections.defaultdict(set)
for entry in log:
    fp = entry.split("\n")[1]  # google/<product>/<device>:<ver>/<build>/...
    device, build = re.match(r"google/[^/]+/([^:]+):[^/]+/([^/]+)/", fp).groups()
    logged[device].add(build.upper())

site = get("https://developers.google.com/android/images", cookie="devsite_wall_acks=nexus-image-tos")
PIXEL6_AND_NEWER = {"oriole", "raven", "bluejay", "panther", "cheetah", "lynx", "tangorpro",
    "felix", "shiba", "husky", "akita", "tokay", "caiman", "komodo", "comet", "tegu",
    "frankel", "blazer", "mustang", "rango", "stallion", "cubs", "grizzly", "kodiak", "yogi"}

counts = collections.Counter()
for device, build in sorted(set(re.findall(r"aosp/([a-z0-9_]+)-([a-z0-9.]+)-factory-[0-9a-f]+\.zip", site))):
    if device not in PIXEL6_AND_NEWER: continue
    build = build.upper()
    if build in logged[device]: counts["logged"] += 1
    elif build in logged["generic"]: counts["logged as generic"] += 1
    else: counts["missing"] += 1; print("missing", device, build)
print(f"tree size {size}:", dict(counts))
