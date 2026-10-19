---
license: cc-by-4.0
task_categories:
- other
dataset_info:
- config_name: all_pull_request
  features:
  - name: id
    dtype: int64
  - name: number
    dtype: int64
  - name: title
    dtype: string
  - name: user
    dtype: string
  - name: user_id
    dtype: int64
  - name: state
    dtype: string
  - name: created_at
    dtype: string
  - name: closed_at
    dtype: string
  - name: merged_at
    dtype: string
  - name: repo_url
    dtype: string
  - name: repo_id
    dtype: int64
  - name: html_url
    dtype: string
  - name: body
    dtype: string
  - name: agent
    dtype: string
configs:
- config_name: all_pull_request
  data_files:
  - split: train
    path: all_pull_request.parquet
- config_name: all_repository
  data_files:
  - split: train
    path: all_repository.parquet
- config_name: all_user
  data_files:
  - split: train
    path: all_user.parquet
- config_name: pull_request
  data_files:
  - split: train
    path: pull_request.parquet
- config_name: repository
  data_files:
  - split: train
    path: repository.parquet
- config_name: pr_comments
  data_files:
  - split: train
    path: pr_comments.parquet
- config_name: pr_reviews
  data_files:
  - split: train
    path: pr_reviews.parquet
- config_name: pr_review_comments
  data_files:
  - split: train
    path: pr_review_comments.parquet
- config_name: pr_commits
  data_files:
  - split: train
    path: pr_commits.parquet
- config_name: pr_commit_details
  data_files:
  - split: train
    path: pr_commit_details.parquet
- config_name: pr_timeline
  data_files:
  - split: train
    path: pr_timeline.parquet
- config_name: issue
  data_files:
  - split: train
    path: issue.parquet
- config_name: related_issue
  data_files:
  - split: train
    path: related_issue.parquet
---

<p align="center">
  <img src="aidev_logo.png" alt="Description" width="300"/>
</p>

# AIDev: Studying AI Coding Agents on GitHub (The Rise of AI Teammates in Software Engineering 3.0)

