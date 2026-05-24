import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { securityRouter } from './routes/security.js'
import { coinRouter } from './routes/coin.js'
import { adminRouter } from './routes/admin.js'
import { liveRouter } from './routes/live.js'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json({limit:'1mb'}))
app.use(rateLimit({ windowMs: 60 * 1000, max: 180 }))

app.get('/health', (_,res)=>res.json({ ok:true, service:'DAEJUNG NEXT API', version:'0.9.1' }))
app.use('/api/security', securityRouter)
app.use('/api/coin', coinRouter)
app.use('/api/admin', adminRouter)
app.use('/api/live', liveRouter)

const port = process.env.PORT || 4000
app.listen(port,()=>console.log(`DAEJUNG NEXT backend running on ${port}`))
