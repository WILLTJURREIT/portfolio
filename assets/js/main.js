/* ==========================================================
   MAIN APPLICATION
   ----------------------------------------------------------
   Contains:
   • Application initialization
   • Scroll animations (AOS)
   • Typed.js hero animations
   • Portfolio controller initialization
   • Sentinel helper panel controls
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================
     INITIALIZE AOS (Animate On Scroll)
     Enables fade and scroll animations throughout the portfolio.
  ========================================================== */
  AOS.init({
    duration: 750,
    once: true,
    offset: 80
  });

  /* ==========================================================
     HERO TYPING ANIMATION
     Rotating text displayed in the hero section.
  ========================================================== */
  new Typed("#typedText", {
    strings: [
      "clean websites.",
      "database-driven web apps.",
      "interactive Web Solutions.",
      "brands that earn trust.",
      "AI Marketing systems.",
    ],
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 1500,
    loop: true
  });

  /* ==========================================================
     PROFILE NAME TYPING ANIMATION
     Animated typing effect for the profile card.
  ========================================================== */
  new Typed("#tysenJurreit", {
    strings: [
      "Tysen Jurreit"
    ],
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 1500,
    loop: true
  });

  /* ==========================================================
     INITIALIZE PORTFOLIO
     Loads portfolio data and renders all dynamic sections.
  ========================================================== */
  PortfolioController.init();


  /* ==========================================================
     SENTINEL HELPER PANEL
     Handles opening and closing the Sentinel recruiter helper.
  ========================================================== */
  const sentinelToggle = document.querySelector(".sentinel-toggle");
  const sentinelPanel = document.querySelector(".sentinel-panel");
  const sentinelClose = document.querySelector(".sentinel-close");

  if (sentinelToggle && sentinelPanel && sentinelClose) {
    sentinelToggle.addEventListener("click", () => {
      const isOpen = !sentinelPanel.hasAttribute("hidden");

      sentinelPanel.toggleAttribute("hidden");
      sentinelToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close Sentinel when the close button is clicked
    sentinelClose.addEventListener("click", () => {
      sentinelPanel.setAttribute("hidden", "");
      sentinelToggle.setAttribute("aria-expanded", "false");
    });
  }
});