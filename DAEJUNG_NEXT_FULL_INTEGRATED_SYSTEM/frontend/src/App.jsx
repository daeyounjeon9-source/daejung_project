
import UniverseNavbar from "./components/UniverseNavbar";
import UniverseHero from "./components/UniverseHero";
import UniverseStats from "./components/UniverseStats";
import UniverseMarketplace from "./components/UniverseMarketplace";
import UniverseAI from "./components/UniverseAI";

export default function App(){
  return (
    <div>
      <UniverseNavbar/>
      <UniverseHero/>
      <UniverseStats/>
      <UniverseMarketplace/>
      <UniverseAI/>
    </div>
  );
}
