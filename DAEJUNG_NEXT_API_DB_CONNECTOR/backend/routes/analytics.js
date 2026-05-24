import express from "express";
import { query } from "../database/db.js";

const router = express.Router();

router.get("/market", async (req, res) => {
  const result = await query(
    `SELECT country, city, category,
      SUM(views) AS views,
      SUM(cart_count) AS cart_count,
      SUM(sales_count) AS sales_count,
      SUM(refund_count) AS refund_count,
      AVG(trend_score) AS trend_score
     FROM market_analytics
     GROUP BY country, city, category
     ORDER BY sales_count DESC
     LIMIT 100`
  );
  res.json(result.rows);
});

router.get("/best-products", async (req, res) => {
  const result = await query(
    `SELECT p.name, p.country, p.city, p.category, SUM(m.sales_count) AS sales
     FROM market_analytics m
     JOIN products p ON p.id = m.product_id
     GROUP BY p.name, p.country, p.city, p.category
     ORDER BY sales DESC
     LIMIT 50`
  );
  res.json(result.rows);
});

router.get("/slow-products", async (req, res) => {
  const result = await query(
    `SELECT p.name, p.country, p.city, p.category, SUM(m.sales_count) AS sales
     FROM market_analytics m
     JOIN products p ON p.id = m.product_id
     GROUP BY p.name, p.country, p.city, p.category
     ORDER BY sales ASC
     LIMIT 50`
  );
  res.json(result.rows);
});

export default router;
