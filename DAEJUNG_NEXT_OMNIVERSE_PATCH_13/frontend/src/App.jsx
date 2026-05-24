
import "./App.css";

import OmniverseNavbar from "./components/OmniverseNavbar";
import OmniverseHero from "./components/OmniverseHero";
import OmniverseStats from "./components/OmniverseStats";
import OmniverseMarket from "./components/OmniverseMarket";
import OmniverseAI from "./components/OmniverseAI";

function App(){
  return (
    <div className="app">
      <OmniverseNavbar/>
      <OmniverseHero/>
      <OmniverseStats/>
      <OmniverseMarket/>
      <OmniverseAI/>
    </div>
  );
}

export default App;
