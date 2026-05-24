import express from "express";

const router = express.Router();

router.get("/omega/infinity-platform",(req,res)=>{
  res.json({
    omega:true,
    infinity:true,
    platform:true,
    ai:true,
    cloud:true,
    live:true,
    analytics:true
  });
});

export default router;