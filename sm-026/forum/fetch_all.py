#!/usr/bin/env python3
"""SM-026 Forum census: fetch every UDRP decision in listing/all_udrp_2025_2026.json (Forum's own search API, decided
cases dated 1 Jan 2025 to 24 Oct 2026) into raw/<caseNumber>.htm. Resumable; 1.2 s between requests."""
import json, os, time, urllib.request
a = json.load(open("listing/all_udrp_2025_2026.json")); os.makedirs("raw", exist_ok=True)
for x in a:
    fn = f"raw/{x['caseNumber']}.htm"
    if os.path.exists(fn): continue
    try:
        b = urllib.request.urlopen(urllib.request.Request(x["url"], headers={"User-Agent": "markovianprotocol.com second-measurement census (hello@markovianprotocol.com)"}), timeout=60).read()
        open(fn, "wb").write(b)
    except Exception as e: print(x["caseNumber"], e, flush=True)
    time.sleep(1.2)
print("done", flush=True)
