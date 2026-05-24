import express from "express";

const router = express.Router();

router.get("/world/infinity",(req,res)=>{
  res.json({
    world:true,
    infinity:true,
    ai:true,
    cloud:true,
    live:true
  });
});

export default router;