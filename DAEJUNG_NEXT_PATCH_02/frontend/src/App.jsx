import "./App.css";

import MegaBanner from "./components/MegaBanner";
import ProductSlider from "./components/ProductSlider";
import LiveStatusPanel from "./components/LiveStatusPanel";
import AIHost from "./components/AIHost";
import SecurityPanel from "./components/SecurityPanel";

function App() {
  return (
    <div className="app">
      <MegaBanner />
      <ProductSlider />
      <div className="bottom-grid">
        <AIHost />
        <LiveStatusPanel />
        <SecurityPanel />
      </div>
    </div>
  );
}

export default App;
