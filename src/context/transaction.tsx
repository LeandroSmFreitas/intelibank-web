import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User } from '../models/interface/User';
import { Transaction } from '../models/interface/transactions';
import { StringUtils } from '../utils/StringUtils';
import AuthUtils from '../utils/auth-utils';
import { useAuth } from './auth';


interface TransactionContextData{
    deposit: (amount: number) => string;
    handleGetUserBalance: () => string;
    verifyTransferPassword: (password: string) => boolean | string;
    handleAddTransaction: (transaction: Transaction) => string;
    handleGetUserTransactions: () => Transaction[];
    balance: string;
    balanceTransactions: string;
}

interface TransactionProviderProps{
    children: ReactNode
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

const TransactionProvider = ({ children }: TransactionProviderProps) => {
    const [balance, setBalance] = useState<string>("0");
    const [balanceTransactions, setBalanceTransactions] = useState<string>("0");
    const { verifyToken } = useAuth();
    
    const deposit = (amount: number): string => {
        const token = AuthUtils.getToken();
    
        if (!token || !verifyToken()) {
            return 'Token inválido ou expirado';
        }
    
        const jwt = JSON.parse(atob(token.split('.')[1]));
        const email = jwt.email;
    
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuarioIndex = usuarios.findIndex(user => user.email === email);
    
        if (usuarioIndex === -1) {
            return 'Usuário não encontrado';
        }
    
        usuarios[usuarioIndex].balance = (parseFloat(usuarios[usuarioIndex].balance) + amount).toString();
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        handleGetUserBalance();
        return 'Depósito realizado com sucesso';
    };

    const handleGetUserBalance = (): string => {
        const token = AuthUtils.getToken();
    
        if (!token || !verifyToken()) {
            return 'Token inválido ou expirado';
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        const email = jwt.email;
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(user => user.email === email);
    
        if (!usuario || !usuario.balance) {
            return "0";
        }

        setBalance(StringUtils.formatToCurrency(balance));
    
        return usuario.balance;
    };

    const handleAddTransaction = (transaction: Transaction): string => {
        const token = AuthUtils.getToken();
    
        if (!token || !verifyToken()) {
            return 'Token inválido ou expirado';
        }
    
        const jwt = JSON.parse(atob(token.split('.')[1]));
        const email = jwt.email;
    
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuarioIndex = usuarios.findIndex(user => user.email === email);
    
        if (usuarioIndex === -1) {
            return 'Usuário não encontrado';
        }
    
        const usuario = usuarios[usuarioIndex];
        if (!usuario.transactions) {
            usuario.transactions = [];
        }

        usuario.balance = (parseFloat(usuario.balance) - transaction.value).toString();
    
        usuario.transactions.push({ ...transaction, id: crypto.randomUUID(), date: new Date().toISOString() });
    
        usuarios[usuarioIndex] = usuario;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
        return 'Transação registrada com sucesso';
    };

    const handleGetUserTransactions = (): Transaction[] => {
        const token = AuthUtils.getToken();
    
        if (!token || !verifyToken()) {
            return [];
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        const email = jwt.email;
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(user => user.email === email);
    
        if (!usuario || !usuario.transactions) {
            return [];
        }

        setBalanceTransactions(StringUtils.formatToCurrency(calculateTotalTransactions(usuario.transactions).toString()));
    
        return usuario.transactions;
    };

    useEffect(() => {
        const balance = handleGetUserBalance();
            setBalance(StringUtils.formatToCurrency(balance));
    }
    , [handleGetUserBalance]);

    const calculateTotalTransactions = (transactions: Transaction[]): number => {
        return transactions.reduce((total, transaction) => total + parseFloat(transaction?.value?.toString()), 0);
    };

    const verifyTransferPassword = (password: string): boolean | string => {
        const token = AuthUtils.getToken();

        if (!token || !verifyToken()) {
            return 'Token inválido ou expirado';
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        const email = jwt.email;

        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuarioIndex = usuarios.findIndex(user => user.email === email);

        if (usuarioIndex === -1) {
            return 'Usuário não encontrado';
        }

        const usuario = usuarios[usuarioIndex];

        // Verifica a senha de transferência
        if (usuario.transferPassword !== password) {
            return false;
        }

        return true;
    }

    return (
        <TransactionContext.Provider value={{
            deposit,
            handleGetUserBalance,
            handleAddTransaction,
            handleGetUserTransactions,
            balance,
            balanceTransactions,
            verifyTransferPassword,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

function useContextTransaction(): TransactionContextData {
    const context = useContext(TransactionContext)
    return context
}

export { TransactionProvider, useContextTransaction };
