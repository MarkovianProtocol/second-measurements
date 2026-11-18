#!/usr/bin/env python3
"""Recompute for Tom Alrich, "So you don't believe there's a Vulnpocalypse?" (Energy Central, 2 Sep 2026).
data/nvd_monthly_counts_20261118.json  NVD API 2.0 totalResults per month of NVD publication, with and without noRejected (read 18 Nov)
data/nvd_2026-08.json                  every NVD record published in August 2026 (pull_month.py)
data/cvelist_2026_08_10.json           identifiers each CNA put in its CVE records, Aug-Oct 2026 (extract_cvelist.py on cvelistV5)"""
import json, collections
M = json.load(open("data/nvd_monthly_counts_20261118.json"))
print("CVE records by month of NVD publication, 2026 (all / without rejected IDs):")
for m in sorted(M, key=int): print(f"  {int(m):>2}: {M[m]['all']:>6,} / {M[m]['noRejected']:>6,}")
P = json.load(open("data/nvd_monthly_counts_2024_2025.json")); mx = max(P.items(), key=lambda x: x[1])
print(f"highest month in 2024-2025: {mx[0]} with {mx[1]:,}; 2025 total {sum(v for k, v in P.items() if k.startswith('2025')):,}")
a, j = M["8"], M["1"]
allm = dict(P, **{f"2026-{int(k):02d}": v["all"] for k, v in M.items()}); ks = sorted(allm)
print("2026 months that set an all-time record:", [k for i, k in enumerate(ks) if k.startswith("2026") and k <= "2026-08" and allm[k] > max(allm[x] for x in ks[:i])])
print(f"August vs January: {a['all']/j['all']:.2f}x all, {a['noRejected']/j['noRejected']:.2f}x without rejected")
since = M["9"]["all"] + M["10"]["all"] + M["11"]["all"]; months = 2 + 17 / 30
print(f"Sep 1 - Nov 17: {since:,} records, {since/months:,.0f}/month, {12*since/months:,.0f}/year at that pace")
V = [v["cve"] for v in json.load(__import__("gzip").open("data/nvd_2026-08.json.gz"))]
live = [c for c in V if c.get("vulnStatus") != "Rejected"]
st = collections.Counter(c.get("vulnStatus") for c in live); n = len(live)
print(f"\nAugust, NVD, {n:,} records not rejected:")
for k, v in st.most_common(): print(f"  {k:20} {v:>6,} {100*v/n:5.1f}%")
cpe = sum(bool(c.get("configurations")) for c in live); print(f"  with an NVD CPE configuration: {cpe:,} ({100*cpe/n:.1f}%)")
nvdscore = sum(any(m.get("source") == "nvd@nist.gov" for k in (c.get("metrics") or {}) for m in c["metrics"][k]) for c in live)
print(f"  with a CVSS score from NVD itself: {nvdscore:,} ({100*nvdscore/n:.1f}%)")
src = collections.Counter(c.get("sourceIdentifier") for c in live)
print(f"  distinct submitting sources (sourceIdentifier): {len(src)}; top three {sum(v for _, v in src.most_common(3)):,} ({100*sum(v for _, v in src.most_common(3))/n:.1f}%): {src.most_common(3)}")
L = {r["id"]: r for r in json.load(open("data/cvelist_2026_08_10.json"))}
print("\nCVE records (cvelistV5) by month of CVE publication, PUBLISHED state:")
for m in ("2026-08", "2026-09", "2026-10"):
    R = [r for r in L.values() if r["pub"] == m and r["state"] == "PUBLISHED"]; k = len(R)
    p = sum(r["purl_cna"] for r in R); c = sum(r["cpe_cna"] for r in R); pa = sum(r["purl_adp"] for r in R)
    print(f"  {m}: {k:,}; CNA PURL {p:,} ({100*p/k:.1f}%); CNA CPE {c:,} ({100*c/k:.1f}%); ADP PURL {pa}")
aug = [r for r in L.values() if r["pub"] == "2026-08" and r["state"] == "PUBLISHED"]
by = collections.Counter(r["assigner"] for r in aug); pu = collections.Counter(r["assigner"] for r in aug if r["purl_cna"])
print("  August, largest CNAs: " + "; ".join(f"{a} {v:,} (PURL {pu.get(a,0)}, packageName+collectionURL {sum(r['pkg_cna'] for r in aug if r['assigner']==a)}, repo {sum(r['repo_cna'] for r in aug if r['assigner']==a)})" for a, v in by.most_common(5)))
print(f"  August PURLs by CNA: {pu.most_common(4)} of {sum(pu.values())}")
both = [c for c in live if c["id"] in L]
f = lambda c: (bool(c.get("configurations")), L[c["id"]]["purl_cna"], L[c["id"]]["cpe_cna"])
none = [c for c in both if not any(f(c))]; ker = sum(L[c["id"]]["assigner"] == "Linux" for c in none)
print(f"\nAugust records in both sources: {len(both):,}; no CPE (NVD or CNA) and no PURL: {len(none):,} ({100*len(none)/len(both):.1f}%); "
      f"of those, Linux kernel records (which carry the git repo): {ker:,}; the rest: {len(none)-ker:,} ({100*(len(none)-ker)/len(both):.1f}%)")
