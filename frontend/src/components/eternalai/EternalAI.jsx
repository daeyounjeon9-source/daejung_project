export default function EternalAI() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "36px",
        padding: "40px",
        background:
          "linear-gradient(135deg, rgba(15,23,42,.96), rgba(30,41,59,.88))",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 0 50px rgba(59,130,246,.15)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-140px",
          right: "-140px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(59,130,246,.18)",
          filter: "blur(100px)",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "34px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "900",
                marginBottom: "10px",
              }}
            >
              AI 통합 제어 시스템
            </h2>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "15px",
              }}
            >
              실시간 자동 분석 · 글로벌 통합 운영
            </div>
          </div>

          <div
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(34,197,94,.15)",
              color: "#4ade80",
              fontWeight: "800",
              boxShadow: "0 0 20px rgba(34,197,94,.15)",
            }}
          >
            AI 정상 운영중
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              borderRadius: "30px",
              padding: "34px",
              background:
                "linear-gradient(135deg, rgba(59,130,246,.12), rgba(15,23,42,.92))",
              border: "1px solid rgba(96,165,250,.15)",
              minHeight: "280px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.05), transparent)",
                animation: "scan 5s linear infinite",
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
                  color: "#60a5fa",
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                AI 메인 프로세서
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "180px",
                }}
              >
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    border: "14px solid rgba(59,130,246,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    animation: "rotate 10s linear infinite",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle,#60a5fa,#2563eb)",
                      boxShadow: "0 0 40px #3b82f6",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      width: "240px",
                      height: "240px",
                      borderRadius: "50%",
                      border: "1px solid rgba(96,165,250,.12)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "26px",
                borderRadius: "28px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div
                style={{
                  color: "#38bdf8",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                AI 상태
              </div>

              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "900",
                }}
              >
                정상 작동
              </div>
            </div>

            <div
              style={{
                padding: "26px",
                borderRadius: "28px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div
                style={{
                  color: "#a78bfa",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                글로벌 네트워크
              </div>

              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "900",
                }}
              >
                148개국 연결
              </div>
            </div>

            <div
              style={{
                padding: "26px",
                borderRadius: "28px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div
                style={{
                  color: "#22d3ee",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                보안 시스템
              </div>

              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "900",
                }}
              >
                최고등급 보호
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes rotate{
            from{
              transform:rotate(0deg);
            }

            to{
              transform:rotate(360deg);
            }
          }

          @keyframes scan{
            0%{
              transform:translateX(-100%);
            }

            100%{
              transform:translateX(100%);
            }
          }
        `}
      </style>
    </section>
  );
}