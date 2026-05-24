import express from "express";
const router = express.Router();

router.get("/global/ai-automation",(req,res)=>{
  res.json({
    aiAutomation:true,
    analytics:true,
    recommendation:true,
    revenue:true,
    traffic:true,
    admin:true
  });
});

export default router;