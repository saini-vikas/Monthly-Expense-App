const express = require("express");
const db = require("./database");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/api/data", (req, res) => {
  db.all("SELECT * FROM expenses", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows);
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
