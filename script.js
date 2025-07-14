// script.js

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);

});

// Scroll animation for sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Fix scroll to top on refresh with hash
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});
