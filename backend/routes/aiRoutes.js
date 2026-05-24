import express from "express";
const router = express.Router();

router.post("/recommend", (req,res)=>{
  res.json({
    products:["AI SERUM","SMART WATCH","PREMIUM CHAIR"]
  });
});

export default router;