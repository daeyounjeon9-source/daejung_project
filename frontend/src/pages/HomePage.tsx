import HeroSection from "../components/HeroSection";
import StatsGrid from "../components/StatsGrid";
import FeatureCards from "../components/FeatureCards";
import PremiumBanner from "../components/PremiumBanner";
import LiveStatusCard from "../components/LiveStatusCard";
import OTTShowcase from "../components/OTTShowcase";
import DonationPanel from "../components/DonationPanel";
import SystemMonitor from "../components/SystemMonitor";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0b1020] text-white">
            {/* HERO */}
            <HeroSection />

            {/* LIVE STATUS */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <LiveStatusCard />
                </div>
            </section>

            {/* STATS */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <StatsGrid />
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <FeatureCards />
                </div>
            </section>

            {/* OTT */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <OTTShowcase />
                </div>
            </section>

            {/* DONATION */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <DonationPanel />
                </div>
            </section>

            {/* SYSTEM */}
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <SystemMonitor />
                </div>
            </section>

            {/* PREMIUM */}
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <PremiumBanner />
                </div>
            </section>
        </div>
    );
}