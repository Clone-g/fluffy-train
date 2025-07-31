// main.js

// =====================
// Preloader functionality
// =====================
document.addEventListener("DOMContentLoaded", function () {
  // Hide preloader once page is loaded
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      preloader.style.display = 'none';
    });
  }
});

// =====================
// Responsive Navigation Menu
// =====================

// Mobile menu toggle for hamburger icon
function toggleMobileMenu() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("active");
}

// Attach event listener for menu icon
const menuIcon = document.querySelector(".menu-icon");
if (menuIcon) {
  menuIcon.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const nav = document.querySelector(".navbar");
    nav.classList.remove("active");
  });
});

// =====================
// Scroll-to-top button
// =====================

// Show/hide scroll-to-top button
const scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function () {
  if (scrollBtn) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }
};

// Scroll to top functionality
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
if (scrollBtn) {
  scrollBtn.onclick = topFunction;
}

// =====================
// Gallery functionality (for both mobile and PC)
// =====================

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallery-slide");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}

// Expose controls for HTML inline onclick usage
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
window.topFunction = topFunction;
window.toggleMobileMenu = toggleMobileMenu;

// =====================
// Responsive adjustments
// =====================

// Example: adjust gallery layout on window resize
window.addEventListener('resize', function () {
  // You can add code here to adjust elements depending on screen size
  // e.g., change the number of slides shown, or update styles dynamically
  // For now, this is a placeholder for custom responsive logic.
});

// =====================
// Device detection (optional use)
// =====================

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// You can use isMobileDevice() to tweak behaviors for mobile vs. PC if needed

// =====================
// Page navigation (if using single-page style / anchor links)
// =====================

function openPage(pageId) {
  // Hide all pages/sections
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => page.style.display = 'none');
  // Show the selected page/section
  const target = document.getElementById(pageId);
  if (target) target.style.display = 'block';
}
window.openPage = openPage;
