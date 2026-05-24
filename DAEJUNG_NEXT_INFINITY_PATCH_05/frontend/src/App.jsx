
import "./App.css";

import TopBanner from "./components/TopBanner";
import RealtimeCards from "./components/RealtimeCards";
import InfiniteProducts from "./components/InfiniteProducts";
import AIControl from "./components/AIControl";
import LiveCenter from "./components/LiveCenter";
import DefenseSystem from "./components/DefenseSystem";
import AdminRealtime from "./components/AdminRealtime";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <TopBanner />

      <RealtimeCards />

      <InfiniteProducts />

      <div className="center-grid">
        <AIControl />
        <LiveCenter />
        <DefenseSystem />
      </div>

      <AdminRealtime />

      <Footer />
    </div>
  );
}

export default App;
