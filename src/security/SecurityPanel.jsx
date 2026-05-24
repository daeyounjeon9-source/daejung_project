import { ShieldCheck, LockKeyhole, Radar } from 'lucide-react'

export default function SecurityPanel({events}){
  return <div className="securityPage">
    <div className="securityGrid">
      <div><ShieldCheck size={42}/><h3>1차</h3><p>접속/로그인 방어</p></div>
      <div><LockKeyhole size={42}/><h3>2차</h3><p>API/토큰 보호</p></div>
      <div><Radar size={42}/><h3>3차</h3><p>코인/관리자 이상탐지</p></div>
    </div>
    <div className="eventLog">
      <h2>실시간 보안 로그</h2>
      {events.map((e,i)=><p key={i}>● {e}</p>)}
    </div>
  </div>
}
