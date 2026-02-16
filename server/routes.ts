
import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Static API mock for projects
  app.get(api.projects.list.path, async (_req, res) => {
    res.json([]);
  });

  // Static API mock for experience
  app.get(api.experience.list.path, async (_req, res) => {
    res.json([]);
  });

  // Static API mock for skills
  app.get(api.skills.list.path, async (_req, res) => {
    res.json([]);
  });

  // Contact submission placeholder
  app.post(api.contact.submit.path, async (req, res) => {
    res.status(201).json({ success: true, message: "Message received (mock)" });
  });

  return httpServer;
}
