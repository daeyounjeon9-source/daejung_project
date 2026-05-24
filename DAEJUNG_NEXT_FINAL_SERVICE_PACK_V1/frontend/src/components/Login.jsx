
import {useState} from "react";

export default function Login(){

  const [id,setId]=useState("");
  const [pw,setPw]=useState("");

  const login=async()=>{
    const res = await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id,pw})
    });

    console.log(await res.json());
  };

  return (
    <div>
      <input placeholder="id" onChange={e=>setId(e.target.value)} />
      <input placeholder="pw" onChange={e=>setPw(e.target.value)} />
      <button onClick={login}>LOGIN</button>
    </div>
  );
}
