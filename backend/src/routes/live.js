import { Router } from 'express'
export const liveRouter = Router()
liveRouter.get('/shows', (_,res)=>res.json([
  {id:1,title:'NEXT 프리미엄 라이브',viewers:28400},
  {id:2,title:'새벽 특가 홈쇼핑',viewers:12900},
  {id:3,title:'글로벌 공동구매',viewers:45100}
]))
