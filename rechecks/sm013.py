# SM-013 recheck: federal .gov DNSSEC. CISA's current-federal.csv, then for every domain a DS lookup (8.8.8.8, then
# 1.1.1.1 before calling it unsigned) and a validated SOA query; counts per branch, bogus (SERVFAIL with checking on,
# answer with checking off) and the SHA-1-only signers. Needs dig. ~20 s on 20 threads.
import csv, io, json, os, sys, subprocess, urllib.request, datetime, concurrent.futures as cf, collections
R = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "second-measurements recheck (markovianprotocol.com)"}
raw = urllib.request.urlopen(urllib.request.Request("https://raw.githubusercontent.com/cisagov/dotgov-data/main/current-federal.csv", headers=UA), timeout=60).read().decode()
rows = list(csv.DictReader(io.StringIO(raw)))
def dig(args, server):
    try: return subprocess.run(["dig", "+time=3", "+tries=2", "@" + server] + args, capture_output=True, text=True, timeout=8).stdout
    except subprocess.TimeoutExpired: return ""
st = lambda o: (o.split("status: ")[1].split(",")[0] if "status: " in o else "NONE")
def one(r):
    dom = r["Domain name"].strip().lower()
    ds = dig(["DS", dom, "+short"], "8.8.8.8").strip() or dig(["DS", dom, "+short"], "1.1.1.1").strip()
    algs = {l.split()[1] for l in ds.splitlines() if len(l.split()) > 2}
    soa = dig(["SOA", dom, "+dnssec"], "8.8.8.8"); s = st(soa)
    bogus = False
    if s == "SERVFAIL":
        bogus = st(dig(["SOA", dom, "+cd"], "8.8.8.8")) == "NOERROR" or st(dig(["SOA", dom, "+cd"], "1.1.1.1")) == "NOERROR"
    return {"type": r.get("Domain type"), "ds": bool(ds), "sha1_only": bool(algs) and algs <= {"5", "7"}, "bogus": bogus}
with cf.ThreadPoolExecutor(20) as ex: res = list(ex.map(one, rows))
by = collections.defaultdict(lambda: [0, 0])
for x in res: by[x["type"]][0] += 1; by[x["type"]][1] += x["ds"]
ex_ = by.get("Federal - Executive", [0, 0])
row = {"date": datetime.date.today().isoformat(), "domains": len(rows), "signed": sum(x["ds"] for x in res), "exec_domains": ex_[0], "exec_signed": ex_[1],
       "exec_unsigned": ex_[0] - ex_[1], "judicial_signed": by.get("Federal - Judicial", [0, 0])[1], "bogus": sum(x["bogus"] for x in res), "sha1_only": sum(x["sha1_only"] for x in res)}
print(json.dumps(row)); open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "history", "sm-013.jsonl"), "a").write(json.dumps(row) + "\n")
