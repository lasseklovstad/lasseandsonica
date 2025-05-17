import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const rsvps = sqliteTable("rsvps", {
  id: integer().primaryKey({ autoIncrement: true }),
  fullName: text().notNull(),
  fullNameGuest: text().notNull(),
  email: text().notNull(),
  attending: text({ enum: ["yes", "no"] }).notNull(),
  foodPreferences: text().notNull(),
  comments: text().notNull(),
  createdAt: integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
});
