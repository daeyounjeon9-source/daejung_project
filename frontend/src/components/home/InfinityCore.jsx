import React from "react";

// 네비게이션 바
function NavigationBar() {
  return (
    <div
      style={{
        background: "rgba(15,23,42,0.75)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "18px 24px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        boxShadow: "0 0 30px rgba(34,197,94,0.12)",
      }}
    >
      <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
        <div>CONTROL</div>
        <div>LIVE</div>
        <div>AI</div>
        <div>SECURITY</div>
        <div>STREAM</div>
        <div>ANALYTICS</div>
      </div>
      <div style={{ color: "#22c55e", fontWeight: "bold", textShadow: "0 0 12px rgba(34,197,94,0.7)" }}>
        ● SYSTEM ONLINE
      </div>
    </div>
  );
}

// 상단 카드
function TopStatCard({ label, value }) {
  return (
    <div
      style={{
        background: "rgba(15,23,42,0.72)",
        backdropFilter: "blur(14px)",
        borderRadius: "20px",
        padding: "24px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 25px rgba(59,130,246,0.12)",
        transition: "all 0.35s ease",
        cursor: "pointer",
        transform: "perspective(1200px) rotateX(0deg)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(4deg) translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(34,197,94,0.35)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(0deg) translateY(0px)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(59,130,246,0.12)";
      }}
    >
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "12px" }}>{label}</div>
      <div style={{ fontSize: "34px", fontWeight: "bold", textShadow: "0 0 12px rgba(255,255,255,0.15)" }}>{value}</div>
    </div>
  );
}

