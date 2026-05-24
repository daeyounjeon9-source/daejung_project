import express from "express";
const router = express.Router();

router.get("/marketing/automation",(req,res)=>{
  res.json({
    marketing:true,
    analytics:true,
    recommendation:true,
    traffic:true
  });
});

export default router;