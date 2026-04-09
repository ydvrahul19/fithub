
// Hero Slideshow
(function() {
  var slides = document.querySelectorAll('.hero-slideshow .slide');
  var dots = document.querySelectorAll('.dot-indicator');
  var current = 0;
  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  window.goToSlide = goToSlide;
  setInterval(function() { goToSlide(current + 1); }, 4000);
})();
