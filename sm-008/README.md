# SM-008: A federal directive says CISA rates every CVE. Since March, it has rated almost no Linux kernel bugs

In June, CISA told every federal agency to set its patching deadlines from three answers CISA says it publishes "for every CVE ID". Every one of the 1,731 actively exploited CVEs has them, and so does every other CVE in our sample. Linux kernel CVEs don't: 1 of the 158 we sampled since March carries them. That's about 5,000 kernel CVEs since the directive with nothing to set a deadline from.

Paper: [https://markovianprotocol.com/measurements/sm-008.html](https://markovianprotocol.com/measurements/sm-008.html) · log leaf [9124](https://log.markovianprotocol.com/leaf/9124)

## Evidence

`exhibits/` holds saved copies of every source quoted in the paper and the raw registry / CVE records shown, with `SHA256SUMS` and the fetch time.

## Run it

```
python3 cisa_ssvc.py kev      # every known-exploited CVE
python3 cisa_ssvc.py recent   # random 400 since 2026-06-10, split by source
python3 cisa_ssvc.py months   # 15 kernel CVEs per month (NVD API, ~10 min without a key)
```

## Limits

Kernel coverage comes from samples (53 since the directive, 15 per month); 1 of 158 since March puts the rate under about 4% at 95% confidence. We don't know whether the gap is a decision, a backlog, or a side effect of the CVSS pause CISA described.
