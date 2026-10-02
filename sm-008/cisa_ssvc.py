# SM-008: does every CVE carry CISA's three SSVC answers (Exploitation, Automatable, Technical Impact), as BOD 26-04 says?
# 1) every CVE in the KEV catalog; 2) a random 400 of the CVEs published 2026-06-10..2026-09-30; 3) 15 random Linux-kernel-CNA
# CVEs per month. CVE records from CVE Services; CVE lists from the NVD API (no key: keep the 7 s pauses). Stdlib only.
import calendar, json, random, sys, time, urllib.request, urllib.error
def get(u):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "markovian-second-measurement"}), timeout=120))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(10 * (i + 1))
        except Exception: time.sleep(10 * (i + 1))
def ssvc(cve):
    r = get(f"https://cveawg.mitre.org/api/cve/{cve}"); time.sleep(0.25)
    if not r: return {"cve": cve, "ok": False}
    out = {"cve": cve, "ok": r["cveMetadata"].get("state") == "PUBLISHED", "assigner": r["cveMetadata"].get("assignerShortName"), "cisa": False, "answers": {}}
    for adp in r.get("containers", {}).get("adp", []):
        if "CISA" not in (adp.get("providerMetadata", {}).get("shortName") or ""): continue
        out["cisa"] = True
        for m in adp.get("metrics", []):
            if (m.get("other") or {}).get("type") == "ssvc":
                for o in m["other"]["content"].get("options", []): out["answers"].update(o)
    out["complete"] = all(k in out["answers"] for k in ("Exploitation", "Automatable", "Technical Impact"))
    return out
def nvd_ids(extra, a, b):
    ids, start = [], 0
    while True:
        d = get(f"https://services.nvd.nist.gov/rest/json/cves/2.0?{extra}pubStartDate={a}T00:00:00.000&pubEndDate={b}T23:59:59.999&resultsPerPage=2000&startIndex={start}")
        ids += [v["cve"]["id"] for v in d["vulnerabilities"]]; start += 2000; time.sleep(7)
        if start >= d["totalResults"]: return ids, d["totalResults"]
KERNEL = "sourceIdentifier=416baaa9-dc9f-4396-8d5f-8c081fb06d67&"
part = sys.argv[1] if len(sys.argv) > 1 else "all"
if part in ("kev", "all"):
    kev = [v["cveID"] for v in get("https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json")["vulnerabilities"]]
    rows = [ssvc(c) for c in kev]; ok = [r for r in rows if r["ok"]]
    print(f"KEV: {len(kev)} CVEs, {sum(r['complete'] for r in ok)} of {len(ok)} published records carry all three answers")
if part in ("recent", "all"):
    ids, n = nvd_ids("", "2026-06-10", "2026-09-30"); random.seed(20261002)
    rows = [r for r in (ssvc(c) for c in random.sample(ids, 400)) if r["ok"]]
    k = [r for r in rows if r["assigner"] == "Linux"]; o = [r for r in rows if r["assigner"] != "Linux"]
    print(f"Since 2026-06-10: {n} CVEs; sampled {len(rows)} published. Linux kernel: {sum(r['complete'] for r in k)} of {len(k)} complete. All others: {sum(r['complete'] for r in o)} of {len(o)}")
    kn = nvd_ids(KERNEL, "2026-06-10", "2026-09-30")[1]; print(f"Linux kernel CVEs published in that window: {kn}")
if part in ("months", "all"):
    random.seed(1)
    for y, m in [(2025, 3), (2025, 6), (2025, 9), (2025, 12), (2026, 1), (2026, 2), (2026, 3), (2026, 4), (2026, 5), (2026, 6), (2026, 7), (2026, 8), (2026, 9)]:
        ids, n = nvd_ids(KERNEL, f"{y}-{m:02d}-01", f"{y}-{m:02d}-{calendar.monthrange(y, m)[1]}")
        rows = [ssvc(c) for c in random.sample(ids, min(15, len(ids)))]
        print(f"{y}-{m:02d}: {n} kernel CVEs; {sum(r['complete'] for r in rows)} of {len(rows)} sampled carry CISA's answers")
