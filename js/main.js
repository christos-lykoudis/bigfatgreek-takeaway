document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger menu ────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Logo image fallback ───────────────────────
  const logoImg  = document.querySelector('.nav-logo img');
  const logoText = document.querySelector('.nav-logo-text-wrap');
  if (logoImg) {
    const maybeHide = () => {
      if (!logoImg.complete || logoImg.naturalWidth === 0) {
        logoImg.style.display = 'none';
        if (logoText) logoText.style.display = 'flex';
      }
    };
    logoImg.addEventListener('error', () => {
      logoImg.style.display = 'none';
      if (logoText) logoText.style.display = 'flex';
    });
    maybeHide();
  }

  // ── Sticky nav shadow on scroll ───────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(0,0,0,0.3)'
        : '0 2px 20px rgba(0,0,0,0.25)';
    }, { passive: true });
  }

  // ── Set active nav link ───────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

});
