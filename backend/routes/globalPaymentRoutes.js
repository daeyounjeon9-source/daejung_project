import express from "express";
const router = express.Router();

router.get("/global/payment",(req,res)=>{
  res.json({
    payment:true,
    ai:true,
    analytics:true,
    protection:true,
    pg:true,
    settlement:true
  });
});

export default router;