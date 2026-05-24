import express from "express";
const router = express.Router();

router.get("/global/streaming",(req,res)=>{
  res.json({
    streaming:true,
    ai:true,
    analytics:true,
    traffic:true,
    revenue:true,
    recommendation:true
  });
});

export default router;