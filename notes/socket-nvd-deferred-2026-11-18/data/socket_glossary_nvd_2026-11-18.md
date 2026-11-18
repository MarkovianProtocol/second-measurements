# National Vulnerability Database (NVD)

> The NVD is NIST's public database of CVE records, enriched with CVSS scores, CWE types, and CPE product matches, now for a prioritized subset of CVEs.

Also known as: NIST NVD, NIST National Vulnerability Database

Source: https://socket.dev/glossary/national-vulnerability-database-nvd

Last updated: 2026-10-29

The National Vulnerability Database (NVD), often called the NIST NVD, is the U.S. government's public database of CVE records. NIST ingests every published CVE and, for the CVEs it prioritizes, adds a CVSS severity score, a CWE weakness type, and CPE match rules that scanners use to decide which products and versions are affected.

"Prioritizes" is the word that changed. Since [NIST stopped enriching most CVEs](https://socket.dev/blog/nist-officially-stops-enriching-most-cves) on April 15, 2026, it routinely enriches only CVEs in CISA's Known Exploited Vulnerabilities (KEV) catalog, in software the federal government uses, or in critical software as defined by Executive Order 14028. We analyzed every NVD record as of October 28, 2026. Of the 90,192 CVEs the NVD published in 2026, 33,417 (37.1%) carry the status `Deferred`. Only 43.5% have the NVD product-matching data a scanner needs to connect a CVE to installed software.

Our position: treat the NVD as a CVE distribution point with optional annotations, not as a source of truth. For open source dependencies, match on package identifiers from the [GitHub Advisory Database](https://socket.dev/glossary/github-advisory-database) and [OSV](https://socket.dev/glossary/osv), which describe packages the way a package manager does. And never read an empty NVD result as "safe." Purpose-built malware does not get a CVE at all.

## What is the National Vulnerability Database?

The National Vulnerability Database is the analysis layer on top of the CVE List. The CVE Program names vulnerabilities: a CVE Numbering Authority (CNA) assigns an ID and publishes a [CVE record](https://socket.dev/glossary/common-vulnerabilities-and-exposures-cve) with a description and at least one reference. The NVD republishes that record and adds the fields that let software act on it.

NIST launched the NVD in 2005 to replace ICAT, an older NIST index that, [according to a contemporary report](https://www.route-fifty.com/infrastructure/2005/08/nist-relaunches-database-of-it-vulnerabilities/305892), was updated only every three or four weeks. Today ingestion is automated. The NVD ingests new CVE records within approximately one hour of publication, according to NIST's [August 2026 request for information on modernizing the NVD](https://socket.dev/blog/nist-nvd-ai-automation).

Enrichment is the slow, manual part. An NVD analyst can add three things to a record:

- A [Common Vulnerability Scoring System (CVSS)](https://socket.dev/glossary/common-vulnerability-scoring-system) base score and vector string, attributed to `nvd@nist.gov`.
- A [Common Weakness Enumeration (CWE)](https://socket.dev/glossary/common-weakness-enumeration-cwe) ID that classifies the weakness, such as CWE-918 for server-side request forgery.
- Common Platform Enumeration (CPE) `configurations`: machine-readable rules that name the affected products, the vulnerable version ranges, and any platform the product must run on.

The third field is the one that does the work. A severity score tells you how bad a bug is. A CPE configuration tells a scanner whether you have it.

Every NVD record also carries a `vulnStatus` field that says how far through the pipeline it got:

| vulnStatus | Meaning |
| --- | --- |
| Received | Ingested from the CVE List, not yet queued |
| Awaiting Analysis | Queued for enrichment |
| Undergoing Analysis | An analyst is working on it |
| Analyzed | Enriched by NVD analysts |
| Modified | Analyzed, then changed by its source afterward |
| Deferred | Outside the priority criteria; not scheduled for enrichment |
| Rejected | The CVE ID was withdrawn by its CNA |

NIST's announcement labels CVEs outside the priority criteria "Lowest Priority - not scheduled for immediate enrichment," and its dashboard counts them as "Not Scheduled."

> How a CVE moves through the NVD as of October 2026. A CNA publishes a CVE record to the CVE List. The NVD ingests it within about an hour with status Received. NIST checks three priority criteria: listed in CISA KEV, used by the federal government, or critical software under Executive Order 14028. If yes, an analyst adds CPE configurations, a CWE, and a CVSS score only if the CNA gave none, and the status becomes Analyzed. If no, the status becomes Deferred and the record is served with only CNA and CISA ADP data, with no NVD CPE configurations. Downstream, CPE-matching scanners need NVD configurations, and the GitHub Advisory Database imports unreviewed advisories from the NVD feed.

The figure shows the October 2026 pipeline. A CNA publishes a CVE record to the CVE List, with CVSS, CWE, and affected products optional. The NVD ingests it within about an hour as `Received`, then `Awaiting Analysis`, merging any CISA Authorized Data Publisher (ADP) data. NIST then checks three priority criteria: the CVE is in CISA's KEV catalog (goal: enriched within one business day), it affects software used within the federal government, or it affects critical software under Executive Order 14028. If any criterion holds, an analyst writes CPE configurations and a CWE, adds an NVD CVSS score only when the CNA supplied none, and the status becomes `Analyzed`. Otherwise the status becomes `Deferred` and the record is served as received, with no NVD CPE configurations. Downstream, CPE-matching scanners depend on those configurations, and the GitHub Advisory Database imports unreviewed advisories from the NVD feed.

## Inside an analyzed NVD record

Every value in an NVD record names its author in a `source` field. `nvd@nist.gov` is NIST's own analysis. Anything else came from a CNA or an ADP. CISA's ADP appears as the UUID `134c704f-9b21-4f2e-91b3-4a467353bcc0`.

Here is CVE-2025-54313, the [eslint-config-prettier compromise](https://socket.dev/blog/npm-phishing-campaign-leads-to-prettier-tooling-packages-compromise), as the NVD CVE API 2.0 serves it, trimmed to the fields that matter:

```json
{
  "id": "CVE-2025-54313",
  "sourceIdentifier": "cve@mitre.org",
  "published": "2025-07-19T17:15:23.733",
  "vulnStatus": "Analyzed",
  "cisaExploitAdd": "2026-01-22",
  "metrics": {
    "cvssMetricV31": [{
      "source": "cve@mitre.org", "type": "Secondary",
      "cvssData": { "baseScore": 7.5,
        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:L/I:H/A:N" }
    }]
  },
  "weaknesses": [{ "source": "cve@mitre.org",
                   "description": [{ "value": "CWE-506" }] }],
  "configurations": [{
    "operator": "AND",
    "nodes": [
      { "operator": "OR", "cpeMatch": [
        { "vulnerable": true,
          "criteria": "cpe:2.3:a:prettier:eslint-config-prettier:10.1.6:*:*:*:*:node.js:*:*" },
        { "vulnerable": true,
          "criteria": "cpe:2.3:a:prettier:eslint-config-prettier:10.1.7:*:*:*:*:node.js:*:*" }
      ]},
      { "operator": "OR", "cpeMatch": [
        { "vulnerable": false,
          "criteria": "cpe:2.3:o:microsoft:windows:-:*:*:*:*:*:*:*" }
      ]}
    ]
  }]
}
```

Three details matter. The CVSS score came from MITRE as the CNA, not from NVD analysts, which is NIST's 2026 policy in action. The CPE configurations exist because the CVE entered the priority lane. The NVD's change history shows the record went unanalyzed for 188 days after publication. CISA added it to the [KEV catalog](https://socket.dev/glossary/cisa-kev) on January 22, 2026, and the NVD's `Initial Analysis` event, which added seven CPE configurations, is timestamped January 23 at 18:33 UTC.

The third detail is the shape of the data: a configuration is a boolean expression. Here the vulnerable package versions are joined by `AND` to a Windows platform marked `"vulnerable": false`, which encodes "affected only when running on Windows."

## How does the NVD decide which software a CVE affects?

The NVD decides which software a CVE affects by writing CPE match criteria, and a scanner is only as good as that join. A scanner holds an inventory of names and versions. It needs a key that appears on both sides: in its inventory and in the vulnerability record. In the NVD, that key is a CPE 2.3 name:

```text
cpe:2.3:<part>:<vendor>:<product>:<version>:<update>:<edition>:<language>:<sw_edition>:<target_sw>:<target_hw>:<other>
```

CPE was designed for an inventory of products sold by vendors: operating systems, appliances, commercial applications. Part `a` is an application, `o` an operating system, `h` hardware. Vendor and product come from NIST's CPE dictionary or from an analyst's judgment. For a router firmware image or a database server, that model works.

Open source registries do not have vendors. They have names, scopes, and the registry itself. The CVE-2025-54313 configurations also cover other packages compromised in the same campaign, including `@pkgr/core` 0.2.8. The NVD's CPE for it is:

```text
cpe:2.3:a:un-ts:pkgr\/core:0.2.8:*:*:*:*:node.js:*:*
```

The npm scope `@pkgr` became a slash inside the product field, and the vendor `un-ts` was taken from the GitHub organization that hosts the source. No tool can compute that string from a dependency name. It has to look it up, and the lookup only exists if an analyst wrote it. A Package URL (purl) for the same artifact is mechanical: `pkg:npm/%40pkgr/core@0.2.8`.

| Property | CPE 2.3, as used in NVD configurations | Package URL (purl) and ecosystem advisories |
| --- | --- | --- |
| Identifier for @pkgr/core 0.2.8 | cpe:2.3:a:un-ts:pkgr\\/core:0.2.8:\*:\*:\*:\*:node.js:\*:\* | pkg:npm/%40pkgr/core@0.2.8 |
| Who assigns the name | An NVD analyst, against the CPE dictionary | Derived from registry coordinates |
| Computable from a dependency's name and version | No, needs a lookup table | Yes |
| Version ranges | Generic versionStartIncluding and versionEndExcluding fields | Ecosystem-native ranges in GHSA and OSV, such as semver for npm |
| Available for a Deferred CVE | No | Yes, when the ecosystem advisory exists |
| Best fit | Operating systems, commercial software, hardware, firmware | Packages from npm, PyPI, Maven Central, crates.io, and other registries |

Verdict: use CPE for operating systems, appliances, and commercial products, where vendors and SKUs are real. For open source packages, use purl or the ecosystem and package name pair. A CVE matched to a dependency through CPE is a guess about naming. A CVE matched through an ecosystem identifier is a lookup.

Writing CPE is also the expensive part of enrichment. In [the Inspector General's NVD audit](https://socket.dev/blog/federal-audit-finds-nist-wasted-funds-with-no-plan-to-clear-nvd-backlog), the Commerce Department's auditors estimated that CVSS scoring and CPE applicability statements took about 80% of NVD enrichment time. CISA's [Vulnrichment](https://socket.dev/blog/cisa-launches-vulnrichment-project-as-nvd-backlog-hits-10-000) program also wrote CPE data until December 2024, then stopped. Most [vulnerability scanning](https://socket.dev/glossary/vulnerability-scanning) tools that rely on CPE therefore depend on one manual team for the field that matters most.

## Why did the NVD stop enriching most CVEs?

The NVD stopped enriching most CVEs because CVE volume outgrew a manual process. NIST said so directly in its [April 15, 2026 announcement](https://www.nist.gov/news-events/news/2026/04/nist-updates-nvd-operations-address-record-cve-growth): "This change is driven by a surge in CVE submissions, which increased 263% between 2020 and 2025." NIST also reported enriching nearly 42,000 CVEs in 2025, 45% more than any prior year, and still falling behind.

The decline took two years:

- **February 2024.** Enrichment nearly stops. The [NVD halts CVE enrichment](https://socket.dev/blog/nvd-halts-cve-enrichment) with a notice about forming a consortium. Federal auditors later traced the backlog to a lapsed contract.
- **May 2024.** CISA launches Vulnrichment to add CVSS, CWE, and CPE data through the CVE record's ADP container.
- **September 2024.** NIST [misses its own deadline](https://socket.dev/blog/nist-misses-2024-deadline-to-clear-nvd-backlog) to clear the backlog. Auditors found it needed about 6,200 analyses a month and had never done more than 5,000.
- **April 2, 2025.** NIST [marks pre-2018 CVEs Deferred](https://socket.dev/blog/nvd-quietly-sweeps-100k-cves-into-a-deferred-black-hole), removing them from the enrichment queue.
- **End of 2025.** The backlog passes 27,000 CVEs, up from about 13,000 in June 2024.
- **April 15, 2026.** NIST announces it will stop routinely enriching most CVEs. Only the three priority categories are scheduled. NIST stops adding its own CVSS score when the CNA supplied one, and moves every backlogged CVE published before March 1, 2026 to "Not Scheduled."
- **May 26, 2026.** The Commerce Inspector General [reports](https://www.oig.doc.gov/wp-content/OIGPublications/OIG-26-020-I_Abstract-SECURED.pdf) that NIST had no strategic plan for the NVD and duplicated enrichment work with CISA.
- **August 12, 2026.** NIST [publishes a request for information](https://www.govinfo.gov/content/pkg/FR-2026-08-12/html/2026-16371.htm) on modernizing the NVD and discloses an AI enrichment tool, V-etalon, with no release date. Comments closed October 13, 2026.

The April 2026 policy was the honest version of what had been true since February 2024. It also changed which field is scarce. When CNAs supply CVSS scores and NIST stops duplicating them, severity becomes plentiful. CPE configurations do not, because almost nobody else writes them.

## What the NVD looks like in October 2026

To measure the policy, we analyzed all 415,469 NVD records as of October 28, 2026, using the [fkie-cad/nvd-json-data-feeds](https://github.com/fkie-cad/nvd-json-data-feeds) mirror, which rebuilds year files from the NVD CVE API 2.0 and syncs with the NVD every two hours. We selected the 90,192 records with an NVD publish date between January 1 and October 27, 2026.

| vulnStatus | 2026 CVEs | Share |
| --- | --- | --- |
| Analyzed | 33,894 | 37.6% |
| Deferred | 33,417 | 37.1% |
| Awaiting Analysis | 9,227 | 10.2% |
| Modified | 5,157 | 5.7% |
| Received | 4,916 | 5.5% |
| Rejected | 2,272 | 2.5% |
| Undergoing Analysis | 1,309 | 1.5% |

> Horizontal stacked bars of CVEs the NVD published each month of 2026, split by status as of October 28, 2026. Monthly volume rose from 5,143 in January to 15,354 in October 1 to 27. The Deferred share rose from 25 to 34 percent in the first four months to 38 to 42 percent from May onward.

The chart breaks the same records down by month. These are the values it plots, with the queue combining Received, Awaiting Analysis, and Undergoing Analysis:

| Month published | Total | Analyzed or Modified | Deferred | In queue | Rejected | Deferred share |
| --- | --- | --- | --- | --- | --- | --- |
| January | 5,143 | 2,567 | 1,732 | 3 | 841 | 33.7% |
| February | 4,808 | 3,046 | 1,568 | 2 | 192 | 32.6% |
| March | 6,304 | 4,441 | 1,590 | 203 | 70 | 25.2% |
| April | 5,885 | 3,952 | 1,610 | 248 | 75 | 27.4% |
| May | 6,985 | 3,865 | 2,639 | 432 | 49 | 37.8% |
| June | 8,001 | 4,378 | 3,233 | 331 | 59 | 40.4% |
| July | 9,919 | 5,326 | 3,745 | 699 | 149 | 37.8% |
| August | 12,719 | 4,071 | 5,320 | 2,866 | 462 | 41.8% |
| September | 15,074 | 4,708 | 5,772 | 4,453 | 141 | 38.3% |
| October 1-27 | 15,354 | 2,697 | 6,208 | 6,215 | 234 | 40.4% |

Five findings stand out.

Monthly CVE volume in the NVD nearly tripled during 2026, from 5,143 in January to 15,074 in September. October passed 15,000 with four days left.

The Deferred share rose after the policy change. It ran between 25% and 34% for CVEs published from January to April, and between 38% and 42% every month since.

The priority lane works for exploited bugs. All 197 KEV-listed CVEs published in 2026 have the status `Analyzed`.

Severity is no longer scarce. 93.4% of 2026 CVEs carry a CVSS score from some source, but NVD analysts wrote only 14,090 of them (15.6%). Among Deferred CVEs, 98.9% still have a CNA or CISA score.

Product matching is scarce. 50.4% of 2026 CVEs (45,501) have no CPE anywhere in the NVD record, from the NVD, the CNA, or CISA. Only 4,082 (4.5%) identify the affected package with a registry Package URL or registry collection URL.

The open source slice is no better. GitHub's CNA, which issues CVEs for security advisories published on GitHub, accounts for 12,262 of the 2026 records. 4,640 of them (37.8%) are Deferred, so a scanner that matches only on NVD CPE data will not connect them to a package unless they are later prioritized.

Two caveats. The mirror reproduces API responses rather than querying the API live, so the counts can trail the NVD by up to one sync interval. And CVEs in the queue for August through October will partly resolve, which is why we compare months by Deferred share.

## Does the NVD cover malicious packages?

The NVD covers a malicious package only when a CNA issues a CVE for a hijacked legitimate package. The CNA rules exclude deliberately malicious code from CVE entirely, as our CVE glossary entry explains, so a typosquat or a purpose-built [malicious package](https://socket.dev/glossary/malicious-package) never reaches the NVD. Compromised packages sometimes do, and two 2025 npm attacks show both outcomes.

In the [Qix maintainer compromise](https://socket.dev/blog/npm-author-qix-compromised-in-major-supply-chain-attack), a phished maintainer account published a malicious `debug@4.4.2` on September 8, 2025, at 13:12 UTC, according to the registry's own `time` field. GitHub's CNA published CVE-2025-59144 on September 15. As of October 28, 2026, the NVD lists it as `Deferred`, with a CVSS 4.0 score from GitHub and no CPE configurations. Its change history shows no analysis event at all. The one change NIST did make was translating the description into Spanish on October 19, 2026.

The eslint-config-prettier compromise went the other way. Its four malicious versions were published between 15:51 and 16:13 UTC on July 18, 2025. The CVE was published the next day and then waited 188 days, until the KEV listing pulled it into analysis. It now has CPE match criteria for every malicious version it names.

None of those versions can be installed anymore. The npm registry still lists their publish times but no longer serves `debug` 4.4.2, `eslint-config-prettier` 8.10.1, 9.1.1, 10.1.6, or 10.1.7, or `@pkgr/core` 0.2.8. The NVD's best enrichment of this attack arrived six months after the malicious versions were published. That data helps you audit old builds. It cannot stop an install. Detection at install time has to come from the package's contents, not from a database row written months later.

## How to check a CVE's NVD status

You can check any CVE's enrichment status with one request to the NVD CVE API 2.0. The API needs no key, though NIST's [developer guide](https://nvd.nist.gov/developers/start-here) lists a lower rate limit without one, 5 requests per rolling 30-second window versus 50 with a key.

```bash
curl -s "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2025-59144" \
  | jq -c '.vulnerabilities[0].cve | {id, vulnStatus,
      nvdCpe: ((.configurations // []) | length > 0),
      scoredBy: [.metrics | to_entries[] | select(.key | startswith("cvss"))
                 | .value[].source] | unique}'
```

```json
{"id":"CVE-2025-59144","vulnStatus":"Deferred","nvdCpe":false,"scoredBy":["security-advisories@github.com"]}
{"id":"CVE-2025-54313","vulnStatus":"Analyzed","nvdCpe":true,"scoredBy":["cve@mitre.org"]}
```

The second line is the same command run against CVE-2025-54313. If `vulnStatus` is `Deferred` and `nvdCpe` is false, the NVD will not tell a CPE-matching scanner that you have this bug. To see when a record was analyzed, the CVE History API at `/rest/json/cvehistory/2.0?cveId=` returns every change event, including `Initial Analysis` and its timestamp.

For open source dependencies, the fix is to stop routing through CPE. GitHub's documentation says unreviewed advisories in the GitHub Advisory Database come "directly from the National Vulnerability Database feed," while [reviewed advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database) are mapped to packages in supported ecosystems. That split is the right architecture: the NVD distributes the CVE ID, and an ecosystem database supplies the package and range. Socket's [CVE alerts](https://socket.dev/alerts/criticalCVE) follow that split. They ingest from the GitHub Security Advisory Database, whose reviewed advisories key on ecosystem package names and version ranges rather than on NVD CPE configurations.

The open problem is upstream. NIST has started work on CPE 3.0, but by NIST's own account the revision is early and no specification text exists. CVE records can already carry a `packageURL` for every affected package. Only 4.5% of 2026 CVEs identify their package by a registry identifier. Until CNAs publish the package identifier at the source, the most reliable thing the NVD gives an open source project is the CVE ID itself.
