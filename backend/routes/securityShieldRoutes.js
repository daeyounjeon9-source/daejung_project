import express from "express";

const router = express.Router();

router.get("/security/shield",(req,res)=>{
  res.json({
    firewall:true,
    ddos:true,
    jwt:true
  });
});

export default router;