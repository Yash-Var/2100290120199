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

app.get("/getProductsByCategory", async (req, res) => {
  try {
    const { company_id, category_name } = req.query;
    console.log(company_id, category_name);

    const [data] = await db.promise().query(
      `SELECT p.id_products, p.name_pro, p.price, p.rating, p.discount, p.availability, c.name AS category_name, com.company_name
              FROM products p
              JOIN category c ON p.category_id = c.id_category
              JOIN companies com ON c.company_id = com.company_id
              WHERE com.company_id = ? AND c.name = ?`,
      [company_id, category_name]
    );

    res.status(200).json({ message: "Products retrieved", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});
app.get("/getTopProducts", async (req, res) => {
  try {
    const { company_id, category_name, order, limit, page } = req.query;
    const validOrders = ["min", "max"];

    if (!validOrders.includes(order)) {
      return res
        .status(400)
        .json({ error: "Invalid order parameter. Use 'min' or 'max'." });
    }

    const orderBy = order === "min" ? "ASC" : "DESC";
    const productLimit = parseInt(limit, 10) || 10;
    const currentPage = parseInt(page, 10) || 1;
    const offset = (currentPage - 1) * productLimit;

    console.log(company_id, category_name, order, productLimit, currentPage);

    const [data] = await db.promise().query(
      `SELECT p.id_products, p.name_pro, p.price, p.rating, p.discount, p.availability, c.name AS category_name, com.company_name
          FROM products p
          JOIN category c ON p.category_id = c.id_category
          JOIN companies com ON c.company_id = com.company_id
          WHERE com.company_id = ? AND c.name = ?
          ORDER BY p.price ${orderBy}
          LIMIT ? OFFSET ?`,
      [company_id, category_name, productLimit, offset]
    );

    res.status(200).json({ message: "Top products retrieved", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/getProductsByPriceRange", async (req, res) => {
  try {
    const { company_id, category_name, min_price, max_price, limit, page } =
      req.query;

    const minPrice = parseFloat(min_price) || 0;
    const maxPrice = parseFloat(max_price) || Number.MAX_SAFE_INTEGER;
    const productLimit = parseInt(limit, 10) || 10;
    const currentPage = parseInt(page, 10) || 1;
    const offset = (currentPage - 1) * productLimit;

    console.log(
      company_id,
      category_name,
      minPrice,
      maxPrice,
      productLimit,
      currentPage
    );

    const [data] = await db.promise().query(
      `SELECT p.id_products, p.name_pro, p.price, p.rating, p.discount, p.availability, c.name AS category_name, com.company_name
          FROM products p
          JOIN category c ON p.category_id = c.id_category
          JOIN companies com ON c.company_id = com.company_id
          WHERE com.company_id = ? AND c.name = ? AND p.price BETWEEN ? AND ?
          LIMIT ? OFFSET ?`,
      [company_id, category_name, minPrice, maxPrice, productLimit, offset]
    );

    res.status(200).json({ message: "Products retrieved", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
