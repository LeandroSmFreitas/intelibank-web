import { useEffect } from "react";
import { useAuth } from "../../../context/auth";
import { useContextTransaction } from "../../../context/transaction";


export const UseDashbord = () => {
    const { logout } = useAuth();
    const { balance, balanceTransactions, handleGetUserTransactions } = useContextTransaction();

    useEffect(() => {
        handleGetUserTransactions();
    },[]);

    return {
        logout,
        balance,
        balanceTransactions
    }
}