import React from "react";

const WalletTransfer = () => {
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
                지갑 이동 시스템
            </h2>

            <div
                style={{
                    display: "grid",
                    gap: "20px",
                }}
            >
                <input
                    placeholder="보내는 지갑"
                    style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #374151",
                        background: "#1f2937",
                        color: "white",
                    }}
                />

                <input
                    placeholder="받는 지갑"
                    style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #374151",
                        background: "#1f2937",
                        color: "white",
                    }}
                />

                <input
                    placeholder="이동 수량"
                    style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #374151",
                        background: "#1f2937",
                        color: "white",
                    }}
                />

                <textarea
                    placeholder="사용 목적"
                    rows={4}
                    style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #374151",
                        background: "#1f2937",
                        color: "white",
                    }}
                />

                <button
                    style={{
                        padding: "16px",
                        borderRadius: "14px",
                        border: "none",
                        background: "#2563eb",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    이동 요청
                </button>
            </div>
        </div>
    );
};

export default WalletTransfer;
