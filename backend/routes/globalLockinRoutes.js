import express from "express";

const router = express.Router();

router.get("/global/lockin",(req,res)=>{
  res.json({
    lockin:true,
    ai:true,
    vip:true,
    retention:true
  });
});

export default router;