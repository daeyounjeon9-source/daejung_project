import React from "react";
import LiveStreamingPlayer from "./LiveStreamingPlayer";
import ProductListWithCoin from "./ProductListWithCoin";
import AICharacterGuide from "./AICharacterGuide";

export default function OperationalSmall() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AICharacterGuide />
      <div className="py-8 px-4 md:px-20">
        <LiveStreamingPlayer streamUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
      <ProductListWithCoin />
      {/* AI 안내, 코인 이벤트, 실시간 알림 통합 */}
    </div>
  );
}
