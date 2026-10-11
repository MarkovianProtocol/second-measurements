#!/usr/bin/env python3
"""Build site/measurements/sm-018.html from out/cve72_summary.json, out/cve72_rows.json and the exhibits folder.
Every number in the tables comes from those files; the prose numbers are checked against them at the end (asserts).
python3 make_page.py"""
import json, os, html, collections, statistics, csv
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "site", "measurements", "sm-018.html")
S = json.load(open(os.path.join(HERE, "out", "cve72_summary.json")))
ROWS = json.load(open(os.path.join(HERE, "out", "cve72_rows.json")))
C = S["counts"]
E = html.escape
def n(x): return f"{x:,}"
def pct(a, b): return f"{100*a/b:.1f}%"
own = [r for r in ROWS if r["own"]]
late = lambda r: r["lag"] > 3
FOUR = ["zdi", "dell", "drupal", "Arista"]
NAMES = {"zdi": "Zero Day Initiative (ZDI)", "dell": "Dell", "drupal": "Drupal", "Arista": "Arista", "VulnCheck": "VulnCheck", "redhat": "Red Hat",
         "suse": "SUSE", "Patchstack": "Patchstack", "adobe": "Adobe", "freebsd": "FreeBSD", "XEN": "Xen Project", "GRAFANA": "Grafana", "microsoft": "Microsoft",
         "Zoom": "Zoom", "tenable": "Tenable", "HCL": "HCL Software", "palo_alto": "Palo Alto Networks", "f5": "F5", "Deltaww": "Delta Electronics", "AMD": "AMD",
         "juniper": "Juniper", "Tanium": "Tanium", "WatchGuard": "WatchGuard", "vmware": "VMware (Broadcom)", "sonicwall": "SonicWall"}
