
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import AIPanel from "./components/AIPanel";
import LivePanel from "./components/LivePanel";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <Hero />

      <Stats />

      <ProductSection />

      <div className="panel-grid">
        <AIPanel />
        <LivePanel />
        <AdminPanel />
      </div>

      <Footer />
    </div>
  );
}

export default App;
