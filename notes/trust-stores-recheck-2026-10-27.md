# Andrew Nesbitt, "Trust Stores Are Dependencies Too" (21 Oct 2026): recheck, 27 Oct 2026

This furthers the post. In nine of the bundle packages, every emSign ECC Root CA - G3 and AAA Certificate Services match the post reports is there, counted by a different route. Six days on, four of the nine have shipped releases without those roots; five have not.

The claim: "26 of the 29 bundle packages contain at least one root that Mozilla has removed from its programme and that is still inside its validity period."

Our path: the same package archives, read statically (no code run), compared with certifi, the Python package that copies Mozilla's list of roots trusted for websites. A root counts here if it appeared in any certifi release from 2015 to 2026, is missing from certifi 2026.10.23, and has not expired by 27 October 2026. The post counts roots CCADB marks as removed; certifi also drops roots Mozilla only stopped trusting for websites, so our counts run higher. Both are listed.

| Package | Version in the post | Removed, still valid (post) | Same, by certifi (ours) | eMudhra roots | Latest release, 27 Oct |
|---|---|---|---|---|---|
| excon (Ruby) | 1.7.3 | 3 | 3 | emSign G3 | 1.8.0: 0, emSign gone |
| grpc (Ruby) | 1.84.0 | 8 | 16 | emSign G3 | 1.85.0: 0, emSign gone |
| aws-sdk-core (Ruby) | 3.259.0 | 47 | 66 | AAA | 3.261.0: AAA gone, 65 left |
| botocore (Python) | 1.43.116 | 40 | 58 | AAA | 1.43.120: AAA gone, 57 left |
| honeybadger (Ruby) | 6.9.3 | 47 | 57 | AAA | 6.10.0: unchanged |
| httpclient (Ruby) | 2.9.0 | 59 | 76 | AAA | 2.9.0 is still the latest |
| stripe (Ruby) | 20.0.0 | 19 | 31 | emSign G3 | 20.0.0 is still the latest |
| httplib2 (Python) | 0.32.0 | 29 | 34 | AAA | 0.32.0 is still the latest |
| virtualenv (Python) | 21.14.12 | 13 | 23 | emSign G3 | 21.15.0 (27 Oct): unchanged |

- In virtualenv 21.15.0 the emSign root sits inside the pip 26.0.1 wheel it embeds (pip/_vendor/certifi/cacert.pem); in stripe 20.0.0, in lib/data/ca-certificates.crt.
- certifi 2026.10.23 itself carries neither root.

Not covered: the other 20 bundle packages, and whether each library actually loads its bundle by default (the post's gist sorts that out; this note only counts what is in the archive).

Files: scan.py, fetchpkgs.sh, scan_output_2026-10-27.txt, the package archives as downloaded, SHA256SUMS.
