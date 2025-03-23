import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Basic user model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Template model - for defining extraction rules for different document types
export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  documentType: text("document_type").notNull(), // e.g. "bank_statement", "invoice"
  bankName: text("bank_name"), // e.g. "Chase", "Bank of America"
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
  fields: jsonb("fields").notNull(), // JSON array of fields to extract
  usageCount: integer("usage_count").default(0).notNull(),
});

export const insertTemplateSchema = createInsertSchema(templates).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  usageCount: true,
});

export type InsertTemplate = z.infer<typeof insertTemplateSchema>;
export type Template = typeof templates.$inferSelect;

// Document model - represents an uploaded document
export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  originalFilename: text("original_filename").notNull(),
  contentType: text("content_type").notNull(),
  size: integer("size").notNull(),
  uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
  processed: boolean("processed").default(false).notNull(),
  templateId: integer("template_id").references(() => templates.id),
});

export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
  uploadedAt: true,
  processed: true,
});

export type InsertDocument = z.infer<typeof insertDocumentSchema>;
export type Document = typeof documents.$inferSelect;

// Extracted data model - represents data extracted from a document
export const extractedData = pgTable("extracted_data", {
  id: serial("id").primaryKey(),
  documentId: integer("document_id")
    .references(() => documents.id)
    .notNull(),
  templateId: integer("template_id")
    .references(() => templates.id)
    .notNull(),
  extractedAt: timestamp("extracted_at").defaultNow().notNull(),
  data: jsonb("data").notNull(), // JSON object with extracted data
  verified: boolean("verified").default(false).notNull(),
});

export const insertExtractedDataSchema = createInsertSchema(extractedData).omit({
  id: true,
  extractedAt: true,
  verified: true,
});

export type InsertExtractedData = z.infer<typeof insertExtractedDataSchema>;
export type ExtractedData = typeof extractedData.$inferSelect;

// Feature request model
export const featureRequests = pgTable("feature_requests", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  priority: text("priority").notNull(),
  status: text("status").default("pending").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const insertFeatureRequestSchema = createInsertSchema(featureRequests).omit({
  id: true,
  status: true,
  submittedAt: true,
});

export type InsertFeatureRequest = z.infer<typeof insertFeatureRequestSchema>;
export type FeatureRequest = typeof featureRequests.$inferSelect;
