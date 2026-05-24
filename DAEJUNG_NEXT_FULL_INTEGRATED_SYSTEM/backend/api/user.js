
const db = require('../db/database');

module.exports = {
  create:(name)=>{
    const u = {id:Date.now(),name};
    db.addUser(u);
    return u;
  },
  all:()=>db.users
};
