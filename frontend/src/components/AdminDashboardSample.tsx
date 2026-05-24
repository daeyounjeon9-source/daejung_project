import React, { useState } from "react";
import { Users, ShoppingBag, Activity, ShieldCheck } from "lucide-react";

const sampleStats = {
  users: 24892,
  orders: 1284,
  security: "SAFE",
  ai: "ACTIVE"
};

export default function AdminDashboardSample() {
  const [stats, setStats] = useState(sampleStats);

  const handleRefresh = () => {
    // 실제 API fetch 시 교체 가능
    setStats({
      users: stats.users + Math.floor(Math.random()*20),
      orders: stats.orders + Math.floor(Math.random()*10),
      security: stats.security,
      ai: stats.ai
    });
  };

  return (
    <div className="p-8 md:px-20 bg-black text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-black">Admin Dashboard</h1>
        <button
          onClick={handleRefresh}
          className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl font-bold"
        >
          Refresh Stats
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
          <Users className="text-cyan-300 mb-2" size={36} />
          <div className="text-2xl font-black">{stats.users}</div>
          <div className="text-gray-400 text-sm">Users Online</div>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
          <ShoppingBag className="text-cyan-300 mb-2" size={36} />
          <div className="text-2xl font-black">{stats.orders}</div>
          <div className="text-gray-400 text-sm">Orders</div>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
          <ShieldCheck className="text-cyan-300 mb-2" size={36} />
          <div className="text-2xl font-black">{stats.security}</div>
          <div className="text-gray-400 text-sm">Security Status</div>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
          <Activity className="text-cyan-300 mb-2" size={36} />
          <div className="text-2xl font-black">{stats.ai}</div>
          <div className="text-gray-400 text-sm">AI Analysis</div>
        </div>
      </div>
    </div>
  );
}
