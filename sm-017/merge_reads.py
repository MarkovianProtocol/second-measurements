"""Score each list by the earliest upload date we have seen for it, across reads.

python3 merge_reads.py NEW.json OLD.json OUT.json

A station can delete or replace a file after we read it; the folder then shows only the newer date, and a list we saw
on time would read as late. For every station read without error in NEW, this adds back each file OLD saw (same
name, folder and Date Uploaded) that NEW no longer shows, tagged "gone_by" with NEW's fetch time. Analysis then takes
the earliest date per quarter as usual. Stations, errors and population come from NEW only.
"""
import json, sys

new_f, old_f, out_f = sys.argv[1:4]
new, old = json.load(open(new_f)), json.load(open(old_f))
old_by = {s["callSign"]: s for s in old["stations"] if not s["error"]}
added = stations_touched = 0
for s in new["stations"]:
    o = old_by.get(s["callSign"])
    if s["error"] or not o: continue
    have = {(x["name"], x["path"], x["uploaded"]) for x in s["files"]}
    back = [dict(x, gone_by=new["fetched_at"]) for x in o["files"] if (x["name"], x["path"], x["uploaded"]) not in have]
    if back: s["files"] += back; added += len(back); stations_touched += 1
new["merged_from"] = {"new": new_f, "old": old_f, "old_fetched_at": old.get("fetched_at"), "old_fetched_first": old.get("fetched_first", old.get("fetched_at")),
                      "files_added_back": added, "stations_touched": stations_touched}
json.dump(new, open(out_f, "w"))
print(f"{out_f}: {added} files seen in {old_f} but gone by {new['fetched_at'][:10]}, at {stations_touched} stations")
