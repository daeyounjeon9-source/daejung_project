export default function CosmosCore() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "36px",
        padding: "40px",
        background:
          "linear-gradient(135deg, rgba(2,6,23,.96), rgba(15,23,42,.92))",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(26px)",
        boxShadow: "0 0 60px rgba(168,85,247,.16)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(168,85,247,.18)",
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
              글로벌 방송 코어
            </h2>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "15px",
              }}
            >
              라이브 송출 · AI 네트워크 · 글로벌 스트리밍 엔진
            </div>
          </div>

          <div
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              background: "rgba(168,85,247,.15)",
              color: "#c084fc",
              fontWeight: "800",
              boxShadow: "0 0 20px rgba(168,85,247,.16)",
            }}
          >
            코어 엔진 활성화
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
              minHeight: "320px",
              background:
                "linear-gradient(135deg, rgba(168,85,247,.12), rgba(15,23,42,.92))",
              border: "1px solid rgba(192,132,252,.14)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.04), transparent)",
                animation: "scan 6s linear infinite",
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
                  color: "#c084fc",
                  marginBottom: "24px",
                  fontSize: "15px",
                }}
              >
                글로벌 스트리밍 네트워크
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "220px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "340px",
                    height: "340px",
                    borderRadius: "50%",
                    border: "1px solid rgba(192,132,252,.08)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "240px",
                    height: "240px",
                    borderRadius: "50%",
                    border: "1px solid rgba(168,85,247,.14)",
                  }}
                />

                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    border: "12px solid rgba(168,85,247,.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "pulseRing 4s infinite",
                    background:
                      "radial-gradient(circle, rgba(168,85,247,.16), transparent)",
                  }}
                >
                  <div
                    style={{
                      width: "82px",
                      height: "82px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle,#c084fc,#7c3aed)",
                      boxShadow: "0 0 50px #a855f7",
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
                  color: "#c084fc",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                스트리밍 성능
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                99.9%
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
                  color: "#60a5fa",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                실시간 방송망
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                전세계 송출중
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
                글로벌 사용자
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "900",
                }}
              >
                2500만+
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

          @keyframes pulseRing{
            0%{
              transform:scale(1);
            }

            50%{
              transform:scale(1.06);
            }

            100%{
              transform:scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}