// 상태 카드
function SystemStatusCard({ title, status, icon, value, progress, description }) {
  return (
    <div
      style={{
        background: "rgba(15,23,42,0.72)",
        backdropFilter: "blur(14px)",
        borderRadius: "22px",
        padding: "24px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 30px rgba(34,197,94,0.10)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transform: "perspective(1200px) rotateX(0deg)",
        transition: "all 0.35s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(4deg) translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(34,197,94,0.35)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(0deg) translateY(0px)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(34,197,94,0.10)";
      }}
    >
      {/* AI 스캔라인 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.15), transparent)",
          animation: "scan 3s linear infinite",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{title}</h3>
            <span style={{
              display: "inline-block",
              padding: "7px 16px",
              background: "#16a34a",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "bold",
              boxShadow: "0 0 12px rgba(34,197,94,0.5)"
            }}>{status}</span>
          </div>
          <div style={{ fontSize: "40px" }}>{icon}</div>
        </div>
        <div style={{ marginTop: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{description}</div>
        <div style={{ marginTop: "20px", fontSize: "34px", fontWeight: "bold", color: "#22c55e", textShadow: "0 0 15px rgba(34,197,94,0.5)" }}>{value}</div>
        <div style={{ marginTop: "18px", height: "10px", background: "#1e293b", borderRadius: "999px", overflow: "hidden" }}>
          <div style={{ width: progress, height: "100%", background: "linear-gradient(to right, #22c55e, #4ade80)", boxShadow: "0 0 15px rgba(34,197,94,0.7)" }} />
        </div>
      </div>
    </div>
  );
}

// 실시간 트래픽
function TrafficPanel() {
  return (
    <div style={{ marginTop: "30px", background: "rgba(15,23,42,0.72)", backdropFilter: "blur(14px)", borderRadius: "22px", padding: "28px", border: "1px solid rgba(255,255,255,0.08)", color: "white" }}>
      <h2 style={{ marginBottom: "26px", fontSize: "24px" }}>REALTIME TRAFFIC FLOW</h2>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "220px" }}>
        {[40, 75, 55, 90, 60, 120, 80, 140, 95, 110].map((h,i)=>
          <div key={i} style={{ flex: 1, height: `${h}px`, borderRadius: "12px 12px 0 0", background: "linear-gradient(to top, #22c55e, #4ade80)", boxShadow:"0 0 15px rgba(34,197,94,0.5)", animation: "wave 2s ease-in-out infinite", animationDelay:`${i*0.1}s`}} />
        )}
      </div>
    </div>
  );
}

// 로그
function LogPanel() {
  return (
    <div style={{ marginTop: "30px", background: "rgba(15,23,42,0.72)", backdropFilter: "blur(14px)", borderRadius: "22px", padding: "28px", border: "1px solid rgba(255,255,255,0.08)", color: "white" }}>
      <h2 style={{ marginBottom: "24px", fontSize: "24px" }}>REALTIME SYSTEM LOG</h2>
      <div style={{ color: "#22c55e", marginBottom: "12px" }}>✔ AI SERVER CONNECTED</div>
      <div style={{ color: "#22c55e", marginBottom: "12px" }}>✔ LIVE STREAM ACTIVE</div>
      <div style={{ color: "#22c55e", marginBottom: "12px" }}>✔ GPU CLUSTER ONLINE</div>
      <div style={{ color: "#22c55e", marginBottom: "12px" }}>✔ AUTO SCALE ENABLED</div>
      <div style={{ color: "#22c55e" }}>✔ SECURITY SHIELD ACTIVE</div>
    </div>
  );
}

// 메인 InfinityCore
export default function InfinityCore() {
  return (
    <div style={{ minHeight:"100vh", padding:"30px", background:"radial-gradient(circle at top, #0f172a 0%, #020617 45%, #000000 100%)", position:"relative", overflow:"hidden" }}>
      {/* 배경 네온 */}
      <div style={{ position:"absolute", width:"500px", height:"500px", background:"rgba(34,197,94,0.12)", borderRadius:"50%", filter:"blur(120px)", top:"-120px", right:"-120px"}} />
      <div style={{ position:"absolute", width:"450px", height:"450px", background:"rgba(59,130,246,0.12)", borderRadius:"50%", filter:"blur(120px)", bottom:"-120px", left:"-120px"}} />

      <div style={{position:"relative", zIndex:10}}>
        <NavigationBar />
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:"20px", marginBottom:"30px"}}>
          <TopStatCard label="TOTAL LIVE USERS" value="128,420"/>
          <TopStatCard label="AI REQUEST" value="2.8M"/>
          <TopStatCard label="ACTIVE STREAM" value="312"/>
          <TopStatCard label="SERVER NODE" value="32"/>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:"22px"}}>
          <SystemStatusCard title="AI SERVER STATUS" status="ACTIVE" icon="🤖" value="98%" progress="98%" description="AI processor and recommendation engine operating normally."/>
          <SystemStatusCard title="LIVE STREAM STATUS" status="RUNNING" icon="📡" value="12 LIVE" progress="90%" description="Live commerce streaming system stable and connected."/>
          <SystemStatusCard title="SECURITY STATUS" status="PROTECTED" icon="🛡️" value="SAFE" progress="100%" description="Security shield and defense systems fully active."/>
          <SystemStatusCard title="GPU CLUSTER" status="ONLINE" icon="💻" value="84%" progress="84%" description="GPU resource cluster operating in stable condition."/>
        </div>

        <TrafficPanel />
        <LogPanel />
      </div>

      <style>{`
        @keyframes pulse { 0%{transform:scale(1);opacity:1;}50%{transform:scale(1.3);opacity:0.6;}100%{transform:scale(1);opacity:1;} }
        @keyframes liveRing {0%{transform:rotate(0deg) scale(1);}50%{transform:rotate(180deg) scale(1.1);}100%{transform:rotate(360deg) scale(1);}}
        @keyframes scan {0%{left:-100%;}100%{left:100%;}}
        @keyframes wave {0%{transform:scaleY(1);}50%{transform:scaleY(1.08);}100%{transform:scaleY(1);}}
      `}</style>
    </div>
  );
}