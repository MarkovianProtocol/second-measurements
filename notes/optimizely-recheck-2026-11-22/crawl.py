#!/usr/bin/env python3
"""Optimizely one-week recheck, 22 Nov 2026. For every host in Report URI's 16 Nov list ("Full list" section), load https://<host>/
in headless Chromium (Playwright), record the main document's CSP headers (+ meta CSP), every request to an Optimizely snippet
(cdn.optimizely.com/js/<id>.js, cdn.optimizely.com/public/..., or <host>/js/<id>.js), save each snippet body, and note any request
to the attacker's hosts. Usage: crawl.py orgs.json OUTDIR"""
import re, sys, json, os, hashlib, asyncio, datetime as dt
from playwright.async_api import async_playwright
HOSTS = sorted({h for o in json.load(open(sys.argv[1])) for h in o["hosts"]})
OUT = sys.argv[2]; os.makedirs(os.path.join(OUT, "snippets"), exist_ok=True)
SNIP = re.compile(r"^https?://(cdn\.optimizely\.com/(js|public)/|[^/]+/js/\d{8,}\.js)")
BAD = re.compile(r"1688360\.cc|webshell\.lol|linkforge\.cc|\.icu/", re.I)
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
async def one(br, host, sem):
    async with sem:
        r = {"host": host, "at": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "snippets": [], "bad_requests": []}
        ctx = await br.new_context(user_agent=UA, locale="en-US"); page = await ctx.new_page()
        async def on_resp(resp):
            u = resp.url
            if SNIP.match(u) and resp.request.resource_type == "script":
                try: b = await resp.body()
                except Exception: b = b""
                h = hashlib.sha256(b).hexdigest()
                if b: open(os.path.join(OUT, "snippets", h + ".js"), "wb").write(b)
                r["snippets"].append({"url": u, "status": resp.status, "sha256": h, "bytes": len(b), "last_modified": resp.headers.get("last-modified")})
        page.on("response", lambda resp: asyncio.ensure_future(on_resp(resp)))
        page.on("request", lambda req: r["bad_requests"].append(req.url) if BAD.search(req.url) else None)
        try:
            main = await page.goto("https://" + host + "/", wait_until="load", timeout=45000)
            await page.wait_for_timeout(6000)
            if main:
                hs = await main.all_headers() if hasattr(main, "all_headers") else main.headers
                al = await main.headers_array()
                r["status"] = main.status; r["final"] = page.url
                r["csp"] = [h["value"] for h in al if h["name"].lower() == "content-security-policy"]
                r["csp_ro"] = [h["value"] for h in al if h["name"].lower() == "content-security-policy-report-only"]
            r["meta_csp"] = await page.eval_on_selector_all('meta[http-equiv="Content-Security-Policy" i]', "els => els.map(e => e.content)")
            r["optimizely_global"] = await page.evaluate("() => typeof window.optimizely !== 'undefined'")
        except Exception as e:
            r["err"] = str(e)[:160]
        await ctx.close(); return r
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(headless=True); sem = asyncio.Semaphore(6)
        res = await asyncio.gather(*[one(br, h, sem) for h in HOSTS])
        await br.close()
    with open(os.path.join(OUT, "crawl.jsonl"), "w") as f:
        for r in res: f.write(json.dumps(r) + "\n")
    print(len(res), "hosts;", sum(1 for r in res if r.get("status") == 200), "loaded 200;", sum(1 for r in res if r["snippets"]), "with an Optimizely snippet")
asyncio.run(main())
