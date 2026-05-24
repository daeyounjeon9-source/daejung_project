import express from "express";

const router = express.Router();

router.get("/infinity/world-engine",(req,res)=>{
  res.json({
    infinity:true,
    worldEngine:true,
    ai:true,
    live:true,
    cloud:true,
    security:true,
    analytics:true
  });
});

export default router;