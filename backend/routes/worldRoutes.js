import express from "express";

const router = express.Router();

router.get("/world/status",(req,res)=>{
  res.json({
    liveWorld:true,
    aiFace:true,
    vip:true,
    sales:true
  });
});

export default router;