import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

const messages = {
  home: '안녕하세요. DAEJUNG NEXT에 오신 것을 환영합니다. 지금 가장 반응 좋은 상품을 안내할게요.',
  live: '현재 LIVE 방송 반응이 빠르게 올라가고 있습니다. 바로구매 버튼과 보상 구조가 연결되어 있습니다.',
  admin: '관리자 센터에서 매출, 주문, 보안, 코인 상태를 한 번에 확인할 수 있습니다.',
  coin: 'LIVON 코인은 구매 보상, 후원, 멤버십, 생태계 참여 보상으로 확장됩니다.',
  security: '3중 보안 감시가 작동 중입니다. 이상 접속과 지갑 출금 위험을 자동 점검합니다.',
  ops: '실제 운영을 위해 서버, Docker, 환경변수, 로그 구조를 준비했습니다.'
}

export default function AiCharacter({section}){
  return <motion.div className="aiGuide" initial={{x:80,opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring'}}>
    <div className="aiFace"><Bot size={30}/></div>
    <div>
      <strong>AI LINA</strong>
      <p>{messages[section]}</p>
    </div>
  </motion.div>
}
