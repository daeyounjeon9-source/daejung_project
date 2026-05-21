import { createContext, useContext, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);