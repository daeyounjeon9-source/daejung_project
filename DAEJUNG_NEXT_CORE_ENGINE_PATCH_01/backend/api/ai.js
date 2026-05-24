
module.exports = {
  askAI: (msg) => {
    return {
      answer: "AI RESPONSE: " + msg,
      recommend: ["product1","product2"]
    };
  }
};
