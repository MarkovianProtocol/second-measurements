#!/bin/sh
# Which repositories do the corpus files come from? Streams the 12 GB origins table (Zenodo 14250103).
# 1) every origin row for the test-harness repository
curl -sL "https://zenodo.org/records/14250103/files/sboms-03-origins.csv.zstd?download=1" | zstd -dc \
  | awk -F, 'NR==1 || $2 ~ /dlambert_fis\/invoke_github_extractor/' > repo_origins.csv
cut -d, -f1 repo_origins.csv | tail -n +2 > repo_swhids.txt
# 2) do any of those files appear at any other origin?
curl -sL "https://zenodo.org/records/14250103/files/sboms-03-origins.csv.zstd?download=1" | zstd -dc \
  | awk -F, 'NR==FNR{s[$1]=1;next} ($1 in s) && $2 !~ /dlambert_fis\/invoke_github_extractor/' repo_swhids.txt - \
  | wc -l
