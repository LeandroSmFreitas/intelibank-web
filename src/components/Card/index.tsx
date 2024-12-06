import * as S from "./styles"

interface CardProps {
    title: string;
    value: string;
}

const Card = ({ title, value }:CardProps) => {
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
        <S.Divider />
        <S.Value>{value}</S.Value>
    </S.Container>
  )
}

export default Card