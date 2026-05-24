import express from "express";

const router = express.Router();

router.get("/global/reward",(req,res)=>{
  res.json({
    reward:true,
    vip:true,
    ai:true,
    optimization:true
  });
});

export default router;