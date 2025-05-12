import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  schema: "./app/database/schema.ts",
  out: "./migrations",
  casing: "snake_case",
});
