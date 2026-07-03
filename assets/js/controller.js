const PortfolioController = {
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
  
    setupProjectDialog() {
      const dialog = document.getElementById("projectDialog");
      const closeButton = document.getElementById("closeDialog");
  
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
  
      dialog.addEventListener("click", event => {
        if (event.target === dialog) {
          dialog.close();
        }
      });
    },
  
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
  
  
    setupCounters() {
      const counters = document.querySelectorAll(".counter");
      const statsSection = document.querySelector(".stats-section");
      let hasRun = false;
  
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
  
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          runCounters();
        }
      }, { threshold: 0.35 });
  
      observer.observe(statsSection);
    },
  
    setupFooterYear() {
      document.getElementById("year").textContent = new Date().getFullYear();
    }
  };