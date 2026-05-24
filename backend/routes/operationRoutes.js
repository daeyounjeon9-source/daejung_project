import express from "express";
const router = express.Router();

router.get("/operation/status",(req,res)=>{
  res.json({
    operation:true,
    global:true,
    live:true
  });
});

export default router;