# Optimizely, one week on: rechecking Report URI's numbers, 22 Nov 2026

This supports Scott Helme's point. A week after malicious code was served through Optimizely to 178 organisations, every Optimizely snippet we could capture on their sites is clean, 86 of the 162 we could reach still run Optimizely on their home page, and 45 of the 48 whose Content Security Policy blocks the attacker's script also allow `'unsafe-eval'`, the setting that let the inline copy run at HSBC.

Report URI's post of 16 November (Helme, "World's Largest Brands Infected With Malware Via Optimizely") lists the 178 organisations and 253 hosts, scores their CSPs, and gives the attacker's wallets. Optimizely's status page says on 18 November: "No malicious code remains in our systems." We loaded every listed host in a real browser on 22 November and checked the wallets on their own chains.

**Snippets.** 162 organisations' sites loaded (224 of 253 hosts; 16 organisations blocked us or timed out, including Salesforce, Tableau and ASOS). 86 run Optimizely on the home page: 55 loaded a snippet we captured (58 distinct files, 3 served from the customer's own domain) and 31 more set `window.optimizely`. None of the 58 contains `1688360.cc`, its base64 forms, `webshell.lol`, the `.icu` exploit hosts or the payload's markers, and no page asked for any attacker host. That agrees with Optimizely's statement, for the snippets we can see. 35 of the 58 carry customer Project JavaScript, the field the attacker wrote into.

**Content Security Policy,** by organisation, scored with Report URI's categories (an organisation with several hosts counts once, at its least protected host):

| | Report URI, 16 Nov (159 orgs) | Us, 22 Nov (162 orgs) |
|---|---|---|
| No CSP at all | 68 | 47, plus 17 with a report-only CSP that blocks nothing |
| CSP allowed the payload and the data theft | 50 | 47 |
| Payload ran, connect-src blocked the theft | 17 | 3 |
| Payload blocked | 24 | 48 |

The two columns aren't the same test. "Payload" here means loading `https://1688360.cc/track.js`. Report URI also counted the inline copy of the payload, which runs through `eval`, and only some snippets carried it; which ones isn't published, so we can't score it per site. What we can say: 45 of the 48 organisations whose CSP blocks `track.js` allow `'unsafe-eval'`, so the inline copy would have run on them, as it did at HSBC; Report URI notes that Optimizely's documentation tells customers to allow it. The other three (Takeda, Takeda Oncology and CohnReznick) block both. A week is also long enough for some sites to have changed their policy.

**Wallets.** The receipts Report URI published hold, with one addition:

| Wallet | Report URI, 17 Nov | On chain, 22 Nov |
|---|---|---|
| BTC 19g9rZ…c3kW | 0.08528 BTC | 0.08528782 BTC, all received 16 Nov, all sent on 17 Nov 05:39 UTC; nothing since |
| LTC ltc1q3w…red5 | 17.02 LTC, 3 payments | the same 17.02356566 LTC, swept 17 Nov 04:11 UTC; **then 1.7065 LTC more on 17 Nov 10:18 UTC** (tx cad80972…dabd), still unspent |
| TRON THvs6p…qxa | 662.9 USDT + 183.7 TRX | 662.88726 USDT + 183.7019 TRX received 16 Nov |
| ETH 0xC402…884e | 0.0553 ETH | 0.055274 ETH received 16 Nov 17:28 UTC |
| SOL, TON, BCH, DOGE | listed, no receipts given | no transactions at all |

The late Litecoin payment arrived after the attacker emptied the wallet, about ten hours after `1688360.cc` stopped resolving, and an hour after Report URI's last update. We can't tell who sent it. BSC wasn't checked (no keyless explorer).

Limits: home pages only, so an organisation that runs Optimizely on other pages counts as not seen; one load per host from one network on one day; 16 organisations unreachable.

Files: parse_list.py (organisations and hosts from Report URI's list), crawl.py (headless Chromium: CSP, snippets, requests), analyze.py (every number above), fetch_chain.py and chain/ (explorer responses as read), run_2026-11-22/ (crawl.jsonl, the 58 snippets), results.json, SHA256SUMS. Report URI's post: https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/ · Optimizely's status: https://status.optimizely.com/incidents/ftw0fh9wx43z
