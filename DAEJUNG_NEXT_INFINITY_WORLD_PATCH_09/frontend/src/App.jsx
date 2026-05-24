
import "./App.css";

import WorldNavbar from "./components/WorldNavbar";
import WorldHero from "./components/WorldHero";
import WorldRealtime from "./components/WorldRealtime";
import WorldMarketplace from "./components/WorldMarketplace";
import AIWorldCore from "./components/AIWorldCore";
import GlobalWorldStreaming from "./components/GlobalWorldStreaming";
import WorldDefense from "./components/WorldDefense";
import WorldAdmin from "./components/WorldAdmin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <WorldNavbar />

      <WorldHero />

      <WorldRealtime />

      <WorldMarketplace />

      <div className="world-system-grid">
        <AIWorldCore />
        <GlobalWorldStreaming />
        <WorldDefense />
      </div>

      <WorldAdmin />

      <Footer />
    </div>
  );
}

export default App;
