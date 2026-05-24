
import "./App.css";

import Navbar from "./components/Navbar";
import MainVisual from "./components/MainVisual";
import RealtimeBoard from "./components/RealtimeBoard";
import LiveCommerce from "./components/LiveCommerce";
import AICharacter from "./components/AICharacter";
import StreamingPanel from "./components/StreamingPanel";
import SecurityCenter from "./components/SecurityCenter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <MainVisual />

      <RealtimeBoard />

      <LiveCommerce />

      <div className="system-grid">
        <AICharacter />
        <StreamingPanel />
        <SecurityCenter />
      </div>

      <Footer />
    </div>
  );
}

export default App;
