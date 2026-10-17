#!/usr/bin/env python3
"""Write every paper's status from site/measurements/statuses.json into the four places that show it:
index.html (status cell: short text + colour), track-record.html (status column: long text; registry.py reads it),
repo/README.md (status column: long) and hf/measurements.jsonl (status field: long). Prints what changed.
python3 -I status_sync.py   (deploy_measurements.sh runs it before the registry is rebuilt)"""
import html, json, os, re
B = os.path.dirname(os.path.abspath(__file__)); M = os.path.join(B, "site", "measurements")
S = {k: v for k, v in json.load(open(os.path.join(M, "statuses.json"), encoding="utf-8")).items() if k.startswith("SM-")}
E = lambda t: html.escape(t, quote=False).replace("’", "&rsquo;")
changed = []
def rw(path, fn):
    if not os.path.exists(path): return
    s = open(path, encoding="utf-8").read(); t = fn(s)
    if t != s: open(path, "w", encoding="utf-8").write(t)
def index(s):
    for sid, v in S.items():
        pat = re.compile(r'(<tr><td class="o">' + sid + r'</td>(?:(?!</tr>).)*?<td class="st")(?: style="color:var\(--\w+\)")?>([^<]*)(</td></tr>)', re.S)   # one row only
        m = pat.search(s)
        if not m: continue
        new = m.group(1) + f' style="color:var(--{v["color"]})">' + E(v["short"]) + m.group(3)
        if m.group(0) != new: changed.append(f"index {sid}")
        s = s[:m.start()] + new + s[m.end():]
    return s
def track(s):
    i = s.find("<th>ID</th>"); j = s.find("</table>", i); t = s[i:j]
    for sid, v in S.items():
        for m in re.finditer(r"<tr>(.*?)</tr>", t, re.S):
            cs = list(re.finditer(r"(<td[^>]*>)(.*?)(</td>)", m.group(1), re.S))
            if len(cs) >= 5 and re.sub("<[^>]+>", "", cs[0].group(2)).strip() == sid:
                if html.unescape(cs[4].group(2)) != v["long"]: changed.append(f"track {sid}")
                row = m.group(1); c = cs[4]
                newrow = row[:c.start(2)] + E(v["long"]) + row[c.end(2):]
                t = t.replace(m.group(0), "<tr>" + newrow + "</tr>", 1); break
    return s[:i] + t + s[j:]
def readme(s):
    for sid, v in S.items():
        m = re.search(r"^\| \[" + sid + r"\]\([^)]*\) \| [^|]* \| ([^|]*) \|", s, re.M)
        if m and m.group(1).strip() != v["long"]:
            changed.append(f"readme {sid}"); s = s[:m.start(1)] + v["long"] + " " + s[m.end(1):]
    return s
def hf(s):
    out = []
    for l in s.splitlines():
        r = json.loads(l)
        if r.get("id") in S and r.get("status") != S[r["id"]]["long"]:
            changed.append(f"hf {r['id']}"); r["status"] = S[r["id"]]["long"]
        out.append(json.dumps(r, ensure_ascii=False))
    return "\n".join(out) + "\n"
rw(os.path.join(M, "index.html"), index); rw(os.path.join(M, "track-record.html"), track)
rw(os.path.join(B, "repo", "README.md"), readme); rw(os.path.join(B, "hf", "measurements.jsonl"), hf)
print("status_sync:", len(changed), "changed", changed)
