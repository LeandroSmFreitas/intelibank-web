import Menu from '../Menu'
import * as S from './styles'
import DashboardSvg from "../../assets/dashboard.svg"
import TransactionSvg from "../../assets/transaction.svg"
import { useSideBar } from './hooks/sideBarHook'

const SideBar = () => {
    const { menuSelected, handleChangeMenu } = useSideBar()

    return (
        <S.Sidebar>
            <S.CompanyName>Intelibank</S.CompanyName>
            <Menu 
                title='Dashboard' 
                svg={DashboardSvg} 
                isSelected={menuSelected === "dashboard"}
                click={handleChangeMenu}
                />
            <Menu 
                title='Transação' 
                svg={TransactionSvg} 
                isSelected={menuSelected === "transaction"}
                click={handleChangeMenu}/>
        </S.Sidebar>
    )
}

export default SideBar