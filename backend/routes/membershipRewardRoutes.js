import express from "express";

const router = express.Router();

router.get("/membership/reward",(req,res)=>{
  res.json({
    signupReward:true,
    vip:true,
    live:true,
    aiOptimization:true
  });
});

export default router;