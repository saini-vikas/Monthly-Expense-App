const express = require("express");
const db = require("./database");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/api/data", (req, res) => {
  db.all("SELECT * FROM expenses ORDER BY date ASC", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows);
    }
  });
});

app.post("/api/submit-form", (req, res) => {
  const { enteredTitle, enteredAmount, enteredCategory, enteredDate } =
    req.body;
  const amount = parseFloat(enteredAmount);
  const query =
    "INSERT INTO expenses (title, amount, category, date) VALUES (?, ?, ?, ?)";
  db.run(query, [enteredTitle, amount, enteredCategory, enteredDate], (err) => {
    if (err) {
      // Handle error, send appropriate response
      res
        .status(500)
        .json({ error: "An error occurred while storing the form data." });
    } else {
      // Data successfully stored in the database
      res.status(200).send({ message: "New Expense is stored successfully!" });
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
