import express from "express";

const router = express.Router();

router.get("/global/core",(req,res)=>{
  res.json({
    deploy:true,
    live:true,
    ai:true,
    security:true
  });
});

export default router;