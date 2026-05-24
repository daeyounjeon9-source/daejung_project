import express from "express";

const router = express.Router();

router.get("/voice/status",(req,res)=>{
  res.json({
    aiVoice:true,
    liveHud:true,
    eventCenter:true
  });
});

export default router;