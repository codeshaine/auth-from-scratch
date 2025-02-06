import Database from "better-sqlite3";
import dotenv from "dotenv";
dotenv.config();

export const db = new Database(
  process.env.DATABASE_URL?.replace("sqlite:", ""),
  {
    verbose: console.log,
  }
);
