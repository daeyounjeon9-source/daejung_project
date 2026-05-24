import express from "express";

const router = express.Router();

router.post("/reward",(req,res)=>{
  res.json({
    success:true,
    reward:"LIVON_COIN"
  });
});

export default router;