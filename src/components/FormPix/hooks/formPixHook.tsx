import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContextTransaction } from '../../../context/transaction';
import { useState } from 'react';
import { Transaction } from '../../../models/interface/transactions';
import * as S from '../styles';
import QRCode from 'react-qr-code';
import Input from '../../Input';
import Button from '../../Button';

interface TransferFormInputs {
    name: string;
    identifier: string;
    keyPix: string;
    date: string;
    value: string;
}

export const useFormPix = () => {
    const { handleAddTransaction, balance, verifyTransferPassword } = useContextTransaction();
    const [open, setOpen] = useState(false);
    const [errorBalance, setErrorBalance] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [childrenModal, setChildrenModal] = useState<JSX.Element | undefined>(undefined);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleCloseIcon = () => {
        setOpen(false);
    }

    const handleCloseButton = (data?: Transaction) => {
        console.log(data)
        data && handleAddTransaction(data);
        setOpen(false);
    }

    const transferPIXSchema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        identifier: Yup.string().required('CPF/CNPJ é obrigatório'),
        keyPix: Yup.string().required('Chave Pix é obrigatório'),
        date: Yup.string().required('Data de transferência é obrigatório'),
        value: Yup.string().required('Valor é obrigatório'),
    });
  
      const { register, handleSubmit, formState: { errors } } = useForm<TransferFormInputs>({
        resolver: yupResolver(transferPIXSchema),
      });
  
      const onSubmit: SubmitHandler<TransferFormInputs> = async (data) => {
            const cleanedValue = data.value.replace(/[^\d,.-]/g, '').replace(',', '.');
            const numericValue = parseFloat(cleanedValue);
            const CleanedValueBalance = balance.replace(/[^\d,.-]/g, '').replace(',', '.');
            const numericValueBalance = parseFloat(CleanedValueBalance);
            if(numericValue > numericValueBalance) {
                setErrorBalance(true);
                setTitleModal('Atenção');
                setChildrenModal(
                    <S.ContainerModal>
                        <S.TitleModal>o saldo de transferência não deve ser maior que o seu saldo total!</S.TitleModal>
                        <Button text='Fechar' click={() => setOpen(false)} />
                    </S.ContainerModal>
                );
                handleOpen();
            }else{
                setErrorBalance(false);
                console.log(data)
                modalPassword({
                    id: Math.floor(100000 + Math.random() * 900000).toString(),
                    name: data.name,
                    identifier: data.identifier,
                    date: data.date,
                    value: numericValue,
                    type: 'PIX',
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
                    <Input title='Senha de transferência' placeholder='Digite a sua senha de transferência' setValue={(value: string) => pass = value}/>
                    <Button text='Finalizar' click={() => handleCheckPassword(pass, data)} />
                </S.ContainerModal>
            );
            handleOpen();
      }

      const handleCheckPassword = (password: string, data: Transaction) => {
            if(verifyTransferPassword(password) === true){
                setTitleModal('QR Code gerado!');
                setChildrenModal(
                    <S.ContainerModal>
                        <S.TitleModal>Para realizar a transaferência via pix, efetue o pagamento escaneando o QR code abaixo</S.TitleModal>
                        <QRCode
                            size={100}
                            style={{ height: "auto", maxWidth: "20%", width: "20%" }}
                            value={"pix de transferência"}
                            viewBox={`0 0 100 100`}
                        />
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
        handleCloseButton,
        handleCloseIcon,
        open,
        errorBalance,
        titleModal,
        childrenModal
    };
}