import express from "express";

const router = express.Router();

router.get("/supreme/global-core",(req,res)=>{
  res.json({
    supreme:true,
    ai:true,
    live:true,
    cloud:true,
    security:true,
    analytics:true,
    worldScale:true
  });
});

export default router;