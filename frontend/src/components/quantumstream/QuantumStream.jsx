export default function QuantumStream() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "36px",
        padding: "40px",
        background:
          "linear-gradient(135deg, rgba(3,7,18,.96), rgba(17,24,39,.92))",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(26px)",
        boxShadow: "0 0 60px rgba(34,211,238,.14)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(34,211,238,.18)",
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
            marginBottom: "36px",
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
              퀀텀 데이터 스트림
            </h2>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "15px",
              }}
            >
              실시간 데이터 · AI 분석 · 초고속 글로벌 처리
            </div>
          </div>

          <div
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              background: "rgba(34,211,238,.15)",
              color: "#67e8f9",
              fontWeight: "800",
              boxShadow: "0 0 20px rgba(34,211,238,.16)",
            }}
          >
            데이터 스트림 연결중
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "32px",
              padding: "34px",
              minHeight: "340px",
              background:
                "linear-gradient(135deg, rgba(34,211,238,.10), rgba(15,23,42,.92))",
              border: "1px solid rgba(103,232,249,.14)",
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
                  color: "#67e8f9",
                  marginBottom: "24px",
                  fontSize: "15px",
                }}
              >
                글로벌 데이터 흐름
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "240px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    border: "1px solid rgba(34,211,238,.08)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    border: "1px solid rgba(103,232,249,.12)",
                    animation: "rotate 12s linear infinite",
                  }}
                />

                <div
                  style={{
                    width: "190px",
                    height: "190px",
                    borderRadius: "50%",
                    border: "14px solid rgba(34,211,238,.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(circle, rgba(34,211,238,.14), transparent)",
                    boxShadow: "0 0 50px rgba(34,211,238,.18)",
                    animation: "float 4s ease-in-out infinite",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle,#67e8f9,#0891b2)",
                      boxShadow: "0 0 50px #22d3ee",
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
                  color: "#67e8f9",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                데이터 처리속도
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                초고속 처리
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
                실시간 분석량
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                초당 240만건
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
                  color: "#38bdf8",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                AI 연결 상태
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                완전 연결
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scan{
            0%{
              transform:translateX(-100%);
            }

            100%{
              transform:translateX(100%);
            }
          }

          @keyframes rotate{
            from{
              transform:rotate(0deg);
            }

            to{
              transform:rotate(360deg);
            }
          }

          @keyframes float{
            0%{
              transform:translateY(0px);
            }

            50%{
              transform:translateY(-10px);
            }

            100%{
              transform:translateY(0px);
            }
          }
        `}
      </style>
    </section>
  );
}