[![Paper](https://img.shields.io/badge/arXiv-2507.15003-b31b1b.svg)](https://arxiv.org/abs/2507.15003)
[![HF Paper 1](https://img.shields.io/badge/HF-Paper-ffd21e.svg)](https://huggingface.co/papers/2507.15003)
[![Paper](https://img.shields.io/badge/arXiv-2602.09185-b31b1b.svg)](https://arxiv.org/abs/2602.09185)
[![HF Paper 2](https://img.shields.io/badge/HF-Paper-ffd21e.svg)](https://huggingface.co/papers/2602.09185)
[![GitHub](https://img.shields.io/badge/GitHub-Code-blue?logo=github)](https://github.com/SAILResearch/AI_Teammates_in_SE3)
<!-- [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.16919272.svg)](https://doi.org/10.5281/zenodo.16919272) -->

- **Papers:**
  - [The Rise of AI Teammates in Software Engineering (SE) 3.0: How Autonomous Coding Agents Are Reshaping Software Engineering](https://huggingface.co/papers/2507.15003)
  - [AIDev: Studying AI Coding Agents on GitHub](https://huggingface.co/papers/2602.09185)
- **GitHub:** https://github.com/SAILResearch/AI_Teammates_in_SE3

> **This is AIDev v5 (AIDev-7.6M, cutoff date of March 31, 2026).** Other versions are available
> as git tags and can be loaded with `load_dataset("hao-li/AIDev", "<config>", revision="<tag>")`:
> - **v4** — AIDev-2.7M (cutoff Nov 2025): https://huggingface.co/datasets/hao-li/AIDev/tree/v4
>   ⚠️ Known issue: per-PR sub-resource tables (comments, reviews, review comments, commits,
>   timelines) are truncated at 30 items per PR. Fixed in v5 — for complete threads, join v5's
>   sub-resource tables against v4 PR ids.
> - **v3** — previous main: https://huggingface.co/datasets/hao-li/AIDev/tree/v3 (same known issue)

## 📢 Call for Papers

We invite researchers to leverage the **AIDev** dataset and submit their findings to our upcoming tracks.

**Empirical Software Engineering (EMSE) Journal Special Issue ([https://emsejournal.github.io/special_issues/2026_SI_Agentic_SE.html](https://emsejournal.github.io/special_issues/2026_SI_Agentic_SE.html))**
* Deadline: We are operating on a **rolling review process**. Submit when ready! (Final date: Sept 30, 2026)

## Past Events

**KDD 2026 Workshop ([https://agent-se.github.io](https://agent-se.github.io/))**
* ~~Deadline: June 1, 2026~~
* Location: Jeju, Korea (August 9 to 13, 2026)

**ACM CAIS 2026 Workshop ([https://agenticse-cais.github.io](https://agenticse-cais.github.io))**
* ~~Deadline: May 1, 2026~~ **Update: See you in California!**
* Location: California, USA (May 26 to 29, 2026)

**MSR 2026 (co-located with ICSE) Mining Challenge ([https://2026.msrconf.org/track/msr-2026-mining-challenge](https://2026.msrconf.org/track/msr-2026-mining-challenge))**
* ~~Deadline: December 23, 2025~~ **Update: See you in Brazil!**
* Location: Rio de Janeiro, Brazil (April 12 to 18, 2026)

---

## Overview

**AIDev** is a large-scale dataset capturing the emergence of autonomous coding agents (AI teammates)
within real-world open-source software engineering. This version spans **7,685,281 pull requests**
across **961,168 repositories**, authored by six AI coding agents:
**OpenAI Codex, GitHub Copilot, Claude Code, Cursor, Google Jules, and Devin**,
and involving **393,349 human developers**.

You can easily load the small tables in a few lines of code:

```py
import pandas as pd
all_repo_df = pd.read_parquet("hf://datasets/hao-li/AIDev-7.6M/all_repository.parquet")
all_user_df = pd.read_parquet("hf://datasets/hao-li/AIDev-7.6M/all_user.parquet")
```

> ⚠️ `all_pull_request.parquet` is ~6.7 GB on disk and `pr_commit_details.parquet` is ~12.4 GB —
> **do not** load them blindly with a plain `pd.read_parquet`. See
> [Loading the Dataset](#loading-the-dataset-without-blowing-up-your-ram) below for memory-safe patterns.

## Intended Uses

* **Fine-tuning or post-training:** fine-tuning or post-training your LLMs/agents based on the patches
* **Empirical SE research:** analyse collaboration patterns, review latency, velocity
* **Agent evaluation:** measure bug-fix success, code quality, PR acceptance rate
* **Human–AI interaction:** study conversational review dynamics and sentiment

## Papers Using AIDev

This year’s MSR Mining Challenge received 130 abstracts (116 full submissions) and accepted 62 papers. 
The list of accepted papers (all using AIDev) can be found here:

[https://2026.msrconf.org/track/msr-2026-mining-challenge](https://2026.msrconf.org/track/msr-2026-mining-challenge)

We also list other papers using AIDev below (may overlap with the challenge):

1. **Agent READMEs: An Empirical Study of Context Files for Agentic Coding** [[arXiv:2511.12884](https://arxiv.org/abs/2511.12884)]
2. **Agentic Refactoring: An Empirical Study of AI Coding Agents** [[arXiv:2511.04824](https://arxiv.org/abs/2511.04824)]
3. **Analyzing Message-Code Inconsistency in AI Coding Agent-Authored Pull Requests** [[arXiv:2601.04886](https://arxiv.org/abs/2601.04886)]
4. **Do Autonomous Agents Contribute Test Code? A Study of Tests in Agentic Pull Requests** [[arXiv:2601.03556](https://arxiv.org/abs/2601.03556)]
5. **Early-Stage Prediction of Review Effort in AI-Generated Pull Requests** [[arXiv:2601.00753](https://arxiv.org/abs/2601.00753)]
6. **Security in the Age of AI Teammates: An Empirical Study of Agentic Pull Requests on GitHub** [[arXiv:2601.00477](https://arxiv.org/abs/2601.00477)]
7. **How Do Agents Perform Code Optimization? An Empirical Study** [[arXiv:2512.21757](https://arxiv.org/abs/2512.21757)]
8. **How Do Agentic AI Systems Address Performance Optimizations? A BERTopic-Based Analysis of Pull Requests** [[arXiv:2512.24630](https://arxiv.org/abs/2512.24630)]
9. **A Study of Library Usage in Agent-Authored Pull Requests** [[arXiv:2512.11589](https://arxiv.org/abs/2512.11589)]
10. **What Makes a GitHub Issue Ready for Copilot?** [[arXiv:2512.21426](https://arxiv.org/abs/2512.21426)]
11. **Understanding Security Risks of AI Agents' Dependency Updates** [[arXiv:2601.00205](https://arxiv.org/abs/2601.00205)]
12. **How Do Agentic AI Systems Deal With Software Energy Concerns? A Pull Request-Based Study** [[arXiv:2512.24636](https://arxiv.org/abs/2512.24636)]
13. **Will It Survive? Deciphering the Fate of AI-Generated Code inOpen Source** [[arXiv:2601.16809](https://arxiv.org/abs/2601.16809)]
14. **Understanding Dominant Themes in Reviewing Agentic AI-authored Code** [[arxiv:2601.19287](https://arxiv.org/abs/2601.19287)]
15. **How AI Coding Agents Modify Code: A Large-Scale Study of GitHub Pull Requests [[arxiv:2601.17581](https://arxiv.org/abs/2601.17581)]**

> **Note:** If you use AIDev in your research, please open a [Pull Request](https://huggingface.co/datasets/hao-li/AIDev/discussions?new_pr=true) to add your paper here!

## Quick Look

The overview of this version of the AIDev dataset is as follows:

| Agent | # PR | % Open PR | % Closed PR | % Merged PR | # Developers | # Repository |
| --- | --- | --- | --- | --- | --- | --- |
| OpenAI Codex | 3,844,602 | 7.3 | 6.5 | 86.2 | 237,223 | 355,920 |
| Copilot | 1,581,924 | 14.2 | 15.8 | 69.9 | 0 | 347,971 |
| Claude Code | 1,567,100 | 4.2 | 7.8 | 88.0 | 114,516 | 174,038 |
| Cursor | 317,453 | 28.3 | 14.3 | 57.4 | 62,246 | 81,915 |
| Google Jules | 296,411 | 21.0 | 15.6 | 63.4 | 18 | 41,125 |
| Devin | 77,791 | 17.0 | 23.3 | 59.6 | 0 | 10,321 |
| **Total** | **7,685,281** | **9.6** | **9.5** | **80.9** | **393,349** | **961,168** |

> **Note on `# Developers`:** this counts distinct human PR authors. Copilot, Devin, and
> Google Jules PRs are authored by the agent's own bot account (e.g., `copilot`,
> `devin-ai-integration[bot]`, `google-labs-jules[bot]`), so their developer counts are
> (near) zero even though humans initiated the work.

> **Note on Google Jules volume:** `google-labs-jules[bot]` PR volume dropped sharply
> (~15×) after late January 2026 and stayed at the lower level through the March 31 cutoff.
> We verified against the live GitHub API that this is a real change in the agent's PR
> output — not missing data, and the volume did not migrate to another account.

![](AIDev_new_figure.png)

## Example Notebooks

| Description                          | Notebook Link                                                                                       | Open in Colab                                                                                                                |
|--------------------------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Basic usage                          | [load_AIDev.ipynb](NOTEBOOK_LINK_PLACEHOLDER)                                                       | <a href="COLAB_LINK_PLACEHOLDER" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a> |
| Dataset overview                     | [dataset_overview.ipynb](NOTEBOOK_LINK_PLACEHOLDER)                                                 | <a href="COLAB_LINK_PLACEHOLDER" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a> |
| Analysis of programming usage        | [language_usage.ipynb](NOTEBOOK_LINK_PLACEHOLDER)                                                   | <a href="COLAB_LINK_PLACEHOLDER" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a> |
| PR merge rate and turnaround time    | [productivity.ipynb](NOTEBOOK_LINK_PLACEHOLDER)                                                     | <a href="COLAB_LINK_PLACEHOLDER" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a> |

## Loading the Dataset (without blowing up your RAM)

Three rules keep memory flat:

```py
import pandas as pd
import pyarrow.parquet as pq

# 1. Small tables: load fully, this is fine
all_repo_df = pd.read_parquet("hf://datasets/hao-li/AIDev-7.6M/all_repository.parquet")
all_user_df = pd.read_parquet("hf://datasets/hao-li/AIDev-7.6M/all_user.parquet")

# 2. Big tables: ALWAYS select columns (skip the heavy `title`/`body`/`patch`)
LIGHT_COLS = ["id", "agent", "user", "state", "created_at", "closed_at", "merged_at", "repo_url"]
all_pr_df = pd.read_parquet(
    "hf://datasets/hao-li/AIDev-7.6M/all_pull_request.parquet", columns=LIGHT_COLS
)

# 3. Or stream record batches for constant-memory processing
pf = pq.ParquetFile("all_pull_request.parquet")  # after hf download
for batch in pf.iter_batches(batch_size=65_536, columns=["agent", "merged_at"]):
    df = batch.to_pandas()
    ...  # aggregate incrementally
```

See [`scripts/load_aidev.py`](scripts/load_aidev.py) for a guided tour of these patterns
(metadata-only inspection, column pruning, streaming, predicate pushdown, joining the
sub-resource tables, streaming patches out of `pr_commit_details.parquet`, reading from the
Hub). The [`scripts/`](scripts) folder also contains self-contained analysis scripts that
reproduce the tables and figures on this card; all stream the data and peak at about 1 GB of
RAM on the full 7.6M-row table (see [`scripts/README.md`](scripts/README.md) for measured
numbers, a table cheat sheet with join keys, and the `--scope pop|all` / `--stars` options):

| Script | Purpose |
| --- | --- |
| [`load_aidev.py`](scripts/load_aidev.py) | Memory-safe loading patterns for every table |
| [`dataset_overview.py`](scripts/dataset_overview.py) | Per-agent summary table (above) + cumulative PR figure |
| [`language_usage.py`](scripts/language_usage.py) | Repository language distribution per agent |
| [`productivity.py`](scripts/productivity.py) | PR outcomes, turnaround box plot, monthly acceptance rate, tests vs. a baseline agent |

## Dataset Structure

AIDev is organized into normalized tables that can be joined via consistent keys. The full-scope tables cover every repository:

* **`all_pull_request`**: PR-level data (ID, title, body, agent label, user info, state, timestamps)
* **`all_repository`**: Metadata including license, language, stars, forks, and project-level info
* **`all_user`**: User information such as id, login, and created date (personally identifiable information has been removed to address privacy concerns)

### AIDev-pop: Filtered (>100 stars)

For the AIDev-pop subset (repositories with more than 100 stars) of AIDev, we provide extra tables:

* **`pull_request`**: PR-level data (ID, title, body, agent label, user info, state, timestamps)
* **`repository`**: Metadata including license, language, stars, forks, and project-level info
* **`pr_timeline`**: Complete PR event history (open/close/merge, label, assign, etc.)
* **`pr_comments` & `pr_reviews` & `pr_review_comments`**: Review discussions, approvals, timestamps, actors; `pr_review_comments` contains inline review comments
* **`pr_commits` & `pr_commit_details`**: Commit metadata, diffs, file-level changes, patch. Note that the `patch` data does not include large patches since the GitHub API does not provide them. If you want the large patches, you need to download them yourself.
* **`issue` & `related_issue`**: Linked GitHub issues and their mapping to PRs

## How Agent PRs Are Identified (Mining Queries)

Each agent's PRs are collected through the GitHub Issues Search API (`GET /search/issues`),
using the queries below. Since GitHub search returns at most 1,000 results per query, every
query is split into creation-time windows small enough to stay under that cap, and all
windows are fetched exhaustively up to the dataset cutoff (**March 31, 2026**).

| Agent | GitHub search query | Mining start |
| --- | --- | --- |
| OpenAI Codex | `is:pr head:codex/` | 2025-05-16 |
| GitHub Copilot | `is:pr head:copilot/` | 2025-03-13 |
| Claude Code | `is:pr "Co-Authored-By: Claude" in:body` **OR** `is:pr author:app/claude` **OR** `is:pr "Generated with Claude Code" in:body` | 2025-02-24 |
| Cursor | `is:pr head:cursor/` | 2025-01-01 |
| Google Jules | `is:pr author:google-labs-jules[bot]` | 2025-05-19 |
| Devin | `is:pr author:devin-ai-integration[bot]` | 2024-12-24 |

Each mining start date corresponds to the earliest PR we could find for that agent, so the
dataset covers each agent's full public history on GitHub.

For the **AIDev-pop** subset, PRs are additionally re-validated with precision filters:

* **Claude Code**: the PR must match at least one of the three signatures above. The footer
  check is tolerant of the actual markdown-link format
  (`🤖 Generated with [Claude Code](https://claude.com/claude-code)`, older PRs use
  `claude.ai/code`) — validated at 99.8% recall on a 160k-PR sample.
* **Copilot**: the PR author must be the `copilot` account (branch prefix alone can match
  non-agent PRs).
* Other agents are already identified by their bot account or branch prefix and need no
  extra filter.

## Dataset Updates

> ⚠️ **Removed (v5):** the `pr_task_type` table (LLM-based Conventional Commit classification
> of PR purpose) is no longer shipped — the dataset is now too large to classify, so the
> table would only cover a small, outdated fraction of PRs. It is still available for the
> previous release via the v4 tag:
> `load_dataset("hao-li/AIDev", "pr_task_type", revision="v4")`.

> ⚠️ **Fix (October 2026):** A mining bug truncated per-PR sub-resources (`pr_comments`, `pr_reviews`,
> `pr_review_comments`, `pr_commits`, `pr_timeline`) at **30 items per PR** — the fetches were
> unpaginated, so GitHub returned its default page size. All affected data has been re-fetched with
> full pagination (e.g. [pyrevitlabs/pyRevit#2749](https://github.com/pyrevitlabs/pyRevit/pull/2749)
> now has all 64 comments). Two notes: (1) re-fetched threads are a fresh snapshot, so a small number
> of comments/events created after the original mining date are included — filter on `created_at` if
> you need strict cutoff semantics; (2) file-level `pr_commit_details` may be missing for commits
> beyond the first 30 of very large PRs.

> ⚠️ **Update (v5, cutoff March 31, 2026):** The dataset has been refreshed to **7.6 million pull requests**
> across six agents. Earlier versions remain available as git tags (see the version list at the top).

## License

This dataset aggregates content from GitHub repositories. **Each source repository retains its original copyright and license** (e.g., MIT, Apache-2.0, GPL family, Creative Commons variants, etc.). Files, patches/diffs, and any other artifacts originating from those repositories remain governed by their **original licenses**.

- Users must verify and comply with the specific license of any source repository or file they extract or use from this collection. Do not assume a universal re-license.
- If you believe content appears here in a way that conflicts with its license, please contact the maintainers, and it will be removed.

**Important:** Repository contents maintain their original licenses. Please respect individual project licenses when using this data.

## Citation

If you use AIDev in your work, please cite:

```bibtex
@misc{li2025aiteammates_se3,
  title={The Rise of AI Teammates in Software Engineering (SE) 3.0: How Autonomous Coding Agents Are Reshaping Software Engineering}, 
  author={Hao Li and Haoxiang Zhang and Ahmed E. Hassan},
  year={2025},
  eprint={2507.15003},
  archivePrefix={arXiv},
  primaryClass={cs.SE},
  url={https://arxiv.org/abs/2507.15003}
}
```
