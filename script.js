// script.js

// === 1. Preloader (Fades out when site is ready) ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// === 2. Fade-in Sections on Scroll ===
// Updated to target our new '.data-block' class
const faders = document.querySelectorAll(".data-block");

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    // Add the 'appear' class to trigger the CSS animation
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  // Set initial state for javascript-driven animation
  fader.style.opacity = "0";
  fader.style.transform = "translateY(40px)";
  fader.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  
  appearOnScroll.observe(fader);
});

// Helper class for the intersection observer
document.addEventListener("DOMContentLoaded", () => {
    // We add a dynamic style rule for the 'appear' class
    const style = document.createElement('style');
    style.innerHTML = `
        .data-block.appear {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});


// === 3. Smooth Scroll Reset on Nav Click ===
// CRITICAL FIX: Only target links that start with "#". 
// This prevents JavaScript from blocking your Resume download!
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    
    if (section) {
      // Smoothly scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, `#${targetId}`);
    }
  });
});
