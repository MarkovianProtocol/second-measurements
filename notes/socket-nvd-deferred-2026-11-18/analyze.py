#!/usr/bin/env python3
"""Recompute of Socket's NVD glossary measurement ("as of October 28, 2026", page last updated 2026-10-29), read live from the
NVD API on 18 Nov 2026 for the same window (NVD publish date 1 Jan - 27 Oct 2026), plus what changed in the three weeks since.
Inputs: data/nvd_2026-MM.json.gz (pull_all.sh), data/cisa_kev.json (CISA KEV catalog), data/socket_glossary_nvd_2026-11-18.md."""
import json, gzip, glob, collections, re
V = []
for f in sorted(glob.glob("data/nvd_2026-*.json.gz")):
    V += [v["cve"] for v in json.load(gzip.open(f))]
n = len(V)
st = collections.Counter(c.get("vulnStatus") for c in V)
print(f"NVD records published 1 Jan - 27 Oct 2026, read 18 Nov: {n:,}")
SOCKET = {"Analyzed": 33894, "Deferred": 33417, "Awaiting Analysis": 9227, "Modified": 5157, "Received": 4916, "Rejected": 2272, "Undergoing Analysis": 1309}
print(f"{'vulnStatus':20} {'Socket 28 Oct':>14} {'ours 18 Nov':>12}")
for k in SOCKET: print(f"{k:20} {SOCKET[k]:>14,} {st.get(k, 0):>12,} ({100*st.get(k,0)/n:.1f}%)")
for k in st:
    if k not in SOCKET: print(f"{k:20} {'-':>14} {st[k]:>12,}")
Q = ("Received", "Awaiting Analysis", "Undergoing Analysis")
# Socket's monthly table (as of 28 Oct): total, analyzed+modified, deferred, in queue, rejected
SM = {1: (5143, 2567, 1732, 3, 841), 2: (4808, 3046, 1568, 2, 192), 3: (6304, 4441, 1590, 203, 70), 4: (5885, 3952, 1610, 248, 75),
      5: (6985, 3865, 2639, 432, 49), 6: (8001, 4378, 3233, 331, 59), 7: (9919, 5326, 3745, 699, 149), 8: (12719, 4071, 5320, 2866, 462),
      9: (15074, 4708, 5772, 4453, 141), 10: (15354, 2697, 6208, 6215, 234)}
by = collections.defaultdict(list)
for c in V: by[int(c["published"][5:7])].append(c)
print(f"\n{'month':>5} {'total S/us':>14} {'deferred S/us':>15} {'queue 28 Oct -> 18 Nov':>24} {'cleared':>8} {'deferred share us':>18}")
qs = qu = 0
for m in range(1, 11):
    R = by[m]; c2 = collections.Counter(x.get("vulnStatus") for x in R)
    q = sum(c2[k] for k in Q); d = c2["Deferred"]; live = len(R) - c2["Rejected"]
    s = SM[m]; qs += s[3]; qu += q
    print(f"{m:>5} {s[0]:>6,}/{len(R):<7,} {s[2]:>6,}/{d:<8,} {s[3]:>10,} -> {q:<10,} {s[3]-q:>8,} {100*d/len(R):>17.1f}%")
print(f"queue, all months: {qs:,} on 28 Oct -> {qu:,} on 18 Nov ({qs-qu:,} cleared, {100*(qs-qu)/qs:.1f}%)")
live = [c for c in V if c.get("vulnStatus") != "Rejected"]
cpe = sum(bool(c.get("configurations")) for c in V)
print(f"\nwith NVD CPE configurations: {cpe:,} of {n:,} ({100*cpe/n:.1f}%)  [Socket: 43.5%]")
anyscore = sum(bool(c.get("metrics")) for c in V)
nvdscore = sum(any(m.get("source") == "nvd@nist.gov" for k in (c.get("metrics") or {}) for m in c["metrics"][k]) for c in V)
print(f"with any CVSS: {anyscore:,} ({100*anyscore/n:.1f}%)  [Socket 93.4%]; scored by NVD: {nvdscore:,} ({100*nvdscore/n:.1f}%)  [Socket 14,090, 15.6%]")
gh = [c for c in V if c.get("sourceIdentifier") == "security-advisories@github.com"]
ghd = sum(c.get("vulnStatus") == "Deferred" for c in gh)
print(f"GitHub CNA records: {len(gh):,}  [Socket 12,262]; Deferred {ghd:,} ({100*ghd/len(gh):.1f}%)  [Socket 4,640, 37.8%]")
K = {x["cveID"]: x for x in json.load(open("data/cisa_kev.json"))["vulnerabilities"]}
kev = [c for c in V if c["id"] in K]
kst = collections.Counter(c.get("vulnStatus") for c in kev)
print(f"KEV-listed CVEs among them (CISA catalog as of 18 Nov): {len(kev)}; status {dict(kst)}  [Socket: all 197 Analyzed]")
src = collections.Counter(c.get("sourceIdentifier") for c in live)
print("\nlargest submitting sources, Deferred share and still in queue on 18 Nov:")
for s, k in src.most_common(8):
    R = [c for c in live if c.get("sourceIdentifier") == s]
    print(f"  {s[:42]:42} {k:>6,}  deferred {100*sum(c['vulnStatus']=='Deferred' for c in R)/k:5.1f}%  queue {100*sum(c['vulnStatus'] in Q for c in R)/k:5.1f}%  analyzed {100*sum(c['vulnStatus'] in ('Analyzed','Modified') for c in R)/k:5.1f}%")
