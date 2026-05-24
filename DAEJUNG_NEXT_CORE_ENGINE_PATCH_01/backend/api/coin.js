
let balance = 1000000000;

module.exports = {
  getBalance: () => balance,
  addCoin: (v) => balance += v,
  spendCoin: (v) => balance -= v
};
