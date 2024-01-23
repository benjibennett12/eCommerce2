const express = require("express");

const mysql = require("mysql2");

const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5678961",
  password: "adZgtkNmTW",
  database: "sql5678961",
});

app.get("/", (req, res) => {
  return res.json("From Backend Side");
});

app.get("/Products", (req, res) => {
  const sql = "SELECT * FROM Products";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Listening");
});
