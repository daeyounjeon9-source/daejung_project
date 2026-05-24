import express from "express";

const router = express.Router();

router.get("/infinity/omega",(req,res)=>{
  res.json({
    infinity:true,
    omega:true,
    ai:true,
    live:true,
    cloud:true,
    security:true
  });
});

export default router;