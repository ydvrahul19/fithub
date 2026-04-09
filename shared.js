// ===== FITHUB SHARED JS =====

const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">
    <img src="logo.png" alt="FitHUb" id="navLogoImg">
    <div>
      <span class="nav-logo-text">FitHUb</span>
      <span class="nav-logo-sub">Fit Mind. Fit Body. Fit Soul.</span>
    </div>
  </a>
  <div class="nav-links">
    <a href="index.html" data-page="index">Home</a>
    <a href="about.html" data-page="about">About</a>
    <a href="services.html" data-page="services">Services</a>
    <a href="products.html" data-page="products">Products</a>
    <a href="membership.html" data-page="membership">Membership</a>
    <a href="reviews.html" data-page="reviews">Reviews</a>
    <a href="contact.html" data-page="contact" class="nav-cta">Free Demo</a>
  </div>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html" data-page="index">🏠 Home</a>
  <a href="about.html" data-page="about">👥 About Us</a>
  <a href="services.html" data-page="services">💪 Services</a>
  <a href="products.html" data-page="products">🥤 Products</a>
  <a href="membership.html" data-page="membership">🎯 Membership</a>
  <a href="reviews.html" data-page="reviews">⭐ Reviews</a>
  <a href="contact.html" data-page="contact">📞 Free Demo</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="name">FitHUb Nutrition Center</div>
        <div class="tag">Fit Mind. Fit Body. Fit Soul.<br>Ahmedabad's trusted wellness destination.</div>
        <div class="social-row">
          <a href="https://www.instagram.com/fithubnutritioncenter" target="_blank" class="social-btn">IG</a>
          <a href="https://wa.me/919426508066" target="_blank" class="social-btn">WA</a>
          <a href="https://www.instagram.com/coachtruptimitesh" target="_blank" class="social-btn">🎯</a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="membership.html">Membership</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Visit Us</h4>
        <div class="footer-addr">
          B-214/215, Arcade Complex,<br>
          Super City Township, Bhadaj,<br>
          Ahmedabad, Gujarat 380060<br><br>
          <strong style="color:rgba(255,255,255,0.85)">Mitesh:</strong> +91 94288 50738<br>
          <strong style="color:rgba(255,255,255,0.85)">Trupti:</strong> +91 94265 08066<br><br>
          <a href="https://www.instagram.com/fithubnutritioncenter" target="_blank" style="color:var(--accent-light)">@fithubnutritioncenter</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 FitHUb Nutrition Center, Ahmedabad. All rights reserved.</p>
      <p>Designed with ❤️ for a healthier Ahmedabad</p>
    </div>
  </div>
</footer>`;

const FLOAT_HTML = `
<div class="float-btns">
  <a href="tel:+919426508066" class="float-btn float-call" title="Call Us">
    <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
  </a>
  <a href="https://wa.me/919426508066" target="_blank" class="float-btn float-wa" title="WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.852L.057 23.25a.75.75 0 00.916.906l5.453-1.432A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.962-1.362l-.356-.213-3.688.968.987-3.595-.232-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
  </a>
</div>`;

function injectShared() {
  // Nav
  const navWrap = document.getElementById('nav-placeholder');
  if (navWrap) navWrap.innerHTML = NAV_HTML;

  // Footer
  const footerWrap = document.getElementById('footer-placeholder');
  if (footerWrap) footerWrap.innerHTML = FOOTER_HTML;

  // Float buttons
  document.body.insertAdjacentHTML('beforeend', FLOAT_HTML);

  // Set active nav link
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Navbar scroll
  window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (nb) nb.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(61,43,31,0.14)' : '0 2px 20px rgba(61,43,31,0.10)';
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// Load logo via IMGS
function loadNavLogo() {
  const img = document.getElementById('navLogoImg');
  if (img && typeof IMGS !== 'undefined') img.src = IMGS.logo;
}

document.addEventListener('DOMContentLoaded', () => {
  injectShared();
  setTimeout(loadNavLogo, 10);
});
