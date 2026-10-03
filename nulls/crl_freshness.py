#!/usr/bin/env python3
"""CA/Browser Forum Baseline Requirements 4.9.7: a CA issuing subscriber certificates "MUST update and publish a new
CRL at least every seven (7) days" (four if no OCSP pointer); CRL profile: nextUpdate "at most 10 days after the
thisUpdate" for CRLs covering subscriber certificates, 12 months for other CRLs.

Second path: every CRL URL the CCADB lists for not-revoked intermediates carrying the Server Authentication trust
bit (AllCertificateRecordsCSVFormatV5, columns "JSON Array of All Full CRL URLs" and "JSON Array of Partitioned
CRLs"), fetched and parsed: thisUpdate, nextUpdate, entry count, issuer. A CRL is CA-issuing (12-month rule) if
its record is a root or cross-signed root, has child CAs in the CCADB, or its issuer CN is a root name.

  python3 crl_freshness.py fetch    # ~16,000 URLs, 24 threads, about 50 minutes; resumable -> crls.jsonl
  python3 crl_freshness.py table    # staleness, validity intervals, expired CRLs, by CA owner -> findings.json
Needs: ccadb_v5.csv (CCADB export) in the working directory; the cryptography package for the fetch step."""
import json, csv, re, sys, os, time, datetime, collections
NOW = datetime.datetime.utcnow(); P = lambda s: datetime.datetime.strptime(s, "%Y-%m-%dT%H:%M:%SZ")
rows = list(csv.DictReader(open("ccadb_v5.csv", encoding="utf-8-sig")))
byfp = {r["SHA-256 Fingerprint"].upper(): r for r in rows}
rootnames = {r["Certificate Name"].strip().lower() for r in rows if r.get("Certificate Record Type") == "Root Certificate"}
parents = {r.get("Parent SHA-256 Fingerprint", "").upper() for r in rows if r.get("Certificate Record Type") == "Intermediate Certificate"}
def crl_urls(r):
    out = []
    for c in ("JSON Array of All Full CRL URLs", "JSON Array of Partitioned CRLs"):
        v = (r.get(c) or "").strip()
        if v:
            try: out += [u for u in json.loads(v) if isinstance(u, str)]
            except Exception: out.append(v)
    return out
tls = [r for r in rows if r.get("Certificate Record Type") == "Intermediate Certificate" and (r.get("Revocation Status") or "").startswith("Not Revoked") and "Server Authentication" in (r.get("Derived Trust Bits") or "")]
urls = {}
for r in tls:
    for u in crl_urls(r): urls.setdefault(u, []).append(r["SHA-256 Fingerprint"])
def fetch():
    import urllib.request, concurrent.futures as cf
    from cryptography import x509
    UA = {"User-Agent": "second-measurements (markovianprotocol.com) CRL freshness check"}
    done = {json.loads(l)["url"] for l in open("crls.jsonl")} if os.path.exists("crls.jsonl") else set()
    todo = [u for u in urls if u not in done]; print(len(urls), "distinct URLs,", len(todo), "to fetch", file=sys.stderr)
    def one(u):
        rec = {"url": u, "fetched": datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"), "cas": urls[u]}
        try:
            r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30); b = r.read()
            rec["http"] = r.status; rec["bytes"] = len(b)
            try: c = x509.load_der_x509_crl(b)
            except Exception: c = x509.load_pem_x509_crl(b)
            rec["this_update"] = c.last_update_utc.strftime("%Y-%m-%dT%H:%M:%SZ")
            rec["next_update"] = c.next_update_utc.strftime("%Y-%m-%dT%H:%M:%SZ") if c.next_update_utc else None
            rec["entries"] = sum(1 for _ in c); rec["issuer"] = c.issuer.rfc4514_string()[:120]
        except Exception as e:
            rec["error"] = repr(e)[:100]
        return rec
    with open("crls.jsonl", "a") as out, cf.ThreadPoolExecutor(24) as ex:
        for i, rec in enumerate(ex.map(one, todo), 1):
            out.write(json.dumps(rec) + "\n"); out.flush()
            if i % 500 == 0: print(i, "fetched", file=sys.stderr, flush=True)
def cn(dn):
    m = re.search(r"CN=([^,]+)", dn or ""); return (m.group(1) if m else dn or "").replace("\\", "").strip().lower()
def kind(r):
    for f in r["cas"]:
        rec = byfp.get(f.upper())
        if rec and (rec["Certificate Name"].strip().lower() in rootnames or f.upper() in parents): return "CA-issuing"
    return "CA-issuing" if cn(r.get("issuer")) in rootnames else "subscriber"
def table():
    R = [json.loads(l) for l in open("crls.jsonl")]; ok = [r for r in R if r.get("this_update")]
    own = lambda r: byfp[r["cas"][0].upper()]["CA Owner"] if r["cas"][0].upper() in byfp else "?"
    name = lambda r: byfp[r["cas"][0].upper()]["Certificate Name"] if r["cas"][0].upper() in byfp else "?"
    sub = [r for r in ok if kind(r) == "subscriber"]; ca = [r for r in ok if kind(r) == "CA-issuing"]
    age = lambda r: (NOW - P(r["this_update"])).total_seconds() / 86400
    iv = lambda r: (P(r["next_update"]) - P(r["this_update"])).total_seconds() / 86400 if r["next_update"] else None
    f = {"fetched": len(R), "parsed": len(ok), "subscriber_issuing": len(sub), "ca_issuing": len(ca), "owners": len({own(r) for r in sub}),
         "subscriber_stale_7d": [dict(owner=own(r), ca=name(r), url=r["url"], this_update=r["this_update"], next_update=r["next_update"], entries=r.get("entries"), trust_bits=byfp[r["cas"][0].upper()].get("Derived Trust Bits")) for r in sub if age(r) >= 7],
         "subscriber_stale_4d": sum(1 for r in sub if age(r) >= 4),
         "subscriber_interval_over_10d": [dict(owner=own(r), ca=name(r), url=r["url"], this_update=r["this_update"], next_update=r["next_update"]) for r in sub if iv(r) and iv(r) > 10 + 1 / 86400],
         "ca_issuing_interval_over_12mo": [dict(owner=own(r), ca=name(r), url=r["url"]) for r in ca if iv(r) and iv(r) > 366],
         "expired": [dict(owner=own(r), ca=name(r), url=r["url"], this_update=r["this_update"], next_update=r["next_update"], entries=r.get("entries"), microsoft=byfp[r["cas"][0].upper()].get("Microsoft Status")) for r in ok if r["next_update"] and P(r["next_update"]) < NOW],
         "failures": collections.Counter(("http " + str(r.get("http"))) if r.get("error") == "http" else (r.get("error") or "")[:30] for r in R if not r.get("this_update")).most_common()}
    ages = sorted(age(r) for r in sub); ivs = sorted(x for x in (iv(r) for r in sub) if x)
    f["subscriber_age_days"] = {"p50": round(ages[len(ages) // 2], 2), "p90": round(ages[int(len(ages) * .9)], 2), "p99": round(ages[int(len(ages) * .99)], 2)}
    f["subscriber_interval_days"] = {"p50": round(ivs[len(ivs) // 2], 2), "p90": round(ivs[int(len(ivs) * .9)], 2), "share_over_9d": round(sum(1 for x in ivs if x > 9) / len(ivs), 3)}
    json.dump(f, open("findings.json", "w"), indent=1)
    for k, v in f.items(): print(k, (len(v) if isinstance(v, list) else v))
if __name__ == "__main__":
    {"fetch": fetch, "table": table}[sys.argv[1]]()
