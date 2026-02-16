import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "waitlist.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id    INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT    NOT NULL UNIQUE,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
  return _db;
}

export function addToWaitlist(email: string): boolean {
  const db = getDb();
  try {
    db.prepare("INSERT INTO waitlist (email) VALUES (?)").run(
      email.trim().toLowerCase(),
    );
    return true;
  } catch {
    return false;
  }
}

export function getWaitlistCount(): number {
  const db = getDb();
  const row = db.prepare("SELECT COUNT(*) as count FROM waitlist").get() as {
    count: number;
  };
  return row.count;
}
