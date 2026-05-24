import express from "express";

const router = express.Router();

router.get("/planetary/expansion",(req,res)=>{
  res.json({
    expansion:true,
    ai:true,
    vip:true,
    growth:true,
    revenue:true
  });
});

export default router;