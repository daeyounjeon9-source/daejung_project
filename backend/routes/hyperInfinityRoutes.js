import express from "express";
const router = express.Router();

router.get("/hyper/infinity",(req,res)=>{
  res.json({
    hyper:true,
    infinity:true,
    ai:true,
    revenue:true,
    vip:true,
    world:true,
    analytics:true,
    lockin:true
  });
});

export default router;