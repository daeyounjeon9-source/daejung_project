import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import AI from "./pages/AI";
import Streaming from "./pages/Streaming";

import MainLayout from "./layouts/MainLayout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <MainLayout title="HOME">
                            <Home />
                        </MainLayout>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <MainLayout title="ADMIN">
                            <Admin />
                        </MainLayout>
                    }
                />

                <Route
                    path="/shop"
                    element={
                        <MainLayout title="SHOP">
                            <Shop />
                        </MainLayout>
                    }
                />

                <Route
                    path="/ai"
                    element={
                        <MainLayout title="AI">
                            <AI />
                        </MainLayout>
                    }
                />

                <Route
                    path="/streaming"
                    element={
                        <MainLayout title="STREAMING">
                            <Streaming />
                        </MainLayout>
                    }
                />

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}