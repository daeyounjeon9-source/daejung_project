import express from "express";

const router = express.Router();

router.get("/global/supremacy",(req,res)=>{
  res.json({
    supremacy:true,
    vip:true,
    ai:true,
    revenue:true,
    optimization:true
  });
});

export default router;