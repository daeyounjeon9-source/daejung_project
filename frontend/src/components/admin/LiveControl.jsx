import { useEffect, useState } from "react";

export default function LiveControl() {
    const [liveBlink, setLiveBlink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLiveBlink((prev) => !prev);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const liveCards = [
        {
            title: "현재 송출 상태",
            value: "LIVE",
            desc: "글로벌 실시간 방송 송출중",
        },
        {
            title: "실시간 시청자",
            value: "128,540",
            desc: "동시 접속 글로벌 사용자",
        },
        {
            title: "글로벌 연결",
            value: "148국",
            desc: "글로벌 AI 스트리밍 네트워크",
        },
        {
            title: "AI 방송 상태",
            value: "99.9%",
            desc: "AI 자동 방송 분석 시스템",
        },
    ];

    return (
        <div
            style={{
                padding: "40px",
                color: "white",
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #020617 0%, #04122d 35%, #020617 100%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: "46px",
                            fontWeight: "900",
                            marginBottom: "12px",
                        }}
                    >
                        글로벌 라이브 방송 제어센터
                    </div>

                    <div
                        style={{
                            color: "#8ea8ff",
                            fontSize: "18px",
                        }}
                    >
                        AI 기반 글로벌 라이브 방송 · 송출 · 실시간 제어 통합 시스템
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background:
                            "linear-gradient(135deg, rgba(40,60,140,0.3), rgba(20,30,70,0.15))",
                        padding: "14px 22px",
                        borderRadius: "18px",
                        border: "1px solid rgba(120,160,255,0.12)",
                    }}
                >
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            background: liveBlink ? "#22c55e" : "#14532d",
                            boxShadow: liveBlink
                                ? "0 0 18px #22c55e"
                                : "none",
                            transition: "0.3s",
                        }}
                    />

                    <div
                        style={{
                            fontWeight: "700",
                            color: "#dbeafe",
                        }}
                    >
                        LIVE SERVER ACTIVE
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "24px",
                    marginTop: "40px",
                    marginBottom: "40px",
                }}
            >
                {liveCards.map((item) => (
                    <div
                        key={item.title}
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(20,30,60,0.95), rgba(8,12,25,0.98))",
                            borderRadius: "28px",
                            padding: "34px",
                            border: "1px solid rgba(120,160,255,0.15)",
                            boxShadow: "0 0 40px rgba(0,0,0,0.35)",
                        }}
                    >
                        <div
                            style={{
                                color: "#8ea8ff",
                                marginBottom: "18px",
                            }}
                        >
                            LIVE CONTROL
                        </div>

                        <div
                            style={{
                                fontSize: "28px",
                                fontWeight: "800",
                                marginBottom: "18px",
                            }}
                        >
                            {item.title}
                        </div>

                        <div
                            style={{
                                fontSize: "52px",
                                fontWeight: "900",
                                marginBottom: "16px",
                                color:
                                    item.value === "LIVE"
                                        ? "#22c55e"
                                        : "#ffffff",
                            }}
                        >
                            {item.value}
                        </div>

                        <div
                            style={{
                                color: "#9fb4ff",
                                lineHeight: "1.8",
                            }}
                        >
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "24px",
                }}
            >
                <div
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(18,28,58,0.95), rgba(6,10,20,0.98))",
                        borderRadius: "32px",
                        padding: "40px",
                        border: "1px solid rgba(120,160,255,0.12)",
                        minHeight: "420px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(59,130,246,0.25), transparent)",
                            top: "-100px",
                            right: "-100px",
                        }}
                    />

                    <div
                        style={{
                            fontSize: "34px",
                            fontWeight: "800",
                            marginBottom: "18px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        실시간 방송 송출 패널
                    </div>

                    <div
                        style={{
                            color: "#8ea8ff",
                            marginBottom: "30px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        글로벌 AI 라이브 송출 상태 모니터링
                    </div>

                    <div
                        style={{
                            background:
                                "radial-gradient(circle, rgba(80,140,255,0.95), rgba(20,40,90,0.1))",
                            width: "260px",
                            height: "260px",
                            borderRadius: "50%",
                            margin: "40px auto",
                            boxShadow: liveBlink
                                ? "0 0 100px rgba(80,140,255,0.9)"
                                : "0 0 50px rgba(80,140,255,0.3)",
                            transition: "0.4s",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "30px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <button
                            style={{
                                background: "#2563eb",
                                border: "none",
                                color: "white",
                                padding: "18px 40px",
                                borderRadius: "18px",
                                fontSize: "18px",
                                fontWeight: "700",
                                cursor: "pointer",
                                boxShadow: "0 0 30px rgba(37,99,235,0.5)",
                            }}
                        >
                            방송 시작
                        </button>

                        <button
                            style={{
                                background: "#dc2626",
                                border: "none",
                                color: "white",
                                padding: "18px 40px",
                                borderRadius: "18px",
                                fontSize: "18px",
                                fontWeight: "700",
                                cursor: "pointer",
                                boxShadow: "0 0 30px rgba(220,38,38,0.5)",
                            }}
                        >
                            방송 종료
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
                    {[
                        "AI 자동 송출 활성화",
                        "글로벌 CDN 연결 완료",
                        "실시간 방송 분석중",
                        "AI 음성 시스템 활성화",
                    ].map((item) => (
                        <div
                            key={item}
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(20,30,60,0.95), rgba(8,12,25,0.98))",
                                borderRadius: "28px",
                                padding: "30px",
                                border: "1px solid rgba(120,160,255,0.12)",
                            }}
                        >
                            <div
                                style={{
                                    color: "#4ade80",
                                    marginBottom: "14px",
                                    fontWeight: "700",
                                }}
                            >
                                시스템 상태
                            </div>

                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "800",
                                    lineHeight: "1.6",
                                }}
                            >
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}