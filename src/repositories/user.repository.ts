import { and, eq } from "drizzle-orm";
import { connection } from "../database";
import { users, type UserSelect, type UserInsert } from "../database";

export class UserRepository {
  async getById(user: UserSelect) {
    return connection
      .select()
      .from(users)
      .where(
        and(
          eq(users.user_id, user.user_id),
          eq(users.chat_id, user.chat_id)
        )
      );
  }

  async findOrCreate(user: UserInsert) {
    return connection
      .insert(users)
      .values(user)
      .onConflictDoUpdate({
        target: [users.user_id, users.chat_id],
        set: user,
      });
  }

  async create(user: UserInsert) {
    return connection.insert(users).values(user);
  }

  async update(user: UserSelect) {
    return connection
      .update(users)
      .set(user)
      .where(
        eq(users.user_id, user.user_id)
      );
  }

  async delete(id: number) {
    return connection.delete(users).where(eq(users.user_id, id));
  }
}