import express from "express";

const router = express.Router();

router.get("/motion/status",(req,res)=>{
  res.json({
    hero:true,
    aiHost:true,
    slider:true,
    vip:true
  });
});

export default router;