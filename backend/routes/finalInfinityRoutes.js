import express from "express";

const router = express.Router();

router.get("/final/infinity",(req,res)=>{
  res.json({
    finalInfinity:true,
    ai:true,
    live:true,
    cloud:true,
    analytics:true,
    security:true
  });
});

export default router;