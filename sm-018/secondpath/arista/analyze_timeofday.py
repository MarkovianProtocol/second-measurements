#!/usr/bin/env python3
"""Is the time-of-day in datePublic a disclosure time or a submission-clock artifact?
Usage: python3 -I analyze_timeofday.py <arista_datepublic_check.json>
For rows whose datePublic has a non-midnight time: minutes between datePublic's
time-of-day and datePublished's time-of-day (mod 24h), and the lag in whole days.
"""
import datetime as dt, json, statistics, sys
d = json.load(open(sys.argv[1]))["results"]
def ts(s): return dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
rows = []
for x in d:
    if not x["datePublic"] or not x["datePublished"]:
        continue
    p, q = ts(x["datePublic"]), ts(x["datePublished"])
    lag = (q - p).total_seconds() / 86400
    frac_min = (lag - round(lag)) * 1440
    midnight = p.time() == dt.time(0, 0)
    rows.append((x["id"], x["datePublic"], x["datePublished"], midnight, round(lag, 4), round(frac_min, 1)))
mid = [r for r in rows if r[3]]
tod = [r for r in rows if not r[3]]
print(f"rows={len(rows)} midnight-datePublic={len(mid)} time-of-day-datePublic={len(tod)}")
print("\nrows with a time-of-day in datePublic: id, datePublic, datePublished, lag_d, minutes off a whole day")
for r in tod: print(" ", r[0], r[1], r[2], r[4], r[5])
if tod:
    offs = [r[5] for r in tod]
    print(f"\nminutes-off-whole-day: min={min(offs)} max={max(offs)} median={statistics.median(offs)}")
    print("published time-of-day minus datePublic time-of-day, minutes (positive = form clock ran a few minutes before submit):")
    print(" ", sorted(round((ts(r[2]).hour*60+ts(r[2]).minute+ts(r[2]).second/60) - (ts(r[1]).hour*60+ts(r[1]).minute), 1) for r in tod))
print("\nmidnight rows: id, datePublic, datePublished, lag_d")
for r in mid: print(" ", r[0], r[1], r[2], r[4])
