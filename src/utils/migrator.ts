import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { connection } from '../database';

migrate(connection, { migrationsFolder: './drizzle' });

console.log('Migrations applied!');
