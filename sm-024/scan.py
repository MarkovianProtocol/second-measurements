#!/usr/bin/env python3
"""SM-024 (draft): read every FARA supplemental statement in a date window. For each: download the PDF from efile.fara.gov,
keep its SHA-256, OCR page 1 with Apple Vision (ocr_page1), and pull the FARA Unit's receipt stamp
("Received by NSD/FARA Registration Unit MM/DD/YYYY H:MM:SS AM") and "For 6 Month Period Ending MM/DD/YYYY".
Resumable: rows already in OUT are skipped. PDFs are deleted after reading; the OCR text is kept.
python3 scan.py FARA_All_RegistrantDocs.csv FROM(YYYY-MM-DD) OUT.jsonl TEXTDIR [workers]"""
import csv, datetime as dt, hashlib, json, os, re, subprocess, sys, tempfile, time, urllib.request
from concurrent.futures import ThreadPoolExecutor
DOCS, FROM, OUT, TXT = sys.argv[1:5]; W = int(sys.argv[5]) if len(sys.argv) > 5 else 4
OCR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ocr_page1"); os.makedirs(TXT, exist_ok=True)
def P(s): m, d, y = s.split("/"); return dt.date(int(y), int(m), int(d))
rows = [r for r in csv.DictReader(open(DOCS, encoding="utf-8", errors="replace"))
        if r["Document Type"] == "Supplemental Statement" and P(r["Date Stamped"]) >= dt.date.fromisoformat(FROM)]
done = set()
if os.path.exists(OUT):
    for l in open(OUT): done.add(json.loads(l)["url"])
todo = [r for r in rows if r["URL"] not in done]
print(len(rows), "in window;", len(todo), "to read", flush=True)
RX_REC = re.compile(r"Received by NSD/FARA Registration Unit\s+(\d{1,2}/\d{1,2}/\d{4})\s+(\d{1,2}:\d{2}:\d{2}\s*[AP]M)", re.I)
RX_PER = re.compile(r"Period\s+Ending\s*[:\-_]?\s*_*(\d{1,2}\s*/\s*\d{1,2}\s*/\s*\d{2,4})", re.I)
def one(r):
    u = r["URL"]; out = {"url": u, "reg": r["Registration Number"], "registrant": r["Registrant Name"], "date_stamped": r["Date Stamped"]}
    for k in range(4):
        try:
            b = urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (second-measurements; hello@markovianprotocol.com)"}), timeout=180).read(); break
        except Exception as e:
            out["error"] = f"fetch: {e}"; time.sleep(10 * (k + 1))
    else: return out
    out.pop("error", None); out["sha256"] = hashlib.sha256(b).hexdigest(); out["bytes"] = len(b)
    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as f: f.write(b); p = f.name
    try: t = subprocess.run([OCR, p], capture_output=True, text=True, timeout=300).stdout
    finally: os.unlink(p)
    open(os.path.join(TXT, os.path.basename(u)[:-4] + ".txt"), "w").write(t)
    m = RX_REC.search(t); out["received"] = f"{m.group(1)} {m.group(2)}" if m else None
    m = RX_PER.search(t); out["period_ending"] = re.sub(r"\s", "", m.group(1)) if m else None
    return out
with ThreadPoolExecutor(W) as ex, open(OUT, "a") as fo:
    for i, o in enumerate(ex.map(one, todo), 1):
        fo.write(json.dumps(o) + "\n"); fo.flush()
        if i % 25 == 0: print(i, "done", flush=True)
print("finished")
