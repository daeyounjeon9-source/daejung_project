import express from "express";
const router = express.Router();

router.get("/live/commerce",(req,res)=>{
  res.json({
    live:true,
    analytics:true,
    recommendation:true,
    conversion:true
  });
});

export default router;