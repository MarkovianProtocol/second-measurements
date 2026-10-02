# PyPI said 17% of all uploads in 2025 carried an attestation and >20% came via Trusted Publishing
# (blog.pypi.org, 2025 in review). Sample 2025 file uploads from PyPI's own changelog and ask the
# Integrity API about each one. Attestations require Trusted Publishing, so the attested share is
# also a floor on the Trusted Publishing share. Stdlib only.
import xmlrpc.client, json, random, re, sys, time, datetime, urllib.request, urllib.error, collections
C = xmlrpc.client.ServerProxy("https://pypi.org/pypi")
UA = {"User-Agent": "markovian-second-measurement/1.0 (hello@markovianprotocol.com)"}
PAGES, PER_PAGE, SEED = 50, 20, 20261001

def page(serial):
    for i in range(5):
        try: return C.changelog_since_serial(serial)
        except Exception: time.sleep(5 * (i + 1))
    raise SystemExit(f"changelog failed at {serial}")

def first_serial_at(ts, lo, hi):             # smallest serial whose event time is >= ts
    while hi - lo > 50000:
        mid = (lo + hi) // 2
        if page(mid)[0][2] < ts: lo = mid
        else: hi = mid
    for e in page(lo):
        if e[2] >= ts: return e[4]
    return hi

def get(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r: return 200, json.load(r)
    except urllib.error.HTTPError as e: return e.code, None

FILE = re.compile(r"^add (\S+) file (\S+)$")
start = int(datetime.datetime(2025, 1, 1, tzinfo=datetime.timezone.utc).timestamp())
end = int(datetime.datetime(2026, 1, 1, tzinfo=datetime.timezone.utc).timestamp())
last = C.changelog_last_serial()
s0 = first_serial_at(start, 0, last); s1 = first_serial_at(end, s0, last)
print(f"2025 = serials {s0}..{s1}", flush=True)

random.seed(SEED)
rows = []
for k in sorted(random.sample(range(s0, s1 - 50000), PAGES)):
    files = [e for e in page(k) if FILE.match(e[3] or "") and s0 <= e[4] < s1]
    for name, ver, ts, action, serial in random.sample(files, min(PER_PAGE, len(files))):
        fn = FILE.match(action).group(2)
        st, prov = get(f"https://pypi.org/integrity/{name}/{ver}/{fn}/provenance")
        row = {"serial": serial, "time": ts, "project": name, "version": ver, "file": fn, "integrity": st}
        if st == 200:
            row["publishers"] = sorted({b.get("publisher", {}).get("kind", "?") for b in prov.get("attestation_bundles", [])})
        else:
            st2, meta = get(f"https://pypi.org/pypi/{name}/{ver}/json")
            row["file_exists"] = st2 == 200 and any(u["filename"] == fn for u in meta.get("urls", []))
        rows.append(row); time.sleep(0.2)
    print(f"page {k}: {len(files)} file uploads, sampled {min(PER_PAGE, len(files))}, total {len(rows)}", flush=True)
json.dump(rows, open("sample_2025.json", "w"), indent=1)

live = [r for r in rows if r["integrity"] == 200 or r.get("file_exists")]
att = [r for r in live if r["integrity"] == 200]
n, k = len(live), len(att); p = k / n
z = 1.96; d = 1 + z * z / n; c = (p + z * z / (2 * n)) / d; h = z * ((p * (1 - p) / n + z * z / (4 * n * n)) ** .5) / d
print(f"sampled {len(rows)}; still on PyPI {n}; deleted since {len(rows) - n}")
print(f"attested: {k}/{n} = {100*p:.1f}%  (95% Wilson {100*(c-h):.1f}-{100*(c+h):.1f}%; clustering by 3-day page widens this)")
print("publishers:", dict(collections.Counter(x for r in att for x in r["publishers"])))
by_proj = collections.Counter(r["project"] for r in att); print("most-sampled attested projects:", by_proj.most_common(5))