def q(r): return r["published"][:4] + "Q" + str((int(r["published"][5:7]) - 1) // 3 + 1)
QN = {"Q1": "Jan&ndash;Mar", "Q2": "Apr&ndash;Jun", "Q3": "Jul&ndash;Sep", "Q4": "Oct&ndash;Dec"}
def summ(rs):
    L = [r for r in rs if late(r)]
    return dict(scored=len(rs), w1=sum(1 for r in rs if r["lag"] <= 1), sd=sum(1 for r in rs if r["lag"] == 0), late=len(L), over30=sum(1 for r in L if r["lag"] > 30), over90=sum(1 for r in L if r["lag"] > 90),
                medlate=statistics.median(r["lag"] for r in L) if L else None, days=len({r["published"] for r in rs}), maxlag=max(r["lag"] for r in rs) if rs else 0)
ROSTER = {e["shortName"]: e["organizationName"] for e in json.load(open(os.path.join(HERE, "exhibits", "roster", "CNAsList.json")))}
SHORT = {"INCIBE": "INCIBE (Spain)", "RTI": "Real-Time Innovations (RTI)", "GV": "GeoVision", "icscert": "CISA ICS-CERT", "Esri": "Esri", "CERT-PL": "CERT Polska", "Rockwell": "Rockwell Automation", "TR-CERT": "TR-CERT (T&uuml;rkiye)", "runZero": "runZero", "EEF": "Erlang Ecosystem Foundation", "twcert": "TWCERT/CC", "isc": "ISC", "TYPO3": "TYPO3", "DSF": "Django Software Foundation", "Nozomi": "Nozomi Networks", "NETGEAR": "NETGEAR", "CSA": "Cyber Security Agency of Singapore", "INCD": "Israel National Cyber Directorate", "ESET": "ESET", "GEN": "Gen Digital", "Altium": "Altium"}
NAMES.update(SHORT)
def nm(c): return NAMES.get(c) or html.escape(ROSTER.get(c, c))
# ---- quarter table (own-site)
qt = []
for qq in sorted({q(r) for r in own}, reverse=True):
    s = summ([r for r in own if q(r) == qq])
    qt.append(f'<tr><td>{QN[qq[4:]]} {qq[:4]}</td><td class="n">{n(s["scored"])}</td><td class="n">{n(s["w1"])}</td><td class="n">{n(s["late"])}</td><td class="n">{pct(s["late"], s["scored"])}</td><td class="n">{n(s["over30"])}</td></tr>')
# ---- four-CNA table
sp = {"zdi": ("35 + 10", "34 the same day, 1 a day apart; 2025: 8 the same day, 2 a day apart"), "Arista": ("35 + 10", "35 the same day; 2025: 9 the same day, 1 a month off"), "dell": ("35 + 10", "28 the same day in India time, 3 two days after; 3 give a later revision of the advisory; 1 a typo, dropped; 2025: 8 the same day, 2 give a later revision of an older advisory"), "drupal": ("30 + 10", "30 the same minute; 2025: 10 the same day")}
ft = []; FS = {}
for c in FOUR:
    s = summ([r for r in own if r["cna"] == c]); FS[c] = s
    ft.append(f'<tr><td>{NAMES[c]}</td><td class="n">{sp[c][0]}</td><td>{sp[c][1]}</td><td class="n">{n(S["published_by_cna"][c])} ({n(S["with_datePublic_by_cna"][c])})</td><td class="n">{n(s["scored"])}</td><td class="n">{n(s["w1"])}</td><td class="n">{n(s["late"])}</td><td class="n">{pct(s["late"], s["scored"])}</td><td class="n">{n(s["over30"])}</td><td class="n">{s["medlate"]:.1f}</td><td class="n">{s["days"]}</td></tr>')
F4 = summ([r for r in own if r["cna"] in FOUR])
# ---- all CNAs with >= 30 own-site records
ct = []; CS = {}
by = collections.defaultdict(list)
for r in own: by[r["cna"]].append(r)
for c, rs in sorted(by.items(), key=lambda kv: (-sum(1 for r in kv[1] if late(r)), nm(kv[0]).lower())):
    if len(rs) < 30: continue
    s = summ(rs); CS[c] = s
    ct.append(f'<tr><td>{nm(c)}</td><td class="n">{n(s["scored"])}</td><td class="n">{n(s["w1"])}</td><td class="n">{n(s["late"])}</td><td class="n">{pct(s["late"], s["scored"])}</td><td class="n">{n(s["over30"])}</td><td class="n">{"&ndash;" if s["medlate"] is None else "%.1f" % s["medlate"]}</td><td class="n">{s["days"]}</td><td class="n">{len(rs)/s["days"]:.1f}</td></tr>')
# ---- longest waits
titles = {}
for f in os.listdir(os.path.join(HERE, "exhibits", "records")):
    d = json.load(open(os.path.join(HERE, "exhibits", "records", f))); cna = d["containers"]["cna"]
    titles[d["cveMetadata"]["cveId"]] = (cna.get("title") or cna.get("descriptions", [{}])[0].get("value", "")).strip()
wt = []
worst = sorted(own, key=lambda r: (-r["lag"], r["id"]))[:15]
for r in worst:
    t = titles.get(r["id"], ""); t = t if len(t) <= 90 else t[:87].rstrip() + "&hellip;"
    wt.append(f'<tr><td>{nm(r["cna"])}</td><td><a href="https://www.cve.org/CVERecord?id={r["id"]}">{r["id"]}</a></td><td>{E(t) if "&hellip;" not in t else E(t[:-8]) + "&hellip;"}</td><td>{r["public"]}</td><td>{r["published"]}</td><td class="n">{r["lag"]}</td></tr>')
# ---- VulnCheck (outside the own-site set)
VCR = [r for r in ROWS if r["cna"] == "VulnCheck"]; VC = summ(VCR)
assert not any(r["own"] for r in VCR)
# ---- prose numbers
withpub = C["published"] - C["no_datePublic"]
O = summ(own); A = summ(ROWS)
own2025 = summ([r for r in own if r["published"].startswith("2025")]); own2026 = summ([r for r in own if r["published"].startswith("2026")])
ncna = len({r["cna"] for r in ROWS}); nown = len(by)
zdays = collections.Counter(r["published"] for r in by["zdi"]).most_common(1)[0]
ddays = collections.Counter(r["published"] for r in by["drupal"]).most_common(1)[0]
byq = json.load(open(os.path.join(HERE, "out", "cve72_summary.json")))["by_cna_own"]
V = {
 "FILES": n(C["files_2025_2026"]), "PUB": n(C["published"]), "WITHPUB": n(withpub), "DROPRES": n(C["dropped_public_before_reserved"]), "DROPAFTER": n(C["dropped_public_after_published"]),
 "SCORED": n(C["scored"]), "NCNA": str(ncna), "OWN": n(O["scored"]), "NOWN": str(nown), "OWNW1": n(O["w1"]), "OWNW1PCT": pct(O["w1"], O["scored"]), "OWNLATE": n(O["late"]), "OWNLATEPCT": pct(O["late"], O["scored"]),
 "OWN30": n(O["over30"]), "OWN90": n(O["over90"]), "OWNMED": f"{O['medlate']:.0f}", "ALLLATE": n(A["late"]), "ALLLATEPCT": pct(A["late"], A["scored"]), "ALL30": n(A["over30"]),
 "O25L": n(own2025["late"]), "O25S": n(own2025["scored"]), "O25P": pct(own2025["late"], own2025["scored"]), "O26L": n(own2026["late"]), "O26S": n(own2026["scored"]), "O26P": pct(own2026["late"], own2026["scored"]),
 "F4S": n(F4["scored"]), "F4L": n(F4["late"]), "F4P": pct(F4["late"], F4["scored"]), "F4W1": n(F4["w1"]), "F430": n(F4["over30"]), "F490": n(F4["over90"]), "F4MED": f"{F4['medlate']:.0f}", "F4MAX": str(F4["maxlag"]),
 "ZS": n(FS["zdi"]["scored"]), "ZL": n(FS["zdi"]["late"]), "ZP": pct(FS["zdi"]["late"], FS["zdi"]["scored"]), "ZD": str(FS["zdi"]["days"]), "ZTOP": str(zdays[1]), "ZTOPD": zdays[0],
 "DS": n(FS["dell"]["scored"]), "DL": n(FS["dell"]["late"]), "DP": pct(FS["dell"]["late"], FS["dell"]["scored"]), "DD": str(FS["dell"]["days"]),
 "RS": n(FS["drupal"]["scored"]), "RL": n(FS["drupal"]["late"]), "RP": pct(FS["drupal"]["late"], FS["drupal"]["scored"]), "RD": str(FS["drupal"]["days"]), "RTOP": str(ddays[1]), "RTOPD": ddays[0],
 "AS": n(FS["Arista"]["scored"]), "AL": n(FS["Arista"]["late"]), "AP": pct(FS["Arista"]["late"], FS["Arista"]["scored"]),
 "MS": n(CS["microsoft"]["scored"]), "ML": n(CS["microsoft"]["late"]), "MP": pct(CS["microsoft"]["late"], CS["microsoft"]["scored"]), "ADS": n(CS["adobe"]["scored"]), "ADL": n(CS["adobe"]["late"]), "ADP": pct(CS["adobe"]["late"], CS["adobe"]["scored"]),
 "VS": n(VC["scored"]), "VL": n(VC["late"]), "RHS": n(CS["redhat"]["scored"]), "RHL": n(CS["redhat"]["late"]),
 "KEPTRES": n(C["kept_public_before_reserved_within_1d"]), "KEPTAFTER": n(C["kept_public_1d_after_published"]), "AFTERANY": n(C["public_after_published_any"]), "MAPPED": str(S["cnas_scored_mapped"]),
 "OWNSD": n(O["sd"]), "OWNSDPCT": pct(O["sd"], O["scored"]), "F4PUB": n(sum(S["published_by_cna"][c] for c in FOUR)), "ZEROLATE": str(sum(1 for c in CS if CS[c]["late"] == 0)),
 "DELLMOVED": n(S["dell_tz_effect"]["dates_moved"]), "DELLFLIP": str(S["dell_tz_effect"]["late_flipped_to_on_time"]), "DRDRUPAL": str(S["dropped_before_reserved_by_cna"].get("drupal", 0)), "DRZDI": str(S["dropped_before_reserved_by_cna"].get("zdi", 0)), "DRDELL": str(S["dropped_before_reserved_by_cna"].get("dell", 0)), "DRARISTA": str(S["dropped_before_reserved_by_cna"].get("Arista", 0)),
 "NONOWN": n(sum(1 for r in ROWS if not r["own"])), "NONOWNLATE": n(sum(1 for r in ROWS if not r["own"] and late(r))),
 "DOI": (json.load(open(os.path.join(HERE, "..", "zenodo", "sm-018", "deposit.json")))["metadata"]["prereserve_doi"]["doi"] if os.path.exists(os.path.join(HERE, "..", "zenodo", "sm-018", "deposit.json")) else "pending"),
 "TABLE_Q": "\n".join(qt), "TABLE_FOUR": "\n".join(ft), "TABLE_CNA": "\n".join(ct), "TABLE_WORST": "\n".join(wt), "NCT": str(len(ct)),
}
# hard-coded facts checked against the data
assert C["dropped_public_after_published"] == 8018 and C["dropped_public_before_reserved"] == 4607
assert FS["zdi"]["maxlag"] == 108 and FS["dell"]["maxlag"] == 269 and FS["Arista"]["maxlag"] == 199 and FS["drupal"]["maxlag"] == 57
assert [r["id"] for r in worst][:3] == ["CVE-2025-8352", "CVE-2025-27462", "CVE-2025-27463"] and worst[-1]["id"] == "CVE-2025-5088" and worst[-1]["lag"] == 199
assert zdays == ("2025-07-21", 101) and ddays == ("2026-07-10", 46)
assert all(titles.get(r["id"]) for r in worst), "missing record exhibit"

T = open(os.path.join(HERE, "page_template.html")).read()
for k, v in V.items(): T = T.replace("{{" + k + "}}", v)
import re
left = re.findall(r"\{\{[A-Z0-9_]+\}\}", T)
assert not left, "unfilled: " + ", ".join(left)
open(OUT, "w").write(T)
print("wrote", OUT, len(T), "bytes")
