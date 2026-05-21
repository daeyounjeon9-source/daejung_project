import React from "react";

const logs = [
    {
        from: "DNX-CORE-001",
        to: "DNX-MARKETING-001",
        amount: "250,000 DNX",
        status: "승인 완료",
        time: "2026-05-21 08:30",
    },
    {
        from: "DNX-DEV-001",
        to: "DNX-LIQUIDITY-001",
        amount: "120,000 DNX",
        status: "검토 중",
        time: "2026-05-21 09:10",
    },
];

const WalletLogs = () => {
    return (
        <div
            style={{
                marginTop: "40px",
                padding: "30px",
                borderRadius: "24px",
                background: "#111827",
            }}
        >
            <h2
                style={{
                    color: "white",
                    marginBottom: "24px",
                    fontSize: "28px",
                }}
            >
                지갑 이동 로그
            </h2>

            <div
                style={{
                    display: "grid",
                    gap: "20px",
                }}
            >
                {logs.map((log, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#1f2937",
                            padding: "20px",
                            borderRadius: "16px",
                            border: "1px solid #374151",
                        }}
                    >
                        <p style={{ color: "white" }}>
                            이동 : {log.from} → {log.to}
                        </p>

                        <p style={{ color: "#facc15" }}>
                            수량 : {log.amount}
                        </p>

                        <p style={{ color: "#34d399" }}>
                            상태 : {log.status}
                        </p>

                        <p style={{ color: "#9ca3af" }}>
                            시간 : {log.time}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletLogs;