import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/attacks", (req, res) => {
    const logPath = path.join(__dirname, "../logs/attacks.log");

    if (!fs.existsSync(logPath)) {
        return res.json([]);
    }

    const logs = fs.readFileSync(logPath, "utf-8");

    const lines = logs.split("\n").filter(Boolean);

    res.json(lines.reverse());
});

export default router;