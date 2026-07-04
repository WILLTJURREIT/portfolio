/* ==========================================================
   PORTFOLIO CONTROLLER
   ----------------------------------------------------------
   Responsibilities:
   • Initialize the portfolio
   • Coordinate Model and View interactions
   • Handle UI events and user interactions
   • Manage project filtering
   • Control project dialog behavior
   • Toggle dark/light theme
   • Animate statistics counters
   • Update footer copyright year
========================================================== */

const PortfolioController = {

    /* ========================================================
     APPLICATION INITIALIZATION
     --------------------------------------------------------
     Renders dynamic content and initializes all interactive
     portfolio features.
    ======================================================== */
    init() {
      PortfolioView.renderSkills(PortfolioModel.skills);
      PortfolioView.renderProjects(PortfolioModel.projects);
      PortfolioView.renderTestimonials(PortfolioModel.testimonials);
  
      this.setupProjectFilters();
      this.setupProjectDialog();
      this.setupThemeToggle();
      this.setupCounters();
      this.setupFooterYear();
    },
  

    /* ========================================================
     PROJECT FILTERS
     --------------------------------------------------------
     Filters portfolio projects based on the selected
     category button.
    ======================================================== */
    setupProjectFilters() {
      const filterButtons = document.querySelectorAll(".btn-filter");
  
      filterButtons.forEach(button => {
        button.addEventListener("click", () => {
          const filter = button.dataset.filter;
          const projects = document.querySelectorAll(".project-item");
  
          filterButtons.forEach(item => item.classList.remove("active"));
          button.classList.add("active");
  
          projects.forEach(project => {
            const match = filter === "all" || project.dataset.category === filter;
            project.hidden = !match;
          });
        });
      });
    },
  

    /* ========================================================
     PROJECT DIALOG
     --------------------------------------------------------
     Opens and closes the project details dialog.
    ======================================================== */
    setupProjectDialog() {
      const dialog = document.getElementById("projectDialog");
      const closeButton = document.getElementById("closeDialog");
  
      /* ------------------------------------------------------
       Open project dialog
      ------------------------------------------------------ */
      document.addEventListener("click", event => {
        const button = event.target.closest(".view-project");
  
        if (!button) return;
  
        const projectId = Number(button.dataset.projectId);
        const project = PortfolioModel.projects.find(item => item.id === projectId);
  
        if (project) {
          PortfolioView.openProjectDialog(project);
        }
      });

      closeButton.addEventListener("click", () => {
        dialog.close();
      });


      /* ------------------------------------------------------
       Close dialog using close button
      ------------------------------------------------------ */
      dialog.addEventListener("click", event => {
        if (event.target === dialog) {
          dialog.close();
        }
      });
    },



     /* ========================================================
     THEME TOGGLE
     --------------------------------------------------------
     Switches between dark and light themes while storing
     the user's preference in localStorage.
     ======================================================== */
    setupThemeToggle() {
      const button = document.getElementById("themeToggle");
      const savedTheme = localStorage.getItem("portfolioTheme");
  
      if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        button.innerHTML = '<i class="bi bi-sun"></i>';
      }
  
      button.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
  
        const lightMode = document.body.classList.contains("light-mode");
  
        localStorage.setItem("portfolioTheme", lightMode ? "light" : "dark");
  
        button.innerHTML = lightMode
          ? '<i class="bi bi-sun"></i>'
          : '<i class="bi bi-moon-stars"></i>';
      });
    },
  
  
    /* ========================================================
     STATISTICS COUNTERS
     --------------------------------------------------------
     Animates the portfolio statistics when they enter
     the viewport.
     ======================================================== */
    setupCounters() {
      const counters = document.querySelectorAll(".counter");
      const statsSection = document.querySelector(".stats-section");
      let hasRun = false;
  

      /* ------------------------------------------------------
       Animate counters
      ------------------------------------------------------ */
      const runCounters = () => {
  if (hasRun) return;

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const duration = 1400;
    const steps = 55;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        counter.textContent = Number.isInteger(target)
          ? target.toLocaleString()
          : target.toFixed(2);
        clearInterval(timer);
      } else {
        counter.textContent = Number.isInteger(target)
          ? Math.floor(current).toLocaleString()
          : current.toFixed(2);
      }
    }, duration / steps);
  });

  hasRun = true;
};
  

      /* ------------------------------------------------------
       Observe stats section
      ------------------------------------------------------ */
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          runCounters();
        }
      }, { threshold: 0.35 });
  
      observer.observe(statsSection);
    },
  

     /* ========================================================
     FOOTER YEAR
     --------------------------------------------------------
     Automatically updates the copyright year.
     ======================================================== */
    setupFooterYear() {
      document.getElementById("year").textContent = new Date().getFullYear();
    }
  };