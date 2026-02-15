
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { projects, experience, skills } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Projects
  app.get(api.projects.list.path, async (_req, res) => {
    const projectsList = await storage.getProjects();
    res.json(projectsList);
  });

  // Experience
  app.get(api.experience.list.path, async (_req, res) => {
    const experienceList = await storage.getExperience();
    res.json(experienceList);
  });

  // Skills
  app.get(api.skills.list.path, async (_req, res) => {
    const skillsList = await storage.getSkills();
    res.json(skillsList);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data Endpoint (Internal use or auto-run)
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    // Seed Projects
    await db.insert(projects).values([
      {
        title: "Harbour Digital",
        description: "A modern web studio building fast, modern websites and web apps. Features clear messaging, premium visuals, and measurable results.",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        featured: true,
        order: 1
      },
      {
        title: "Incident Response Automation",
        description: "Designed and automated IAM workflows reducing manual access provisioning time by 75% while ensuring strict security compliance.",
        techStack: ["Python", "PowerShell", "AWS IAM", "Automation"],
        featured: true,
        order: 2
      },
      {
        title: "Log Analysis Tool",
        description: "Developed scripts to automate case triage, log parsing, and system health checks for enterprise infrastructure.",
        techStack: ["Python", "Log Analysis", "Scripting"],
        featured: false,
        order: 3
      }
    ]);

    // Seed Experience
    await db.insert(experience).values([
      {
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
    ]);

    // Seed Skills
    await db.insert(skills).values([
      { category: "Languages", name: "Python", proficiency: 90 },
      { category: "Languages", name: "JavaScript", proficiency: 85 },
      { category: "Languages", name: "Java", proficiency: 80 },
      { category: "Languages", name: "SQL", proficiency: 85 },
      { category: "Languages", name: "PowerShell", proficiency: 85 },
      { category: "Cloud & DevOps", name: "AWS (EC2, Lambda, RDS)", proficiency: 85 },
      { category: "Cloud & DevOps", name: "Terraform", proficiency: 80 },
      { category: "Cloud & DevOps", name: "Docker", proficiency: 80 },
      { category: "Cloud & DevOps", name: "Jenkins", proficiency: 75 },
      { category: "Cloud & DevOps", name: "Linux", proficiency: 85 },
      { category: "Tools", name: "Git", proficiency: 90 },
      { category: "Tools", name: "ServiceNow", proficiency: 85 }
    ]);
  }
}
