import express from "express";

const router = express.Router();

router.get("/future/status",(req,res)=>{
  res.json({
    avatar:true,
    metaverse:true,
    cloud:true,
    analytics:true
  });
});

export default router;