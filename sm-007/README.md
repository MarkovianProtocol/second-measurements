# SM-007: Docker promised signed attestations for every Official Image. The attestations arrived; the signatures didn't

Docker Official Images are the most-pulled containers on the internet: nginx, python, postgres, alpine. In April 2024 Docker said it was committed to shipping signed SBOMs and build provenance for all of them. We checked every one. The attestations are there on 7,368 of 7,372 Linux images. Not one of the 45 we sampled is signed. Docker's older signing service shuts down on 8 December, and the replacement it announced in July 2025 hasn't appeared.

Paper: [https://markovianprotocol.com/measurements/sm-007.html](https://markovianprotocol.com/measurements/sm-007.html) · DOI [10.5281/zenodo.23122993](https://doi.org/10.5281/zenodo.23122993) · log leaf [9173](https://log.markovianprotocol.com/leaf/9173)

## Evidence

`exhibits/` holds saved copies of every source quoted in the paper and the raw registry / CVE records shown, with `SHA256SUMS` and the fetch time.

## Run it

Python 3 standard library. Docker Hub's registry allows 100 anonymous manifest reads an hour, so the signing check is paced.

```
git clone --depth 1 https://github.com/docker-library/official-images oi
python3 census2.py      # every image entry: platforms vs attestations (Hub tag API)
python3 signing.py 50   # 50 random repos: attestation media type and referrers
python3 probe.py nginx:latest python:3.13
```

## Limits

Signing was checked on a random 45 of 137 repositories, one tag each; coverage on every entry. An unsigned attestation isn't a wrong one; the gap is that nobody outside Docker can prove it isn't.
