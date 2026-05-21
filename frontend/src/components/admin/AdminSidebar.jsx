const menus = [
    "통합대시보드",
    "라이브방송제어",
    "쇼핑관리",
    "회원관리",
    "정산/통계",
];

export default function AdminSidebar({
    currentMenu,
    setCurrentMenu,
}) {
    return (
        <div
            style={{
                width: "300px",
                minHeight: "100vh",
                background:
                    "linear-gradient(180deg, rgba(5,10,25,0.98), rgba(2,6,18,1))",
                borderRight: "1px solid rgba(120,160,255,0.15)",
                padding: "28px",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(20px)",
            }}
        >
            {/* 배경 글로우 */}
            <div
                style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.25), transparent)",
                    top: "-120px",
                    left: "-120px",
                    filter: "blur(40px)",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* 로고 */}
                <div
                    style={{
                        marginBottom: "50px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "38px",
                            fontWeight: "900",
                            background:
                                "linear-gradient(90deg,#7dd3fc,#818cf8,#c084fc)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            letterSpacing: "-2px",
                            marginBottom: "10px",
                            textShadow: "0 0 20px rgba(129,140,248,0.35)",
                        }}
                    >
                        대정넥스트
                    </div>

                    <div
                        style={{
                            color: "#8ea8ff",
                            fontSize: "14px",
                            letterSpacing: "2px",
                        }}
                    >
                        GLOBAL AI CONTROL CENTER
                    </div>
                </div>

                {/* 메뉴 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                    }}
                >
                    {menus.map((menu) => {
                        const active = currentMenu === menu;

                        return (
                            <button
                                key={menu}
                                onClick={() => setCurrentMenu(menu)}
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "22px 24px",
                                    borderRadius: "24px",
                                    border: active
                                        ? "1px solid rgba(129,140,248,0.45)"
                                        : "1px solid rgba(255,255,255,0.05)",
                                    background: active
                                        ? "linear-gradient(135deg, rgba(70,90,255,0.35), rgba(80,120,255,0.12))"
                                        : "rgba(255,255,255,0.03)",
                                    color: active ? "#ffffff" : "#9fb4ff",
                                    fontSize: "17px",
                                    fontWeight: active ? "800" : "600",
                                    cursor: "pointer",
                                    transition: "all 0.35s ease",
                                    backdropFilter: "blur(14px)",
                                    boxShadow: active
                                        ? "0 0 35px rgba(80,120,255,0.35)"
                                        : "0 10px 30px rgba(0,0,0,0.25)",
                                    transform: active
                                        ? "translateY(-2px) scale(1.02)"
                                        : "translateY(0px)",
                                }}
                            >
                                {/* 활성 네온 라인 */}
                                {active && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "0",
                                            top: "15%",
                                            width: "5px",
                                            height: "70%",
                                            borderRadius: "20px",
                                            background: "#60a5fa",
                                            boxShadow: "0 0 20px #60a5fa",
                                        }}
                                    />
                                )}

                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {menu}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* AI 상태 */}
                <div
                    style={{
                        marginTop: "50px",
                        padding: "28px",
                        borderRadius: "30px",
                        background:
                            "linear-gradient(135deg, rgba(40,60,140,0.25), rgba(20,30,70,0.12))",
                        border: "1px solid rgba(120,160,255,0.14)",
                        boxShadow: "0 0 40px rgba(59,130,246,0.12)",
                        backdropFilter: "blur(16px)",
                    }}
                >
                    <div
                        style={{
                            color: "#8ea8ff",
                            marginBottom: "14px",
                            fontSize: "14px",
                            letterSpacing: "1px",
                        }}
                    >
                        AI SYSTEM STATUS
                    </div>

                    <div
                        style={{
                            fontSize: "48px",
                            fontWeight: "900",
                            marginBottom: "12px",
                            color: "#ffffff",
                            textShadow: "0 0 25px rgba(96,165,250,0.45)",
                        }}
                    >
                        99.8%
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#22c55e",
                                boxShadow: "0 0 18px #22c55e",
                            }}
                        />

                        <div
                            style={{
                                color: "#6ee7b7",
                                fontSize: "14px",
                                fontWeight: "600",
                            }}
                        >
                            글로벌 서버 정상 운영중
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}