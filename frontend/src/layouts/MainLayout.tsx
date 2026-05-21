import { Link } from "react-router-dom";
import {
    Home,
    Shield,
    ShoppingBag,
    Radio,
    Bot,
} from "lucide-react";

type Props = {
    title: string;
    children: React.ReactNode;
};

export default function MainLayout({
    title,
    children,
}: Props) {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#020b2d",
                color: "white",
            }}
        >
            <aside
                style={{
                    width: "220px",
                    background: "#06133f",
                    padding: "20px",
                    borderRight: "1px solid #1d2d68",
                }}
            >
                <h2 style={{ marginBottom: "30px" }}>DAEJUNG NEXT</h2>

                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                    }}
                >
                    <Link to="/" style={linkStyle}>
                        <Home size={18} />
                        HOME
                    </Link>

                    <Link to="/admin" style={linkStyle}>
                        <Shield size={18} />
                        ADMIN
                    </Link>

                    <Link to="/shop" style={linkStyle}>
                        <ShoppingBag size={18} />
                        SHOP
                    </Link>

                    <Link to="/ai" style={linkStyle}>
                        <Bot size={18} />
                        AI
                    </Link>

                    <Link to="/streaming" style={linkStyle}>
                        <Radio size={18} />
                        STREAMING
                    </Link>
                </nav>
            </aside>

            <main
                style={{
                    flex: 1,
                    padding: "30px",
                }}
            >
                <h1
                    style={{
                        marginBottom: "20px",
                        fontSize: "32px",
                    }}
                >
                    {title}
                </h1>

                {children}
            </main>
        </div>
    );
}

const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "10px",
    background: "#0d1d55",
};