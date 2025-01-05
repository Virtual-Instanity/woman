import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/database/schemas/*.schema.ts",
  out: "./drizzle",
});