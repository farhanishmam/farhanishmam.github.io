#!/usr/bin/env python3
"""Generate full-resolution, pixel-identical WebP research figures.

Requires Pillow with WebP support: python3 -m pip install Pillow
Run from any directory: python3 scripts/optimize-research-images.py
The generated assets and manifest are committed; Jekyll needs no image plugins.
"""

import json
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PAGES = ("_pages/about.md", "_pages/publications.html")


def main():
    sources = sorted({
        src
        for page in PAGES
        for src in re.findall(r"/images/[^'\"<>\s]+\.png", (ROOT / page).read_text(), re.I)
    })
    output_dir = ROOT / "images/optimized"
    output_dir.mkdir(exist_ok=True)
    manifest = {}
    original_bytes = optimized_bytes = 0

    for src in sources:
        original = ROOT / src.lstrip("/")
        output = output_dir / (original.stem + ".webp")
        with Image.open(original) as image:
            manifest[src] = {"width": image.width, "height": image.height}
            # WebP cannot store PNG's standalone gamma/chromaticity chunks.
            # An ICC profile or explicit sRGB declaration defines the colors;
            # otherwise keep the PNG to preserve its browser-rendered appearance.
            if ("icc_profile" not in image.info and "srgb" not in image.info and
                    ("gamma" in image.info or "chromaticity" in image.info)):
                output.unlink(missing_ok=True)
                size = original.stat().st_size
                original_bytes += size
                optimized_bytes += size
                print(f"{original.name}: keeping PNG to preserve color metadata")
                continue
            # Keep the color profile and EXIF, but omit bulky editor XMP.
            metadata = {
                key: image.info[key]
                for key in ("icc_profile", "exif")
                if key in image.info
            }
            image.save(output, "WEBP", lossless=True, exact=True, quality=100,
                       method=6, **metadata)
            with Image.open(output) as decoded:
                if (decoded.size != image.size or
                        decoded.convert("RGBA").tobytes() != image.convert("RGBA").tobytes()):
                    raise ValueError(f"Lossless verification failed: {src}")
                if decoded.info.get("icc_profile") != image.info.get("icc_profile"):
                    raise ValueError(f"Color profile verification failed: {src}")
                # WebP omits PNG's six-byte EXIF header; compare parsed EXIF.
                if decoded.getexif().tobytes() != image.getexif().tobytes():
                    raise ValueError(f"EXIF verification failed: {src}")
        before, after = original.stat().st_size, output.stat().st_size
        if after < before:
            manifest[src]["webp"] = "/" + output.relative_to(ROOT).as_posix()
        else:
            # Never make a figure slower if its PNG is already smaller.
            output.unlink()
            after = before
        original_bytes += before
        optimized_bytes += after
        print(f"{original.name}: {before:,} -> {after:,} bytes")

    (ROOT / "_data/research_images.json").write_text(
        json.dumps(manifest, indent=2) + "\n"
    )
    savings = 100 * (1 - optimized_bytes / original_bytes)
    print(f"Total: {original_bytes:,} -> {optimized_bytes:,} bytes ({savings:.1f}% smaller)")


if __name__ == "__main__":
    main()
