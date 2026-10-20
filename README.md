The only three files that you need:

- config.yml for sidebar
- _pages/about.md
- _pages/publications.html
- _pages/teaching.html

Research figures use `_includes/research-image.html` with a `src` and `alt`.
After adding or replacing a PNG figure in the homepage or publications page, run
`python3 scripts/optimize-research-images.py` (requires Pillow with WebP support).
Commit the generated `images/optimized/` files and `_data/research_images.json`.
The script verifies identical pixels at the original resolution and preserves
embedded color profiles. Browsers receive the smaller lossless WebP when available,
with the original PNG as a fallback and download link.
Figures relying on PNG-specific gamma/chromaticity metadata retain their original
format to preserve their exact appearance.
