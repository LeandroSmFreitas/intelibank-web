import { ButtonShowType } from '../../models/enum/button';
import * as S from './styles'

interface ButtonProps {
    text: string;
    click?: () => void;
    type?: 'button' | 'submit' | 'reset';
    showType?: ButtonShowType;
    isSelected?: boolean;
}

const Button = ({ text, click, type, showType = ButtonShowType.BUTTON, isSelected }: ButtonProps) => {
  return (
    <S.Container onClick={click} type={type} showType={showType} isSelected={isSelected}>
        <S.Text showType={showType}>{text}</S.Text>
    </S.Container>
  )
}

export default Button