import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DATABASE_URL

if (!dbUrl) {
  throw new Error("DATABASE_URL is not defined. Please check your .env file.");
}

const sql = neon(dbUrl);
const db = drizzle({ client: sql });
