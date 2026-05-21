import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (
        email === "admin@daejungnext.com" &&
        password === "1234"
    ) {
        return res.json({
            success: true,
            message: "관리자 로그인 성공",
            token: "DAEJUNG_ADMIN_TOKEN",
        });
    }

    return res.status(401).json({
        success: false,
        message: "이메일 또는 비밀번호 오류",
    });
});

export default router;