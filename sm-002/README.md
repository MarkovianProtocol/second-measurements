# SM-002: The dataset behind 39 studies of Claude Code can see 1 in 11 of its pull requests

AIDev is the field's go-to dataset for studying AI coding agents, and 39 published studies use it to say how Claude Code behaves. To find Claude Code's pull requests it searches for a line Claude Code writes in commits, and skips the line it writes by default in pull-request descriptions. Over the same dates that search finds 16,065; searching for both finds 173,066. The ones it does catch run bigger than typical: a median of 736 changed lines against 447.

Paper: [https://markovianprotocol.com/measurements/sm-002.html](https://markovianprotocol.com/measurements/sm-002.html) · log leaf [9117](https://log.markovianprotocol.com/leaf/9117) · Sent to the authors 2026-09-30, response pending

## Run it

Python 3, the GitHub CLI (`gh`) logged in, and `pyarrow` + `huggingface_hub` for the AIDev sample.

```
python3 counts.py         # the counts
python3 aidev_sample.py   # 120 AIDev v4 Claude Code PRs, seed 20260930
python3 union_sample.py   # 150 union PRs by hour-window rejection sampling, seed 20260930
python3 compare.py        # the comparison
```

Search counts move as PRs are deleted, and the union sample depends on search results at run time. A rerun lands near the published figures, not on them.

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

Counts are from GitHub search today, not when AIDev was collected. The description line can be turned off or edited, so even 173,066 is a floor. Only AIDev v4 was sampled.
