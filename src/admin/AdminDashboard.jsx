import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Activity, AlertTriangle } from 'lucide-react'

const salesData = [
  { name:'09시', value:120 },{ name:'11시', value:260 },{ name:'13시', value:430 },
  { name:'15시', value:380 },{ name:'17시', value:690 },{ name:'19시', value:920 }
]

export default function AdminDashboard({stats}){
  return <div className="adminPage">
    <div className="statGrid">
      {stats.map(s=><div className="statCard" key={s.label}><span>{s.label}</span><strong>{s.value}</strong><small>{s.trend}</small></div>)}
    </div>
    <div className="adminPanels">
      <div className="chartPanel">
        <h2><Activity/> 실시간 매출 흐름</h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={salesData}><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="value" strokeWidth={3}/></LineChart>
        </ResponsiveContainer>
      </div>
      <div className="alertPanel">
        <h2><AlertTriangle/> 운영 체크</h2>
        <p>주문 처리 정상</p>
        <p>LIVE 서버 정상</p>
        <p>AI 추천 엔진 정상</p>
        <p>코인 보상 대기 128건</p>
      </div>
    </div>
  </div>
}
