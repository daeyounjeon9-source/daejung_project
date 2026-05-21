export default function LoginPage() {
    const inputStyle = {
        width: "100%",
        padding: "16px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.05)",
        color: "white",
        fontSize: "16px",
        outline: "none",
        marginTop: "10px",
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(180deg, #081120 0%, #0b1730 50%, #020817 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
                color: "white",
                fontFamily: "sans-serif",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "460px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    padding: "42px",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "42px",
                        marginBottom: "12px",
                        fontWeight: 900,
                    }}
                >
                    DAEJUNG NEXT
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        opacity: 0.7,
                        marginBottom: "40px",
                        lineHeight: 1.6,
                    }}
                >
                    통합 스트리밍 플랫폼 로그인
                </p>

                <div style={{ marginBottom: "22px" }}>
                    <label>이메일</label>

                    <input
                        type="email"
                        placeholder="example@email.com"
                        style={inputStyle}
                    />
                </div>

                <div style={{ marginBottom: "30px" }}>
                    <label>비밀번호</label>

                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        style={inputStyle}
                    />
                </div>

                <button
                    style={{
                        width: "100%",
                        padding: "18px",
                        borderRadius: "16px",
                        border: "none",
                        background: "#2563eb",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: 700,
                        cursor: "pointer",
                        marginBottom: "16px",
                    }}
                >
                    로그인
                </button>

                <button
                    style={{
                        width: "100%",
                        padding: "16px",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "transparent",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginBottom: "12px",
                    }}
                >
                    회원가입
                </button>

                <button
                    style={{
                        width: "100%",
                        padding: "16px",
                        borderRadius: "16px",
                        border: "none",
                        background: "#111827",
                        color: "#60a5fa",
                        fontSize: "16px",
                        fontWeight: 700,
                        cursor: "pointer",
                    }}
                >
                    관리자 페이지 이동
                </button>
            </div>
        </div>
    );
}