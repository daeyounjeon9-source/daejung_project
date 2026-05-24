import express from "express";

const router = express.Router();

router.get("/today",(req,res)=>{
  res.json({
    orders:35247,
    revenue:8547230000
  });
});

export default router;