import MainLayout from "../layouts/MainLayout";

export default function AI() {
    return (
        <MainLayout title="AI CENTER">
            <section className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>AI 요청</h3>
                    <strong>1.2M</strong>
                </div>

                <div className="dashboard-card">
                    <h3>분석 성공률</h3>
                    <strong>99.8%</strong>
                </div>

                <div className="dashboard-card">
                    <h3>GPU 서버</h3>
                    <strong>24</strong>
                </div>

                <div className="dashboard-card">
                    <h3>보안 분석</h3>
                    <strong>SAFE</strong>
                </div>
            </section>
        </MainLayout>
    );
}