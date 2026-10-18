export const personalInfo = {
  name: "Ahmed Karam",
  brandName: "AHMED.SEC",
  role: "Cloud-Native Full-Stack Engineer",
  tagline: "System Active",
  subtitle: "Building Scalable Web Applications & Architecting The Infrastructure That Powers Them.",
  valueProposition: {
    forWho: "Organizations seeking Full-Stack & Cloud Engineers",
    delivering: "High-performance web applications, complex API integrations, and resilient cloud/Linux hosting infrastructure",
    result: "Scalable, high-uptime web platforms with seamless deployment pipelines"
  },
  location: "Cairo, EG",
  university: "Egyptian Chinese University (ECU)",
  gpa: "3.3/4.0",
  email: "ahmedemara.sec@gmail.com",
  github: "https://github.com/Ahmed-Karam28",
  linkedin: "https://www.linkedin.com/in/ahmed-karam-emara",
  cvPath: "/Ahmed_Karam_CV.pdf",
  profileImage: "/profile.jpg",
};

export const aboutMeBio = {
  paragraph1: "I build highly interactive, accessible, and performant web applications. My development process is rooted in Software Engineering principles, utilizing tools like Next.js, React, Tailwind CSS, and GSAP. I have extensive experience engineering complex frontend features, resolving intricate RTL layout challenges, and implementing full Arabic/English internationalization (i18n).",
  paragraph2: "Today, my engineering focus is centered on Linux system administration, enterprise networking, and automated workflows. I have hands-on experience provisioning headless Linux (Ubuntu) server environments on Raspberry Pi for deterministic multi-tier architectures, as well as simulating complex multi-site enterprise network topologies featuring Layer 3 switching, inter-VLAN routing, OSPF, and port security. Combining root-cause log analysis, Bash scripting, and Git-based version control, I bring a software engineer's analytical mindset to infrastructure stability, network reliability, and continuous automation."
};

export const stats = [
  { label: "Cumulative GPA", value: 3.3, format: (v) => `${v.toFixed(1)}/4.0`, type: "gpa" },
  { label: "Major Projects", value: 7, format: (v) => `${Math.floor(v)}+`, type: "projects" },
  { label: "Success Rate", value: 100, format: (v) => `${Math.floor(v)}%`, type: "success" },
  { label: "Started @ ECU", value: 2023, format: (v) => `${Math.floor(v)}`, type: "year" },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  institution: "Egyptian Chinese University (ECU)",
  period: "2023 - Present",
  gpa: "3.3/4.0",
  courses: ["Linux (Ubuntu/CLI)", "Enterprise Networks (OSPF/VLANs)", "Data Structures", "Algorithms", "SDLC"],
  focusAreas: [
    "Headless Linux Systems Administration",
    "Enterprise Network Architecture & Routing",
    "Software & API Test Automation"
  ]
};

export const scholarship = {
  title: "Software Development – Software Tester",
  provider: "Digital Egypt Pioneers Initiative (DEPI) • Ministry Scholarship",
  period: "2024 – 2025",
  status: "Completed",
  description: "Comprehensive national scholarship training in software QA, test case execution, Postman API testing, and Selenium automation frameworks.",
  modules: [
    "Java Programming Fundamentals",
    "Fundamentals of Testing (ISTQB)",
    "SDLC & Defect Lifecycle (Jira)",
    "API Endpoint Testing (Postman)",
    "Test Automation (Selenium WebDriver)",
    "CI/CD Pipeline Foundations"
  ],
  tags: ["Agile/Scrum", "Test Automation", "Selenium", "Postman", "API Testing"]
};

