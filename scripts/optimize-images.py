#!/usr/bin/env python3
"""Generate responsive, near-lossless WebP variants of the images the site shows.

The site served every figure at full source resolution: a 2546px-wide PNG was
downloaded to fill a 376px-wide box on /publications/. Most of the win here is
simply matching the resolution the browser will draw, so this emits a width
ladder and lets the browser pick, plus one full-resolution lossless WebP per
image for the click-to-enlarge overlay.

Encoding uses cwebp -near_lossless, which runs in WebP's RGB lossless path: no
chroma subsampling, and a hard cap on per-channel error. Ordinary lossy WebP and
AVIF are smaller, but both default to 4:2:0 chroma, which visibly smears the
saturated text and thin rules these diagrams are made of. Every variant is
verified against the Lanczos-resampled source and re-encoded further up the
ladder if any channel drifts more than MAX_CHANNEL_ERROR.

Requires: Pillow, plus cwebp and oxipng on PATH.
    python3 -m pip install Pillow
    brew install webp oxipng
Run from anywhere:  python3 scripts/optimize-images.py
Generated assets and the manifest are committed; Jekyll needs no plugins.
"""

import json
import os
import re
import shutil
import struct
import subprocess
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "images/opt"
MANIFEST = ROOT / "_data/research_images.json"

# Pages scanned for the images that go through _includes/research-image.html.
PAGES = ("_pages/about.md", "_pages/publications.html", "_pages/teaching.html")

# Measured rendered widths (CSS px): /publications/ figures are 376 wide at
# desktop and at most 502 at the 560px breakpoint; the home page figures are
# 871. The ladder covers those at 1x-3x device pixel ratios.
FIGURE_WIDTHS = (400, 760, 1100, 1450, 1800)
# Experience-page logos sit in a 90px grid column.
LOGO_WIDTHS = (90, 180, 270)
LOGOS = {"/images/utah.png", "/images/penta.jpg", "/images/iut.jpg", "/images/yaana.jpg"}

# cwebp -near_lossless level. Its preprocessing only engages at the top lossless
# effort (-q 100 -m 6); any cheaper setting silently emits a fully lossless file
# at roughly double the size, so the two knobs are fixed together below.
NEAR_LOSSLESS = 40
# Largest per-channel drift tolerated against the resampled source, out of 255.
# Roughly 3%, an order of magnitude below anything visible on a flat diagram.
MAX_CHANNEL_ERROR = 8
SRGB_CHRM = (31270, 32900, 64000, 33000, 30000, 60000, 15000, 6000)


def channel_error(reference, decoded):
    """Return (max, mean) absolute per-channel difference between two images."""
    a = np.asarray(reference.convert("RGB"), dtype=np.int16)
    b = np.asarray(decoded.convert("RGB"), dtype=np.int16)
    if a.shape != b.shape:
        return 255, 255.0
    diff = np.abs(a - b)
    return int(diff.max()), float(diff.mean())


def is_srgb_png(path):
    """True when a PNG's gAMA/cHRM pair is just a restatement of sRGB.

    Five of these figures carry gAMA 1/2.2 with the sRGB primaries and no ICC
    profile. That describes sRGB exactly, which is what WebP assumes when no
    profile is embedded, so they are safe to convert.
    """
    data = path.read_bytes()
    offset, chunks = 8, {}
    while offset < len(data) - 8:
        length = struct.unpack(">I", data[offset:offset + 4])[0]
        kind = data[offset + 4:offset + 8]
        if kind == b"IDAT":
            break
        chunks[kind] = data[offset + 8:offset + 8 + length]
        offset += 12 + length
    gamma, chrm = chunks.get(b"gAMA"), chunks.get(b"cHRM")
    if not gamma or not chrm:
        return False
    if abs(struct.unpack(">I", gamma)[0] - 45455) > 100:
        return False
    return all(abs(a - b) <= 50 for a, b in zip(struct.unpack(">8I", chrm), SRGB_CHRM))


