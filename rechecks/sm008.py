# SM-008 recheck: 30 random Linux kernel CVEs published in the last 7 days, and 30 from all other sources: how many carry
# CISA's three SSVC answers (BOD 26-04 says CISA publishes them "for every CVE ID")? CVE lists from the NVD API.
import datetime, json, os, random, sys, time, urllib.request, urllib.error
R = os.path.dirname(os.path.abspath(__file__))
def get(u):
    for i in range(6):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "markovian-recheck"}), timeout=120))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(10 * (i + 1))
        except Exception: time.sleep(10 * (i + 1))
def complete(cve):
    r = get(f"https://cveawg.mitre.org/api/cve/{cve}"); time.sleep(0.25)
    if not r or r["cveMetadata"].get("state") != "PUBLISHED": return None
    a = {}
    for adp in r.get("containers", {}).get("adp", []):
        if "CISA" in (adp.get("providerMetadata", {}).get("shortName") or ""):
            for m in adp.get("metrics", []):
                if (m.get("other") or {}).get("type") == "ssvc":
                    for o in m["other"]["content"].get("options", []): a.update(o)
    return all(k in a for k in ("Exploitation", "Automatable", "Technical Impact"))
end = datetime.date.today() - datetime.timedelta(days=2); start = end - datetime.timedelta(days=7)
def ids(extra):
    d = get(f"https://services.nvd.nist.gov/rest/json/cves/2.0?{extra}pubStartDate={start}T00:00:00.000&pubEndDate={end}T23:59:59.999&resultsPerPage=2000")
    time.sleep(7); return [v["cve"]["id"] for v in d["vulnerabilities"]], d["totalResults"]
K = "sourceIdentifier=416baaa9-dc9f-4396-8d5f-8c081fb06d67&"
kid, kn = ids(K); aid, an = ids("")
other = [c for c in aid if c not in set(kid)]
random.seed(int(time.time()) // 86400)
ks = [x for x in (complete(c) for c in random.sample(kid, min(30, len(kid)))) if x is not None]
os_ = [x for x in (complete(c) for c in random.sample(other, min(30, len(other)))) if x is not None]
row = {"date": time.strftime("%Y-%m-%d"), "window": f"{start}..{end}", "kernel_published": kn, "kernel_sampled": len(ks),
       "kernel_with_answers": sum(ks), "other_sampled": len(os_), "other_with_answers": sum(os_)}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-008.jsonl"), "a").write(json.dumps(row) + "\n")
