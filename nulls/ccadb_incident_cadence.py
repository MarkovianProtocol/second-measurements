#!/usr/bin/env python3
"""CCADB incident-report rules (ccadb.org/cas/incident-report): open reports MUST be updated on or before the
"Next update" date in the bug's Whiteboard; CA Owners MUST respond to comments and questions within 7 days.
Second path: every open bug in Bugzilla product "CA Program" tagged [ca-compliance]: whiteboard Next-update date,
assignee, every comment with author and time. A bug is 'past next update' if the date has passed and no CA-side
comment is dated on or after it; 'question unanswered >7 d' if the last comment is from a non-CA account and is
older than 7 days. CA-side = the assignee, or an author whose email domain matches the assignee's."""
import json, urllib.request, urllib.parse, datetime, re, sys, collections, time
UA = {"User-Agent": "second-measurements (markovianprotocol.com)"}
def get(u):
    return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
NOW = datetime.datetime.utcnow()
P = lambda s: datetime.datetime.strptime(s[:19], "%Y-%m-%dT%H:%M:%S")
q = urllib.parse.urlencode({"product": "CA Program", "status_whiteboard_type": "substring", "status_whiteboard": "ca-compliance",
    "bug_status": ["ASSIGNED", "UNCONFIRMED", "NEW", "REOPENED"], "include_fields": "id,summary,status,whiteboard,assigned_to,creation_time,last_change_time", "limit": 0}, doseq=True)
bugs = get("https://bugzilla.mozilla.org/rest/bug?" + q)["bugs"]
print(len(bugs), "open [ca-compliance] bugs", file=sys.stderr)
ROOT_PROGRAM = ("mozilla.com", "google.com", "chromium.org", "apple.com", "microsoft.com", "ccadb.org")
out = []
for i, b in enumerate(bugs):
    cs = None
    for attempt in range(3):
        try:
            j = get(f"https://bugzilla.mozilla.org/rest/bug/{b['id']}/comment")
            cs = j["bugs"][str(b["id"])]["comments"]; break
        except Exception as e:
            err = repr(e)[:80]; time.sleep(2 + 3 * attempt)
    if cs is None:
        out.append({"id": b["id"], "summary": b["summary"][:120], "error": err}); continue
    assignee = b["assigned_to"]; dom = assignee.split("@")[-1].lower()
    def ca_side(a): return a.lower() == assignee.lower() or a.lower().split("@")[-1] == dom
    m = re.search(r"next update[:\s]*(\d{4}-\d{2}-\d{2})", b.get("whiteboard", ""), re.I)
    nxt = m.group(1) if m else None
    last = cs[-1]; last_ca = max((P(c["creation_time"]) for c in cs if ca_side(c["creator"])), default=None)
    rec = {"id": b["id"], "summary": b["summary"][:120], "assignee": assignee, "whiteboard": b.get("whiteboard"), "created": b["creation_time"], "next_update": nxt,
           "comments": len(cs), "last_comment_by": last["creator"], "last_comment_at": last["creation_time"], "last_ca_comment_at": last_ca.strftime("%Y-%m-%dT%H:%M:%SZ") if last_ca else None}
    rec["past_next_update_days"] = (NOW - datetime.datetime.strptime(nxt, "%Y-%m-%d")).days if nxt and datetime.datetime.strptime(nxt, "%Y-%m-%d") < NOW and (last_ca is None or last_ca < datetime.datetime.strptime(nxt, "%Y-%m-%d")) else 0
    rec["unanswered_days"] = (NOW - P(last["creation_time"])).days if not ca_side(last["creator"]) else 0
    rec["ca_silent_days"] = (NOW - last_ca).days if last_ca else (NOW - P(b["creation_time"])).days
    out.append(rec); time.sleep(0.15)
    if i % 20 == 0: print(i, file=sys.stderr, flush=True)
json.dump(out, open("open_incidents.json", "w"), indent=1)
out=[r for r in out if "error" not in r] + [r for r in out if "error" in r]
print("errors:", sum(1 for r in out if "error" in r), file=sys.stderr)
out=[r for r in out if "error" not in r]
print("with a Next update date:", sum(1 for r in out if r["next_update"]), "| past it with no CA update:", sum(1 for r in out if r["past_next_update_days"] > 0), "| last comment from a non-CA account >7 d:", sum(1 for r in out if r["unanswered_days"] > 7), "| CA silent >30 d:", sum(1 for r in out if r["ca_silent_days"] > 30))
for r in sorted(out, key=lambda r: -max(r["past_next_update_days"], r["unanswered_days"]))[:15]:
    print(f"  {r['id']}  next {r['next_update']}  past {r['past_next_update_days']:3d} d  unanswered {r['unanswered_days']:3d} d  CA silent {r['ca_silent_days']:3d} d  {r['summary'][:70]}")
