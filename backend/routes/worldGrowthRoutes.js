import express from "express";

const router = express.Router();

router.get("/world/growth",(req,res)=>{
  res.json({
    growth:true,
    vip:true,
    ai:true,
    retention:true
  });
});

export default router;