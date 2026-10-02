# SM-002: A research dataset finds only 1 in 11 of Claude Code's pull requests

AIDev is a collection of code changes made by AI coding tools, and 62 research papers this year studied it. To find Claude Code's changes, it searches for a line Claude Code writes somewhere else. Over the same dates, its search finds 16,065 changes; searching for the line Claude Code actually writes there finds 173,066. The ones it did find are bigger than usual, so research on that sample studied an unusual slice.

Paper: [https://markovianprotocol.com/measurements/sm-002.html](https://markovianprotocol.com/measurements/sm-002.html) · log leaf [9095](https://log.markovianprotocol.com/leaf/9095) · Sent to the authors 2026-09-30, response pending

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
