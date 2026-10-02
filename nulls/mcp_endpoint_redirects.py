# Endpoint redirection in the official MCP registry (arXiv 2609.14119 reports 4.16% of multi-version servers),
# recomputed from the registry's public API, then split by who controls the new host using the Public Suffix List.
# Downloads every version record (about 145 MB) and the PSL, then prints the counts. Stdlib only.
# Usage: python3 mcp_endpoint_redirects.py [cutoff, default 2026-08-31T23:59:59]
import os, urllib.request
if not os.path.exists("psl.dat"):
    urllib.request.urlretrieve("https://publicsuffix.org/list/public_suffix_list.dat", "psl.dat")
if not os.path.exists("registry_all.json"):
    import json, time, urllib.request, urllib.parse
    B = "https://registry.modelcontextprotocol.io/v0/servers"
    out, cur = [], None
    while True:
        q = {"limit": 100}
        if cur: q["cursor"] = cur
        for i in range(6):
            try:
                d = json.load(urllib.request.urlopen(B + "?" + urllib.parse.urlencode(q), timeout=60)); break
            except Exception as e:
                time.sleep(5 * (i + 1))
        else: raise SystemExit(f"failed at cursor {cur}")
        out += d["servers"]
        cur = (d.get("metadata") or {}).get("nextCursor")
        if len(out) % 5000 < 100: print(len(out), flush=True)
        if not cur: break
    json.dump(out, open("registry_all.json", "w"))
    print("records", len(out), "servers", len({r["server"]["name"] for r in out}))

# remote endpoint to a different host while keeping their registry identity".
import json, sys, collections, urllib.parse
CUT = sys.argv[1] if len(sys.argv) > 1 else "2026-08-31T23:59:59"
R = [r for r in json.load(open("registry_all.json"))
     if r["_meta"]["io.modelcontextprotocol.registry/official"]["publishedAt"] <= CUT]
by = collections.defaultdict(list)
for r in R: by[r["server"]["name"]].append(r)
RULES, EXC, WILD = set(), set(), set()
for line in open("psl.dat", encoding="utf-8"):          # Public Suffix List, private section included
    line = line.split("//")[0].strip()
    if not line: continue
    if line.startswith("!"): EXC.add(line[1:])
    elif line.startswith("*."): WILD.add(line[2:])
    else: RULES.add(line)
def reg(host):                        # registrable domain (eTLD+1) under the Public Suffix List
    p = host.lower().strip(".").split(".")
    for i in range(len(p)):
        cand = ".".join(p[i:])
        if cand in EXC: return cand
        if cand in RULES or ".".join(p[i+1:]) in WILD:
            return ".".join(p[max(i-1, 0):])
    return ".".join(p[-2:])
def hosts(r):
    out = set()
    for x in r["server"].get("remotes") or []:
        h = urllib.parse.urlparse(x.get("url", "")).hostname
        if h: out.add(h.lower())
    return out
def ns_domain(name):                  # reverse-DNS namespace -> the domain the registry verified
    ns = name.split("/")[0]
    if ns.startswith("io.github."): return None  # GitHub-account namespace, no domain behind it
    return reg(".".join(reversed(ns.split("."))))
multi = {n: sorted(v, key=lambda r: r["_meta"]["io.modelcontextprotocol.registry/official"]["publishedAt"])
         for n, v in by.items() if len(v) > 1}
red = {}
for n, vs in multi.items():
    ev = []
    for a, b in zip(vs, vs[1:]):
        ha, hb = hosts(a), hosts(b)
        if ha and hb and (ha - hb) and (hb - ha): ev.append((sorted(ha - hb), sorted(hb - ha)))
    if ev: red[n] = ev
print(f"cut {CUT}: records {len(R)}, servers {len(by)}, multi-version {len(multi)}")
print(f"servers with a host redirect: {len(red)} ({100*len(red)/len(multi):.2f}%), events {sum(len(e) for e in red.values())}")
kind = collections.Counter(); examples = collections.defaultdict(list)
for n, evs in red.items():
    dom = ns_domain(n); worst = "same registrable domain"
    for old, new in evs:
        olds = {reg(h) for h in old}; news = {reg(h) for h in new}
        if news <= olds: k = "same registrable domain"
        elif dom and all(reg(h) == dom for h in new): k = "new host inside the verified namespace domain"
        elif dom is None: k = "different domain, GitHub-account namespace"
        else: k = "different domain, outside the verified namespace domain"
        order = ["same registrable domain", "new host inside the verified namespace domain",
                 "different domain, GitHub-account namespace", "different domain, outside the verified namespace domain"]
        if order.index(k) > order.index(worst): worst = k
    kind[worst] += 1; examples[worst].append((n, evs[0]))
for k, v in kind.most_common(): print(f"  {v:5}  {k}")
json.dump({"cut": CUT, "multi": len(multi), "redirect_servers": len(red), "kinds": kind,
           "examples": {k: v[:15] for k, v in examples.items()}}, open(f"drift_{CUT[:10]}.json", "w"), indent=1)
