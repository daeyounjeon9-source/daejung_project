import React from "react";

const NotificationCenter = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                실시간 알림 센터
            </h2>

            <div className="space-y-4">

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-5">
                    신규 글로벌 주문이 발생했습니다.
                </div>

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-5">
                    AI 마케팅 엔진이 자동 실행되었습니다.
                </div>

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-5">
                    라이브 방송 예약이 등록되었습니다.
                </div>

            </div>

        </div>
    );
};

export default NotificationCenter;