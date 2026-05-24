
class Database {
  constructor() {
    this.users = [];
    this.transactions = [];
    this.liveLogs = [];
    this.coin = 1e12;
  }

  addUser(u){ this.users.push(u); }
  addTx(t){ this.transactions.push(t); }
  addLive(l){ this.liveLogs.push(l); }

  summary(){
    return {
      users:this.users.length,
      tx:this.transactions.length,
      live:this.liveLogs.length,
      coin:this.coin
    };
  }
}

module.exports = new Database();
