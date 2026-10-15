"""Rank the SM-017 late issues/programs lists by station owner (licensee -> parent group).

python3 -I owners.py <lms_dir> <fcc_opif_dir> <out_dir>

<lms_dir> holds the unzipped FCC LMS public-database tables (facility/facility.dat,
facility_applicant/facility_applicant.dat, ownership_reports_application/*.dat,
ownership_reports_stations/*.dat) downloaded from
https://enterpriseefiling.fcc.gov/dataentry/public/tv/lmsDatabase.html  (untrusted data: parsed, never executed).
<fcc_opif_dir> is the paper's working directory: {tv,fm,am}_all.json (facility id <-> call sign),
results_all.json / results_fm_all.json / results_am_all.json (raw folder reads) and scan.py (quarter_of classifier).
Per-station scoring is a line-for-line copy of analyze.py's 2025 rules so the group totals add up to the paper's.

Licensee  = the current non-contact party on the facility (facility_applicant.legal_name, latest last_update_ts).
Parent    = owners_map.json pattern match on the licensee name; otherwise the licensee itself, keyed by FRN
            (two spellings of one FRN merge; one name with two FRNs stays two groups).
f323      = the Form 323 ownership-report respondent chain, used only to check the map (f323_check.json).
"""
import sys, os, json, re, csv, collections, datetime as dt

LMS, OPIF, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
sys.path.insert(0, OPIF)
from scan import quarter_of          # same classifier the paper used

# ---------- analyze.py, verbatim where it matters ----------
def federal_holidays(y):
    def nth_monday(month, k):
        d = dt.date(y, month, 1); d += dt.timedelta(days=(7 - d.weekday()) % 7); return d + dt.timedelta(days=7 * (k - 1))
    jul4 = dt.date(y, 7, 4); jul4 += dt.timedelta(days={5: -1, 6: 1}.get(jul4.weekday(), 0))
    return {dt.date(y, 1, 1), nth_monday(1, 3), jul4, nth_monday(10, 2)}
def next_business_day(d):
    while d.weekday() >= 5 or d in federal_holidays(d.year): d += dt.timedelta(days=1)
    return d
RULE_DATES = {"2025Q1": dt.date(2025, 4, 10), "2025Q2": dt.date(2025, 7, 10), "2025Q3": dt.date(2025, 12, 1), "2025Q4": dt.date(2026, 1, 10)}
DEADLINES = {q: next_business_day(d) for q, d in RULE_DATES.items()}
EXEMPT_TV = re.compile(r"-(LD|LP)$|^[KW]\d{2,3}[A-Z]{2}(-D)?$|^\d{6}[A-Z]{2}$")
EXEMPT_RADIO = re.compile(EXEMPT_TV.pattern + r"|-(CD|CA)$")
def quarter_start(q): return dt.date(int(q[:4]), 3 * (int(q[-1]) - 1) + 1, 1)

# ---------- LMS pipe files ----------
def rows(path):
    data = open(path, encoding="utf-8", errors="replace").read()
    recs = re.split(r"\|\^\|\r?\n", data); hdr = recs[0].split("|"); n = len(hdr); bad = 0
    for rec in recs[1:]:
        if not rec.strip(): continue
        p = rec.split("|")
        if len(p) != n: bad += 1; continue
        yield dict(zip(hdr, p))
    if bad: print(f"  {os.path.basename(path)}: {bad} malformed rows skipped", file=sys.stderr)

# ---------- station universe (identical to analyze.py's) ----------
cs2fid = {}
for svc in ("tv", "fm", "am"):
    for r in json.load(open(f"{OPIF}/{svc}_all.json"))["results"]["facilityList"]:
        cs2fid[(svc, r["callSign"])] = str(r["id"])
