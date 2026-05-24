import express from "express";

const router = express.Router();

router.get("/supreme/infinity-world",(req,res)=>{
  res.json({
    supreme:true,
    infinity:true,
    world:true,
    ai:true,
    live:true,
    cloud:true,
    security:true,
    analytics:true
  });
});

export default router;