
import { Project, Experience, Skill } from "./schema";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Harbour Digital",
    description: "A modern web studio building fast, modern websites and web apps. Features clear messaging, premium visuals, and measurable results.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    imageUrl: null,
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 1
  },
  {
    id: 2,
    title: "Incident Response Automation",
    description: "Designed and automated IAM workflows reducing manual access provisioning time by 75% while ensuring strict security compliance.",
    techStack: ["Python", "PowerShell", "AWS IAM", "Automation"],
    imageUrl: null,
    demoUrl: null,
    repoUrl: null,
    featured: true,
    order: 2
  },
  {
    id: 3,
    title: "Log Analysis Tool",
    description: "Developed scripts to automate case triage, log parsing, and system health checks for enterprise infrastructure.",
    techStack: ["Python", "Log Analysis", "Scripting"],
    imageUrl: null,
    demoUrl: null,
    repoUrl: null,
    featured: false,
    order: 3
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    company: "Nasdaq Verafin",
    role: "Operations Analyst",
    location: "St. John's, NL, Canada",
    startDate: "Mar 2025",
    endDate: "Present",
    description: "Supporting developer productivity and mission-critical financial crime detection platforms.",
    achievements: [
      "Supported developer productivity and mission-critical financial crime detection platforms.",
      "Collaborated with software engineers and QA teams to troubleshoot build failures.",
      "Analyzed CI/CD pipeline behavior to identify recurring failures.",
      "Supported AWS-hosted environments and incident triage."
    ],
    order: 1
  },
  {
    id: 2,
    company: "Canada Revenue Agency",
    role: "IT Infrastructure Support Analyst",
    location: "St. John's, NL, Canada",
    startDate: "Sept 2021",
    endDate: "Mar 2025",
    description: "Primary contact for diagnosing and resolving complex software and hardware issues.",
    achievements: [
      "Maintained a 97.8% SLA compliance rate for infrastructure incidents.",
      "Designed and automated IAM workflows, reducing manual provisioning by 75%.",
      "Developed Python and PowerShell scripts for automation.",
      "Authored knowledge base articles and technical documentation."
    ],
    order: 2
  }
];

export const SKILLS_DATA: Skill[] = [
  { id: 1, category: "Languages", name: "Python", proficiency: 90, icon: null },
  { id: 2, category: "Languages", name: "JavaScript", proficiency: 85, icon: null },
  { id: 3, category: "Languages", name: "Java", proficiency: 80, icon: null },
  { id: 4, category: "Languages", name: "SQL", proficiency: 85, icon: null },
  { id: 5, category: "Languages", name: "PowerShell", proficiency: 85, icon: null },
  { id: 6, category: "Cloud & DevOps", name: "AWS (EC2, Lambda, RDS)", proficiency: 85, icon: null },
  { id: 7, category: "Cloud & DevOps", name: "Terraform", proficiency: 80, icon: null },
  { id: 8, category: "Cloud & DevOps", name: "Docker", proficiency: 80, icon: null },
  { id: 9, category: "Cloud & DevOps", name: "Jenkins", proficiency: 75, icon: null },
  { id: 10, category: "Cloud & DevOps", name: "Linux", proficiency: 85, icon: null },
  { id: 11, category: "Tools", name: "Git", proficiency: 90, icon: null },
  { id: 12, category: "Tools", name: "ServiceNow", proficiency: 85, icon: null }
];
