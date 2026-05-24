
import "./App.css";

import SupremeNavbar from "./components/SupremeNavbar";
import SupremeHero from "./components/SupremeHero";
import RealtimeSupreme from "./components/RealtimeSupreme";
import SupremeMarketplace from "./components/SupremeMarketplace";
import AISupreme from "./components/AISupreme";
import GlobalLiveCore from "./components/GlobalLiveCore";
import DefenseSupreme from "./components/DefenseSupreme";
import AdminSupreme from "./components/AdminSupreme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <SupremeNavbar />

      <SupremeHero />

      <RealtimeSupreme />

      <SupremeMarketplace />

      <div className="supreme-system-grid">
        <AISupreme />
        <GlobalLiveCore />
        <DefenseSupreme />
      </div>

      <AdminSupreme />

      <Footer />
    </div>
  );
}

export default App;
