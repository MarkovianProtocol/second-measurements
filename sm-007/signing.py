# For a random sample of Official Image repos: fetch one attestation manifest (digest from the census) and record its layer
# media types; a signed attestation would be a DSSE envelope (application/vnd.dsse.envelope.v1+json) or carry a signature
# referrer. Also asks the OCI referrers API for each image index. Anonymous registry pulls are limited to 100/hour.
import json, random, sys, urllib.request, urllib.error
D = json.load(open("census2.json"))["rows"]
by = {}
for r in D:
    if r.get("hub") == "ok" and r.get("att_digests"): by.setdefault(r["repo"], r)
random.seed(20261002); pick = random.sample(sorted(by), min(int(sys.argv[1]), len(by)))
def tok(repo): return json.load(urllib.request.urlopen(f"https://auth.docker.io/token?service=registry.docker.io&scope=repository:{repo}:pull"))["token"]
def get(repo, path, t, accept):
    try:
        with urllib.request.urlopen(urllib.request.Request(f"https://registry-1.docker.io/v2/{repo}/{path}",
                                    headers={"Authorization": "Bearer " + t, "Accept": accept})) as x: return json.load(x)
    except urllib.error.HTTPError as e: return {"_error": e.code}
out = []
for name in pick:
    r = by[name]; repo = f"library/{name}"; t = tok(repo)
    m = get(repo, f"manifests/{r['att_digests'][0]}", t, "application/vnd.oci.image.manifest.v1+json")
    ref = get(repo, f"referrers/{r['digest']}", t, "application/vnd.oci.image.index.v1+json")
    out.append({"repo": name, "tag": r["tag"], "layer_media": sorted({l["mediaType"] for l in m.get("layers", [])}),
                "predicates": sorted({l.get("annotations", {}).get("in-toto.io/predicate-type", "?") for l in m.get("layers", [])}),
                "referrers": len(ref.get("manifests", [])) if "_error" not in ref else ref["_error"], "error": m.get("_error")})
    print(json.dumps(out[-1]), flush=True)
json.dump(out, open("signing_sample.json", "w"), indent=1)
ok = [o for o in out if not o["error"]]
print(f"\nsampled {len(out)} repos; manifests read {len(ok)}; DSSE-signed {sum(any('dsse' in m for m in o['layer_media']) for o in ok)}; "
      f"plain in-toto only {sum(o['layer_media'] == ['application/vnd.in-toto+json'] for o in ok)}; with any referrer {sum(isinstance(o['referrers'], int) and o['referrers'] > 0 for o in ok)}")
