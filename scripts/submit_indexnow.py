#!/usr/bin/env python3
"""
Submit sitemap URLs to IndexNow (Bing/Yandex).

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

URLS = [
    f"{SITE_URL}/",
    f"{SITE_URL}/projects",
    f"{SITE_URL}/projects/carrefour",
    f"{SITE_URL}/projects/cetrogar",
    f"{SITE_URL}/projects/medis",
    f"{SITE_URL}/projects/rouge",
    f"{SITE_URL}/llms.txt",
]


def main() -> None:
    parser = argparse.ArgumentParser(description="Submit URLs to IndexNow")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print payload without submitting",
    )
    args = parser.parse_args()

    payload = {
        "host": SITE_URL.replace("https://", "").replace("http://", ""),
        "key": INDEXNOW_KEY,
        "keyLocation": f"{SITE_URL}/{INDEXNOW_KEY}.txt",
        "urlList": URLS,
    }

    print(json.dumps(payload, indent=2))
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
