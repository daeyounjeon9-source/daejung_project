export default function LivePage() {
  return (
    <div style={{
      minHeight:'100vh',
      background:'#000814',
      color:'white',
      padding:'40px',
      fontFamily:'sans-serif'
    }}>
      <h1 style={{fontSize:'52px',marginBottom:'30px'}}>
        실시간 라이브 방송
      </h1>

      <div style={{
        width:'100%',
        height:'500px',
        borderRadius:'24px',
        background:'rgba(255,255,255,0.08)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'28px'
      }}>
        LIVE STREAM AREA
      </div>
    </div>
  )
}
