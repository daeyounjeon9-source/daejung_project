
class LiveService{
  constructor(){ this.v=0; }
  tick(){ this.v+=Math.random()*10000; }
  get(){ return this.v; }
}
module.exports = new LiveService();
