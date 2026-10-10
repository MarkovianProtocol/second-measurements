"""Community and licensee for a list of call signs, from each station's FCC profile page.
python3 station_info.py summary.json  -> station_info.json (call sign -> {community, licensee})
"""
import json, re, sys, html, time, subprocess
import os
SERVICE = os.environ.get("FCC_SERVICE", "tv")   # tv | fm | am

UA = {"User-Agent": "Mozilla/5.0 (second-measurements; hello@markovianprotocol.com)"}

def info(cs):
    # the profile root answers 403 to urllib but 200 to curl (edge bot rules), so curl it
    h = subprocess.run(["curl", "-s", "-L", "-m", "60", "-A", UA["User-Agent"], f"https://publicfiles.fcc.gov/{SERVICE}-profile/{cs.lower()}"], capture_output=True, text=True).stdout
    t = re.sub(r"<[^>]+>", "\n", h); t = html.unescape(t)
    lines = [l.strip() for l in t.splitlines() if l.strip()]
    out = {"community": "", "licensee": ""}
    for i, l in enumerate(lines):
        if l == cs and i + 1 < len(lines) and re.search(r", [A-Z]{2}$", lines[i + 1]):
            out["community"] = lines[i + 1].title().replace(", " + lines[i + 1][-2:].title(), ", " + lines[i + 1][-2:])
            break
    for i, l in enumerate(lines):
        if l.lower() in ("licensee", "licensee name", "licensee:") and i + 1 < len(lines):
            out["licensee"] = lines[i + 1]; break
    if not out["licensee"]:
        m = re.search(r"Licensee[^<]{0,40}?</[^>]+>\s*<[^>]+>([^<]{3,120})<", h)
        if m: out["licensee"] = html.unescape(m.group(1)).strip()
    return out

if __name__ == "__main__":
    S = json.load(open(sys.argv[1] if len(sys.argv) > 1 else "summary.json"))
    # worst-late stations plus the longest-dormant "nothing for 2025" ones (empty folders first, then oldest newest-upload); capped per service
    dormant = sorted(S["no_2025_files"], key=lambda cs: (S["no_2025_detail"][cs]["last_upload"] or ""))[:40]
    want = sorted({cs for _, cs, _ in S["worst_overall"]} | set(dormant))
    try: have = json.load(open("station_info.json"))
    except FileNotFoundError: have = {}
    for cs in want:
        k = f"{SERVICE}:{cs}"
        if k in have and have[k].get("community"): continue
        if SERVICE == "tv" and cs in have and have[cs].get("community"): have[k] = have[cs]; continue
        try: have[k] = info(cs); print(k, have[k])
        except Exception as e: print(cs, "ERR", e)
        time.sleep(1)
    json.dump(have, open("station_info.json", "w"), indent=1)
