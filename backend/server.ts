import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Livon backend server running");
});

app.get("/api/auth/login", (req, res) => {
    res.send("Auth login route working");
});

app.use("/api/auth", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});