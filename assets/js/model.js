/* ==========================================================
   PORTFOLIO MODEL
   ----------------------------------------------------------
   Central data source for the portfolio.
   View.js reads this data and dynamically renders:
   • Skills
   • Testimonials
   • Projects
========================================================== */

const PortfolioModel = {


  /* ========================================================
     SKILLS
     --------------------------------------------------------
     Main capability groups displayed in the Skills section.
  ======================================================== */
skills: [
  {
    title: "Technical Toolkit",
    icon: "bi-code-slash",
    description: "Combining web development, marketing, and business strategy to build practical digital solutions.",
    tags: [

      // Development
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",

      // Web Platforms & APIs
      "WordPress",
      "Shopify",
      "REST APIs",
      "Firebase",

      // Development Workflow
      "GitHub",
      "Agile",
      "OpenProject",

      // Marketing & Business
      "SEO",
      "Branding",
      "Figma",
      "AI Workflows"

    ]
  }
],


/* ========================================================
     TESTIMONIALS
     --------------------------------------------------------
     Recommendations displayed in the testimonials section.
     Placeholder testimonials can be replaced as verified
     recommendations are received.
  ======================================================== */
    testimonials: [
      // {
      //   name: "Coming Soon",
      //   role: "Professional References",
      //   rating: 5,
      //   quote: "Testimonials from instructors, colleagues, and industry professionals are currently being collected and will be added here soon. References are available upon request."
      // },
      // {
      //   name: "Instructor",
      //   role: "Web Development Program",
      //   rating: 5,
      //   quote: "Testimonials from instructors, colleagues, and industry professionals are currently being collected and will be added here soon. References are available upon request."
      // },
      // {
      //   name: "Instructor",
      //   role: "Digital Marketing",
      //   rating: 5,
      //   quote: "Testimonials from instructors, colleagues, and industry professionals are currently being collected and will be added here soon. References are available upon request."
      // },

      {
        name: "Tutor & Mentor - Ravinder",
        role: "Programming & Web Development",
        rating: 5,
        quote: "Tysen approached every project with professionalism, curiosity, and a strong work ethic. He was always willing to learn and improve."
      }
    ],
  

     /* ========================================================
     PROJECTS
     --------------------------------------------------------
     Portfolio project data.
     Each project card and project dialog is generated from
     the objects below.
     ======================================================== */
    projects: [

      /* ------------------------------------------------------
       PROJECT 1: PHP / MYSQL WEB PLATFORM
      ------------------------------------------------------ */
      {
        id: 1,
        title: "Mystermash Productions Web Platform",
        category: "web",
        icon: "bi-layers",
        image: "assets/img/projects/mystermash.jpg",
        summary: "A database-driven web platform built with PHP, MySQL, JavaScript, and MVC architecture.",
        tags: ["PHP", "MySQL", "JavaScript", "MVC"],
        problem: "The project needed structured application logic, database interaction, authentication, and admin access.",
        solution: "I built core platform features using PHP, MySQL, JavaScript, sessions, login systems, and organized MVC-style code.",
        outcome: "This project strengthened my backend fundamentals, database design, SQL queries, testing, and debugging.",
        demoUrl: "https://mystermashhub.free.nf/Mystermash-Productions/index.php?controller=main&action=home",
        githubUrl: ""
      },

      /* ------------------------------------------------------
       PROJECT 2: BIGFOOT TRACKER APPLICATION
      ------------------------------------------------------ */
      {
        id: 2,
        title: "Bigfoot Tracker Application",
        category: "web",
        icon: "bi-geo-alt",
        image: "assets/img/projects/bigfoot_tracker_app5.png",
        summary: "An interactive GIS mapping application using public data, REST APIs, Leaflet.js, JavaScript, PHP, HTML, and CSS.",
        tags: ["JavaScript", "PHP", "Leaflet.js", "REST APIs"],
        problem: "Location-based information needed to be displayed in a searchable, visual, and interactive way.",
        solution: "I built a responsive map application with markers, filters, API data handling, and dynamic user interaction.",
        outcome: "This project demonstrated API integration, geospatial visualization, JavaScript logic, and responsive interface design.",
        demoUrl: "https://willtjurreit.github.io/bigfoot-tracker/",
        githubUrl: "https://github.com/WILLTJURREIT/bigfoot-tracker"
      },

       /* ------------------------------------------------------
       PROJECT 3: WORDPRESS TEAM PROJECT
      ------------------------------------------------------ */
      {
        id: 3,
        title: "Collaborative WordPress Project",
        category: "cms",
        icon: "bi-wordpress",
        image: "assets/img/projects/wordpress-project.png",
        summary: "A team-based WordPress website project using Agile planning and OpenProject coordination.",
        tags: ["WordPress", "Agile", "Team Development", "OpenProject"],
        problem: "A five-person team needed to plan, build, test, and deliver a WordPress website.",
        solution: "I contributed to development, planning, testing, documentation, and project coordination.",
        outcome: "This project showed collaboration, Agile workflow experience, and practical CMS development ability.",
        demoUrl: "",
        noticeUrl: "",
        caseStudyUrl: "wordpress-case-study.html",
        githubUrl: ""
      },

      /* ------------------------------------------------------
       PROJECT 4: SHOPIFY / E-COMMERCE
      ------------------------------------------------------ */
      {
        id: 4,
        title: "Shopify E-Commerce Landing Pages",
        category: "cms",
        icon: "bi-cart-check",
        image: "assets/img/projects/ecommerce-mystermash2.png",
        summary: "Landing pages, wireframes, user journeys, and conversion-focused e-commerce design.",
        tags: ["Shopify", "Figma", "Marketing", "Conversion Design"],
        problem: "E-commerce pages need to quickly build trust and guide users toward action.",
        solution: "I created wireframes, landing page structures, and lead-generation concepts using Shopify and Figma.",
        outcome: "This strengthened my practical understanding of user flow, e-commerce design, and conversion-focused layouts.",
        demoUrl: "",
        websiteUrl: "https://mystermash.com/",
        githubUrl: ""
      },

       /* ------------------------------------------------------
       PROJECT 5: AI BRANDING / MARKETING
       ------------------------------------------------------ */
      {
        id: 5,
        title: "AI Branding & Marketing Campaign",
        category: "marketing",
        icon: "bi-stars",
        image: "assets/img/projects/landing-page.png",
        summary: "A full branding and digital marketing strategy for a proposed business venture.",
        tags: ["Branding", "Figma", "AI Tools", "Marketing Strategy"],
        problem: "A business concept needed a clear brand, message, customer profile, and campaign direction.",
        solution: "I developed competitor research, user personas, logos, landing page concepts, ads, and AI-assisted brand assets.",
        outcome: "This project built my ability to connect design, messaging, market research, and customer acquisition strategy.",
        demoUrl: "",
        caseStudyUrl: "https://learndigital.dev/students/tysen-jurreit/",
        presentationUrl: "https://www.youtube.com/shorts/lTKpoeABc34",
        githubUrl: ""
      },

      /* ------------------------------------------------------
       PROJECT 6: AI CONTENT / SOCIAL MEDIA
      ------------------------------------------------------ */
      {
        id: 6,
        title: "AI Content & Social Media Platform",
        category: "marketing",
        icon: "bi-bar-chart-line",
        image: "assets/img/projects/social-media-platform.png",
        summary: "A motivational social media platform using AI-assisted content creation and audience strategy.",
        tags: ["AI Content", "Social Media", "Content Strategy", "Audience Growth"],
        problem: "The platform needed consistent messaging that could capture attention and grow an audience.",
        solution: "I created content strategies, messaging frameworks, and engagement systems using AI-assisted creation.",
        outcome: "The platform generated 200,000+ organic views and strengthened my understanding of attention, brand voice, and distribution.",
        demoUrl: "",
        socialMediaUrl: "https://www.facebook.com/profile.php?id=61580797105546",
        githubUrl: ""
      },

      /* ------------------------------------------------------
       PROJECT 7: JAVASCRIPT GAME DEVELOPMENT
      ------------------------------------------------------ */
      {
        id: 7,
        title: "Interactive JavaScript Pong Game",
        category: "web",
        icon: "bi-controller",
        image: "assets/img/projects/pong-game.png",
        summary: "A fully interactive browser-based Pong game built with vanilla JavaScript featuring game physics, AI opponent, responsive controls, audio, and customizable gameplay.",
        tags: ["JavaScript", "Game Development", "HTML5", "CSS3", "Responsive Design"],
        problem:"Build an interactive browser game without external game engines while creating smooth gameplay, responsive controls, collision detection, and a computer-controlled opponent.",
        solution:"Developed the game entirely with vanilla JavaScript using a real-time game loop, collision detection, score tracking, AI paddle movement, responsive layouts, touch support, audio effects, and customizable themes.",
        outcome:"Strengthened my understanding of JavaScript application architecture, animation timing, event handling, object movement, collision detection, DOM manipulation, and responsive game development.",
        demoUrl: "https://willtjurreit.github.io/mobile-pong-game/",
        githubUrl: "https://github.com/WILLTJURREIT/ping_pong"
  }

    ]
  };