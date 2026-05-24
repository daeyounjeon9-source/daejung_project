import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ShieldCheck,
  BarChart3,
  ShoppingBag,
  Globe2,
  Database,
  Radio,
  AlertTriangle,
  KeyRound
} from "lucide-react";
import { apiGet, apiPost, API_BASE } from "./api/client";
import "./style.css";

function StatCard({ icon, title, value, text }) {
  return (
    <article className="stat-card">
      <div className="icon">{icon}</div>
      <strong>{value}</strong>
      <span>{title}</span>
      <p>{text}</p>
    </article>
  );
}

function AdminLogin({ onLogin }) {
  const [adminId, setAdminId] = useState("MASTER_OWNER");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("관리자 보안 접속 대기");

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await apiPost("/api/auth/admin-login", { adminId, password, otp });
      localStorage.setItem("dn_admin_token", result.token);
      setMessage("OMEGA 관리자 접속 성공");
      onLogin(result.token);
    } catch {
      setMessage("접속 실패: 관리자 정보/OTP/API 연결 확인");
    }
  }

  return (
    <section className="panel login-panel">
      <div>
        <div className="panel-title"><KeyRound /> OMEGA Admin Access</div>
        <p>관리자 로그인 API 연결 테스트 화면입니다.</p>
      </div>
      <form onSubmit={submit}>
        <input value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="Admin ID" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
        <button>관리자 접속</button>
      </form>
      <div className="message">{message}</div>
    </section>
  );
}

function Dashboard({ token }) {
  const [health, setHealth] = useState(null);
  const [market, setMarket] = useState([]);
  const [best, setBest] = useState([]);
  const [slow, setSlow] = useState([]);
  const [error, setError] = useState("");

  async function load() {
    try {
      setError("");
      const h = await apiGet("/api/health");
      setHealth(h);
      try { setMarket(await apiGet("/api/analytics/market")); } catch { setMarket([]); }
      try { setBest(await apiGet("/api/analytics/best-products")); } catch { setBest([]); }
      try { setSlow(await apiGet("/api/analytics/slow-products")); } catch { setSlow([]); }
    } catch {
      setError("백엔드 API 연결 필요: " + API_BASE);
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <>
      <section className="status-grid">
        <StatCard icon={<Database />} title="API 상태" value={health ? "READY" : "WAIT"} text={health?.service || "백엔드 연결 대기"} />
        <StatCard icon={<Globe2 />} title="지역 분석" value={market.length || "0"} text="국가·도시별 판매 데이터 연결" />
        <StatCard icon={<ShoppingBag />} title="잘 팔리는 상품" value={best.length || "0"} text="판매량 상위 상품 분석" />
        <StatCard icon={<AlertTriangle />} title="안 팔리는 상품" value={slow.length || "0"} text="부진 상품 자동 탐지" />
      </section>

      {error && <div className="error">{error}</div>}

      <section className="panel">
        <div className="panel-title"><BarChart3 /> 글로벌 판매/분석 대시보드</div>
        <div className="table">
          <div className="row head"><span>국가</span><span>도시</span><span>카테고리</span><span>판매</span><span>트렌드</span></div>
          {market.length === 0 && <div className="empty">DB 데이터 연결 후 국가별·도시별 판매 분석이 표시됩니다.</div>}
          {market.slice(0, 8).map((m, idx) => (
            <div className="row" key={idx}>
              <span>{m.country}</span><span>{m.city}</span><span>{m.category}</span><span>{m.sales_count}</span><span>{m.trend_score}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="two-grid">
        <div className="panel">
          <div className="panel-title"><ShoppingBag /> 잘 팔리는 상품</div>
          {best.length === 0 ? <p>판매 데이터 연결 대기</p> : best.slice(0, 8).map((x, i) => <p key={i}>{x.name} · {x.country}/{x.city} · {x.sales}</p>)}
        </div>
        <div className="panel">
          <div className="panel-title"><AlertTriangle /> 안 팔리는 상품</div>
          {slow.length === 0 ? <p>판매 데이터 연결 대기</p> : slow.slice(0, 8).map((x, i) => <p key={i}>{x.name} · {x.country}/{x.city} · {x.sales}</p>)}
        </div>
      </section>
    </>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("dn_admin_token") || "");

  return (
    <main className="page">
      <section className="hero">
        <div className="badge">DAEJUNG NEXT · API CONNECTED ADMIN UI</div>
        <h1>실제 API 연결 관리자 대시보드</h1>
        <p>
          daejungnext.com 실구동을 위해 관리자 로그인, 상품/주문/분석 API와 연결되는
          프론트 구조입니다.
        </p>
        <div className="hero-row">
          <span><Radio /> LIVE Commerce Ready</span>
          <span><ShieldCheck /> Omega Admin</span>
          <span><Globe2 /> Global Market Analytics</span>
        </div>
      </section>

      <AdminLogin onLogin={setToken} />
      <Dashboard token={token} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
