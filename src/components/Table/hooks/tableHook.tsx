import { useEffect, useState } from "react";
import { useContextTransaction } from "../../../context/transaction";
import { Transaction } from "../../../models/interface/transactions";



export const useTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const { handleGetUserTransactions } = useContextTransaction()

    useEffect(() => {
        const data = handleGetUserTransactions()
        setTransactions(data)
    },[])

    return { transactions }
};