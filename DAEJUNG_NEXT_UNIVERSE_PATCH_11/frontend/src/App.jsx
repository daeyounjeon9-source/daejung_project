
import "./App.css";

import UniverseNavbar from "./components/UniverseNavbar";
import UniverseHero from "./components/UniverseHero";
import UniverseStats from "./components/UniverseStats";
import UniverseMarketplace from "./components/UniverseMarketplace";
import UniverseAI from "./components/UniverseAI";
import UniverseStreaming from "./components/UniverseStreaming";
import UniverseDefense from "./components/UniverseDefense";
import UniverseAdmin from "./components/UniverseAdmin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <UniverseNavbar />

      <UniverseHero />

      <UniverseStats />

      <UniverseMarketplace />

      <div className="universe-system-grid">
        <UniverseAI />
        <UniverseStreaming />
        <UniverseDefense />
      </div>

      <UniverseAdmin />

      <Footer />
    </div>
  );
}

export default App;
