# SM-023 — Ubuntu critical vulnerabilities and Canonical's "released within 24 hours"

Paper: https://markovianprotocol.com/measurements/sm-023.html · DOI 10.5281/zenodo.23521336 · log leaf 11857; receipt in `sm-023.receipt.json`

Scripts: `census.py` reads every CVE Ubuntu rates priority critical from its CVE API. `known_dates.py` finds when each first entered ubuntu-cve-tracker; `crit_dates.py` reads each file's `Priority:` history and the commit that set it to critical; `fix_dates.py` dates the first fix that reached users (first USN, or the first Launchpad publication of the fixed version in Security/Updates/Release on or after the release's own release date); `analyze.py` builds every number on the page; `make_page.py` renders it.

Exhibits: the API snapshot (`ubuntu_critical_cves_raw_2026-10-20.json.gz`, 80 MB uncompressed; the uncompressed file is on the site under sm-023/exhibits/ and its hash is in `SHA256SUMS`), the derived rows/known/crit/fixes/summary files, saved copies of the Ubuntu Pro FAQ post and its edit history, the GA and CVE-prioritisation posts (with the 2020 Internet Archive copy), Ubuntu's priority and ESM pages, Canonical's 23 Sep 2026 kernel post, Ubuntu CVE pages as displayed on 20 Oct, and the workaround search.
