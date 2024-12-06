import { useState, ReactNode, createContext, useContext } from 'react'
import AuthUtils from '../utils/auth-utils';
import { User } from '../models/interface/User';
import { LoginResponse } from '../models/interface/auth';
import { SignJWT } from 'jose';
import { useNavigate } from 'react-router-dom';


interface AuthContextData{
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    createUser: (name: string, email: string, password: string, transferPassword: string) => Promise<LoginResponse>;
    logar: (email: string, password: string) => Promise<LoginResponse>;
    verifyToken: () => boolean;
    logout: () => void;
    isAuthenticated: boolean;
}

interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(AuthUtils.isAuthenticated());
    const navigate = useNavigate();

    const SECRET_KEY = new TextEncoder().encode('minha-chave-secreta');

    const createUser = async (name: string, email: string, password: string, transferPassword: string): Promise<LoginResponse> => {
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

        if (usuarios.some(user => user.email === email)) {
            return { message: 'Email já cadastrado' };
        }

        const novoUsuario: User = { name, email, password, transferPassword, balance: "0", transactions: [] };
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        const token = await new SignJWT({ email: novoUsuario.email, name: novoUsuario.name })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1w')
            .sign(SECRET_KEY);

        AuthUtils.setToken(token);

        return { message: 'Usuário criado com sucesso', token };
    }

    const logar = async (email: string, password: string): Promise<LoginResponse> => {
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(user => user.email === email && user.password === password);

        if (!usuario) {
            return { message: 'Credenciais inválidas' };
        }

        const token = await new SignJWT({ email: usuario.email, name: usuario.name })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1w')
            .sign(SECRET_KEY);

        console.log(token)

        AuthUtils.setToken(token);

        console.log(AuthUtils.getToken())

        return { message: 'Login bem-sucedido', token };
    }

    const verifyToken = (): boolean => {
        const token = AuthUtils.getToken();

        if (!token) {
            return false;
        }

        try {
            const jwt = JSON.parse(atob(token.split('.')[1]));
            const isExpired = jwt.exp * 1000 < Date.now();
            if (isExpired) throw new Error('Token expirado');
            return true;
        } catch (error) {
            logout();
            return false;
        }
    }

    const logout = () => {
        AuthUtils.removeToken();
        setIsAuthenticated(false);
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            createUser,
            logar,
            verifyToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export { useAuth, AuthProvider }