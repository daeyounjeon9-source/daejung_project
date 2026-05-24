
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const db = require('./db/database');

app.use(express.json());

app.get('/',(req,res)=>{
  res.json({
    status:"FULL SYSTEM ACTIVE",
    db:db.summary()
  });
});

io.on('connection',(socket)=>{
  setInterval(()=>{
    socket.emit('live',{
      viewers:Math.random()*1000000,
      sales:Math.random()*1000000000,
      db:db.summary()
    });
  },2000);
});

http.listen(4000,()=>console.log("SYSTEM RUNNING"));
