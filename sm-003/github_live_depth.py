# For each live GitHub SBOM with edges, count DEPENDS_ON edges that do not start at the root (the DESCRIBES target).
import json, subprocess
R = [r for r in json.load(open("github_live.json")) if not r.get("error") and r["depends_on"] > 0]
out = []
for r in R:
    raw = subprocess.run(["gh", "api", f"repos/{r['repo']}/dependency-graph/sbom"], capture_output=True, text=True).stdout
    try:
        s = json.loads(raw)["sbom"]
    except (ValueError, KeyError):          # the endpoint 404s for repositories whose dependency graph is off
        continue
    root = {x["relatedSpdxElement"] for x in s["relationships"] if x["relationshipType"] == "DESCRIBES"}
    dep = [x for x in s["relationships"] if x["relationshipType"] == "DEPENDS_ON"]
    out.append((r["repo"], r["lang"], len(dep), sum(1 for x in dep if x["spdxElementId"] not in root)))
json.dump(out, open("github_live_depth.json", "w"))
print(sum(1 for o in out if o[3] > 0), "of", len(out), "have package-to-package edges")
