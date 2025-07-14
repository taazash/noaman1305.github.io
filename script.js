<!-- script.js -->

// Typing Animation for index.html
const typingEl = document.getElementById("typing");
if (typingEl) {
  const text = "Cybersecurity Analyst & Bug Bounty Hunter";
  let idx = 0;
  function typeText() {
    if (idx < text.length) {
      typingEl.innerHTML += text.charAt(idx);
      idx++;
      setTimeout(typeText, 60);
    }
  }
  typeText();
}

// Preloader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");
  if (loader) loader.style.display = "none";
});

// Fade in animation for sections
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
