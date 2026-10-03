# SM-003: Wild SBOMs was billed as the work of many developers. Nearly half came from one robot

An SBOM is an ingredients list for software, and Wild SBOMs is a research collection of 78,612 of them, described as written by practitioners in the wild. We traced where they came from: 37,306, almost half, were made by a single automated run in 2022. That robot then sent a 2026 study down the wrong path. The “GitHub tool” it blamed for missing dependency links was the robot's own tool, from another company; GitHub's real exporter records those links in 78 of 78 projects we checked.

Paper: [https://markovianprotocol.com/measurements/sm-003.html](https://markovianprotocol.com/measurements/sm-003.html) · log leaf [9170](https://log.markovianprotocol.com/leaf/9170) · Sent to the authors 2026-09-30, response pending

## Evidence

`exhibits/` holds saved copies of every source quoted on the paper page, with `SHA256SUMS` and the fetch time.

## Run it

Python 3, `zstd`, and the GitHub CLI for the live checks. The corpus is `sbom-files.tar.ztsd` from Zenodo record [14250103](https://zenodo.org/records/14250103), piped through `zstd -dc`; `analyze.py` also needs `sboms-01.csv` from the same record.

```
./origins.sh                              # the robot's files (streams the 12 GB origins table twice)
python3 scan_github.py < corpus.tar       # tool labels
python3 classify_all.py < corpus.tar      # the three groups
python3 github_live.py && python3 github_live_depth.py   # GitHub's exporter, live
python3 analyze.py                        # every table; expects the study's sboms-01.csv saved as sboms01.csv beside it, plus classified_v2.jsonl, github_sboms.jsonl and repo_origins.csv from the steps above
```

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

The study's own scanner isn't public, so its classifier was rebuilt from the written definitions. When a file lists several tools, the first one is credited. The live GitHub test used 90 popular repositories, not a random sample.
