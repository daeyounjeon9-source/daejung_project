export default function SignupPage() {
  return (
    <div style={{
      minHeight:'100vh',
      background:'linear-gradient(180deg,#081120 0%,#020817 100%)',
      color:'white',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontFamily:'sans-serif'
    }}>
      <div style={{
        width:'100%',
        maxWidth:'500px',
        padding:'40px',
        borderRadius:'24px',
        background:'rgba(255,255,255,0.06)'
      }}>
        <h1 style={{fontSize:'42px',marginBottom:'20px'}}>회원가입</h1>

        <input placeholder='이름' style={inputStyle}/>
        <input placeholder='이메일' style={inputStyle}/>
        <input placeholder='비밀번호' type='password' style={inputStyle}/>

        <button style={buttonStyle}>가입하기</button>
      </div>
    </div>
  )
}

const inputStyle = {
  width:'100%',
  padding:'16px',
  marginBottom:'16px',
  borderRadius:'14px',
  border:'none',
  background:'rgba(255,255,255,0.08)',
  color:'white'
}

const buttonStyle = {
  width:'100%',
  padding:'16px',
  borderRadius:'14px',
  border:'none',
  background:'#2563eb',
  color:'white',
  fontWeight:'bold',
  cursor:'pointer'
}