def load_source(path):
    """Return (image, icc_profile) with an opaque alpha channel dropped."""
    with Image.open(path) as opened:
        opened.load()
        info, icc = opened.info, opened.info.get("icc_profile")
        image = opened
        if image.mode in ("P", "PA"):
            image = image.convert("RGBA" if "transparency" in info else "RGB")
        if image.mode in ("RGBA", "LA"):
            # Every figure here is a flat diagram whose alpha channel is fully
            # opaque; carrying it would cost a quarter of the bytes for nothing.
            opaque = image.getchannel("A").getextrema()[0] == 255
            image = image.convert("RGB" if opaque else "RGBA")
        elif image.mode != "RGB":
            image = image.convert("RGB")
        if (icc is None and path.suffix.lower() == ".png" and "srgb" not in info
                and ("gamma" in info or "chromaticity" in info)
                and not is_srgb_png(path)):
            raise SystemExit(f"{path.name}: unrecognised colour metadata; refusing to convert")
        return image.copy(), icc


def encode_near_lossless(reference, out, icc, level):
    """-q 100 -m 6 is load-bearing: below it the preprocessing never engages."""
    tmp = out.with_suffix(".src.png")
    reference.save(tmp, "PNG", icc_profile=icc, compress_level=1)
    subprocess.run(["cwebp", "-near_lossless", str(level), "-q", "100", "-m", "6",
                    "-exact", "-quiet", str(tmp), "-o", str(out)], check=True)
    tmp.unlink()


def encode_lossless(reference, out, icc):
    """Maximum lossless effort: these files are served, not just archived.

    The full-resolution copy is both the enlarge-overlay asset and, for flat
    diagrams where it undercuts every downscale, a real srcset rung -- so the
    5-13% that -z 9 saves over -z 6 is bytes on the wire, worth the extra
    seconds here. -z 9 matches Pillow's method 6 and is a little faster.
    """
    tmp = out.with_suffix(".src.png")
    reference.save(tmp, "PNG", icc_profile=icc, compress_level=1)
    subprocess.run(["cwebp", "-lossless", "-exact", "-z", "9", "-quiet",
                    str(tmp), "-o", str(out)], check=True)
    tmp.unlink()


def build_variant(job):
    """Encode one width, verify it, and fall back to lossless if it drifts.

    Runs in a worker process: cwebp is single-threaded and the full ladder is
    minutes of CPU, so the widths are spread across cores.
    """
    src, width, out_name = job
    path = ROOT / src.lstrip("/")
    image, icc = load_source(path)
    out = OUT_DIR / out_name
    reference = (image if width == image.width
                 else image.resize((width, max(1, round(image.height * width / image.width))),
                                   Image.LANCZOS))
    encode_near_lossless(reference, out, icc, NEAR_LOSSLESS)
    with Image.open(out) as decoded:
        worst, mean = channel_error(reference, decoded)
    if worst > MAX_CHANNEL_ERROR:
        encode_lossless(reference, out, icc)
        worst, mean = 0, 0.0
    return out_name, out.stat().st_size, worst, mean


def build_full(src):
    """Pixel-identical full-resolution copy for the enlarge overlay."""
    path = ROOT / src.lstrip("/")
    image, icc = load_source(path)
    out = OUT_DIR / f"{path.stem}-full.webp"
    encode_lossless(image, out, icc)
    if out.stat().st_size >= path.stat().st_size:
        out.unlink()
        return None
    return out.name, out.stat().st_size


def prune_to_monotonic(sized):
    """Drop widths that cost more bytes than a wider variant of the same image.

    Lanczos turns a flat diagram's handful of colours into thousands of
    interpolated ones, so a downscale can compress *worse* than the original --
    btl.png is 27KB at its native 1561px but 50KB at 1450px. srcset picks by
    width, not weight, so leaving both in lets a browser pay more for fewer
    pixels. Keeping only widths that are strictly cheaper than every wider one
    makes the ladder monotonic.
    """
    keep, cheapest = [], None
    for width, size in sorted(sized, reverse=True):
        if cheapest is None or size < cheapest:
            keep.append(width)
            cheapest = size
    return sorted(keep)


def variant_widths(native, widths):
    chosen = [w for w in widths if w < native]
    # Offer the native resolution too, unless the ladder already reaches past it.
    if native <= max(widths):
        chosen.append(native)
    return sorted(set(chosen))


