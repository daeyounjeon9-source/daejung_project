export default function AdminPage() {
  return (
    <div style={{
      minHeight:'100vh',
      background:'#020817',
      color:'white',
      padding:'40px',
      fontFamily:'sans-serif'
    }}>
      <h1 style={{fontSize:'48px',marginBottom:'30px'}}>
        관리자 대시보드
      </h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap:'24px'
      }}>
        <div style={cardStyle}>
          <h2>실시간 접속</h2>
          <p>12,480</p>
        </div>

        <div style={cardStyle}>
          <h2>방송 상태</h2>
          <p>128 LIVE</p>
        </div>

        <div style={cardStyle}>
          <h2>매출 현황</h2>
          <p>₩89,000,000</p>
        </div>

        <div style={cardStyle}>
          <h2>서버 상태</h2>
          <p>정상 운영중</p>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  background:'rgba(255,255,255,0.05)',
  borderRadius:'24px',
  padding:'30px'
}
