import "./App.css";

import TopNav from "./components/layout/TopNav";
import SideMenu from "./components/layout/SideMenu";
import HeroCommerce from "./components/hero/HeroCommerce";
import LiveShowcase from "./components/live/LiveShowcase";
import ProductMall from "./components/shop/ProductMall";
import AIAssistantPanel from "./components/ai/AIAssistantPanel";
import RealtimeStats from "./components/stats/RealtimeStats";
import AdminQuickDock from "./components/admin/AdminQuickDock";
import MembershipBanner from "./components/membership/MembershipBanner";
import PremiumFooter from "./components/footer/PremiumFooter";

export default function App() {
  return (
    <main className="app">
      <TopNav />

      <div className="shell">
        <SideMenu />

        <section className="content">
          <HeroCommerce />
          <LiveShowcase />
          <ProductMall />
          <AdminQuickDock />
          <MembershipBanner />
          <PremiumFooter />
        </section>

        <aside className="rightPanel">
          <AIAssistantPanel />
          <RealtimeStats />
        </aside>
      </div>
    </main>
  );
}