import Button from '../../components/Button'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import SideBar from '../../components/Sidebar'
import TransactionContainer from '../../components/TransactionContainer'
import { UseDashbord } from './hooks/dashboardHook'
import * as S from './styles'

const Dashboard = () => {
    const { logout, balance, balanceTransactions } = UseDashbord()


    return (
        <S.Container>
            <SideBar />
            <S.ContainerDashboard>
                <S.ContainerTitleAndButton>
                    <S.Title>Dashboard</S.Title>
                    <S.ContainerButton>
                        <Button text='Sair' click={logout}/>
                    </S.ContainerButton>
                </S.ContainerTitleAndButton>
                <S.ContainerCards>
                    <Card title='Seu saldo' value={balance}/>
                    <Card title='Total em transações' value={balanceTransactions}/>
                </S.ContainerCards>
                <TransactionContainer title='Ultimas transações' lastTransaction/>
            </S.ContainerDashboard>
            <Footer />
        </S.Container>
    )
}

export default Dashboard