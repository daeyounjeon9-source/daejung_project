import { Router } from 'express'
export const adminRouter = Router()
adminRouter.get('/dashboard', (_,res)=>res.json({
  visitors:81240,
  ordersToday:12804,
  liveSalesKRW:584000000,
  securityScore:97.8,
  status:'normal'
}))
