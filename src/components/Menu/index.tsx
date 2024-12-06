import * as S from './styles'

interface MenuProps {
    title: string;
    svg: string;
    isSelected?: boolean;
    click?: () => void;
}

const Menu = ({ title, svg, isSelected, click }:MenuProps) => {
  return (
    <S.Container onClick={click}>
        <S.Menu active={isSelected}>
            <S.MenuImage src={svg} alt={`${svg} Logo`} />
            <S.MenuTitle active={isSelected}>{title}</S.MenuTitle>
        </S.Menu>
    </S.Container>
  )
}

export default Menu