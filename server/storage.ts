
import { db } from "./db";
import {
  projects,
  experience,
  skills,
  messages,
  type InsertMessage,
  type Message
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<typeof projects.$inferSelect[]>;
  getExperience(): Promise<typeof experience.$inferSelect[]>;
  getSkills(): Promise<typeof skills.$inferSelect[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getProjects() {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getExperience() {
    return await db.select().from(experience).orderBy(experience.order);
  }

  async getSkills() {
    return await db.select().from(skills);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
