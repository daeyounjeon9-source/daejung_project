
import "./App.css";

import SystemNavbar from "./components/SystemNavbar";
import SystemHero from "./components/SystemHero";
import GlobalStats from "./components/GlobalStats";
import Marketplace from "./components/Marketplace";
import AICommander from "./components/AICommander";
import StreamingCore from "./components/StreamingCore";
import DefenseCore from "./components/DefenseCore";
import AdminInfinity from "./components/AdminInfinity";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <SystemNavbar />

      <SystemHero />

      <GlobalStats />

      <Marketplace />

      <div className="system-grid">
        <AICommander />
        <StreamingCore />
        <DefenseCore />
      </div>

      <AdminInfinity />

      <Footer />
    </div>
  );
}

export default App;
