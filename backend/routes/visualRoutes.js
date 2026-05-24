import express from "express";

const router = express.Router();

router.get("/visual/status",(req,res)=>{
  res.json({
    netflix:true,
    aiHost:true,
    globalBrand:true
  });
});

export default router;