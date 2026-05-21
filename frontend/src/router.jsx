import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfinityCore from "./components/home/InfinityCore";

import Live from "./pages/Live";
import Shop from "./pages/Shop";
import Streaming from "./pages/Streaming";
import Login from "./pages/Login";

import AdminMonitor from "./components/admin/AdminMonitor";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InfinityCore />} />
        <Route path="/live" element={<Live />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stream" element={<Streaming />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminMonitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;