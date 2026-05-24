import express from "express";

const router = express.Router();

router.get("/absolute/world-platform",(req,res)=>{
  res.json({
    absolute:true,
    world:true,
    platform:true,
    ai:true,
    live:true,
    cloud:true,
    analytics:true,
    security:true
  });
});

export default router;