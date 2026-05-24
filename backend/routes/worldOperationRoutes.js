import express from "express";

const router = express.Router();

router.get("/world/operation",(req,res)=>{
  res.json({
    operation:"ACTIVE",
    ai:true,
    live:true,
    global:true
  });
});

export default router;