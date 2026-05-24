import express from "express";

const router = express.Router();

router.get("/world/empire",(req,res)=>{
  res.json({
    empire:true,
    ai:true,
    vip:true,
    retention:true,
    growth:true
  });
});

export default router;