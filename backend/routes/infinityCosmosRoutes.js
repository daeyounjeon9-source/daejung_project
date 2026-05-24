import express from "express";
const router = express.Router();

router.get("/infinity/cosmos",(req,res)=>{
  res.json({
    infinity:true,
    cosmos:true,
    ai:true,
    analytics:true,
    vip:true,
    revenue:true,
    lockin:true,
    growth:true,
    world:true
  });
});

export default router;