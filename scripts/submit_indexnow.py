#!/usr/bin/env python3
"""
Submit sitemap URLs to IndexNow (Bing/Yandex).

Covers all locales (es unprefixed, en / pt-br / it) plus llms.txt —
aligned with app/sitemap.ts.

Usage:
  python scripts/submit_indexnow.py --dry-run
  python scripts/submit_indexnow.py
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.request

SITE_URL = os.environ.get(
    "NEXT_PUBLIC_SITE_URL", "https://germanbonacchi.vercel.app"
).rstrip("/")
INDEXNOW_KEY = "a32eff713dgb0nacchi9e2b1d84"

# URL prefixes matching lib/paths.ts LOCALE_URL_SLUGS (es = no prefix).
LOCALE_PREFIXES = ("", "/en", "/pt-br", "/it")

# Paths without locale prefix (same set as app/sitemap.ts + llms.txt).
CONTENT_PATHS = (
    "/",
    "/projects",
    "/projects/carrefour",
    "/projects/cetrogar",
    "/projects/medis",
    "/projects/rouge",
)


def localized_url(prefix: str, path: str) -> str:
    if path == "/":
        return f"{SITE_URL}{prefix}/" if not prefix else f"{SITE_URL}{prefix}"
    return f"{SITE_URL}{prefix}{path}"


def build_url_list() -> list[str]:
    urls = [
        localized_url(prefix, path)
        for path in CONTENT_PATHS
        for prefix in LOCALE_PREFIXES
    ]
    urls.append(f"{SITE_URL}/llms.txt")
    return urls


def main() -> None:
    parser = argparse.ArgumentParser(description="Submit URLs to IndexNow")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print payload without submitting",
    )
    args = parser.parse_args()

    urls = build_url_list()
    payload = {
        "host": SITE_URL.replace("https://", "").replace("http://", ""),
        "key": INDEXNOW_KEY,
        "keyLocation": f"{SITE_URL}/{INDEXNOW_KEY}.txt",
        "urlList": urls,
    }

    print(json.dumps(payload, indent=2))
    print(f"\n{len(urls)} URLs", file=sys.stderr)
    if args.dry_run:
        print("\n[dry-run] No request sent.")
        return

    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            print(f"IndexNow status: {resp.status}")
    except Exception as exc:  # noqa: BLE001 — CLI feedback
        print(f"IndexNow error: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
