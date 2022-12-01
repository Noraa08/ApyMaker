import { createContext, useState } from "react";

type AuthContextProps = {
    children: React.ReactNode
}

export interface Auth {
    user: string,
    pwd: string
    roles: number[] // user, client, admin
    accessToken:string
}

export interface AuthState {
    auth?: Auth,
    setAuth:(auth: Auth) => void
}

export const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [auth, setAuth] = useState<Auth>();

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;