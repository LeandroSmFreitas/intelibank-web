

import Table from '../Table'
import * as S from './styles'

interface Props{
  lastTransaction?: boolean
  title: string
}

const TransactionContainer = ({ lastTransaction, title }:Props) => {
  return (
    <S.ContainerTransactions>
        <S.TitleTransactions>{title}</S.TitleTransactions>
        <S.Divider />
        <Table lastTransaction={lastTransaction}/>
    </S.ContainerTransactions>
  )
}

export default TransactionContainer