# SM-004: We checked whisper.online's public ledger with our own code, and it holds up

whisper.online keeps a public ledger that is supposed to let anyone prove nothing in it was quietly changed. We checked it with code we wrote ourselves rather than theirs, and every check passed. We also measured a fix they made: their system was sending our witness about ten copies of each update, 16,180 a day, and after the fix it sends one, 1,698 a day.

Paper: [https://markovianprotocol.com/measurements/sm-004.html](https://markovianprotocol.com/measurements/sm-004.html) · DOI [10.5281/zenodo.23071390](https://doi.org/10.5281/zenodo.23071390) · log leaf [9097](https://log.markovianprotocol.com/leaf/9097) · Reproduced and confirmed by the operator

## Run it

```
python3 check.py              # inclusion and consistency proofs, malformed-request test (network)
python3 verify_note.py        # checkpoint signature (needs the cryptography package)
python3 distributor_daily.py  # daily counts; reads our witness database, runs only on the witness host
```

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

Three entries and one history proof out of 388,768 were checked. That shows the endpoints answer correctly; it doesn't show the ledger never showed anyone a different version. Only more independent witnesses cover that. The volume numbers come from our witness's own database, which only we can read.
