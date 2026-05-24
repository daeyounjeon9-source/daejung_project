import "./App.css";

import HeroSection from "./components/HeroSection";
import LiveCommercePanel from "./components/LiveCommercePanel";
import AIAssistantCard from "./components/AIAssistantCard";
import PremiumStats from "./components/PremiumStats";
import FloatingGlow from "./components/FloatingGlow";

function App() {
  return (
    <div className="app">
      <FloatingGlow />

      <HeroSection />

      <PremiumStats />

      <div className="main-grid">
        <AIAssistantCard />
        <LiveCommercePanel />
      </div>
    </div>
  );
}

export default App;
