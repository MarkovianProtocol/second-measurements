# Evert Pot, "A consistent(-ish) npm dependency graph" (vlt, 27 Oct 2026): recompute, 31 Oct 2026

This supports the post. Over five weekdays, 26–30 October, 107,673 of 527,331 new npm versions (20.4%) were published while one of their dependencies had no published version that satisfied the range. Each day came out between 19.0% and 21.4%. Of all new versions, 95.8% were installable within five minutes, the post's 96%. The daily volume is lower than the post's: 100,000 to 110,000 versions a day, against 175,891.

The sentences: "As I'm writing this article, in the last 24 hours 175,891 new versions were released, and 22% of those (38,995) landed on the registry with a dependency that could not be resolved." And: "For 96% of publish events we are able to facilitate a coordinated, smooth release process of the interdependent packages within a few minutes."

Our path: npm's public replication feed (replicate.npmjs.com, `_changes`) for every package changed since 25 October 23:00 UTC, 154,043 packages; the full registry document for each, and for each of their dependencies, from registry.npmjs.org. A new version counts as unresolved when one of its direct `dependencies`, `peerDependencies` or `optionalDependencies` had no version satisfying the range (npm's own semver rules) published at or before the new version's publish time. Git, URL and file dependencies are skipped, as the post skips them.

| UTC day | New versions | Unresolved at publish | Share |
|---|---|---|---|
| Mon 26 Oct | 103,540 | 19,653 | 19.0% |
| Tue 27 Oct | 108,077 | 23,092 | 21.4% |
| Wed 28 Oct | 106,195 | 21,749 | 20.5% |
| Thu 29 Oct | 109,745 | 22,141 | 20.2% |
| Fri 30 Oct | 99,774 | 21,038 | 21.1% |
| All five | 527,331 | 107,673 | 20.4% |

How long the wait was, for the 107,673:

| Missing dependency appeared | Versions |
|---|---|
| Within 1 minute | 37,692 |
| Within 5 minutes | 85,601 |
| Within 1 hour | 97,977 |
| Later (longest 3.9 days) | 451 |
| Never (as of the read) | 9,245 |

- With the versions that never waited, 505,259 of 527,331 (95.8%) were installable within five minutes of publication. The remaining 22,072 (4.2%) waited longer or are still waiting.
- The 9,245 that never resolved: 5,427 name a package that doesn't exist on npm, 3,789 a range no published version meets, 631 a `workspace:` range that only works inside the publisher's monorepo. That fits the post's remainder of "dependencies (or peer or optional dependencies) that don't exist at all."
- The wait comes from bulk releases. Median wait 1.4 minutes, 90th percentile 6.2, 99th 42.5. 51,656 of the 107,673 are prereleases (canary, PR and nightly builds). The ten busiest scopes account for 13.6%: @teambit 2,405, @open-mercato 2,157, @stacksjs 1,578, @cleartrip 1,537, @domicile-desktop 1,490, @clerk 1,421, @cedarjs 1,237, @paperclipai 961, @bitgo-beta 932, @agimon-ai 925.
- The post's Effect example shows up: 100 of 128 new @effect versions that week were unresolved at publish. @aws-sdk: 182 of 2,441.
- Volume: no day reached 110,000 new versions. Only 204 versions from Friday's window were unpublished afterwards, so removals don't close the gap. Our count is versions in the registry documents' publish times; whether the post's 175,891 counts publish events from vlt's replication (which could include retries or changes other than new versions) we can't tell from outside.

Not covered: transitive dependencies (the post's hold looks at those; we check direct dependencies only); delay between publication and availability (npm's scanning and CDN; we use the publish time on both sides); the 24 hours the post was written in, which we can't place exactly.

Files: recount.js (fetch and count; needs Node and npm's bundled semver), analyze.py (the tables), analysis.json, summary.json, rows.jsonl.gz (each new version with its unresolved dependencies and the time the first satisfying version appeared), ids.txt.gz (the 154,043 packages read), SHA256SUMS.
