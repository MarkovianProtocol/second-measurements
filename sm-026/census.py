#!/usr/bin/env python3
"""SM-026 census: every WIPO UDRP decision (D-cases) for a year. For case numbers 1..N, fetch the decision PDF from
wipo.int (404 = no decision: withdrawn, terminated or pending), keep the "Procedural History" section as text, and
append one JSON line per case. The PDF is not kept. Resumable: cases already in OUT are skipped.
python3 census.py YEAR MAXNUM OUT.jsonl"""
import json, os, re, subprocess, sys, tempfile, time
YEAR, MAX, OUT = sys.argv[1], int(sys.argv[2]), sys.argv[3]
UA = "markovianprotocol.com second-measurement census (hello@markovianprotocol.com)"
done = set()
if os.path.exists(OUT):
    for l in open(OUT): done.add(json.loads(l)["case"])
tmp = tempfile.mkdtemp()
for n in range(1, MAX + 1):
    case = f"D{YEAR}-{n:04d}"
    if case in done: continue
    url = f"https://www.wipo.int/amc/en/domains/decisions/pdf/{YEAR}/d{YEAR}-{n:04d}.pdf"
    p = os.path.join(tmp, "d.pdf")
    code = subprocess.run(["curl", "-sL", "-A", UA, "-o", p, "-w", "%{http_code}", "--max-time", "60", url], capture_output=True, text=True).stdout
    rec = {"case": case, "http": code, "fetched": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())}
    if code == "200":
        t = subprocess.run(["pdftotext", p, "-"], capture_output=True, text=True).stdout
        t = re.sub(r"\s+", " ", t)
        i = t.find("Procedural History"); j = t.find("Factual Background", i)
        rec["procedural_history"] = t[i:j if j > i else i + 6000][:8000] if i >= 0 else ""
        m = list(re.finditer(r"Date: (January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})", t))
        rec["date_line"] = m[-1].group(0) if m else None
        rec["head"] = t[:600]
    with open(OUT, "a") as f: f.write(json.dumps(rec) + "\n")
    time.sleep(0.7)
