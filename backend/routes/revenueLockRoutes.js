import express from "express";

const router = express.Router();

router.get("/revenue/lock",(req,res)=>{
  res.json({
    lockSystem:true,
    ai:true,
    vip:true,
    optimization:true
  });
});

export default router;