
import {useEffect,useState} from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function App(){

  const [live,setLive]=useState({});

  useEffect(()=>{
    socket.on("live",(d)=>setLive(d));
  },[]);

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>DAEJUNG NEXT PRODUCTION SYSTEM</h1>

      <div style={{marginTop:30}}>
        <h2>LIVE STATUS</h2>
        <p>Viewers: {live.viewers}</p>
        <p>Sales: {live.sales}</p>
        <p>Status: {live.status}</p>
      </div>
    </div>
  );
}
