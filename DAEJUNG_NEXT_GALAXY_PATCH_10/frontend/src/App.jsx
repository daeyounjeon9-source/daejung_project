
import "./App.css";

import GalaxyNavbar from "./components/GalaxyNavbar";
import GalaxyHero from "./components/GalaxyHero";
import GalaxyRealtime from "./components/GalaxyRealtime";
import GalaxyMarketplace from "./components/GalaxyMarketplace";
import GalaxyAI from "./components/GalaxyAI";
import GalaxyStreaming from "./components/GalaxyStreaming";
import GalaxyDefense from "./components/GalaxyDefense";
import GalaxyAdmin from "./components/GalaxyAdmin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <GalaxyNavbar />

      <GalaxyHero />

      <GalaxyRealtime />

      <GalaxyMarketplace />

      <div className="galaxy-system-grid">
        <GalaxyAI />
        <GalaxyStreaming />
        <GalaxyDefense />
      </div>

      <GalaxyAdmin />

      <Footer />
    </div>
  );
}

export default App;
