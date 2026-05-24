
class LiveService {
  constructor(){
    this.viewers = 0;
  }

  update(){
    this.viewers += Math.floor(Math.random()*10000);
  }

  get(){
    return this.viewers;
  }
}

module.exports = new LiveService();
