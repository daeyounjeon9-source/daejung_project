import React from "react";

const ControlCenter = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                통합 컨트롤 센터
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        실시간 운영
                    </h3>

                    <p className="text-gray-400">
                        플랫폼 전체 운영 상태 제어
                    </p>
                </div>

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        서버 상태 감시
                    </h3>

                    <p className="text-gray-400">
                        트래픽 및 시스템 자동 감시
                    </p>
                </div>

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        글로벌 네트워크
                    </h3>

                    <p className="text-gray-400">
                        국가별 연결 상태 모니터링
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ControlCenter;