def main():
    for tool in ("cwebp", "oxipng"):
        if not shutil.which(tool):
            raise SystemExit(f"{tool} not found on PATH (brew install webp oxipng)")

    sources = sorted({
        src
        for page in PAGES
        for src in re.findall(r"/images/[A-Za-z0-9._/-]+\.(?:png|jpe?g|PNG|JPG|JPEG)",
                              (ROOT / page).read_text())
    })
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest, jobs, plan = {}, [], {}

    for src in sources:
        path = ROOT / src.lstrip("/")
        if not path.exists():
            print(f"{src}: missing, skipped")
            continue
        image, _ = load_source(path)
        widths = variant_widths(image.width, LOGO_WIDTHS if src in LOGOS else FIGURE_WIDTHS)
        plan[src] = (path, image.width, image.height, widths)
        for width in widths:
            jobs.append((src, width, f"{path.stem}-{width}.webp"))

    kept, sizes, errors, variant_bytes = set(), {}, {}, 0
    with ProcessPoolExecutor(max_workers=min(8, os.cpu_count() or 4)) as pool:
        fulls = {src: pool.submit(build_full, src) for src in plan}
        for name, size, worst, mean in pool.map(build_variant, jobs):
            kept.add(name)
            sizes[name] = size
            errors[name] = (worst, mean)
            variant_bytes += size
        full_sizes = {}
        for src, future in fulls.items():
            result = future.result()
            if result:
                kept.add(result[0])
                variant_bytes += result[1]
                full_sizes[src] = result[1]
                manifest.setdefault(src, {})["full"] = f"/images/opt/{result[0]}"

    for src, (path, width, height, widths) in plan.items():
        full_name = f"{path.stem}-full.webp"
        rungs = {w: (sizes[f"{path.stem}-{w}.webp"],
                     f"/images/opt/{path.stem}-{w}.webp", f"{path.stem}-{w}.webp")
                 for w in widths}
        if (src in full_sizes and width > max(widths)
                and full_sizes[src] < rungs[max(widths)][0]):
            # The pixel-identical full-resolution file is a legitimate top rung
            # when it undercuts the widest downscale, which on a flat diagram it
            # often does: webkd-overview is 137KB at its native 2564px but 162KB
            # at 1800px. Offering it then costs a browser fewer bytes for more
            # pixels. It is gated on being cheaper so a 90px logo never offers
            # its 1576px original to a high-density screen.
            rungs[width] = (full_sizes[src], f"/images/opt/{full_name}", full_name)
        useful = prune_to_monotonic([(w, size) for w, (size, _, _) in rungs.items()])
        for dropped in set(rungs) - set(useful):
            name = rungs[dropped][2]
            if name == full_name:
                continue          # still needed by the enlarge overlay
            (OUT_DIR / name).unlink()
            kept.discard(name)
        entry = manifest.setdefault(src, {})
        entry["width"], entry["height"] = width, height
        entry["webp"] = ", ".join(f"{rungs[w][1]} {w}w" for w in useful)
        measured = [errors[rungs[w][2]] for w in useful if rungs[w][2] in errors]
        worst = max((m[0] for m in measured), default=0)
        mean = max((m[1] for m in measured), default=0.0)
        note = "" if len(useful) == len(rungs) else f" ({len(rungs) - len(useful)} pruned)"
        print(f"{path.name:34s} {width:>5}px/{path.stat().st_size // 1024:>5}KB  "
              f"-> {len(useful)} widths, {useful[0]}px = {rungs[useful[0]][0] // 1024:>4}KB, "
              f"worst channel {worst:>2}/255, mean {mean:.2f}{note}")

    for stale in OUT_DIR.iterdir():
        if stale.name not in kept:
            stale.unlink()
            print(f"removed stale {stale.name}")

    # Shrink the PNG fallbacks losslessly; --strip safe keeps the colour chunks.
    pngs = [str(ROOT / s.lstrip("/")) for s in sources
            if (ROOT / s.lstrip("/")).exists() and s.lower().endswith(".png")]
    if pngs:
        subprocess.run(["oxipng", "-o", "max", "--strip", "safe", "-q", *pngs], check=True)

    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"\n{len(manifest)} images -> {len(kept)} files, {variant_bytes / 1048576:.2f} MB total")


if __name__ == "__main__":
    main()
