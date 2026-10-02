# Insert Open Graph / Twitter card tags into a measurement page head (idempotent).
import re, sys, html as H
def tags(page, title, desc):
    base = "https://markovianprotocol.com/measurements/"
    url = base + ("" if page == "index" else page + ".html"); img = base + "cards/" + page + ".png"
    t = H.escape(H.unescape(title), quote=True); d = H.escape(H.unescape(desc), quote=True)
    return ("\n".join([f'<meta property="og:type" content="article">', f'<meta property="og:site_name" content="Markovian Protocol">',
        f'<meta property="og:title" content="{t}">', f'<meta property="og:description" content="{d}">',
        f'<meta property="og:url" content="{url}">', f'<meta property="og:image" content="{img}">',
        '<meta property="og:image:width" content="1200">', '<meta property="og:image:height" content="630">',
        '<meta name="twitter:card" content="summary_large_image">', '<meta name="twitter:site" content="@MarkovProtocol">',
        f'<meta name="twitter:title" content="{t}">', f'<meta name="twitter:description" content="{d}">',
        f'<meta name="twitter:image" content="{img}">']) + "\n")
def apply(s, page):
    s = re.sub(r'<meta (property="og:[^"]*"|name="twitter:[^"]*") content="[^"]*">\n', "", s)
    title = re.sub(r"\s+—\s+Markovian Protocol$", "", re.search(r"<title>(.*?)</title>", s, re.S).group(1).strip())
    title = re.sub(r"^SM-00\d\s+", "", title)
    m = re.search(r'<meta name="description" content="([^"]*)">\n?', s)
    desc = m.group(1) if m else title
    return s[:m.end()] + tags(page, title, desc) + s[m.end():] if m else s.replace("</head>", tags(page, title, desc) + "</head>", 1)
if __name__ == "__main__":
    for f in sys.argv[1:]:
        page = f.rsplit("/", 1)[-1][:-5]
        src = open(f).read(); out = apply(src, page); open(f, "w").write(out)
