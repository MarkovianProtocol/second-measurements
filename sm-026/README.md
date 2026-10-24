# SM-026 — UDRP panel appointment within five days (WIPO and the Forum)

Paper: https://markovianprotocol.com/measurements/sm-026.html · DOI 10.5281/zenodo.23627271 · log leaf 12593

From this folder: `gunzip -k exhibits/*.gz`, `python3 parse.py exhibits/census_2025.jsonl exhibits/census_2026.jsonl > wipo_parsed.jsonl`, `(cd forum && python3 rebuild.py ../exhibits/forum_procedural_history.jsonl ../forum_records.json)`, `python3 analyze.py wipo_parsed.jsonl forum_records.json summary_2026-10-24.json` — reproduces `exhibits/summary_2026-10-24.json` byte for byte.
