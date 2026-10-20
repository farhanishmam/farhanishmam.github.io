(() => {
  // Measure the first three complete entries, including wrapped mobile text.
  document.querySelectorAll('[data-news-scroll]').forEach(region => {
    const list = region.querySelector('ul');
    const rows = [...list.children];
    const resize = () => {
      if (!rows.length) return;
      const first = rows[0].getBoundingClientRect();
      const last = rows[Math.min(2, rows.length - 1)].getBoundingClientRect();
      region.style.maxHeight = `${last.bottom - first.top}px`;
    };
    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(list);
    else window.addEventListener('resize', resize);
    document.fonts?.ready.then(resize);
  });

  const figureLinks = [...document.querySelectorAll('.pub-img-wrap > a, .fi-project figure a')]
    .filter(link => link.querySelector('img'));
  if (!figureLinks.length || typeof HTMLDialogElement === 'undefined') return;

  const preview = document.createElement('dialog');
  preview.id = 'image-preview';
  preview.className = 'image-preview';
  preview.setAttribute('aria-label', 'Enlarged research figure');
  preview.setAttribute('aria-describedby', 'image-preview-hint');
  preview.innerHTML = `
    <button class="image-preview-close" type="button" aria-label="Close image preview" autofocus>×</button>
    <img class="image-preview-image" alt="">
    <p id="image-preview-hint">Click anywhere or press Escape to close</p>
  `;
  document.body.append(preview);
  const fullImage = preview.querySelector('img');
  let opener;

  figureLinks.forEach(link => {
    const thumbnail = link.querySelector('img');
    link.classList.add('image-preview-trigger');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', preview.id);
    link.setAttribute('aria-label', `Enlarge ${thumbnail.alt || 'research figure'}`);
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      // The thumbnail is now a downscaled srcset variant, so the overlay takes
      // data-full (a lossless full-resolution WebP) and falls back to the PNG.
      fullImage.src = thumbnail.dataset.full || link.href;
      fullImage.alt = thumbnail.alt;
      document.documentElement.classList.add('image-preview-open');
      preview.showModal();
    });
  });

  preview.addEventListener('click', () => preview.close());
  preview.addEventListener('close', () => {
    document.documentElement.classList.remove('image-preview-open');
    fullImage.removeAttribute('src');
    opener?.focus({ preventScroll: true });
  });
})();
