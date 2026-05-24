import express from "express";

const router = express.Router();

router.get("/vip/status",(req,res)=>{
  res.json({
    vip:true,
    benefits:["FREE_DELIVERY","AI_RECOMMEND","LIVE_EVENT"]
  });
});

export default router;