// Mobile menu
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('is-open', open);
  menu.setAttribute('aria-hidden', String(!open));
  // Remove body scroll lock - let menu scroll naturally
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    item.classList.toggle('open');
  });
});
