
class CoinService {
  constructor(){
    this.balance = 1e12;
  }

  getBalance(){
    return this.balance;
  }

  transfer(amount){
    this.balance -= amount;
    return this.balance;
  }
}

module.exports = new CoinService();
