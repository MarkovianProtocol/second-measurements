#!/usr/bin/env python3
"""Read manifests straight from a repository's RRDP snapshot, no validator in between: notification.xml -> snapshot
-> every <publish> whose URI ends in .mft -> CMS -> Manifest (RFC 9286 ASN.1) -> thisUpdate, nextUpdate.
Writes rrdp_<name>.json with one record per manifest and the fetch time."""
import sys, json, base64, re, urllib.request, datetime, xml.etree.ElementTree as ET
from asn1crypto import cms, core
class FileAndHash(core.Sequence):
    _fields = [("file", core.IA5String), ("hash", core.BitString)]
class FileList(core.SequenceOf):
    _child_spec = FileAndHash
class Manifest(core.Sequence):
    _fields = [("version", core.Integer, {"explicit": 0, "default": 0}), ("manifestNumber", core.Integer),
               ("thisUpdate", core.GeneralizedTime), ("nextUpdate", core.GeneralizedTime),
               ("fileHashAlg", core.ObjectIdentifier), ("fileList", FileList)]
UA = {"User-Agent": "second-measurements (markovianprotocol.com) RRDP manifest reader"}
def get(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=600).read()
name, notify = sys.argv[1], sys.argv[2]
t0 = datetime.datetime.now(datetime.timezone.utc)
n = ET.fromstring(get(notify)); ns = {"r": "http://www.ripe.net/rpki/rrdp"}
snap = n.find("r:snapshot", ns); uri = snap.get("uri"); serial = n.get("serial")
data = get(uri); t1 = datetime.datetime.now(datetime.timezone.utc)
root = ET.fromstring(data)
out = {"name": name, "notify": notify, "snapshot": uri, "serial": serial, "fetched": t1.strftime("%Y-%m-%dT%H:%M:%SZ"), "snapshot_bytes": len(data), "manifests": [], "errors": 0}
for p in root.findall("r:publish", ns):
    u = p.get("uri")
    if not u.endswith(".mft"): continue
    try:
        ci = cms.ContentInfo.load(base64.b64decode(p.text.strip()))
        econtent = ci["content"]["encap_content_info"]["content"].native
        m = Manifest.load(econtent)
        out["manifests"].append({"uri": u, "number": str(m["manifestNumber"].native), "this_update": m["thisUpdate"].native.strftime("%Y-%m-%dT%H:%M:%SZ"), "next_update": m["nextUpdate"].native.strftime("%Y-%m-%dT%H:%M:%SZ"), "files": len(m["fileList"])})
    except Exception as e:
        out["errors"] += 1
json.dump(out, open(f"rrdp_{name}.json", "w"))
exp = [m for m in out["manifests"] if datetime.datetime.strptime(m["next_update"], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=datetime.timezone.utc) < t1]
print(name, "serial", serial, "snapshot MB %.1f" % (len(data) / 1e6), "manifests", len(out["manifests"]), "errors", out["errors"], "EXPIRED at fetch", len(exp), file=sys.stderr)