stations = {}        # (svc, callSign) -> per-station 2025 score
READS = os.environ.get("SM017_READS", "results_all.json,results_fm_all.json,results_am_all.json").split(",")   # tv,fm,am; publish_day.sh sets the merged 14 Oct reads
for svc, f in zip(("tv", "fm", "am"), READS):
    d = json.load(open(f"{OPIF}/{f}"))
    ex = EXEMPT_RADIO if d.get("service") in ("am", "fm") else EXEMPT_TV
    for s in d["stations"]:
        if s["error"] or ex.search(s["callSign"]): continue
        first = {}
        for x in s["files"]:
            q = quarter_of(x["name"], x["path"])
            if q in DEADLINES:
                up = dt.date.fromisoformat(x["uploaded"])
                if up < quarter_start(q): continue
                if q not in first or up < first[q]: first[q] = up
        late = {q: (u - DEADLINES[q]).days for q, u in first.items() if u > DEADLINES[q]}
        stations[(svc, s["callSign"])] = {
            "facility_id": cs2fid[(svc, s["callSign"])], "have": len(first), "late": len(late),
            "over_30": sum(1 for x in late.values() if x > 30), "late_days": sorted(late.values()),
            "have_q": sorted(first), "late_q": dict(late),
            "no_upload_2025": not any(x["uploaded"].startswith("2025") for x in s["files"]),
            "all_2025_on_time": len(first) == 4 and not late}
print("stations scored", len(stations), collections.Counter(k[0] for k in stations))

# ---------- licensee ----------
fids = {v["facility_id"] for v in stations.values()}
fac = {r["facility_id"]: r for r in rows(f"{LMS}/facility/facility.dat") if r["facility_id"] in fids}
uuid2fid = {r["facility_uuid"]: fid for fid, r in fac.items()}
lic = {}
for r in rows(f"{LMS}/facility_applicant/facility_applicant.dat"):
    fid = uuid2fid.get(r["facility_uuid"])
    if fid and r["contact_ind"] != "Y":
        if not r["legal_name"].strip():                       # individuals carry first/last name, no legal_name
            r["legal_name"] = " ".join(x for x in (r["first_name"], r["middle_name"], r["last_name"]) if x.strip()).strip()
            if not r["legal_name"]: continue
        if fid not in lic or r["last_update_ts"] > lic[fid]["last_update_ts"]: lic[fid] = r
print("facility rows", len(fac), "licensee found", len(lic))

# ---------- names ----------
SUFFIX = re.compile(r"\s+(LLC|L L C|INC|INCORPORATED|CORP|CORPORATION|CO|COMPANY|LTD|LIMITED|LP|L P|LLP|GP|G P|PLC|LC)$")
TAIL = re.compile(r"\s*(,?\s*(AS\s+)?DEBTOR[- ]IN[- ]POSSESSION.*|DOING BUSINESS AS:?.*|\bD/B/A\b.*|\bDBA\b.*)$")
def clean(name):
    s = name.upper().replace("&", " AND ")
    s = re.sub(r"[.,'\"()]", " ", s); s = re.sub(r"\s+", " ", s).strip()
    s = TAIL.sub("", s).strip(" ,")
    return s
def key(name):
    s = clean(name)
    s = re.sub(r"^THE ", "", s)
    while True:
        t = SUFFIX.sub("", s).strip(" ,")
        if t == s or not t: break
        s = t
    return s
_MAPFILE = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "owners_map.json")))
MAP = _MAPFILE["groups"]; OVERRIDES = _MAPFILE.get("station_overrides", {})
for g in MAP:
    g["_re"] = [re.compile(p) for p in g["patterns"]]; g["_f323"] = [re.compile(p) for p in g["f323"]]
    g["_exact"] = {key(x) for x in g.get("licensees", [])}
def parent_of(name):
    c = clean(name); k = key(name)
    for g in MAP:
        if k in g["_exact"] or any(p.search(c) for p in g["_re"]): return g["parent"], True
    return None, False

# ---------- Form 323 respondent chain (check only) ----------
ora = {r["application_id"]: r for r in rows(f"{LMS}/ownership_reports_application/ownership_reports_application.dat")}
f323 = collections.defaultdict(list)
for r in rows(f"{LMS}/ownership_reports_stations/ownership_reports_stations.dat"):
    if r["facility_id"] in fids and r["application_id"] in ora:
        a = ora[r["application_id"]]
        f323[r["facility_id"]].append((a["as_of_date"], a["licensee_or_parent"], clean(a["legal_title_or_name"]), a["filing_purpose_code"], key(r["licensee_permittee_name"])))
