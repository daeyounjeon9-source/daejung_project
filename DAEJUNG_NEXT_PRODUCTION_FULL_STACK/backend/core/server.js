
const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {cors:{origin:"*"}});

app.use(express.json());

const SECRET = "DAEJUNG_SECRET";

// ===== SIMPLE DB =====
let db = {
  users: [],
  coins: {},
  logs: [],
  live: []
};

// ===== AUTH =====
app.post('/register',(req,res)=>{
  const {id,pw} = req.body;
  db.users.push({id,pw});
  db.coins[id] = 1000000;
  res.json({ok:true});
});

app.post('/login',(req,res)=>{
  const {id,pw} = req.body;
  const user = db.users.find(u=>u.id===id && u.pw===pw);
  if(!user) return res.json({ok:false});

  const token = jwt.sign({id}, SECRET);
  res.json({token});
});

// ===== COIN =====
app.post('/coin/send',(req,res)=>{
  const {from,to,amount} = req.body;

  db.coins[from] -= amount;
  db.coins[to] = (db.coins[to]||0) + amount;

  db.logs.push({from,to,amount});

  res.json({ok:true});
});

// ===== LIVE =====
io.on('connection',(socket)=>{
  setInterval(()=>{
    const data = {
      viewers: Math.floor(Math.random()*1000000),
      sales: Math.floor(Math.random()*1000000000)
    };
    db.live.push(data);
    socket.emit('live', data);
  },2000);
});

// ===== AI =====
app.post('/ai',(req,res)=>{
  const {msg} = req.body;
  res.json({
    answer:"AI RESPONSE: "+msg,
    recommend:["productA","productB"]
  });
});

server.listen(4000,()=>{
  console.log("PRODUCTION CORE RUNNING");
});
