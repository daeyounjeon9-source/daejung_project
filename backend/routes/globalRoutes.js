import express from "express";

const router = express.Router();

router.get("/global",(req,res)=>{
  res.json({
    korea:true,
    usa:true,
    japan:true,
    singapore:true
  });
});

export default router;