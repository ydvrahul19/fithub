
const pages = ['home','about','services','products','membership','transformation','reviews','contact'];

function showPage(id, navEl) {
  pages.forEach(p => document.getElementById('page-'+p).classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if(navEl) navEl.classList.add('active');
  else {
    document.querySelectorAll('.nav-links a').forEach((a,i) => {
      if(pages[i] === id) a.classList.add('active');
    });
  }
  setTimeout(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold:0.08, rootMargin:'0px 0px -30px 0px'});
    document.querySelectorAll('#page-'+id+' .reveal').forEach(el => {
      el.classList.remove('visible');
      obs.observe(el);
    });
  }, 80);
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-shakes').style.display = (tab==='shakes') ? 'block' : 'none';
  document.getElementById('tab-teas').style.display = (tab==='teas') ? 'block' : 'none';
}

function submitToWhatsApp() {
  const name = document.getElementById('cf-name').value.trim();
  const phone = document.getElementById('cf-phone').value.trim();
  const goal = document.getElementById('cf-goal').value;
  const msg = document.getElementById('cf-msg').value.trim();
  if(!name || !phone) { alert('Please fill in your name and phone number.'); return; }
  const text = `Hello FitHub! 👋

I would like to book a FREE demo session.

*Name:* ${name}
*Phone:* ${phone}
*Goal:* ${goal || 'Not specified'}
*Message:* ${msg || 'No additional message'}

Thank you!`;
  window.open('https://wa.me/919426508066?text=' + encodeURIComponent(text), '_blank');
}

// Init home page reveal
setTimeout(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.08});
  document.querySelectorAll('#page-home .reveal').forEach(el => obs.observe(el));
}, 150);
