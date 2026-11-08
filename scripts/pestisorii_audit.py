import urllib.request
import json
import time

routes = [
    "/",
    "/en",
    "/servicii",
    "/en/services",
    "/pachete",
    "/en/packages",
    "/showcase",
    "/en/showcase",
    "/despre",
    "/en/about",
    "/contact",
    "/en/contact",
    "/portofoliu",
    "/en/portfolio",
    "/magazine-online",
    "/en/online-store",
    "/legal",
    "/en/legal",
]

base_url = "http://localhost:3000"
results = []

print("=== SWEEP PESTISORII REVERB ===")
for r in routes:
    url = base_url + r
    start = time.time()
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Pestisori-Bot/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            dur = int((time.time() - start) * 1000)
            code = resp.status
            results.append((r, code, f"{dur}ms", "OK"))
            print(f"✓ {r:20} -> {code} ({dur}ms)")
    except Exception as e:
        dur = int((time.time() - start) * 1000)
        results.append((r, "ERR", f"{dur}ms", str(e)))
        print(f"✗ {r:20} -> ERR ({e})")

print(f"\nTotal verificat: {len(results)} rute. Succes: {sum(1 for _, c, _, _ in results if c == 200)}/{len(results)}")
