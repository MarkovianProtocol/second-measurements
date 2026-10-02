# SM-004: We tried to catch whisper.online's ledger out. It passed every test, and we found it sending us ten copies of everything

whisper.online runs a public ledger meant to prove nothing in it is ever quietly changed. We checked it the hard way, with our own code instead of theirs: inclusion proofs fold to the signed root, history proofs hold, malformed requests get refused. Everything passed. Along the way we noticed their system was sending our witness about ten copies of every update, 16,180 a day. They fixed it: one copy each, 1,698 a day.

Paper: [https://markovianprotocol.com/measurements/sm-004.html](https://markovianprotocol.com/measurements/sm-004.html) · DOI [10.5281/zenodo.23071390](https://doi.org/10.5281/zenodo.23071390) · log leaf [9119](https://log.markovianprotocol.com/leaf/9119) · Reproduced and confirmed by the operator

## Evidence

`exhibits/` holds saved copies of every source quoted on the paper page, with `SHA256SUMS` and the fetch time.

## Run it

```
python3 check.py              # inclusion and consistency proofs, malformed-request test (network)
python3 verify_note.py        # checkpoint signature (needs the cryptography package)
python3 distributor_daily.py  # daily counts; reads our witness database, runs only on the witness host
```

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

Three entries and one history proof out of 388,768 were checked. That shows the endpoints answer correctly; it doesn't show the ledger never showed anyone a different version. Only more independent witnesses cover that. The volume numbers come from our witness's own database, which only we can read.
