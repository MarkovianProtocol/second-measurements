#!/usr/bin/env python3
"""Reads, from each year's Department of Defense Agency Financial Report (Financial Section), the auditor's sentence
"in the last two quarters of FY 20XX, the DoD recorded more than N unsupported accounting adjustments totaling more than $X"
and writes unsupported_adjustments_fy2020_2025.csv. Text pages are read with pdftotext; the FY2020 and FY2021 auditor's
reports are scanned images, so those pages are rendered with pdftoppm and read with Apple Vision OCR (tools/ocr.swift).
python3 -I extract.py   (needs poppler; macOS for the OCR years)"""
import csv, hashlib, os, re, subprocess, sys, tempfile
B = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.join(B, "sources")
URL = {2020: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2020/3-Financial_Section.pdf",
       2021: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2021/3-Financial_Section.pdf",
       2022: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2022/4-Financial_Section.pdf",
       2023: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2023/4-Financial_Section.pdf",
       2024: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2024/4-Financial_Section.pdf",
       2025: "https://comptroller.war.gov/Portals/45/Documents/afr/fy2025/4_Financial_Section.pdf"}
OCR_PAGE = {2020: 21, 2021: 22}   # scanned auditor's report pages
PAT = re.compile(r"(last two quarters of FY ?(\d{4}),?\s+(?:the )?DoD(?: Components)? recorded more than ([\d,]+) (?:unsupported )?"
                 r"(?:accounting )?adjustments totaling (?:more than|over) \$([\d.]+) billion(?: that lacked supporting\s+documentation)?)", re.I)
def ocr(pdf, page):
    d = tempfile.mkdtemp(); exe = os.path.join(d, "ocr")
    subprocess.run(["swiftc", "-O", "-o", exe, os.path.join(B, "tools", "ocr.swift")], check=True, capture_output=True)
    subprocess.run(["pdftoppm", "-r", "200", "-f", str(page), "-l", str(page), "-png", pdf, os.path.join(d, "p")], check=True)
    png = [os.path.join(d, f) for f in os.listdir(d) if f.endswith(".png")][0]
    return subprocess.run([exe, png], capture_output=True, text=True, check=True).stdout
def pages(pdf):
    n = int(re.search(r"Pages:\s+(\d+)", subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout).group(1))
    for p in range(1, n + 1):
        yield p, subprocess.run(["pdftotext", "-layout", "-f", str(p), "-l", str(p), pdf, "-"], capture_output=True, text=True).stdout
rows = []
for fy in range(2020, 2026):
    pdf = os.path.join(SRC, f"DoD_AFR_FY{fy}_Financial_Section.pdf"); found = None
    cands = [(OCR_PAGE[fy], ocr(pdf, OCR_PAGE[fy]), "OCR")] if fy in OCR_PAGE else ((p, t, "text") for p, t in pages(pdf))
    for p, t, how in cands:
        m = PAT.search(re.sub(r"\s+", " ", t))
        if m: found = (p, how, m); break
    if not found: sys.exit(f"FY{fy}: sentence not found")
    p, how, m = found; assert int(m.group(2)) == fy
    rows.append({"fiscal_year": fy, "period": f"Q3-Q4 FY{fy} (Apr-Sep {fy})", "unsupported_adjustments_more_than": int(m.group(3).replace(",", "")),
                 "total_more_than_usd_billions": m.group(4), "entity": "Department of Defense (agency-wide)",
                 "source_pdf": os.path.basename(pdf), "pdf_page": p, "read_by": how, "source_url": URL[fy],
                 "sha256": hashlib.sha256(open(pdf, "rb").read()).hexdigest(), "quote": m.group(1)})
    print(fy, rows[-1]["unsupported_adjustments_more_than"], rows[-1]["total_more_than_usd_billions"], f"p.{p}", how)
with open(os.path.join(B, "unsupported_adjustments_fy2020_2025.csv"), "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
