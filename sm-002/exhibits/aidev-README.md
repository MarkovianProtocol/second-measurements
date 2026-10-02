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
- config_name: user
  data_files:
  - split: train
    path: user.parquet
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

> **This is AIDev v4 (AIDev-2.7M, cutoff date of Nov 2025).** Other versions are available
> as git tags and can be loaded with `load_dataset("hao-li/AIDev", "<config>", revision="<tag>")`:
<!-- > - **v5** — AIDev-7.6M (cutoff March 31, 2026): https://huggingface.co/datasets/hao-li/AIDev/tree/v5 -->
> - **v3** — previous main: https://huggingface.co/datasets/hao-li/AIDev/tree/v3

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
within real-world open-source software engineering. This version spans **2,743,854 pull requests**
across **327,477 repositories**, authored by six AI coding agents:
**OpenAI Codex, GitHub Copilot, Cursor, Google Jules, Devin, and Claude Code**,
and involving **159,056 human developers**.

You can easily load the small tables in a few lines of code:

```py
import pandas as pd
all_repo_df = pd.read_parquet("hf://datasets/hao-li/AIDev@v4/all_repository.parquet")
all_user_df = pd.read_parquet("hf://datasets/hao-li/AIDev@v4/all_user.parquet")
```

> ⚠️ `all_pull_request.parquet` is ~1.5 GB on disk and `pr_commit_details.parquet` is ~1.3 GB —
> avoid loading them blindly with a plain `pd.read_parquet`. See
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
| OpenAI Codex | 2,069,595 | 7.1 | 6.3 | 86.6 | 110,331 | 161,644 |
| Copilot | 349,695 | 18.2 | 18.3 | 63.5 | 0 | 90,905 |
| Cursor | 212,544 | 32.6 | 13.2 | 54.2 | 47,637 | 60,733 |
| Google Jules | 50,490 | 13.6 | 9.7 | 76.6 | 18 | 11,475 |
| Devin | 43,298 | 10.9 | 27.0 | 62.1 | 0 | 6,748 |
| Claude Code | 18,232 | 8.2 | 11.2 | 80.6 | 4,756 | 6,019 |
| **Total** | **2,743,854** | **10.7** | **8.8** | **80.5** | **159,056** | **327,477** |

![](AIDev_figure.png)

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

# 1. Small tables: load fully, this is fine ("@v4" pins this version; drop it for latest main)
all_repo_df = pd.read_parquet("hf://datasets/hao-li/AIDev@v4/all_repository.parquet")
all_user_df = pd.read_parquet("hf://datasets/hao-li/AIDev@v4/all_user.parquet")

# 2. Big tables: ALWAYS select columns (skip the heavy `title`/`body`/`patch`)
LIGHT_COLS = ["id", "agent", "user", "state", "created_at", "closed_at", "merged_at", "repo_url"]
all_pr_df = pd.read_parquet(
    "hf://datasets/hao-li/AIDev@v4/all_pull_request.parquet", columns=LIGHT_COLS
)

# 3. Or stream record batches for constant-memory processing
pf = pq.ParquetFile("all_pull_request.parquet")  # after hf download
for batch in pf.iter_batches(batch_size=262_144, columns=["agent", "merged_at"]):
    df = batch.to_pandas()
    ...  # aggregate incrementally
```

See [`scripts/load_aidev.py`](scripts/load_aidev.py) for complete memory-safe examples,
including streaming patch extraction from `pr_commit_details.parquet`. The
[`scripts/`](scripts) folder also contains memory-safe analysis scripts
(streaming/column-pruned; they run in well under 1 GB of RAM):

| Script | Purpose |
| --- | --- |
| [`load_aidev.py`](scripts/load_aidev.py) | Memory-safe loading patterns for every table |
| [`dataset_overview.py`](scripts/dataset_overview.py) | Per-agent summary table + cumulative PR figure |
| [`language_usage.py`](scripts/language_usage.py) | Language distribution across agents |
| [`productivity.py`](scripts/productivity.py) | Merge-rate radar, turnaround box plot, Accept/Reject stats |

## Dataset Structure

AIDev is organized into normalized tables that can be joined via consistent keys. The full-scope tables cover every repository:

* **`all_pull_request`**: PR-level data (ID, title, body, agent label, user info, state, timestamps)
* **`all_repository`**: Metadata including license, language, stars, forks, and project-level info
* **`all_user`**: User information such as id, login, and created date (personally identifiable information has been removed to address privacy concerns)

### AIDev-pop: Filtered (>100 stars)

For the AIDev-pop subset (repositories with more than 100 stars) of AIDev, we provide extra tables:

* **`pull_request`**: PR-level data (ID, title, body, agent label, user info, state, timestamps)
* **`repository`**: Metadata including license, language, stars, forks, and project-level info
* **`pr_comments` & `pr_reviews` & `pr_review_comments`**: Review discussions, approvals, timestamps, actors; `pr_review_comments` contains inline review comments
* **`pr_commits` & `pr_commit_details`**: Commit metadata, diffs, file-level changes, patch. Note that the `patch` data does not include large patches since the GitHub API does not provide them. If you want the large patches, you need to download them yourself.
* **`user`**: User information such as id, login, and created date (personally identifiable information has been removed to address privacy concerns)

## Dataset Updates

> ⚠️ **Update (v4, cutoff Nov 2025):** The dataset has been refreshed to **2.7 million pull requests**
> across six agents (Google Jules added). Earlier versions remain available as git tags
> (see the version list at the top).

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
