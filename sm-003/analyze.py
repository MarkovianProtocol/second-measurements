# Tables for SM-003 from the outputs of scan_github.py, classify_all.py, origins.sh and github_live.py.
# Needs sboms-01.csv from Zenodo 14250103 (swhid -> sha1) in the working directory as sboms01.csv.
import csv, json, collections

sw2sha = {r["swhid"]: r["sha1"] for r in csv.DictReader(open("sboms01.csv"))}
harness = {sw2sha[r["swhid"]] for r in csv.DictReader(open("repo_origins.csv")) if r["swhid"] in sw2sha}
C = [json.loads(l) for l in open("classified_v2.jsonl")]

def split(rows):
    ok = [r for r in rows if r["cls"] != "PARSE_FAIL"]
    c = collections.Counter(r["cls"] for r in ok)
    return len(rows), len(ok), {k: (c[k], round(100 * c[k] / len(ok), 1)) for k in ("NO_EDGES", "degenerate", "connected")}

print("Table A. Regimes (paper: 77,092 parsed; NO_EDGES 52.9%, degenerate 8.8%, connected 38.3%)")
for name, rows in (("whole corpus", C), ("harness only", [r for r in C if r["sha1"] in harness]),
                   ("corpus without harness", [r for r in C if r["sha1"] not in harness])):
    print(f"  {name:24} files={split(rows)[0]:6} parsed={split(rows)[1]:6} {split(rows)[2]}")
print(f"  harness files: {len(harness)} of {len(sw2sha)}")

G = [json.loads(l) for l in open("github_sboms.jsonl")]
has_edges = lambda l: (l["cdx_deps"] or 0) > 0 or l["rel_types"].get("DEPENDS_ON", 0) > 0
def norm(t):
    for k, v in (("cdxgen", "cdxgen"), ("Node.js module", "Node.js module"), ("gomod", "cyclonedx-gomod"),
                 ("php-composer", "cdx-php-composer"), ("Extractor", "GitHub Extractor")):
        if k in t: return v
    return t[:30]
fort = [l for l in G if "Fortress" in l["label"]]
print("\nTable B. Fortress-tagged files, attributed to first-listed tool")
print("  in harness:", sum(l["file"].split("/")[-1] in harness for l in fort), "of", len(fort))
c, ce = collections.Counter(), collections.Counter()
for l in fort:
    t = norm(l["label"].split("|")[0].strip()); c[t] += 1; ce[t] += has_edges(l)
for t, v in c.most_common(6):
    print(f"  {t:22} {v:6} no-edges {100 * (1 - ce[t] / v):.1f}%")
dates = sorted(l["created"] for l in fort if l["created"])
print("  created", dates[0], "to", dates[-1])

print("\nTable C. GitHub's own exporter (creator Tool: GitHub.com-Dependency-Graph) in the corpus")
for l in sorted((l for l in G if "GitHub.com-Dependency-Graph" in l["label"]), key=lambda l: l["created"] or ""):
    print(f"  {l['created']}  packages={l['packages']:5}  DEPENDS_ON={l['rel_types'].get('DEPENDS_ON', 0)}")

L = [r for r in json.load(open("github_live.json")) if not r.get("error")]
dep = [r for r in L if r["packages"] > 1]
print(f"\nTable D. GitHub's exporter today: {len(L)} repos with an SBOM, {len(dep)} with at least one dependency, "
      f"{sum(r['depends_on'] > 0 for r in dep)} of those with DEPENDS_ON edges")
try:
    D = json.load(open("github_live_depth.json"))
    print(f"  with package-to-package edges: {sum(1 for d in D if d[3] > 0)} of {len(D)}")
except FileNotFoundError:
    pass
