import React from "react";

const wallets = [
    {
        name: "운영 코어",
        code: "DNX-CORE-001",
        percent: "30%",
        balance: "12,500,000 DNX",
    },
    {
        name: "기술 개발",
        code: "DNX-DEV-001",
        percent: "10%",
        balance: "4,000,000 DNX",
    },
    {
        name: "마케팅",
        code: "DNX-MARKETING-001",
        percent: "10%",
        balance: "4,000,000 DNX",
    },
    {
        name: "전략 파트너",
        code: "DNX-PARTNER-001",
        percent: "10%",
        balance: "4,000,000 DNX",
    },
    {
        name: "유동성",
        code: "DNX-LIQUIDITY-001",
        percent: "15%",
        balance: "6,000,000 DNX",
    },
];

const WalletDashboard = () => {
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
                코인 운영 센터
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "20px",
                }}
            >
                {wallets.map((wallet, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#1f2937",
                            padding: "20px",
                            borderRadius: "20px",
                            border: "1px solid #374151",
                        }}
                    >
                        <h3 style={{ color: "white" }}>{wallet.name}</h3>

                        <p style={{ color: "#9ca3af" }}>
                            코드 : {wallet.code}
                        </p>

                        <p style={{ color: "#facc15" }}>
                            지분율 : {wallet.percent}
                        </p>

                        <p style={{ color: "#34d399" }}>
                            잔액 : {wallet.balance}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletDashboard;