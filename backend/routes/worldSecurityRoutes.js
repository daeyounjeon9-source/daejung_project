import express from "express";
const router = express.Router();

router.get("/world/security",(req,res)=>{
  res.json({
    security:true,
    ai:true,
    protection:true,
    analytics:true,
    monitoring:true,
    traffic:true
  });
});

export default router;