
import Input from '../Input'
import Button from '../Button'
import * as S from './styles'
import { useFormPix } from './hooks/formPixHook'
import Modal from '../modal'
import { Mask } from '../../models/enum/input'

const FormPix = () => {
    const { register, handleSubmit, errors, onSubmit, open, titleModal,childrenModal } = useFormPix();
  return (
    <>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.ContainerInputs>
                <Input title='Nome do favorecido' placeholder='Digite o nome do favorecido' {...register("name")} error={errors.name?.message} />
                <Input title='CPF/CNPJ' placeholder='Digite o CPF ou CNPJ' {...register("identifier")} error={errors.identifier?.message} mask={Mask.CPF_CNPJ} maxLength={18}/>
            </S.ContainerInputs>
            <Input title='Chave pix' placeholder='Digite a chave pix' {...register("keyPix")} error={errors.keyPix?.message} />
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

export default FormPix