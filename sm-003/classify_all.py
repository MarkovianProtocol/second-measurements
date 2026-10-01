# v2 adds CycloneDX XML and SPDX tag-value. Second pass over the Wild SBOMs tar (Zenodo 14250103): classify every SBOM as in arXiv 2607.22140.
# NO_EDGES: no dependency block (CycloneDX `dependencies` array; SPDX dependency-type relationships).
# Otherwise rho = vertices with no edge / vertices; degenerate if rho > 0.5, else connected.
import sys, tarfile, gzip, json, re
import xml.etree.ElementTree as ET
SPDX_DEP = {"DEPENDS_ON", "DEPENDENCY_OF", "DEV_DEPENDENCY_OF", "BUILD_DEPENDENCY_OF",
            "RUNTIME_DEPENDENCY_OF", "OPTIONAL_DEPENDENCY_OF", "TEST_DEPENDENCY_OF"}

def classify(d):
    if "spdxVersion" in d:
        verts = [p.get("SPDXID") for p in d.get("packages") or [] if isinstance(p, dict)]
        rels = [r for r in d.get("relationships") or [] if isinstance(r, dict) and r.get("relationshipType") in SPDX_DEP]
        block = len(rels) > 0 or None
        edges = [(r.get("spdxElementId"), r.get("relatedSpdxElement")) for r in rels]
        fmt = "spdx"
    elif "bomFormat" in d or "specVersion" in d:
        comps = d.get("components") or []
        verts = [c.get("bom-ref") for c in comps if isinstance(c, dict)]
        root = ((d.get("metadata") or {}).get("component") or {}).get("bom-ref")
        if root: verts.append(root)
        deps = d.get("dependencies")
        block = isinstance(deps, list) or None
        edges = [(x.get("ref"), t) for x in deps or [] if isinstance(x, dict) for t in (x.get("dependsOn") or [])]
        fmt = "cdx"
    else:
        return None
    vs = set(v for v in verts if v)
    if not block:
        return {"fmt": fmt, "cls": "NO_EDGES", "V": len(vs), "E": 0, "rho": None}
    touched = set()
    for a, b in edges:
        if a in vs and b in vs and a != b:
            touched.add(a); touched.add(b)
    rho = (len(vs) - len(touched)) / len(vs) if vs else 1.0
    return {"fmt": fmt, "cls": "degenerate" if rho > 0.5 else "connected", "V": len(vs), "E": len(edges), "rho": round(rho, 4)}


def classify_xml(raw):
    root = ET.fromstring(raw)
    tag = lambda e: e.tag.split("}")[-1]
    if tag(root) != "bom": return None
    verts, edges, block = set(), [], False
    for e in root.iter():
        t = tag(e)
        if t == "component" and e.get("bom-ref"): verts.add(e.get("bom-ref"))
        if t == "dependencies": block = True
    for dep in root.iter():
        if tag(dep) == "dependency" and dep.get("ref"):
            for child in dep:
                if tag(child) == "dependency" and child.get("ref"): edges.append((dep.get("ref"), child.get("ref")))
    return finish("cdx-xml", verts, edges, block)

def classify_tv(text):
    if "SPDXVersion:" not in text: return None
    verts = set(re.findall(r"^SPDXID:\s*(\S+)", text, re.M))
    rels = re.findall(r"^Relationship:\s*(\S+)\s+(\S+)\s+(\S+)", text, re.M)
    dep = [(a, b) for a, t, b in rels if t in SPDX_DEP]
    return finish("spdx-tv", verts, dep, len(dep) > 0)

def finish(fmt, vs, edges, block):
    if not block: return {"fmt": fmt, "cls": "NO_EDGES", "V": len(vs), "E": 0, "rho": None}
    touched = set()
    for a, b in edges:
        if a in vs and b in vs and a != b: touched.add(a); touched.add(b)
    rho = (len(vs) - len(touched)) / len(vs) if vs else 1.0
    return {"fmt": fmt, "cls": "degenerate" if rho > 0.5 else "connected", "V": len(vs), "E": len(edges), "rho": round(rho, 4)}

out = open("classified_v2.jsonl", "w"); n = 0
tf = tarfile.open(fileobj=sys.stdin.buffer, mode="r|")
for m in tf:
    if not m.isfile(): continue
    n += 1
    raw = tf.extractfile(m).read()
    try: raw = gzip.decompress(raw)
    except Exception: pass
    sha1 = m.name.split("/")[-1]
    r = None
    try:
        d = json.loads(raw)
        r = classify(d) if isinstance(d, dict) else None
    except Exception:
        text = raw.decode("utf-8", "replace").lstrip("\ufeff").lstrip()
        try:
            r = classify_xml(raw) if text.startswith("<") else classify_tv(text)
        except Exception:
            r = None
        if r is None:
            r = {"cls": "PARSE_FAIL", "head": text[:40]}
    if r is None: r = {"cls": "PARSE_FAIL", "head": raw[:40].decode("utf-8", "replace")}
    out.write(json.dumps({"sha1": sha1, **r}) + "\n")
    if n % 5000 == 0: print(n, flush=True)
print("done", n, flush=True)
