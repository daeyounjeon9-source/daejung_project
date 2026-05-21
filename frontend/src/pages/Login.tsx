import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        login();

        navigate("/");
    };

    return (
        <div className="login-page">
            <div className="login-box">
                {/* LOGO */}
                <div className="login-logo">
                    <div className="logo-circle big-logo">
                        <div className="logo-inner">
                            DN
                        </div>
                    </div>
                </div>

                <h1>DAEJUNG NEXT</h1>

                <p>AI 관리자 플랫폼</p>

                <input
                    type="text"
                    placeholder="아이디"
                />

                <input
                    type="password"
                    placeholder="비밀번호"
                />

                <button onClick={handleLogin}>
                    로그인
                </button>
            </div>
        </div>
    );
}