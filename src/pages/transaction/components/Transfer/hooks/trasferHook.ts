import { useState } from "react";
import { TransferOptions } from "../../../../../models/enum/transaction";

export const useTransfer = () => {
    const [selectedValue, setSelectedValue] = useState<TransferOptions>(TransferOptions.PIX);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value as TransferOptions);
    };

    return {
        selectedValue,
        handleChange
    };
};