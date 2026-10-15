# SM-017 late lists by station owner

Ranks the paper's 2025 issues/programs-list scoring (18,041 full-power TV, FM and AM stations) by the station's licensee and parent group.
Everything here is built from the paper's own raw folder reads plus two bulk FCC tables; no station profile pages were fetched.

## Files

- `owners.py` — builds station → licensee → parent and writes the outputs. Run: `python3 -I owners.py <lms_dir> <fcc_opif_dir> <out_dir>`
  (`<lms_dir>` holds the unzipped LMS tables and is treated as untrusted data; the script lives here and never runs from inside it).
- `owners_map.json` — the licensee → parent map: regex patterns and exact licensee names per group, ten per-station overrides, notes on every judgement call.
- `owners_2025.csv` / `owners_2025.json` — one row per parent group, sorted by station count: stations (TV/FM/AM), distinct licensees,
  2025 station-quarters scored, late, late share, late by more than 30 days, quarters with no list found, stations with nothing uploaded in 2025,
  stations with all four 2025 lists on time, median days late, per-quarter have/late, and the licensee names behind the group.
- `owners_stations.csv` — one row per station: licensee, FRN, group, the 2025 score, and the Form 323 chain used for checking.
- `f323_check.json` — the map checked against the Form 323 ownership-report chain (see "Checking the map").
- `frn_sanity.json` — why FRN is not used as an entity key, and name-keyed groups whose stations sit under several ownership chains.

## Method

1. **Station universe and scoring** are the paper's: the same results files, the same `quarter_of` classifier imported from `scan.py`, and a
   copy of `analyze.py`'s 2025 rules (deadlines 2025-04-10, 2025-07-10, 2025-12-01 per DA 25-943, 2026-01-12; earliest upload per quarter;
   files dated before the quarter began ignored; LPTV/translators exempt). Group totals add up to the paper's 2025 numbers exactly:
   59,982 station-quarters, 6,177 late, 3,329 late by more than 30 days.
2. **Licensee** comes from the LMS `facility_applicant` table: the facility's non-contact party (`contact_ind = N`), latest `last_update_ts`,
   joined to the paper's facility ids through `facility.facility_uuid`. Individuals (party type IND) have no `legal_name`; their first/last
   name is used. The licensee row was last updated in 2024-2026 for 8,690 stations, 2020-2023 for 5,917, and in 2019 (the LMS migration)
   for 3,386. Checked against the paper's 279-station profile-page sample (`station_info.json`): 102 overlap, 99 agree, 3 differ
   (KNAK: LMS says KYAH, LLC updated 2024-06-28, the profile page says DOC HOLDING, LLC; the other two are translators outside the set).
