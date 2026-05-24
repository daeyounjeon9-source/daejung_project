
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {cors:{origin:"*"}});

app.use(cors());
app.use(express.json());

const JWT_SECRET = "DAEJUNG_PRODUCTION_SECRET";

// ===== MONGO (placeholder URI) =====
mongoose.connect("mongodb://localhost:27017/daejung", {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

// ===== SCHEMAS =====
const User = mongoose.model("User", new mongoose.Schema({
  id:String,
  pw:String,
  coin:Number
}));

const Log = mongoose.model("Log", new mongoose.Schema({
  type:String,
  data:Object,
  time:Date
}));

// ===== AUTH =====
app.post("/register", async (req,res)=>{
  const {id,pw} = req.body;
  await User.create({id,pw,coin:1000000});
  res.json({ok:true});
});

app.post("/login", async (req,res)=>{
  const {id,pw} = req.body;
  const user = await User.findOne({id,pw});

  if(!user) return res.json({ok:false});

  const token = jwt.sign({id}, JWT_SECRET);
  res.json({token});
});

// ===== AI =====
app.post("/ai", (req,res)=>{
  const {msg} = req.body;
  res.json({
    answer:"AI RESPONSE: " + msg,
    recommend:["PROD_A","PROD_B"]
  });
});

// ===== COIN =====
app.post("/coin/send", async (req,res)=>{
  const {from,to,amount} = req.body;

  const u1 = await User.findOne({id:from});
  const u2 = await User.findOne({id:to});

  if(!u1 || !u2) return res.json({ok:false});

  u1.coin -= amount;
  u2.coin += amount;

  await u1.save();
  await u2.save();

  await Log.create({type:"coin",data:{from,to,amount},time:new Date()});

  res.json({ok:true});
});

// ===== LIVE =====
io.on("connection",(socket)=>{
  setInterval(()=>{
    socket.emit("live",{
      viewers:Math.floor(Math.random()*1000000),
      sales:Math.floor(Math.random()*1000000000),
      status:"LIVE"
    });
  },2000);
});

// ===== HEALTH =====
app.get("/",(req,res)=>{
  res.json({status:"DAEJUNG PRODUCTION ONLINE"});
});

server.listen(4000,()=>{
  console.log("DAEJUNG PRODUCTION SERVER RUNNING");
});
