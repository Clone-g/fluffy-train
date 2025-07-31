// Preloader functionality
window.addEventListener('load', function () {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
});

// Image Gallery functionality (basic carousel/slideshow)
let slideIndex = 1;

// Show the first slide on page load
document.addEventListener('DOMContentLoaded', function () {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += ' active';
  }
}

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
  if (scrollBtn) {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'block' : 'none';
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation open/close (example for mobile menu)
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

// Page navigation function (if you have buttons to open new pages)
function openPage(url) {
  window.location.href = url;
}

// Export to global scope if needed for inline handlers
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
window.topFunction = topFunction;
window.openNav = openNav;
window.closeNav = closeNav;
window.openPage = openPage;
