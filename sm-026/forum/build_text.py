#!/usr/bin/env python3
"""SM-026: turn fetched Forum decisions (raw/<caseNumber>.htm, from fetch_all.py) into forum_procedural_history.jsonl,
the text rebuild.py reads. python3 build_text.py [OUT.jsonl]   (run from this folder)"""
import json, os, re, sys
import extract
OUT = sys.argv[1] if len(sys.argv) > 1 else "forum_procedural_history.jsonl"
a = json.load(open("listing/all_udrp_2025_2026.json"))
with open(OUT, "w") as f:
    for x in a:
        fn = f"raw/{x['caseNumber']}.htm"
        if not os.path.exists(fn): continue
        t = extract.txt(fn); i = t.find("PROCEDURAL HISTORY")
        j = min([k for k in (t.find("RELIEF SOUGHT", i), t.find("FINDINGS", i)) if k > 0] or [i + 6000])
        dd = list(re.finditer(r"Dated\s?:?\s*" + extract.DATE, t, re.I))
        f.write(json.dumps({"caseNumber": x["caseNumber"], "url": x["url"], "status": x["status"], "decisionDate": x["decisionDate"][:10],
                            "procedural_history": t[i:j] if i >= 0 else "", "dated_line": dd[-1].group(0) if dd else None}) + "\n")
