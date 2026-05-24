
class AIService {
  analyze(data){
    return {
      trend: "UP",
      confidence: 0.98,
      recommendation: "BUY"
    };
  }
}

module.exports = new AIService();
