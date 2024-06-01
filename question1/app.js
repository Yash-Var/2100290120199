const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
const port = 5000;
const db = require("./connectDB/connect");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/check", (req, res) => {
  res.send("hello world");
});

app.post("/addCompany", async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(name, description);
    const data = await db
      .promise()
      .query(
        "INSERT INTO companies (company_name, company_description) VALUES (?, ?)",
        [name, description]
      );
    res.status(200).json({ message: "Company added", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
