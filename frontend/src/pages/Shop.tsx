import MainLayout from "../layouts/MainLayout";

export default function Shop() {
    return (
        <MainLayout title="SHOP">
            <section className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>오늘 주문</h3>
                    <strong>1,245</strong>
                </div>

                <div className="dashboard-card">
                    <h3>결제 완료</h3>
                    <strong>₩82M</strong>
                </div>

                <div className="dashboard-card">
                    <h3>배송 준비</h3>
                    <strong>845</strong>
                </div>

                <div className="dashboard-card">
                    <h3>리뷰 등록</h3>
                    <strong>3,245</strong>
                </div>
            </section>
        </MainLayout>
    );
}