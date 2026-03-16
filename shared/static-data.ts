import { Project, Experience, Skill } from "./schema";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Crewly Workforce Management",
    description:
      "Crewly is a comprehensive workforce management platform that transforms how businesses handle their operations. Our intelligent scheduling system provides real-time visibility into your workforce, enabling you to optimize shift coverage and reduce labor costs. With powerful analytics, you'll gain actionable insights to make data-driven decisions about your staffing needs. Our AI-driven platform learns from your scheduling patterns over time, delivering increasingly precise recommendations to streamline your operations. From accurate payroll forecasting to strategic workforce planning, Crewly empowers you to scale your business efficiently while maintaining optimal staffing levels.",
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Redux",
      "Material-UI",
    ],
    imageUrl: "./assets/demo-video2.mp4",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 1,
  },
  {
    id: 2,
    title: "Student Career Prediction System",
    description:
      "A machine learning-based system to predict students' career paths using their grades, interests, and personality traits. Implements data cleaning, preprocessing, and a Random Forest Classifier with performance evaluation metrics.",
    techStack: [
      "Python",
      "scikit-learn",
      "pandas",
      "numpy",
      "matplotlib",
      "seaborn",
      "Tkinter",
    ],
    imageUrl: "./assets/CF-Matrix-Student-Majors.png", // Placeholder - original image not found
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 3,
  },
  {
    id: 3,
    title: "Customer Churn Prediction Model",
    description:
      "A machine learning model to predict customer churn for a telecommunications company, using the 'Telco Customer Churn' dataset. Implements logistic regression with L1/L2 regularization and evaluates performance using accuracy, confusion matrix, and visualizations.",
    techStack: [
      "Python",
      "scikit-learn",
      "pandas",
      "numpy",
      "matplotlib",
      "seaborn",
      "L1/L2 Regularization",
    ],
    imageUrl: "./assets/Figure1-Churn.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 4,
  },
  {
    id: 4,
    title: "Ricochet Robots",
    description:
      "A puzzle-solving game implemented in Java with a focus on object-oriented principles. Contributed to both frontend and backend development, including accessibility features for visually impaired users.",
    techStack: ["Java", "Object-Oriented Design", "Accessibility"],
    imageUrl: "./assets/ricochet1.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 5,
  },
  {
    id: 5,
    title: "Cellular Automaton",
    description:
      "Explores grid-based simulations using Java, highlighting algorithmic behavior like Conway's Game of Life. Features include random initialization, spaceship and pulsar patterns, and customizable grid parameters.",
    techStack: ["Java", "Algorithms", "Simulation"],
    imageUrl: "./assets/cellular_automaton.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: false,
    order: 6,
  },
  {
    id: 6,
    title: "A-Star Pathfinding Algorithm",
    description:
      "Implementation of the A* search algorithm in JavaScript with customizable grid and obstacle support. Includes visualization of the pathfinding process and comparison with BFS/DFS algorithms.",
    techStack: ["JavaScript", "Algorithms", "Pathfinding"],
    imageUrl: "./assets/astar_algorithm.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 7,
  },
  {
    id: 7,
    title: "Sudoku Solver with Genetic Algorithm",
    description:
      "Solves Sudoku puzzles using genetic algorithms and heuristics. Features a fitness graph to visualize the algorithm's progress and multiple solving strategies.",
    techStack: ["JavaScript", "Genetic Algorithms", "Heuristics"],
    imageUrl: "./assets/sudoku_board_algorithm.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: false,
    order: 8,
  },
  {
    id: 8,
    title: "TRON AI Bot",
    description:
      "AI bot for the TRON game that optimizes movement and strategy. Implements path exploration and decision-making algorithms to maximize coverage while avoiding self-traps.",
    techStack: ["C++", "AI", "Game Development"],
    imageUrl: "./assets/tron_ai_bot.jpg",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 9,
  },
  {
    id: 9,
    title: "StarCraft BroodWar AI Bot",
    description:
      "Competitive AI bot for StarCraft: BroodWar that implements strategic decision-making for Zerg units. Features efficient scouting, resource management, and adaptive combat tactics.",
    techStack: ["C++", "AI", "Real-time Strategy", "BroodWar API"],
    imageUrl: "./assets/starcraft_project.jpg",
    demoUrl: "https://www.youtube.com/watch?v=JaIZM8mKcls",
    repoUrl: null,
    featured: true,
    order: 10,
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    company: "Nasdaq Verafin",
    role: "Operations Analyst",
    location: "St. John's, NL, Canada",
    startDate: "Mar 2025",
    endDate: "Present",
    description:
      "Supporting developer productivity and mission-critical financial crime detection platforms.",
    achievements: [
      "Enhanced developer productivity through case handling, process optimzations, and automation.",
      "Collaborated with software engineers and QA teams to troubleshoot build failures.",
      "Analyzed CI/CD pipeline behavior to identify recurring failures.",
      "Supported AWS-hosted environments and incident triage.",
    ],
    order: 1,
  },
  {
    id: 2,
    company: "Canada Revenue Agency",
    role: "IT Infrastructure Support Analyst",
    location: "St. John's, NL, Canada",
    startDate: "Sept 2021",
    endDate: "Mar 2025",
    description:
      "Primary contact for diagnosing and resolving complex software and hardware issues.",
    achievements: [
      "Maintained a 97.8% SLA compliance rate for infrastructure incidents.",
      "Designed and automated IAM workflows, reducing manual provisioning by 75%.",
      "Developed Python and PowerShell scripts for automation.",
      "Authored knowledge base articles and technical documentation.",
    ],
    order: 2,
  },
];

