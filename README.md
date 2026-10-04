# second-measurements

Public claims about logs and datasets, recomputed by a different path than the one that produced them. Each folder holds the scripts behind one paper on [markovianprotocol.com/measurements](https://markovianprotocol.com/measurements/). One row per check, with exhibits and log receipts: [the dataset on Hugging Face](https://huggingface.co/datasets/MarkovianProtocol/second-measurements).

| | Finding | Status | |
|---|---|---|---|
| [SM-016](sm-016/) | Toxic-release reports are due 1 July, with a statutory fine of up to $71,545 for each day late. A thousand plants filed more than a year late for 2019, and 61 of them appear in any EPCRA 313 case opened since | Published 2026-10-04; questions for EPA prepared, not yet sent | [paper](https://markovianprotocol.com/measurements/sm-016.html) |
| [SM-015](sm-015/) | Certificate Transparency’s new tiled logs publish in seconds. The old ones take up to an hour, and the browsers’ own log lists are the slowest part | Sent to Apple and Chrome 2026-10-03, response pending | [paper](https://markovianprotocol.com/measurements/sm-015.html) |
| [SM-012](sm-012/) | Certificate authorities get 92 days to file their audits. Most file in the last week, one in eleven files late, and Windows still trusts a root whose last audit ended in 2019 | Sent to CCADB and Microsoft 2026-10-03, response pending | [paper](https://markovianprotocol.com/measurements/sm-012.html) |
| [SM-011](sm-011/) | Firefox's revocation list is months behind the biggest certificate logs. One in eleven top sites, mozilla.org included, gets no revocation check at all | Sent to Mozilla 2026-10-02, response pending | [paper](https://markovianprotocol.com/measurements/sm-011.html) |
| [SM-010](sm-010/) | Hugging Face says every file goes through its malware scanner. Nothing over 2 GB does, and the badge says safe anyway | Sent to Hugging Face 2026-10-02, response pending | [paper](https://markovianprotocol.com/measurements/sm-010.html) |
| [SM-009](sm-009/) | Firefox promised a list of every revoked certificate. A third of the ones revoked on day one aren't on it, and it no longer asks anyone else | Sent to Mozilla 2026-10-02, response pending | [paper](https://markovianprotocol.com/measurements/sm-009.html) |
| [SM-001](sm-001/) | Google's Pixel ledger promised every release. January went missing, and stayed missing for eight months | Confirmed and fixed by Google | [paper](https://markovianprotocol.com/measurements/sm-001.html) |
| [SM-002](sm-002/) | The dataset behind 39 studies of Claude Code can see 1 in 11 of its pull requests | Sent to the authors 2026-09-30, response pending | [paper](https://markovianprotocol.com/measurements/sm-002.html) |
| [SM-003](sm-003/) | Wild SBOMs was billed as the work of many developers. Nearly half came from one robot | Sent to the authors 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-003.html) |
| [SM-004](sm-004/) | We tried to catch whisper.online's ledger out. It passed every test, and we found it sending us ten copies of everything | Reproduced and confirmed by the operator | [paper](https://markovianprotocol.com/measurements/sm-004.html) |
| [SM-008](sm-008/) | A federal directive says CISA rates every CVE. Since March, it has rated almost no Linux kernel bugs | Published | [paper](https://markovianprotocol.com/measurements/sm-008.html) |
| [SM-007](sm-007/) | Docker promised signed attestations for every Official Image. The attestations arrived; the signatures didn't | Sent to Docker 2026-10-02, response pending | [paper](https://markovianprotocol.com/measurements/sm-007.html) |
| [SM-006](sm-006/) | x402 payments on Base fell by three-quarters in two months, and the same two operators still send most of them | Sent to the authors 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-006.html) |
| [SM-005](sm-005/) | Meta's whitepaper says its private-AI log refreshes every 3 hours. Since January it's been every 6 | Sent to Meta 2026-10-01, response pending | [paper](https://markovianprotocol.com/measurements/sm-005.html) |

[A review of the first month](https://markovianprotocol.com/measurements/review-2026-10.html) puts every check side by side; `review/aidev-map.json` lists the 47 papers built on AIDev that report agent-specific results, with quotes and sample sizes; `rechecks/` reruns SM-001, SM-005 and SM-006 on a schedule ([live page](https://markovianprotocol.com/measurements/rechecks.html)).

Earlier measurements in their own repos: [x402-second-measurement](https://github.com/MarkovianProtocol/x402-second-measurement), [ocsf-second-measurement](https://github.com/MarkovianProtocol/ocsf-second-measurement). Every finding reported to someone else and what happened next: [findings-ledger](https://github.com/MarkovianProtocol/findings-ledger).

Python packages any script here needs are in `requirements.txt` (`pip install -r requirements.txt`); everything else is the standard library plus the tools each folder names.

## Checked, nothing found

`nulls/` holds the scripts for checks where the claim held:

- `armored-witness-firmware.py`: 27 of 28 Armored Witness firmware log entries match the commit their tag points to on GitHub. The recovery image names tag `0.1.0`, which doesn't exist.
- `plexi_coverage.py`: 150 of 150 sampled WhatsApp key-transparency epochs have a retrievable, consistent audit on Cloudflare Plexi. Signatures not checked.
- `mcp_star_floor.py` (needs `true_mcp_repos.jsonl` from the paper's Zenodo replication package, record 17573071): the MSR '26 dataset of MCP implementations keeps only repositories with 50 or more stars, which the paper doesn't state (4.3% of matching repositories). Its language findings hold below that cut, and no owner holds more than 1%.
- `pypi_attest.py`: PyPI said 17% of uploads in 2025 carried an attestation. In 1,000 uploads sampled from its changelog, 17.9% do (95%: 15.1–20.8%); 20.5% of those still on PyPI, a floor on Trusted Publishing's "more than 20%".
- `mcp_endpoint_redirects.py`: a 2026 census found 4.2% of multi-version MCP registry servers moved their endpoint to a different host. Recomputed: 4.02%. Of those tied to a verified domain, 116 of 135 stayed with that domain's owner; 283 of 418 are GitHub-account names with no domain to check.
- `github_cve_credits.py`: a 2026 paper found GitHub leaves reporter credits out of the CVE records it assigns. Still so: 0 of the newest 150 CVE records and 0 of their OSV files carry credits, though every advisory names someone.
- `homebrew_bottle_attestations.py`: Homebrew says it attests every bottle its CI builds. 599 of 600 sampled bottles are attested by its CI or its backfill signer; the exception is `ht` 2.1.0's two Monterey bottles, still served with no attestation, reported as [homebrew-core#314985](https://github.com/Homebrew/homebrew-core/issues/314985).
- `nvd_kev_enrichment.py` (first save CISA's catalogue: `curl -sLo kev.json https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json`; NVD without an API key takes over an hour): NIST's goal is to enrich known-exploited CVEs within one business day. All 163 added since 15 April 2026 made it; 95 needed work and took a median of 19.5 hours.
- `ct_roots/get_roots.py`: the accepted-roots census behind SM-015, every current CT log against the 101 Chrome roots; its two inputs sit beside it.
- `kubernetes_signatures.py` / `kubernetes_signatures_verify.py` (run in that order; the second reads the first's k8s_sigs.json): Kubernetes says it signs all release binaries. 408 of 408 binaries across 12 releases carry a signature and certificate; 12 of 12 sampled signatures verify from the documented release identity.
- `proton_kt_epochs.py`: Proton says a key-transparency epoch goes out every 4 hours, never more than 72. 515 epochs from Certificate Transparency since July: median 4.00 hours, longest 38.1.
- `debian_reproducible_gate.py`: Debian said on 10 May 2026 that migration now blocks unreproducible new packages and regressions. 457 unreproducible binaries sit in testing today: 128 predate the gate, 231 replaced an already-unreproducible version (allowed), 76 are hinted, 10 got their verdict after crossing, and the 12 petsc binaries were flagged by britney and waved through on the record in #1135890. 0 unexplained.
- `ct_merge_delays.py` / `ct_merge_delays_tiles.py`: every Certificate Transparency log promises a maximum merge delay (24 h classic, 60 s tiled). A fresh certificate submitted to all 64 logs that take a current one was served inside the promise by every one: tiled logs within seconds, DigiCert in 10 s, Google and Sectigo in 1–2 min, Cloudflare's Nimbus in 46 and 61 min. Results in `ct_merge_delays_results.json`.
- `github_attestations/`: GitHub says public repositories' attestations go to Sigstore's public log. 161 of 161 Actions-generated attestations in a 388-bundle sample are on Rekor. The other 227 are GitHub's own release attestations (immutable releases): GitHub's CA, a one-year certificate, GitHub's timestamp, no public log, and no claim of one.

## How the papers are pinned

Each paper's sha256 is a leaf in the Markovian transparency log, linked from its row above, and the log is anchored to Bitcoin with OpenTimestamps. Scripts here are byte-identical to the copies served next to each paper; each folder's `SHA256SUMS` lists them.

Code is MIT-licensed. Paper text is CC BY 4.0.
