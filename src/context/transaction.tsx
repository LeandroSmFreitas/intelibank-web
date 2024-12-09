import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User } from '../models/interface/User';
import { Transaction } from '../models/interface/transactions';
import { StringUtils } from '../utils/StringUtils';
import AuthUtils from '../utils/auth-utils';
import { useAuth } from './auth';

interface TransactionContextData {
    deposit: (amount: number) => string;
    handleGetUserBalance: () => string;
    verifyTransferPassword: (password: string) => boolean | string;
    handleAddTransaction: (transaction: Transaction) => string;
    handleGetUserTransactions: () => Transaction[];
    balance: string;
    balanceTransactions: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

const TransactionProvider = ({ children }: TransactionProviderProps) => {
    const [balance, setBalance] = useState<string>("0");
    const [balanceTransactions, setBalanceTransactions] = useState<string>("0");
    const { verifyToken } = useAuth();

    const getUserEmailFromToken = (): string | null => {
        const token = AuthUtils.getToken();

        if (!token || !verifyToken()) {
            return null;
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        return jwt.email;
    };
    
    const findUser = (email: string): { user: User | null, index: number } => {
        const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const index = usuarios.findIndex(user => user.email === email);
        return { user: usuarios[index] || null, index };
    };

    const deposit = (amount: number): string => {
        const email = getUserEmailFromToken();
        if (!email) return 'Token inválido ou expirado';

        const { user, index } = findUser(email);
        if (!user || index === -1) return 'Usuário não encontrado';

        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios[index].balance = (parseFloat(user.balance) + amount).toFixed(2);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        handleGetUserBalance();
        return 'Depósito realizado com sucesso';
    };

    const handleGetUserBalance = (): string => {
        const email = getUserEmailFromToken();
        if (!email) return 'Token inválido ou expirado';

        const { user } = findUser(email);
        const userBalance = user?.balance || "0";
        setBalance(StringUtils.formatToCurrency(userBalance));
        return userBalance;
    };

    const handleAddTransaction = (transaction: Transaction): string => {
        const email = getUserEmailFromToken();
        if (!email) return 'Token inválido ou expirado';

        const { user, index } = findUser(email);
        if (!user || index === -1) return 'Usuário não encontrado';

        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        if (!user.transactions) user.transactions = [];

        const newBalance = parseFloat(user.balance) - transaction.value;
        if (newBalance < 0) return 'Saldo insuficiente';

        user.balance = newBalance.toFixed(2);
        user.transactions.push({ ...transaction, id: crypto.randomUUID(), date: new Date().toISOString() });

        usuarios[index] = user;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        handleGetUserBalance();
        handleGetUserTransactions();

        return 'Transação registrada com sucesso';
    };

    const handleGetUserTransactions = (): Transaction[] => {
        const email = getUserEmailFromToken();
        if (!email) return [];

        const { user } = findUser(email);
        const transactions = user?.transactions || [];
        const totalTransactions = transactions.reduce((total, tx) => total + parseFloat(tx.value.toString()), 0);

        setBalanceTransactions(StringUtils.formatToCurrency(totalTransactions.toFixed(2)));
        return transactions;
    };

    const verifyTransferPassword = (password: string): boolean | string => {
        const email = getUserEmailFromToken();
        if (!email) return 'Token inválido ou expirado';

        const { user } = findUser(email);
        if (!user) return 'Usuário não encontrado';

        return user.transferPassword === password;
    };

    useEffect(() => {
        handleGetUserBalance();
        handleGetUserTransactions();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                deposit,
                handleGetUserBalance,
                handleAddTransaction,
                handleGetUserTransactions,
                balance,
                balanceTransactions,
                verifyTransferPassword,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

function useContextTransaction(): TransactionContextData {
    const context = useContext(TransactionContext);
    if (!context) {
        throw new Error('useContextTransaction must be used within a TransactionProvider');
    }
    return context;
}

export { TransactionProvider, useContextTransaction };