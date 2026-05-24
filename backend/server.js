import http from 'http';
const port = process.env.PORT || 4000;
const data = { service:'DAEJUNG NEXT API', version:'0.5.0', status:'running', modules:['live','admin','coin','security','ai-character'] };
const server = http.createServer((req,res)=>{res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Content-Type','application/json; charset=utf-8'); if(req.url==='/health') res.end(JSON.stringify({ok:true, time:new Date().toISOString()})); else res.end(JSON.stringify(data));});
server.listen(port,()=>console.log(`DAEJUNG NEXT backend running: http://localhost:${port}`));
