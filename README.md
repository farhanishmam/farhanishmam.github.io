The only three files that you need:

- config.yml for sidebar
- _pages/about.md
- _pages/publications.html
- _pages/teaching.html

## Images

Figures and logos render through `_includes/research-image.html`, which takes a
`src` and `alt` and emits a `<picture>` with a WebP `srcset` ladder plus the
original PNG/JPEG as a fallback and download link.

Each page sets `figure_sizes` in its front matter describing how wide the image
box actually is, because a browser that is not told assumes the figure fills the
viewport and downloads a far larger file than it will draw. The current values
mirror the page grids: 871px on the home page, 376px on the publications page,
90px for experience logos. **If you change those layouts, update `figure_sizes`
to match.**

After adding or replacing a figure, run:

```bash
python3 scripts/optimize-images.py
```

It needs Pillow plus `cwebp` and `oxipng`:

```bash
python3 -m pip install Pillow && brew install webp oxipng
```

The script regenerates `images/opt/` and `_data/research_images.json`; commit
both. It spreads the encodes across cores and takes a few minutes for the whole
set — near-lossless WebP and `oxipng -o max` are both deliberately slow. For every image it emits a width ladder (down to 400px for figures, 90px
for logos) and one full-resolution **lossless** WebP that the click-to-enlarge
overlay loads via `data-full`, so the enlarged view stays pixel-identical to the
source. Variants are only ever downscaled, never upscaled.

Encoding uses `cwebp -near_lossless`, which runs in WebP's RGB lossless path.
Ordinary lossy WebP and AVIF are roughly 10% smaller, but both default to 4:2:0
chroma subsampling, which smears the saturated text and thin rules these diagrams
are made of — on `webmix-overview` at 760px it pushed the worst channel error to
84/255 against 4/255 for near-lossless, at the same file size. Every variant is
compared against the Lanczos-resampled source and re-encoded further up the
ladder if any channel drifts more than 8/255, falling back to a pixel-identical
lossless encode if none holds. Fully opaque alpha channels are dropped, and the
source PNGs are recompressed losslessly with `oxipng`.
