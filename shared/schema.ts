
import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Projects table to showcase work
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(), // Array of strings for tags
  imageUrl: text("image_url"),
  demoUrl: text("demo_url"),
  repoUrl: text("repo_url"),
  featured: boolean("featured").default(false),
  order: integer("order").default(0),
});

// Experience table for the interactive timeline
export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  location: text("location"),
  startDate: text("start_date").notNull(), // Using text for flexibility (e.g. "Mar 2025") or date
  endDate: text("end_date"), // Nullable for "Present"
  description: text("description").notNull(),
  achievements: text("achievements").array(), // List of bullet points
  order: integer("order").default(0),
});

// Skills table for the skills matrix/cloud
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // e.g., "Frontend", "Backend", "DevOps"
  name: text("name").notNull(),
  proficiency: integer("proficiency").default(100), // 0-100
  icon: text("icon"), // Icon name or URL
});

// Contact/Messages table
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });

// === TYPES ===

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Experience = typeof experience.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Request Types
export type CreateMessageRequest = InsertMessage;