export const bentoSkillDomains = [
  {
    id: "infrastructure-networking",
    number: "01",
    title: "Infrastructure & Enterprise Networking",
    subtitle: "Linux Administration & Layer 3 Routing",
    description: "Provisioning headless Linux server environments, managing daemon services, Layer 3 switching, inter-VLAN routing, and OSPF protocols.",
    tools: ["Linux (Ubuntu/CLI)", "Headless Systems", "Routing & Switching", "Inter-VLAN", "OSPF", "Port Security"]
  },
  {
    id: "scripting-automation",
    number: "02",
    title: "OS, Scripting & Automation",
    subtitle: "System Daemons & Automation Pipelines",
    description: "Automating system tasks, configuring systemd background daemons, root-cause log analysis, and Git version control.",
    tools: ["Bash Scripting", "Systemd Services", "Log Analysis", "Git & GitHub", "CI/CD Foundations"]
  },
  {
    id: "frontend-web-architecture",
    number: "03",
    title: "Frontend & Web Architecture",
    subtitle: "Interactive UIs & Performance",
    description: "Developing highly interactive, responsive, and localized user interfaces with a strong focus on performance optimization and complex DOM animations.",
    tools: ["React", "Next.js", "TypeScript / JavaScript", "Tailwind CSS", "GSAP"]
  },
  {
    id: "quality-operations",
    number: "04",
    title: "Testing, Quality & Operations",
    subtitle: "Test Automation & Agile Execution",
    description: "Building automated testing scripts, endpoint validation, defect lifecycle management, and Agile sprint execution.",
    tools: ["Selenium WebDriver", "Postman API", "Jira", "Agile / Scrum", "SDLC"]
  }
];

export const techStackRibbon = [
  "Linux (Ubuntu/CLI)", "Enterprise Networking", "OSPF", "VLANs", "Bash Scripting",
  "Python", "Java", "C++", "Git & GitHub", "Selenium WebDriver",
  "Postman API", "Jira", "ROS2", "Systemd"
];

