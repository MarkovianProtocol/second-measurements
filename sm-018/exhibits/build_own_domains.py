#!/usr/bin/env python3
"""Build own_domains.json: CNA shortName -> domains counted as the CNA's own site. Sources: the CVE Program partner
roster (roster/CNAsList.json: securityAdvisories, disclosurePolicy, contact form/contact URLs, contact email domains;
generic hosts removed, ports stripped) merged with the hand map from the first draft. VulnCheck is left out on purpose:
its advisory is dated the publication day, so its public date is another party's disclosure (rule 4.5.1.6).
python3 -I build_own_domains.py roster/CNAsList.json own_domains.json"""
import json, sys, urllib.parse, collections
cn = json.load(open(sys.argv[1]))
HAND = {"dell": ["dell.com"], "drupal": ["drupal.org"], "zdi": ["zerodayinitiative.com"], "Arista": ["arista.com"], "Tanium": ["tanium.com"], "GRAFANA": ["grafana.com"], "suse": ["suse.com"], "redhat": ["redhat.com"], "microsoft": ["microsoft.com"], "adobe": ["adobe.com"], "cisco": ["cisco.com"], "f5": ["f5.com"], "juniper": ["juniper.net"], "palo_alto": ["paloaltonetworks.com"], "vmware": ["vmware.com", "broadcom.com"], "Zoom": ["zoom.com", "zoom.us"], "fedora": ["fedoraproject.org"], "freebsd": ["freebsd.org"], "XEN": ["xenproject.org", "xen.org"], "OX": ["open-xchange.com"], "canonical": ["ubuntu.com"], "debian": ["debian.org"], "apple": ["apple.com"], "Google": ["google.com", "chromium.org", "android.com"], "mozilla": ["mozilla.org"], "oracle": ["oracle.com"], "ibm": ["ibm.com"], "sap": ["sap.com"], "siemens": ["siemens.com"], "schneider": ["se.com"], "fortinet": ["fortiguard.com", "fortinet.com"], "jenkins": ["jenkins.io"], "GitLab": ["gitlab.com"], "atlassian": ["atlassian.com"], "hp": ["hp.com"], "hpe": ["hpe.com"], "lenovo": ["lenovo.com"], "intel": ["intel.com"], "nvidia": ["nvidia.com"], "qualcomm": ["qualcomm.com"], "Samsung": ["samsung.com"], "huawei": ["huawei.com"], "WatchGuard": ["watchguard.com"], "Deltaww": ["deltaww.com"], "AMD": ["amd.com"], "HCL": ["hcl-software.com", "hcltechsw.com"], "Patchstack": ["patchstack.com"], "mattermost": ["mattermost.com"], "GitHub_M": ["github.com"], "Go": ["go.dev", "golang.org"], "jetbrains": ["jetbrains.com"], "tenable": ["tenable.com"], "Checkmarx": ["checkmarx.com"], "sonicwall": ["sonicwall.com"], "trendmicro": ["trendmicro.com"], "ivanti": ["ivanti.com"], "cert@vde.com": ["vde.com", "cert.vde.com"], "wordfence": ["wordfence.com"], "Wordfence": ["wordfence.com"], "GitHub_P": ["github.com"], "mitre": ["mitre.org", "cve.org"], "cisa-cg": ["cisa.gov"]}
GENERIC = {"github.com", "gitlab.com", "google.com", "cve.org", "mitre.org", "nvd.nist.gov", "twitter.com", "x.com", "linkedin.com", "groups.io", "gmail.com", "googlegroups.com", "wordpress.org", "youtube.com", "sourceforge.net", "bitbucket.org", "huntr.com", "huntr.dev",
           "about.google", "bugcrowd.com", "gitee.com", "github.io", "googleapis.com", "hackerone.com", "me.com", "openwall.com", "sharepoint.com", "site.com"}
def reg(host):
    host = host.lower().strip().split(":")[0]; host = host[4:] if host.startswith("www.") else host
    parts = host.split(".")
    if len(parts) >= 3 and parts[-2] in ("co", "com", "org", "net", "gov", "ac", "edu", "or") and len(parts[-1]) == 2: return ".".join(parts[-3:])
    return ".".join(parts[-2:]) if len(parts) >= 2 else host
out = {}
for e in cn:
    sn = e["shortName"]; doms = set()
    for a in e.get("securityAdvisories", {}).get("advisories", []) + e.get("securityAdvisories", {}).get("alerts", []) + e.get("disclosurePolicy", []):
        u = a.get("url", "")
        if u.startswith("http"): doms.add(reg(urllib.parse.urlparse(u).netloc))
    for c in e.get("contact", []):
        for f in c.get("form", []) + c.get("contact", []):
            u = f.get("url", "")
            if u.startswith("http"): doms.add(reg(urllib.parse.urlparse(u).netloc))
        for m in c.get("email", []):
            a = m.get("emailAddr", "")
            if "@" in a: doms.add(reg(a.split("@")[1]))
    doms = {d for d in doms if d and d not in GENERIC}
    if sn == "VulnCheck": continue
    if doms or sn in HAND: out[sn] = sorted(doms | set(HAND.get(sn, [])))
for sn, d in HAND.items(): out.setdefault(sn, d)
json.dump({"note": "CNA shortName -> domains counted as the CNA's own site; built by build_own_domains.py from roster/CNAsList.json merged with the first draft's hand map. VulnCheck omitted on purpose (4.5.1.6). cve72.py matches keys to assignerShortName ignoring case, spaces, underscores and dots.",
           "generic_excluded": sorted(GENERIC), "domains": out}, open(sys.argv[2], "w"), indent=1)
print("CNAs mapped", len(out), "of", len(cn), "roster entries")
