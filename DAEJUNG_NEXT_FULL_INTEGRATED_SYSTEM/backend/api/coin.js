
const db = require('../db/database');

module.exports = {
  balance:()=>db.summary().coin,
  spend:(v)=>db.coin-=v,
  add:(v)=>db.coin+=v
};
