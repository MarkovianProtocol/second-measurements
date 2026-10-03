# After a recheck: move the "Held, by this much" cells on the served track record from the newest history rows.
# Apple closed-but-usable shards (sm-015), Chrome shards over 366 days (sm-015), registro.br manifests expired in the
# last 7 days (sm-014). The Mac copy of track-record.html carries the same ids with the values as of publication.
import json, os, re, sys
R = os.path.dirname(os.path.abspath(__file__)); SITE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(R, "out")
p = os.path.join(SITE, "track-record.html")
if not os.path.exists(p):
    sys.exit(0)
s = open(p).read()

def last(n):
    f = os.path.join(R, "history", f"{n}.jsonl")
    rows = [json.loads(l) for l in open(f)] if os.path.exists(f) else []
    return rows[-1] if rows else None

def put(id_, text, width):
    global s
    s = re.sub(r'(<span id="%s">)(.*?)(</span>)' % id_, lambda m: m.group(1) + text + m.group(3), s, count=1, flags=re.S)
    bar = id_.replace("-measured", "-bar")
    s = re.sub(r'(<div id="%s" style="[^"]*?width:)(\d+)(px")' % bar, lambda m: m.group(1) + str(width) + m.group(3), s, count=1)

r15 = last("sm-015")
if r15:
    c = r15["apple_usable_closed"]; lm = (r15.get("apple_last_modified") or "")[:16]
    put("edge-apple-measured", "%d usable shards with closed windows on Apple&rsquo;s list as of %s (list last modified %s)" % (c, r15["date"], lm), 100 if c else 20)
    o = r15["chrome_over_366d"]; n = r15["chrome_logs"]
    put("edge-shards-measured", "%d of %d shards within a year on %s; %d over" % (n - o, n, r15["date"], o), 110 if o else 30)
r14 = last("sm-014")
if r14 and "registro_br_expired_7d" in r14:
    e = r14["registro_br_expired_7d"]
    put("edge-rpki-measured", "registro.br on %s: %d manifests past nextUpdate within the last seven days (%d in all, most abandoned years ago); RIPE hosted %d, ARIN hosted %d" % (r14["date"], e, r14["registro_br_expired"], r14.get("ripe_paas_expired_7d", 0), r14.get("arin_rps_expired_7d", 0)), 110 if e else 25)
open(p, "w").write(s)
print("edges updated")
