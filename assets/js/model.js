const PortfolioModel = {
    skills: [
      {
        title: "Frontend Development",
        icon: "bi-window-stack",
        description: "Responsive, accessible, clean interfaces built with strong structure.",
        tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive Design"]
      },
      {
        title: "Backend Development",
        icon: "bi-database-gear",
        description: "Database-driven web application foundations and server-side logic.",
        tags: ["PHP", "MySQL", "SQL", "Sessions", "Authentication"]
      },
      {
        title: "APIs & Mapping",
        icon: "bi-map",
        description: "Interactive data experiences using APIs, maps, and dynamic JavaScript.",
        tags: ["REST APIs", "Leaflet.js", "Dynamic Data", "Filtering", "Markers"]
      },
      {
        title: "CMS & E-Commerce",
        icon: "bi-shop",
        description: "Business-focused websites, landing pages, and online storefront concepts.",
        tags: ["WordPress", "Shopify", "Landing Pages", "Lead Generation"]
      },
      {
        title: "Branding & Marketing",
        icon: "bi-megaphone",
        description: "Digital strategy, content systems, and brand assets designed to earn attention.",
        tags: ["Figma", "Branding", "Content Strategy", "Social Media", "AI Content"]
      },
      {
        title: "Project Execution",
        icon: "bi-kanban",
        description: "Planning, communication, documentation, and team coordination.",
        tags: ["Agile", "Scrum", "OpenProject", "Documentation", "Leadership"]
      }
    ],
  
    projects: [
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
        demoUrl: "",
        noticeUrl: "reconstruction.html",
        githubUrl: ""
      },
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
        noticeUrl: "reconstruction.html",
        githubUrl: ""
      },
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
        githubUrl: ""
      },
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
      }
    ]
  };