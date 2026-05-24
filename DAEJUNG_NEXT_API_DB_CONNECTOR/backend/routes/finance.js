import express from "express";
import { query } from "../database/db.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/ledger", requireAdmin, async (req, res) => {
  const result = await query("SELECT * FROM finance_ledger ORDER BY created_at DESC LIMIT 200");
  res.json(result.rows);
});

router.post("/ledger", requireAdmin, async (req, res) => {
  const { order_id, amount, tax_amount, fee_amount, settlement_status } = req.body;
  const result = await query(
    `INSERT INTO finance_ledger (order_id, amount, tax_amount, fee_amount, settlement_status)
     VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [order_id, amount, tax_amount, fee_amount, settlement_status || "PENDING"]
  );
  res.json(result.rows[0]);
});

export default router;
