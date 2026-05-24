import express from "express";

const router = express.Router();

router.get("/world/membership",(req,res)=>{
  res.json({
    membership:true,
    vip:true,
    ai:true,
    reward:true
  });
});

export default router;