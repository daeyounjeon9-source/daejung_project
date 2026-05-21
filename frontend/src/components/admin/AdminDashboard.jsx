import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [pulse, setPulse] = useState(true);
    const [users, setUsers] = useState(128540);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const pulseInterval = setInterval(() => {
            setPulse((prev) => !prev);
        }, 1000);

        const userInterval = setInterval(() => {
            setUsers((prev) => prev + Math.floor(Math.random() * 12));
        }, 2000);

        const logInterval = setInterval(() => {
            const newLogs = [
                "AI 방송 송출 안정화 완료",
                "글로벌 CDN 연결 상태 정상",
                "실시간 쇼핑 데이터 동기화 완료",
                "AI 음성 엔진 활성화",
                "글로벌 서버 응답속도 최적화",
                "실시간 스트리밍 트래픽 분석중",
                "AI 추천엔진 학습 완료",
                "글로벌 사용자 데이터 처리중",
            ];

            const randomLog =
                newLogs[Math.floor(Math.random() * newLogs.length)];

            setLogs((prev) => [
                {
                    text: randomLog,
                    time: new Date().toLocaleTimeString(),
                },
                ...prev.slice(0, 5),
            ]);
        }, 2500);

        return () => {
            clearInterval(pulseInterval);
            clearInterval(userInterval);
            clearInterval(logInterval);
        };
    }, []);

    const dashboardCards = [
        {
            title: "글로벌 서버",
            value: "148",
            unit: "COUNTRIES",
            color: "#60a5fa",
        },
        {
            title: "실시간 방송",
            value: "324",
            unit: "LIVE CHANNELS",
            color: "#818cf8",
        },
        {
            title: "AI 처리량",
            value: "99.8",
            unit: "%",
            color: "#22c55e",
        },
        {
            title: "실시간 사용자",
            value: users.toLocaleString(),
            unit: "ONLINE",
            color: "#f472b6",
        },
    ];

    return (
        <div
            style={{
                flex: 1,
                minHeight: "100vh",
                padding: "40px",
                background:
                    "radial-gradient(circle at top, rgba(30,41,90,0.45), #020617 55%)",
                color: "white",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: "900px",
                    height: "900px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.14), transparent)",
                    top: "-300px",
                    right: "-300px",
                    filter: "blur(80px)",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    marginBottom: "40px",
                }}
            >
                <div
                    style={{
                        fontSize: "58px",
                        fontWeight: "900",
                        marginBottom: "14px",
                        background:
                            "linear-gradient(90deg,#ffffff,#93c5fd,#c4b5fd)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-2px",
                    }}
                >
                    GLOBAL AI CONTROL CENTER
                </div>

                <div
                    style={{
                        color: "#8ea8ff",
                        fontSize: "18px",
                    }}
                >
                    대정넥스트 미래형 AI 통합 운영 시스템
                </div>
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "24px",
                    marginBottom: "40px",
                }}
            >
                {dashboardCards.map((card) => (
                    <div
                        key={card.title}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "34px",
                            padding: "34px",
                            background:
                                "linear-gradient(135deg, rgba(20,30,60,0.88), rgba(8,12,25,0.96))",
                            border: "1px solid rgba(120,160,255,0.14)",
                            backdropFilter: "blur(20px)",
                            boxShadow:
                                "0 20px 60px rgba(0,0,0,0.45), 0 0 40px rgba(59,130,246,0.08)",
                            transform: pulse
                                ? "translateY(-4px)"
                                : "translateY(0px)",
                            transition: "0.5s ease",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "220px",
                                height: "220px",
                                borderRadius: "50%",
                                background: `radial-gradient(circle, ${card.color}33, transparent)`,
                                top: "-60px",
                                right: "-60px",
                                filter: "blur(30px)",
                            }}
                        />

                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                            }}
                        >
                            <div
                                style={{
                                    color: "#8ea8ff",
                                    marginBottom: "18px",
                                    fontSize: "15px",
                                    letterSpacing: "1px",
                                }}
                            >
                                AI MONITORING
                            </div>

                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "800",
                                    marginBottom: "20px",
                                }}
                            >
                                {card.title}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "62px",
                                        fontWeight: "900",
                                        color: card.color,
                                        textShadow: `0 0 25px ${card.color}`,
                                    }}
                                >
                                    {card.value}
                                </div>

                                <div
                                    style={{
                                        marginBottom: "10px",
                                        color: "#cbd5e1",
                                        fontSize: "14px",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    {card.unit}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "24px",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "36px",
                        padding: "40px",
                        minHeight: "620px",
                        background:
                            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(5,10,25,0.98))",
                        border: "1px solid rgba(120,160,255,0.14)",
                        boxShadow:
                            "0 30px 80px rgba(0,0,0,0.45), 0 0 60px rgba(59,130,246,0.08)",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                            backgroundSize: "100% 8px",
                            opacity: 0.25,
                        }}
                    />

                    <div
                        style={{
                            fontSize: "34px",
                            fontWeight: "800",
                            marginBottom: "14px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        AI CORE NETWORK
                    </div>

                    <div
                        style={{
                            color: "#8ea8ff",
                            marginBottom: "40px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        실시간 글로벌 AI 데이터 처리중
                    </div>

                    <div
                        style={{
                            position: "relative",
                            width: "340px",
                            height: "340px",
                            margin: "40px auto",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: "-40px",
                                borderRadius: "50%",
                                border: "2px solid rgba(96,165,250,0.2)",
                                transform: pulse
                                    ? "rotate(8deg)"
                                    : "rotate(-8deg)",
                                transition: "1s ease",
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                inset: "-20px",
                                borderRadius: "50%",
                                border: "1px solid rgba(129,140,248,0.3)",
                                transform: pulse
                                    ? "rotate(-10deg)"
                                    : "rotate(10deg)",
                                transition: "1s ease",
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(96,165,250,0.95), rgba(30,64,175,0.18))",
                                boxShadow: pulse
                                    ? "0 0 140px rgba(96,165,250,0.95)"
                                    : "0 0 70px rgba(96,165,250,0.45)",
                                transition: "0.6s ease",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            marginTop: "40px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <button
                            style={{
                                background:
                                    "linear-gradient(90deg,#2563eb,#4f46e5)",
                                border: "none",
                                color: "white",
                                padding: "18px 36px",
                                borderRadius: "18px",
                                fontSize: "18px",
                                fontWeight: "700",
                                cursor: "pointer",
                                boxShadow: "0 0 30px rgba(59,130,246,0.45)",
                            }}
                        >
                            AI 활성화
                        </button>

                        <button
                            style={{
                                background:
                                    "linear-gradient(90deg,#dc2626,#ef4444)",
                                border: "none",
                                color: "white",
                                padding: "18px 36px",
                                borderRadius: "18px",
                                fontSize: "18px",
                                fontWeight: "700",
                                cursor: "pointer",
                                boxShadow: "0 0 30px rgba(239,68,68,0.35)",
                            }}
                        >
                            긴급 정지
                        </button>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <div
                        style={{
                            borderRadius: "30px",
                            padding: "28px",
                            minHeight: "620px",
                            background:
                                "linear-gradient(135deg, rgba(20,30,60,0.9), rgba(8,12,25,0.98))",
                            border: "1px solid rgba(120,160,255,0.12)",
                            boxShadow:
                                "0 20px 40px rgba(0,0,0,0.35)",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "28px",
                                fontWeight: "800",
                                marginBottom: "24px",
                            }}
                        >
                            AI LIVE LOG
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                            }}
                        >
                            {logs.map((log, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: "18px",
                                        borderRadius: "18px",
                                        background:
                                            "rgba(255,255,255,0.03)",
                                        border:
                                            "1px solid rgba(120,160,255,0.08)",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#6ee7b7",
                                            fontSize: "13px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {log.time}
                                    </div>

                                    <div
                                        style={{
                                            lineHeight: "1.6",
                                            color: "#dbeafe",
                                        }}
                                    >
                                        {log.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}