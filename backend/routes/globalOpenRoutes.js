import express from "express";

const router = express.Router();

router.get("/global/open",(req,res)=>{
  res.json({
    globalOpen:true,
    aiOperation:true,
    liveWorld:true
  });
});

export default router;