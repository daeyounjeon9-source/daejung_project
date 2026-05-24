import express from "express";
const router = express.Router();

router.get("/vip/growth",(req,res)=>{
  res.json({
    vip:true,
    analytics:true,
    retention:true,
    recommendation:true
  });
});

export default router;