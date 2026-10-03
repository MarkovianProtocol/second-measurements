# SM-012: Certificate authorities get 92 days to file their audits. Most file in the last week, one in eleven files late, and Windows still trusts a root whose last audit ended in 2019

CCADB policy 5.2 gives every CA 92 calendar days after an audit period ends to upload the auditor's statement, or an explanatory letter to Bugzilla. From the CCADB's 3 October 2026 export (10,317 records): 119 current standard audit statements on trusted records, 108 dated inside the window (34 on days 80–89, 10 on days 90–92; 90th percentile = day 92), 11 past it: 2 with an auditor letter (Thailand, one of three; Firmaprofesional), 2 with an incident report instead (D-TRUST, PKIoverheid), 7 with nothing on file (Thailand ×2, MULTICERT, Entrust, CATCert, Brazil ITI ×2). Roots whose newest audit ended more than 365+92 days ago: Mozilla 0 of 172, Chrome 0 of 101, Apple 6 of 144, Microsoft 24 of 331 (oldest: Certinomis, December 2019). Statement date is a floor on upload date; the upload date is not in the export.

Paper: [https://markovianprotocol.com/measurements/sm-012.html](https://markovianprotocol.com/measurements/sm-012.html) · DOI [10.5281/zenodo.23123265](https://doi.org/10.5281/zenodo.23123265) · log leaf [pending](https://log.markovianprotocol.com/)

## Evidence

`exhibits/` holds the gzipped CCADB export, the CCADB, Mozilla and Microsoft policy pages, the Bugzilla CA Documents listing and four threads, and the computed tables. `SHA256SUMS` and `retrieved_at.txt` cover them.

## Run it

```
curl -sL https://ccadb.my.salesforce-sites.com/ccadb/AllCertificateRecordsCSVFormatV5 -o ccadb_v5.csv
python3 audit_deadlines.py
python3 per_program.py
```

## Limits

Statement date, not upload date; programs may hold audits the CCADB record doesn't show; Microsoft's store includes non-web roots; letters matched by CA name in Bugzilla summaries; one day's export.
