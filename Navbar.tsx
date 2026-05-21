export default function Navbar() {
  return (
    <div style={{
      width:'100%',
      padding:'20px 40px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      background:'rgba(255,255,255,0.04)',
      color:'white'
    }}>
      <h2>DAEJUNG NEXT</h2>

      <div style={{
        display:'flex',
        gap:'20px'
      }}>
        <span>홈</span>
        <span>라이브</span>
        <span>쇼핑</span>
        <span>관리자</span>
      </div>
    </div>
  )
}
