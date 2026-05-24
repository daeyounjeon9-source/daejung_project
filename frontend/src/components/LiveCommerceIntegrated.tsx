import React from "react";
import LiveStreamingPlayer from "./LiveStreamingPlayer";
import ProductListWithCoin from "./ProductListWithCoin";
import AICharacterGuide from "./AICharacterGuide";

export default function LiveCommerceIntegrated() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AICharacterGuide />
      <div className="py-8 px-4 md:px-20">
        <LiveStreamingPlayer streamUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
      <ProductListWithCoin />
    </div>
  );
}
