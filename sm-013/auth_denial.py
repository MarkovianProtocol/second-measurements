#!/usr/bin/env python3
"""For every federal domain the census found without a DS record, ask .gov's own authoritative servers
(not a resolver) for the DS and check that the negative answer is an authenticated denial: an NSEC
owned by the name whose type bitmap lacks DS, signed by the .gov zone key, which is itself chained
to the root trust anchor. Writes authoritative_denial.json. Kaveh Ranjbar's suggestion, 4 Oct 2026."""
import json, sys, time, datetime
import dns.message, dns.query, dns.dnssec, dns.name, dns.rdatatype, dns.rrset, dns.resolver

ROOT_ANCHORS = {  # IANA root-anchors.xml: KSK-2017 (20326) and KSK-2024 (38696)
    "20326": "E06D44B80B8F1D39A95C0B0D7C65D08458E880409BBC683457104237C7F8EC8D",
    "38696": "683D2D0ACB8C9B712A1948B27F741219298D0A450D612C483AF444A4C0FB2B16",
}
ROOT_SERVER = "198.41.0.4"       # a.root-servers.net
GOV_SERVER = dns.resolver.resolve("a.ns.gov", "A")[0].address

def q(name, rtype, server):
    m = dns.message.make_query(name, rtype, want_dnssec=True)
    m.flags &= ~dns.flags.RD
    for _ in range(3):
        try:
            return dns.query.udp_with_fallback(m, server, timeout=6)[0]
        except Exception:
            time.sleep(1)
    raise RuntimeError(f"no answer for {name} {rtype} from {server}")

def rrsets(msg, section, name, rtype):
    for rr in section:
        if rr.name == name and rr.rdtype == rtype:
            return rr
    return None

# 1. root DNSKEY, validated against the published trust anchor
root = dns.name.root
r = q(root, "DNSKEY", ROOT_SERVER)
root_keys = rrsets(r, r.answer, root, dns.rdatatype.DNSKEY); root_sigs = rrsets(r, r.answer, root, dns.rdatatype.RRSIG)
anchor_ok = False
for k in root_keys:
    if k.flags & 1:  # SEP bit
        ds = dns.dnssec.make_ds(root, k, "SHA256")
        if ROOT_ANCHORS.get(str(ds.key_tag)) == ds.digest.hex().upper():
            anchor_ok = True
assert anchor_ok, "root KSK does not match IANA trust anchors"
dns.dnssec.validate(root_keys, root_sigs, {root: root_keys})

# 2. DS for gov from the root, validated with the root keys
gov = dns.name.from_text("gov.")
r = q(gov, "DS", ROOT_SERVER)
gov_ds = rrsets(r, r.answer, gov, dns.rdatatype.DS); gov_ds_sigs = rrsets(r, r.answer, gov, dns.rdatatype.RRSIG)
dns.dnssec.validate(gov_ds, gov_ds_sigs, {root: root_keys})

# 3. gov DNSKEY from a.ns.gov, matched to the DS and self-validated
r = q(gov, "DNSKEY", GOV_SERVER)
gov_keys = rrsets(r, r.answer, gov, dns.rdatatype.DNSKEY); gov_key_sigs = rrsets(r, r.answer, gov, dns.rdatatype.RRSIG)
matched = any(dns.dnssec.make_ds(gov, k, d.digest_type) == d for k in gov_keys for d in gov_ds)
assert matched, "no gov DNSKEY matches the DS at the root"
dns.dnssec.validate(gov_keys, gov_key_sigs, {gov: gov_keys})
print("chain: root anchor -> root DNSKEY -> gov DS -> gov DNSKEY validated", file=sys.stderr)

# 4. each no-DS domain: authenticated denial from the .gov servers
domains = [json.loads(l) for l in open("census_rerun.jsonl")]
nods = [d["domain"] for d in domains if not d["ds"]]
out = {"checked_at": datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds"),
       "gov_server": "a.ns.gov " + GOV_SERVER, "root_server": "a.root-servers.net " + ROOT_SERVER,
       "n": len(nods), "results": {}}
counts = {}
for i, dom in enumerate(nods):
    name = dns.name.from_text(dom)
    try:
        r = q(name, "DS", GOV_SERVER)
        ds_now = rrsets(r, r.answer, name, dns.rdatatype.DS)
        if ds_now is not None:
            verdict = "DS_PRESENT_NOW"; detail = [str(x) for x in ds_now]
        else:
            nsec = rrsets(r, r.authority, name, dns.rdatatype.NSEC); sig = rrsets(r, r.authority, name, dns.rdatatype.RRSIG)
            if nsec is None:
                # NSEC may cover rather than own the name (name not delegated at all)
                cov = [rr for rr in r.authority if rr.rdtype == dns.rdatatype.NSEC]
                verdict = "NO_OWNED_NSEC"; detail = [str(c) for c in cov]
            else:
                dns.dnssec.validate(nsec, sig, {gov: gov_keys})
                types = nsec[0].windows
                has_ds = dns.rdatatype.DS in {t for w in nsec[0].windows for t in nsec[0].to_text().split()[2:]} if False else ("DS" in nsec[0].to_text().split())
                verdict = "AUTHENTICATED_DENIAL" if not has_ds else "NSEC_SAYS_DS"
                detail = [nsec[0].to_text(), f"RRSIG keytag {sig[0].key_tag} alg {sig[0].algorithm} exp {sig[0].expiration}"]
    except Exception as e:
        verdict = "ERROR"; detail = [repr(e)]
    out["results"][dom] = {"verdict": verdict, "detail": detail}
    counts[verdict] = counts.get(verdict, 0) + 1
    if i % 50 == 0: print(i, dom, verdict, file=sys.stderr)
out["counts"] = counts
json.dump(out, open("authoritative_denial.json", "w"), indent=1)
print(json.dumps(counts))
