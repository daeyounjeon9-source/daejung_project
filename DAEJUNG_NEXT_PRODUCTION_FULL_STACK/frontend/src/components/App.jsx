
import {useEffect, useState} from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function App(){

  const [live,setLive]=useState({});

  useEffect(()=>{
    socket.on("live",(data)=>{
      setLive(data);
    });
  },[]);

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>DAEJUNG NEXT PRODUCTION</h1>

      <div style={{marginTop:20}}>
        <h2>LIVE</h2>
        <p>Viewers: {live.viewers}</p>
        <p>Sales: {live.sales}</p>
      </div>
    </div>
  );
}
