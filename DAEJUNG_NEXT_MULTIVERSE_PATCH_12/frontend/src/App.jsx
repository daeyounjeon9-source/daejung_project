
import "./App.css";

import MultiverseNavbar from "./components/MultiverseNavbar";
import MultiverseHero from "./components/MultiverseHero";
import MultiverseRealtime from "./components/MultiverseRealtime";
import MultiverseMarket from "./components/MultiverseMarket";
import MultiverseAI from "./components/MultiverseAI";
import MultiverseStreaming from "./components/MultiverseStreaming";
import MultiverseDefense from "./components/MultiverseDefense";
import MultiverseAdmin from "./components/MultiverseAdmin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <MultiverseNavbar />

      <MultiverseHero />

      <MultiverseRealtime />

      <MultiverseMarket />

      <div className="multiverse-system-grid">
        <MultiverseAI />
        <MultiverseStreaming />
        <MultiverseDefense />
      </div>

      <MultiverseAdmin />

      <Footer />
    </div>
  );
}

export default App;
