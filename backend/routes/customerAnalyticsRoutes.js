import express from "express";
const router = express.Router();

router.get("/customer/analytics",(req,res)=>{
  res.json({
    analytics:true,
    vip:true,
    recommendation:true,
    retention:true
  });
});

export default router;