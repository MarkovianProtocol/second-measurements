# SM-028 files

Pennsylvania counties' 48-hour mailing rule for 2024 mail-in and absentee ballots. Page: https://markovianprotocol.com/measurements/sm-028.html

- `sm028.py`: the whole count. Standard-library Python 3. Run: `python3 -I sm028.py pa_2024_mail_ballot_requests.csv`
- `summary_2024.json`, `consequence_2024.json`, `weekday_2024.json`: its outputs, as published.
- `SHA256SUMS`: the script, the outputs, the exhibits and the input CSV as we downloaded it (the CSV, about 712 MB, is not stored here; download it from data.pa.gov dataset 3q5t-ddp8, as the page's recipe shows).
- `exhibits/`: the two Election Code sections, the Department of State's 2024 and 2026 guidance, and the dataset's metadata, each as saved on the date in its name. `exhibits/SHA256SUMS` covers them.
