import express from "express";
const router = express.Router();

router.get("/admin/control",(req,res)=>{
  res.json({
    admin:true,
    analytics:true,
    control:true,
    monitoring:true
  });
});

export default router;