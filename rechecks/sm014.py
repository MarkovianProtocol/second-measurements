# SM-014 recheck: expired RPKI manifests read straight from each repository's RRDP snapshot (no validator): registro.br,
# RIPE's hosted platform and ARIN's hosted platform. Needs asn1crypto. A few minutes.
import json, os, sys, base64, urllib.request, datetime, xml.etree.ElementTree as ET
from asn1crypto import cms, core
R = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "second-measurements recheck (markovianprotocol.com) RRDP manifest reader"}
class FileAndHash(core.Sequence): _fields = [("file", core.IA5String), ("hash", core.BitString)]
class FileList(core.SequenceOf): _child_spec = FileAndHash
class Manifest(core.Sequence):
    _fields = [("version", core.Integer, {"explicit": 0, "default": 0}), ("manifestNumber", core.Integer), ("thisUpdate", core.GeneralizedTime),
               ("nextUpdate", core.GeneralizedTime), ("fileHashAlg", core.ObjectIdentifier), ("fileList", FileList)]
REPOS = {"registro_br": "https://rpki-repo.registro.br/rrdp/notification.xml", "ripe_paas": "https://rrdp.paas.rpki.ripe.net/notification.xml",
         "arin_rps": "https://rrdp-rps.arin.net/notification.xml"}   # the RIR roots (RIPE 278 MB, ARIN 759 MB) had zero expiries; weekly by hand
NS = {"r": "http://www.ripe.net/rpki/rrdp"}
def get(u): return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=600).read()
row = {"date": datetime.datetime.utcnow().strftime("%Y-%m-%d")}
# Where this read came from: the set of expired or non-functional CAs a reader sees depends on its location and sync
# protocol (J. Snijders, 15 Oct 2026). Our reads below are RRDP snapshots fetched from Neo; record that with each row.
row["vantage"] = {"host": "neo", "location": "Colorado, US, residential satellite link", "protocol": "RRDP snapshot"}   # no IP: history is public
for name, notify in REPOS.items():
    try:
        n = ET.fromstring(get(notify)); snap = n.find("r:snapshot", NS).get("uri")
        root = ET.fromstring(get(snap)); T = datetime.datetime.now(datetime.timezone.utc)
        tot = exp = rec = 0
        for p in root.findall("r:publish", NS):
            if not p.get("uri").endswith(".mft"): continue
            try:
                ci = cms.ContentInfo.load(base64.b64decode(p.text.strip())); m = Manifest.load(ci["content"]["encap_content_info"]["content"].native)
                nu = m["nextUpdate"].native; tot += 1
                if nu < T:
                    exp += 1
                    if (T - nu).total_seconds() < 7 * 86400: rec += 1
            except Exception: pass
        row[f"{name}_manifests"] = tot; row[f"{name}_expired"] = exp; row[f"{name}_expired_7d"] = rec
    except Exception as e:
        row[f"{name}_error"] = repr(e)[:80]
# Second path: rpki-client console's list of non-functional CAs (console.rpki-client.org/rpki.json, nonfunc_cas), with the
# console's own build machine and time, since its vantage point differs from ours.
try:
    import gzip
    raw = urllib.request.urlopen(urllib.request.Request("https://console.rpki-client.org/rpki.json", headers={**UA, "Accept-Encoding": "gzip"}), timeout=600).read()
    c = json.loads(gzip.decompress(raw) if raw[:2] == b"\x1f\x8b" else raw); nf = c.get("nonfunc_cas") or []
    by_ta = {}
    for x in nf: by_ta[x.get("ta")] = by_ta.get(x.get("ta"), 0) + 1
    md = c.get("metadata", {})
    row["console_nonfunc"] = {"total": len(nf), "by_ta": by_ta, "registro_br": sum("registro.br" in (x.get("caRepository") or "") for x in nf),
                              "buildmachine": md.get("buildmachine"), "buildtime": md.get("buildtime")}
except Exception as e:
    row["console_nonfunc_error"] = repr(e)[:80]
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-014.jsonl"), "a").write(json.dumps(row) + "\n")
