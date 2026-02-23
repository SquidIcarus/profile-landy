const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');
const overLayLinks = document.querySelectorAll('.nav-overlay a');

function openMenu() {
  hamburger.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navOverlay.classList.contains('open') ? closeMenu() : openMenu();
});

overLayLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

navOverlay.addEventListener('click', (e) => {
  if (e.target === navOverlay) closeMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});