import express from "express";

const router = express.Router();

router.get("/traffic/status",(req,res)=>{
  res.json({
    traffic:"STABLE",
    scale:"AUTO",
    users:"GLOBAL"
  });
});

export default router;