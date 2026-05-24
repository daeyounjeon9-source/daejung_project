import express from "express";

const router = express.Router();

router.get("/matrix/status",(req,res)=>{
  res.json({
    matrix:true
  });
});

export default router;