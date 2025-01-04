import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  user_id: integer("user_id").primaryKey().notNull(),
  chat_id: integer('chat_id').notNull(),
  username: text('username'),
  first_name: text('first_name'),
  last_name: text('last_name'),
});

export type UserInsert = typeof users.$inferInsert;
export type UserSelect = typeof users.$inferSelect;
