import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Modal from "../../../../components/modal";
import { Mask } from "../../../../models/enum/input";
import { useDeposit } from "./hooks/depositHook";
import * as S from "./styles";
import QRCode from "react-qr-code";

const Deposit = () => {
    const { open, handleCloseButton, handleSubmit, onSubmit, register, errors } = useDeposit()
  return (
    <S.ContainerTransfer>
        <S.Title>Depositar</S.Title>
        <S.Divider />
        <S.ContainerInputAndButton onSubmit={handleSubmit(onSubmit)}>
            <Input title='Valor' placeholder='R$ 0,00' mask={Mask.CURRENCY} {...register("value")} error={errors.value?.message}/>
            <Button text='Depositar' type="submit"/>
        </S.ContainerInputAndButton>
        <Modal open={open} title='QR code gerado' >
            <S.ContainerModal>
                <S.TitleModal>Para realizar o depósito, efetue o pagamento via Pix escaneando o QR code abaixo</S.TitleModal>
                <QRCode
                    size={100}
                    style={{ height: "auto", maxWidth: "20%", width: "20%" }}
                    value={"pix de deposito"}
                    viewBox={`0 0 100 100`}
                />
                <Button text='Finalizar' click={() => handleCloseButton()} />
            </S.ContainerModal>
        </Modal>
    </S.ContainerTransfer>
  )
}

export default Deposit