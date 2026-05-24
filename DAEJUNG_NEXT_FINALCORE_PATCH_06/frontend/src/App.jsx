
import "./App.css";

import InfinityHeader from "./components/InfinityHeader";
import InfinityHero from "./components/InfinityHero";
import RealtimeInfinity from "./components/RealtimeInfinity";
import InfinityProducts from "./components/InfinityProducts";
import AIInfinity from "./components/AIInfinity";
import GlobalStreaming from "./components/GlobalStreaming";
import UltraDefense from "./components/UltraDefense";
import RealtimeAdmin from "./components/RealtimeAdmin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <InfinityHeader />

      <InfinityHero />

      <RealtimeInfinity />

      <InfinityProducts />

      <div className="system-layout">
        <AIInfinity />
        <GlobalStreaming />
        <UltraDefense />
      </div>

      <RealtimeAdmin />

      <Footer />
    </div>
  );
}

export default App;
