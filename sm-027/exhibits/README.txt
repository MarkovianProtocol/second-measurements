SM-027 exhibits (GitLab security issue disclosure), saved 28 October 2026.
probe_mac_2026-10-28.csv      anonymous GET https://gitlab.com/api/v4/projects/278964/issues/<iid>, run from a residential connection in Colorado, United States (05:44-05:57 UTC); last row (issue 30017) added 13:00 UTC after the extraction fix
probe_hetzner_2026-10-28.csv  the same requests from a Hetzner server in Helsinki, Finland (37.27.249.8), 28 October 06:12-06:24 UTC; last row (issue 30017) requested there at 2026-10-28T13:09:02Z after the extraction fix
graphql_workitem_check_2026-10-28.csv  anonymous GraphQL workItem lookups for 2026 issues that answered 404 (two passes, from Helsinki; ERR = rate limited)
control_gql_587698.json / control_gql_596134.json   the same GraphQL query for a public issue (CVE-2026-1458) and a hidden one (CVE-2026-5952)
control_wi_587698.html / control_wi_596134.html     the /-/work_items/<iid> web page, logged out, for the same two: both answered HTTP 200 (587698 rechecked 200 at about 13:20 UTC); only the public one carries a title
visibility_lag_2026-10-28.csv  for public 2025/2026 issues, time of the "made the item visible to everyone" note (ERR = rate limited)
handcheck_cveorg_2026-10-28.txt  first run of the 30-issue check, by an earlier version of handcheck.py that also requested the web pages; cveorg/ holds the 30 cve.org records saved by handcheck.py, which reproduces the same 30 of 30
control_notes_587698.json  anonymous GraphQL notes for a public issue, showing the system note 'made the issue visible to everyone'
nvd_cves_source_cve@gitlab.com_2026-10-28.json  NVD API 2.0, sourceIdentifier=cve@gitlab.com
patch_notes_2026/  GitLab patch release notes found on docs.gitlab.com (28 notes + index)
gitlab_security_disclosure_2026-10-28.html, handbook_*.html  saved policy pages

Re-read of 13 November 2026 (same method):
nvd_cves_source_cve@gitlab.com_2026-11-13.json   NVD API, sourceIdentifier=cve@gitlab.com, 1,877 CVEs, read 18:33 UTC from the Helsinki server
probe_mac_2026-11-13.csv                         anonymous GET of each issue, residential connection in Colorado, 18:34:12-18:47:25 UTC 13 Nov
probe_hetzner_2026-11-13.csv                     the same from the server in Helsinki, 18:33:56-18:46:02 UTC; both agree on all 1,132 issues
graphql_workitem_check_2026-11-13.csv            first pass, 54 rate-limited (ERR)
graphql_workitem_check_2026-11-13_retry.csv      the same with the ERR rows retried slowly; 231 null (analyze.py uses this, the newest)
visibility_lag_2026-11-13.csv                    visibility notes for public 2025/2026 issues; 54 rate-limited (ERR)
visibility_lag_2026-11-13_merged.csv             the same with 42 ERR rows filled from the 28 Oct read of the same issue (marked in column 7); 12 still ERR (analyze.py uses this)
gitlab_security_disclosure_2026-11-13.html, handbook_engaging_with_security_2026-11-13.html, handbook_psirt_2026-11-13.html   policy pages as read 13 Nov
patch_notes_2026/patch-release-gitlab-19-5-3/4/5-released.html   notes of 29 Oct (security update, CVE-2026-111943, shorter layout), 10 Nov (Critical Patch Release, a Tuesday), 12 Nov (bug fixes only, no security fixes)
