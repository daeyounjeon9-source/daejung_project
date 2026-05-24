
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" }
});

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("DAEJUNG NEXT CORE ENGINE RUNNING");
});

// LIVE STREAM SIMULATION
io.on("connection", (socket)=>{
  console.log("user connected");

  setInterval(()=>{
    socket.emit("live_data", {
      viewers: Math.floor(Math.random()*1000000),
      sales: Math.floor(Math.random()*1000000000),
      ai: "ACTIVE"
    });
  }, 2000);
});

http.listen(4000, ()=>{
  console.log("CORE ENGINE RUNNING ON 4000");
});
