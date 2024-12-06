import { useState } from "react";
import { TransferOptions } from "../../../../../models/enum/transaction";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

interface TransferFormInputs {
    name: string;
    identifier: string;
    bank?: string;
    agency?: string;
    account?: string;
    keyPix?: string;
    date: string;
    value: string;
}

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