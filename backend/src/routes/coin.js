import { Router } from 'express'
export const coinRouter = Router()
coinRouter.get('/policy', (_,res)=>res.json({
  token:'LIVON',
  maxSupply:1000000000,
  developerWalletRatio:'30%',
  vesting:'50-years-linear',
  useCases:['purchase-reward','live-donation','membership','ecosystem-reward']
}))
