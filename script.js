(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const previous = document.querySelector('[data-prev]');
  const next = document.querySelector('[data-next]');
  const currentLabel = document.querySelector('.progress-label');
  const progress = document.querySelector('.progress-track i');
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
  document.addEventListener('keydown', (event) => {
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(active + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(active - 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
  });
})();
