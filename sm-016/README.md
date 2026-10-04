# SM-016 — TRI forms due 1 July vs EPA's enforcement

Paper: https://markovianprotocol.com/measurements/sm-016.html · DOI https://doi.org/10.5281/zenodo.23130553 · page sha256 in log leaf 9276

Scripts: fetch_tri.sh YEAR COUNT (Envirofacts TRI_REPORTING_FORM pages), fetch_facilities.sh (TRI_FACILITY), analyze_tri.py YEARS (late forms/facilities), cases.py (EPCRA 313 cases from ECHO case_downloads.zip), eventual.py YEARS (join late facilities to cases), pounds.py YEARS (weight late forms by reported releases, from EPA Basic Data Files in basic/).
Exhibits: rule texts (40 CFR 372.30, 40 CFR 19.4, 42 USC 11045, 28 USC 2462), EPA RFI 2025, 1992/2017 enforcement response policy, Envirofacts column definition, EPA Region 4 release, TRI basic-files page; results JSON. SHA256SUMS in exhibits/.
