# SM-014 — RPKI manifests past nextUpdate: registro.br's five-day window against validators' zero

Paper: https://markovianprotocol.com/measurements/sm-014.html · DOI and log leaf on the page

Scripts: rrdp_manifests.py (reads an RRDP snapshot, parses every manifest's thisUpdate/nextUpdate and the EE certificate's validity, lists lapsed publication points), run_rrdp.sh (the 3 and 8 October reads), analyze_rpki.py (per-repository counts, the Brazil table, the RIPE publication-service set), compare_oct8.py (what happened to the 30 lapsed on 3 October by 8 October), console_roas_check.py and routinator_vrps_check.py in exhibits/ (what rpki-client's console dump and Routinator's VRP output do with them).
Exhibits: RRDP snapshot manifests, rpki-client console dump and Routinator logs, RIPE validator pubPointIssues, registro.br's RPKI page as saved, RIPEstat lookups, daily re-reads, RFC 9286 text. SHA256SUMS in exhibits/.