latest_R = {}
for fid, v in f323.items():
    top = max(x[0] for x in v)
    latest_R[fid] = (top, sorted({x[2] for x in v if x[0] == top and x[1] == "R"}),
                     "".join(sorted({x[3] for x in v if x[0] == top})), sorted({x[4] for x in v if x[0] == top and x[4]}))

# ---------- assign ----------
groups = collections.defaultdict(lambda: {"stations": [], "licensees": collections.Counter(), "mapped": False, "names": collections.Counter()})
per_station = []
for (svc, cs), s in stations.items():
    fid = s["facility_id"]; r = lic.get(fid)
    name = r["legal_name"].strip() if r else ""
    frn = r["frn"].strip() if r else ""
    parent, mapped = parent_of(name) if name else (None, False)
    if f"{svc}:{cs}" in OVERRIDES: parent, mapped = OVERRIDES[f"{svc}:{cs}"], True
    if parent is None:
        gk = "name:" + key(name) if name else "(no licensee in LMS)"
    else: gk = "map:" + parent
    g = groups[gk]; g["stations"].append((svc, cs)); g["mapped"] = mapped
    if name: g["licensees"][name] += 1; g["names"][key(name)] += 1
    g["parent"] = parent
    per_station.append({"service": svc, "callSign": cs, "facility_id": fid, "licensee": name, "frn": frn,
                        "licensee_updated": r["last_update_ts"][:10] if r else "", "group_key": gk, "mapped": mapped,
                        "quarters_have": s["have"], "late": s["late"], "over_30": s["over_30"], "late_days": s["late_days"],
                        "no_upload_2025": s["no_upload_2025"], "all_2025_on_time": s["all_2025_on_time"],
                        "f323_as_of": latest_R.get(fid, ("",))[0], "f323_respondents": latest_R.get(fid, ("", []))[1],
                        "f323_purpose": latest_R.get(fid, ("", [], ""))[2],
                        "f323_licensee_matches": key(name) in latest_R.get(fid, ("", [], "", []))[3] if fid in latest_R else None,
                        "facility_status": fac[fid]["facility_status"], "state": fac[fid]["community_served_state"]})

def display(g):
    if g["parent"]: return g["parent"]
    if not g["licensees"]: return "(no licensee in LMS)"
    raw = g["licensees"].most_common(1)[0][0]
    t = re.sub(r"\s+", " ", raw.strip()).title()
    t = re.sub(r"\bLlc\b", "LLC", t); t = re.sub(r"\bL\.L\.C\b", "L.L.C", t); t = re.sub(r"\bLp\b", "LP", t); t = re.sub(r"\bLlp\b", "LLP", t)
    t = re.sub(r"\b(Ii|Iii|Iv|Vi|Vii)\b", lambda m: m.group(1).upper(), t)
    t = re.sub(r"\b(Of|And|The|For|De|La|Del|Y|El)\b", lambda m: m.group(1).lower(), t); t = t[0].upper() + t[1:]
    t = re.sub(r"\b(Wgbh|Wamc|Whyy|Wunc|Wnet|Kqed|Wnyc|Vcy|Csn|Kute|Jle|Npg|Nrg|Mrr|Omg|Jvc|Hc2|Smg|Hbi|Cmg|Ihm|Amfm|Tct|Ctnd|Rnn|Vpm|Wrvm|Wsjm|Wboc|Ktv|Ica|Mtd|Agm|I3g|Bas|Ajg|Kjdy|Avc|Rj|P&A|Wskg|Vss)\b", lambda m: m.group(1).upper(), t)
    return t