export const SKILLS_DATA: Skill[] = [
  // Languages
  { id: 1, category: "Languages", name: "Python", proficiency: 90, icon: null },
  {
    id: 2,
    category: "Languages",
    name: "JavaScript",
    proficiency: 85,
    icon: null,
  },
  {
    id: 3,
    category: "Languages",
    name: "TypeScript",
    proficiency: 80,
    icon: null,
  },
  { id: 4, category: "Languages", name: "Java", proficiency: 80, icon: null },
  { id: 5, category: "Languages", name: "SQL", proficiency: 85, icon: null },
  {
    id: 6,
    category: "Languages",
    name: "PowerShell",
    proficiency: 85,
    icon: null,
  },
  {
    id: 7,
    category: "Languages",
    name: "Bash/Shell",
    proficiency: 80,
    icon: null,
  },

  // Cloud & Infrastructure
  {
    id: 8,
    category: "Cloud & DevOps",
    name: "AWS (EC2, Lambda, IAM, RDS, S3)",
    proficiency: 85,
    icon: null,
  },
  {
    id: 9,
    category: "Cloud & DevOps",
    name: "Terraform",
    proficiency: 80,
    icon: null,
  },
  {
    id: 10,
    category: "Cloud & DevOps",
    name: "Docker",
    proficiency: 80,
    icon: null,
  },
  {
    id: 11,
    category: "Cloud & DevOps",
    name: "Kubernetes",
    proficiency: 75,
    icon: null,
  },
  {
    id: 12,
    category: "Cloud & DevOps",
    name: "CI/CD Pipelines",
    proficiency: 80,
    icon: null,
  },

  // Tools & Platforms
  { id: 13, category: "Tools", name: "Git", proficiency: 90, icon: null },
  { id: 14, category: "Tools", name: "Jenkins", proficiency: 80, icon: null },
  {
    id: 15,
    category: "Tools",
    name: "GitHub Actions",
    proficiency: 85,
    icon: null,
  },

  // Monitoring & Analytics
  {
    id: 16,
    category: "Monitoring",
    name: "CloudWatch",
    proficiency: 85,
    icon: null,
  },
  {
    id: 17,
    category: "Monitoring",
    name: "Grafana",
    proficiency: 75,
    icon: null,
  },
  {
    id: 18,
    category: "Monitoring",
    name: "Splunk",
    proficiency: 80,
    icon: null,
  },

  // Platforms & Systems
  {
    id: 19,
    category: "Platforms",
    name: "Linux/Unix",
    proficiency: 85,
    icon: null,
  },
  {
    id: 20,
    category: "Platforms",
    name: "Windows Server",
    proficiency: 75,
    icon: null,
  },
  {
    id: 21,
    category: "Platforms",
    name: "ServiceNow",
    proficiency: 85,
    icon: null,
  },
  {
    id: 22,
    category: "Platforms",
    name: "BMC Remedy/Helix",
    proficiency: 80,
    icon: null,
  },
  {
    id: 23,
    category: "Platforms",
    name: "Salesforce",
    proficiency: 80,
    icon: null,
  },

  // Security
  { id: 24, category: "Security", name: "IAM", proficiency: 85, icon: null },
  {
    id: 25,
    category: "Security",
    name: "Security Best Practices",
    proficiency: 85,
    icon: null,
  },
  {
    id: 26,
    category: "Security",
    name: "Data Governance",
    proficiency: 80,
    icon: null,
  },
];
