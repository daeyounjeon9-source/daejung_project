import express from "express";
import { query } from "../database/db.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await query("SELECT * FROM products ORDER BY created_at DESC LIMIT 100");
  res.json(result.rows);
});

router.post("/", requireAdmin, async (req, res) => {
  const { name, country, city, category, price, stock } = req.body;
  const result = await query(
    `INSERT INTO products (name, country, city, category, price, stock)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [name, country, city, category, price, stock]
  );
  res.json(result.rows[0]);
});

export default router;
