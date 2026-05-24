import express from "express";

const router = express.Router();

router.get("/omega/world",(req,res)=>{
  res.json({
    omega:true,
    ai:true,
    live:true,
    cloud:true,
    global:true
  });
});

export default router;