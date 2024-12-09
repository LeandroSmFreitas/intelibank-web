import Button from '../../components/Button'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import SideBar from '../../components/Sidebar'
import TransactionContainer from '../../components/TransactionContainer'
import { ButtonShowType } from '../../models/enum/button'
import { TransactionType } from '../../models/enum/transaction'
import Deposit from './components/Deposit'
import Transfer from './components/Transfer'
import { useTransaction } from './hooks/transactionHook'
import * as S from './styles'

const Transaction = () => {
  const { showData, handleShowData, balance, logout } = useTransaction()
  return (
    <S.Container>
        <SideBar />
        <S.ContainerTransactions>
                <S.ContainerTitleAndButton>
                    <S.Title>Transação</S.Title>
                    <S.ContainerButton>
                        <Button text='Sair' click={logout}/>
                    </S.ContainerButton>
                </S.ContainerTitleAndButton>
                <Card title='Seu saldo' value={balance}/>
                <S.ContainerView>
                    <Button text='Transferências' click={() => handleShowData(TransactionType.TRANSACTIONS)} showType={ButtonShowType.VIEW} isSelected={showData === TransactionType.TRANSACTIONS}/>
                    <Button text='Fazer Transferencia' click={() => handleShowData(TransactionType.TRANSFER)} showType={ButtonShowType.VIEW} isSelected={showData === TransactionType.TRANSFER}/>
                    <Button text='Depositar' click={() => handleShowData(TransactionType.DEPOSIT)} showType={ButtonShowType.VIEW} isSelected={showData === TransactionType.DEPOSIT}/>
                </S.ContainerView>
                {
                  showData === TransactionType.TRANSACTIONS && <TransactionContainer title='resumo de transferência'/>
                }
                {
                  showData === TransactionType.TRANSFER && <Transfer/>
                }
                {
                  showData === TransactionType.DEPOSIT && <Deposit/>
                }
        </S.ContainerTransactions>
        <Footer />
    </S.Container>
  )
}

export default Transaction