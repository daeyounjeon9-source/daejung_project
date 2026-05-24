import express from "express";

const router = express.Router();

router.get("/ultimate/infinity",(req,res)=>{
  res.json({
    ultimate:true,
    infinity:true,
    ai:true,
    live:true,
    security:true,
    analytics:true,
    cloud:true
  });
});

export default router;