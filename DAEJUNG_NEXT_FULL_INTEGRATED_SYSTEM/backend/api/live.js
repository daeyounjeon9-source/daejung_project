
const db = require('../db/database');

module.exports = {
  push:(data)=>{
    db.addLive(data);
    return data;
  },
  get:()=>({
    viewers:Math.floor(Math.random()*1000000),
    sales:Math.floor(Math.random()*1000000000)
  })
};
