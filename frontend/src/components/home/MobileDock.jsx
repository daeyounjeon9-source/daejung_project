import React from "react";

const MobileDock = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-black border-t border-cyan-500 z-50">

            <div className="grid grid-cols-4 text-center">

                <button className="py-4 hover:bg-cyan-500/20 transition">
                    홈
                </button>

                <button className="py-4 hover:bg-cyan-500/20 transition">
                    라이브
                </button>

                <button className="py-4 hover:bg-cyan-500/20 transition">
                    AI
                </button>

                <button className="py-4 hover:bg-cyan-500/20 transition">
                    마이
                </button>

            </div>

        </div>
    );
};

export default MobileDock;