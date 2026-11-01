"""analyze.py rows.jsonl summary.json -- tables for the npm unresolved-dependency recount."""
import json, sys, statistics as st, collections as C
from datetime import datetime
rows = [json.loads(l) for l in open(sys.argv[1])]
ts = lambda s: datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp()
un = [r for r in rows if r["unresolved"]]
def wait(r):  # minutes until every unresolved dependency had a satisfying version; None if one never did
    if any(u["first_ok"] is None for u in r["unresolved"]): return None
    return max(ts(u["first_ok"]) - ts(r["published"]) for u in r["unresolved"]) / 60
waits = [wait(r) for r in un]
ok = sorted(w for w in waits if w is not None)
q = lambda p: round(ok[min(len(ok) - 1, int(p * len(ok)))], 2) if ok else None
kinds = C.Counter(); whys = C.Counter()
for r in un:
    kinds["+".join(sorted({u["kind"] for u in r["unresolved"]}))] += 1
    for w in {u["why"] for u in r["unresolved"]}: whys[w] += 1
scope = lambda p: p.split("/")[0] if p.startswith("@") else p
pre = sum(1 for r in un if "-" in r["version"])
days = C.defaultdict(lambda: [0, 0])
for r in rows:
    days[r["published"][:10]][0] += 1; days[r["published"][:10]][1] += bool(r["unresolved"])
byday = {d: {"versions": n, "unresolved": u, "share": round(u / n, 4)} for d, (n, u) in sorted(days.items())}
out = {
  "versions": len(rows), "with_registry_deps": sum(1 for r in rows if r["deps"]), "unresolved": len(un),
  "share": round(len(un) / len(rows), 4),
  "unresolved_prerelease_versions": pre,
  "unresolved_only_via_dependencies": sum(1 for r in un if all(u["kind"] == "d" for u in r["unresolved"])),
  "by_kind": dict(kinds.most_common()), "by_reason": dict(whys.most_common()),
  "resolved_later": len(ok), "never_resolved": waits.count(None),
  "wait_minutes": {"median": q(.5), "p90": q(.9), "p96": q(.96), "p99": q(.99), "max": round(ok[-1], 1) if ok else None,
                   "le_5": sum(w <= 5 for w in ok), "le_60": sum(w <= 60 for w in ok)},
  "by_utc_day": byday,
  "top_scopes": C.Counter(scope(r["pkg"]) for r in un).most_common(15),
}
json.dump(out, open(sys.argv[2], "w"), indent=1); print(json.dumps(out, indent=1))
