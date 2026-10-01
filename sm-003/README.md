# SM-003: Half of a well-known collection of software ingredient lists came from one robot

An SBOM is an ingredients list for software. Wild SBOMs is a research collection of 78,612 of them, described as written by many real developers. Nearly half (37,306) came from one automated run in 2022. A 2026 study used the collection to say GitHub's tool leaves out which ingredient depends on which. That was the robot's tool, from another company; GitHub's own tool records them for 78 of 78 projects we checked.

Paper: [https://markovianprotocol.com/measurements/sm-003.html](https://markovianprotocol.com/measurements/sm-003.html) · log leaf [9047](https://log.markovianprotocol.com/leaf/9047) · Sent to the authors 2026-10-01, response pending

## Run it

Python 3, `zstd`, and the GitHub CLI for the live checks. The corpus is `sbom-files.tar.ztsd` from Zenodo record [14250103](https://zenodo.org/records/14250103), piped through `zstd -dc`; `analyze.py` also needs `sboms-01.csv` from the same record.

```
./origins.sh                              # the robot's files (streams the 12 GB origins table twice)
python3 scan_github.py < corpus.tar       # tool labels
python3 classify_all.py < corpus.tar      # the three groups
python3 github_live.py && python3 github_live_depth.py   # GitHub's exporter, live
python3 analyze.py                        # every table
```

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

The study's own scanner isn't public, so its classifier was rebuilt from the written definitions. When a file lists several tools, the first one is credited. The live GitHub test used 90 popular repositories, not a random sample.
