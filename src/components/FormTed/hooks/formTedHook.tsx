import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContextTransaction } from '../../../context/transaction';
import { Transaction } from '../../../models/interface/transactions';
import * as S from '../styles';
import { useState } from 'react';
import Input from '../../Input';
import Button from '../../Button';

interface TransferFormInputs {
    name: string;
    identifier: string;
    bank: string;
    agency: string;
    account: string;
    date: string;
    value: string;
}

export const useFormTed = () => {
    const [titleModal, setTitleModal] = useState('');
    const [childrenModal, setChildrenModal] = useState<JSX.Element | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const { handleAddTransaction, verifyTransferPassword, balance } = useContextTransaction();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleCloseButton = (data?: Transaction) => {
        data && handleAddTransaction(data);
        setOpen(false);
    }

    const transferTEDSchema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        identifier: Yup.string().required('CPF/CNPJ é obrigatório'),
        bank: Yup.string().required('Banco é obrigatório'),
        agency: Yup.string().required('Agência é obrigatório'),
        account: Yup.string().required('Conta é obrigatório'),
        date: Yup.string().required(),
        value: Yup.string().required('Valor é obrigatório'),
    });
  
      const { register, handleSubmit, formState: { errors } } = useForm<TransferFormInputs>({
        resolver: yupResolver(transferTEDSchema),
      });
  
      const onSubmit: SubmitHandler<TransferFormInputs> = async (data) => {
            const cleanedValue = data.value.replace(/[^\d,.-]/g, '').replace(',', '.');
            const numericValue = parseFloat(cleanedValue);
            const CleanedValueBalance = balance.replace(/[^\d,.-]/g, '').replace(',', '.');
            const numericValueBalance = parseFloat(CleanedValueBalance);
            if(numericValue > numericValueBalance) {
                setTitleModal('Atenção');
                setChildrenModal(
                    <S.ContainerModal>
                        <S.TitleModal>o saldo de transferência não deve ser maior que o seu saldo total!</S.TitleModal>
                        <Button text='Fechar' click={() => setOpen(false)} />
                    </S.ContainerModal>
                );
                handleOpen();
            }else{
                modalPassword({
                    id: Math.floor(100000 + Math.random() * 900000).toString(),
                    name: data.name,
                    identifier: data.identifier,
                    bank: data.bank,
                    agency: data.agency,
                    account: data.account,
                    date: data.date,
                    value: numericValue,
                    type: 'TED',
                    code: Math.floor(100000 + Math.random() * 900000).toString(),
                });
            }
      };

        const modalPassword = (data: Transaction) => {
            let pass = ''
            setTitleModal('Senha de transferência');
            setChildrenModal(
                <S.ContainerModal>
                    <S.TitleModal>Para realizar a ação você deve confirmar a sua senha de transferência</S.TitleModal>
                    <Input title='Senha de transferência' type='password' placeholder='Digite a sua senha de transferência' setValue={(value: string) => pass = value}/>
                    <Button text='Finalizar' click={() => handleCheckPassword(pass, data)} />
                </S.ContainerModal>
            );
            handleOpen();
        }

        const handleCheckPassword = (password: string, data: Transaction) => {
                if(verifyTransferPassword(password) === true){
                    setTitleModal('Operação concluida!');
                    setChildrenModal(
                        <S.ContainerModal>
                            <S.TitleModal>Sua operação foi realizada!</S.TitleModal>
                            <Button text='Finalizar' click={() => handleCloseButton(data)} />
                        </S.ContainerModal>
                    );
                }
        }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        titleModal,
        childrenModal,
        open
    };
}