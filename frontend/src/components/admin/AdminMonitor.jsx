import { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import LiveControl from "./LiveControl";

export default function AdminMonitor() {
  const [currentMenu, setCurrentMenu] = useState("통합대시보드");

  const renderContent = () => {
    switch (currentMenu) {
      case "통합대시보드":
        return <AdminDashboard />;

      case "라이브방송제어":
        return <LiveControl />;

      case "쇼핑관리":
        return (
          <div
            style={{
              padding: "40px",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "16px",
              }}
            >
              글로벌 쇼핑 통합 시스템
            </div>

            <div
              style={{
                color: "#8ea8ff",
                marginBottom: "40px",
                fontSize: "18px",
              }}
            >
              AI 기반 글로벌 상품 · 주문 · 재고 · 판매 분석 운영센터
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {[
                {
                  title: "상품 등록",
                  value: "28,491",
                  desc: "글로벌 상품 데이터 자동 등록",
                },
                {
                  title: "실시간 재고",
                  value: "98.8%",
                  desc: "AI 실시간 재고 동기화",
                },
                {
                  title: "주문 처리",
                  value: "124K",
                  desc: "글로벌 주문 자동 처리",
                },
                {
                  title: "배송 상태",
                  value: "89국",
                  desc: "국가별 배송 통합 추적",
                },
                {
                  title: "판매 분석",
                  value: "AI",
                  desc: "AI 판매 흐름 예측 분석",
                },
                {
                  title: "추천 엔진",
                  value: "LIVE",
                  desc: "실시간 개인화 추천 시스템",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(18,30,70,0.95), rgba(8,12,25,0.98))",
                    borderRadius: "28px",
                    padding: "34px",
                    border: "1px solid rgba(120,160,255,0.14)",
                    boxShadow: "0 0 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <div
                    style={{
                      color: "#8fa8ff",
                      marginBottom: "18px",
                      fontSize: "15px",
                    }}
                  >
                    쇼핑 AI 시스템
                  </div>

                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "54px",
                      fontWeight: "900",
                      marginBottom: "16px",
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
          </div>
        );

      case "회원관리":
        return (
          <div
            style={{
              padding: "40px",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "14px",
              }}
            >
              글로벌 회원 통합 관리
            </div>

            <div
              style={{
                color: "#8ea8ff",
                marginBottom: "40px",
              }}
            >
              글로벌 사용자 · 기업 · 방송진행자 · VIP 운영 시스템
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "22px",
              }}
            >
              {[
                {
                  title: "전체 회원",
                  value: "128,490",
                },
                {
                  title: "VIP 회원",
                  value: "12,880",
                },
                {
                  title: "방송 진행자",
                  value: "3,284",
                },
                {
                  title: "기업 파트너",
                  value: "892",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(25,35,70,0.95), rgba(10,15,30,0.98))",
                    borderRadius: "28px",
                    padding: "34px",
                    border: "1px solid rgba(120,160,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      color: "#8ea8ff",
                      marginBottom: "18px",
                    }}
                  >
                    MEMBER SYSTEM
                  </div>

                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      marginBottom: "20px",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "50px",
                      fontWeight: "900",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "정산/통계":
        return (
          <div
            style={{
              padding: "40px",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "16px",
              }}
            >
              글로벌 정산 · 통계 센터
            </div>

            <div
              style={{
                color: "#8ea8ff",
                marginBottom: "40px",
              }}
            >
              AI 기반 글로벌 실시간 정산 및 국가별 통계 분석 시스템
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              {[
                {
                  title: "오늘 총 매출",
                  value: "₩3.9B",
                },
                {
                  title: "글로벌 실시간 판매",
                  value: "892K",
                },
                {
                  title: "AI 자동 정산",
                  value: "99.9%",
                },
                {
                  title: "국가별 통계",
                  value: "148국",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20,30,60,0.95), rgba(8,12,25,0.98))",
                    borderRadius: "30px",
                    padding: "40px",
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
                    GLOBAL ANALYTICS
                  </div>

                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "58px",
                      fontWeight: "900",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #031133 35%, #020617 100%)",
      }}
    >
      <AdminSidebar
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}