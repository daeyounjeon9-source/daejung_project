import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout title="HOME">
            {/* FLOATING PANEL */}
            <div className="floating-ai-panel">
                <div className="floating-header">
                    <div className="mini-dot blue"></div>

                    <span>AI LIVE CORE</span>
                </div>

                <div className="floating-body">
                    <div className="floating-item">
                        <p>AI 분석 상태</p>

                        <strong>RUNNING</strong>
                    </div>

                    <div className="floating-item">
                        <p>실시간 감지</p>

                        <strong>245 EVENT</strong>
                    </div>

                    <div className="floating-item">
                        <p>보안 상태</p>

                        <strong>SAFE</strong>
                    </div>
                </div>
            </div>

            {/* ALERT */}
            <section className="alert-banner">
                <div className="alert-left">
                    <div className="status-dot"></div>

                    <span>
                        AI 시스템 정상 작동중
                    </span>
                </div>

                <div className="alert-right">
                    LIVE SECURITY MONITOR
                </div>
            </section>

            {/* LIVE STATUS */}
            <section className="top-status-grid">
                <div className="live-status-card">
                    <div className="status-dot"></div>

                    <div>
                        <h3>실시간 서버 상태</h3>
                        <strong>ONLINE</strong>
                    </div>
                </div>

                <div className="live-status-card">
                    <div className="status-dot green"></div>

                    <div>
                        <h3>AI 엔진</h3>
                        <strong>ACTIVE</strong>
                    </div>
                </div>

                <div className="live-status-card">
                    <div className="status-dot blue"></div>

                    <div>
                        <h3>실시간 사용자</h3>
                        <strong>18,245</strong>
                    </div>
                </div>

                <div className="live-status-card">
                    <div className="status-dot purple"></div>

                    <div>
                        <h3>스트리밍 상태</h3>
                        <strong>245 LIVE</strong>
                    </div>
                </div>
            </section>

            {/* DASHBOARD */}
            <section className="dashboard-grid">
                <div className="dashboard-card large-card">
                    <h3>AI 실시간 분석</h3>

                    <div className="chart-area">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="dashboard-card circle-card">
                    <h3>AI 처리률</h3>

                    <div className="circle-progress">
                        <div className="circle-inner">
                            99%
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>GPU 서버</h3>

                    <strong>24 ACTIVE</strong>

                    <div className="server-line">
                        <div className="server-fill"></div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>CPU 상태</h3>

                    <strong>82%</strong>

                    <div className="server-line">
                        <div className="server-fill cpu"></div>
                    </div>
                </div>
            </section>

            {/* MONITOR */}
            <section className="monitor-grid">
                <div className="monitor-card">
                    <h3>AI 요청 처리</h3>

                    <strong>1.2M</strong>

                    <p>
                        초당 실시간 분석 처리중
                    </p>
                </div>

                <div className="monitor-card">
                    <h3>데이터 전송량</h3>

                    <strong>824TB</strong>

                    <p>
                        글로벌 네트워크 연결
                    </p>
                </div>

                <div className="monitor-card">
                    <h3>보안 감지</h3>

                    <strong>SAFE</strong>

                    <p>
                        위협 탐지 없음
                    </p>
                </div>
            </section>

            {/* LOG PANEL */}
            <section className="log-panel">
                <div className="log-header">
                    SYSTEM LOG
                </div>

                <div className="log-item">
                    [INFO] AI 분석 엔진 시작
                </div>

                <div className="log-item">
                    [LIVE] 스트리밍 연결 성공
                </div>

                <div className="log-item">
                    [SECURITY] 위협 탐지 없음
                </div>

                <div className="log-item">
                    [SHOP] 결제 처리 완료
                </div>
            </section>
        </MainLayout>
    );
}