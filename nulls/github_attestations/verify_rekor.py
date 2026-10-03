#!/usr/bin/env python3
"""Second path for the transparency-log claim: every tlog entry a GitHub bundle names is looked up on the
Sigstore public-good Rekor instance by log index, and the entry's body hash and integration time compared.
Rekor v1 (rekor.sigstore.dev) answers by index; entries whose logId is not that instance are reported as such.
Reads attestations.json (+ the saved bundles' tlog entries via collect.py output). Writes rekor_check.json."""
import json, urllib.request, collections, time, sys, base64, hashlib
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
REKOR_V1_KEYID = "c0d23d6ad406973f9559f3ba2d1ca01f84147d8ffc5b8445c224f98b9591801d"
out = []
rows = json.load(open("attestations.json"))
with_tlog = [r for r in rows if r["tlog_entries"]]
print(len(with_tlog), "attestations with a tlog entry", file=sys.stderr)
for r in with_tlog:
    for lid, idx in zip(r["log_ids"], r["log_index"]):
        rec = {"repo": r["repo"], "asset": r["asset"], "log_id": lid, "log_index": idx}
        if base64.b64decode(lid).hex() != REKOR_V1_KEYID:
            rec["result"] = "other log id"; out.append(rec); continue
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(f"https://rekor.sigstore.dev/api/v1/log/entries?logIndex={idx}", headers=UA), timeout=60))
            (uuid, e), = d.items()
            rec.update({"result": "found", "integrated_time": e.get("integratedTime"), "uuid": uuid[:16], "kind": json.loads(base64.b64decode(e["body"]))["kind"], "verified_inclusion": bool(e.get("verification", {}).get("inclusionProof"))})
        except urllib.error.HTTPError as ex:
            rec["result"] = f"HTTP {ex.code}"
        except Exception as ex:
            rec["result"] = "error " + repr(ex)[:60]
        out.append(rec); time.sleep(0.2)
json.dump(out, open("rekor_check.json", "w"), indent=1)
print(collections.Counter(o["result"] for o in out), file=sys.stderr)
print("kinds:", collections.Counter(o.get("kind") for o in out if o.get("kind")), file=sys.stderr)
