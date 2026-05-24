import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/admin-login", async (req, res) => {
  const { adminId, password, otp } = req.body;

  if (!adminId || !password || !otp) {
    return res.status(400).json({ error: "ADMIN_ID_PASSWORD_OTP_REQUIRED" });
  }

  if (adminId !== process.env.ADMIN_ID) {
    return res.status(401).json({ error: "INVALID_ADMIN" });
  }

  const ok = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || "");
  if (!ok) {
    return res.status(401).json({ error: "INVALID_PASSWORD" });
  }

  // 실제 운영에서는 OTP 앱/TOTP 서버 검증으로 교체
  if (String(otp).length < 6) {
    return res.status(401).json({ error: "INVALID_OTP" });
  }

  const token = jwt.sign(
    { adminId, role: "OMEGA_ADMIN" },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token, role: "OMEGA_ADMIN", access: "OMEGA_BLACK" });
});

export default router;
