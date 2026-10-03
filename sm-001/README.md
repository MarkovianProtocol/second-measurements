# SM-001: Google's Pixel ledger promised every release. January went missing, and stayed missing for eight months

Google keeps a public list that is supposed to include every software release for Pixel phones, so anyone can check their phone got the same software as everyone else. In September the entire January 2026 release was missing from it: 29 files. We told Google, they found an update run had been skipped, and they added them. One smaller problem is still open: 103 Android 17 entries (128 now) are filed under a label phones don't report, so a phone can't find its own entry.

Paper: [https://markovianprotocol.com/measurements/sm-001.html](https://markovianprotocol.com/measurements/sm-001.html) · DOI [10.5281/zenodo.23070510](https://doi.org/10.5281/zenodo.23070510) · log leaf [9176](https://log.markovianprotocol.com/leaf/9176) · Confirmed and fixed by Google

## Evidence

`exhibits/` holds saved copies of every source quoted on the paper page, with `SHA256SUMS` and the fetch time.

## Run it

Python 3 standard library only.

```
python3 check_public.py
# tree size 1163: {'logged': 963, 'logged as generic': 128}
```

The script does not verify the checkpoint signature. Verify it with Google's verifier or against the Armored Witness cosigned copy.

`SHA256SUMS` lists the scripts' hashes; they match the copies served next to the paper.

## Limits

We compared the log against one page. Software sent only as over-the-air updates, images Google has taken down, and images published anywhere else aren't covered.