3. **Parent group** = first match in `owners_map.json` (62 named groups), else the licensee itself, keyed by its normalised name
   (upper-cased, punctuation removed, "THE" and LLC/INC/CORP/CO/LTD/LP suffixes stripped). FRN is not used as a key: one FRN
   (0004121000, a filing agent's) sits on 16 different licensees, and West Virginia Radio Corporation alone has 9 FRNs.
4. **Checking the map.** The LMS `ownership_reports_*` tables hold every Form 323 report: for each station, the respondent chain on its
   latest report (`licensee_or_parent = R` rows, the entities above the licensee). `owners.py` tests each mapped group against tokens
   for its known top entity and writes two lists per group: stations the map puts in the group whose chain does not name it, and
   stations whose chain names it, whose licensee on that report is still today's licensee, and which the map missed. The second list
   is how the per-station licensee entities of Sinclair (116 names such as "KSAS Licensee, LLC"), TEGNA (26), Hubbard, Hearst,
   Cox Media Group, Fox, TelevisaUnivision, Allen Media, Weigel, News-Press & Gazette and Paramount's CW stations got into the map.
   After the last pass no group has more than a handful of unexplained disagreements; the remaining ones are listed in `f323_check.json`.

## Sources

LMS public database dump of 2026-10-11 (table files timestamped 2026-10-10 22:31 UTC), index page
`https://enterpriseefiling.fcc.gov/dataentry/public/tv/lmsDatabase.html`, each table at
`https://enterpriseefiling.fcc.gov/dataentry/api/download/dbfile/10-11-2026/<table>.zip`. Pipe-delimited, records end in `|^|`.

| table | sha256 of zip | used for |
|---|---|---|
| facility.zip | 923de891790660795abfd744a336a703fc09163fce8dd0f7a49780993d78eb00 | facility_id → facility_uuid, status, state |
| facility_applicant.zip | f3856e3b97613f4cbedb12ef4f6954abc3d7407db8fd682e4a48d23dc0ae16d4 | licensee legal_name, FRN, party type |
| ownership_reports_application.zip | 2a66602828009df3ad607c975542453437a9f4416a7c726169351fd0e622ed31 | Form 323 respondent, as-of date, purpose |
| ownership_reports_stations.zip | d0c681d148c78e976644d4cd8a9e3a666316b35a0a800c60d8106464641089dd | Form 323 report → facility_id, licensee on report |
| schema (`/dataentry/api/download/lmschema`, PDF) | 88a4c6c79fff7b94e0686138d8cb1a954519da798c2dcbffd374f96a03c58130 | column meanings |

Paper inputs: `../{tv,fm,am}_all.json`, `../results_all.json`, `../results_fm_all.json`, `../results_am_all.json`, `../scan.py`.

## Coverage

- 18,041 stations scored (14 Oct 2026 read, earliest date seen); 18,038 have a licensee from LMS (the 3 without one: two CPOFF experimental facilities with no party rows, one with contacts only).
- 5,145 stations fall under one of the 62 named parent groups in the map (10 of them by per-station override).
- 12,895 stations are grouped by their own licensee name: 5,390 groups, 3,273 of them single-station; 206 licensees are individuals.
- 17,866 stations have at least one Form 323 report; the latest is the 2023-10-01 biennial for 12,407, a 2024-2026 transfer report for 5,016,
  2019-2022 for 372, older for 71. The 2025 biennial reports are not in this dump.

## Things to know before quoting a row

- **Connoisseur Media includes Alpha Media.** The 153 Alpha Media Licensee / Alpha 3E Licensee stations carry a 2025-09-04 transfer-of-control
  report whose chain is Connoisseur Media Parent, LLC; the licensee entities did not change. Shown as one group.
- **Sidecars stay separate from the company that programs them:** Mission Broadcasting (29) is not under Nexstar; Cunningham Broadcasting,
  Howard Stirk Holdings and Deerfield Media are not under Sinclair. Ten stations whose licensee name is a Sinclair-style "<CALL> Licensee"
  entity but whose latest Form 323 chain names Cunningham / Howard Stirk / Heartland Media / Standard Media are placed by the chain
  (`station_overrides` in the map). WATN-TV (TEGNA Memphis Broadcasting, Inc.) has a 2025-02-01 transfer report naming Nexstar Media
  Group; it is left under TEGNA by licensee name. Latino Media Network (15) is kept separate from TelevisaUnivision.
- **Form 323 is two years stale for most stations** (2023-10-01 biennial). It is used only to check the map, never to assign a parent,
  and the check requires the licensee on the report to equal today's licensee. A sale after the last report that changed the licensee
  entity is caught; a transfer of control that kept the entity (Alpha → Connoisseur) is only caught when a transfer report was filed.
- **Licensee-name groups can merge or split companies.** Two unrelated companies with the same name would merge (checked the largest,
  Community Broadcasting, Inc.: 50 of 52 stations share one FRN); one company filing under two spellings stays split unless the map
  joins it. `frn_sanity.json` lists the name groups with several distinct ownership chains.
- **Noncommercial groups (K-LOVE, American Family Association, public broadcasters) file Form 323-E**, which is not in these tables, so
  the chain check does not cover them; their rows rest on licensee name alone.
- **Group labels** for unmapped groups are the most common spelling of the licensee name in LMS, title-cased by script.
