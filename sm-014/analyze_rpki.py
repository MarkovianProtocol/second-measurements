#!/usr/bin/env python3
"""Tables for SM-014 from the direct RRDP reads (rrdp_<repo>.json, written by rrdp_manifests.py) and, where present,
the rpki-client console's manifest records (console_manifests.json). Standard library only.
  python3 analyze_rpki.py            -> rrdp_summary.json, registro_br_expired_detail.json"""
import json, glob, datetime, collections, re, os
P = lambda s: datetime.datetime.strptime(s, "%Y-%m-%dT%H:%M:%SZ")
con = {}
if os.path.exists("console_manifests.json"):
    con = {m["file"]: m for m in json.load(open("console_manifests.json"))}
summary = collections.OrderedDict()
for f in sorted(glob.glob("rrdp_*.json")):
    if "_run" in f or f == "rrdp_summary.json": continue
    d = json.load(open(f)); T = P(d["fetched"]); M = d["manifests"]
    exp = [m for m in M if P(m["next_update"]) < T]
    rec = [m for m in exp if (T - P(m["next_update"])).total_seconds() < 7 * 86400]
    val = [m for m in exp if m["uri"].replace("rsync://", "") in con]
    win = sorted((P(m["next_update"]) - P(m["this_update"])).total_seconds() / 3600 for m in M)
    left = sorted((P(m["next_update"]) - T).total_seconds() / 3600 for m in M if P(m["next_update"]) >= T)
    summary[d["name"]] = {"fetched": d["fetched"], "serial": d["serial"], "manifests": len(M), "window_h_median": round(win[len(win) // 2], 1),
        "expired": len(exp), "expired_within_7d": len(rec), "expired_in_validated_chain": len(val), "min_hours_left": round(left[0], 2) if left else None,
        "expired_by_year": dict(sorted(collections.Counter(P(m["next_update"]).year for m in exp).items()))}
json.dump(summary, open("rrdp_summary.json", "w"), indent=1)
for k, v in summary.items(): print(f"{k:12s} n={v['manifests']:6d} expired {v['expired']:4d} (7d {v['expired_within_7d']:3d}, validated {v['expired_in_validated_chain']:3d}) window {v['window_h_median']}h")
# registro.br detail: the ROA filenames encode "<prefix>-<maxlen> => <asn>" in hex
f = "rrdp_registro_br.json"
if os.path.exists(f):
    d = json.load(open(f)); T = P(d["fetched"])
    rec = [m for m in d["manifests"] if P(m["next_update"]) < T and (T - P(m["next_update"])).total_seconds() < 7 * 86400]
    rows = []; asns = collections.Counter(); prefixes = set()
    for m in rec:
        c = con.get(m["uri"].replace("rsync://", "")); roas = []
        for fh in (c.get("filesandhashes", []) if c else []):
            if fh["filename"].endswith(".roa"):
                try:
                    s = bytes.fromhex(fh["filename"][:-4]).decode(); roas.append(s)
                    mm = re.match(r"(.+?)-(\d+) => (\d+)", s)
                    if mm: prefixes.add(mm.group(1)); asns[int(mm.group(3))] += 1
                except Exception: pass
        rows.append({"uri": m["uri"], "this_update": m["this_update"], "next_update": m["next_update"], "hours_expired": round((T - P(m["next_update"])).total_seconds() / 3600, 1),
                     "files": m["files"], "console_validation": c.get("validation") if c else "not in console", "roas": roas})
    rows.sort(key=lambda r: -r["hours_expired"])
    json.dump({"fetched": d["fetched"], "expired_within_7d": rows, "distinct_prefixes": len(prefixes), "distinct_asns": len(asns), "asns": asns.most_common()}, open("registro_br_expired_detail.json", "w"), indent=1)
    print("registro.br: expired <7d", len(rows), "| ROA files", sum(len(r["roas"]) for r in rows), "| prefixes", len(prefixes), "| ASNs", len(asns))
