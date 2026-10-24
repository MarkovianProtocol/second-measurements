# DoD unsupported accounting adjustments, FY2020–FY2025

Each year since FY2020 the auditor's report in the Department of Defense Agency Financial Report has said, in the same form:
"in the last two quarters of FY 20XX, the DoD recorded more than N unsupported accounting adjustments totaling more than $X billion".
This folder reads that sentence out of each year's report and puts the six years in one table.

| FY | Unsupported adjustments, Apr–Sep | Count | Source page (PDF) |
|---|---|---|---|
| 2020 | more than $293 billion | more than 1,900 | FY2020 Financial Section p.21 |
| 2021 | more than $270 billion | more than 1,700 | FY2021 Financial Section p.22 |
| 2022 | more than $222 billion | more than 1,500 | FY2022 Financial Section p.23 |
| 2023 | more than $192.7 billion | more than 1,573 | FY2023 Financial Section p.42 |
| 2024 | more than $245 billion | more than 500 | FY2024 Financial Section p.41 |
| 2025 | more than $859 billion | more than 5,665 | FY2025 Financial Section p.38 |

What the numbers are, and are not:
- Every figure is a floor ("more than") and covers only the last two quarters of the fiscal year, not the whole year.
- Only FY2024 is stated to be absolute value (DODIG-2025-112: "The $245 billion is the absolute value of the unsupported accounting adjustments", 24% of all adjustments that period). The other years don't say.
- The FY2025 figure is 3.5 times FY2024, with eleven times as many adjustments. The report doesn't explain the jump. FY2025 also dropped the separate beginning-balances material weakness, so a change in scope is possible.
- The plain-language FY2025 summary (DOWIG-2026-081) says "adjustments totaled more than $859 billion" without "unsupported"; the auditor's report itself says "unsupported". Quote the auditor's report.
- These are not the same quantity as the 1998–2015 figures (e.g. $6.5 trillion for the Army General Fund in FY2015, DODIG-2016-113). Those were year-end gross totals that count repeated system-generated entries each quarter, so they are larger by construction. The two series should not be drawn as one line.
- FY2016–FY2019 have no figure of this form. Nearest: Army General Fund FY2016, $196.7 billion (DFAS-identified, year-end); Army FY2017 first half, $455 billion (GAO-18-27); DoD FY2018, more than $175 billion in 1,232 vouchers DoD itself categorized as unsupported; FY2019, none.

Data: unsupported_adjustments_fy2020_2025.csv (same folder). Script: extract.py and tools/ocr.swift (same folder; put the six PDFs from the CSV's source_url column in sources/). Rerun: `python3 -I extract.py` (poppler; macOS for the two scanned years, read with Apple Vision OCR via tools/ocr.swift). Writes unsupported_adjustments_fy2020_2025.csv with the quoted sentence, page, source URL and SHA-256 of each PDF. Sources were fetched 22 Oct 2026 from comptroller.war.gov (via the Internet Archive where the site refused direct download); hashes in dod-adjustments-SHA256SUMS (same folder).
