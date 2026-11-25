#!/usr/bin/env python3
"""ecosyste.ms advisories found by repository_url, for each project's repository under the URL spellings that appear in OSV and NVD.
Usage: ecosystems_lookup.py OUT.json"""
import json, sys, time, urllib.request, urllib.parse
URLS = ["https://github.com/postgres/postgres", "https://github.com/nginx/nginx", "https://github.com/MariaDB/server", "https://github.com/mariadb/server",
        "https://github.com/openssl/openssl", "https://github.com/openssl/openssl/"]
out = {}
for u in URLS:
    n, page, ids = 0, 1, []
    while True:
        q = urllib.parse.urlencode({"repository_url": u, "page": page, "per_page": 100})
        a = json.load(urllib.request.urlopen(urllib.request.Request("https://advisories.ecosyste.ms/api/v1/advisories?" + q, headers={"User-Agent": "markovianprotocol.com research"}), timeout=60))
        ids += [(x.get("uuid"), x.get("origin"), [i for i in x.get("identifiers") or [] if i.startswith("CVE-")]) for x in a]
        if len(a) < 100: break
        page += 1; time.sleep(1)
    out[u] = {"count": len(ids), "advisories": ids, "read_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())}
    print(u, len(ids), sorted({o for _, o, _ in ids}))
json.dump(out, open(sys.argv[1], "w"), indent=1)
