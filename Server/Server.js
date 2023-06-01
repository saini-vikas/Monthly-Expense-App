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
        .json({ error: "An error occurred while added new expense." });
    } else {
      // Data successfully stored in the database
      res.status(200).send({ message: "New expense is stored successfully!" });
    }
  });
});

app.put("/api/update-expense", (req, res) => {
  const exp = req.body;
  console.log(exp);
  const amount = parseFloat(exp.enteredAmount);
  const query =
    "UPDATE expenses SET title = ?, amount = ?, category = ?, date = ? WHERE id = ?";
  db.run(
    query,
    [exp.enteredTitle, amount, exp.enteredCategory, exp.enteredDate, exp.id],
    (err) => {
      if (err) {
        res.status(500).send({ message: "Error updating expense." });
      } else {
        res.status(200).send({
          message:
            "Successfully updated expense with tilte: " +
            exp.enteredTitle +
            ".",
        });
      }
    }
  );
});

app.delete("/api/delete-expense", (req, res) => {
  const exp = req.body;
  const query = "DELETE FROM expenses WHERE id= ? AND title = ? AND date = ?";
  db.run(query, [exp.e.id, exp.e.title, exp.e.date], (err) => {
    if (err) {
      res.status(500).send({ message: "Error deleting expense." });
    } else {
      res.status(200).send({
        message:
          "Successfully deleted expense with tilte: " + exp.e.title + ".",
      });
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
