import express from "express";
import { query } from "../database/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const result = await query(
    `INSERT INTO orders (user_id, product_id, quantity, payment_status, delivery_status)
     VALUES ($1,$2,$3,'PENDING','READY') RETURNING *`,
    [user_id, product_id, quantity]
  );
  res.json(result.rows[0]);
});

router.get("/recent", async (req, res) => {
  const result = await query("SELECT * FROM orders ORDER BY created_at DESC LIMIT 100");
  res.json(result.rows);
});

export default router;
