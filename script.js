
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// ✅ Preloader Animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
});

// ✅ Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ✅ Reveal Section Animations on Scroll
const allSections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.1
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

allSections.forEach(section => {
  section.classList.add("hide-section");
  revealOnScroll.observe(section);
});
