document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 750,
    once: true,
    offset: 80
  });

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

  PortfolioController.init();

  const sentinelToggle = document.querySelector(".sentinel-toggle");
  const sentinelPanel = document.querySelector(".sentinel-panel");
  const sentinelClose = document.querySelector(".sentinel-close");

  if (sentinelToggle && sentinelPanel && sentinelClose) {
    sentinelToggle.addEventListener("click", () => {
      const isOpen = !sentinelPanel.hasAttribute("hidden");

      sentinelPanel.toggleAttribute("hidden");
      sentinelToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    sentinelClose.addEventListener("click", () => {
      sentinelPanel.setAttribute("hidden", "");
      sentinelToggle.setAttribute("aria-expanded", "false");
    });
  }
});