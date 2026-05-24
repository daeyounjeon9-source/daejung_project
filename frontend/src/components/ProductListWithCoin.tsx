import React, { useEffect, useState } from "react";
import { Coins, ShoppingCart } from "lucide-react";

// 샘플 상품 데이터 (실제 API fetch로 교체 가능)
const sampleProducts = [
  { id: 1, title: "Smart Device", price: 1290000, coin: 120 },
  { id: 2, title: "Luxury Interior", price: 890000, coin: 80 },
  { id: 3, title: "Future Fashion", price: 590000, coin: 50 },
];

export default function ProductListWithCoin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => setProducts(sampleProducts), 500);
  }, []);

  const handleBuy = (product) => {
    alert(`${product.title} 구매 완료! ${product.coin} 코인 적립`);
    // 실제 API/코인 연동 코드로 대체 가능
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 px-8 md:px-20 py-12">
      {products.map((p) => (
        <div key={p.id} className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <div className="flex items-center gap-1 text-cyan-400 font-bold">
              <Coins size={18} />
              {p.coin}
            </div>
          </div>
          <div className="text-2xl font-black text-cyan-300 mb-4">{p.price.toLocaleString()} ₩</div>
          <button
            onClick={() => handleBuy(p)}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <ShoppingCart />
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
}
