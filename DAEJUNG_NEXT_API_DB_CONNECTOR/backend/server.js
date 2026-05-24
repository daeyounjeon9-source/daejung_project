import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import financeRoutes from "./routes/finance.js";
import analyticsRoutes from "./routes/analytics.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    service: "DAEJUNG NEXT API",
    status: "ready",
    deployment: "db-connector-stage"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/analytics", analyticsRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`DAEJUNG NEXT API running on ${port}`));