export const projects = [
  {
    id: "hekayah",
    number: "01",
    category: "Full-Stack Application",
    badge: "FULL-STACK • 2025",
    color: "amber",
    title: "Hekayah - AI-Assisted Manga Platform",
    subtitle: "AI-Powered Comic Creation Platform",
    headline: "AI-Powered Comic Creation Platform",
    description: "Developed frontend features and automated testing suites for an AI-powered comic creation platform. Engineered complete Arabic localization (i18n), resolved complex RTL layout shifts in project creation modals, and built end-to-end QA automation.",
    longDescription: "Developed frontend features and automated testing suites for an AI-powered comic creation platform. Engineered complete Arabic localization (i18n), resolved complex RTL layout shifts in project creation modals, and built end-to-end QA automation.",
    metrics: [
      { label: "Stack", value: "React + Next.js" },
      { label: "QA", value: "Automation" },
      { label: "Type", value: "Full Stack" }
    ],
    implementation: [
      "Developed frontend features for AI-powered comic creation platform",
      "Engineered complete Arabic localization (i18n)",
      "Resolved complex RTL layout shifts in project creation modals",
      "Built end-to-end QA automation testing suites"
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "QA Automation"],
    liveLink: null,
    githubLink: null,
    image: "/projects/hekayah.png",
    images: [
      { src: "/projects/hekayah.png", caption: "Hekayah Platform Interface" }
    ]
  },
  {
    id: "nasj",
    number: "02",
    category: "E-commerce",
    badge: "E-COMMERCE • 2025",
    color: "emerald",
    title: "NASJ - Luxury E-commerce Platform",
    subtitle: "Highly Performant B2C Web Store",
    headline: "Highly Performant B2C Web Store",
    description: "Architected and deployed a highly performant B2C web store. Built frontend interfaces for product/category management and integrated Next.js API routes with Dockerized environments to handle reliable SMTP email notifications and build-time variables.",
    longDescription: "Architected and deployed a highly performant B2C web store. Built frontend interfaces for product/category management and integrated Next.js API routes with Dockerized environments to handle reliable SMTP email notifications and build-time variables.",
    metrics: [
      { label: "Stack", value: "Next.js" },
      { label: "Infra", value: "Docker" },
      { label: "Type", value: "E-commerce" }
    ],
    implementation: [
      "Architected and deployed a highly performant B2C web store",
      "Built frontend interfaces for product/category management",
      "Integrated Next.js API routes for seamless data handling",
      "Configured Dockerized environments for reliable SMTP notifications"
    ],
    tags: ["Next.js", "Docker", "API Routes"],
    liveLink: null,
    githubLink: null,
    image: "/projects/nasj1.png",
    images: [
      { src: "/projects/nasj1.png", caption: "NASJ Storefront" },
      { src: "/projects/nasj2.png", caption: "Product Discovery" },
      { src: "/projects/nasj3_admin.png", caption: "Admin Dashboard Overview" },
      { src: "/projects/nasj4_admin.png", caption: "Category Management" }
    ]
  },
  {
    id: "moodfood",
    number: "03",
    category: "Restaurant Discovery Platform",
    badge: "FULL-STACK • 2025",
    color: "amber",
    title: "MoodFood — Restaurant Discovery Platform",
    subtitle: "Saudi Restaurant Discovery Platform",
    headline: "Restaurant Discovery Platform",
    description: "Comprehensive restaurant discovery platform for Saudi Arabia, helping users explore restaurants, ratings, menus, food and beverage offerings, locations, and detailed venue information.",
    longDescription: "Comprehensive restaurant discovery platform for Saudi Arabia, helping users explore restaurants, ratings, menus, food and beverage offerings, locations, and detailed venue information.",
    metrics: [
      { label: "Stack", value: "Next.js + Express" },
      { label: "Database", value: "MySQL / Sequelize" },
      { label: "Type", value: "Full Stack" }
    ],
    implementation: [
      "Engineered RESTful API architecture with Node.js, Express, TypeScript, and Sequelize ORM",
      "Built a modern interactive restaurant discovery experience with Next.js and Tailwind CSS",
      "Implemented restaurant, menu, product, and location data management",
      "Designed multi-role authentication and permission management for platform administration"
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Sequelize", "MySQL", "Tailwind CSS", "REST API"],
    liveLink: "https://moodfoodksa.com/",
    githubLink: null,
    image: "/projects/moodfoodhero1.png",
    images: [
      { src: "/projects/moodfoodhero1.png", caption: "Restaurant Discovery & Exploration" },
      { src: "/projects/moodfoodadmin1.png", caption: "Admin Dashboard - Analytics & Overview" },
      { src: "/projects/moodfoodadmin2.png", caption: "Admin Dashboard - Restaurant & Menu Management" }
    ]
  },
  {
    id: "easyrent",
    number: "04",
    category: "Web Application",
    badge: "LIVE • 2025",
    color: "green",
    title: "EasyRent - Property Rental Platform",
    subtitle: "AI-Powered Property Rental Platform",
    headline: "AI-Powered Property Rental Platform",
    description: "AI-powered property rental platform for finding apartments, villas, and chalets in Egypt. Features virtual tours, smart property matching algorithm, verified listings, instant booking with digital contracts, and seamless search experience.",
    longDescription: "Modern real estate platform connecting renters with verified properties through AI matching, virtual tours, and instant digital contracts for apartments, villas, and chalets across Egypt.",
    metrics: [
      { label: "Stack", value: "React" },
      { label: "Type", value: "Full Stack" },
      { label: "Status", value: "Live" }
    ],
    implementation: [
      "Built AI-powered property matching algorithm for personalized recommendations",
      "Implemented virtual tour system with interactive property exploration",
      "Created instant booking flow with digital contract generation",
      "Integrated property verification system with ground team validation"
    ],
    tags: ["React", "AI Matching", "Virtual Tours", "Digital Contracts"],
    liveLink: "https://easyrenteg.vercel.app/",
    githubLink: "https://github.com/Ahmed-Karam28/easy-rent",
    image: "/projects/easyrent.jpg",
    images: [
      { src: "/projects/easyrent.jpg", caption: "EasyRent Platform Interface" }
    ]
  },
  {
    id: "dental-clinic",
    number: "05",
    category: "Healthcare",
    badge: "LIVE • 2025",
    color: "blue",
    title: "Modern Dental Practice Platform",
    subtitle: "Dental Clinic Management System",
    headline: "Dental Clinic Management System",
    description: "A comprehensive clinic management system featuring real-time booking wizard, Firebase backend, bilingual interface with professional RTL support, and integrated multi-channel notifications (Email, WhatsApp, Telegram).",
    longDescription: "Full-stack healthcare platform with real-time booking, bilingual support (EN/AR with RTL), and multi-channel notifications for seamless patient management.",
    metrics: [
      { label: "Stack", value: "React 19" },
      { label: "Languages", value: "EN + AR" },
      { label: "Status", value: "Live" }
    ],
    implementation: [
      "Built 4-step booking wizard with real-time validation & working hours enforcement",
      "Implemented multi-channel notifications (EmailJS, WhatsApp, Telegram, Firestore)",
      "Created professional bilingual UI with RTL support for Arabic",
      "Developed admin dashboard with Firebase Auth & real-time sync"
    ],
    tags: ["React 19", "Firebase", "Tailwind CSS", "i18n/RTL", "Vite"],
    liveLink: "https://drmoustafa.vercel.app/",
    githubLink: "https://github.com/Ahmed-Karam28/dental-clinic",
    image: "/projects/clinic1.png",
    images: [
      { src: "/projects/clinic1.png", caption: "Dental Practice Landing & Overview" },
      { src: "/projects/clinic2.png", caption: "Booking Wizard & Scheduling" }
    ]
  },
  {
    id: "mariam-portfolio",
    number: "06",
    category: "Architecture Portfolio Website",
    badge: "CLIENT • 2025",
    color: "amber",
    title: "Architecture Portfolio Website",
    subtitle: "Professional Architecture Firm Portfolio",
    headline: "Architecture Firm Portfolio Website",
    description: "Professional architecture portfolio website showcasing hospitality, residential, and mixed-use projects across Egypt, with dynamic project pages, responsive layouts, SEO optimization, and smooth interactive experiences.",
    longDescription: "Professional architecture portfolio website showcasing hospitality, residential, and mixed-use projects across Egypt, with dynamic project pages, responsive layouts, SEO optimization, and smooth interactive experiences.",
    metrics: [
      { label: "Framework", value: "Next.js 14" },
      { label: "Type", value: "Client Work" },
      { label: "Status", value: "Production" }
    ],
    implementation: [
      "Built dynamic project routing with slug-based architecture project pages",
      "Implemented smooth scroll-driven interactions and motion with Framer Motion",
      "Developed SEO-optimized pages with Open Graph and social sharing metadata",
      "Created a responsive mobile-first experience across desktop, tablet, and mobile"
    ],
    tags: ["Next.js 14", "TypeScript", "Framer Motion", "CSS Modules", "SEO"],
    liveLink: "https://mariam-portofolio.vercel.app/",
    githubLink: null,
    image: "/projects/archeticture-portofolio.png",
    images: [
      { src: "/projects/archeticture-portofolio.png", caption: "Architecture Portfolio Showcase" }
    ]
  },
  {
    id: "headless-linux-wheelchair",
    number: "07",
    category: "Linux & Systems",
    badge: "LINUX ADMIN • ROS 2",
    color: "emerald",
    title: "Headless Linux & ROS 2 Wheelchair Robotics Server",
    subtitle: "Headless Linux Server Setup, Daemon Services & ROS 2 Middleware",
    headline: "Headless Linux Server Architecture & ROS 2 Wheelchair Robotics",
    description: "Configured and deployed a headless Linux server environment on Raspberry Pi to orchestrate autonomous wheelchair robotics. Configured systemd background daemons, ROS 2 pub/sub services, network interfaces, low-latency telemetry, and remote SSH administration.",
    longDescription: "Server administration and robotics middleware project. Transformed a Raspberry Pi into a dedicated headless Linux server running ROS 2 (Robot Operating System), orchestrating background system daemons, hardware abstraction layers, motor actuation nodes, and remote network control.",
    metrics: [
      { label: "OS / Kernel", value: "Headless Linux" },
      { label: "Middleware", value: "ROS 2 Services" },
      { label: "Hardware", value: "Raspberry Pi" }
    ],
    implementation: [
      "Provisioned & secured headless Linux server environment on Raspberry Pi with custom networking & SSH administration",
      "Configured systemd background daemons for automated ROS 2 node startup, health checks, and process isolation",
      "Architected ROS 2 publisher/subscriber nodes for real-time sensor telemetry and low-latency motor control",
      "Managed Linux kernel resource allocation, serial hardware interfaces, and multi-threaded sensor pipelines"
    ],
    tags: ["Linux Administration", "Headless Server", "ROS 2", "Raspberry Pi", "Systemd Services", "SSH", "C++", "Python"],
    liveLink: null,
    githubLink: null,
    image: null,
    images: []
  },
  {
    id: "bluetooth-control",
    number: "08",
    category: "Hardware",
    badge: "v1.0.2 • 2024",
    color: "cyan",
    title: "Bluetooth Control Unit",
    subtitle: "Smart Autonomous Vehicle System",
    headline: "Smart Autonomous Vehicle System",
    description: "A wireless robotic system architected with Arduino Uno. Utilizes HC-05 modules for command transmission from mobile interfaces to L298N motor drivers.",
    longDescription: "End-to-end embedded systems project integrating multiple sensors, motor drivers, and wireless communication protocols.",
    metrics: [
      { label: "Response Time", value: "<50ms" },
      { label: "Range", value: "~10m" },
      { label: "Success Rate", value: "98%" }
    ],
    implementation: [
      "Architected bidirectional Bluetooth protocol using HC-05 modules",
      "Implemented PWM motor control with L298N driver integration",
      "Developed Android companion app for real-time command transmission",
      "Optimized signal processing to achieve <50ms latency"
    ],
    tags: ["C++", "Hardware", "Bluetooth", "Robotics"],
    liveLink: null,
    githubLink: "https://github.com/Ahmed-Karam28/bluetooth-control-unit",
    image: "/projects/bluetooth-control.png",
    images: [
      { src: "/projects/bluetooth-control.png", caption: "Smart Robotic Car & Mobile Telemetry Controller" }
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2023 – Present",
    title: "B.Sc. Software Engineering",
    org: "Egyptian Chinese University (ECU)",
    color: "cyan",
    desc: "GPA 3.3/4.0 · Data Structures · OOP · Algorithms · Networks · Embedded Systems",
    tags: ["Computer Science", "GPA 3.3/4.0"],
    active: true
  },
  {
    period: "2024 – Present",
    title: "DEPI Scholar — Software Testing Track",
    org: "Ministry of Communications & IT, Egypt",
    color: "green",
    desc: "Competitive national scholarship · ISTQB Fundamentals · Selenium · Agile · Capstone project",
    tags: ["ISTQB", "Selenium", "Agile"],
    active: true
  },
  {
    period: "2025 – 2026",
    title: "Freelance Web Developer",
    org: "Independent · Client Projects",
    color: "violet",
    desc: "3 production apps shipped · EasyRent, Dental Clinic, Architecture Portfolio · React · Next.js · Firebase",
    tags: ["React", "Next.js", "Firebase"],
    active: false
  },
  {
    period: "2022",
    title: "Google IT Support & Networking",
    org: "Google / Coursera",
    color: "indigo",
    desc: "3 certificates · Technical Support · TCP/IP Networking · Operating Systems",
    tags: ["TCP/IP", "Linux", "IT Support"],
    active: false
  }
];

export const certifications = [
  {
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn Learning",
    date: "2025",
    color: "blue",
    tags: ["Network Security", "Threat Analysis", "OWASP"],
    file: "/certifications/CertificateOfCompletion_Cybersecurity Foundations (2).pdf",
    credentialId: null,
    verifyUrl: null,
    screenshot: "/certifications/photo (2).png"
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google / Coursera",
    date: "2022",
    color: "purple",
    tags: ["Linux", "Windows OS", "CLI", "File Systems"],
    file: "/certifications/Coursera VN6LBGJ74LQS.pdf",
    credentialId: "VN6LBGJ74LQS",
    verifyUrl: "https://coursera.org/verify/VN6LBGJ74LQS",
    screenshot: "/certifications/Screenshot 2026-02-18 081755.png"
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google / Coursera",
    date: "2022",
    color: "cyan",
    tags: ["IT Support", "Troubleshooting", "Customer Service"],
    file: "/certifications/Coursera BY9PGQKZMGW6.pdf",
    credentialId: "BY9PGQKZMGW6",
    verifyUrl: "https://coursera.org/verify/BY9PGQKZMGW6",
    screenshot: "/certifications/Screenshot 2026-02-18 081711.png"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    date: "2022",
    color: "cyan",
    tags: ["TCP/IP", "DNS/DHCP", "Network Protocols", "OSI Model"],
    file: "/certifications/Coursera 68JFV9UCUP44.pdf",
    credentialId: "68JFV9UCUP44",
    verifyUrl: "https://coursera.org/verify/68JFV9UCUP44",
    screenshot: "/certifications/Screenshot 2026-02-18 081732.png"
  },
  {
    title: "EF SET English Certificate",
    issuer: "EF Standard English Test",
    date: "2024",
    color: "green",
    tags: ["C2 Proficient", "Reading", "Listening"],
    file: "/certifications/EF SET Certificate.pdf",
    credentialId: null,
    verifyUrl: "https://cert.efset.org/vCXPDk",
    screenshot: null
  }
];
