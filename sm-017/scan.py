"""Issues/Programs lists in the FCC public file: when were they uploaded vs the 10th-of-the-month deadline?

47 CFR 73.3526(e)(11)(i) and 73.3527(e)(8): a list of programs that treated community issues
for each quarter must be placed in the public file by the tenth day of the succeeding quarter.
Second path: publicfiles.fcc.gov shows the upload date of every file. We read it for a random
sample of full-power TV stations and compare with the deadline.

python3 scan.py [N] [seed] [out.json]   -> N=0 means every full-power station
"""
import os, json, random, re, sys, time, html, concurrent.futures as cf, urllib.request, urllib.parse, datetime as dt

UA = {"User-Agent": "Mozilla/5.0 (second-measurements; hello@markovianprotocol.com)"}
BASE = "https://publicfiles.fcc.gov"
# tv (default) | fm | am. Same folder layout and upload dates; only the profile path, the
# facility list and the full-power filter differ. 73.3526(e)(11) TV, (e)(12) radio, 73.3527(e)(8) NCE.
SERVICE = os.environ.get("FCC_SERVICE", "tv")
DEADLINES = {"2025Q1": "2025-04-10", "2025Q2": "2025-07-10", "2025Q3": "2025-12-01", "2025Q4": "2026-01-10"}

