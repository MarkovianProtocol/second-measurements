# Kubernetes: "The Kubernetes release process signs all binary artifacts (tarballs, SPDX files, standalone binaries) by using
# cosign's keyless signing." For the latest patch of each minor from v1.26, check that every standalone binary on dl.k8s.io
# has a .sig and a .cert beside it (HEAD requests). Stdlib only.
import json, urllib.request, urllib.error, concurrent.futures as cf
def head(u):
    try:
        with urllib.request.urlopen(urllib.request.Request(u, method="HEAD"), timeout=30) as r: return r.status
    except urllib.error.HTTPError as e: return e.code
    except Exception: return "err"
def text(u):
    try: return urllib.request.urlopen(u, timeout=30).read().decode().strip()
    except Exception: return None
BINS = {"linux": ["kubectl", "kubeadm", "kubelet", "kube-apiserver", "kube-controller-manager", "kube-scheduler", "kube-proxy"],
        "darwin": ["kubectl"], "windows": ["kubectl.exe", "kubeadm.exe", "kubelet.exe", "kube-proxy.exe"]}
ARCH = {"linux": ["amd64", "arm64", "ppc64le", "s390x"], "darwin": ["amd64", "arm64"], "windows": ["amd64"]}
rows = []
for minor in range(26, 40):
    v = text(f"https://dl.k8s.io/release/stable-1.{minor}.txt")
    if not v or not v.startswith("v1."): continue
    jobs = []
    for os_, bins in BINS.items():
        for a in ARCH[os_]:
            for b in bins:
                base = f"https://dl.k8s.io/release/{v}/bin/{os_}/{a}/{b}"
                jobs.append((v, os_, a, b, base))
    def check(j):
        v, os_, a, b, base = j
        st = head(base)
        return {"version": v, "os": os_, "arch": a, "binary": b, "binary_status": st,
                "sig": head(base + ".sig") if st == 200 else None, "cert": head(base + ".cert") if st == 200 else None}
    with cf.ThreadPoolExecutor(8) as ex: rows += list(ex.map(check, jobs))
    got = [r for r in rows if r["version"] == v and r["binary_status"] == 200]
    print(v, "binaries", len(got), "with .sig+.cert", sum(r["sig"] == 200 and r["cert"] == 200 for r in got), flush=True)
json.dump(rows, open("k8s_sigs.json", "w"), indent=1)
got = [r for r in rows if r["binary_status"] == 200]
miss = [r for r in got if not (r["sig"] == 200 and r["cert"] == 200)]
print(f"\nall: {len(got)} binaries, {len(got) - len(miss)} with both files; missing: {[(r['version'], r['os'], r['arch'], r['binary'], r['sig'], r['cert']) for r in miss][:20]}")


# ---- part 2: verify one kubectl signature per release with our own code ----
