import { forwardRef } from 'react';
import * as S from './styles'
import { StringUtils } from '../../utils/StringUtils';
import { Mask } from '../../models/enum/input';

interface InputProps {
    title: string;
    placeholder?: string;
    error?: string;
    type?: string;
    mask?: Mask;
    maxLength?: number;
    setValue?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ title, placeholder, error, type, mask, maxLength, setValue, ...rest }, ref) => {
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if(mask){
      event.target.value = StringUtils.ApplyMasks(mask, event.target.value);
    }

    if (setValue) {
      setValue(value);
    }
  };

  return (
    <S.Container>
        <S.Title>{title}</S.Title>
        <S.Input placeholder={placeholder} type={type} {...rest} ref={ref} onChange={handleInputChange} maxLength={maxLength}/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </S.Container>
  )
})

export default Input