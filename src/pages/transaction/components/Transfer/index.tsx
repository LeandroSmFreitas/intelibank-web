import Radio from '@mui/material/Radio';
import FormPix from '../../../../components/FormPix';
import FormTed from '../../../../components/FormTed';
import { TransferOptions } from '../../../../models/enum/transaction';
import { useTransfer } from './hooks/trasferHook';
import * as S from './styles';

const Transfer = () => {
    const { selectedValue, handleChange } = useTransfer()

    return (
        <S.ContainerTransfer>
            <S.Title>Transferir</S.Title>
            <S.Divider />
            <S.ContainerAllOptions>
                <S.ContainerOption>
                    <Radio
                        checked={selectedValue === TransferOptions.PIX}
                        onChange={handleChange}
                        value={TransferOptions.PIX}
                        name="radio-pix"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <S.TextOption>Transferência PIX</S.TextOption>
                </S.ContainerOption>
                <S.ContainerOption>
                    <Radio
                        checked={selectedValue === TransferOptions.TED}
                        onChange={handleChange}
                        value={TransferOptions.TED}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <S.TextOption>Transferência TED</S.TextOption>
                </S.ContainerOption>
            </S.ContainerAllOptions>
            {selectedValue === TransferOptions.TED && <FormTed/>}
            {selectedValue === TransferOptions.PIX && <FormPix/>}
        </S.ContainerTransfer>
  )
}

export default Transfer