def get(url, tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:
            err = e; time.sleep(2 + 3 * i)
    raise err

LINK = re.compile(r'<a class="nav2folder" href="([^"]+)" data-id="([^"]+)" data-path="([^"]+)"')
ROW = re.compile(r'<tr[^>]*>(.*?)</tr>', re.S)

def folder_files(url, depth=0):
    """Return (files, subfolder links). files = [(name, uploaded)]"""
    h = get(BASE + url)
    subs = [(m.group(1), m.group(3)) for m in LINK.finditer(h)]
    files = []
    for m in ROW.finditer(h):
        r = re.sub(r"<[^>]+>", "|", m.group(1)); r = re.sub(r"\s*\|+\s*", "|", html.unescape(r)).strip("|")
        d = re.search(r"(\d\d/\d\d/\d{4}) (\d{1,2}:\d\d [AP]M)$", r)
        if d and "Name" not in r[:5]:
            files.append((r.split("|")[0].strip(), d.group(1), d.group(2)))
    return files, subs

MONTHS = {m: i + 1 for i, m in enumerate("jan feb mar apr may jun jul aug sep oct nov dec".split())}
ROMAN = {"i": 1, "ii": 2, "iii": 3, "iv": 4}
SEASONS = {"winter": 1, "spring": 2, "summer": 3, "fall": 4, "autumn": 4}

def quarter_of(name, path):
    """Which quarter a file is for, read from its folder path and file name. None if we can't tell.
    Stations name these every way imaginable: '2025 Q3', '3QTR25', 'Qrt. 3', 'Report III - 2025',
    'July 2025', '2025-09-30', '20253Q', 'TV2025Q1'. Folder path first, then the name."""
    t = (path + " / " + name).lower()
    t = re.sub(r"[_\-./(),:;#&\[\]'’]", " ", t)
    t = re.sub(r"\b(first|second|third|fourth)\b", lambda m: str("first second third fourth".split().index(m.group(1)) + 1), t)
    t = re.sub(r"(?<=[a-z])(?=\d)", " ", t)                                  # ktbc1stqtr -> ktbc 1stqtr
    t = re.sub(r"(?<!\d)([1-4])(st|nd|rd|th)(?=[a-z]|\s|$)", r"ord \1 ", t)   # 1st -> ord 1, 2ndqtr -> ord 2 qtr
    t = re.sub(r"(?<=[a-z])(?=\d)|(?<=\d)(?=[a-z])", " ", t)                 # split letters from digits
    t = re.sub(r"\bq ([1-4]) (20[12]\d)\b|q ?([1-4])(20[12]\d)\b", lambda m: f" q {m.group(1) or m.group(3)} {m.group(2) or m.group(4)}", t)   # Q12025, PublicIssuesQ22026
    toks = t.split()
    QW = {"q", "qtr", "qrt", "quarter", "qip", "qp", "qt", "qptr", "qipr"}
    year = q = None
    # 20253 (year glued to quarter digit) -> 2025 3
    toks2 = []
    for i, x in enumerate(toks):
        m = re.fullmatch(r"(20[12]\d)([1-4])", x)
        if m: toks2 += [m.group(1), m.group(2)]; continue
        m = re.fullmatch(r"([1-4])(1\d|2[0-6])", x)                      # q226 -> q 2 26
        if m and i and toks[i - 1] in QW: toks2 += [m.group(1), m.group(2)]; continue
        m = re.fullmatch(r"(2[0-6])(0[1-9]|1[0-2])([0-3]\d)", x)         # 250331 -> 2025 03 31
        if m: toks2 += ["20" + m.group(1), m.group(2), m.group(3)]; continue
        toks2.append(x)
    toks = toks2
    for x in toks:
        if re.fullmatch(r"20(1\d|2[0-6])", x): year = x
    for i, x in enumerate(toks):
        nb = toks[i - 1] if i else ""; na = toks[i + 1] if i + 1 < len(toks) else ""
        if x == "ord" and re.fullmatch(r"[1-4]", na):
            # a bare ordinal: "2025_1st", "- 3rd 2025", "ord 1 qtr"
            q = int(na); yy = toks[i + 2] if i + 2 < len(toks) else ""
            if not year and re.fullmatch(r"(1\d|2[0-6])", yy): year = "20" + yy
            break
        if x in QW or x == "report":
            if x != "report" and re.fullmatch(r"0?[1-4]", na): q = int(na); yy = toks[i + 2] if i + 2 < len(toks) else ""
            elif x != "report" and re.fullmatch(r"[1-4]", nb): q = int(nb); yy = na
            elif na in ("i", "ii", "iii", "iv"): q = ROMAN[na]; yy = toks[i + 2] if i + 2 < len(toks) else ""
            else: continue
            if not year and re.fullmatch(r"(1\d|2[0-6])", yy): year = "20" + yy
            if not year and re.fullmatch(r"(1\d|2[0-6])", nb): year = "20" + nb      # "25 Q1"
            break
    if q is None and any(x in QW or x.startswith("quarterly") for x in toks):
        for i, x in enumerate(toks):   # "QIPR2026-1", "WSBS-TV1.2026": a bare 1-4 next to the year, in a name that says quarterly
            if re.fullmatch(r"20[12]\d", x):
                nb = toks[i - 1] if i else ""; na = toks[i + 1] if i + 1 < len(toks) else ""
                if re.fullmatch(r"[1-4]", na): q = int(na); break
                if re.fullmatch(r"[1-4]", nb): q = int(nb); break
    if q is None:
        for i, x in enumerate(toks):   # "Winter 2025" = Q1 ... "Fall 2025" = Q4 (public radio); "FCCReportAugust2025" (NPR monthly)
            if x in SEASONS: q = SEASONS[x]; break
            m = re.fullmatch(r"[a-z]*?(january|february|march|april|june|july|august|september|october|november|december)", x) \
                or re.fullmatch(r"[a-z]*report(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*", x)
            if m: q = (MONTHS[m.group(1)[:3]] - 1) // 3 + 1; break
    if q is None:
        for i, x in enumerate(toks):   # "QP 25-01" -> year 25, quarter 01
            if re.fullmatch(r"(1\d|2[0-6])", x) and i + 1 < len(toks) and re.fullmatch(r"0[1-4]", toks[i + 1]):
                q = int(toks[i + 1]); year = year or "20" + x; break
    if q is None:
        for i, x in enumerate(toks):
            m = re.fullmatch(r"(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*", x)
            if m:
                q = (MONTHS[m.group(1)] - 1) // 3 + 1
                na = toks[i + 1] if i + 1 < len(toks) else ""
                if not year and re.fullmatch(r"(1\d|2[0-6])", na): year = "20" + na
                break
    if q is None:
        for i, x in enumerate(toks):   # 2025 06 30  or  010125 / 033125
            if re.fullmatch(r"20[12]\d", x) and i + 2 < len(toks) and re.fullmatch(r"0?[1-9]|1[0-2]", toks[i + 1]) and re.fullmatch(r"\d\d?", toks[i + 2]):
                q = (int(toks[i + 1]) - 1) // 3 + 1; break
            m = re.fullmatch(r"(0[1-9]|1[0-2])([0-3]\d)(2[0-6])", x)
            if m: q = (int(m.group(1)) - 1) // 3 + 1; year = year or "20" + m.group(3); break
            # 12 31 2025 (mm dd yyyy) or 2025 03 (year month)
            if re.fullmatch(r"0?[1-9]|1[0-2]", x) and i + 2 < len(toks) and re.fullmatch(r"[0-3]?\d", toks[i + 1]) and re.fullmatch(r"20[12]\d", toks[i + 2]):
                q = (int(x) - 1) // 3 + 1; break
            if re.fullmatch(r"20[12]\d", x) and i + 1 < len(toks) and re.fullmatch(r"0[1-9]|1[0-2]", toks[i + 1]) and (i + 2 >= len(toks) or not re.fullmatch(r"\d+", toks[i + 2])):
                q = (int(toks[i + 1]) - 1) // 3 + 1; break
    if q is None:
        for i, x in enumerate(toks):
            na = toks[i + 1] if i + 1 < len(toks) else ""; nn = toks[i + 2] if i + 2 < len(toks) else ""
            if re.fullmatch(r"20[12]\d", x) and re.fullmatch(r"[1-4]|0[5-9]|[5-9]|1[0-2]", na) and not re.fullmatch(r"\d+", nn):
                v = int(na); q = v if v <= 4 else (v - 1) // 3 + 1; year = year or x; break   # "I & P 2025.1", "2016 - 4 Issues", "2012-8"
            if re.fullmatch(r"0?[1-9]|1[0-2]", x) and re.fullmatch(r"[0-3]?\d", na) and re.fullmatch(r"(1\d|2[0-6])", nn):
                q = (int(x) - 1) // 3 + 1; year = year or "20" + nn; break                      # "10_1_24-12_31_24", "04-01-23--06-30-23"
    if q and not year:   # "4th qtr issues 25", "1st qtr '25": the only year is a bare 2-digit one somewhere in the name
        yy = [x for x in toks if re.fullmatch(r"(19|2[0-6])", x)]
        if yy: year = "20" + yy[-1]
    return f"{year}Q{q}" if (year and q) else None

def station(cs):
    out = {"callSign": cs, "files": [], "error": None}
    try:
        h = get(f"{BASE}/{SERVICE}-profile/{cs.lower()}/more-public-files")
        m = re.search(r'href="([^"]+)" data-id="[^"]+" data-path="Issues and Programs Lists"', h)
        if not m:
            out["error"] = "no Issues and Programs folder"; return out
        todo = [(m.group(1), "")]
        seen = set()
        while todo:
            url, path = todo.pop()
            if url in seen or len(seen) > 400: continue   # was 60 on the 6-7 Oct read; two stations hit it
            seen.add(url)
            files, subs = folder_files(url)
            for name, d, t in files:
                up = dt.datetime.strptime(d, "%m/%d/%Y").date().isoformat()
                out["files"].append({"name": name, "path": path, "uploaded": up, "time": t, "quarter": quarter_of(name, path)})
            for u, p in subs: todo.append((u, p))
    except Exception as e:
        out["error"] = repr(e)
    return out

if __name__ == "__main__":
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 150
    seed = int(sys.argv[2]) if len(sys.argv) > 2 else 20261005
    allf = json.load(open(f"{SERVICE}_all.json"))["results"]["facilityList"]
    if SERVICE == "tv":
        # Class A stations (-CD, -CA) keep issues/programs lists under 73.3526(e)(11)(i) and are included; translators (-LD) and LPTV (-LP) do not and are not.
        full = sorted({f["callSign"] for f in allf if f["activeInd"] == "Y" and not re.search(r"-(LD|LP)$", f["callSign"]) and f["frequency"]})
        if os.environ.get("FCC_ONLY_CLASSA"): full = [c for c in full if re.search(r"-(CD|CA)$", c)]
    else:   # radio: drop FM translators (K201AB), boosters (-FX, -FM1) and LPFM (-LP); none of them keep issues/programs lists
        full = sorted({f["callSign"] for f in allf if f["activeInd"] == "Y" and f["frequency"]
                       and not re.fullmatch(r"[KW]\d{3}[A-Z]{2}", f["callSign"])
                       and not re.search(r"-(LP|FX|FM\d)$", f["callSign"])})
    random.Random(seed).shuffle(full)
    sample = full[:n] if n else full
    out = sys.argv[3] if len(sys.argv) > 3 else "results.json"
    print(f"{SERVICE}: {len(allf)} facilities, {len(full)} full-power candidates, sampling {n} (seed {seed})", flush=True)
    res = []
    with cf.ThreadPoolExecutor(6) as ex:
        for i, r in enumerate(ex.map(station, sample)):
            res.append(r); print(i + 1, r["callSign"], r["error"] or f'{len(r["files"])} files', flush=True)
    json.dump({"fetched_at": dt.datetime.now(dt.timezone.utc).isoformat(), "service": SERVICE, "seed": seed, "n": n,
               "deadlines": DEADLINES, "stations": res}, open(out, "w"), indent=1)
