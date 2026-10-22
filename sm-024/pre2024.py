#!/usr/bin/env python3
"""SM-024 (draft): for each overdue candidate, OCR page 1 of its last supplemental statement received before 2024, so the
overdue calendar can (a) count a 2024+ period filed early before the window, (b) anchor its six-month grid on a real
period end, and (c) apply the 'possibly final' test to it. Resumable.
python3 pre2024.py overdue_verified.json FARA_All_RegistrantDocs.csv OUT.jsonl TEXTDIR"""
import json, csv, datetime as dt, urllib.request, subprocess, os, re, sys, time
OV, DOCS, OUT, TXT = sys.argv[1:5]; os.makedirs(TXT, exist_ok=True)
OCR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ocr_page1")
def D(s): m, d, y = s.split("/"); return dt.date(int(y), int(m), int(d))
MON = {m: i for i, m in enumerate(["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], 1)}
RX_NUM = re.compile(r"(?:6|Six)\s+Month\s+Period\s+Ending\s*[.:\-_]?\s*_*(\d{1,2})\s*/\s*(\d{1,2})\s*/\s*(\d{2,4})", re.I)
RX_TXT = re.compile(r"(?:6|Six)\s+Month\s+Period\s+Ending\s*[.:\-_]?\s*_*([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})", re.I)
RX_REC = re.compile(r"Received by NSD/FARA Registration Unit\s+(\d{1,2}/\d{1,2}/\d{4})", re.I)
def period(t):
    m = RX_NUM.search(t)
    if m: y = int(m.group(3)); y = y + 2000 if y < 100 else y; return f"{int(m.group(1)):02d}/{int(m.group(2)):02d}/{y}"
    m = RX_TXT.search(t)
    if m and m.group(1).lower() in MON: return f"{MON[m.group(1).lower()]:02d}/{int(m.group(2)):02d}/{m.group(3)}"
# Two page-1 periods the patterns miss, read by eye from the saved OCR text:
HAND = {"6342-Supplemental-Statement-20220502-15.pdf": "03/31/2022",   # "For 6 Month Period Ending 31 March 202 2me)"
        "876-Supplemental-Statement-20230719-35.pdf": "06/30/2022"}    # "For Six Month Period Ending June 30,2022"
cand = {r["reg"] for r in json.load(open(OV))}; bydate = {}
for r in csv.DictReader(open(DOCS, encoding="utf-8", errors="replace")):
    if r["Document Type"] == "Supplemental Statement" and r["Registration Number"] in cand and D(r["Date Stamped"]) < dt.date(2024, 1, 1):
        n = r["Registration Number"]; d = D(r["Date Stamped"])
        if n not in bydate or d > bydate[n][0]: bydate[n] = (d, [r])
        elif d == bydate[n][0]: bydate[n][1].append(r)
# an agent can file several statements on its last day (catching up); all of them are read and the latest period is kept
done = {json.loads(l)["reg"]: json.loads(l) for l in open(OUT)} if os.path.exists(OUT) else {}
rows = []
def one(n, r):
    f = os.path.join(TXT, os.path.basename(r["URL"])[:-4] + ".txt")
    if not os.path.exists(f):
        for k in range(5):
            try:
                b = urllib.request.urlopen(urllib.request.Request(r["URL"], headers={"User-Agent": "Mozilla/5.0 (second-measurements; hello@markovianprotocol.com)"}), timeout=180).read(); break
            except Exception as e:
                err = e; time.sleep(15 * (k + 1))
        else: return {"reg": n, "url": r["URL"], "error": str(err)}
        open("/tmp/pre2024.pdf", "wb").write(b); open(f, "w").write(subprocess.run([OCR, "/tmp/pre2024.pdf"], capture_output=True, text=True).stdout)
    t = open(f).read(); mr = RX_REC.search(t)
    pe = period(t); how = "ocr"
    if not pe and os.path.basename(r["URL"]) in HAND: pe = HAND[os.path.basename(r["URL"])]; how = "read by hand from the OCR text"
    return {"reg": n, "url": r["URL"], "date_stamped": r["Date Stamped"], "received": mr.group(1) if mr else None, "period_ending": pe, "period_source": how}
for n, (d, rs) in sorted(bydate.items()):
    got = [one(n, r) for r in rs]
    ok = [g for g in got if g.get("period_ending")]
    best = max(ok, key=lambda g: D(g["period_ending"])) if ok else got[0]
    best["same_day_statements"] = len(rs); rows.append(best)
open(OUT, "w").write("".join(json.dumps(x) + "\n" for x in rows))
print(len(rows), "read;", sum(1 for x in rows if x.get("error")), "errors;", sum(1 for x in rows if not x.get("error") and not x.get("period_ending")), "no period")
