(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const previous = document.querySelector('[data-prev]');
  const next = document.querySelector('[data-next]');
  const currentLabel = document.querySelector('.progress-label');
  const progress = document.querySelector('.progress-track i');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const sourceImages = [...document.querySelectorAll('.single-evidence img, .evidence-gallery img, .roas-source-thumb')];
  let active = 0;

  const show = (index, updateHash = true) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
    currentLabel.textContent = String(active + 1).padStart(2, '0');
    progress.style.width = `${((active + 1) / slides.length) * 100}%`;
    if (updateHash) history.replaceState(null, '', `#slide-${active + 1}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fromHash = Number((location.hash.match(/slide-(\d+)/) || [])[1]);
  show(Number.isInteger(fromHash) && fromHash > 0 && fromHash <= slides.length ? fromHash - 1 : 0, false);
  previous.addEventListener('click', () => show(active - 1));
  next.addEventListener('click', () => show(active + 1));
  document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => show(Number(button.dataset.go) - 1)));
  const closeLightbox = () => { if (lightbox) lightbox.hidden = true; document.body.style.overflow = ''; };
  sourceImages.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
    image.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); image.click(); } });
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox && !lightbox.hidden) { closeLightbox(); return; }
    if (lightbox && !lightbox.hidden) return;
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(active + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(active - 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
  });
})();
