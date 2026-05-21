import MainLayout from "../layouts/MainLayout";

export default function Admin() {
    return (
        <MainLayout title="ADMIN">
            <section className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>회원 수</h3>
                    <strong>245,000</strong>
                </div>

                <div className="dashboard-card">
                    <h3>신규 가입</h3>
                    <strong>+2,845</strong>
                </div>

                <div className="dashboard-card">
                    <h3>활성 서버</h3>
                    <strong>12</strong>
                </div>

                <div className="dashboard-card">
                    <h3>보안 상태</h3>
                    <strong>SAFE</strong>
                </div>
            </section>
        </MainLayout>
    );
}