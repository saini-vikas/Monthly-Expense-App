const sqlite3 = require("sqlite3").verbose();

const DB_FILE_PATH = "./expense.db"; // Path to the SQLite database file

const db = new sqlite3.Database(DB_FILE_PATH, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the SQLite database");
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, amount REAL NOT NULL, category TEXT NOT NULL, date TEXT NOT NULL)"
  );
});

module.exports = db;
