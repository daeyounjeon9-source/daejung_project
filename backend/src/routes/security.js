import { Router } from 'express'
export const securityRouter = Router()
securityRouter.get('/status', (_,res)=>res.json({
  level:'triple-protection',
  score:97.8,
  layers:['login-defense','api-token-protection','wallet-admin-monitoring'],
  events:['abnormal-login-blocked','rate-limit-active','wallet-review-pending']
}))
