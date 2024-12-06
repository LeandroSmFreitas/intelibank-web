import { useState } from "react";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContextTransaction } from "../../../../../context/transaction";

interface depositFormInputs {
    value: string;
}

export const useDeposit = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<number>(0);
    const { deposit } = useContextTransaction();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleCloseButton = () => {
        deposit(value)
        setOpen(false);
    }

    const depositSchema = Yup.object().shape({
        value: Yup.string().required('Valor é obrigatório'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<depositFormInputs>({
        resolver: yupResolver(depositSchema)
    });

    const onSubmit: SubmitHandler<depositFormInputs> = async (data) => {
        const cleanedValue = data.value.replace(/[^\d,.-]/g, '').replace(',', '.');
        const numericValue = parseFloat(cleanedValue);
        setValue(numericValue)
        handleOpen();
    };

    return {
        open,
        handleOpen,
        handleCloseButton,
        register,
        handleSubmit,
        onSubmit,
        errors,
    };

}