import express from "express";

const router = express.Router();

router.get("/network/global",(req,res)=>{
  res.json({
    network:"WORLD_ACTIVE",
    ai:true,
    cloud:true,
    live:true
  });
});

export default router;