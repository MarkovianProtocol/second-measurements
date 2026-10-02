# Docker Official Images: per platform, is there an SBOM and a provenance attestation, and is any of it signed?
import json, sys, urllib.request
def tok(repo):
    return json.load(urllib.request.urlopen(f"https://auth.docker.io/token?service=registry.docker.io&scope=repository:{repo}:pull"))["token"]
def get(repo, ref, t, accept):
    r = urllib.request.Request(f"https://registry-1.docker.io/v2/{repo}/manifests/{ref}",
        headers={"Authorization": "Bearer " + t, "Accept": accept})
    return json.load(urllib.request.urlopen(r))
IDX = "application/vnd.oci.image.index.v1+json,application/vnd.docker.distribution.manifest.list.v2+json"
MAN = "application/vnd.oci.image.manifest.v1+json"
def probe(img):
    name, _, tag = img.partition(":"); repo = f"library/{name}"; t = tok(repo)
    idx = get(repo, tag or "latest", t, IDX)
    plats = [m for m in idx["manifests"] if m.get("platform", {}).get("os") not in (None, "unknown")]
    atts = [m for m in idx["manifests"] if m.get("annotations", {}).get("vnd.docker.reference.type") == "attestation-manifest"]
    out = {"image": img, "platforms": len(plats), "attestation_manifests": len(atts), "kinds": {}, "layer_media": set()}
    for a in atts:
        m = get(repo, a["digest"], t, MAN)
        for l in m.get("layers", []):
            out["layer_media"].add(l["mediaType"])
            pt = l.get("annotations", {}).get("in-toto.io/predicate-type", "?")
            out["kinds"][pt] = out["kinds"].get(pt, 0) + 1
    out["layer_media"] = sorted(out["layer_media"]); return out
for img in sys.argv[1:]: print(json.dumps(probe(img)))
