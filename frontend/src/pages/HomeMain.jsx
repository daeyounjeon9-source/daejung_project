import HeroBanner from "../components/HeroBanner";
import ProductSlider from "../components/ProductSlider";
import AICharacter from "../components/AICharacter";
import LiveChat from "../components/LiveChat";
import LiveStream from "../components/LiveStream";
import OTTSection from "../components/OTTSection";
import { useNavigate } from "react-router-dom";

export default function HomeMain() {
  const navigate = useNavigate();
  return (
    <div className="home-main">
      <HeroBanner 
        onLiveClick={() => navigate("/live")}
        onAdminClick={() => navigate("/admin")}
      />
      <OTTSection />
      <ProductSlider />
      <AICharacter />
      <LiveChat />
      <LiveStream />
    </div>
  );
}