import express from "express";

const router = express.Router();

router.get("/enterprise/status",(req,res)=>{
  res.json({
    status:"ENTERPRISE_READY",
    ai:true,
    live:true,
    payment:true
  });
});

export default router;