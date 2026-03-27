import { pgTable, text, serial, integer, timestamp, boolean, json, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const donorsTable = pgTable("donors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  totalDonated: real("total_donated").notNull().default(0),
  lastDonationDate: timestamp("last_donation_date"),
  donationCount: integer("donation_count").notNull().default(0),
  tier: text("tier").notNull().default("supporter"),
  notes: text("notes"),
  isRecurring: boolean("is_recurring").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const donationsTable = pgTable("donations", {
  id: serial("id").primaryKey(),
  donorId: integer("donor_id").references(() => donorsTable.id),
  amount: real("amount").notNull(),
  type: text("type").notNull().default("one-time"),
  method: text("method"),
  purpose: text("purpose"),
  notes: text("notes"),
  date: timestamp("date").defaultNow(),
});

export const volunteersTable = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  skills: text("skills"),
  availability: text("availability"),
  hoursLogged: real("hours_logged").notNull().default(0),
  status: text("status").notNull().default("active"),
  startDate: timestamp("start_date").defaultNow(),
  notes: text("notes"),
});

export const financialRecordsTable = pgTable("financial_records", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  category: text("category").notNull(),
  amount: real("amount").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").defaultNow(),
  fiscalYear: integer("fiscal_year").notNull(),
  quarter: integer("quarter").notNull(),
  approvedBy: text("approved_by"),
  receiptUrl: text("receipt_url"),
});

export const impactMetricsTable = pgTable("impact_metrics", {
  id: serial("id").primaryKey(),
  studentId: text("student_id").notNull(),
  studentName: text("student_name").notNull(),
  programCompleted: text("program_completed").notNull(),
  completionDate: timestamp("completion_date"),
  employed: boolean("employed").notNull().default(false),
  employerName: text("employer_name"),
  startingSalary: real("starting_salary"),
  projectsCompleted: integer("projects_completed").notNull().default(0),
  peopleHired: integer("people_hired").notNull().default(0),
  communityProjectsLed: integer("community_projects_led").notNull().default(0),
  certifications: json("certifications").$type<string[]>(),
  economicImpactEstimate: real("economic_impact_estimate"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activityLogTable = pgTable("activity_log", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  userName: text("user_name"),
  action: text("action").notNull(),
  entityType: text("entity_type"),
  entityId: text("entity_id"),
  details: text("details"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertDonorSchema = createInsertSchema(donorsTable).omit({ id: true, createdAt: true });
export type InsertDonor = z.infer<typeof insertDonorSchema>;
export type Donor = typeof donorsTable.$inferSelect;

export const insertDonationSchema = createInsertSchema(donationsTable).omit({ id: true, date: true });
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donationsTable.$inferSelect;

export const insertVolunteerSchema = createInsertSchema(volunteersTable).omit({ id: true, startDate: true });
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type Volunteer = typeof volunteersTable.$inferSelect;

export const insertFinancialRecordSchema = createInsertSchema(financialRecordsTable).omit({ id: true });
export type InsertFinancialRecord = z.infer<typeof insertFinancialRecordSchema>;
export type FinancialRecord = typeof financialRecordsTable.$inferSelect;

export const insertImpactMetricSchema = createInsertSchema(impactMetricsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertImpactMetric = z.infer<typeof insertImpactMetricSchema>;
export type ImpactMetric = typeof impactMetricsTable.$inferSelect;
