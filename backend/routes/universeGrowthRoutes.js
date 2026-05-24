import express from "express";

const router = express.Router();

router.get("/universe/growth",(req,res)=>{
  res.json({
    universe:true,
    ai:true,
    vip:true,
    growth:true,
    revenue:true
  });
});

export default router;