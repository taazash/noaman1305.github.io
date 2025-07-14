// script.js

// === Preloader ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// === Typing Effect ===
const typingElement = document.getElementById("typing");
const roles = [
  "Cybersecurity Analyst",
  "Bug Bounty Hunter",
  "Network Defender",
  "Penetration Tester",
  "TryHackMe Top 1%"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  typingElement.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 1000);
  }
}
document.addEventListener("DOMContentLoaded", type);

// === Fade-in Sections on Scroll ===
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
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

// === Smooth Scroll Reset on Nav Click ===
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, null, `#${targetId}`);
  });
});
