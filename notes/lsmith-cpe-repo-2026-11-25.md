# OSV's GIT ranges would reach about half of nginx's and MariaDB's NVD CVEs by repository, and 2 of PostgreSQL's 209, 25 Nov 2026

This supports Lukas Kahwe Smith's point in ecosyste-ms/advisories#1149: matching OSV's `GIT` records by repository URL would cover part of the gap, and the part is uneven. For PostgreSQL it covers almost nothing, so a CPE-to-repository mapping is the only route there.

We listed every NVD CVE whose configurations match each product CPE (NVD API 2.0, `virtualMatchString`, read 25 Nov 2026), then asked OSV and GitHub's advisory database about each CVE.

| NVD product CPE | NVD CVEs | In OSV | OSV gives a `GIT` range on the project's own repository | GitHub advisory, reviewed (with a package) | GitHub advisory, unreviewed only (no package) |
|---|---|---|---|---|---|
| `postgresql:postgresql` | 209 | 66 | 2 (`github.com/postgres/postgres`) | 1 | 206 |
| `f5:nginx` | 41 | 36 | 20 (`github.com/nginx/nginx`) | 2 | 39 |
| `nginx:nginx` | 2 | 2 | 0 | 0 | 2 |
| `mariadb:mariadb` | 431 | 266 | 254 (`github.com/mariadb/server`) | 3 | 402 |
| `openssl:openssl` (for comparison) | 330 | 309 | 180 (`github.com/openssl/openssl`) | 29 | 300 |

Two things a repository match would need to handle:

- OSV spells MariaDB's repository in lowercase, `https://github.com/mariadb/server`; GitHub's name is `MariaDB/server`. An exact match on the URL in #1149 finds none of the 254.
- The `GIT` ranges in these records also name other repositories: 47 ranges across the 20 nginx records (Apache Traffic Server, Node.js, SwiftNIO, OpenResty and others, mostly from CVE-2023-44487, HTTP/2 Rapid Reset), and 181 in MariaDB's (mostly `mysql/mysql-server`). Matching on the project's own repository keeps them apart.

On 25 Nov, two days after OSV was added as a source, ecosyste.ms still returned 0 advisories for `repository_url` = `github.com/postgres/postgres`, `github.com/nginx/nginx`, `github.com/MariaDB/server` and `github.com/mariadb/server`, and 3 for `github.com/openssl/openssl`.

Limits: the counts are CVEs whose NVD configurations match the product CPE, including a few where the product appears only as a platform (6 of PostgreSQL's 209, 1 of MariaDB's 431, 8 of OpenSSL's 330, none of nginx's); OSV's `GIT` ranges come from its own conversion of NVD references and can change as OSV re-imports; we read each source once, on 25 Nov.

Files: fetch_nvd.py (NVD), check_sources.py (OSV and GitHub per CVE), table.py (the table), ecosystems_lookup.py (the ecosyste.ms lookups), data/ (every answer as read), SHA256SUMS.
