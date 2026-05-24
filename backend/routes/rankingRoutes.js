import express from "express";

const router = express.Router();

router.get("/ranking",(req,res)=>{
  res.json({
    ranking:[
      "SMART WATCH",
      "PREMIUM SERUM",
      "WIRELESS EARPHONE"
    ]
  });
});

export default router;