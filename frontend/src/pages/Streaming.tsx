import MainLayout from "../layouts/MainLayout";

export default function Streaming() {
    return (
        <MainLayout title="STREAMING">
            <section className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>현재 방송</h3>
                    <strong>245</strong>
                </div>

                <div className="dashboard-card">
                    <h3>실시간 시청자</h3>
                    <strong>82,451</strong>
                </div>

                <div className="dashboard-card">
                    <h3>스트리머</h3>
                    <strong>1,245</strong>
                </div>

                <div className="dashboard-card">
                    <h3>채팅량</h3>
                    <strong>2.8M</strong>
                </div>
            </section>
        </MainLayout>
    );
}