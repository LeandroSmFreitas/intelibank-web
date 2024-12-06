import { useState } from "react";
import { TransactionType } from "../../../models/enum/transaction";
import { useContextTransaction } from "../../../context/transaction";

export const useTransaction = () => {
    const [showData, setShowData] = useState<TransactionType>(TransactionType.TRANSACTIONS);
    const { balance } = useContextTransaction();

    const handleShowData = (type: TransactionType) => {
        setShowData(type);
    }

    return {
        showData,
        handleShowData,
        balance
    }

}