

import React from 'react'
import Input from '../Input'
import Button from '../Button'
import * as S from './styles'
import { useFormTed } from './hooks/formTedHook'
import { Mask } from '../../models/enum/input'
import Modal from '../modal'

const FormTed = () => {
    const { register, handleSubmit, errors, onSubmit, titleModal, childrenModal, open } = useFormTed();
    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContainerInputs>
                    <Input title='Nome do favorecido' placeholder='Digite o nome do favorecido' {...register("name")} error={errors.name?.message} />
                    <Input title='CPF/CNPJ' placeholder='Digite o CPF ou CNPJ' {...register("identifier")} error={errors.identifier?.message} mask={Mask.CPF_CNPJ} maxLength={18}/>
                </S.ContainerInputs>
                <S.ContainerInputs>
                    <Input title='Banco' placeholder='Digite o nome do banco' {...register("bank")} error={errors.bank?.message} />
                    <Input title='Agência' placeholder='Digite a agência' {...register("agency")} error={errors.agency?.message} />
                    <Input title='Conta' placeholder='Digite a conta' {...register("account")} error={errors.account?.message} />
                </S.ContainerInputs>
                <S.ContainerInputs>
                    <Input title='Valor' placeholder='Digite o valor da transferência' {...register("value")} error={errors.value?.message} mask={Mask.CURRENCY}/>
                    <Input title='Data da transferência' type='date' placeholder='Digite a data da transferência' {...register("date")} error={errors.date?.message} />
                </S.ContainerInputs>
                <Button text='Transferir' type="submit" click={() => { } } />
            </S.Form>
            <Modal open={open} title={titleModal} >
                {childrenModal}
            </Modal>
        </>
    )
}

export default FormTed