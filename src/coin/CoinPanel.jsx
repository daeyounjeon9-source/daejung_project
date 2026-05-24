import { Wallet, Lock, Coins } from 'lucide-react'

export default function CoinPanel(){
  const rows=[
    ['총 발행 계획','1,000,000,000 LIVON'],
    ['개발자 지갑','30% 별도 분리'],
    ['50년 순차 배분','락업/베스팅 구조'],
    ['사용처','구매보상 · 후원 · 멤버십'],
    ['출금 보호','2차 인증 + 관리자 승인']
  ]
  return <div className="coinPage">
    <div className="coinHero"><Coins size={56}/><h2>LIVON 생태계 보상 시스템</h2><p>실제 구매와 방송 참여가 코인 보상으로 연결되는 구조입니다.</p></div>
    <div className="coinGrid">{rows.map(r=><div className="coinRow" key={r[0]}><span>{r[0]}</span><strong>{r[1]}</strong></div>)}</div>
    <div className="walletBox"><Wallet/> 고객 지갑 / <Lock/> 개발자 지갑 / 관리자 회계 지갑 분리 구조 준비</div>
  </div>
}
