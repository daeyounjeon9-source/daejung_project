import express from "express";

const router = express.Router();

router.get("/omega/future",(req,res)=>{
  res.json({
    omega:true,
    avatar:true,
    metaverse:true
  });
});

export default router;