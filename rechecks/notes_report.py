#!/usr/bin/env python3
"""Who followed the links in our notes. Every link in a note carries ?r=<tag>; the site's visitor log keeps the path with
its query string, the client IP, user agent and referrer. This prints, per tag: hits, distinct IPs, first and last hit,
each IP's network owner and country (ipinfo.io, looked up once and cached), the pages they opened, and the device.
Runs on Neo: ~/neo_env/bin/python3 notes_report.py [--days N] [--tag zdi]"""
import argparse, json, os, re, collections, urllib.request, psycopg2
DB = "postgresql://signal:mkv_5c39cc2cb2c3f3b304ee146a0c7db13c@127.0.0.1:5432/signal"
CACHE = os.path.expanduser("~/.ipinfo_cache.json")
ap = argparse.ArgumentParser(); ap.add_argument("--days", type=int, default=30); ap.add_argument("--tag", default=None); a = ap.parse_args()
cache = json.load(open(CACHE)) if os.path.exists(CACHE) else {}
def who(ip):
    if ip not in cache:
        try: d = json.load(urllib.request.urlopen(urllib.request.Request(f"https://ipinfo.io/{ip}/json", headers={"User-Agent": "Mozilla/5.0"}), timeout=10)); cache[ip] = {k: d.get(k) for k in ("org", "country", "city", "hostname")}
        except Exception as e: cache[ip] = {"org": f"lookup failed: {e}"[:60]}
        json.dump(cache, open(CACHE, "w"))
    return cache[ip]
def device(ua):
    ua = ua or ""
    for k in ("iPhone", "Android", "Macintosh", "Windows", "Linux", "curl", "python"):
        if k.lower() in ua.lower(): return k
    return "other"
c = psycopg2.connect(DB); cur = c.cursor()
cur.execute("select ts, path, referrer, host(cf_ip), user_agent, coalesce(is_datacenter,false) from visitor_log where path like %s and ts > now() - interval '%s days' and not coalesce(is_internal,false) order by ts",
            ("%?r=%" if not a.tag else f"%?r={a.tag}%", a.days))
rows = cur.fetchall()
by = collections.defaultdict(list)
for ts, path, ref, ip, ua, dc in rows:
    m = re.search(r"[?&]r=([A-Za-z0-9_-]+)", path); by[m.group(1) if m else "?"].append((ts, path.split("?")[0], ref, ip, ua, dc))
if not rows: print(f"no tagged hits in {a.days} days"); raise SystemExit
for tag, hs in sorted(by.items(), key=lambda kv: kv[1][0][0]):
    ips = collections.OrderedDict()
    for ts, p, ref, ip, ua, dc in hs: ips.setdefault(ip, []).append((ts, p, ua, dc))
    scan = sum(1 for hh in ips.values() if hh[0][3]); print(f"\n== {tag}: {len(hs)} hits, {len(ips)} IPs ({scan} from datacenters, which within minutes of delivery means the recipient's mail security scanning the links, not a person), first {hs[0][0]:%Y-%m-%d %H:%M}Z, last {hs[-1][0]:%Y-%m-%d %H:%M}Z")
    for ip, hh in ips.items():
        w = who(ip); pages = collections.Counter(p for _, p, _, _ in hh)
        print(f"  {'SCANNER ' if hh[0][3] else 'person? '}{ip}  {w.get('org','?')}  {w.get('country','?')} {w.get('city','') or ''}  {device(hh[0][2])}  first {hh[0][0]:%m-%d %H:%M}Z  " + ", ".join(f"{p.rsplit('/',1)[-1] or 'index'}×{n}" if n > 1 else (p.rsplit('/',1)[-1] or 'index') for p, n in pages.items()))
# second-order: untagged visits to the paper in the same window that came in with a referrer from the CNA's own mail or site
cur.execute("select ts, path, referrer, host(cf_ip) from visitor_log where path like '/measurements/sm-018%%' and coalesce(referrer,'') <> '' and referrer !~* 'markovianprotocol' and ts > now() - interval '%s days' and not coalesce(is_internal,false) order by ts", (a.days,))
r2 = cur.fetchall()
if r2:
    print("\n== sm-018 visits with an outside referrer")
    for ts, p, ref, ip in r2: print(f"  {ts:%m-%d %H:%M}Z  {ref[:60]}  {ip}  {who(ip).get('org','?')}")
