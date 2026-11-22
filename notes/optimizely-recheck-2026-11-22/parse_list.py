#!/usr/bin/env python3
"""Organisation -> sector + hosts from Report URI's 16 Nov 2026 'Full list'. Usage: parse_list.py LIST.txt > orgs.json"""
import re, sys, json
t = open(sys.argv[1]).read(); s = t[t.index("Full list"):t.index("The earlier webshell.lol wave")]
L = [l.strip() for l in s.splitlines() if l.strip()][2:]
orgs, sector, i = [], None, 0
while i < len(L):
    m = re.match(r"^(.+) \((\d+)\)$", L[i])
    if m and i + 2 < len(L) and L[i+1] == "Organisation" and L[i+2] == "Domains":
        sector = m.group(1); i += 3; continue
    org, doms = L[i], L[i+1] if i + 1 < len(L) else ""
    hosts = re.findall(r"\b(?:[a-z0-9-]+\.)+[a-z]{2,}\b", doms)
    assert hosts, (org, doms)
    orgs.append({"org": org, "sector": sector, "hosts": hosts}); i += 2
json.dump(orgs, sys.stdout, indent=1)
