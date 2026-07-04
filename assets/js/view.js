const PortfolioView = {
    renderSkills(skills) {
      const skillsGrid = document.getElementById("skillsGrid");
  
      skillsGrid.innerHTML = skills.map((skill, index) => `
        <article class="skill-card" data-aos="fade-up" data-aos-delay="${index * 80}">
          <i class="bi ${skill.icon}" aria-hidden="true"></i>
  
          <h3>${skill.title}</h3>
  
          <p>${skill.description}</p>
  
          <footer class="skill-tags" aria-label="${skill.title} technologies">
            ${skill.tags.map(tag => `<span>${tag}</span>`).join("")}
          </footer>
        </article>
      `).join("");
    },
  
    renderProjects(projects) {
      const projectsGrid = document.getElementById("projectsGrid");
  
      projectsGrid.innerHTML = projects.map((project, index) => `
        <article class="project-card project-item" data-category="${project.category}" data-aos="fade-up" data-aos-delay="${index * 80}">
          <figure>
            ${project.image
              ? `<img class="project-image" src="${project.image}" alt="Screenshot of ${project.title}">`
              : `<section class="project-placeholder" aria-label="${project.title} visual placeholder"><i class="bi ${project.icon}" aria-hidden="true"></i></section>`
            }
  
            <figcaption>${project.summary}</figcaption>
          </figure>
  
          <header>
            <h3>${project.title}</h3>
  
            <p class="project-tags" aria-label="${project.title} technologies">
              ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
            </p>
          </header>
  
          <p>${project.summary}</p>
  
          <footer>
            <button class="btn btn-outline-light btn-sm view-project" type="button" data-project-id="${project.id}">
              View Project
            </button>
          </footer>
        </article>
      `).join("");
    },


  
    renderTestimonials(testimonials) {
  const testimonialsGrid = document.getElementById("testimonialsGrid");

  if (!testimonialsGrid) return;

  testimonialsGrid.innerHTML = testimonials.map((testimonial, index) => `
    <article class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <header class="testimonial-header">
        <div class="testimonial-icon">
          <i class="bi bi-chat-quote-fill" aria-hidden="true"></i>
        </div>

        <div>
          <h3>${testimonial.name}</h3>
          <p>${testimonial.role}</p>
        </div>
      </header>

      <p class="testimonial-stars" aria-label="${testimonial.rating} out of 5 stars">
        ${Array.from({ length: testimonial.rating }, (_, starIndex) => `
          <i
            class="bi bi-star-fill"
            style="--star-delay: ${starIndex * 0.12}s"
            aria-hidden="true">
          </i>
        `).join("")}
      </p>

      <blockquote>
        “${testimonial.quote}”
      </blockquote>
    </article>
  `).join("");
},
  
    openProjectDialog(project) {
      const dialog = document.getElementById("projectDialog");
      const title = document.getElementById("dialogTitle");
      const body = document.getElementById("dialogBody");
  
      title.textContent = project.title;
  
      body.innerHTML = `
        <p class="lead">${project.summary}</p>
  
        <section aria-labelledby="problem-heading">
          <h3 id="problem-heading">Problem</h3>
          <p>${project.problem}</p>
        </section>
  
        <section aria-labelledby="solution-heading">
          <h3 id="solution-heading">Solution</h3>
          <p>${project.solution}</p>
        </section>
  
        <section aria-labelledby="outcome-heading">
          <h3 id="outcome-heading">Outcome</h3>
          <p>${project.outcome}</p>
        </section>
  
        <footer class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </footer>
  
        <nav class="dialog-links" aria-label="Project links">

  ${project.demoUrl ? `
    <a
      href="${project.demoUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary">
      Live Demo
    </a>
  ` : ""}

  ${project.caseStudyUrl ? `
    <a
      href="${project.caseStudyUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary">
      View Case Study
    </a>
  ` : ""}

  ${project.presentationUrl ? `
  <a
    href="${project.presentationUrl}"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-outline-light">
    <i class="bi bi-play-circle"></i>
    Watch Presentation
  </a>
` : ""}

   ${project.websiteUrl ? `
    <a
      href="${project.websiteUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary">
      View Ecommerce Website
    </a>
  ` : ""}

  ${project.socialMediaUrl ? `
    <a
      href="${project.socialMediaUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary">
      View Facebook Page
    </a>
  ` : ""}

  ${project.noticeUrl ? `
  <a
    href="${project.noticeUrl}"
    class="btn btn-primary">
    <i class="bi bi-tools"></i>
    Project Update
  </a>
` : ""}

  ${project.githubUrl ? `
    <a
      href="${project.githubUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-outline-light">
      GitHub Repo
    </a>
  ` : ""}
        </nav>
      `;
  
      dialog.showModal();
    }

    
  };