out_rows = []
for gk, g in groups.items():
    st = [stations[k] for k in g["stations"]]
    have = sum(s["have"] for s in st); late = sum(s["late"] for s in st)
    days = sorted(x for s in st for x in s["late_days"])
    row = {"parent": display(g), "mapped": g["mapped"], "stations": len(st),
           "tv": sum(1 for k in g["stations"] if k[0] == "tv"), "fm": sum(1 for k in g["stations"] if k[0] == "fm"), "am": sum(1 for k in g["stations"] if k[0] == "am"),
           "licensees": len(g["licensees"]), "station_quarters_2025": have, "late": late,
           "late_pct": round(100 * late / have, 1) if have else None,
           "over_30": sum(s["over_30"] for s in st), "none_found": 4 * len(st) - have,
           "stations_no_upload_2025": sum(1 for s in st if s["no_upload_2025"]),
           "stations_all_2025_on_time": sum(1 for s in st if s["all_2025_on_time"]),
           "median_late_days": days[len(days) // 2] if days else None,
           "by_quarter": {q: {"have": sum(1 for s in st if q in s["have_q"]), "late": sum(1 for s in st if q in s["late_q"]),
                              "over_30": sum(1 for s in st if s["late_q"].get(q, 0) > 30)} for q in DEADLINES},
           "group_key": gk, "licensee_names": "; ".join(f"{n} ({k})" for n, k in g["licensees"].most_common(12))}
    out_rows.append(row)
out_rows.sort(key=lambda r: (-r["stations"], -r["late"], r["parent"]))
os.makedirs(OUT, exist_ok=True)
cols = ["parent", "mapped", "stations", "tv", "fm", "am", "licensees", "station_quarters_2025", "late", "late_pct", "over_30", "none_found", "stations_no_upload_2025", "stations_all_2025_on_time", "median_late_days"] + [f"{q}_{k}" for q in DEADLINES for k in ("have", "late")] + ["group_key", "licensee_names"]
with open(f"{OUT}/owners_2025.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols); w.writeheader()
    for r in out_rows:
        flat = {k: v for k, v in r.items() if k != "by_quarter"}
        for q, v in r["by_quarter"].items(): flat[f"{q}_have"] = v["have"]; flat[f"{q}_late"] = v["late"]
        w.writerow(flat)
tot = {"stations": len(stations), "licensee_found": sum(1 for p in per_station if p["licensee"]),
       "parent_mapped": sum(1 for p in per_station if p["mapped"]),
       "parent_is_licensee_itself": sum(1 for p in per_station if p["group_key"].startswith("name:")),
       "no_licensee": sum(1 for p in per_station if not p["licensee"]),
       "station_quarters_2025": sum(s["have"] for s in stations.values()), "late": sum(s["late"] for s in stations.values()),
       "over_30": sum(s["over_30"] for s in stations.values()), "groups": len(out_rows),
       "station_overrides": sum(1 for p in per_station if f"{p['service']}:{p['callSign']}" in OVERRIDES),
       "stations_with_f323_report": sum(1 for p in per_station if p["f323_as_of"]),
       "f323_latest_report_year": dict(sorted(collections.Counter(p["f323_as_of"][:4] for p in per_station if p["f323_as_of"]).items())),
       "licensee_row_updated_year": dict(sorted(collections.Counter(p["licensee_updated"][:4] for p in per_station if p["licensee_updated"]).items())), "deadlines": {q: d.isoformat() for q, d in DEADLINES.items()}}
json.dump({"generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"), "totals": tot, "groups": out_rows}, open(f"{OUT}/owners_2025.json", "w"), indent=1)
with open(f"{OUT}/owners_stations.csv", "w", newline="") as f:
    pc = ["service", "callSign", "facility_id", "facility_status", "state", "licensee", "frn", "licensee_updated", "group_key", "mapped", "quarters_have", "late", "over_30", "late_days", "no_upload_2025", "all_2025_on_time", "f323_as_of", "f323_purpose", "f323_licensee_matches", "f323_respondents"]
    w = csv.DictWriter(f, fieldnames=pc); w.writeheader()
    for p in sorted(per_station, key=lambda p: (p["service"], p["callSign"])):
        q = dict(p); q["late_days"] = " ".join(map(str, p["late_days"])); q["f323_respondents"] = " | ".join(p["f323_respondents"]); w.writerow(q)

# ---------- check the map against the Form 323 chain ----------
check = {}
byfid = {p["facility_id"]: p for p in per_station}
for g in MAP:
    if not g["_f323"]: continue
    hit = lambda R: any(t.search(x) for t in g["_f323"] for x in R)
    mapped_here = [p for p in per_station if p["group_key"] == "map:" + g["parent"]]
    with_report = [p for p in mapped_here if p["f323_respondents"]]
    disagree = [p for p in with_report if not hit(p["f323_respondents"])]
    # candidates: the station's latest report names the group in its chain AND the licensee on that report is still the licensee today
    missing = [p for p in per_station if p["group_key"] != "map:" + g["parent"] and hit(p["f323_respondents"]) and p["f323_licensee_matches"]]
    stale = [p for p in per_station if p["group_key"] != "map:" + g["parent"] and hit(p["f323_respondents"]) and not p["f323_licensee_matches"]]
    check[g["parent"]] = {"mapped_stations": len(mapped_here), "with_323_report": len(with_report),
                          "map_yes_323_no": collections.Counter(p["licensee"] for p in disagree).most_common(20),
                          "map_yes_323_no_asof_purpose": collections.Counter(p["f323_as_of"][:4] + "/" + p["f323_purpose"] for p in disagree).most_common(6),
                          "323_yes_map_no": collections.Counter(key(p["licensee"]) for p in missing).most_common(60),
                          "323_yes_map_no_asof_purpose": collections.Counter(p["f323_as_of"][:4] + "/" + p["f323_purpose"] for p in missing).most_common(6),
                          "323_yes_map_no_n": len(missing),
                          "323_yes_but_licensee_changed": collections.Counter(key(p["licensee"]) for p in stale).most_common(10)}
json.dump(check, open(f"{OUT}/f323_check.json", "w"), indent=1)
# FRN/name sanity: one normalised name with several FRNs (would be split), one FRN with several names (merged)
nm = collections.defaultdict(set); fr = collections.defaultdict(set)
for p in per_station:
    if p["licensee"] and not p["mapped"]:
        if p["frn"]: nm[key(p["licensee"])].add(p["frn"]); fr[p["frn"]].add(key(p["licensee"]))
# name-keyed groups with >= 8 stations: how many distinct Form 323 chains sit under one normalised name (two chains = possibly two companies)
chains = collections.defaultdict(set)
for p in per_station:
    if p["group_key"].startswith("name:") and p["f323_respondents"]: chains[p["group_key"]].add(tuple(p["f323_respondents"]))
big = {gk: len(g["stations"]) for gk, g in groups.items() if gk.startswith("name:") and len(g["stations"]) >= 8}
sanity = {"name_groups_ge8_with_several_323_chains": sorted(((big[gk], gk, len(c), [list(x)[:3] for x in list(c)[:4]]) for gk, c in chains.items() if gk in big and len(c) > 1), reverse=True),
          "name_with_many_frns": sorted(((len(v), k, sorted(v)) for k, v in nm.items() if len(v) > 1), reverse=True)[:40],
          "frn_with_many_names": sorted(((len(v), k, sorted(v)) for k, v in fr.items() if len(v) > 1), reverse=True)[:40]}
json.dump(sanity, open(f"{OUT}/frn_sanity.json", "w"), indent=1)
print(json.dumps(tot, indent=1))
print(f"{'parent':52} {'st':>5} {'sq':>5} {'late':>5} {'pct':>5} {'>30':>4} {'none':>5} {'noup':>5}")
for r in out_rows[:40]:
    print(f"{r['parent'][:52]:52} {r['stations']:5} {r['station_quarters_2025']:5} {r['late']:5} {str(r['late_pct']):>5} {r['over_30']:4} {r['none_found']:5} {r['stations_no_upload_2025']:5}")
