import express from "express";

const router = express.Router();

router.get("/infinity/enterprise",(req,res)=>{
  res.json({
    infinity:true,
    ai:true,
    cloud:true,
    live:true,
    analytics:true
  });
});

export default router;