# SM-010: Hugging Face says every file goes through its malware scanner. Nothing over 2 GB does, and the badge says safe anyway

Hugging Face's docs say every file in every repository goes through a malware scanner at each commit, within minutes. Its API reports each file's result. On 3,038 files across 450 repositories (150 most-downloaded models, 150 most-downloaded datasets, 150 random recent models), read on 2 October 2026 through two endpoints: under 2 GiB, 2,539 of 2,551 files scanned; at 2 GiB and above, 0 of 487. That is 89% of the bytes in the sample and 92% in the top models, and 476 of the 494 skipped files show the "safe" badge. Most are safetensors or GGUF, which cannot run code; seven are PyTorch pickle files, which the separate pickle-import scanner did read.

Paper: [https://markovianprotocol.com/measurements/sm-010.html](https://markovianprotocol.com/measurements/sm-010.html) · DOI [10.5281/zenodo.23123005](https://doi.org/10.5281/zenodo.23123005) · log leaf [9244](https://log.markovianprotocol.com/leaf/9244)

## Evidence

`exhibits/` holds the saved documentation pages, raw API responses for the quoted examples (GPT-2, whisper-large-v3, Qwen3-8B), the full 450-repository sample with both readings per file, the 80-file cross-check between endpoints, `SHA256SUMS` and the fetch time.

## Run it

```
python3 hf_scan_sample.py     # 450 repositories, root listings via tree?expand=true
python3 hf_requery.py         # paths-info for every non-safe file, then the tables
```

## Limits

Only root directories were listed; the sample over-represents popular repositories, which is where the large files are; we read Hugging Face's reported status, not the scanner. A September attempt at this check died on our own bug (the recursive listing drops the status field); this version uses direct listings and a second endpoint.
