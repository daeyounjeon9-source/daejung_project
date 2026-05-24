import express from "express";

const router = express.Router();

router.get("/world/dominance",(req,res)=>{
  res.json({
    dominance:true,
    vip:true,
    ai:true,
    retention:true,
    revenue:true
  });
});

export default router;